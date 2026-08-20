# Bibliothèque d'icônes — carrousels Instagram

Icônes monoline SVG sourcées depuis [Lucide](https://lucide.dev) (licence ISC). Style cohérent avec le design system Kind Dog Training.

## Convention

- `viewBox="0 0 24 24"`
- `stroke="currentColor"`, `fill="none"`
- `stroke-width="1.8"`, `stroke-linecap="round"`, `stroke-linejoin="round"`
- La couleur suit le contexte CSS (terracotta sur cream, cream sur ink, etc.) via `currentColor`.

## Nommage

`kebab-case.svg`, en français.

## Index (64)

### Génériques
- `check` — validation, ce qui marche
- `croix` — à éviter, ce qui ne marche pas
- `alerte` — attention, mise en garde
- `ampoule` — idée, insight, astuce
- `sablier` — temps, patience, progression
- `eclair` — impulsion, peur, décharge
- `flamme` — chaleurs, intensité
- `feuille` — calme, apaisement, retour au posé
- `coeur-lien` — lien, attachement, relation
- `question` — doute, hésitation, quand on se demande pourquoi
- `exclamation` — insight fort, point d'attention
- `cle` — solution, ce qui débloque
- `cadenas` — bloqué, verrouillé, tabou
- `loupe` — diagnostic, observation fine
- `livre` — méthode, apprentissage, référence
- `progression` — évolution, courbe, résultats dans le temps

### Univers canin
- `patte` — empreinte, marque de chien
- `os` — récompense, jouet
- `cloture` — jardin, limite, fugue
- `chien-silhouette` — silhouette générique
- `museau` — flair, odorat, expression du chien
- `oreille` — écoute, signaux subtils
- `aboiement` — vocalise (Lucide `megaphone`)
- `assis` — position assise, obéissance de base
- `couche` — position couchée, repos actif
- `saut` — excitation, chien qui saute
- `course` — chien qui court, énergie
- `reniflement` — travail de flair, mental
- `creuse` — creuse, gratte, comportement instinctif

### Équipement
- `laisse` — matériel de marche
- `harnais` — équipement de traction / travail
- `collier` — collier standard, identification
- `gamelle` — repas, nourriture, hydratation
- `balle` — jeu, motivateur, rappel
- `clicker` — marqueur, timing
- `sac-friandise` — récompense alimentaire
- `panier` — couchage, espace refuge
- `brosse` — soin, contact positif

### États / émotions
- `calme` — chien apaisé, serein
- `peur` — trouille, chien tendu
- `stress` — surexcitation, débordement
- `joie` — chien heureux, jeu
- `ennui` — sous-stimulation, vacuité
- `frustration` — blocage, insatisfaction
- `endormi` — sommeil, récupération
- `curieux` — investigation, intérêt

### Environnement
- `maison` — intérieur, foyer
- `jardin` — extérieur privé, espace vert
- `parc` — parc public, sortie ville
- `foret` — nature, balade longue
- `voiture` — trajet, transport
- `canape` — vie de famille, cohabitation

### Relation / personnes
- `famille` — foyer, groupe humain
- `enfant` — présence d'enfant, précaution
- `mains-jointes` — accord, engagement, contrat
- `calin` — affection, contact
- `promeneur` — humain qui marche son chien

### Concepts pédagogiques
- `cerveau` — travail mental, réflexion
- `cible` — objectif, focus
- `chrono` — durée d'une séance, timing
- `calendrier` — planning, régularité
- `main-stop` — stop, marqueur d'interdit
- `boussole` — direction, cap, choix
- `meteo-orage` — trigger sonore (orage, feux d'artifice)

## Ajouter une icône

1. Créer le SVG dans ce dossier, respecter la convention ci-dessus.
2. Ajouter une ligne dans l'index avec une phrase courte qui dit **quand l'utiliser** (pas ce qu'elle représente visuellement).
3. Régénérer l'aperçu si tu veux vérifier le rendu : `apercu.html`.

## Utilisation dans une slide

Dans `spec.json`, remplacer l'emoji par le nom de l'icône :

```json
{ "icon": "eclair", "text": "La peur : orage, feux d'artifice…" }
```

Le renderer résout `eclair` → inline SVG depuis ce dossier. Fallback sur emoji si le nom est un caractère unicode (ex. `"icon": "🌱"`).
