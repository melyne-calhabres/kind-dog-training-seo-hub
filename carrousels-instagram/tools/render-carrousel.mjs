#!/usr/bin/env node
/**
 * Carrousel Instagram renderer : spec.json -> N PNG (1080x1350).
 *
 * Usage :
 *   node tools/render-carrousel.mjs carrousels-instagram/<slug>/spec.json
 *
 * Lit un spec, remplit les templates HTML dans `tools/templates/`,
 * écrit les HTML rendus dans `<slug>/slides/slide-N.html`,
 * puis screenshote chaque HTML en PNG 1080x1350 dans `<slug>/slides/slide-N.png`.
 *
 * Résolution d'assets (cascade) :
 *   1. <slug>/assets/<nom>
 *   2. carrousels-instagram/_shared/assets/<nom>
 *   3. placeholder rendu dans la slide
 *
 * Prérequis : npm install (tire playwright + chromium via postinstall)
 */

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, resolve, join, basename, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const CARROUSELS_ROOT = resolve(HERE, '..');
const TEMPLATES_DIR = join(HERE, 'templates');
const SHARED_ASSETS = join(CARROUSELS_ROOT, '_shared', 'assets');
const SHARED_ICONS = join(CARROUSELS_ROOT, '_shared', 'icons');

const SLIDE_W = 1080;
const SLIDE_H = 1350;

/* ----------------------------- utils ----------------------------- */

function readTemplate(name) {
  return readFileSync(join(TEMPLATES_DIR, name), 'utf8');
}

/**
 * Rendu Mustache-like minimaliste : {{var}}, {{{var}}} (raw),
 * {{#section}}...{{/section}} (truthy), {{^section}}...{{/section}} (falsy),
 * {{#array}}...{{/array}} avec {{.}} pour l'item courant.
 * Suffisant pour nos templates simples ; pas de dépendance externe.
 */
