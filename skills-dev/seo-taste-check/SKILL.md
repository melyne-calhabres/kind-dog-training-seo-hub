---
name: seo-article-taste-check
description: "Skill d'évaluation du potentiel de partage (\"taste\") d'un article rédigé, à utiliser après la rédaction par seo-article-writing. Mesure si le contenu contient assez d'éléments qui donnent au lecteur envie de le partager à d'autres. Déclencher pour tout message contenant : \"évalue le taste\", \"check taste\", \"check partage\", \"est-ce partageable\", \"est-ce que ça vaut le coup d'être partagé\", \"potentiel de partage\", \"le contenu donne-t-il envie d'être partagé\", ou toute demande qui suit logiquement la rédaction d'un article et vise à juger sa qualité au-delà du SEO technique. Si l'utilisateur dit \"l'article est écrit, on regarde s'il est partageable\" ou \"passe [article] au test du taste\", ce skill est pertinent. Également pertinent si l'utilisateur mentionne un fichier dans articles/ et veut savoir s'il donnera envie d'être partagé."
---

# SEO Taste Check — Évaluation du potentiel de partage d'un article

## Objectif

Évaluer si un article rédigé (produit par `seo-article-writing`) contient assez d'éléments qui donnent au lecteur envie de le **partager** à d'autres : un ami, un membre de la famille, un groupe Facebook de propriétaires de chiens.

Ce skill ne vérifie ni le SEO technique (rôle de `seo-check-article`) ni l'unicité du contenu. L'unicité est déjà acquise : les cas clients et l'expérience terrain rendent l'article impossible à dupliquer. La question posée ici est différente et complémentaire : **un article peut être unique sans donner envie d'être partagé.** C'est cette dimension « partage » qu'on mesure.

Le skill **analyse et recommande, il ne modifie jamais l'article.** Il produit un rapport avec un score, les passages qui posent problème, un verdict et des recommandations concrètes. C'est à l'utilisateur de décider quoi retravailler.

### Principe directeur : le test du partage

Une seule question guide toute l'évaluation :

> Est-ce qu'un propriétaire de chien, après avoir lu cet article, l'enverrait spontanément à quelqu'un en disant « tiens, lis ça » ?

Un contenu se partage quand il fait au moins une de ces choses au lecteur : il le rend plus intelligent, il met des mots sur ce qu'il ressent, il lui donne un moyen d'agir tout de suite, il le surprend, ou il lui laisse une histoire qu'il aura envie de raconter à son tour.

## Input

Le fichier de l'article se trouve dans le sous-dossier `articles/` du dossier de travail (format `[mot-clé-slugifié].md`). L'utilisateur peut fournir le nom du fichier ou mentionner le sujet, auquel cas chercher le fichier correspondant.

Si aucun article n'est trouvé, prévenir l'utilisateur et lui proposer de lancer d'abord `seo-article-writing`.

Lire l'article en entier avant toute évaluation. Lire aussi, pour cadrer le jugement sur le partage, le ton et l'alignement éditorial :
- `ton-et-style.md`
- `audience-cible.md`
- `ligne-editoriale.md`

## Étape 1 — Évaluer les 5 critères de partage

Utiliser TaskCreate pour suivre l'avancement. Évaluer l'article contre chacun des **5 critères** ci-dessous. Pour chaque critère, statuer ✓ (rempli) ou ✗ (non rempli), et **citer un passage exact de l'article** qui justifie la note (le passage qui remplit le critère, ou le passage le plus proche qui échoue à le remplir).

Un critère n'est ✓ que s'il est rempli de façon **franche et repérable**, pas « un peu ». En cas de doute, c'est ✗ : un critère mou ne donne pas envie de partager.

### Critère 1 — L'a rendu plus intelligent

L'article donne au lecteur une grille de lecture du comportement de son chien qu'il n'avait pas avant. Après lecture, il comprend un mécanisme (« ah, c'est *ça* qui se passe quand il fait ça »).

- **✓ si** : l'article explique le *pourquoi* derrière un comportement d'une manière qui recadre la compréhension du lecteur, avec une nuance de terrain.
- **✗ si** : l'article se contente de décrire des symptômes ou de lister des conseils sans jamais éclairer le mécanisme sous-jacent.

