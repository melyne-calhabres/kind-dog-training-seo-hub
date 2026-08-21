---
name: seo-research-article
description: >
  Skill de recherche SEO préparatoire à la rédaction d'un article. À utiliser SYSTÉMATIQUEMENT
  dès que l'utilisateur donne un mot clé et demande une analyse SEO, une recherche de concurrence,
  une préparation d'article, ou veut savoir comment les concurrents se positionnent sur un sujet.
  Déclencher pour tout message contenant : un mot clé + une intention de rédaction, "analyse SERP",
  "recherche SEO", "préparer un article", "analyser la concurrence sur [mot clé]",
  "qu'est-ce qui se positionne sur [mot clé]", "structure des concurrents", ou toute demande
  d'étude préalable à l'écriture d'un contenu SEO. Même si l'utilisateur dit simplement
  "je veux écrire sur [sujet]" ou donne juste un mot clé sans autre contexte, ce skill
  est probablement pertinent.
---

# SEO Research Article — Analyse concurrentielle SERP

## Objectif

À partir d'un mot clé fourni par l'utilisateur, analyser les 5 premières pages positionnées organiquement sur Google pour produire un brief de rédaction structuré. Ce brief servira de base pour écrire un article optimisé.

## Processus

### Étape 1 — Récupérer les résultats de recherche

Utiliser l'outil `WebSearch` pour rechercher le mot clé exact. Identifier les **5 premiers résultats organiques** (ignorer les annonces, les featured snippets, les "People Also Ask", les vidéos YouTube et les résultats Google Maps/Images).

Si moins de 5 résultats organiques pertinents apparaissent, travailler avec ceux disponibles et le signaler dans le fichier de sortie.

### Étape 2 — Récupérer le contenu de chaque page

Pour chaque URL identifiée, utiliser `WebFetch` (ou `mcp__workspace__web_fetch`) pour récupérer le contenu HTML de la page.

Si une page est inaccessible (erreur, paywall, JavaScript-only), le noter dans le rapport et passer à la suivante. Tenter au maximum de récupérer 5 pages analysables.

### Étape 3 — Analyser chaque page

Pour chaque page récupérée, extraire :

**a) Structure des titres (H1 à H6)**
Relever tous les titres en conservant leur hiérarchie. Présenter sous forme d'arbre indenté :
```
H1: Titre principal
  H2: Sous-titre 1
    H3: Sous-sous-titre
  H2: Sous-titre 2
```

**b) Nombre de mots**
Compter le nombre de mots du contenu textuel principal (exclure navigation, footer, sidebar, publicités). Ne compter que le corps de l'article/page.

**c) Termes sémantiques**
Relever les mots et expressions récurrents qui sont sémantiquement liés au mot clé. Ignorer les mots vides (le, la, de, un, etc.). Se concentrer sur le vocabulaire spécifique au sujet traité.

### Étape 4 — Synthétiser

Agréger les données des 5 pages pour produire :

- **Moyenne du nombre de mots** et fourchette (min – max)
- **Champ lexical dominant** : les termes sémantiques les plus fréquents à travers les 5 pages, classés par pertinence
- **20 termes du champ sémantique du mot clé** : produire une liste de **exactement 20 termes** qui appartiennent au même champ sémantique que le mot clé principal. Ce sont les mots qu'un lecteur (ou Google) s'attend à croiser dans un contenu qui traite vraiment le sujet — synonymes, variantes, cooccurrences fortes, termes techniques ou courants directement associés. Croiser ce que font les 5 concurrents avec ce qui manque et devrait logiquement y être. Cette liste sert à jouer le "mot mystère" : elle permet plus tard de décrire le sujet sans forcément nommer le mot clé, en convoquant son champ sémantique. Classer les 20 termes par ordre de pertinence (le plus proche du mot clé en premier).

### Étape 5 — Générer le fichier de sortie

Sauvegarder le fichier dans le sous-dossier `recherches-seo/` du dossier de travail de l'utilisateur. Le nommer `[mot-clé-slugifié].md` (espaces remplacés par des tirets, tout en minuscules).

Créer le sous-dossier `recherches-seo/` s'il n'existe pas.

## Format du fichier de sortie

```markdown
# Recherche SEO : [Mot clé]

**Date :** [date du jour]
**Mot clé analysé :** [mot clé]
**Nombre de pages analysées :** [N]/5

---

## Résumé

- **Nombre de mots moyen :** [moyenne] mots
- **Fourchette :** [min] – [max] mots

---

## Pages analysées

### 1. [Titre de la page]
**URL :** [url]
**Nombre de mots :** [nombre]

#### Structure des titres
H1: ...
  H2: ...
    H3: ...
  H2: ...

---

### 2. [Titre de la page]
[même structure]

---

[etc. pour les 5 pages]

---

## Champ lexical et sémantique

### 20 termes du champ sémantique du mot clé
[Liste numérotée de 1 à 20, classée par pertinence décroissante. Ce sont les termes à convoquer en priorité dans l'article pour saturer le champ sémantique du mot clé.]

1. ...
2. ...
...
20. ...

### Champ lexical dominant
[Les termes les plus récurrents à travers les 5 pages, classés par fréquence ou pertinence]

```

## Notes importantes

- Toujours travailler en français (le mot clé sera en français)
- Le fichier de sortie est un outil de travail préparatoire, pas un article fini
- Être factuel dans l'analyse : rapporter ce que font les concurrents, ne pas inventer
- Si le contenu d'une page est trop court (<200 mots), le signaler — ce n'est probablement pas un article de fond
