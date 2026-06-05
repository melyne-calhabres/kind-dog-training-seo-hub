---
name: seo-article-writing
description: "Skill de rédaction d'article SEO complet à partir d'un plan de contenu existant. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande de rédiger un article, écrire du contenu, passer à la rédaction, ou mentionne un fichier dans plans-contenu/. Déclencher pour tout message contenant : \"rédiger l'article\", \"écrire l'article\", \"passer à la rédaction\", \"rédiger le contenu\", \"écrire le contenu\", ou toute demande qui suit logiquement un plan de contenu et vise la production du texte final. Si l'utilisateur dit \"le plan est prêt, on rédige\" ou \"écris-moi l'article sur [sujet]\", ce skill est pertinent. Également pertinent si l'utilisateur mentionne un fichier dans plans-contenu/ et veut en tirer un article rédigé."
---

# SEO Article Writing — Rédaction d'article à partir d'un plan de contenu

## Objectif

À partir du plan de contenu produit par le skill `seo-content-plan` **et de la base de connaissances**, rédiger l'intégralité de l'article : contenu principal, FAQ, callouts, encart "À retenir" et estimation du temps de lecture.

### Règle fondamentale : sourcing strict

Tout le fond de l'article provient exclusivement de la base de connaissances située dans `base-de-connaissances/`. Rien n'est inventé, rien n'est extrapolé. Si une information n'a pas de source dans la base, elle n'apparaît pas dans l'article. C'est la règle la plus importante du skill, et la raison est simple : Mélyne est éducatrice canine professionnelle, et le contenu publié sur son site doit refléter ses connaissances réelles, pas des généralités trouvées ailleurs.

### Écriture anti-IA

Le skill `avoid-ai-writing` doit être lu et appliqué intégralement pendant la rédaction. L'article sera publié sur un site professionnel — s'il sonne comme du contenu généré par IA, il perd toute crédibilité auprès des lecteurs et de Google. Le profil de contexte à appliquer est `blog` (toutes les règles au maximum).

## Prérequis

Avant de commencer la rédaction, lire dans cet ordre :

1. Les fichiers de référence de la marque dans le dossier de travail :
   - `identite-de-marque.md`
   - `ton-et-style.md`
   - `audience-cible.md`
   - `ligne-editoriale.md`

2. Le skill `avoid-ai-writing` (SKILL.md) — le lire en entier pour intégrer ses règles pendant la rédaction.

3. Le plan de contenu (input) dans `plans-contenu/`.

Trois règles absolues à garder en tête en permanence :

1. Ne jamais utiliser les termes « éducation positive », « renforcement positif » ou « méthode coercitive ».
2. Ne jamais catégoriser l'approche dans un courant étiqueté.
3. Toujours vouvoyer le lecteur.

## Input

Le fichier du plan de contenu se trouve dans le sous-dossier `plans-contenu/` du dossier de travail. L'utilisateur peut fournir le nom du fichier ou mentionner le sujet — dans ce cas, chercher le fichier correspondant (`plan-[mot-clé-slugifié].md`).

Si aucun plan de contenu n'est trouvé, prévenir l'utilisateur et lui proposer de lancer d'abord le skill `seo-content-plan`.

### Ce qu'il faut extraire du plan

- Le **H1** et toute la **structure H2/H3** (y compris la FAQ)
- Le **mot clé principal**
- Le **nombre de mots cible** et la **fourchette**
- Les **termes sémantiques** mentionnés dans les notes techniques
- Le **positionnement dans l'arborescence** (pour comprendre le contexte de la page, pas pour créer des liens — le maillage interne est géré séparément par l'utilisateur)

## Processus de rédaction

### Étape 1 — Explorer la base de connaissances en cercles concentriques

L'éducation canine fonctionne en cercle : chaque problématique est liée à d'autres. Un chien qui saute a probablement des problèmes de gestion émotionnelle, peut-être de frustration, peut-être un manque de dépense via les promenades. Le symptôme visible n'est pas forcément ce qu'on travaille en premier — tout dépend de la globalité. La rédaction doit refléter cette vision systémique.

**Passe 1 — Fichiers directement liés au sujet**

À partir du mot clé principal et des H2/H3 du plan, identifier les fichiers de `base-de-connaissances/` dont le nom ou le contenu traite directement du sujet. Les lire en entier.

**Passe 2 — Sujets connexes (premier cercle)**

Dans les fichiers de la passe 1, relever les concepts, problématiques et mécanismes évoqués qui sont liés au sujet sans en être le coeur. Aller lire les fichiers de la base qui traitent de ces sujets connexes.

**Passe 3 — Deuxième cercle (dernier)**

Appliquer la même logique une dernière fois sur les fichiers de la passe 2. S'arrêter là — trois niveaux suffisent pour avoir une vision riche sans boucler indéfiniment.

**Synthèse**