### Critère 2 — A nommé ce que le lecteur ressent

L'article met des mots précis sur une frustration, un doute ou une émotion que le propriétaire vit vraiment. Réaction visée : « c'est exactement ça, c'est mon chien / c'est moi ».

- **✓ si** : au moins un passage nomme la situation vécue avec assez de précision pour que le lecteur se reconnaisse (le découragement après avoir « tout essayé », la culpabilité, l'impression que le chien « le fait exprès »).
- **✗ si** : l'article reste sur le plan technique et ne s'adresse jamais au vécu émotionnel du lecteur, ou le fait de façon vague (« ce n'est pas facile »).

### Critère 3 — A donné un avantage concret et actionnable

Le lecteur repart avec quelque chose qu'il peut appliquer **dès aujourd'hui** : une méthode, un cadre, un repère précis. Pas une généralité (« soyez patient et cohérent »).

- **✓ si** : au moins un conseil est assez précis et concret pour être mis en pratique sans autre information (un geste, un enchaînement, un critère observable, une erreur exacte à éviter).
- **✗ si** : les conseils restent au niveau du principe général, vrais pour n'importe quel chien et n'importe quel problème.

### Critère 4 — L'a surpris

L'article casse une croyance répandue de l'éducation canine, ou révèle un contre-intuitif. Quelque chose que le lecteur ne s'attendait pas à lire et qui le fait s'arrêter.

- **✓ si** : au moins un passage dément un mythe courant, prend le contre-pied d'une évidence, ou apporte une nuance que le lecteur n'aurait pas devinée. **Attention** : la surprise doit être fondée sur l'expérience terrain, pas être une provocation gratuite (voir motif slop « fausse controverse »).
- **✗ si** : tout dans l'article confirme ce que le lecteur pensait déjà. Rien ne le surprend.

### Critère 5 — Raconte une histoire qui colle

L'article contient au moins un cas client ou une scène de terrain assez vivante pour être mémorisée et racontée à son tour. C'est souvent ce qu'un lecteur cite quand il partage (« il y avait cette histoire de chien qui… »).

- **✓ si** : au moins un cas client est raconté avec un détail concret et mémorable (un comportement précis observé, une progression, une réaction), pas juste évoqué en une ligne abstraite.
- **✗ si** : l'article n'a aucun cas client, ou les mentionne de façon trop générique pour rester en tête.

## Étape 2 — Détecter les motifs « slop » (signaux d'alerte)

En parallèle des 5 critères, repérer la présence des motifs qui *tuent* le potentiel de partage même quand certains critères sont remplis. Pour chaque motif détecté, **citer le passage exact**.

- **Ouverture générique** : l'intro pourrait ouvrir n'importe quel article sur n'importe quel sujet (« De nos jours, de plus en plus de propriétaires… », « L'éducation canine est un sujet important »). Une ouverture qui n'accroche pas fait fermer l'onglet avant le partage.
- **Conseils passe-partout** : des recommandations vraies pour tout chien et tout problème, sans spécificité (« soyez patient », « la cohérence est essentielle »).
- **Ton encyclopédique** : l'article lit comme un résumé Wikipédia du sujet, sans point de vue de terrain, sans voix.
- **Fausse controverse** : une prise à contre-pied artificielle, provocante sans fond, juste pour surprendre. À distinguer d'une vraie surprise fondée sur l'expérience (critère 4).
- **Liste creuse** : une enumération de 5-7 astuces génériques qui se termine sur une formule vide (« et vous, qu'en pensez-vous ? »).
- **Conclusion générique** : une fin qui résume platement sans laisser d'image ni de raison de partager (« En résumé, avec du travail, vous y arriverez »).

Un motif slop détecté ne fait pas automatiquement échouer l'article, mais il **pèse dans le verdict** : un article à 3/5 truffé de conseils passe-partout est plus proche d'un REWORK que d'un SHIP.

## Étape 3 — Contrôle de conformité éditoriale (ligne éditoriale + ton & style)

En plus du potentiel de partage, vérifier que l'article respecte les règles de la marque définies dans `ligne-editoriale.md` et `ton-et-style.md`. Ce contrôle est **distinct du score de partage** : il ne compte pas dans les 5 critères, mais un écart doit être signalé et corrigé, car un article partageable qui trahit le ton de Mélyne ou la ligne éditoriale n'est pas publiable.

Pour chaque point ci-dessous, statuer conforme / écart. Pour chaque écart, **citer le passage exact** et proposer une recommandation.

### Conformité à la ligne éditoriale (`ligne-editoriale.md`)

- **Part du concret** : l'article s'ancre dans des situations réelles vécues par les propriétaires, pas dans de la théorie abstraite.
- **Déconstruit les idées reçues** quand c'est pertinent (recoupe le critère 4 « surprise »).
- **Propose toujours une piste** de compréhension ou de solution : jamais de constat sans issue.
- **Jamais fataliste** : l'article ne laisse pas le lecteur sur l'idée que « c'est fichu » ou « ce chien ne changera pas ».
- **Double objectif tenu** : l'article éduque (explique le « pourquoi ») ET montre l'expertise de Kind Dog Training.
- **N'est pas** un catalogue de méthodes à appliquer mécaniquement, ni un cours théorique déconnecté du terrain, ni un contenu qui catégorise l'approche dans un courant étiqueté.

### Conformité au ton & style (`ton-et-style.md`)

- **Vouvoiement** : le lecteur est vouvoyé partout, sans exception. Un seul « tu » est un écart bloquant.
- **Niveau de langage** : professionnel mais humain, sérieux sur le fond, décontracté sur la forme. Pas de jargon inutile ni de ton académique.
- **Caractéristiques du ton** : direct et honnête sans être froid, empathique, affirmé sans arrogance, rassurant (une solution existe toujours).
- **Humour** : présent avec parcimonie pour alléger, sans devenir le ton général. Trop d'humour, ou un article totalement sec, sont deux écarts opposés à signaler.
- **Rythme** : phrases plutôt courtes et percutantes, interpellation directe du lecteur, alternance explication / adresse au lecteur.
- **Posture narrative** : Mélyne écrit comme professionnelle ET propriétaire de chien (références possibles à son vécu avec Ramsey).
- **Termes interdits** (écart bloquant) : aucune occurrence de « éducation positive », « renforcement positif », « méthode coercitive », ni aucune formule qui catégorise l'approche dans un courant étiqueté.

Les **écarts bloquants** (un « tu », un terme interdit, un ton fataliste, une catégorisation de la méthode) doivent être remontés en tête des recommandations, indépendamment du verdict de partage : ils empêchent la publication même sur un article noté SHIP.

## Étape 4 — Calculer le score et le verdict

Compter le nombre de critères ✓ sur 5. **Le seuil de partage est 3/5.**

Attribuer le verdict :

- **SHIP** — 3/5 critères ou plus, et aucun motif slop bloquant. L'article donne assez de raisons d'être partagé. Prêt à passer à la suite du workflow.
- **SPAR** — 2/5, ou 3/5 mais plombé par des motifs slop. Le fond est là, il manque un critère fort. **Ne pas « polir » un texte creux** : le vrai travail est d'extraire de l'utilisateur l'élément non-copyable qui manque (un cas client précis, un chiffre, une croyance à casser). Le rapport pose alors 2 à 3 questions ciblées (voir étape 5).
- **REWORK** — 1/5. Le sujet est traité mais l'exécution est trop générique pour donner envie de partager. L'angle est à repenser, pas juste à retoucher.
- **KILL** — 0/5. Aucun angle partageable. Rare pour un article passé par `seo-article-writing`, mais si ça arrive, c'est le signe que le sujet ou l'angle de départ ne portait aucune valeur partageable.

## Étape 5 — Rédiger le rapport

Produire un rapport structuré, directement dans la conversation. Format :

```
Taste Check — [titre de l'article]

Score de partage : [N]/5   →   Verdict : [SHIP / SPAR / REWORK / KILL]

Les 5 critères :
[✓/✗] 1. L'a rendu plus intelligent   — [justification en une ligne]
      « [citation exacte du passage concerné] »
[✓/✗] 2. A nommé ce qu'il ressent     — [justification]
      « [citation] »
[✓/✗] 3. Avantage concret actionnable — [justification]
      « [citation] »
[✓/✗] 4. L'a surpris                   — [justification]
      « [citation] »
[✓/✗] 5. Histoire qui colle            — [justification]
      « [citation] »

Motifs slop détectés :
- [motif] : « [citation exacte] »
- [motif] : « [citation exacte] »
(ou « Aucun motif slop détecté »)

Conformité éditoriale :
- Ligne éditoriale : [conforme / liste des écarts avec citation]
- Ton & style : [conforme / liste des écarts avec citation]
- Écarts bloquants : [aucun / liste : « tu » détecté, terme interdit, ton fataliste, catégorisation…]

Recommandations :
- [reco concrète et située, rattachée à un passage précis de l'article]
- [reco concrète et située]
- ...
```

### Règles pour les recommandations

Les recommandations sont le cœur du rapport. Elles doivent être **concrètes, situées et basées sur ce qui a été analysé** — jamais des conseils génériques.

- **Rattacher chaque reco à un passage précis** : « La section "Pourquoi mon chien tire en laisse" explique le mécanisme mais ne casse aucune croyance (critère 4 ✗). Vous démentez souvent l'idée que "tirer, c'est de la dominance" : l'ajouter ici surprendrait le lecteur. »
- **Pointer l'élément non-copyable manquant** : quand un critère échoue faute de cas client ou de détail terrain, le dire, et suggérer où l'insérer. « Aucune histoire mémorable (critère 5 ✗). La section sur la réactivité gagnerait un cas concret : avez-vous un cas où le chien avançait puis reculait ? »
- **Pour un verdict SPAR**, formuler 2 à 3 **questions ciblées** à poser à l'utilisateur pour extraire la matière qui manque, plutôt que de proposer de reformuler du vide. Exemples : « Quel résultat chiffré ou quelle durée de progression pourriez-vous citer sur ce sujet ? », « Quelle croyance sur ce comportement corrigez-vous le plus souvent en séance ? », « Avez-vous un cas client marquant sur cet angle ? »
- **Traiter les écarts éditoriaux comme des recos à part entière** : pour chaque écart de conformité (ligne éditoriale ou ton & style), citer le passage et dire comment le remettre en phase avec les règles de la marque. Placer les **écarts bloquants** (vouvoiement rompu, terme interdit, ton fataliste, catégorisation de la méthode) tout en haut des recommandations : ils priment sur le partage.
- **Prioriser** : après les écarts bloquants, lister les recos dans l'ordre du gain le plus fort pour le partage. Gagner un critère franc vaut mieux que retoucher trois passages déjà corrects.
- **Ne pas réécrire l'article ni proposer des paragraphes tout faits.** Le skill oriente, l'utilisateur (ou un autre skill) rédige.

## Checklist finale

Avant de livrer le rapport, vérifier :

1. L'article a été lu en entier, ainsi que `ton-et-style.md`, `audience-cible.md` et `ligne-editoriale.md`
2. Les 5 critères sont chacun statués ✓ ou ✗, sans « à moitié »
3. Chaque critère est justifié par une **citation exacte** de l'article
4. Les motifs slop ont été cherchés et cités quand présents
5. La conformité à la ligne éditoriale et au ton & style a été contrôlée, écarts cités
6. Les écarts bloquants (vouvoiement, termes interdits, ton fataliste, catégorisation) ont été cherchés spécifiquement
7. Le score est calculé sur 5 et le seuil de 3/5 appliqué pour le verdict
8. Le verdict (SHIP / SPAR / REWORK / KILL) est cohérent avec le score et les motifs slop
9. Les recommandations sont concrètes, situées sur des passages précis, et priorisées (écarts bloquants en tête)
10. Pour un verdict SPAR, 2 à 3 questions ciblées sont posées pour extraire la matière manquante
11. Le rapport ne modifie pas l'article et ne propose pas de texte de remplacement rédigé
12. Aucun jugement sur le SEO technique ou l'unicité (hors périmètre de ce skill)
