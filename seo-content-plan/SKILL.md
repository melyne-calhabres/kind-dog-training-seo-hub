---
name: seo-content-plan
description: >
  Skill de création de plan de contenu SEO (structure H1/H2/H3) à partir d'une recherche
  concurrentielle existante. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande un plan
  de contenu, une structure d'article, un squelette de rédaction, ou veut organiser ses titres
  avant d'écrire. Déclencher pour tout message contenant : "plan de contenu", "structure d'article",
  "plan de rédaction", "créer les titres", "organiser les H2", "préparer le squelette",
  "structurer l'article", ou toute demande qui suit logiquement une recherche SEO et précède
  la rédaction. Si l'utilisateur dit "j'ai fait la recherche, maintenant on passe à la structure"
  ou "prépare-moi le plan", ce skill est pertinent. Également pertinent si l'utilisateur
  mentionne un fichier dans recherches-seo/ et veut en tirer un plan.
---

# SEO Content Plan — Structure de titres pour article

## Objectif

À partir du fichier de recherche SEO produit par le skill `seo-research-article`, construire un plan de contenu structuré (H1, H2, H3) prêt à servir de squelette pour la rédaction. Le plan est un outil de travail : il ne contient que les titres, pas de brief ni de contenu.

## Prérequis

Avant de commencer, lire les fichiers de référence de la marque dans le dossier de travail de l'utilisateur :

- `identite-de-marque.md`
- `ton-et-style.md`
- `audience-cible.md`
- `ligne-editoriale.md`

Ces fichiers définissent le ton, les valeurs et les contraintes éditoriales. Deux règles absolues à retenir :

1. Ne jamais utiliser les termes « éducation positive », « renforcement positif » ou « méthode coercitive » dans aucun titre.
2. Ne jamais catégoriser l'approche dans un courant étiqueté.

### Écriture anti-IA

Lire également le skill `avoid-ai-writing` et appliquer ses principes à la rédaction des titres. Les titres sont la première chose que le lecteur (et Google) voit — s'ils sentent l'IA, tout l'article perd en crédibilité.

Règles clés pour les titres, tirées du skill :

- **Pas de tirets cadratins (—)** dans les titres. Utiliser les deux-points (:) ou reformuler en deux parties naturelles.
- **Pas de mots Tier 1** du skill (« comprehensive », « robust », « seamless », « leverage », « delve », etc.) ni leurs équivalents français (« exhaustif », « robuste », « approfondi », « levier », etc.).
- **Pas de formules creuses** : « Guide ultime », « Tout savoir sur », « Le guide complet de » sont des titres génériques qui n'apportent rien. Préférer un angle concret.
- **Pas de fausse ampleur** : « De X à Y » pour couvrir faussement un large spectre. Choisir l'angle qui compte.
- **Pas de questions rhétoriques mécaniques** en série. Une question en H2 est efficace, trois d'affilée sentent la génération automatique.
- **Varier le rythme** : alterner titres courts et titres plus longs. Si tous les H2 font la même longueur, c'est un signal d'écriture IA.
- **Sentence case** : ne pas mettre de majuscule à chaque mot dans les H2/H3. Seul le premier mot prend une majuscule (règle naturelle du français).
- **Test de lecture** : si un titre pourrait apparaître dans n'importe quel article sur n'importe quel sujet en changeant juste le mot clé, il est trop générique. Le reformuler avec un angle spécifique au sujet traité.

## Input

Le fichier de recherche SEO se trouve dans le sous-dossier `recherches-seo/` du dossier de travail. L'utilisateur peut soit fournir le nom du fichier, soit mentionner le mot clé — dans ce cas, chercher le fichier correspondant (`[mot-clé-slugifié].md`).

Si aucun fichier de recherche n'est trouvé, prévenir l'utilisateur et lui proposer de lancer d'abord le skill `seo-research-article`.

### Ce qu'il faut extraire du fichier de recherche