Constituer mentalement l'inventaire de la matière disponible : concepts clés, mécanismes, erreurs courantes, approches recommandées. Toute la rédaction s'appuie sur cette matière et uniquement sur elle.

### Étape 2 — Rédiger le contenu principal

Rédiger chaque section (H2 puis H3) dans l'ordre du plan. Le plan ne doit pas être modifié — les titres sont déjà validés.

#### Ton et style

Le ton est celui de Mélyne : professionnel mais humain, direct, empathique, rassurant. Elle écrit en tant que professionnelle ET propriétaire de chien. Elle peut faire référence à son vécu avec Ramsey (son staffie) pour illustrer un propos.

Concrètement :
- Phrases relativement courtes et percutantes, mélangées avec des phrases plus longues pour varier le rythme
- Interpellation directe du lecteur (« Vous avez sûrement déjà entendu… »)
- Alternance entre explication et adresse au lecteur
- Sérieux sur le fond, décontracté sur la forme
- Pas de jargon inutile, pas de ton académique
- **Une à deux touches d'humour par article, pas plus.** Mélyne aime glisser une remarque légère ou une formulation qui fait sourire. Ça crée de la proximité et ça la démarque du ton sérieux de la plupart des éducateurs. L'humour doit rester ponctuel et naturel : une observation décalée, une autodérision sur le quotidien avec un chien, une image qui fait mouche. Si la phrase d'humour semble forcée ou plaquée, la retirer. L'article reste sérieux dans son propos, l'humour est un assaisonnement, pas le plat.

#### Arc émotionnel

L'article doit transmettre une émotion, pas seulement informer. Trois règles pour ça :

**1. Empathie à la première personne**

Mélyne peut nommer ce que vit le lecteur — son découragement, son doute, sa confusion. Mais toujours depuis son point de vue à elle, jamais depuis un "on" anonyme. Exemples : « je connais bien cette situation », « je vois ça régulièrement avec les personnes que j'accompagne », « vous êtes peut-être découragé, et c'est tout à fait compréhensible ». Ces formules créent de la proximité sans dramatiser.

**2. Information d'abord, émotion après**

L'explication ou la solution arrive toujours en premier. Une fois que le lecteur a la réponse, on peut ancrer ça dans son vécu pour qu'il sente que l'article lui parle vraiment. Cette séquence (information → reconnaissance du vécu) se place **1 à 2 fois maximum par article** selon sa longueur. Trop souvent, ça devient du pathos.

**3. Image concrète de l'après**

À la fin d'une section importante (ou de l'article), terminer avec une phrase qui visualise le résultat réel — quelque chose que le lecteur peut imaginer concrètement. Pas une promesse floue (« avec de la patience, vous y arriverez »), mais une image précise de ce que ça donne en pratique. Exemple : « Dans quelques semaines, ce rappel qui vous donnait des sueurs froides dans le parc deviendra un automatisme. Pas de la magie — juste du travail fait dans le bon sens. »

#### Contraintes de rédaction

**Paragraphes : 300 mots maximum.** Découper naturellement. Un paragraphe = une idée. Si un concept nécessite plus de 300 mots, le scinder en plusieurs paragraphes avec une progression logique.

**Densité du mot clé : environ 2,5%.** Ce ratio est un objectif souple, pas une contrainte rigide. La priorité reste la qualité de lecture. Intégrer le mot clé et ses variantes naturelles dans le flux du texte. Utiliser des mots de liaison, des reformulations, des pronoms pour éviter toute répétition forcée. Si atteindre 2,5% rend le texte artificiel, rester en dessous. Le keyword stuffing est pire que la sous-optimisation.

Pour calculer : sur un article de 1 000 mots, 2,5% = environ 25 occurrences du mot clé (ou de variantes proches). Compter le mot clé principal + ses déclinaisons naturelles (singulier/pluriel, avec/sans déterminant, reformulations proches).

**Sourcing strict** : chaque affirmation, conseil, explication doit être traçable à un contenu de la base de connaissances. Ne rien inventer. Si la base ne couvre pas un angle prévu dans le plan, le signaler à l'utilisateur plutôt que d'improviser.

#### Callouts

Insérer entre 1 et 6 callouts dans l'article pour fluidifier la lecture et la rendre plus personnelle. Viser environ 1 callout tous les 250-300 mots.

Un callout est un encart qui sort du flux normal du texte. Il peut servir à :
- Donner un conseil pratique tiré du terrain
- Partager un retour d'expérience de Mélyne
- Souligner un point contre-intuitif ou une erreur fréquente
- Apporter une nuance importante

Format markdown (blockquote) :

Callout avec titre :
```
> **Titre du callout**
> Contenu du callout. Une à trois phrases maximum. Court, percutant, utile.
```

Callout sans titre :
```
> Contenu du callout. Peut être une observation terrain, un conseil direct, ou une parenthèse personnelle.
```

Le choix entre avec ou sans titre dépend du contexte — si le callout a besoin d'être annoncé pour être compris, mettre un titre. S'il fonctionne seul comme une aparté naturelle, pas besoin.

