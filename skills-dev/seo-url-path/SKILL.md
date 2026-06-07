---
name: seo-url-path
description: "Skill de génération du chemin d'URL SEO pour un article rédigé. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande de générer l'URL, le slug, le chemin de page, ou mentionne un fichier dans articles/ après que les balises meta ont été rédigées. Déclencher pour tout message contenant : \"URL\", \"slug\", \"chemin d'URL\", \"chemin de page\", \"path\", \"générer l'URL\", \"créer le slug\", ou toute demande qui suit logiquement la rédaction des balises meta et vise la définition de l'adresse de la page. Si l'utilisateur dit \"les metas sont prêtes, on fait l'URL\" ou \"génère le chemin pour [article]\", ce skill est pertinent. Également pertinent si l'utilisateur mentionne un fichier dans articles/ et veut y ajouter un chemin d'URL."
---

# SEO URL Path — Génération du chemin d'URL

## Objectif

À partir d'un article rédigé (qui a déjà ses balises meta, produites par le skill `seo-meta-tags`), générer un chemin d'URL optimisé pour le SEO. Le résultat est ajouté directement dans le fichier de l'article, dans une nouvelle section après les Balises meta.

## Pourquoi c'est important

L'URL est un signal SEO. Un bon chemin d'URL :
- Contient le mot clé (Google le met en gras dans les résultats)
- Est court et lisible (les utilisateurs le voient avant de cliquer)
- Reflète la position de la page dans l'arborescence du site (structure en silo)

## Prérequis

Avant de générer le chemin, lire :

1. L'article cible dans `articles/` — pour extraire le mot clé principal (dans les Notes techniques).
2. Le fichier d'arborescence `mots_cles_education_canine - Arborescence.csv` à la racine du dossier de travail — pour déterminer dans quelle branche de l'arborescence l'article s'insère.

## Input

Le fichier article dans `articles/`. Il doit contenir au minimum :
- La section **Notes techniques** (avec le mot clé principal)
- La section **Balises meta** (preuve que l'étape précédente est faite)

## Logique de construction de l'URL

### Étape 1 — Extraire le mot clé principal

Lire la section Notes techniques et récupérer le **mot clé principal**.

### Étape 2 — Identifier la branche dans l'arborescence

Le fichier CSV `mots_cles_education_canine - Arborescence.csv` contient la structure en silo du site. Chaque ligne représente un chemin hiérarchique :

```
Niveau 1 / Niveau 2 / Niveau 3 / Niveau 4 / Niveau 5
education-canine / comportement / problemes / agressivite
education-canine / apprentissages / obeissance / ordres / rappel
```

Trouver la ligne qui correspond le mieux au sujet de l'article. Le mot clé ou le thème de l'article doit matcher un des niveaux de l'arborescence. Par exemple :
- Un article sur "comment dresser son chien" → branche `education-canine/dressage/`
- Un article sur "aboiements du chien" → branche `education-canine/comportement/problemes/aboiements/`
- Un article sur "apprendre le rappel à son chien" → branche `education-canine/apprentissages/obeissance/ordres/rappel/`

### Étape 3 — Construire le slug final

Le slug est la dernière partie de l'URL (le segment qui identifie la page dans sa branche).

**Règles de construction du slug :**

1. **Partir du mot clé principal** et le transformer en slug.
2. **Supprimer tous les mots de liaison** : les articles (le, la, les, un, une, des, l'), les prépositions (de, du, à, au, aux, en, pour, par, sur, avec, sans, dans, entre, vers, chez, sous), les pronoms (son, sa, ses, mon, ma, mes, votre, vos, leur, se, s'), les conjonctions (et, ou, ni, mais, donc, car, que, qui), et les verbes auxiliaires isolés (est, a, sont, ont).
3. **Conserver les mots interrogatifs quand le mot clé est une question** : si le mot clé commence par "comment", "pourquoi", "quand", "quel", "quelle", etc., ce mot fait partie de l'intention de recherche et doit rester dans le slug. L'internaute tape littéralement "comment dresser son chien" — le slug doit refléter cette requête.
4. **Garder uniquement les mots porteurs de sens** : noms, verbes d'action, adjectifs descriptifs.
5. **Séparer par des tirets**, tout en minuscules, sans accents.
6. **Viser 2 à 5 mots** dans le slug. Si le mot clé donne un slug trop long, raccourcir en gardant les termes les plus importants pour le SEO.

**Exemples :**

| Mot clé principal | Slug | Raison |
|---|---|---|
| comment dresser son chien | comment-dresser-chien | "comment" = question, on le garde |
| apprendre le rappel à son chien | apprendre-rappel-chien | pas de question, on supprime "le", "à", "son" |
| aboiements du chien la nuit | aboiements-chien-nuit | pas de question, on supprime "du", "la" |
| pourquoi mon chien tire en laisse | pourquoi-chien-tire-laisse | "pourquoi" = question, on le garde |
| choisir un harnais pour son chien | choisir-harnais-chien | pas de question, on supprime "un", "pour", "son" |

### Étape 4 — Assembler le chemin complet

Le chemin complet = branche de l'arborescence + slug final.

Format : `/{niveau1}/{niveau2}/{niveau3}/{slug}/`

Ne pas dépasser le niveau nécessaire. Si l'article correspond à un niveau 2, le chemin s'arrête là. Si un niveau 4 ou 5 est pertinent, aller jusque-là.

**Attention :** si le slug répète un terme déjà présent dans le chemin de la branche, le supprimer du slug pour éviter la redondance. Par exemple :
- Branche `education-canine/dressage/` + slug `dresser-chien` → `/education-canine/dressage/dresser-chien/` — ici "dressage" et "dresser" sont proches mais pas identiques, c'est acceptable.
- Branche `education-canine/comportement/problemes/aboiements/` + slug `aboiements-chien-nuit` → `/education-canine/comportement/problemes/aboiements/chien-nuit/` — "aboiements" est déjà dans la branche, on le retire du slug.

## Processus complet

1. Lire l'article et extraire le mot clé principal
2. Lire le CSV d'arborescence et identifier la branche
3. Construire le slug à partir du mot clé (sans mots de liaison)
4. Assembler branche + slug
5. Écrire dans le fichier

## Vérification

Avant d'écrire dans le fichier, vérifier :

1. **Mot clé présent** : le slug contient les termes essentiels du mot clé
2. **Pas de mots de liaison** : aucun article, préposition, pronom ou conjonction dans le slug
3. **Pas d'accent** : tous les caractères sont en ASCII simple
4. **Cohérence avec l'arborescence** : la branche correspond bien au sujet
5. **Slash final** : le chemin se termine par `/`
6. **Slash initial** : le chemin commence par `/`

## Output — Écrire dans le fichier

Ajouter une nouvelle section à la fin du fichier article (après les Balises meta), avec ce format exact :

```markdown

## Chemin d'URL

- **URL :** [chemin complet généré]
- **Slug :** [slug seul, sans la branche]
- **Branche arborescence :** [branche identifiée dans le CSV]
```

## Checklist finale

1. Le slug contient les termes clés du mot clé principal
2. Aucun mot de liaison dans tout le chemin
3. Pas d'accents, tout en minuscules, séparé par des tirets
4. Cohérent avec l'arborescence CSV
5. Le chemin commence et se termine par `/`
6. Le fichier article est mis à jour avec la section "Chemin d'URL"