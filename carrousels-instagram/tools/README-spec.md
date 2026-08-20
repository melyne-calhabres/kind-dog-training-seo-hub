# Structure du `spec.json`

Doc de référence pour tous les champs disponibles dans un `spec.json` de carrousel. Voir [../README.md](../README.md) pour l'installation et l'utilisation générale du pipeline.

## Utilisation

Depuis `carrousels-instagram/` :

```bash
npm run render <slug>
```

Écrit :
- `<slug>/slides/slide-N.html` — HTML rendu de chaque slide (ouvrable dans le navigateur pour aperçu).
- `<slug>/slides/slide-N.png` — PNG 1080×1350 prêt à publier.
- `<slug>/slides/_base.css` et `colors_and_type.css` — copiés à côté des HTML pour qu'ils soient autonomes.

## Structure du spec.json

```json
{
  "name": "Chien qui tire en laisse — la technique jamb",
  "slug": "chien-tire-laisse-technique-jamb",
  "slides": [
    {
      "surface": "terracotta",
      "titleSize": "display",
      "title": "Ton chien tire ? <span class=\"accent\">Change de technique.</span>",
      "subtitle": "La méthode que je donne à mes clients."
    },
    {
      "format": "hero",
      "surface": "cream",
      "text": "Ce n'est pas une question d'obéissance. C'est une question de mécanique."
    },
    {
      "format": "quote",
      "surface": "paper",
      "quote": "Un chien qui tire, c'est un chien qui a appris que tirer paie."
    },
    {
      "format": "stat",
      "surface": "cream",
      "stat": "8/10",
      "statLabel": "des cas que je vois",
      "statContext": "concernent des chiens dont les besoins de base ne sont pas comblés en dehors de la balade."
    },
    {
      "format": "comparison",
      "surface": "cream",
      "title": "Ce qui marche vs ce qui bloque",
      "columns": {
        "leftTitle": "Ce qui marche",
        "leftItems": ["Silence total", "Combler les besoins hors laisse"],
        "rightTitle": "Ce qui bloque",
        "rightItems": ["Récompenser une laisse tendue", "Empiler les accessoires"]
      }
    },
    {
      "format": "checklist",
      "surface": "paper",
      "title": "Le vrai diagnostic",
      "items": [
        { "kind": "ok", "text": "Chien qui marche impec quand la rue est vide." },
        { "kind": "ko", "text": "Chien qui tracte dès qu'un congénère apparaît." }
      ]
    },
    {
      "format": "title-subtitle",
      "surface": "paper",
      "eyebrow": "Étape 1",
      "title": "Silence total",
      "subtitle": "Pas de \"non\", pas de \"stop\". La parole devient un renforçateur.",
      "titleSize": "lg"
    },
    {
      "format": "list",
      "surface": "cream",
      "title": "Trois erreurs à arrêter",
      "titleSize": "md",
      "items": [
        "Harnais anti-traction utilisé comme solution.",
        "Laisse à enrouleur en promenade urbaine.",
        "Récompenses distribuées quand le chien tire déjà."
      ]
    },
    {
      "format": "cta",
      "surface": "ink",
      "title": "J'accompagne beaucoup de chiens qui tirent.",
      "subtitle": "Bilan à domicile offert dans la région bordelaise. Suivi WhatsApp 7j/7.",
      "titleSize": "md",
      "cta": "Prendre un suivi",
      "signature": "Mélyne — Kind Dog Training, éducatrice canin région bordelaise."
    }
  ]
}
```

### Champs par slide

**Toutes les slides**
- `surface` : `cream` (défaut), `paper`, `terracotta`, `ink`.
- `eyebrow` : petite ligne en majuscules terracotta au-dessus du contenu.
- `visual` : nom du fichier image (résolu en cascade, voir plus bas). **Ignoré sur la couverture** (design plein cadre) **et sur la slide `cta`** (portrait Mélyne+Ramsey forcé automatiquement).

**Slide 1 — Couverture (index 0)**
- `title` : gros titre (HTML autorisé pour `<span class="accent">…</span>` sur le mot terracotta).
- `subtitle` : sous-titre.
- `titleSize` : `display` (défaut), `xl`, `lg`, `md`.
- **Pas de visuel.** La couverture s'appuie uniquement sur la typo Newsreader et le fond de couleur.

**Slides N (index 1+)** — champ `format` détermine la variante :
- `hero` : texte seul, gros. Champ `text`. Pour les punchlines et transitions fortes.
- `title-subtitle` (défaut) : `title` + `subtitle` + optionnel `body`. Pour les explications, méthodes, diagnostics.
- `list` : `title` + `items` (tableau de strings ou objets `{ text, icon }`). Numérotation auto par pastilles terracotta.
- `quote` : `quote` (texte serif géant). Guillemet décoratif surdimensionné en fond. **Pas d'attribution : les citations ne sont jamais signées.**
- `stat` : `stat` (chiffre géant, ex : `"8/10"`, `"3×"`, `"72%"`) + `statLabel` (majuscules, court) + `statContext` (phrase de contexte).
- `comparison` : `title` + `columns.leftTitle`, `columns.leftItems`, `columns.rightTitle`, `columns.rightItems`. Deux cartouches côte à côte.
- `checklist` : `title` + `items` avec `kind: 'ok'` (✓ terracotta) ou `kind: 'ko'` (✗ noir).
- `cta` : `title` + `subtitle` + `cta` (texte bouton) + `signature`. **Réservé à la slide finale.** Portrait Mélyne+Ramsey injecté automatiquement en bas à droite.

## Nombre de slides

Pas de plafond. Minimum 4, au-delà : autant que le sujet le justifie. Une slide qui n'ajoute rien saute.

## Slide finale — portrait forcé

La slide `cta` reçoit automatiquement le portrait `bulle-melyne-et-ramsey-pattes-blanches.webp` (dans `_shared/assets/`), positionné en bas à droite. Le champ `visual` du spec est ignoré sur cette slide. Le layout ancre le contenu texte en haut de la slide pour ne jamais entrer en conflit avec le portrait, même sur un titre long ou avec un mot long.

## Résolution des assets (cascade)

Un `visual: "chien-tire-laisse.jpg"` est cherché dans l'ordre :

1. `<slug>/assets/chien-tire-laisse.jpg`
2. `_shared/assets/chien-tire-laisse.jpg`
3. Rien → placeholder rendu dans la slide (bloc rayé + nom attendu).

Un chemin avec `/` ou `\` (ex : `assets/perso/photo.jpg`) est pris tel quel, relatif au dossier du spec.

## Design system

Tokens de couleur, typo, spacing, radii, shadows dans [templates/colors_and_type.css](templates/colors_and_type.css). Copié depuis le design system Kind Dog Training. Toute modif du design system amont doit être répliquée ici.

Base template CSS (layout des slides) dans [templates/_base.css](templates/_base.css).
