---
name: seo-meta-tags
description: "Skill de rédaction des balises meta title et meta description SEO à partir d'un article existant. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande de rédiger les balises meta, le title, la description SEO, ou mentionne un fichier dans articles/. Déclencher pour tout message contenant : \"meta title\", \"meta description\", \"balises meta\", \"balises SEO\", \"title SEO\", \"écrire le title\", \"rédiger les metas\", ou toute demande qui suit logiquement la rédaction d'un article et vise la production des balises pour le référencement. Si l'utilisateur dit \"l'article est prêt, on fait les metas\" ou \"ajoute les balises SEO sur [article]\", ce skill est pertinent. Également pertinent si l'utilisateur mentionne un fichier dans articles/ et veut y ajouter des informations SEO on-page."
---

# SEO Meta Tags — Rédaction du meta title et de la meta description

## Objectif

À partir d'un article rédigé (produit par le skill `seo-article-writing`), rédiger un meta title et une meta description optimisés pour le référencement et le taux de clic. Le résultat est ajouté directement dans le fichier de l'article, dans une nouvelle section après les Notes techniques.

## Prérequis

Avant de rédiger les balises, lire :

1. L'article cible dans `articles/` — le lire en entier pour comprendre le contenu, l'angle et les points forts.
2. La section **Notes techniques** en bas de l'article — elle contient le mot clé principal et les données utiles.

## Input

Le fichier article se trouve dans `articles/` à la racine du dossier de travail. L'utilisateur peut fournir le nom du fichier ou mentionner le sujet — dans ce cas, chercher le fichier correspondant.

### Ce qu'il faut extraire de l'article

- Le **mot clé principal** (dans les Notes techniques)
- Le **H1** (titre de l'article)
- Les **points forts** du contenu : ce qui est le plus utile, surprenant ou actionnable pour le lecteur
- L'**angle** de l'article : informatif, guide pratique, comparatif, etc.

## Règles de rédaction

### Meta title

Le meta title est ce que l'internaute voit en premier dans les résultats Google. Il doit donner envie de cliquer tout en étant fidèle au contenu.

**Contraintes :**

- **65 caractères maximum.** C'est la limite stricte. Si le title est vraiment difficile à faire rentrer, on tolère jusqu'à 69 caractères, mais c'est l'exception, pas la règle. Compter les espaces.
- **Mot clé au début** si c'est possible sans rendre le title artificiel. L'idée est que Google et le lecteur voient immédiatement de quoi parle la page. Si placer le mot clé en tête donne une formulation bancale, le décaler légèrement — un title naturel qui convertit vaut mieux qu'un title optimisé que personne ne clique.
- **Title Case** : majuscule au début de chaque mot (sauf articles, prépositions courtes et conjonctions de coordination comme "de", "du", "et", "à", "en", "le", "la", "les", "un", "une", "des", "pour", "sur", "ou", "son", "sa", "ses"). Exemple : "Comment Dresser son Chien" et non "comment dresser son chien" ni "Comment Dresser Son Chien".
- **Chiffres et verbes d'action** : quand c'est pertinent et naturel, inclure un chiffre (« 7 Erreurs… », « 5 Étapes… ») ou un verbe d'action (« Découvrez… », « Apprenez… ») pour inciter au clic. Ne pas forcer — si l'article ne s'y prête pas, un title descriptif clair fonctionne très bien.
- **Pas de pipe ni de tiret suivi du nom du site.** Le title est le title, point. Pas de « | Kind Dog Training » à la fin (c'est géré ailleurs).

### Meta description

La meta description est le texte d'accroche sous le title dans les résultats Google. Elle doit donner envie de lire l'article en teasant son contenu.

**Contraintes :**

- **Entre 130 et 160 caractères.** En dessous de 130, Google risque de la remplacer par un extrait de la page. Au-dessus de 160, elle sera tronquée. Compter les espaces.
- **Mot clé au début** si possible, pour les mêmes raisons que le title. Le mot clé en gras dans les résultats Google attire l'oeil.
- **Teaser le contenu** : la description doit donner un aperçu de ce que le lecteur va trouver dans l'article. Mentionner un bénéfice concret, un angle surprenant, ou une promesse de réponse. Le lecteur doit se dire « c'est exactement ce que je cherche ».
- **Vouvoiement** : toujours s'adresser au lecteur avec « vous/votre/vos ».
- **Ton** : direct, concret, engageant. Pas de formule creuse (« Découvrez tout ce qu'il faut savoir sur… »). Aller droit au but.

## Processus

### Étape 1 — Lire l'article

Lire l'intégralité de l'article pour identifier :
- Le mot clé principal (Notes techniques)
- L'angle et la promesse de l'article
- Les 2-3 informations ou conseils les plus marquants
- Ce qui différencie cet article des contenus concurrents sur le même sujet

### Étape 2 — Rédiger le meta title

Rédiger 1 proposition de meta title en respectant les contraintes. Compter les caractères (espaces inclus) et vérifier qu'on est dans la limite.

### Étape 3 — Rédiger la meta description

Rédiger 1 proposition de meta description en respectant les contraintes. Compter les caractères (espaces inclus) et vérifier qu'on est dans la fourchette 130-160.

### Étape 4 — Vérification

Avant d'écrire dans le fichier, vérifier :

1. **Longueur du title** : ≤ 65 caractères (tolérance jusqu'à 69 si nécessaire)
2. **Longueur de la description** : entre 130 et 160 caractères
3. **Mot clé** : présent dans les deux, idéalement au début
4. **Title Case** : appliqué correctement sur le title
5. **Vouvoiement** : utilisé dans la description
6. **Cohérence** : le title et la description reflètent fidèlement le contenu de l'article
7. **Aucun terme interdit** : pas de « éducation positive », « renforcement positif », « méthode coercitive »

### Étape 5 — Écrire dans le fichier

Ajouter une nouvelle section à la fin du fichier article (après les Notes techniques), avec ce format exact :

```markdown

## Balises meta

- **Meta title :** [title rédigé]
- **Caractères title :** [nombre]
- **Meta description :** [description rédigée]
- **Caractères description :** [nombre]
```

## Checklist finale

1. Title ≤ 65 caractères (69 max en cas exceptionnel)
2. Description entre 130 et 160 caractères
3. Mot clé présent dans les deux balises
4. Title Case appliqué sur le title
5. Vouvoiement dans la description
6. Pas de termes interdits
7. Le fichier article est mis à jour avec la section "Balises meta"
