---
date: 2022-10-06T13:00:00
title: HyperAST
abstract: >
  Abstract Syntax Trees (ASTs) are widely used beyond compilers in many tools
  that measure and improve code quality, such as code analysis, bug detection,
  mining code metrics, refactoring, etc. With the advent of fast software
  evolution and multistage releases, the temporal analysis of an AST history is
  becoming useful to understand and maintain code. However, jointly analyzing
  thousands versions of ASTs independently faces scalability issues, mostly
  combinatorial, both in terms of memory and CPU usage. In this paper, we
  propose a novel type of AST, called HyperAST, that enables efficient temporal
  code analysis on a given software history by: 1/ leveraging code redundancy
  through space (between code elements) and time (between versions); 2/ reusing
  intermediate computation results. We show how the HyperAST can be built
  incrementally on a set of commits to capture all multiple ASTs at once in an
  optimized way. We evaluated the HyperAST on a curated list of large software
  projects. Compared to Spoon, a state-of-the-art technique as a baseline, we
  observed that the HyperAST outperforms it with an order-of-magnitude
  difference from x6 up to x8076 in CPU construction time and from x12 up to
  x1159 in memory footprint. While the HyperAST requires up to 2 hours 22
  minutes and 7.2Gb for the biggest project, Spoon requires up to 93 hours and
  31 minutes 2.2TB. The gains in construction time varied from +83,4% to
  +99,99% and the gains in memory footprint varied from +91,8% to +99,9%. We
  further compared the task of finding references of declarations with the
  HyperAST and Spoon. We observed on average 90% precision and 97% recall
  without a significant difference in search time.
event: DiverSE Coffee
location: Rennes, France
speaker: Quentin Le Dilavrec
---
