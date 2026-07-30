---
name: "avoid-ai-writing"
description: "Audit et réécriture de contenu pour supprimer les patterns d'écriture IA (\"AI-isms\"). Version FR pour blog et réseaux sociaux. Déclencher pour \"retire les AI-isms\", \"nettoie l'écriture IA\", \"audit AI-isms\", \"édite pour patterns IA\", \"audit pour tics IA\", \"fais que ça sonne moins IA\", \"humanise ce texte\". Supporte un mode detect-only, un mode edit-in-place, un profil de voix optionnel (casual / professionnel / chaleureux / direct), et une passe itérative jusqu'à convergence."
---

---
name: avoid-ai-writing
description: Audit et réécriture de contenu pour supprimer les patterns d'écriture IA ("AI-isms"). Version FR pour blog et réseaux sociaux. Supporte un mode detect-only, un mode edit-in-place, un profil de voix optionnel (casual / professionnel / chaleureux / direct), et une passe itérative jusqu'à convergence.
version: 3.20.0-fr-blog-lite
license: MIT
metadata:
  author: Traduction FR de Conor Bronsdon v3.20.0, épurée pour blog/social
  tags: écriture édition voix qualité fr blog social
---

# Avoid AI Writing — Audit & Réécriture (blog + social)

Tu édites du contenu pour supprimer les patterns d'écriture IA ("AI-isms") qui font sonner un texte comme généré par une machine.

## Ce que ce skill est et n'est pas

C'est un **outil de qualité rédactionnelle**, pas un verdict. Les patterns flaggés ici sont statistiquement plus fréquents dans les sorties LLM, mais les humains en pilote automatique — surtout écrivant sous pression, dans un genre inhabituel, ou en langue seconde — produisent les mêmes formes. Des audits indépendants d'outils de détection IA commerciaux ont trouvé des taux de faux positifs au-dessus de 60% chez les rédacteurs anglophones non-natifs (Liang et al., Stanford, *Patterns* 2023) et des taux d'erreur globaux au-dessus de 70% sur les détecteurs open-source (Jabarian & Imas, BFI 2025).

Les patterns sont utiles comme signal — pour nettoyer sa propre écriture ou évaluer si un texte se lit comme généré par IA. Bref : signaux, pas preuves. À prendre en compte ; pas de quoi accuser qui que ce soit.

## Modes

Ce skill opère dans un des trois modes suivants :

**`rewrite`** (défaut) — Flagger les AI-isms et réécrire le texte pour les corriger.

**`detect`** — Flagger uniquement les AI-isms. Pas de réécriture. À utiliser quand :
- Le rédacteur veut voir ce qui est flaggé et décider lui-même quoi corriger
- Les patterns flaggés peuvent être intentionnels (les patterns IA ne sont pas toujours mauvais)
- Tu audites un texte que tu ne veux pas altérer
- Tu veux un scan rapide sans attendre une réécriture complète

**`edit`** — Éditer un fichier en place plutôt que de retourner le texte réécrit. À utiliser quand le rédacteur pointe vers un fichier ("nettoie `draft.md`", "corrige les AI-isms dans ce fichier directement"). Fais des **éditions minimales et ciblées** avec l'outil Edit — change les spans flaggés, pas le document entier. **Préserve les passages qui sont déjà humains**. **N'édite pas le matériel cité, les blocs de code, ou le texte attribué à quelqu'un d'autre** — flagge-les plutôt. Pour un gros fichier, confirme quelle section nettoyer avant. Après édition, relis et confirme que les patterns flaggés sont résolus.

Déclencher `detect` quand l'utilisateur dit "détecte", "flag uniquement", "audit seulement", "scan". Déclencher `edit` quand l'utilisateur nomme un fichier et demande de le corriger en place. Défaut : `rewrite`.

**Invocation.** Le langage naturel suffit ("réécris ça en voix directe", "édite `post.md` en place", "scan sans réécrire"). Options : `[--mode rewrite|detect|edit]`, `[--voix casual|professionnel|chaleureux|direct]`, `[--contexte linkedin|blog|docs|casual]`, `[--fichier CHEMIN]`, `[--iterate N]` (max 2).

**Itération jusqu'à convergence.** Le mode rewrite exécute déjà une seconde passe corrective — cette passe intégrée *est* la passe 2. Quand le rédacteur demande "itère" ou passe `--iterate N`, répéter le cycle audit→réécriture jusqu'à ce qu'il ne reste plus de patterns ou que **N passes** soient atteintes. Cap **N à 2**.

---

En mode **rewrite**, ton job est de :

1. **Auditer** : identifier chaque AI-ism présent, en citant le texte spécifique
2. **Réécrire** : retourner une version propre avec tous les AI-isms supprimés
3. **Montrer un résumé de diff** : lister brièvement ce que tu as changé et pourquoi

En mode **detect** :

1. **Auditer** : identifier chaque AI-ism présent, en citant le texte spécifique
2. **Évaluer** : noter quels flags sont des problèmes clairs vs. patterns qui peuvent être intentionnels

En mode **edit** :

1. **Lire** le fichier nommé
2. **Éditer en place** : corrections minimales et ciblées, laisser les passages déjà humains intacts
3. **Vérifier** : relis et confirme

---

## Quoi supprimer ou corriger

### Formatage

- **Tirets cadratins (— et --)** : remplacer par virgule, point, parenthèses, ou réécrire en deux phrases. Cible : zéro. Max dur : un pour 1000 mots. S'applique aux titres aussi. Exception : un tiret cadratin faisant office de séparateur dans un item de liste à puces qui ouvre avec un terme en gras ou un lien markdown (`- **Terme** — description`, `- [label](url) — description`) est de la typographie, pas un splice de prose.

- **Gras excessif** : retirer le gras sur la plupart des expressions. Une expression en gras par section majeure au maximum. Si un point est assez important pour être en gras, restructure la phrase pour mener avec.

- **Emojis dans les titres** : supprimer entièrement. Pas de `## 🚀 Ce que ça signifie`. Exception : les posts sociaux peuvent utiliser 1-2 emojis sparingly — en fin de ligne, jamais mid-phrase.

- **Listes à puces excessives** : convertir les sections truffées de puces en paragraphes de prose. Les puces uniquement pour du contenu réellement listable (comparaisons, instructions étape par étape).

- **Guillemets courbes (" " ' ') et apostrophes** : les guillemets courbes sont un signal *faible* de paste-depuis-chat — significatif surtout en plain-text. Word, Google Docs, macOS et iOS courbent par défaut, donc la plupart de la prose humaine en contient. Ne pas flagger les apostrophes courbes seules. Pour du contenu FR publié, préférer les guillemets français « » avec espaces insécables.

### Structure de phrase

