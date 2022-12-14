---
title: Amélioration d'un outil Rust pour analyser du code Java
starts: 2023
duration: 3-6 months
position: internship
level: (BAC+4 ou BAC+5)
contact: Arnaud Blouin, Djamel Eddine Khelladi
email: arnaud dot blouin _at_ irisa.fr djamel-eddine dot khelladi _at_ irisa.fr
summary: Le but du stage est d'étendre notre outil HyperAST, qui capture l'historique Git d'un logiciel Java, pour faciliter l'écriture d'analyses de code.
---

## Description

Le code d'un programme peut se représenter en mémoire sous la forme d'un AST (abstract syntax tree, arbre de syntaxe abstraite). Cela permet de parcourir un AST pour le transformer (réunisage de code) ou l'analyser. L'HyperAST est une technique et un outil permettant de représenter une multitude d'AST dans un unique hyper AST. Cela sert par exemple à obtenir l'hyper AST à partir de tout l'historique (de tous les commits) d'un programme pour étudier son évolution dans le temps.

Le but de ce stage est de faciliter les développeurs à écrire leur propre analyse de code temporelle dans l'HyperAST. Cela demandera d'améliorer l'API avec de nouvelles fonctionnalités, d'écrire des tutoriels, et de développer des exemples d'analyse de code.
Il n'est pas nécessaire de connaître Rust pour postuler au stage.

Technologies : Rust, Java

## Postuler

Contacter Arnaud Blouin et Djamel Eddine Khelladi dés que possible.
L'étude des dossiers se fait au fil de l'eau jusqu'à sélection du candidat ou de la candidate adéquate.


## References

[1] HyperAST: Enabling Efficient Analysis of Software Histories at Scale. Quentin Le Dilavrec, Djamel Eddine Khelladi, Arnaud Blouin, Jean-Marc Jézéquel. ASE 2022 - 37th IEEE/ACM International Conference on Automated Software Engineering, Oct 2022, Oakland, United States. pp.1-12
https://hal.inria.fr/hal-03764541/file/Hyper_AST___ASE_2022_revision.pdf