- Le **mot clé principal**
- Le **nombre de mots moyen** et la **fourchette** (min – max) — ils servent à définir le nombre de mots cible affiché dans le plan
- Les **structures de titres des concurrents** (H1 à H3) — pour comprendre les angles et sous-sujets couverts
- Le **champ lexical et sémantique** — en particulier les termes sémantiquement proches du mot clé
- La section **Inspiration Esprit Dog** si elle existe — son angle éditorial guide souvent la direction du contenu

## Processus de construction du plan

### Étape 1 — Analyser les patterns des concurrents

Examiner les structures de titres des 5 pages analysées pour identifier :

- Les sous-sujets systématiquement couverts (présents chez 3+ concurrents)
- Les angles originaux ou différenciants
- Les lacunes : sujets importants absents ou mal traités

Cette analyse ne doit pas être retranscrite dans le fichier de sortie — elle sert uniquement à alimenter la réflexion.

### Étape 2 — Appliquer le principe BLUF (Bottom Line Up Front)

Le plan doit suivre le principe BLUF : l'information la plus importante pour le lecteur arrive en premier. Concrètement, cela signifie que les premiers H2 doivent répondre directement à l'intention de recherche du lecteur (la réponse à sa question, la solution à son problème), et les H2 suivants développent le contexte, les nuances ou les approfondissements.

Ne pas commencer l'article par des définitions, de l'historique ou du contexte théorique — le lecteur cherche une réponse, pas un cours. Le contexte et les explications viennent après, quand le lecteur a déjà obtenu l'essentiel.

Exemple : pour "chien réactif en laisse", le lecteur veut savoir quoi faire. Le plan commence par la compréhension immédiate du problème et les solutions, puis développe les causes, les erreurs et les cas où consulter un pro.

### Étape 3 — Construire le H1

Le H1 doit :

- Contenir le mot clé principal de manière naturelle
- Rester fluide et facile à lire pour un visiteur humain (pas un empilement de mots clés)
- Inclure l'année en cours si le sujet s'y prête (guides, classements, réglementations, tendances — tout ce qui a une dimension temporelle). Ne pas forcer l'année si le sujet est intemporel.

Exemples de bons H1 :
- Mot clé "chien réactif" → "Chien réactif : comprendre et agir au quotidien"
- Mot clé "éduquer un chiot" → "Éduquer un chiot en 2026 : par où commencer"
- Mot clé "promener son chien en laisse" → "Comment bien promener son chien en laisse"

### Étape 4 — Construire les H2

**Contraintes :**

- **Maximum 6 H2.** Chaque H2 doit justifier sa place — s'il est possible de regrouper deux sous-sujets proches, le faire.
- **Entre 40% et 50% des H2 doivent intégrer des termes sémantiquement proches du mot clé principal**, et/ou le mot clé lui-même si c'est cohérent. L'objectif est le référencement naturel, mais la lisibilité prime toujours. Utiliser des mots de liaison, des reformulations ou des tournures naturelles pour que le titre reste agréable à lire. Concrètement, sur 6 H2, 3 doivent contenir un terme sémantique. Sur 5 H2, 2 ou 3. Sur 4 H2, 2.
- Les H2 restants (50-60%) sont libres : ils couvrent des angles complémentaires, des questions pratiques, des perspectives originales.

**Principes de rédaction des H2 :**

- Formuler des titres qui parlent au lecteur : préférer les tournures orientées solution ou compréhension (« Pourquoi votre chien… », « Comment réagir quand… ») plutôt que des titres encyclopédiques (« Définition de… », « Historique de… »).
- Refléter le ton de Kind Dog Training : direct, concret, rassurant. Pas académique.
- Varier les formulations : mélanger questions, affirmations, et tournures avec « comment/pourquoi ».

### Étape 5 — Construire les H3

- Nombre illimité, adapté au contexte de chaque H2.
- Les H3 découpent le H2 en sous-parties logiques.
- Pas d'obligation d'inclure des mots clés dans les H3 — la clarté et la logique du découpage priment.
- Si un H2 n'a pas besoin de H3 (sujet suffisamment ciblé), ne pas en forcer.

