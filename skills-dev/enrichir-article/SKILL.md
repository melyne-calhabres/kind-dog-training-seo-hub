---
name: enrichir-article
description: "Skill d'enrichissement et d'amélioration d'un article déjà rédigé sur le site Kind Dog Training. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur demande d'enrichir un article, d'améliorer son contenu, de proposer des ajouts, d'auditer un article existant, de l'étoffer, de le renforcer, ou mentionne un fichier de articles/ avec l'intention de le retravailler sans repartir de zéro. Déclencher pour tout message contenant : \"enrichir l'article\", \"améliorer l'article\", \"audit de l'article\", \"propose des ajouts\", \"étoffer l'article\", \"renforcer le contenu\", \"que peut-on ajouter\", \"comment améliorer\", \"regarde l'article X et fais des propositions\", ou toute demande qui prend un article existant comme point de départ pour y ajouter du fond, des sections, des cas clients ou des questions de FAQ. Si l'utilisateur dit \"regarde l'article sur [sujet] et fais-moi des propositions\" ou \"cet article gagnerait à être enrichi\", ce skill est pertinent."
---

# Enrichir un article — audit puis rédaction sur validation

## Objectif

Prendre un article déjà publié ou déjà rédigé dans `articles/` et le rendre plus solide, plus complet, plus difficile à copier, sans le réécrire. Le skill fonctionne toujours en deux temps : d'abord un audit qui produit des propositions numérotées, ensuite la rédaction des seuls points validés par l'utilisateur.

### Pourquoi deux temps

Un article existant a déjà une voix, un rythme, des choix éditoriaux assumés. Réécrire directement casse ces choix. Proposer d'abord permet à l'utilisateur de trancher sur le fond avant que la forme ne soit touchée. C'est aussi la seule façon de respecter les « réflexes d'écriture » du texte en place, qui ne se corrigent que si l'utilisateur le demande explicitement.

## Contexte projet obligatoire

Avant toute action, consulter systématiquement :

- `CLAUDE.md` (instructions projet, règles non-négociables)
- `identite-de-marque.md`
- `ton-et-style.md`
- `audience-cible.md`
- `ligne-editoriale.md`

Ces fichiers fixent le vouvoiement, les mots bannis (« éducation positive », « renforcement positif », « méthode coercitive »), l'interdiction d'étiqueter la méthode dans un courant, la posture narrative de Mélyne, et le style d'écriture attendu.

## Sources d'enrichissement

Tout ce qui est proposé provient exclusivement de deux dossiers :

- **`base-de-connaissances/`** : le contenu de fond de Mélyne, organisé par thème. C'est la source principale pour trouver ce que l'article n'exploite pas encore.
- **`cas-clients/`** : les bilans anonymisés de chiens réels que Mélyne a suivis. Ils servent à illustrer, à ancrer dans le concret, à rendre le texte non copiable.

Rien n'est inventé. Une proposition sans source dans ces deux dossiers ne se fait pas. Un chiffre imprécis ou « sorti du chapeau » repéré dans l'article se signale comme correction à faire, pas comme donnée à conserver.

## Étape 1 — Audit et propositions

### 1.1 Cadrer le périmètre

Avant l'audit, confirmer avec l'utilisateur :

- Le fichier exact concerné (parfois plusieurs articles ont des noms proches, demander la confirmation)
- Le périmètre thématique de l'article s'il est ambigu. Exemple : « on ne traite que de la réactivité envers les chiens dans cet article ». Ce cadrage détermine tout : une section qui sort du périmètre sera proposée à la suppression même si elle est de qualité.

### 1.2 Lire à fond

Lire l'article en entier. Repérer :

- La structure H2/H3 actuelle
- Les cas clients déjà mobilisés (nommés ou anonymisés)
- Les chiffres avancés (à vérifier contre la base de connaissances)
- Les callouts existants
- Les notes techniques en fin de fichier (mots, densité, cas mobilisés)
- La FAQ actuelle
- Les « réflexes d'écriture » : parenthèses méta, disclaimers défensifs, transitions génériques, tournures personnelles. À noter mais à ne pas toucher sans demande explicite.

### 1.3 Croiser avec la base de connaissances

Ouvrir le ou les fichiers pertinents de `base-de-connaissances/`. Pour chaque bloc de la base :

- Vérifier s'il est déjà couvert dans l'article
- S'il ne l'est pas, il devient un candidat à l'ajout
- Prêter attention aux chiffres, aux angles rares, aux positions tranchées, aux mécaniques précises (protocoles, séquences)

### 1.4 Croiser avec les cas clients

Ouvrir `cas-clients/` et repérer les bilans qui matchent le thème. Deux angles :

- Cas déjà mobilisés dans l'article : peut-on aller plus loin, les nommer si opportun, raconter un détail précis
- Cas non mobilisés : à proposer, en indiquant l'angle qu'ils apporteraient

### 1.5 Produire les propositions

Structure fixe des propositions, dans cet ordre :