- **"Ce n'est pas X — c'est Y" / "Il ne s'agit pas de X, mais de Y"** : réécrire comme affirmation positive directe. Max une par article. Inclut la **forme en deux phrases** : "Le titre n'est pas la vitesse. La vraie histoire est Y." Lue seule, chaque phrase paraît anodine — flagge-la quand même. L'IA empile aussi la négation ("Ce n'est pas le prix. Ce n'est pas les features. C'est la confiance."). Le décompte multi-négation est le même mouvement gonflé ; coupe directement à l'affirmation positive. La **négation en queue** est la cousine clippée : un fragment de négation nu accolé en fin de phrase — "Les options viennent de l'item sélectionné, aucun devinage." Écris la contrainte comme une vraie clause ou coupe.

- **Intensificateurs creux** : couper `authentique` / `authentiquement`, `véritable` / `véritablement` (comme "un vrai progrès"), `franchement`, `pour être honnête`, `soyons clairs`, `il convient de noter que`. Énoncer le fait.

- **Endossement vague ("qui vaut le coup de [verbe]")** : couper ou remplacer `qui mérite d'être lu`, `qui mérite qu'on s'y attarde`, `qui vaut le coup d'œil`, `à explorer`, `à découvrir`, `qui vaut votre temps`. Ces formules substituent un pouce levé générique à une raison spécifique. Dis *pourquoi* c'est important.