Les callouts ne doivent pas répéter ce qui est dit dans le texte principal. Ils apportent un angle complémentaire : vécu personnel, mise en garde, astuce concrète.

### Étape 3 — Rédiger la FAQ

Rédiger les réponses aux questions listées dans la section FAQ du plan. Chaque réponse doit :

- Répondre directement à la question (pas de détour, pas d'introduction qui reformule la question)
- Faire entre 50 et 150 mots — concis et utile
- S'appuyer sur la base de connaissances
- Garder le même ton que le reste de l'article

Ne pas ajouter de callout dans la FAQ.

### Étape 4 — Vérification anti-IA

Relire l'article complet en appliquant les règles du skill `avoid-ai-writing`. Vérifier en particulier :

- Aucun mot Tier 1 (delve, leverage, robust, comprehensive, etc. et leurs équivalents français)
- Aucun tiret cadratin (—) dans tout l'article, sans exception. Utiliser les deux-points, des virgules, des points, ou reformuler
- Pas de formules creuses ou de transitions mécaniques (« De plus », « Par ailleurs », « Il est important de noter que »)
- Variation du rythme : longueurs de phrases et de paragraphes variées
- Pas de structure trop uniforme (tous les paragraphes de la même taille = signal IA)
- Pas de conclusions génériques (« En résumé », « L'essentiel est de »)
- Test de lecture : le texte sonne-t-il comme un humain qui écrit, ou comme une IA qui génère ?

Si des problèmes sont détectés, réécrire les passages concernés.

### Étape 5 — Vérification du mot clé

Compter les occurrences du mot clé principal et de ses variantes dans l'article. Calculer la densité :

`(nombre d'occurrences / nombre total de mots) × 100`

Si la densité est très en dessous de 2% ou au-dessus de 3%, ajuster. Mais toujours en préservant la fluidité de lecture — un texte naturel prime sur un ratio mathématique.

Reporter le résultat en fin de fichier dans les notes techniques.

### Étape 6 — Temps de lecture

Calculer le nombre total de mots de l'article (contenu principal + FAQ, sans les notes techniques). Estimer le temps de lecture :

- Vitesse moyenne de lecture : 130-180 mots/minute pour du contenu web
- Arrondir au chiffre le plus proche (pas de « 4 minutes 23 secondes »)

Ce temps sera affiché en haut de l'article dans le fichier de sortie.

### Étape 7 — Encart "À retenir"

Rédiger un encart de synthèse qui sera placé en haut de l'article, juste après le H1. Son titre est "À retenir".

Cet encart résume les principaux sujets et réponses apportées par l'article en bullet points. Il sert de résumé rapide pour le lecteur pressé et de preview pour celui qui hésite à lire l'article en entier.

Règles :
- Entre 4 et 10 bullet points selon la longueur de l'article
- Chaque point fait une phrase, deux maximum
- Le ton reste le même que l'article (direct, concret)
- Les points reprennent les idées-forces de l'article, pas les titres des H2
- Pas de formulation vague : chaque point doit apporter une information concrète

## Output

Le fichier de sortie est un fichier markdown sauvegardé dans `articles/` à la racine du dossier de travail. Nom du fichier : `[mot-clé-slugifié].md`.

### Structure du fichier de sortie

```markdown
# [H1 du plan]

**Temps de lecture : [X] minutes**

> **À retenir**
> - Point 1
> - Point 2
> - Point 3
> - ...

---

[Contenu de l'article : H2, H3, paragraphes, callouts]

[Section FAQ]

---

## Notes techniques

- **Mot clé principal :** [mot clé]
- **Nombre de mots :** [total]
- **Densité du mot clé :** [X]% ([N] occurrences)
- **Nombre de callouts :** [N]
- **Fourchette cible :** [min – max] mots
```

## Checklist finale

Avant de livrer l'article, vérifier ces points :

1. **Sourcing** : tout le contenu provient de la base de connaissances, rien n'est inventé
2. **Termes interdits** : aucune occurrence de « éducation positive », « renforcement positif », « méthode coercitive »
3. **Vouvoiement** : le lecteur est toujours vouvoyé, sans exception
4. **Anti-IA** : l'article passe le filtre avoid-ai-writing (pas de mots Tier 1, rythme varié, transitions naturelles)
5. **Paragraphes** : aucun ne dépasse 300 mots
6. **Mot clé** : densité aux alentours de 2,5% (entre 2% et 3%)
7. **Callouts** : entre 1 et 6, environ 1 tous les 250-300 mots, en blockquote markdown
8. **FAQ** : toutes les questions du plan ont une réponse (50-150 mots chacune)
9. **À retenir** : encart présent en haut, entre 4 et 10 points selon la longueur
10. **Temps de lecture** : estimé et affiché
11. **Nombre de mots** : dans la fourchette cible du plan
12. **Structure** : l'article suit exactement la structure H2/H3 du plan, sans modification
