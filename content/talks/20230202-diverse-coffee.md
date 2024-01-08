---
date: 2023-02-02T13:00:00
title: "Machine learning for software engineering: examples of two applications with ticket issues and code metrics"
abstract: >
  In software engineering, tooling is nowadays mandatory for efficient project
  management and may relates to any project phase: design, coding or
  maintenance. These various tools consist of measures, called metrics,
  automated code generation systems and decision support systems, predictive or
  not. The applications of the latter are numerous: bad smell detection, ticket
  classification, etc. In this context of tooling, the use of machine learning
  methods in software engineering is constantly increasing. This is mainly due
  to the availability of data through online repositories but also due to the
  increase in computing power of machines.


  In this talk I will present parts of my PhD concerning the use of machine
  learning techniques in the field of in software engineering. I will focus my
  presentation on two kinds of data where machine learning has been applied:


  I) Issues: binary classification solution for discriminating bug from non bug
  issues. This solution combines natural language processing (TF-IDF) and
  classification (multi-layer perceptron) techniques, selected after comparing
  commonly used solutions to classify issues. Moreover, hyper-parameters of the
  neural network are optimized using a genetic algorithm. The obtained results,
  as compared to existing works on a commonly used benchmark, show significant
  improvements on the F1 measure for all datasets.


  II) Metrics: approach to classify automatically developers using software
  metrics (senior or not). It uses a supervised learning-based approach trained
  with a manually labeled dataset of 703 developers from 17 open-source projects
  from GitHub for which 23 metrics are automatically extracted. Experienced
  developers classification results show a high F1 measure. A companion
  explainability study analyzes which metrics are the most influential.
event: DiverSE Coffee
location: Rennes, France
speaker: Quentin Perez
---