```markdown
## 1. Recentrage éditorial (si nécessaire)
[Signaler les sections hors périmètre à supprimer ou déplacer vers un autre article, avec liens fichier:ligne]

## 2. Ajouts de fond issus de la base de connaissances
[Liste à puces des blocs non exploités, chacun avec :
- description en une phrase
- lien fichier:ligne vers la source dans base-de-connaissances/
- pourquoi cet ajout renforce l'article]

## 3. Nouvelles sections à créer
[H2 ou H3 nouveaux, non couverts aujourd'hui, avec justification]

## 4. Corrections factuelles / chiffres à vérifier
[Chiffres imprécis, formulations comme « sorti de mon chapeau », affirmations non sourcées, à remplacer par des données de la base]

## 5. Cas clients à mobiliser
[Bilans non exploités, avec lien fichier et angle éditorial]

## 6. FAQ à enrichir
[Questions manquantes que l'audience-cible se pose sur ce thème]

## 7. Réflexes d'écriture repérés
[À NE PAS APPLIQUER sauf demande explicite. Simplement signalés pour transparence.]

## 8. Structure cible proposée
[L'ossature complète après enrichissement, numérotée, avec les nouveaux blocs marqués **Nouveau**]

## 9. Ordre de priorité
[Si l'article est gros, proposer un découpage par blocs pour avancer étape par étape]
```

### 1.6 Ne rien rédiger à cette étape

L'audit se termine par la présentation des propositions. Attendre la validation avant d'écrire quoi que ce soit dans le fichier.

## Étape 2 — Validation utilisateur

L'utilisateur répond point par point. Trois cas possibles pour chaque proposition :

- **Accepté** : à intégrer
- **Refusé** : à écarter
- **Modifié** : reformulé, découpé, restreint

Prêter une attention particulière aux instructions transversales que l'utilisateur peut donner à ce moment. Exemples réels :

- « Ne modifie pas les réflexes d'écriture. » Le point 7 des propositions est alors désactivé pour tout le reste du travail.
- « Garde le principe de BLUF. » Applicable à toute nouvelle section rédigée.
- « On ne traite que de X dans cet article. » Cadrage définitif pour tout le reste.

Reformuler la structure cible finale avant d'attaquer la rédaction, pour que l'utilisateur voie où on va atterrir.

## Étape 3 — Rédaction des modifications retenues

### 3.1 Principe BLUF (Bottom Line Up Front)

Chaque nouveau H2 et chaque nouveau H3 ouvre sur sa conclusion, pas sur le contexte. La démonstration vient après.

**Exemple 1 :**

