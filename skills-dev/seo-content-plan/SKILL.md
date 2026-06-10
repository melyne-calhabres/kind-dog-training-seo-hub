---
name: seo-content-plan
description: "Skill de création de plan de contenu SEO (structure H1/H2/H3) à partir d'une recherche concurrentielle existante. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande un plan de contenu, une structure d'article, un squelette de rédaction, ou veut organiser ses titres avant d'écrire. Déclencher pour tout message contenant : \"plan de contenu\", \"structure d'article\", \"plan de rédaction\", \"créer les titres\", \"organiser les H2\", \"préparer le squelette\", \"structurer l'article\", ou toute demande qui suit logiquement une recherche SEO et précède la rédaction. Si l'utilisateur dit \"j'ai fait la recherche, maintenant on passe à la structure\" ou \"prépare-moi le plan\", ce skill est pertinent. Également pertinent si l'utilisateur mentionne un fichier dans recherches-seo/ et veut en tirer un plan."
---

# SEO Content Plan — Structure de titres pour article

## Objectif

À partir du fichier de recherche SEO produit par le skill `seo-research-article` **et de la base de connaissances**, construire un plan de contenu structuré (H1, H2, H3) prêt à servir de squelette pour la rédaction. Le plan est un outil de travail : il ne contient que les titres, pas de brief ni de contenu.

### Règle fondamentale : sourcing strict

**Tout le fond du plan (angles, sous-sujets, idées) doit provenir exclusivement de la base de connaissances** située dans `base-de-connaissances/`. Rien n'est inventé, rien n'est extrapolé. Si un angle n'a aucun appui dans la base, il n'apparaît pas dans le plan.

Le fichier de recherche SEO sert uniquement à fournir les **données SEO** : mot clé principal, termes sémantiques, nombre de mots cible. Il ne dicte ni les angles, ni les sous-sujets, ni la structure du fond de l'article.

### Principe clé : l'éducation canine est un ensemble

L'éducation canine fonctionne en cercle : chaque problématique est liée à d'autres. Un chien qui saute a probablement des problèmes de gestion émotionnelle, peut-être de frustration, peut-être un manque de dépense via les promenades, etc. Le symptôme visible (les sauts) n'est pas forcément ce qu'on travaille en premier — tout dépend de la globalité. Le plan doit refléter cette vision systémique en explorant les sujets connexes, pas seulement le sujet frontal.

### Principe clé : chaque section s'ancre dans une donnée de terrain

L'objectif n'est pas de produire un article de plus sur le sujet — c'est de produire un article que personne d'autre ne peut écrire. Chaque H2 du plan doit s'appuyer sur au moins un élément concret issu de l'expérience de terrain : un cas observé en séance, un mécanisme constaté en pratique, une erreur vue chez un client, un résultat obtenu sur un chien réel.

**Sources de matière terrain (par ordre de priorité) :**

1. `base-de-connaissances/` — source principale. Les fichiers contiennent des observations, des mécanismes et des approches issues de la pratique.
2. `cas-clients/` — source complémentaire. Si un angle est pertinent pour le plan mais manque de matière concrète dans la base de connaissances, aller chercher dans les cas clients des exemples réels qui ancrent la section. Un cas client apporte ce qu'aucune IA ni aucun concurrent ne peut inventer : des situations vécues, des contextes précis, des résultats observés.

Si un angle n'a de matière terrain ni dans la base de connaissances ni dans les cas clients, il est rétrogradé en H3 sous un H2 plus large, ou abandonné. Un plan rempli de théorie généraliste qu'on pourrait trouver sur n'importe quel site n'a aucune valeur — même s'il coche toutes les cases SEO.

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
- Le **nombre de mots moyen** et la **fourchette** (min – max) — affichés à titre indicatif dans le plan, mais pas comme un objectif à atteindre. La fourchette des concurrents reflète ce qui existe, pas ce qui devrait exister. Si la matière terrain couvre le sujet en 800 mots avec précision et authenticité, c'est 800 mots. Un article court mais impossible à reproduire sans expérience de terrain vaut plus qu'un article long rempli de généralités écrites pour le ranking
- Le **champ lexical et sémantique** — en particulier les termes sémantiquement proches du mot clé

Les structures de titres des concurrents ne sont **pas** utilisées pour construire le fond du plan. Elles servent uniquement de référence SEO (quels termes sémantiques sont utilisés, quel volume de mots est attendu).

### Contexte d'arborescence du site

Avant de construire le plan, lire le fichier d'arborescence du site :

`mots_cles_education_canine - Arborescence.csv`

Ce fichier CSV contient la future arborescence complète du site, organisée en niveaux hiérarchiques (Niveau 1 à Niveau 5). Il sert à :

1. **Choisir le bon angle** : identifier où la page en cours de rédaction se situe dans l'arborescence, et adapter l'angle du contenu en conséquence. Une page parent (ex. /education-canine/apprentissages/obeissance/) doit couvrir le sujet de manière à introduire et relier ses pages enfants (marche en laisse, marche au pied, ordres, etc.), sans pour autant les rédiger à leur place.

