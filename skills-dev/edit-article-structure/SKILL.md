---
name: "edit-article-structure"
description: "Audit structurel d'un article rédigé : détecte les problèmes de structure grammaticale, hiérarchie de l'information, nominalisations, modifieurs, participes, voix, verbes faibles, phrases surchargées, ordre logique. Produit une liste numérotée de propositions à valider — ne modifie jamais le texte directement. Déclencher pour \"audit structurel\", \"révise la structure\", \"check la structure\", \"propose des améliorations de structure\", \"édite le fond\", \"clarifie les phrases\", ou après la rédaction d'un article pour un passage structure avant le check AI-isms."
---

# edit-article-structure — Audit structurel d'un article (propositions uniquement)

Tu réalises un **audit structurel** d'un article rédigé. Tu ne modifies **jamais** le texte directement. Tu produis une **liste numérotée de propositions** que l'auteur valide, refuse ou modifie une par une.

Ce skill complète `avoid-ai-writing` (qui s'occupe du lexique, du formatage et des tics IA). Ici, on s'occupe uniquement de la **structure grammaticale, du flow d'information et de la cognition du lecteur**.

Applique les règles en français. Les watchlists sont adaptées.

---

## Ta mission

1. Lire l'article en entier une première fois pour saisir l'intention
2. Analyser passe par passe (12 axes ci-dessous)
3. Consolider en **une seule liste numérotée** ordonnée par apparition dans le texte
4. Chaque proposition est indépendante et validable seule
5. Ne rien réécrire dans le fichier source

---

## Format de sortie obligatoire

```
# Audit structurel — [titre article]

**Résumé** : X propositions ([N] critiques, [N] importantes, [N] optionnelles)

**Répartition par type** : BACKBONE ×N, NOM ×N, MOD ×N, PAR ×N, PART ×N, GAP ×N, ORDER ×N, PASS ×N, WV ×N, SPLIT ×N, END ×N, REP ×N

---

## Propositions

### #1 — [CODE] [Sévérité]
**Localisation** : § X, phrase Y (ou titre H2 "…")
**Original** :
> [citation exacte]

**Problème** : [1-2 lignes, explication du frottement cognitif]

**Proposition** :
> [réécriture proposée]

**Principe** : [nom du principe appliqué, ex. "Backbone visible" ou "Cause avant effet"]

---

### #2 — [CODE] [Sévérité]
…
```

**Sévérités** :
- **[Critique]** : phrase illisible, sens ambigu, ou pattern qui casse la logique du paragraphe
- **[Important]** : friction cognitive forte, à corriger avant publication
- **[Optionnel]** : amélioration de confort, dépend du style souhaité

**Règles de production** :
- Numérotation continue (#1, #2, #3…) pour référencer facilement ("je valide #3, #7, #12")
- Une seule proposition par entrée (ne jamais grouper "corriger #3 et #4 ensemble")
- Si une phrase cumule plusieurs problèmes, faire plusieurs entrées séparées avec des sous-numéros (#5a, #5b)
- Toujours citer l'original tel qu'il apparaît (guillemets, formatage préservé)
- Ne pas proposer plus d'une réécriture par entrée — l'auteur choisit oui/non/modifier

**Rien à signaler** : si un axe ne produit aucune proposition, l'indiquer dans le résumé ("Voix passive : rien à signaler").

---

## Codes diagnostiques

| Code | Signification |
|------|--------------|
| BACKBONE | Colonne vertébrale de la phrase (S-V-O) faible ou introuvable |
| NOM | Nominalisation : action cachée dans un nom |
| MOD | Modifieur qui surcharge ou enterre le sujet principal |
| PAR | Parenthèse qui interrompt le fil de la phrase |
| PART | Participe présent (gérondif) qui cache l'idée principale |
| GAP | Distance trop longue entre sujet et verbe |
| ORDER | Information dans un ordre non naturel (effet avant cause, exemple avant claim) |
| PASS | Voix passive à interroger (acteur manquant important) |
| WV | Verbe faible (effectuer, réaliser, procéder à) qui cache un verbe fort |
| SPLIT | Phrase qui contient plusieurs idées indépendantes en compétition |
| END | Fin de phrase faible (idée importante enterrée à la fin dans une position secondaire) |
| REP | Terminologie inconsistante (plusieurs mots pour la même chose) |
| LLM | Pattern typique IA (bénéfice caché, capacité sans mécanisme, etc.) |

Une phrase peut cumuler plusieurs codes.

---

# Les 12 axes d'analyse

Applique chaque axe séparément. Passe par passe, ne mélange pas.

---

## Axe 1 — Hiérarchie de l'information

**Principe** : la position grammaticale doit refléter l'importance conceptuelle.

Vérifie sur chaque phrase :
1. L'idée principale est-elle dans la proposition principale ?
2. L'action principale est-elle exprimée par le verbe principal ?
3. La conclusion arrive-t-elle avant ou à la fin naturelle de la principale ?
4. Les exemples viennent-ils après le claim qu'ils illustrent ?
5. Les détails de support restent-ils dans une position secondaire ?
6. La phrase se termine-t-elle sur une information significative ?

**Signaux à repérer** :
- Idée-clé enterrée dans un modifieur, un participe ou une subordonnée
- Exemple listé avant la règle qu'il illustre
- Long modifieur avant la principale qui retarde l'arrivée du sens

**Exemple** :
Original : *"Répondre aux ordres, ce qui construit une relation de confiance, permet au chien d'apprendre."*
Problème : END, MOD — la vraie idée ("construire une relation de confiance") est dans une incise.
Proposition : *"Répondre aux ordres construit une relation de confiance. C'est ainsi que le chien apprend."*

---

## Axe 2 — Architecture de la phrase (backbone S-V-O)

**Principe** : chaque phrase doit avoir un backbone Sujet → Verbe → Objet identifiable en quelques secondes.

Algorithme sur chaque phrase :
1. Retire mentalement modifieurs, parenthèses, exemples
2. Trouve Sujet, Verbe, Objet
3. Peux-tu les identifier en 3 secondes ? Non → BACKBONE ou GAP

**Signaux GAP** : plus de 8 mots entre le sujet et le verbe.

**Exemple** :
Original : *"Les chiens qui, malgré une socialisation précoce et une méthode positive appliquée quotidiennement, réagissent à d'autres chiens en laisse, nécessitent une approche progressive."*
Problème : GAP — 15 mots entre "chiens" et "nécessitent".
Proposition : *"Certains chiens réagissent à leurs congénères en laisse malgré une socialisation précoce et une méthode positive quotidienne. Ils nécessitent une approche progressive."*

---

## Axe 3 — Nominalisations

**Principe** : les actions doivent apparaître comme verbes, pas comme noms.

**Suffixes à scanner** (français) :
- **-tion / -sion** : détection, éducation, socialisation, décision, compréhension
- **-ment** : apprentissage, comportement, dressage, développement, renforcement
- **-ance / -ence** : reconnaissance, obéissance, patience, cohérence
- **-ité** : capacité (à faire), possibilité (de faire)
- **-age** : dressage, apprentissage, marquage

**Verbes faibles qui trahissent une nominalisation** :
effectuer, réaliser, procéder à, faire, mettre en place, mettre en œuvre, apporter, opérer, assurer, permettre, donner lieu à

**Exemple** :
Original : *"L'éducation du chiot nécessite la mise en place d'une routine et la répétition régulière des exercices."*
Problème : NOM ×3 — "éducation", "mise en place", "répétition".
Proposition : *"Éduquer un chiot exige d'instaurer une routine et de répéter les exercices régulièrement."*

**Nominalisations à conserver** :
- Le nom est le sujet du paragraphe (on parle du concept d'obéissance)
- C'est un terme technique reconnu (renforcement positif, désensibilisation)
- La transformation en verbe alourdirait ou changerait le sens

---

## Axe 4 — Modifieurs

**Principe** : les modifieurs soutiennent le backbone, ils ne le concurrencent pas.

**Arbre de décision** pour chaque modifieur :
- N'apporte rien → supprimer
- Plus important que la principale → promouvoir dans la principale
- Interrompt le backbone → déplacer après le verbe ou dans une nouvelle phrase
- Sinon → garder

**Watchlist d'adverbes vides** (à supprimer sauf si mesurés) :
efficacement, correctement, parfaitement, rapidement, aisément, pleinement, totalement, complètement, entièrement, sereinement, harmonieusement, naturellement, sensiblement, significativement, notablement

**Signaux MOD** : 3+ modifieurs empilés dans une même phrase ; chaîne d'adjectifs "un dressage patient, cohérent, respectueux et bienveillant".

**Exemple** :
Original : *"Le chien apprend efficacement rapidement grâce à des séances courtes."*
Problème : MOD — "efficacement" et "rapidement" ne mesurent rien.
Proposition : *"Le chien apprend grâce à des séances courtes."* (ou : *"…apprend en 3-4 séances."* si un chiffre existe).

---

## Axe 5 — Parenthèses et incises

**Principe** : les parenthèses (entre virgules, tirets ou parenthèses) ne doivent pas interrompre le backbone.

**Signaux à scanner** :
`, plutôt que…`, `, qui…`, `, comme…`, `, notamment…`, `, par exemple…`, `, y compris…`, `, à savoir…`, `— [phrase] —`, `([phrase])`

**Arbre de décision** :
- Non essentiel → supprimer
- Contient l'idée principale → promouvoir
- Peut devenir une phrase indépendante → séparer
- Court (2-3 mots) et fluide → garder

**Exemple** :
Original : *"Le renforcement positif, qui repose sur la récompense de comportements souhaités plutôt que sur la punition des mauvais, améliore la relation."*
Problème : PAR, GAP — 20 mots entre le sujet et le verbe.
Proposition : *"Le renforcement positif améliore la relation. Il repose sur la récompense des bons comportements plutôt que sur la punition."*

**Règle style** : jamais de tiret cadratin (—) comme marqueur de parenthèse (déjà couvert par `avoid-ai-writing`, mais souvent créé lors de la restructuration).

---

## Axe 6 — Participes présents / gérondifs

**Principe** : le participe présent ne doit pas cacher l'idée principale ni inverser la chronologie.

**Watchlist FR à scanner en priorité** (patterns IA les plus fréquents) :
`, permettant…`, `, aidant…`, `, offrant…`, `, apportant…`, `, favorisant…`, `, améliorant…`, `, réduisant…`, `, renforçant…`, `, garantissant…`, `, assurant…`, `, contribuant à…`, `, donnant…`, `, créant…`

**Arbre de décision** pour chaque -ant :
- Ne contient rien d'important → garder
- Contient le bénéfice principal → promouvoir en phrase indépendante
- Décrit ce qui se passe *avant* la principale → réordonner en chronologie réelle
- Sinon → garder

**Exemple type IA** :
Original : *"Le clicker marque le comportement, permettant au chien de comprendre exactement ce qui est récompensé."*
Problème : PART — le vrai bénéfice ("le chien comprend") est enterré après une virgule.
Proposition : *"Le clicker marque le comportement. Le chien comprend ainsi exactement ce qui est récompensé."*

**Chronologie inversée** :
Original : *"Le maître récompense le chien, lui présentant d'abord la friandise devant le nez."*
Problème : PART, ORDER — présenter la friandise vient avant récompenser.
Proposition : *"Le maître présente la friandise devant le nez du chien, puis le récompense."*

---

## Axe 7 — Flow d'information linéaire

**Principe** : l'information arrive dans l'ordre attendu par le lecteur.

**Ordre naturel** :
```
Connu → Nouveau → Résultat/Conclusion
```

**Patterns à respecter** :
| Pattern | Ordre correct |
|---------|--------------|
| Cause → Effet | Cause d'abord |
| Problème → Solution | Problème d'abord |
| Action → Résultat | Action d'abord |
| Claim → Preuve | Claim d'abord |
| Concept → Exemple | Concept d'abord |
| Connu → Inconnu | Connu d'abord |

**Signaux de logique inversée** :
- `[résultat] parce que [cause]`
- `[résultat] puisque [cause]`
- `[résultat] car [cause]`
- `[résultat] grâce à [cause]`

Ces constructions inversent l'ordre naturel. À reformuler.

**Analyse au niveau paragraphe** :
- Chaque phrase répond-elle à la question soulevée par la précédente ?
- Le paragraphe change-t-il de direction en cours de route ? → SPLIT paragraphe
- Le paragraphe converge-t-il vers une conclusion unique ?

**Exemple** :
Original : *"Le chien peut développer de l'anxiété de séparation parce qu'il n'a pas été habitué progressivement à rester seul."*
Problème : ORDER — l'effet précède la cause.
Proposition : *"Le chiot doit être habitué progressivement à rester seul. Sans cette habituation, il peut développer une anxiété de séparation."*

---

## Axe 8 — Voix active / passive

**Principe** : chaque phrase au passif doit être passive **pour une raison**.

**Raisons valables de garder le passif** :
- L'acteur est inconnu ou sans importance
- Le résultat compte plus que l'acteur
- Le flow du paragraphe garde le même sujet
- On décrit un processus, pas un acteur

**Arbre de décision** :
- Le lecteur a besoin de savoir qui fait l'action ? Oui → actif
- Le résultat prime sur l'acteur ? Oui → passif OK
- Le passif préserve le sujet du paragraphe ? Oui → passif OK
- Sinon → actif

**Piège** : ne pas confondre passif et nominalisation. "La socialisation du chiot est réalisée entre 3 et 12 semaines" est une nominalisation, pas un passif problématique.

**Ne jamais inventer un acteur** absent du texte original.

**Exemple** :
Original : *"Les mauvais comportements sont renforcés involontairement."*
Problème (à évaluer) : PASS — qui renforce ?
Proposition : *"Le maître renforce involontairement les mauvais comportements."* (si l'acteur est important dans le contexte).

---

## Axe 9 — Verbes faibles

**Principe** : le verbe principal doit porter l'action réelle de la phrase.

**Watchlist FR à scanner** :
effectuer, réaliser, procéder à, faire, avoir, donner, apporter, mettre en place, mettre en œuvre, mener à bien, permettre, favoriser, offrir, contribuer à, participer à, opérer, assurer

**Table de conversion fréquente** :
| Faible | Fort |
|--------|------|
| effectuer une analyse | analyser |
| procéder à l'évaluation | évaluer |
| réaliser un travail sur | travailler |
| mettre en place un dressage | dresser / éduquer |
| faire une correction | corriger |
| apporter une amélioration | améliorer |
| donner de l'attention | prêter attention |
| effectuer un renforcement | renforcer |
| assurer la sécurité de | sécuriser / protéger |
| permettre l'apprentissage | apprendre à |
| favoriser la socialisation | socialiser |
| avoir une réaction | réagir |

**Exception** : garder le verbe faible si le nom est vraiment le sujet du paragraphe ou un terme technique consacré ("effectuer une désensibilisation progressive" peut passer si "désensibilisation" est le concept en cours d'explication).

**Exemple** :
Original : *"Le maître doit effectuer un travail de socialisation dès les premières semaines."*
Problème : WV, NOM — "travail de socialisation" cache "socialiser".
Proposition : *"Le maître doit socialiser le chiot dès les premières semaines."*

---

## Axe 10 — Split de phrases

**Principe** : chaque phrase porte **une idée dominante**. Ce n'est pas la longueur qui compte, c'est la densité d'idées.

**Test** : combien d'idées indépendantes le lecteur doit-il traiter en même temps ?
- 1 idée dominante → garder même si 30 mots
- Plusieurs idées en compétition → séparer

**Points de coupe naturels** :
- Cause → Effet
- Action → Résultat
- Claim → Preuve
- Concept → Exemple
- Changement de sujet grammatical

**Ne pas splitter** :
- Une phrase longue qui développe une seule idée
- Une phrase qui décrit un processus continu
- Une phrase juste parce qu'elle "paraît longue"

**Ne pas sur-splitter** : éviter le rythme mécanique de phrases courtes toutes similaires.

**Exemple SPLIT nécessaire** :
Original : *"Le chien apprend le rappel, comprend les ordres de base, socialise avec ses congénères et devient plus autonome."*
Problème : SPLIT — 4 idées indépendantes sans hiérarchie.
Proposition : *"Le chien apprend le rappel et comprend les ordres de base. Il socialise avec ses congénères et gagne en autonomie."*

**Exemple à NE PAS splitter** :
*"L'éducation d'un chiot demande de la patience, de la cohérence, une méthode adaptée à son tempérament et des séances courtes mais régulières."*
→ Une seule idée (les exigences de l'éducation), à garder intacte.

---

## Axe 11 — Précision et cohérence terminologique

**Principe** : répéter le bon terme vaut mieux que varier avec des synonymes approximatifs.

**Signaux REP** :
- Le même concept est nommé de 3 façons différentes dans un même paragraphe (le chien, l'animal, le compagnon, le toutou)
- Un terme technique est remplacé par un mot vague pour éviter la répétition
- Un concept clé change de nom entre l'intro et le développement

**Règle** : si le terme correct doit apparaître 4 fois, qu'il apparaisse 4 fois.

**Ordre définition → discussion** :
- Un terme nouveau ou technique doit être défini avant d'être discuté
- Signaler chaque terme utilisé sans définition préalable (leash reactivity, désensibilisation, renforcement différentiel, seuil de tolérance)

**Exemple** :
Original : *"La désensibilisation permet de baisser le seuil réactif du chien. Cette technique de contre-conditionnement…"*
Problème : REP — désensibilisation ≠ contre-conditionnement (deux concepts distincts).
Proposition : soit clarifier que ce sont deux techniques distinctes, soit garder un seul terme.

---

## Axe 12 — LLM smells structurels

Repasse finale sur 8 patterns typiques IA au niveau structure (le lexique est géré par `avoid-ai-writing`).

**LLM-S1 — Bénéfice caché en fin de phrase** (participial trailing)
Cf. axe 6. Réviser toute phrase finissant par `, permettant/aidant/offrant…`.

**LLM-S2 — Feature d'abord, bénéfice en subordonnée**
Original : *"Nos séances individuelles s'adaptent au rythme du chien, ce qui améliore l'apprentissage."*
→ Feature + bénéfice caché après virgule.

**LLM-S3 — Capacité sans mécanisme**
Un service/produit/méthode est présenté comme faisant quelque chose sans expliquer *comment*.
Original : *"Notre méthode permet de résoudre les problèmes de comportement."*
→ Comment ? Par quel mécanisme ?

**LLM-S4 — Hedging inutile**
`peut aider à`, `pourrait permettre de`, `est susceptible de`, `a la capacité de`, `est conçu pour`, `vise à`
→ Si le claim est vrai, l'affirmer. Si conditionnel, préciser la condition.

**LLM-S5 — Répéter au lieu d'avancer**
Deux phrases consécutives disent la même chose à des niveaux d'abstraction différents.
Original : *"Le chien apprend par répétition. C'est en répétant que le chien apprend."*

**LLM-S6 — Liste plate sans hiérarchie**
Liste de 4+ éléments présentés comme équivalents alors qu'un ou deux sont clairement primaires.

**LLM-S7 — Conclusion générique**
Phrase de fin de paragraphe qui pourrait s'appliquer à n'importe quel article ("Cela améliore le bien-être du chien").

**LLM-S8 — Recommandation générique**
Fin d'article avec conseil trop vague pour être actionnable ("Chaque propriétaire devrait investir dans l'éducation de son chien").

Pour chacun de ces smells, produire une proposition [Important] avec réécriture concrète.

---

# Checklist finale avant de rendre l'audit

Avant de produire ta liste numérotée, vérifie :

- [ ] Chaque proposition cite l'original en verbatim
- [ ] Chaque proposition a un code diagnostique
- [ ] Chaque proposition a une sévérité (Critique / Important / Optionnel)
- [ ] La numérotation est continue (pas de trou)
- [ ] Le résumé en tête donne les totaux par type
- [ ] Aucune proposition ne fusionne deux problèmes distincts
- [ ] Aucun fichier n'a été modifié
- [ ] Les axes sans proposition sont explicitement notés "rien à signaler"
- [ ] Les propositions sont ordonnées par apparition dans le texte, pas par catégorie

---

# Ce qu'il ne faut PAS faire

- Ne pas modifier le fichier source
- Ne pas proposer plus d'une réécriture par entrée (l'auteur choisit oui/non)
- Ne pas grouper les propositions par catégorie (l'auteur veut suivre le texte linéairement)
- Ne pas noter les problèmes de lexique / tics IA / formatage (c'est le rôle de `avoid-ai-writing`)
- Ne pas inventer d'information absente du texte
- Ne pas simplifier les concepts techniques du dressage canin
- Ne pas retirer la voix de l'auteur — les propositions doivent préserver le ton
- Ne pas suggérer des changements purement stylistiques ("ça sonne mieux") — chaque proposition doit réduire une charge cognitive identifiable

---

# Après l'audit

Une fois la liste numérotée produite, propose à l'auteur :

> "Indique les numéros que tu valides (`#2, #5, #12-15`), refuses (`refuse #3, #7`), ou pour lesquels tu veux une variante (`variante #8`). Je peux appliquer les changements validés directement dans le fichier une fois ta sélection reçue."

Attendre la validation avant toute modification. Si l'auteur donne l'accord d'appliquer, éditer alors le fichier source phrase par phrase selon les propositions validées.