- **Hedging (toutes formes)** : couper les atténuateurs mécaniques qui vident les phrases de leur force.
  - Hedges simples : `peut-être`, `pourrait potentiellement`, `il est important de noter que`, `pour être clair`, `d'une certaine manière`, `en quelque sorte`.
  - Hedges empilés (deux atténuateurs qui s'annulent) : `pourrait potentiellement créer`, `peut éventuellement débloquer`, `pourrait ultimement transformer`. Chaque hedge annule le suivant, laissant une phrase qui n'affirme rien tout en paraissant prudente. Correction : en choisir un. Si tu veux dire "pourrait créer", dis ça.
  - Hedges parenthétiques : `(et, de plus en plus, Z)`, `(ou, plus précisément, Y)`, `(et peut-être plus important encore, W)` — l'IA insère des apartés pour paraître nuancée sans s'engager. Si l'aparté compte, lui donner sa propre phrase. Sinon couper.
  - Fais le point directement.

- **Absence de phrases de liaison** : chaque paragraphe doit se connecter au précédent. Si les paragraphes pourraient être réarrangés sans que le lecteur remarque, ajouter du tissu conjonctif.

- **Règle de trois compulsive** : varier les groupements. Utiliser 2 items, 4 items, ou une phrase complète au lieu de triades. Max une construction "adjectif, adjectif et adjectif" par article.

### Mots et expressions à remplacer

Les mots sont organisés en trois tiers selon la fiabilité du signal IA.

- **Tier 1 — Toujours flagger.** Ces mots apparaissent 5-20x plus dans les textes IA.
- **Tier 2 — Flagger en cluster.** Corrects isolément, mais 2+ dans le même paragraphe = signal IA fort.
- **Tier 3 — Flagger par densité.** Mots communs surutilisés par l'IA. Flagger seulement à saturation.

**Reconnaître les formes fléchies.** Chaque entrée couvre le mot listé *et ses variantes morphologiques* — adverbe (`-ment`), gérondif, pluriel, conjugaisons — sauf si une variante porte un sens légitime distinct.

#### Tier 1 — Toujours remplacer

| Remplacer | Par |
|---|---|
| plonger / plonger dans | explorer, examiner, regarder |
| paysage (métaphore) | domaine, secteur, industrie, monde |
| tapisserie / mosaïque | (décrire la complexité réelle) |
| royaume / univers (métaphore) | domaine, champ, secteur |
| paradigme | modèle, approche, cadre |
| se lancer / embarquer | commencer, débuter |
| phare (métaphore) | (réécrire entièrement) |
| témoigne de | montre, prouve, démontre |
| robuste | solide, fiable, résistant |
| exhaustif / complet (générique) | approfondi, entier |
| de pointe / à la pointe | dernier, récent, avancé |
| tirer parti / capitaliser sur | utiliser |
| pivot / pivotal | important, clé, critique |
| souligne | met en avant, montre |
| méticuleux / méticuleusement | soigneux, détaillé, précis |
| fluide / sans accroc (métaphore) | simple, facile |
| changement de donne / game-changer | (décrire ce qui change spécifiquement) |
| utiliser (comme "utilize") | employer |
| moment charnière / tournant historique | virage, changement (ou décrire ce qui a changé) |
| marquant un moment décisif | (énoncer ce qui s'est passé) |
| l'avenir s'annonce prometteur | (couper — dire quelque chose de spécifique ou rien) |
| seul l'avenir nous le dira | (couper — dire quelque chose de spécifique ou rien) |
| niché | est situé, se trouve, est à |
| vibrant | (décrire ce qui rend actif, ou couper) |
| florissant | en croissance, actif (ou citer un chiffre) |
| malgré les défis… continue de prospérer | (nommer le défi et la réponse, ou couper) |
| mettant en vedette / démontrant | montrant (ou couper la clause) |
| plongée profonde / deep dive | examiner, regarder, explorer |
| décortiquer / démystifier | expliquer, détailler, décomposer |
| grouillant / effervescent | actif, animé |
| complexe / complexités | (nommer la complexité spécifique) |
| en constante évolution | changeant, croissant (ou décrire comment) |
| durable / pérenne (comme adjectif vague) | qui dure, long-terme |
| intimidant / redoutable | dur, difficile, ardu |
| holistique / holistiquement | complet, global (ou décrire ce qui est inclus) |
| actionnable | pratique, utile, concret |
| impactant | efficace, significatif (ou décrire l'impact) |
| apprentissages (au sens leçons) | leçons, découvertes, enseignements |
| leader d'opinion / thought leader | expert, autorité |
| meilleures pratiques (comme wrapper) | ce qui marche, méthodes éprouvées |
| au fond / au cœur de | (couper — énoncer directement) |
| synergie / synergies | (décrire l'effet combiné réel) |
| interaction / interplay | relation, connexion |
| afin de | pour |
| en raison du fait que | parce que |
| fait office de / sert de | est |
| présente (comme wrapper au sens "has") | a, comprend, inclut |
| se targue de | a |
| représente (gonflé) | est, montre, donne |
| entamer / initier | commencer, débuter |
| déterminer / cerner | trouver, découvrir |
| entreprise / démarche (comme wrapper) | effort, tentative |
| vif (comme intensificateur) | intéressé, enthousiaste (ou couper) |
| authentique / authentiquement (intensificateur) | (couper — énoncer le fait) |
| symphonie (métaphore) | (décrire la coordination ou combinaison réelle) |
| embrasser (métaphore) | adopter, accepter, utiliser, passer à |

#### Tier 2 — Flagger quand 2+ apparaissent dans le même paragraphe

Ces mots sont légitimes isolément. Deux ou plus ensemble = paragraphe à réécrire.

| Remplacer | Par |
|---|---|
| exploiter / harnacher | utiliser, tirer parti de |
| naviguer (dans/à travers) | traverser, gérer, aborder |
| favoriser | encourager, soutenir, développer |
| élever (métaphore) | améliorer, rehausser, renforcer |
| libérer (métaphore) | débloquer, permettre |
| rationaliser / streamliner | simplifier, accélérer |
| responsabiliser / donner du pouvoir | permettre, autoriser, laisser |
| renforcer | soutenir, consolider |
| piloter / spearhead | mener, diriger |
| résonner avec | connecter, toucher, parler à |
| révolutionner | changer, transformer, refaçonner |
| faciliter | permettre, aider, autoriser |
| sous-tendre | soutenir, servir de base à |
| nuancé | spécifique, subtil, détaillé (ou nommer la nuance réelle) |
| crucial | important, clé, nécessaire |
| multifacette | (décrire les facettes réelles, ou couper) |
| écosystème (métaphore) | système, communauté, réseau, marché |
| myriade | de nombreux, plusieurs (ou donner un nombre) |
| pléthore | beaucoup, une multitude (ou donner un nombre) |
| englober | inclure, couvrir, embrasser |
| catalyser | déclencher, accélérer |
| réimaginer / réinventer | repenser, reconcevoir, reconstruire |
| galvaniser | motiver, mobiliser |
| augmenter (comme wrapper) | ajouter à, étendre, compléter |
| cultiver | construire, développer, faire pousser |
| illuminer | clarifier, expliquer, montrer |
| élucider | expliquer, clarifier |
| juxtaposer | comparer, contraster, mettre côte à côte |
| paradigmatique / paradigm-shifting | (décrire ce qui a vraiment changé) |
| transformateur / transformation | (décrire ce qui a changé et comment) |
| pierre angulaire | fondation, base, élément clé |
| primordial | le plus important, priorité absolue |
| prêt à (comme wrapper) | prêt, sur le point de |
| émergent / en pleine émergence | en croissance, naissant (ou citer un chiffre) |
| naissant | nouveau, en phase précoce, émergent |
| quintessentiel | typique, classique, définissant |
| englobant / overarching | principal, central, large |
| discrètement / silencieusement | couper, ou nommer le contraste concret |
| profondément *(collocations de signification uniquement — "profondément intégré", "profondément engagé", "profondément enraciné" ; usages littéraux comme "aime profondément" ne comptent jamais dans un cluster)* | couper, ou nommer ce qui est spécifiquement profond |
| sous-jacent / soubassement | base, fondation, ce qui soutient |

#### Tier 3 — Flagger seulement à densité élevée

Ce sont des mots normaux. Ne les flagger que quand le texte en est saturé — signe que l'IA a rempli l'espace avec de la louange vague au lieu de spécifiques.

| Mot | Que faire |
|---|---|
| significatif / significativement | Remplacer certaines occurrences par des chiffres, comparaisons, exemples |
| innovant / innovation | Décrire ce qui est vraiment nouveau |
| efficace / efficacement | Dire comment ou citer une métrique |
| dynamique | Nommer les forces ou changements réels |
| convaincant | Dire pourquoi ça convainc |
| sans précédent | Nommer le précédent brisé (ou couper) |
| exceptionnel / exceptionnellement | Citer ce qui rend l'exception |
| remarquable / remarquablement | Dire ce qu'il y a à remarquer |
| sophistiqué | Décrire la sophistication |
| déterminant / instrumental | Dire quel rôle il a joué |
| de classe mondiale / de pointe / best-in-class | Citer un benchmark ou une comparaison |

### Phrases modèles (à éviter)

Ces constructions à trous signalent qu'une phrase a été générée. Si un blanc peut remplacer un nom ou adjectif sans changer le sens, c'est trop générique.

- "Un [adjectif] pas vers [adjectif] [nom]" → décrire la capacité ou le résultat spécifique
- "Un [adjectif] pas en avant pour [nom]" → dire ce qui a vraiment changé
- "Que vous soyez [X] ou [Y]" → fausse largeur. Choisir l'audience réellement adressée, ou couper. "Que vous soyez débutant ou expert" ne veut rien dire — c'est juste "tout le monde"
- "J'ai récemment eu le plaisir de [verbe]-er" → pattern IA de review/social. Juste dire ce qui s'est passé : "J'ai parlé à", "J'ai lu", "J'ai assisté à"

### Phrases de transition à supprimer ou réécrire

- "De plus" / "En outre" / "Par ailleurs" → restructurer pour que la connexion soit évidente, ou utiliser "et", "aussi"
- "Dans l'[X] d'aujourd'hui" / "À l'ère où" → couper ou énoncer un contexte spécifique
- "Il convient de noter que" / "Notamment" → juste énoncer le fait
- "Voici ce qui est intéressant" / "Voici ce qui m'a frappé" → cadres qui pilotent le lecteur. Laisser le contenu signaler sa propre importance
- "En conclusion" / "En résumé" / "Pour résumer" → ta conclusion doit être évidente
- "Quand il s'agit de" → parler directement de la chose
- "Au bout du compte" / "En fin de compte" → couper
- "Cela dit" / "Ceci étant dit" → couper ou utiliser "mais", "cependant", "toutefois" (sans surutiliser)

### Problèmes structurels

- **Longueur uniforme des paragraphes** : varier délibérément. Inclure des paragraphes d'1-2 phrases et des plus longs. Si chaque paragraphe est à peu près la même taille, corriger.
- **Ouvertures formulaires** : si l'article ouvre sur un contexte large avant d'arriver au point ("Dans le monde en constante évolution de…"), réécrire pour mener avec l'info ou l'insight. Le contexte peut venir en second.
- **Grammaire suspicieusement propre** : ne pas polir toute la personnalité. Fragments délibérés, phrases commençant par "Et" ou "Mais", virgules pour l'effet : si la voix naturelle les utilise, garder.

### Inflation de significance (et formules aphoristiques)

Trois formes du même mouvement — gonfler l'ordinaire en profond :

- **Événements ordinaires gonflés en historiques** : "marquant un moment charnière dans l'évolution de…", "un moment décisif". Énoncer ce qui s'est passé et laisser le lecteur juger. Si la phrase fonctionne encore après suppression de la clause inflationnaire, la supprimer.

- **Formules aphoristiques (profondeur à trous)** : "X est le langage de Y", "X est la monnaie de Z", "l'architecture de la confiance", "X devient un piège", "X n'est pas un outil mais un miroir". La formule transforme une affirmation ordinaire en quelque chose qui sonne citable sans ajouter de précision. Remplacer par l'affirmation concrète qu'elle indique.

- **Clôtures narratives génériques sur le futur** : "Pourrait bien devenir l'un des enjeux les plus importants des prochaines années", "pourrait devenir la tendance déterminante", "est prêt à devenir le prochain grand chapitre". Pattern : modal (pourrait / peut / va / est prêt à) + "devenir" + (l'un des) plus [adjectif] + (narratif / histoire / tendance / thème / mouvement). Correction : choisir la version falsifiable.

Exception : les citations et idiomes établis ("le temps c'est de l'argent") — laisser.

### Inflation d'adjectifs "réel/authentique/véritable"

- "Une véritable transformation", "une authentique passion", "un réel changement", "un vrai lien". Utiliser `réel` / `vrai` / `authentique` / `véritable` comme intensificateur creux sur un nom abstrait implique que le reste du champ est faux ou superficiel — sans nommer ce qui rend cette instance-ci la vraie.
- Distinct de la règle "intensificateurs creux" (au niveau phrase). C'est la forme modificateur-de-nom, où l'intensificateur s'accroche à un nom abstrait pour manufacturer un contraste qui reste non-dit.
- **Exception — contraste nommé :** si la phrase nomme explicitement ce qu'est la version fausse/superficielle, laisser. "Une vraie relation, pas une soumission" est du contraste honnête. Le tic IA est le contraste non-dit.
- Correction sans contraste nommé : couper l'adjectif et ajouter l'affirmation spécifique.

### Copule évitée

- Les textes IA évitent "est" et "a" en substituant des verbes plus sophistiqués : "fait office de", "présente", "se targue de", "représente", "constitue", "s'avère être". Ça sonne communiqué de presse.
- Défaut sur "est" ou "a" sauf si un verbe plus spécifique ajoute vraiment du sens.

### Cyclage de synonymes

- L'IA fait tourner les synonymes pour éviter de répéter un mot : plusieurs façons différentes de désigner la même chose dans le même paragraphe. Les rédacteurs humains répètent le mot le plus clair.
- Si le même nom ou verbe apparaît trois fois dans un paragraphe et que c'est le bon mot, garder les trois. La variation forcée se lit comme abus de thésaurus.

### Attributions vagues

- **Sans source nommée** : "Les experts pensent", "Les études montrent", "La recherche suggère", "Les spécialistes s'accordent" — sans nommer l'expert, l'étude, ou le spécialiste. Soit citer une source spécifique, soit droper l'attribution et énoncer l'affirmation directement.
- **Autorité vague au superlatif** : "des études indépendantes confirment", "les analystes s'accordent", "les experts sont unanimes", "des tests indépendants montrent que nous menons". L'autorité est sans visage et l'affirmation infalsifiable — le lecteur ne peut pas dire qui a mesuré quoi.
- **Empilement de noms** (inverse) : "cité dans Le Monde, France Inter, Le Figaro, et Ouest-France". Empiler les citations prestigieuses pour manufacturer de la crédibilité. Si une source compte, l'utiliser avec contexte : "Dans une interview au Monde en 2024, elle a argumenté…". Une référence spécifique bat quatre name-drops.
- **Empilement d'analogies** : listes rapides d'analogies pour emprunter du poids. Nommer le parallèle qui fait un travail analytique et dire ce qu'il explique, ou couper.
- Correction générale : nommer la source, l'étude, et le résultat pour qu'un lecteur puisse vérifier. Une étude nommée, un rapport lié, un audit daté sont légitimes et restent non-flaggés.

### Phrases de remplissage

- Retirer le padding mécanique qui ajoute des mots sans sens :
  - "Il est important de noter que" → (juste énoncer)
  - "En ce qui concerne" → (réécrire)
  - "La réalité, c'est que" → (couper ou juste énoncer l'affirmation)
  - "Force est de constater que" → couper
  - "Il n'est pas rare de voir que" → énoncer directement
- Note : "Afin de", "En raison du fait que", et "Au bout du compte" sont couverts dans les sections mots/phrases et transitions ci-dessus.

### Conclusions génériques

- "L'avenir s'annonce prometteur", "Seul l'avenir nous le dira", "Une chose est certaine", "En allant de l'avant" — c'est du filler déguisé en conclusions. Couper. Si l'article a besoin d'une pensée de clôture, la rendre spécifique à l'argument.

### Artefacts de chatbot

- "J'espère que cela vous aidera !", "Bien sûr !", "Absolument !", "Excellente question !", "N'hésitez pas à me solliciter", "Faites-moi savoir si vous avez besoin d'autre chose" — ce sont des tics conversationnels d'interfaces de chat, pas de l'écriture. Supprimer entièrement.
- Surveiller aussi : "Dans cet article, nous allons explorer…" ou "Plongeons dans le vif !" — c'est de la méta-narration IA. Couper ou réécrire avec une ouverture directe.

### Constructions "Voyons/Explorons"

- "Voyons", "Regardons de plus près", "Décomposons ça", "Examinons", "Découvrons ensemble" — l'IA utilise "voyons" comme ouverture faussement collaborative pour glisser dans un sujet. C'est du filler qui retarde le point réel. Juste commencer par le point.

### Analyses superficielles en participe présent

- Chaînes de participes présents utilisés comme pseudo-analyse : "symbolisant l'engagement envers le progrès, reflétant des décennies d'expérience, et démontrant une nouvelle ère". Ne disent rien. Remplacer par des faits spécifiques ou couper entièrement.
- Le même mouvement se voit sans -ant : le "meaning-telling" déclaratif qui glose un sujet ordinaire comme s'il était profond — "cela représente un changement plus large", "cela parle d'une tendance de fond". Si la signification est réelle, la montrer avec une conséquence spécifique ; sinon couper.

### Langage promotionnel

- L'IA défaut sur la prose brochure touristique : "nichée au cœur des contreforts", "un hub vibrant d'innovation", "une atmosphère chaleureuse et bienveillante". Remplacer par une description simple. Si tu ne le dirais pas en conversation, couper.

### Défis formulaires

- "Malgré les défis, [sujet] continue de prospérer" ou "Face aux obstacles, [X] fait preuve de résilience". C'est un non-énoncé. Nommer le défi réel et la réponse réelle, ou couper la phrase.

### Ouvertures de scénario spéculatif

- "Imaginez un monde où…", "Représentez-vous un futur dans lequel…", "Envisagez un monde où…". L'IA ouvre un argument avec un hypothétique qui liste des résultats désirables au lieu de faire une affirmation. Le scénario fait la persuasion ; aucune preuve n'est offerte.
- Correction : couper l'hypothétique et énoncer l'affirmation réelle.
- Exception : fiction, expérience de pensée avec un payoff énoncé, et l'instructif "imaginez que vous êtes dans cette situation" (device pédagogique pointant vers un exemple concret) sont ok.

### Fausses gammes

- L'IA crée de la fausse largeur en pariant des extrêmes non-reliés : "du débutant au professionnel confirmé", "de la théorie à la pratique en passant par la recherche". Ça sonne vaste mais ne dit rien. Lister les vrais sujets ou choisir celui qui compte.

### Listes à en-têtes inline

- Listes à puces où chaque item commence par un en-tête en gras qui se répète : "**Performance :** La performance s'est améliorée de…". Retirer l'en-tête en gras et écrire le point directement.

### Points à la place de deux-points dans les labels

- Dans les listes à puces où chaque item mène avec un court label, les LLMs terminent le label par un point puis font tourner l'explication comme une phrase séparée. Une personne écrivant la même liste utilise presque toujours des deux-points. Forme la plus forte : labels en gras (`**Patience.**` là où un humain écrit `**Patience :**`). Corriger le point en deux-points et minuscule le début de la glose. Exceptions : quand le span de label est une phrase complète en soi (pas un label introduisant une glose), le point est correct.

### Capitalisation excessive des titres

- L'IA sur-capitalise les titres en français par contamination de l'anglais : "Négociations Stratégiques Et Partenariats Clés" au lieu de "Négociations stratégiques et partenariats clés". Utiliser la casse phrase pour les sous-titres. Seul le premier mot est capitalisé (sauf noms propres).

### Disclaimers de coupure

- "Bien que les détails spécifiques soient limités selon les informations disponibles", "En date de ma dernière mise à jour", "Je n'ai pas accès aux données en temps réel". Ce sont des limitations de modèle qui fuient dans la prose. Soit trouver l'information, soit retirer le hedge. Ne jamais publier une phrase qui admet que le rédacteur n'a pas vérifié.

### Comblement spéculatif de lacunes

- Quand le modèle manque un fait, il comble la lacune avec de la spéculation hedgée maquillée en background : "maintient un profil public relativement bas", "aurait", "aurait probablement commencé sa carrière à", "semble avoir étudié". Ce sont des devinettes formatées en énoncés. Distinct des disclaimers de coupure qui *admettent* la lacune — celui-ci la cache derrière du filler plausible, ce qui est pire parce que le lecteur ne peut pas dire ce qui est connu de ce qui est inventé. Couper la spéculation, ou remplacer par un fait sourcé.

### Placeholders non remplis

- Slots entre crochets qui devaient être remplacés avant publication : `[Votre Nom]`, `[INSÉRER URL SOURCE]`, `[Décrire la section spécifique]`, `2025-XX-XX`, `<!-- Ajouter citation si disponible -->`. Preuve quasi-définitive que du boilerplate IA a été collé sans édition. Traiter tout placeholder visible comme un bug de publication : le remplir avec du vrai contenu ou supprimer la phrase entièrement.

### Paramètres URL des outils IA

- Paramètres de tracking que les outils IA ajoutent automatiquement aux URLs qu'ils génèrent, survivant au copier-coller dans le contenu publié : `utm_source=chatgpt.com`, `utm_source=copilot.com`, `utm_source=openai`, `utm_source=claude.ai`, `utm_source=perplexity.ai`. La présence du paramètre est la signature, peu importe ce que le texte environnant lit.
- Correction : retirer le paramètre de chaque URL. Garder l'URL si le lien est significatif ; perdre le paramètre entièrement.

### Inflation de nouveauté

- Les textes IA traitent des concepts établis comme si le locuteur les avait inventés : "Il a introduit un terme", "Elle a inventé la formule", "un concept que personne ne nomme", "un problème dont personne ne parle". En réalité, la plupart des idées sont des applications de concepts existants, pas des inventions.
- Deux problèmes. Un : c'est risqué factuellement — si le concept a déjà une page Wikipédia ou des articles précédents, revendiquer la nouveauté fait paraître le rédacteur mal informé. Deux : ça flatte le sujet d'une manière qui se lit promotionnelle plutôt qu'analytique.
- Correction : décrire ce que la personne *a fait avec* le concept, pas qu'elle l'a découvert.
- Patterns connexes à flagger : "le problème que personne ne nomme", "l'insight que tout le monde manque", "ce que personne ne vous dit sur". Ce sont des cadres engagement-bait qui revendiquent une rareté de connaissance là où il n'y en a pas.
- Flagger aussi les **étiquettes inventées** : termes composés pseudo-analytiques créés en cours de phrase et jamais définis. Nommer un concept n'est pas l'expliquer. Définir le terme à la première utilisation ou décrire le mécanisme.

### Bourrage de hashtags

- Longs blocs de hashtags en queue (6+ hashtags sur un post court) sont quasi-universels dans le contenu social généré par LLM et rares dans les posts humains réfléchis. Le bloc mixe généralement un tag spécifique avec des tags de catégorie larges — les catégoriels ne font rien pour la découvrabilité et se lisent comme une sortie de bot.
- **Pourquoi 6 ?** L'engagement organique LinkedIn et Instagram plateau ou décline au-delà de 3-5 tags. Les posts humains qui dépassent 5 sont généralement des posts de launch échangeant portée contre engagement ; les posts LLM défaultent à 10-15.
- Correction : 2-3 tags spécifiques max, ou aucun. Si un hashtag n'aiderait pas un lecteur à trouver du contenu connexe, c'est du filler.

### Hameçons d'engagement infomerciaux

- Fragments punchy qui préparent un reveal : "Le hic ?", "Le twist ?", "Voici l'astuce.", "Mais attendez :", "Le meilleur ?", "Plot twist :", "Et le résultat ?". L'IA les utilise pour faux-manufacturer du momentum et créer du suspense autour d'informations ordinaires — l'équivalent en prose d'un infomercial.
- Correction : supprimer le hook et énoncer la chose. "Le hic ? Ça ne marche qu'avec les jeunes." devient "Ça ne marche qu'avec les jeunes."
- Le même mouvement en registre faux-candid : "Honnêtement ?", "Écoutez,", "Franchement :", "Soyons honnêtes —" comme ouvertures autonomes qui mettent en scène une pause avant un point ordinaire. Le tic est la mise en scène théâtrale, pas le mot — "honnêtement" ou "écoutez" mid-phrase en prose casual est du français ordinaire.

### Clôtures d'endossement social

- La signature curatoriale que les LLMs ajoutent aux posts LinkedIn et Instagram qui partagent ou recommandent quelque chose — généralement avec deux-points tee-uppant un lien : "Celui-là vaut votre temps :", "Un must-read :", "Je recommande vivement de lire ça.", "Faites-vous plaisir et lisez ça.", "Vous ne voulez pas manquer celui-ci.", "À sauvegarder.", "Bookmarkez ça.", "Merci-moi plus tard."
- Pourquoi c'est un tic : ça performe une recommandation sans donner au lecteur une raison de cliquer. L'endossement est générique — pourrait s'asseoir sous n'importe quel lien.
- Correction : dire *ce que* c'est et *pour qui*, puis droper le CTA. Si tu ne peux pas nommer une raison spécifique, le partage n'a pas besoin de signature.

### Ligne plate émotionnelle

- L'IA revendique des émotions comme béquille structurelle sans les transmettre par l'écriture : "Ce qui m'a le plus surpris", "J'étais fasciné de découvrir", "Ce qui m'a frappé", "J'étais excité d'apprendre", "La partie la plus intéressante", et la variante en en-tête de section : "Partie intéressante du projet :" / "Truc intéressant ici :".
- Deux problèmes. Un : tell-don't-show — si le truc est vraiment surprenant, le lecteur devrait le ressentir depuis le contenu, pas depuis le rédacteur qui l'annonce. Deux : ces expressions sont massivement surutilisées comme intros de liste et transitions. C'est du filler dans un costume d'émotion.
- Ce pattern n'est pas toujours IA. C'est aussi un signe d'écriture humaine paresseuse en pilote automatique. Flagger dans les deux cas.
- Correction : si tu revendiques une émotion, l'écriture autour devrait la mériter. Sinon couper la revendication et présenter la chose directement.

### Revendications d'attention persistante

- Le cadre de post de partage qui revendique qu'une chose a occupé l'esprit du rédacteur : "la phrase à laquelle je reviens sans cesse", "je n'arrête pas de penser à ça", "j'y pense encore", "ça me trotte dans la tête depuis toute la semaine". La revendication est sur l'attention du rédacteur, pas sur la chose, et elle arrive *avant* que le lecteur ait une raison de s'en soucier.
- Distinct de la ligne plate émotionnelle (qui revendique un sentiment). Ça revendique une **durée** d'attention, ce qui est infalsifiable et auto-flatteur. Distinct aussi des clôtures d'endossement social (qui vouchent pour un lien à la fin d'un post) ; celui-ci en ouvre un.
- **Exception — raison attachée.** Laisser quand la phrase dit *pourquoi* la chose est revenue. C'est une revendication sur la portée explicative de l'idée. Le tic est le cadre nu avec la raison manquante.
- Correction : supprimer le cadre et ouvrir sur la chose elle-même.

### Structure de fausse concession

- "Bien que X soit impressionnant, Y reste un défi" ou "Alors que X a fait des progrès, Y est encore une question ouverte". L'IA l'utilise pour paraître équilibrée sans réellement peser. Les deux moitiés sont vagues. Soit rendre la concession spécifique, soit choisir un camp.

### Ouvertures en question rhétorique

- "Mais qu'est-ce que ça signifie concrètement ?" / "Alors pourquoi s'y intéresser ?" / "Et maintenant ?" — l'IA utilise les questions rhétoriques pour stagner avant le vrai point. Si tu sais la réponse, dis-la. Les questions rhétoriques se méritent par une setup forte, pas se dropent comme transitions de section.

### Inflation de listes numérotées

- "Trois enseignements clés" / "Cinq choses à savoir" / "Voici les sept meilleurs" — l'IA défaut sur les listes numérotées parce qu'elles sont structurellement sûres. Utiliser des listes numérotées seulement quand le contenu a vraiment autant d'items discrets et parallèles. Si tu paddes pour atteindre un nombre, la liste ne devrait pas exister.

### Artefacts de chaîne de raisonnement

- "Réfléchissons étape par étape", "Décomposons ça", "Pour aborder ça systématiquement", "Étape 1 :", "Voici mon processus de pensée", "D'abord, considérons" — ce sont des artefacts de raisonnement chain-of-thought qui fuient dans la prose publiée. Le lecteur n'a pas besoin de voir l'échafaudage. Énoncer la conclusion, puis les preuves.

### Ton flatteur (sycophantic)

- "Excellente question !", "Point excellent !", "Vous avez absolument raison !", "C'est vraiment une observation perspicace" — ce sont des récompenses conversationnelles d'interfaces de chat, pas de l'écriture. Supprimer entièrement.
- Distinct des artefacts de chatbot : le sycophantic valide spécifiquement le lecteur/questionneur plutôt que juste performer l'aide.

### Boucles d'acquiescement

- "Vous demandez", "La question de savoir si", "Pour répondre à votre question", "C'est une excellente question. Le…" — l'IA réénonce le prompt avant de répondre. En écriture, c'est du pur filler. Le lecteur sait ce qu'il a demandé. Répondre.
- Pattern connexe : ouvrir une section en résumant ce que disait la section précédente. Si la structure est claire, le lecteur n'a pas besoin d'un récap.

### Phrases de calibration de confiance

- "Il convient de noter que", "De façon intéressante", "Étonnamment", "Chose importante", "Significativement", "Notamment", "Certainement", "Sans aucun doute", "Indéniablement" — l'IA les utilise pour signaler au lecteur comment il devrait se sentir face à un fait au lieu de laisser le fait parler pour lui-même.
- "Voici ce qui est intéressant", "Voici la partie intéressante" — cue pilotant le lecteur qui pré-interprète l'importance. Marche quand suivi par des données vraiment surprenantes ; échoue quand ça introduit un restatement de quelque chose d'évident.
- Un "notamment" dans un article de 2000 mots est fine. Trois dans 500 mots est du stacking d'emphase style IA. Flagger par densité.
- Connexe — **tropes d'autorité persuasive** : "la vraie question, c'est", "au fond", "fondamentalement", "ne nous y trompons pas", "la vérité, c'est que". Même mouvement, mais elles assertent de la profondeur ou des enjeux au lieu d'un sentiment. Couper le trope et mener avec la substance.

### Auto-étiquetage de significance

- Après avoir listé ou décrit plusieurs items, le rédacteur pointe en arrière un item et l'étiquette comme contre-intuitif / smart / surprenant / clé : "Ce dernier point est le vrai sujet", "C'est la partie intéressante", "Cette troisième idée est celle qui compte vraiment".
- L'étiquette fait le travail que le contenu était censé faire. Si un point est vraiment contrarian, le lecteur le reconnaît à la description ; s'il n'est pas reconnaissable sans l'étiquette, l'étiquette n'est pas méritée.
- Distinct de la calibration de confiance ("Notamment") qui front-load le cue, et de la ligne plate émotionnelle ("Ce qui m'a le plus surpris") qui préface une seule revendication. Ce pattern back-pointe après coup.
- Correction : couper la phrase d'étiquetage et laisser l'explication qui suit faire le travail directement.

### Structure excessive

- Trop de titres dans un texte court : plus de 3 titres en moins de 300 mots est presque toujours l'IA essayant de paraître organisée. Fusionner les sections ou utiliser des transitions en prose.
- Trop d'items de liste : 8+ puces en moins de 200 mots signifie que le contenu devrait être un paragraphe, pas une liste.
- Titres de section formulaires : "Aperçu", "Points clés", "Résumé", "Conclusion", "Introduction" — c'est l'échafaudage IA par défaut. Utiliser des titres qui disent au lecteur quelque chose de spécifique sur ce qui suit.
- Titres fragmentés : un titre suivi d'une ligne de réchauffement qui le réénonce ("## Performance", puis "La vitesse compte."). Couper le réchauffement.

### Rythme et uniformité

Ce ne sont pas des problèmes de mots ou d'expressions individuels — ce sont des patterns dans comment le texte flow comme un tout. Les textes IA sont métronomiques ; les textes humains ont un rythme varié.

**La structure est le signal #1 de détection.** Les outils de détection IA pondèrent la régularité structurelle plus haut que le vocabulaire. Une construction de phrases cohérente, un pacing uniforme, et des patterns de phrasing symétriques sont plus durs à masquer que de swapper quelques mots. Si tu corriges chaque mot du Tier 1 mais laisses le rythme intact, le texte se lit toujours comme IA.

- **Uniformité de longueur des phrases** : si la plupart des phrases font 15-25 mots, le texte sonne robotique. Mixer des courtes (3-8 mots) avec des plus longues (20+). Les fragments marchent. Les questions cassent la monotonie.
- **Uniformité de longueur des paragraphes** : si chaque paragraphe fait 3-5 phrases et à peu près la même taille, varier délibérément. Certains paragraphes devraient être d'une phrase.
- **Répétition de vocabulaire vs cyclage de synonymes** : les rédacteurs humains répètent quand le mot est juste et varient quand c'est naturel — pas de formule.
- **Test à voix haute** : si le texte sonne comme s'il pourrait être lu par un moteur text-to-speech sans sonner bizarre, c'est probablement trop uniforme.
- **Absence de perspective à la première personne** : quand c'est approprié, le rédacteur devrait avoir des opinions, préférences, réactions. L'IA est implacablement neutre. Si l'article est censé avoir une voix, l'absence de "je pense", "d'après mon expérience", ou une préférence énoncée est en soi un tic IA.
- **Sur-polissage** : éditer agressivement chaque irrégularité peut pousser l'écriture humaine *vers* les profils statistiques IA. Les disfluences naturelles, les choix de mots idiosyncratiques, et le pacing inégal sont ce qui garde le texte hors classification "IA". Ne pas polir toute la personnalité.

### Quand réécrire à partir de zéro vs patcher

Si le texte a 5+ hits de vocabulaire flaggés sur plusieurs catégories, 3+ catégories de patterns distinctes déclenchées, et une longueur uniforme de phrases/paragraphes — patcher les phrases individuelles ne va pas corriger. La structure elle-même est IA-générée. Autre signal : tu pourrais couper 40-60% du texte sans perdre d'information (l'IA reformule la prémisse au lieu d'avancer).

Conseiller une réécriture complète : énoncer le point central en une phrase, puis reconstruire depuis là.

---

## Tiers de sévérité

Tous les AI-isms ne sont pas égaux. Pour un passage rapide ou un triage sur un gros document, prioriser par tier :

### P0 — Tueurs de crédibilité (corriger immédiatement)

- Disclaimers de coupure ("En date de ma dernière mise à jour")
- Artefacts de chatbot ("J'espère que cela vous aidera !", "Excellente question !")
- Attributions vagues sans sources ("Les experts pensent", "des études indépendantes confirment")
- Inflation de significance sur événements de routine
- Placeholders non remplis (`[Votre nom]`)
- Bourrage de hashtags sur posts sociaux
- Paramètres URL des outils IA (`utm_source=chatgpt.com`)

### P1 — AI smell évident (corriger avant publication)

- Violations de la table de mots (plonger, tirer parti, exploiter, robuste, etc.)
- Phrases modèles et constructions à trous
- Ouvertures "Voyons/Explorons"
- Cyclage de synonymes dans un paragraphe
- Ouvertures formulaires ("Dans le monde en constante évolution de…")
- Gras excessif
- Fréquence de tirets cadratins (au-dessus de 1 pour 1000 mots)
- Clôtures narratives génériques sur le futur
- Formules aphoristiques ("X est le langage de Y")
- Clôtures d'endossement social ("Celui-là vaut votre temps :", "merci-moi plus tard")
- Revendications d'attention persistante ("la phrase à laquelle je reviens sans cesse")
- Hedging (simple, empilé, ou parenthétique)
- Inflation d'adjectifs vrai/authentique
- Ligne plate émotionnelle ("Ce qui m'a le plus surpris")
- Hameçons d'engagement infomerciaux ("Le hic ?", "Le twist ?")

### P2 — Polish stylistique (corriger si le temps le permet)

- Conclusions génériques ("L'avenir s'annonce prometteur")
- Règle de trois compulsive
- Longueur uniforme des paragraphes
- Copule évitée (constitue, représente, fait office de)
- Phrases de transition (De plus, En outre, Par ailleurs)

Utiliser P0+P1 pour les passages rapides. L'audit complet couvre les trois tiers.

---

## Échappatoire d'auto-référence

Quand tu écris *à propos* des patterns d'écriture IA (articles de blog, tutoriels, documentation), les exemples cités sont exemptés du flag. Le texte entre guillemets, dans les blocs de code, ou explicitement marqué comme illustratif ("par exemple, une IA pourrait écrire…") ne doit pas être réécrit.

---

## Profils de contexte

Passer un indice de contexte optionnel pour ajuster la stricte des règles. Si aucun contexte n'est spécifié, auto-détecter.

### Définitions des profils

**`blog`** — Défaut. Prose standard long-format. Toutes les règles s'appliquent à stricte pleine.
**`linkedin`** — Social court-format (LinkedIn, Instagram, Facebook). Fragments punchy, formatage visuel comptent.
**`docs`** — Documentation, guides, FAQs. Clarté sur voix.
**`casual`** — Messages courts, notes internes, réponses rapides. Ne rattraper que les pires offenseurs.

### Matrice de tolérance

Les règles non listées dans la table s'appliquent à stricte pleine sur tous les profils.

| Règle | blog | linkedin | docs | casual |
|-------|------|----------|------|--------|
| Tirets cadratins | strict | souple (2/post ok) | souple | skip |
| Gras excessif | strict | souple (hooks en gras ok) | souple | skip |
| Emojis dans titres | strict | souple (1-2 en fin de ligne ok) | skip | skip |
| Puces excessives | strict | skip (les listes marchent sur social) | skip (les listes sont des docs) | skip |
| Hedging | strict | strict | souple | skip |
| Table de mots (liste complète) | strict | strict | souple | P0 uniquement |
| Langage promotionnel | strict | souple (un peu de sell attendu) | strict | skip |
| Inflation de significance | strict | strict | souple | skip |
| Copule évitée | strict | skip | skip | skip |
| Uniformité de longueur paragraphes | strict | skip (court-format) | souple | skip |
| Inflation listes numérotées | strict | souple | skip | skip |
| Questions rhétoriques | strict | souple (1 en hook ok) | strict | skip |
| Phrases de transition | strict | skip (court-format) | souple | skip |
| Conclusions génériques | strict | skip | skip | skip |
| Bourrage de hashtags | strict | strict | skip | skip |
| Clôtures narratives futures | strict | strict | skip | skip |
| Clôtures d'endossement social | strict | strict (le tic post-de-partage) | skip | souple (1 ok en message privé) |
| Inflation vrai/authentique | strict | strict | souple | skip |

**"Souple"** signifie : la règle s'applique mais avec plus de tolérance (borderline ok).

**"Skip"** signifie : ne pas auditer cette catégorie pour ce profil. La règle ne s'applique pas ou ne vaut pas l'édition.

### Cues d'auto-détection

Sans contexte spécifié, inférer de ces signaux :

| Signal | Contexte inféré |
|--------|-----------------|
| Moins de 300 mots + hashtags ou mentions | `linkedin` |
| Instructions étape par étape, docs de paramètres, structure guide/FAQ | `docs` |
| Message court, note perso, réponse rapide | `casual` |
| Pas de signal fort | `blog` (défaut le plus sûr — toutes les règles s'appliquent) |

Si l'auto-détection semble mauvaise, dis quel profil tu utilises et pourquoi. L'utilisateur peut override.

---

## Profils de voix

Les profils de contexte règlent *à quel point être strict*. Les profils de voix règlent *comment la prose devrait sonner* — la persona. Ce sont des axes indépendants. La voix est **optionnelle** — si le rédacteur n'en nomme pas, inférer du registre existant.

**`casual`** — Contractions partout ; leur absence se lit raide. Phrases courtes (viser ≤14 mots en moyenne) ; fragments autorisés. Au moins une touche à la première personne ou un anecdote concret. Quasi-zéro jargon. Garder les hedges chaleureux ("honnêtement", "je pense") mais couper les corporates ("il convient de noter"). *Blog posts personnels, réseaux sociaux, communauté.*

**`professionnel`** — Voix active pour la plupart des phrases. Varier la longueur de phrases. Une revendication concrète par paragraphe (un chiffre, un nom, une date), jamais "les experts disent". Rendre la demande explicite. Faible tolérance au hedging. *Blog professionnel, contenus commerciaux, pitchs.*

**`chaleureux`** — S'adresser au lecteur directement ("vous") et l'acknowledge au moins une fois. Couper les intensificateurs ("très", "vraiment", "incroyablement") au profit de verbes plus forts. Pas d'ouvertures d'empathie performée ("Je comprends parfaitement ce que vous ressentez"). Phrases moyennes (15-20 mots) pour un cadence non pressée. *Blogs éducatifs, guides pratiques, contenus pédagogiques.*

**`direct`** — Mener avec la revendication ; couper les windup "Il est important de noter que". Les tirets cadratins sont rares ici ; utiliser les points pour l'emphase. Pas de padding pour atteindre une règle de trois. Hedging quasi-zéro ; flagger les stacks "peut / pourrait / potentiellement". Courtes déclaratives, avec l'occasionnelle phrase longue pour le contraste. *Positions tranchées, thought leadership, avis d'expert.*

**Calibrer sur un échantillon (optionnel).** Si le rédacteur te donne un échantillon de sa propre écriture ("match ma voix — voici un post"), analyser son pattern de longueur de phrases, taux de contractions, ouvertures de paragraphe, et choix de mots récurrents, puis matcher ça au lieu d'un profil nommé. Ne pas "upgrader" son vocabulaire : s'il écrit "truc" et "choses", garder ce registre.

**Comment la voix compose avec le contexte.** La voix règle la cible ; le contexte règle à quel point l'appliquer. Une *cible* de voix s'applique toujours, même là où un profil de contexte skipperait cette catégorie. Là où les deux axes régissent la même règle et sont d'accord, ils se renforcent. Là où ils disagreent, résoudre vers le **plus strict** des deux. Pairings par défaut sensés : casual↔casual/linkedin, professionnel↔blog, chaleureux↔blog, direct↔blog.

---

## Format de sortie

### Mode rewrite (défaut)

Retourner ta réponse en quatre sections :

**1. Problèmes trouvés**
Une liste à puces de chaque AI-ism identifié, avec le texte fautif cité.

**2. Version réécrite**
Le contenu complet réécrit. Préserver la structure originale, l'intention, et tous les détails spécifiques. Ne changer que ce que les règles exigent.

**3. Ce qui a changé**
Un résumé bref des éditions majeures. Pas chaque mot, juste les changements significatifs.

**4. Audit de seconde passe**
Relis la version réécrite de la section 2. Identifie les AI tells restants qui ont survécu à la première passe. Corrige-les, retourne le texte corrigé inline, et note ce qui a changé dans cette passe. Si la réécriture est propre, dis-le.

### Mode detect

Retourner ta réponse en deux sections :

**1. Problèmes trouvés**
Une liste à puces de chaque AI-ism identifié, avec le texte fautif cité. Grouper par sévérité (P0, P1, P2).

**2. Évaluation**
Pour chaque flag, note si c'est un problème clair ou un judgment call. Certains patterns associés à l'IA sont des techniques d'écriture efficaces — la longueur uniforme de paragraphes est un problème, mais un "cependant" bien placé ne l'est pas. Signale quels flags le rédacteur devrait définitivement corriger vs. lesquels valent un second regard mais peuvent être fine en contexte. Si le texte est propre, dis-le.

### Mode edit

Après édition du fichier en place, retourner un rapport court — pas le fichier complet :

**1. Éditions faites**
Une liste à puces des changements, chacun avec la localisation dans le fichier et le before → after. Uniquement les spans que tu as touchés.

**2. Vérification**
Confirmer que tu as relu le fichier et que les patterns flaggés sont résolus. Note tout ce que tu as délibérément laissé seul parce que c'était déjà humain ou intentionnel.

---

## Calibration du ton

L'objectif est de l'écriture qui sonne comme écrite par une personne. Directe. Spécifique. L'écriture devrait démontrer la confiance, pas l'asserter.

Cinq principes pour des réécritures qui sonnent humaines :
1. **Varier la longueur des phrases** — mixer court avec long. Les fragments sont fine.
2. **Être concret** — remplacer les revendications vagues par des chiffres, noms, dates ou exemples.
3. **Avoir une voix** — quand approprié, utiliser la première personne, énoncer des préférences, montrer des réactions.
4. **Couper la neutralité** — les humains ont des opinions. Si l'article est censé prendre position, la prendre.
5. **Mériter ton emphase** — ne pas dire au lecteur que quelque chose est intéressant. Le rendre intéressant.

La suppression est la moitié du job. Une réécriture qui clear chaque flag mais lit stérile — longueurs de phrases égales, pas de position, pas de première personne où elle devrait être — est encore reconnaissablement une sortie machine. Quand le genre porte une voix (essais, posts, écriture personnelle), remets la voix exprès : une réaction, une préférence énoncée, un aparté, une pensée laissée irrésolue.

Si l'écriture originale est déjà forte, dis-le et fais seulement les coupes nécessaires. Ne sur-édite pas juste pour le plaisir.

La table de remplacement fournit des défauts, pas des mandats. Si un mot flaggé est clairement le bon choix en contexte, préserve-le.