function render(tpl, data) {
  const sectionRe = /\{\{([#^])([\w.]+)\}\}([\s\S]*?)\{\{\/\2\}\}/g;
  let out = tpl;
  let prev;
  do {
    prev = out;
    out = out.replace(sectionRe, (_, kind, key, inner) => {
      const val = data[key];
      const truthy = Array.isArray(val) ? val.length > 0 : !!val;
      if (kind === '^') return truthy ? '' : render(inner, data);
      if (Array.isArray(val)) {
        return val.map((item) => {
          if (item !== null && typeof item === 'object') return render(inner, { ...data, ...item });
          return render(inner, { ...data, '.': item });
        }).join('');
      }
      if (val && typeof val === 'object') return render(inner, { ...data, ...val });
      return truthy ? render(inner, data) : '';
    });
  } while (out !== prev);

  out = out.replace(/\{\{\{([\w.]+)\}\}\}/g, (_, k) => data[k] ?? '');
  out = out.replace(/\{\{([\w.]+)\}\}/g, (_, k) => {
    const v = data[k];
    if (v == null) return '';
    return String(v).replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  });
  return out;
}

/**
 * Résout une valeur d'icône en HTML prêt à injecter.
 * - Nom kebab-case (`eclair`, `chien-silhouette`) → inline SVG depuis _shared/icons/
 * - Toute autre valeur (emoji, texte) → renvoyée telle quelle, échappée
 * - Vide → null
 */
function resolveIcon(value) {
  if (!value) return null;
  const isSlug = /^[a-z0-9][a-z0-9-]*$/.test(value);
  if (isSlug) {
    const p = join(SHARED_ICONS, `${value}.svg`);
    if (existsSync(p)) return readFileSync(p, 'utf8');
    console.warn(`  ⚠ Icône introuvable : ${value}.svg (fallback texte)`);
  }
  return String(value).replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function resolveAsset(name, specDir) {
  if (!name) return null;
  if (name.includes('/') || name.includes('\\')) {
    const p = resolve(specDir, name);
    return existsSync(p) ? p : null;
  }
  const candidates = [
    join(specDir, 'assets', name),
    join(SHARED_ASSETS, name),
  ];
  return candidates.find(existsSync) ?? null;
}

/* ----------------------------- build ----------------------------- */

function pad2(n) { return String(n).padStart(2, '0'); }

function buildProgressDots(index, total) {
  return Array.from({ length: total }, (_, i) => ({ isActive: i === index }));
}

function buildCoverData(slide, ctx) {
  return {
    surface: slide.surface ?? 'cream',
    eyebrow: slide.eyebrow ?? '',
    title: slide.title ?? '',
    titleSize: slide.titleSize ?? 'display',
    subtitle: slide.subtitle ?? '',
    totalSlides: pad2(ctx.total),
  };
}

const PORTRAIT_ASSET = 'bulle-melyne-et-ramsey-pattes-blanches.webp';

function buildSlideData(slide, ctx) {
  const format = slide.format ?? 'title-subtitle';
  // Slide finale CTA : portrait Mélyne+Ramsey forcé, non modifiable via spec.
  const visualName = format === 'cta' ? PORTRAIT_ASSET : slide.visual;
  const asset = resolveAsset(visualName, ctx.specDir);
  const hasPortrait = format === 'cta' && !!asset;
  const columns = slide.columns ?? {};
  return {
    hasPortrait,
    surface: slide.surface ?? 'cream',
    eyebrow: slide.eyebrow ?? '',
    center: slide.center ?? (format === 'hero' || format === 'quote' || format === 'stat'),
    isHero: format === 'hero',
    isTitleSubtitle: format === 'title-subtitle',
    isList: format === 'list',
    isCta: format === 'cta',
    isQuote: format === 'quote',
    isStat: format === 'stat',
    isComparison: format === 'comparison',
    isChecklist: format === 'checklist',
    text: slide.text ?? '',
    title: slide.title ?? '',
    titleSize: slide.titleSize ?? 'lg',
    subtitle: slide.subtitle ?? '',
    body: slide.body ?? '',
    cta: slide.cta ?? '',
    signature: slide.signature ?? '',
    // quote
    quote: slide.quote ?? slide.text ?? '',
    attribution: slide.attribution ?? '',
    // stat
    stat: slide.stat ?? '',
    statLabel: slide.statLabel ?? '',
    statContext: slide.statContext ?? slide.subtitle ?? '',
    // comparison
    left: { title: columns.leftTitle ?? '', items: columns.leftItems ?? [] },
    right: { title: columns.rightTitle ?? '', items: columns.rightItems ?? [] },
    slideNumber: ctx.index + 1,
    totalSlides: ctx.total,
    slideNumberPadded: pad2(ctx.index + 1),
    totalSlidesPadded: pad2(ctx.total),
    progressDots: buildProgressDots(ctx.index, ctx.total),
    items: (slide.items ?? []).map((it) => {
      const raw = typeof it === 'string' ? { text: it } : it;
      const iconHtml = resolveIcon(raw.icon);
      const isOk = raw.kind === 'ok';
      const isKo = raw.kind === 'ko';
      return { ...raw, iconHtml, isOk, isKo };
    }),
    visual: visualName ? {
      name: visualName,
      hasImage: !!asset,
      imagePath: asset ? pathToFileURL(asset).href : '',
    } : null,
  };
}

/* ----------------------------- main ----------------------------- */

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage :');
    console.error('  npm run render <slug>');
    console.error('  npm run render <slug>/spec.json');
    console.error('  node tools/render-carrousel.mjs <chemin/vers/spec.json>');
    process.exit(2);
  }

  let specAbs;
  const direct = resolve(arg);
  if (existsSync(direct) && statSync(direct).isFile()) {
    specAbs = direct;
  } else {
    const asSlugFromRoot = join(CARROUSELS_ROOT, arg, 'spec.json');
    const asSlugFromCwd = join(process.cwd(), arg, 'spec.json');
    if (existsSync(asSlugFromRoot)) specAbs = asSlugFromRoot;
    else if (existsSync(asSlugFromCwd)) specAbs = asSlugFromCwd;
    else {
      console.error(`Spec introuvable. Cherché :\n  ${direct}\n  ${asSlugFromRoot}\n  ${asSlugFromCwd}`);
      process.exit(2);
    }
  }
  const spec = JSON.parse(readFileSync(specAbs, 'utf8'));
  const specDir = dirname(specAbs);
  const slidesDir = join(specDir, 'slides');
  mkdirSync(slidesDir, { recursive: true });

  const coverTpl = readTemplate('cover.html');
  const slideTpl = readTemplate('slide.html');

  copyFileSync(join(TEMPLATES_DIR, '_base.css'), join(slidesDir, '_base.css'));
  copyFileSync(join(TEMPLATES_DIR, 'colors_and_type.css'), join(slidesDir, 'colors_and_type.css'));

  const total = spec.slides.length;
  const htmlPaths = [];

  spec.slides.forEach((slide, index) => {
    const ctx = { specDir, index, total };
    const isCover = index === 0;
    const html = isCover
      ? render(coverTpl, buildCoverData(slide, ctx))
      : render(slideTpl, buildSlideData(slide, ctx));
    const htmlPath = join(slidesDir, `slide-${index + 1}.html`);
    writeFileSync(htmlPath, html, 'utf8');
    htmlPaths.push(htmlPath);
  });

  console.log(`HTML écrits (${htmlPaths.length}) dans ${relative(CARROUSELS_ROOT, slidesDir)}`);

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: { width: SLIDE_W, height: SLIDE_H },
      deviceScaleFactor: 2,
    });
    for (const htmlPath of htmlPaths) {
      const page = await context.newPage();
      await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
      const pngPath = htmlPath.replace(/\.html$/, '.png');
      await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: SLIDE_W, height: SLIDE_H }, omitBackground: false });
      console.log(`  ${relative(CARROUSELS_ROOT, pngPath)}`);
      await page.close();
    }
    await context.close();
  } finally {
    await browser.close();
  }

  console.log('Fait.');
}

main().catch((err) => { console.error(err); process.exit(1); });
