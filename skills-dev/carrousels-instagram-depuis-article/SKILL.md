---
name: carrousels-instagram-depuis-article
description: "Skill de déclinaison d'un article publié en un ou plusieurs carrousels Instagram. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande de tirer un carrousel d'un article, décliner un article en carrousels, produire un carrousel Instagram depuis un article, ou mentionne un fichier de articles/ avec l'intention d'en faire un carrousel Insta. Déclencher pour tout message contenant : \"décliner l'article en carrousels\", \"faire un carrousel à partir de\", \"carrousel Instagram depuis l'article\", \"tire-moi un carrousel\", \"créer un carrousel Insta depuis\", ou toute demande qui suit logiquement la publication d'un article et vise la production d'un carrousel Instagram. Si l'utilisateur dit \"cet article est en ligne, on en fait un carrousel\" ou \"propose-moi un carrousel à partir de [article]\", ce skill est pertinent."
---

# Carrousels Instagram depuis article — Déclinaison d'un article en carrousels

## Objectif

Prendre un article publié (dans `articles/`) et en tirer un ou plusieurs carrousels Instagram, prêts à être imprimés en PNG et publiés. Chaque carrousel = un nom + un `spec.json` qui décrit chaque slide + une description Instagram + le rendu HTML/PNG de chaque slide.

Différence de fond avec les réels (skill `reels-instagram-depuis-article`) : le carrousel s'adresse d'abord à l'audience qui suit déjà Mélyne. L'enjeu n'est pas la découverte, c'est la conversation et la conversion vers un suivi. Les carrousels doivent nourrir la relation, faire réfléchir, susciter des sauvegardes/commentaires (relance dans la description), et proposer une prise de suivi (CTA dans la slide finale).

## Prérequis

Avant toute chose, lire :

1. Les fichiers de référence de la marque à la racine du projet :
   - `identite-de-marque.md`
   - `ton-et-style.md`
   - `audience-cible.md`
   - `ligne-editoriale.md`
2. Le `CLAUDE.md` du projet pour les règles non-négociables.
3. L'article source demandé, en entier.
4. `carrousels-instagram/INDEX.md` et 2 à 3 carrousels existants s'il y en a. Si le dossier est vide, s'appuyer sur `descriptions-reels-instagram/` (voix Instagram déjà calibrée).
5. `carrousels-instagram/README.md` (installation/utilisation du pipeline) et `carrousels-instagram/tools/README-spec.md` (structure du `spec.json` et champs disponibles).

## Règles non-négociables

Reprises du `CLAUDE.md` et de `ton-et-style.md` :

- **Tutoiement systématique** sur Instagram. Jamais « vous ».
- **Jamais** les termes « éducation positive », « renforcement positif », « méthode coercitive », ni aucun terme qui catégorise l'approche dans un courant étiqueté.
- **Aucun fait inventé.** Chiffres, cas clients, races, protocoles : tout provient de l'article source.
- **Bannis** : plonger, tirer parti, robuste, fluide, holistique, exhaustif, pivotal, méticuleux, transformateur, embrasser, en constante évolution, tapisserie, paysage/royaume comme métaphores, afin de, au bout du compte, il convient de noter que, quand il s'agit de, dans le monde d'aujourd'hui.
- **Pas de tirets cadratins** (—) comme rythme.
- **Pas de patterns IA** : pas de « ce n'est pas X, c'est Y », pas de « décomposons », pas de « en conclusion » forcé, pas de règle de trois systématique.

## Nombre de slides

**Minimum 4 slides, aucun plafond**. Le nombre découle du sujet, jamais forcé pour tenir un format. Critère : chaque slide doit apporter une information ou un déclic distinct de la précédente. Si une slide est redondante, elle saute. Si le sujet demande 12 ou 14 slides pour être bien déroulé (protocole complet, cas client détaillé, débat argumenté long), y aller.

Repères indicatifs, jamais des limites :
- 4-5 slides : angle unique, punchy, format « mise au clair d'un mythe ».
- 6-8 slides : sujet développé avec une méthode, un raisonnement en étapes.
- 9+ slides : sujet dense.

**Note** : la slide finale CTA compte dans le total.