### Étape 6 — Construire la section FAQ

Ajouter un dernier H2 dédié à la FAQ, **en plus** des 6 H2 maximum du corps de l'article. Ce H2 ne compte pas dans le ratio sémantique ni dans la limite des 6 H2.

**Règles :**

- Le titre du H2 FAQ doit être contextualisé par rapport au sujet de l'article. Ne pas écrire « FAQ » tout seul — formuler quelque chose comme « Questions fréquentes sur [sujet contextualisé] ».
- Entre 2 et 4 questions maximum, chacune en H3.
- Les questions doivent être celles que le lecteur se pose réellement — s'inspirer des "People Also Ask" de Google et des questions implicites dans le contenu des concurrents.
- Formuler les questions de manière naturelle, comme un propriétaire de chien les poserait (pas comme un moteur de recherche).

Exemple :
```
## Questions fréquentes sur la réactivité en laisse
### Est-ce que mon chien peut devenir « normal » en promenade ?
### À partir de quel âge peut-on travailler la réactivité ?
### Faut-il éviter les autres chiens en attendant ?
```

### Étape 7 — Vérification finale

Avant de générer le fichier, vérifier :

1. **Respect des interdits** : aucun titre ne contient « éducation positive », « renforcement positif », « méthode coercitive », ni ne catégorise l'approche.
2. **Ratio sémantique** : compter les H2 contenant un terme sémantiquement proche du mot clé. Le ratio doit être entre 40% et 50%.
3. **Lisibilité** : relire chaque titre à voix haute mentalement. S'il sonne artificiel ou bourré de mots clés, le reformuler.
4. **Maximum 6 H2** : pas plus.
5. **Cohérence** : le plan raconte une progression logique — le lecteur doit pouvoir scanner les titres et comprendre le fil conducteur de l'article.
6. **BLUF** : les premiers H2 répondent directement à l'intention de recherche. Le contexte et les approfondissements viennent après.
7. **FAQ** : la section FAQ est présente, contextualisée, et contient entre 2 et 4 questions en H3.
8. **Anti-IA** : aucun titre ne contient de mot Tier 1 du skill avoid-ai-writing, pas de tiret cadratin, pas de formule creuse, et les titres varient en longueur et en formulation.

## Output

Sauvegarder le fichier dans le sous-dossier `plans-contenu/` du dossier de travail. Le nommer `plan-[mot-clé-slugifié].md`. Créer le sous-dossier s'il n'existe pas.

### Format du fichier de sortie

```markdown
# Plan de contenu : [Mot clé]

**Date :** [date du jour]
**Mot clé principal :** [mot clé]
**Nombre de mots cible :** [moyenne des concurrents] mots (fourchette : [min] – [max])
**Source :** recherches-seo/[nom-du-fichier-source].md

---

## Structure proposée

# [H1]

## [H2 — 1]
### [H3]
### [H3]

## [H2 — 2]
### [H3]

## [H2 — 3]

## [H2 — 4]
### [H3]
### [H3]
### [H3]

## [H2 — 5]

## [H2 — 6]
### [H3]
### [H3]

## [H2 FAQ — titre contextualisé]
### [Question 1]
### [Question 2]
### [Question 3]

---

## Notes techniques

- **Nombre de H2 :** [N]/6
- **H2 avec terme sémantique :** [N] sur [total] ([pourcentage]%)
- **Termes sémantiques utilisés :** [liste des termes sémantiques intégrés dans les H2]
```

## Notes importantes

- Toujours travailler en français
- Le plan est un outil de travail, pas un article — ne pas ajouter de contenu ni de briefs par section
- S'appuyer sur la recherche concurrentielle mais ne pas copier les structures des concurrents : le plan doit refléter l'angle éditorial de Kind Dog Training
- En cas de doute sur le ton ou l'angle, se référer aux fichiers de marque
