---
title: DevOps et IHM pour l'ingénierie des systèmes complexes
starts: 2023
duration: 3 ans
position: phd
contact: Arnaud Blouin, Benoit Combemale
email: prenom.nom@irisa.fr
summary: DevOps, langages dédiés, environnement de développement, interaction humain-machine, ingénierie dirigée par les modèles, live programming, utilisabilité
---


## Contexte


La conception de systèmes complexes requiert la participation de nombreux acteurs apportant chacun leur propre point de vue emprunte de leur expertise et connaissance sur le système à développer, ou le problème à résoudre de façon plus générale. On appelle ce paradigme de développement, l’intelligence collective [1]. La conception en rupture de nouveaux systèmes complexes requiert des moyens avancés favorisant et facilitant la communication, le partage et la synchronisation entre les nombreuses parties prenantes impliquées tout au long des processus de développement. En particulier, ces nouveaux moyens doivent permettre de dépasser les limites imposées par la structure en silos des organisations. Pour s'affranchir de cette contrainte, la mise en place d'environnements d'ingénierie doit permettre de faciliter le partage des connaissances, la résolution des problèmes et la prise de décision, par le biais de moyens avancés d'interactions et de collaborations.

Les premières générations de ces environnements d'ingénierie ont permis d'appréhender les spécificités de chaque acteur en leur permettant d'utiliser leurs propres formalismes, tout en gardant une cohérence globale et la capacité de raisonner globalement sur le système en cours de conception. Ces environnements sont parfois également adossés à une méthodologie permettant de guider le processus de création des différents points de vue. Néanmoins, ces méthodologies restent indépendantes du flux de valeurs transitant entre les nombreux acteurs intervenant dans le processus. Cette limitation affecte la capacité à établir une intelligence collective où l’ensemble des individus collaborent globalement et de manière agile. Pour cela, un flux de valeurs correctement identifié, transparent, doté d'un outillage adapté et partiellement automatisé pour faciliter sa manipulation est indispensable pour favoriser la créativité nécessaire en phase de conception, tout en valorisant l'implication de chacun.




## Objectifs

Pour exploiter au mieux tout le potentiel du pouvoir de l'intelligence collective dans un contexte du développement de systèmes complexes, cette thèse vise à améliorer l'utilisabilité des environnements informatiques outillant une intelligence collective, et impliquant tant les ingénieurs systèmes que l'ensemble des acteurs des ingénieries de spécialité. Pour cela, nous considérons deux concepts majeurs de l'IHM de ces environnements informatiques : l'utilisabilité et la translucence sociale.
L'utilisabilité se concentre sur trois facettes :
- L'efficacité, qui vise à obtenir un résultat en un minimum d'effort.
- L'affordance, en particulier l'affordance perceptible, qui est la capacité d'un objet à suggérer ses usages.
- La satisfaction, c’est-à-dire le confort de l'utilisateur à utiliser l'environnement technique et à accomplir des tâches.
La translucence sociale se concentre sur trois facettes complémentaires, à savoir :
- La visibilité. Un humain qui souhaite effectuer des actions sur un objet devrait voir ce que d'autres humains effectuent actuellement sur le même objet.
- La prise de conscience. De la visibilité découle la prise de conscience qui conduit cet humain à choisir les actions à effectuer sur l'objet, en fonction des actions des autres.
- La responsabilité. Puisque les humains voient les actions des autres sur le système, ils sont responsables de leurs propres actions puisque "je sais que tu sais que je sais".
Sur la base de ces deux concepts majeurs d'IHM: 1/ nous analysons d'abord l'utilisation et les limites du DevOps pour le développement de systèmes complexes requérant   la mise en œuvre d’une intelligence collective; 2/ nous travaillerons ensuite sur les interactions et les techniques de partage de connaissance, incluant les problèmes de visualisation, pour des environnements avancées outillant efficacement une intelligence collective.

Dans le domaine de l’ingénierie des logiciels, les pratiques dîtes de «  DevOps » visent, entre autres, à réduire la distance entre les différents acteurs et à améliorer les interactions entre ces derniers grâce à une chaîne d'outils adaptée. L'exécution de cette chaîne d'outils vise à produire dans les délais les plus courts possible un résultat global (logiciel, données, etc.). La recherche de ce résultat global fédère les différents acteurs impliqués, venant possiblement de différents domaines, autour d'un objectif final commun.
Dans le contexte de l’ingénierie des systèmes, une approche à la «  DevOps » permettrait de tirer parti du flux de valeurs établi pour automatiser au maximum certaines activités, et assurer une amélioration continue sur le système en cours de conception. Les verrous scientifiques et techniques sont nombreux :
- Comment établir une chaîne principale d'outils DevOps pour l'ingénierie système recherchant des optimum globaux en permettant une coordination socio-technique entre les différents acteurs impliqués ?
- Comment sur une chaîne locale d'outils supportant une approche de type «  DevOps », un acteur peut-il s'appuyer pour étudier des optimum locaux sans affecter la chaîne principale ?
- Comment dans un contexte DevOps propager une évolution réalisée par un acteur sur ses données localement, aux autres données du systèmes, calculer et gérer les possibles impacts sur les autres acteurs ?
- Comment notifier un acteur en cas de détection d'un impact sur ses données pour qu'il puisse tirer profit facilement et rapidement de ces changements ?
- Comment chaque acteur, avec leur point de vue spécifique, peut-il visualiser, valider et analyser des optimum locaux et globaux ?
- Quelles techniques d'IHM à créer, intégrer dans ces nouveaux environnements d'ingénierie pour améliorer l’utilisabilité et la translucence sociale?