## Nombre de carrousels par article

Par défaut, entre 1 et 3 carrousels par article. Chaque carrousel a un angle qui tient seul et ne se chevauche pas avec les autres. Un carrousel = une idée maîtresse.

## Comment identifier les angles

Privilégier les angles qui **font réfléchir** et **appellent une prise de suivi** :

- Position tranchée déroulée en argument étape par étape.
- Mythe démonté avec les mécanismes qui expliquent l'erreur.
- Cas client raconté en séquence (situation, diagnostic, protocole, résultat).
- Méthode actionnable étape par étape.
- Diagnostic différentiel avec signes à repérer.
- Débat/question ouverte qui invite l'audience à réagir.

## Structure d'une slide

### Slide 1 — Couverture

Obligatoirement :
- **Gros titre accrocheur** (idéalement 8 mots max). Peut inclure un mot en accent terracotta via `<span class="accent">…</span>` dans le champ `title`.
- **Sous-titre** en une phrase qui précise l'angle ou promet ce que le lecteur va gagner à swiper.
- Champ `surface` conseillé : `terracotta` ou `cream` pour l'impact.

**Pas de visuel sur la couverture.** Le design tient sur la typo Newsreader et le fond de couleur. Le champ `visual` sur la slide 1 est ignoré par le renderer.

Objectif : donner envie de swiper.

### Slides intermédiaires (index 1 à N-1)

Choisir un `format` par slide, en **variant sur tout le carrousel**. Sur un carrousel long, ne jamais empiler 3 slides `title-subtitle` d'affilée. Le pipeline propose 7 formats, à panacher :

- `hero` : une phrase forte, gros, texte seul. Champ `text`. Pour les punchlines, transitions fortes, positions tranchées.
- `title-subtitle` : `title` + `subtitle`, optionnellement `body`. Pour les explications posées, méthodes, diagnostics. **Accent couleur autorisé sur un mot du titre OU un mot du sous-titre, jamais les deux en même temps.** Via `<span class="accent">…</span>` (terracotta), option `underline`. Sert à faire ressortir le mot-pivot de la slide.
- `list` : `title` + `items` numérotés (pastilles terracotta). Pour les étapes, les points clés, les signes à repérer. Chaque item peut porter un `icon` (nom kebab-case) rendu en SVG monoline. Bibliothèque de 64 icônes Lucide (ISC) dans `_shared/icons/` — se référer à l'index du `README.md` de ce dossier pour choisir le bon picto par usage (émotions, équipement, postures, environnement, concepts pédagogiques).
- `quote` : `quote` (grand texte serif), **pas de champ `attribution`**. Pour une phrase-manifeste, un principe, une phrase-choc. **On ne signe jamais les citations.**
- `stat` : `stat` (chiffre géant : `8/10`, `3×`, `72%`), `statLabel` (majuscules court), `statContext` (contexte en 1 phrase). Pour un ordre de grandeur, une proportion, une fréquence. Utiliser **seulement** si le chiffre est dans l'article source.
- `comparison` : deux colonnes côte à côte via `columns.leftTitle/leftItems` et `columns.rightTitle/rightItems`. Pour ce qui marche vs ce qui bloque, laisse vs longe, technique vs émotion.
- `checklist` : `items` avec `kind: 'ok'` (✓) ou `kind: 'ko'` (✗). Pour un diagnostic différentiel, à faire / à éviter, symptômes.

**Règle de variété** : sur un carrousel de 6+ slides intermédiaires, viser au moins 3 formats distincts. Alterner surfaces et formats sur les slides adjacentes pour créer du rythme.

Un `visual` peut être ajouté sur les formats `title-subtitle` et `list` si pertinent. Il ne se force pas. Les formats `hero`, `quote`, `stat`, `comparison`, `checklist` sont **auto-suffisants visuellement** — pas de visuel dessus.

### Slide finale — CTA prise de suivi

Format `cta`. Structure imposée :

