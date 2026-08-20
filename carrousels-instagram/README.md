# Carrousels Instagram

Tout ce qui concerne la génération et le stockage des carrousels Instagram Kind Dog Training. Dossier autonome : dépendances, code de rendu, templates, assets partagés, sorties, tout est ici.

## Installation (une seule fois)

Depuis ce dossier :

```bash
npm install
```

Télécharge Playwright + un Chromium isolé (~150 Mo) via le `postinstall`. Rien à faire côté racine du repo.

## Générer un carrousel

Le skill `carrousels-instagram-depuis-article` écrit automatiquement le `spec.json` et lance le rendu. Manuellement :

```bash
# depuis carrousels-instagram/
npm run render <slug>
# ou
npm run render <slug>/spec.json
```

Le renderer sort dans `<slug>/slides/` :
- `slide-1.html` … `slide-N.html` — aperçus HTML ouvrables dans le navigateur.
- `slide-1.png` … `slide-N.png` — PNG 1080×1350 prêts à publier.
- `_base.css` + `colors_and_type.css` — copiés à côté pour que les HTML soient autonomes.

## Structure

```
carrousels-instagram/
├── README.md                 ← ce fichier
├── package.json              ← dépendance playwright isolée ici
├── INDEX.md                  ← index thématique des carrousels
├── tools/
│   ├── render-carrousel.mjs  ← moteur de rendu Playwright
│   └── templates/
│       ├── _base.css         ← layout des slides
│       ├── colors_and_type.css   ← tokens design system (copie autonome)
│       ├── cover.html        ← template slide 1
│       └── slide.html        ← template slides N (formats hero, title-subtitle, list, cta)
├── _shared/
│   └── assets/               ← visuels réutilisables entre carrousels
└── [slug]/                   ← un dossier par carrousel généré
    ├── spec.json             ← source de vérité alimentant le renderer
    ├── description.md        ← description Instagram à publier
    ├── assets/               ← visuels spécifiques à ce carrousel
    └── slides/               ← HTML + PNG produits par le renderer
```

## Structure du `spec.json`

Voir [tools/README-spec.md](tools/README-spec.md) pour tous les champs disponibles par slide.

## Résolution des assets

Un `visual: "chien-tire-laisse.jpg"` dans le spec est cherché dans l'ordre :

1. `<slug>/assets/chien-tire-laisse.jpg`
2. `_shared/assets/chien-tire-laisse.jpg`
3. Rien → placeholder rendu dans la slide (bloc rayé + nom attendu).

Assets récurrents (logo, portrait Mélyne, photo Ramsey) : voir [_shared/assets/README.md](_shared/assets/README.md).

## Design system

Les tokens visuels (couleurs, typo, spacing) sont dans [tools/templates/colors_and_type.css](tools/templates/colors_and_type.css). C'est une copie autonome du design system Kind Dog Training (`C:\Users\Anthony\Downloads\Kind Dog Training Design System`). Toute mise à jour du design system amont doit être répliquée ici manuellement.
