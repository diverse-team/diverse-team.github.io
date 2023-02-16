---
title:  Développement d'une application Web pour la gestion de modèles d’évolution des ressources en eau sous la pression du changement climatique
starts: 2023
duration: 3-6 months
position: internship
level: (BAC+4 ou BAC+5)
contact: Jean-Raynald de Dreuzy, Nicolas Cornette, Arnaud Blouin, Alexandre Boisson

email: Jean-Raynald.de-Dreuzy _at_ univ-rennes1.fr , arnaud dot blouin _at_ irisa.fr
summary: Le but du stage est de développer une appli Web (front Angular, API REST, back) pour la gestion de modèles d’évolution des ressources en eau. Stage localisé à l'OSUR.
---

## Contexte

La prédiction de l’évolution des ressources sous la pression du changement climatique nécessite l’utilisation de nombre de modèles, de données et d’outils parmi lesquels :
des scénarios d’évolution du climat,
des modèles hydrologiques pour décomposer les précipitations en évapotranspiration, ruissellement et infiltration
des modèles d’écoulement souterrain pour déterminer le devenir de l’infiltration et la contribution des nappes phréatiques au stockage naturel des ressources
des mesures de débit dans les rivières pour contraindre les relations entre les précipitations et les débits.
Même si l'interfaçage de chacune de ces composantes ne pose pas de problème théorique majeur, la capacité à les intégrer dans un système informatique accessible et ergonomique reste un défi majeur pour les communautés d’hydrologues. Actuellement, la plupart des études et des analyses sont réalisées par des spécialistes, ingénieurs et chercheurs, qui connaissent bien les processus naturels mais qui ne peuvent répondre à la demande d’une diversité croissante de questions et de scénarios à réaliser pour y répondre.
La prise de conscience récente de changements climatiques non pas à venir mais en cours a augmenté les inquiétudes légitimes de la société (citoyens, entreprises et décideurs) sur le devenir des ressources naturelles au premier plan desquelles l’eau. Les questions vont de la prévision saisonnière à quelques mois des stocks disponibles pour l'alimentation en eau d’une petite collectivité aux prospectives pluri-décennales d'adaptation des réseaux de distribution à des échelles régionales. Si toutes les questions sont pleinement légitimes, les réponses sont limitées par l’accès à la compétence et la mobilisation d’experts coûteuse et peu agile.
A partir des connaissances acquises à Géosciences Rennes sur la distribution des flux et des stocks d’eau dans les bassins versants, le projet a pour objectif de développer une application Web (front-end et back-end) pour des modèles hydrologiques réalisant des prévisions saisonnières d’évolution de la ressource en eau sous la pression du changement climatique. Le projet s’appuiera sur les résultats de la thèse de Nicolas Cornette (2019-2022) pour mettre à disposition des moyens de prévision pour une large gamme d’acteurs régionaux en charge de la gestion et de la distribution d’eau potable (ex. Gestionnaire de syndicats et d’entreprises en charge de la distribution d’eau potable, responsable de Schémas d'aménagement et de gestion de l’eau-SAGE). Il s'intégrera dans le projet CYDRE (Cycle hYdrologique, Disponibilité de la Ressource et Évolution) financé par la Communauté Européenne et la Région Bretagne (2023-2024). Le projet s’appuie également sur la connaissance des milieux du Service Géologique National (BRGM) et l’expertise de transfert du Centre de Ressource et d’Expertise sur l’Eau en Bretagne (CRESEB).

## Sujet

Le stage a pour objectif de développer une application web permettant d’accéder à un modèle hydrologique. L'application sera composée de trois éléments :
un front-end Angular pour la saisie des conditions de la prédiction à réaliser: site géographique concerné, paramètres du modèle hydrologique, durée de la prédiction, type de scénario climatique.
une API REST pour envoyer des requêtes du front-end vers le back-end et obtenir en retour les résultats de la simulation sous une forme simple de fichiers ou d’adresse ftp pour des fichiers volumineux.
un back-end qui exécute le modèle hydrologique (en Python) avec les paramètres renseignés dans le front-end et transféré à travers les requêtes REST.
Les développements s’inspireront du front-end “h2ogui” développé avec Inria pour des modèles hydrologiques similaires. h2ogui est une application Qt fonctionnant en local dont les sources sont pleinement indépendantes du modèle hydrologique.
Les développements pourront intégrer des utilisateurs et développeurs multiples partageant tous un intérêt commun pour la modélisation hydrologique et plus généralement, offrir à la communauté académique et non académique de la “zone critique” (zone habitable des continents, des hauts reliefs jusqu’aux régions côtières) une démonstration de ce que peut apporter un système informatique au partage de connaissances sur les effets du changement climatique.

## Compétences

**Niveau**: Bac+4 en informatique


Angular, API Rest, git, test logiciel, capacité à interagir avec des développeurs non informaticiens et des acteurs de la société non scientifiques.


Aucune compétence dans les domaines environnementaux. Des connaissances en hydrologie et en climatologie pourront être acquises au cours du stage.

## Conditions pratiques

**Localisation**: Géosciences Rennes (Université de Rennes)
**Rémunération**: indemnités de stage forfaitaires 623,7 €/mois
**Période**: démarrage en fonction des périodes de stage fixées par les formations
**Durée**: 2 à 5 mois, les durées plus longues étant privilégiées pour avancer dans le développement de l’application.