- **Champ `title`** : rappelle que Mélyne a l'**habitude de travailler sur/avec le sujet du carrousel**. Formulations : « J'accompagne beaucoup de chiens qui tirent en laisse. », « Je travaille souvent avec des chiens réactifs. », « L'anxiété de séparation, c'est un sujet que je traite régulièrement. » Le sujet est **spécifique à l'angle du carrousel**, pas générique.
- **Champ `subtitle`** : rappelle un différenciateur concret pertinent (bilan à domicile offert région bordelaise, suivi WhatsApp 7j/7, ACACED, travail avec toutes races, etc.). Un ou deux max.
- **Champ `cta`** : texte du bouton, orienté suivi. Ex : « Prendre un suivi », « Réserver un bilan », « Me contacter en DM ».
- **Champ `signature`** : ligne finale identifiant Mélyne. Ex : « Mélyne — Kind Dog Training, éducatrice canin région bordelaise. »
- `surface` conseillée : `ink` ou `terracotta` pour marquer visuellement la slide finale.

**Portrait Mélyne+Ramsey injecté automatiquement.** Le renderer force `bulle-melyne-et-ramsey-pattes-blanches.webp` (depuis `_shared/assets/`) en bas à droite de la slide `cta`. Le champ `visual` du spec est ignoré. Le contenu texte est ancré en haut de la slide pour éviter tout recouvrement avec le portrait, même sur un titre long ou avec un mot long — ne pas repasser sur le layout manuellement.

**La slide finale n'appelle PAS au commentaire ni à la sauvegarde.** Sa seule fonction est la conversion vers un suivi.

## Description Instagram associée

Chaque carrousel a **une description** postée avec. Contenu :

