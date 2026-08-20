# Assets partagés — carrousels Instagram

Fichiers réutilisables par n'importe quel carrousel. Le renderer les résout automatiquement par nom si un carrousel les référence sans les avoir dans son propre `assets/`.

## Noms conventionnels attendus

Dépose tes fichiers avec ces noms pour qu'ils soient trouvés directement :

- `logo.svg` — logo Kind Dog Training
- `wordmark.svg` — mot-marque seul
- `portrait-melyne.jpg` — portrait Mélyne (utilisé sur la slide finale)
- `ramsey.jpg` — photo Ramsey (illustration récurrente)
- `bordeaux.jpg` — visuel Bordeaux/environs (si un carrousel évoque la zone)

## Ajouter d'autres assets récurrents

N'importe quel fichier posé ici devient disponible à tous les carrousels. Utile pour :

- Pictos que tu réutilises (silhouettes de chien, laisse, etc.).
- Photos génériques de balade, séance, matériel.

## Assets spécifiques à un carrousel

À déposer dans `carrousels-instagram/[slug]/assets/` (créé automatiquement par le renderer si besoin). Priorité au dossier local si un même nom existe des deux côtés.