2. **Éviter les répétitions entre pages** : ne pas traiter en profondeur un sujet qui a sa propre page dédiée ailleurs dans l'arborescence. Par exemple, si « marche en laisse » a sa propre URL, la page « obéissance » doit l'évoquer pour la cohérence mais pas la détailler — c'est le rôle de la page dédiée.

3. **Faciliter le maillage interne par cocon sémantique** : le plan doit naturellement préparer les liens internes vers les pages sœurs, enfants ou parentes. Si une page couvre un sujet qui a des sous-pages, le plan doit intégrer des H2 ou H3 qui correspondent à ces sous-pages pour créer des ponts naturels.

4. **Identifier les pages voisines (sœurs)** : les pages au même niveau hiérarchique traitent de sujets proches mais distincts. Le plan doit se différencier clairement de ces pages voisines pour éviter la cannibalisation SEO.

Concrètement, pour chaque plan :
- Repérer la branche de l'arborescence correspondant au mot clé
- Lister les pages enfants (ce qu'on peut évoquer et vers quoi on maillera)
- Lister les pages sœurs (ce qu'on doit éviter de trop développer)
- Lister la page parente (pour comprendre le contexte plus large)
- Intégrer ces informations dans la section « Notes techniques » du plan de sortie

## Processus de construction du plan

### Étape 1 — Explorer la base de connaissances en cercles concentriques

C'est l'étape centrale. L'objectif est de rassembler toute la matière disponible dans `base-de-connaissances/` pour nourrir le plan, en respectant la logique systémique de l'éducation canine.

**Passe 1 — Fichiers directement liés au sujet**

À partir du mot clé principal, identifier les fichiers dont le nom ou le contenu traite directement du sujet. Lire ces fichiers en entier.

Exemple pour "chien qui saute" : les fichiers sur les sauts, l'excitation, la gestion de l'excitation.

**Passe 2 — Sujets connexes (premier cercle)**

Dans les fichiers de la passe 1, relever tous les concepts, problématiques et mécanismes évoqués qui ne sont pas le sujet principal mais qui y sont liés. Puis aller chercher les fichiers de la base qui traitent de ces sujets connexes et les lire.

Exemple : les fichiers sur les sauts mentionnent la frustration, la gestion émotionnelle, le manque de dépense, la cohérence du maître → aller lire les fichiers sur la frustration, les besoins du chien, la promenade, etc.

**Passe 3 — Deuxième cercle (dernier)**

Appliquer la même logique une dernière fois : dans les fichiers de la passe 2, identifier les nouveaux concepts qui n'ont pas encore été explorés et aller lire les fichiers correspondants. S'arrêter là — pas de troisième cercle pour éviter de boucler sans fin.

**Synthèse de l'exploration**

À la fin des 3 passes, constituer mentalement un inventaire de la matière disponible : les concepts clés, les mécanismes expliqués, les erreurs courantes identifiées, les approches recommandées. C'est uniquement à partir de cette matière que le plan sera construit.

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

Les H2 sont construits à partir de la matière identifiée dans la base de connaissances à l'étape 1. Chaque H2 doit correspondre à un concept, un mécanisme ou un angle réellement présent dans la base.

**Contraintes :**

- **Maximum 6 H2.** Chaque H2 doit justifier sa place — s'il est possible de regrouper deux sous-sujets proches, le faire.
- **Entre 40% et 50% des H2 doivent intégrer des termes sémantiquement proches du mot clé principal**, et/ou le mot clé lui-même si c'est cohérent. Les termes sémantiques proviennent du fichier de recherche SEO — c'est le seul apport des données concurrentielles au plan. L'objectif est le référencement naturel, mais la lisibilité prime toujours. Utiliser des mots de liaison, des reformulations ou des tournures naturelles pour que le titre reste agréable à lire. Concrètement, sur 6 H2, 3 doivent contenir un terme sémantique. Sur 5 H2, 2 ou 3. Sur 4 H2, 2.
- Les H2 restants (50-60%) sont libres : ils couvrent des angles complémentaires issus de la base de connaissances.

**Principes de rédaction des H2 :**

- Formuler des titres qui parlent au lecteur : préférer les tournures orientées solution ou compréhension (« Pourquoi votre chien… », « Comment réagir quand… ») plutôt que des titres encyclopédiques (« Définition de… », « Historique de… »).
- Refléter le ton de Kind Dog Training : direct, concret, rassurant. Pas académique.
- Varier les formulations : mélanger questions, affirmations, et tournures avec « comment/pourquoi ».

### Étape 5 — Construire les H3

- Nombre illimité, adapté au contexte de chaque H2.
- Les H3 découpent le H2 en sous-parties logiques, toujours à partir de la matière de la base de connaissances.
- Pas d'obligation d'inclure des mots clés dans les H3 — la clarté et la logique du découpage priment.
- Si un H2 n'a pas besoin de H3 (sujet suffisamment ciblé), ne pas en forcer.

### Étape 6 — Construire la section FAQ

Ajouter un dernier H2 dédié à la FAQ, **en plus** des 6 H2 maximum du corps de l'article. Ce H2 ne compte pas dans le ratio sémantique ni dans la limite des 6 H2.

**Règles :**

- Le titre du H2 FAQ doit être contextualisé par rapport au sujet de l'article. Ne pas écrire « FAQ » tout seul — formuler quelque chose comme « Questions fréquentes sur [sujet contextualisé] ».
- Entre 2 et 4 questions maximum, chacune en H3.
- Les questions doivent être celles que le lecteur se pose réellement — s'inspirer des "People Also Ask" de Google et des questions implicites dans la base de connaissances.
- Formuler les questions de manière naturelle, comme un propriétaire de chien les poserait (pas comme un moteur de recherche).
- **Ne rédiger aucune réponse sous les H3 de la FAQ.** À cette étape on pose uniquement le plan (titres des questions). La rédaction viendra plus tard.
- S'assurer que les réponses à ces questions *pourront* être couvertes par la base de connaissances lors de la rédaction.

Exemple :
```
## Questions fréquentes sur la réactivité en laisse
### Est-ce que mon chien peut devenir « normal » en promenade ?
### À partir de quel âge peut-on travailler la réactivité ?
### Faut-il éviter les autres chiens en attendant ?
```

### Étape 7 — Vérification finale

Avant de générer le fichier, vérifier :

1. **Sourcing strict** : chaque H2 et H3 est traçable à un contenu de la base de connaissances. Aucun angle n'a été inventé.
2. **Respect des interdits** : aucun titre ne contient « éducation positive », « renforcement positif », « méthode coercitive », ni ne catégorise l'approche.
3. **Ratio sémantique** : compter les H2 contenant un terme sémantiquement proche du mot clé. Le ratio doit être entre 40% et 50%.
4. **Lisibilité** : relire chaque titre à voix haute mentalement. S'il sonne artificiel ou bourré de mots clés, le reformuler.
5. **Maximum 6 H2** : pas plus.
6. **Cohérence** : le plan raconte une progression logique — le lecteur doit pouvoir scanner les titres et comprendre le fil conducteur de l'article.
7. **BLUF** : les premiers H2 répondent directement à l'intention de recherche. Le contexte et les approfondissements viennent après.
8. **FAQ** : la section FAQ est présente, contextualisée, et contient entre 2 et 4 questions en H3.
9. **Anti-IA** : aucun titre ne contient de mot Tier 1 du skill avoid-ai-writing, pas de tiret cadratin, pas de formule creuse, et les titres varient en longueur et en formulation.
10. **Arborescence** : le plan respecte le positionnement dans l'arborescence du site — pas de chevauchement avec les pages sœurs ou enfants dédiées, et le maillage interne est cohérent avec le cocon sémantique.
11. **Donnée terrain** : chaque H2 est adossé à au moins un élément concret issu de l'expérience (cas observé, mécanisme constaté en séance, erreur vue sur le terrain, résultat obtenu avec un chien réel). Si un H2 ne repose que sur de la théorie généraliste trouvable partout, le reformuler autour d'un angle terrain ou le supprimer.

## Output

Sauvegarder le fichier dans le sous-dossier `plans-contenu/` du dossier de travail. Le nommer `plan-[mot-clé-slugifié].md`. Créer le sous-dossier s'il n'existe pas.

### Format du fichier de sortie

```markdown
# Plan de contenu : [Mot clé]

**Date :** [date du jour]
**Mot clé principal :** [mot clé]
**Nombre de mots cible :** [moyenne des concurrents] mots (fourchette : [min] – [max])
**Source SEO :** recherches-seo/[nom-du-fichier-source].md

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

## Positionnement dans l'arborescence

- **URL cible :** /[chemin déduit de l'arborescence]/
- **Page parente :** [nom et URL de la page parente]
- **Pages enfants :** [liste des sous-pages qui auront leur propre contenu]
- **Pages sœurs :** [liste des pages au même niveau à ne pas cannibaliser]
- **Maillage interne prévu :** [liste des pages vers lesquelles le contenu pourra naturellement pointer]

## Lacunes identifiées

[Lister ici les sujets qui semblent pertinents pour le mot clé (par logique ou par présence chez les concurrents) mais qui n'ont aucune couverture dans la base de connaissances. Si aucune lacune, écrire « Aucune lacune identifiée. »]
```

## Notes importantes

- Toujours travailler en français
- Le plan est un outil de travail, pas un article — ne pas ajouter de contenu ni de briefs par section
- Le fond du plan vient **exclusivement** de la base de connaissances — les concurrents ne servent qu'aux données SEO (mots clés, termes sémantiques, volume de mots)
- En cas de doute sur le ton ou l'angle, se référer aux fichiers de marque