Mauvais (contexte d'abord) :
> « Beaucoup de propriétaires me demandent si la castration peut aider. Voyons ensemble ce qu'on en sait aujourd'hui... »

Bon (BLUF) :
> « La castration peut aider sur une réactivité clairement hormonale, avec un gain de 20 à 30 %. Elle ne règle rien sur une réactivité par peur ou par frustration. »

**Exemple 2 :**

Mauvais :
> « La balade collective est un sujet qui divise, mais peut-être plus intéressant qu'on ne le pense... »

Bon :
> « Bien constituée, la balade collective est l'un des leviers les plus efficaces sur la réactivité congénères. Mal constituée, elle empire tout. »

### 3.2 Ne pas toucher aux réflexes d'écriture existants

Sauf demande explicite de l'utilisateur, on ne corrige pas :

- Les parenthèses méta (« (Je précise, parce que...) »)
- Les disclaimers défensifs (« Ce n'est évidemment pas le seul travail qui a été fait... »)
- Les transitions génériques (« Passons au concret », « Bonne nouvelle pour finir »)
- Les formulations personnelles assumées (« chiffre sorti de mon chapeau »)
- Les tournures « à la Mélyne » qui font partie de la voix

La seule exception : si un chiffre imprécis contredit la base de connaissances, il se corrige (c'est du fond, pas du style).

### 3.3 Respecter les règles non-négociables

- **Vouvoiement systématique** dans tout le nouveau contenu.
- **Mots interdits** : ne jamais utiliser « éducation positive », « renforcement positif », « méthode coercitive », ni catégoriser l'approche dans un courant étiqueté.
- **Pas de tirets cadratins (—)** comme rythme. Virgule, point ou parenthèses.
- **Pas de règle de trois** par défaut, pas de « ce n'est pas X, c'est Y », pas de « voyons » / « décomposons », pas de « en conclusion », pas de « tu n'es pas seul ».
- **Sois concret** : chiffres, noms, exemples. Fait non vérifié → demander à l'utilisateur, jamais inventer.
- **Bannis les AI-isms** courants : plonger, tirer parti, robuste, fluide, holistique, exhaustif, pivotal, méticuleux, transformateur, embrasser, en constante évolution, tapisserie, paysage / royaume, afin de, au bout du compte, il convient de noter que, quand il s'agit de, dans le monde d'aujourd'hui.

### 3.4 Insérer proprement dans le fichier

Utiliser l'outil Edit pour insérer les nouveaux blocs au bon endroit, sans casser le texte existant. Marqueurs d'insertion utiles :

- Après un H2 pour ajouter un nouveau H3 dans une section existante
- Avant un séparateur `---` pour ajouter un nouveau H2 entre deux sections
- Dans la FAQ, ajouter les nouvelles questions à la suite des existantes, avant le séparateur final

### 3.5 Task list

Créer une task par bloc validé. Passer chaque task en `in_progress` avant d'écrire, en `completed` après. Cela permet à l'utilisateur de suivre l'avancement quand l'enrichissement porte sur plusieurs blocs.

## Étape 4 — Mise à jour des notes techniques

À la fin, mettre à jour la section « Notes techniques » de l'article :

- **Nombre de mots** : recompter (`wc -w` sur le fichier)
- **Temps de lecture** : approximativement 220 mots/minute
- **Nombre de callouts** : recompter
- **Données terrain** : mettre à jour le nombre de sections concernées
- **Cas clients mobilisés** : ajouter les nouveaux cas
- **Nouveaux blocs ajoutés (enrichissement)** : lister les H2/H3 nouveaux, en clair, pour traçabilité future
- **Densité du mot clé** : indiquer qu'elle a été diluée mécaniquement par les ajouts et que la priorité reste la fluidité (à monitorer si le ranking le nécessite)

## Étape 5 — Synchroniser la version RAG

L'article existe aussi dans `C:\Users\Anthony\Desktop\KDT RAG system\articles\` sous le même nom de fichier. Cette copie alimente le système RAG et doit rester à jour, sinon les prochaines réponses générées à partir du RAG s'appuieront sur l'ancienne version.

La version RAG a une seule différence structurelle : un bloc YAML en tête de fichier, du type :

```yaml
---
titre: "..."
categorie: "..."
sujets: ["...", "..."]
url: "/education-canine/.../"
---
```

Procédure :

1. Lire le fichier RAG correspondant et **conserver son bloc YAML intact** (titre, categorie, sujets, url).
2. Remplacer tout le contenu situé sous le YAML par le contenu enrichi de `articles/<nom>.md` (sans son propre YAML si présent, l'article source du site n'en a normalement pas).
3. Réécrire le fichier RAG : YAML en tête + article enrichi en dessous.

Un simple `Write` sur le fichier RAG suffit, avec le YAML original recollé en tête. Ne pas modifier le YAML sauf si l'enrichissement change réellement la catégorie ou les sujets couverts (par exemple si on a ajouté un thème absent des `sujets`, prévenir l'utilisateur et proposer la mise à jour du champ).

Confirmer la synchronisation dans le récap final : « article RAG mis à jour à l'identique, YAML conservé ».

## Étape 6 — Récap final

Terminer par un récapitulatif court en chat qui liste :

- Les blocs ajoutés (avec titres exacts)
- Les corrections factuelles appliquées
- L'évolution du nombre de mots
- Ce qui a été volontairement laissé intact (réflexes d'écriture, périmètre)

Le récap est ce que l'utilisateur relira pour valider que le travail correspond bien à ce qui avait été convenu à l'étape 2.

## Cas d'usage complémentaires

### Enrichissement partiel

Si l'utilisateur veut avancer par blocs (« commence par la position de combat »), respecter l'ordre demandé. Chaque bloc suit le même cycle : proposition → validation → rédaction → mise à jour notes.

### Article très court à étoffer significativement

Si l'article fait moins de 1500 mots et que la base de connaissances est riche sur le sujet, prévenir l'utilisateur que l'enrichissement risque de doubler ou tripler la taille du texte. Proposer un découpage en 2-3 vagues plutôt qu'un enrichissement massif d'un coup.

### Article à recentrer

Si l'article couvre plusieurs thèmes et que l'utilisateur veut le recentrer sur un seul, le point 1 des propositions (recentrage) devient prioritaire. Signaler les sections hors périmètre avec lien fichier:ligne et proposer de les supprimer avant d'enrichir. Ne pas supprimer sans validation.

### Article validé mais dont on ne veut pas toucher le style

Cas classique. L'utilisateur dit « ne modifie pas les réflexes d'écriture ». Retirer alors le point 7 des propositions et ne jamais reformuler une phrase existante sauf pour corriger un chiffre faux ou déplacer un paragraphe. Toute nouvelle rédaction pour les blocs ajoutés reste soumise aux règles du 3.3.

## Anti-patterns à éviter

- **Rédiger avant validation.** Le skill ne fonctionne que si l'audit passe avant la plume.
- **Inventer un chiffre pour combler un trou.** Toujours renvoyer à la base ou demander.
- **Supprimer une section sans validation**, même quand elle est manifestement hors périmètre.
- **Réécrire des paragraphes existants pour « améliorer le style »** quand l'utilisateur n'a pas demandé.
- **Ajouter un cas client inventé** ou modifier un cas existant. Les cas clients sont des données réelles.
- **Utiliser un vocabulaire de méthode étiquetée** (voir mots bannis).
- **Multiplier les callouts** au point que l'article devient une succession d'encadrés. Un callout doit gagner sa place.