## Démarche scientifique

Le doctorant ou la doctorante aura la charge de travailler sur les verrous mentionnés ci-dessus. En particulier, si les pratiques à la « DevOps » sont largement utilisées pour le développement de logiciels, les chaînes d'outils pour le logiciel ne sont pas adaptées à l'ingénierie système en raison de paradigmes différents (par exemple, code vs modèles hétérogènes, exécution vs simulation, informaticiens vs physiciens, ...). Il ou elle devra adapter chacune des étapes de la boucle DevOps (en particulier les étapes : créer, vérifier et surveiller) pour l'ingénierie système.
Les étapes 'créer' et 'vérifier' impliquent qu'un acteur concerné puisse rapidement observer les résultats lors de changement dans ses données. Sur ce point, nous pouvons tirer profit des connaissances acquises sur le domaine du "live programming" pour aller vers du "live engineering". Le "live programming" permet de modifier un programme en cours d'exécution en propageant les modifications apportées au code source du programme à son état d'exécution. Cela permet de combler le fossé entre l'écriture et l'exécution d'un programme : les effets d'un changement sur le système en cours d'exécution sont immédiatement visibles et le développeur peut prendre des mesures immédiates. Dans notre contexte, cela permettrait d'améliorer l'efficience et la satisfaction en réduisant le temps d'évaluation de changements apportés par un acteur sur des données (c’est-à-dire obtenir ses nouveaux optimum locaux), ainsi que la propagation et l'impact de changements sur les optimum locaux des autres acteurs et sur les optimum globaux du système.
Cela implique une amélioration de l'interactivité des environnements de développements des acteurs et une identification des résultats 'live' que chaque acteur se doit d'attendre. La chaîne d'outils DevOps pour l'ingénierie système permettrait en arrière plan de 'créer' des optimum locaux et globaux, et de les 'vérifier' pour visualisation ou notifications auprès des différents acteurs concernés.
Afin d'améliorer l'affordance, le doctorant ou la doctorante pourra également travailler sur l'assistance et la recommandations de tâches visant à simplifier le travail des différents acteurs. Cette assistance pourra se faire grâce à la surveillance de l'étape DevOps (l'étape 'surveiller').

## Environnement

Le candidat ou la candidate réalisera sa thèse dans le cadre d'une collaboration entre l'équipe DiverSE, commune au CNRS (IRISA) et à Inria, et le laboratoire LSEA du CEA List. L'équipe DiverSE est située à Rennes. Les recherches de l'équipe DiverSE se situent dans le domaine du génie logiciel. L'équipe est activement impliquée dans des projets européens, français et industriels et est composée de 9 enseignants-chercheurs, 20 doctorants, 4 post-docs et 3 ingénieurs. Le CEA List est intégré à l’université Paris-Saclay et situé à Palaiseau. Au sein du CEA List, le laboratoire LSEA travaille sur des méthodes et outils pour l’ingénierie de systèmes embarqués et autonomes de confiance. L’équipe, constituée de 14 membres permanents (chercheurs et ingénieurs) et de 12 membres non permanents (doctorants, postdocs et ingénieurs), est fortement impliquée dans des projets collaboratifs européens et nationaux, des projets industriels et dans des groupes internationaux de standardisation dans le domaine de l’ingénierie logicielle et système (OMG, ISO, AUTOSAR).

Les travaux de thèse seront dirigés par [Arnaud Blouin](https://people.irisa.fr/Arnaud.Blouin/) (INSA, DiverSE team), [Benoit Combemale](https://people.irisa.fr/Benoit.Combemale) (University of Rennes 1, DiverSE team) et [Sébastien Gérard](https://www.researchgate.net/profile/Sebastien-Gerard) (CEA LIST).

## Postuler

Envoyez votre CV et une lettre de motivations dés que possible.
L'étude des dossiers se fait au fil de l'eau jusqu'à sélection du candidat ou de la candidate adéquate.

## References
[1] Pierre Levy. 1997. Collective Intelligence: Mankind’s Emerging World in Cyberspace. Perseus Books, Cambridge, MA.