1. Une **accroche** en 1 à 2 lignes qui teasse le carrousel sans le résumer.
2. Un **court développement** (2 à 6 lignes) qui apporte un angle complémentaire, une nuance, un contexte, ou une anecdote qui ne tient pas sur les slides.
3. Une **relance conversationnelle explicitement orientée commentaire** : question ouverte au lecteur avec une invitation claire à répondre en commentaire (« dis-moi en commentaire », « raconte-moi en commentaire », « commente [mot] pour que je t'envoie [ressource] »). **C'est ici que se joue l'engagement** — pas dans la slide finale. Priorité au commentaire, pas à la sauvegarde ni au partage.
4. Un **CTA final court** qui présente Mélyne et invite à l'abonnement, style habituel : « Moi c'est Mélyne, éducatrice canin dans la région bordelaise. Abonne-toi si [bénéfice concret]. » (Le CTA « prise de suivi » est déjà dans la slide finale, on ne le double pas ici.)

La description **ne recopie pas** les slides. Elle les complète.

**Pas de hashtags** dans la description. On ne colle jamais de bloc de hashtags en fin de description Instagram.

## Emojis

Avec parcimonie. Sur les slides, éviter autant que possible : le design HTML porte visuellement le message. Un emoji fonctionnel occasionnel est ok (`❌ ✅`) mais jamais dans le titre de la slide 1. Dans la description Instagram : mêmes règles que pour les réels (`❌ ✅ ➡️ 1️⃣ 2️⃣ 3️⃣ 🐾 🐕 🤎`, `😅` rare). Jamais décoratif.

## Sortie

**Trois sorties simultanées et obligatoires.**

### 1. Dans la conversation

Afficher chaque carrousel avec ce format Markdown :

```
## Carrousel N — [Nom du carrousel]

**Slide 1 — Couverture**
- Titre : [gros titre, avec accent noté]
- Sous-titre : [sous-titre]

**Slide 2 — [format]**
- [contenu selon format]

... (autant de slides que nécessaire, minimum 4, sans plafond)

**Slide finale — CTA prise de suivi**
- Titre : [rappel de l'habitude sur le sujet]
- Sous-titre : [différenciateur]
- CTA : [texte du bouton]

**Description Instagram**

[Description complète prête à copier-coller]
```

Une ligne de séparation `---` entre chaque carrousel.

### 2. Sur disque — spec.json + description + HTML rendu + PNG

Pour chaque carrousel, créer le dossier `carrousels-instagram/[slug]/` et y écrire :

- **`spec.json`** : structure décrite dans `carrousels-instagram/tools/README-spec.md`. C'est la source de vérité qui alimente le renderer.
- **`description.md`** : la description Instagram, sans frontmatter.

Puis lancer **systématiquement** le renderer depuis le dossier `carrousels-instagram/` :

```bash
cd carrousels-instagram && npm run render [slug]
```

Le renderer produit dans `carrousels-instagram/[slug]/slides/` :
- `slide-1.html` … `slide-N.html` (aperçus HTML autonomes ouvrables dans le navigateur).
- `slide-1.png` … `slide-N.png` (1080×1350, prêts à publier).
- Copies de `_base.css` et `colors_and_type.css` à côté.

Le HTML est le cœur de la génération : ne pas se contenter du texte, toujours produire le spec + rendre.

**Slug** : kebab-case, sans accents, dérivé du nom du carrousel. Ex : `chien-tire-laisse-technique-jamb`.

### 3. Mise à jour de l'INDEX

Ajouter une ligne dans `carrousels-instagram/INDEX.md`, dans une rubrique thématique appropriée (créer la rubrique si nécessaire) :

```
- [slug/](slug/) — angle/position de Mélyne en une ligne.
```

Pointer vers le dossier du carrousel, pas vers un fichier unique.

## Gestion des assets visuels

Trois moments possibles pour ajouter des visuels, l'utilisateur choisit :

1. **Une fois pour toutes** — assets récurrents (logo, portrait Mélyne, photo Ramsey) : dans `carrousels-instagram/_shared/assets/`. Réutilisables par tous les carrousels via leur nom de fichier.
2. **Avant la génération** — si l'utilisateur a déjà l'asset précis en tête : à déposer dans `carrousels-instagram/[slug]/assets/` avant la génération. Détecter les fichiers présents et les référencer dans le spec.
3. **Entre la génération et le rendu final** — cas normal : le spec référence des noms de fichiers attendus, le premier rendu affiche un placeholder à leur place, l'utilisateur dépose les fichiers dans `[slug]/assets/`, on relance le renderer.

**Fallback** : sans asset, la slide reste publiable — le design system tient sans photo grâce à la typo Newsreader et aux fonds terracotta/cream. Toutes les slides n'ont pas besoin d'un visuel.

**Nom des visuels dans le spec** : préférer des noms descriptifs (`chien-tire-laisse.jpg`, `ramsey-focus.jpg`) plutôt que génériques (`img1.jpg`). Facilite la réutilisation depuis `_shared/assets/`.

## Contrôle final avant de rendre

- [ ] Tutoiement partout, aucun « vous ».
- [ ] Aucun terme banni.
- [ ] Aucun tiret cadratin utilisé comme rythme.
- [ ] Chaque carrousel fait au moins 4 slides. Pas de plafond : autant que le sujet le justifie.
- [ ] Slide 1 = gros titre + sous-titre. **Aucun visuel** sur la couverture.
- [ ] Sur un carrousel de 6+ slides intermédiaires, au moins 3 formats différents utilisés. Pas 3 `title-subtitle` d'affilée.
- [ ] Sur chaque slide `title-subtitle`, l'accent couleur est sur un seul élément (titre OU sous-titre), jamais les deux.
- [ ] Aucun format `quote` n'a de champ `attribution`. Les citations ne sont jamais signées.
- [ ] Slide finale = format `cta`, rappelle que Mélyne a l'habitude de travailler sur ce sujet précis, propose un suivi. Le portrait Mélyne+Ramsey est injecté automatiquement, on ne le référence pas dans le spec.
- [ ] La relance conversationnelle est dans la description, pas dans la slide finale, et invite explicitement à commenter.
- [ ] Aucun hashtag dans la description.
- [ ] La description Instagram ne recopie pas les slides.
- [ ] Le `spec.json` est écrit et le renderer a été lancé (PNG présents).
- [ ] Aucun fait ajouté qui ne figure pas dans l'article source.
- [ ] Aucun carrousel ne contredit une position exprimée ailleurs dans le repo.

## Après la génération

Proposer à l'utilisateur, sans le produire par défaut :

- Une variante d'un carrousel avec un autre angle ou un format différent.
- Un « hook » alternatif pour la slide 1 si celle proposée ne convainc pas.
- Une adaptation des visuels manquants (suggestion de photos à prendre / assets à créer).
