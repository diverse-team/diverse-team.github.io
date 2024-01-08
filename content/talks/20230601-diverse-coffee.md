---
date: 2023-06-01T13:00:00
title: "Polyglot AST: Towards Enabling Polyglot Code Analysis"
abstract: >
  Today, a plethora of programming languages exists, each better suited for a
  particular concern. For example, Python is suited for data analysis but not
  web development, whereas JavaScript is the inverse. As software complexity
  grows and needs to address multiple concerns, different programming languages
  are often used in combination, despite the burden of bridging them (e.g.,
  using Java Native Interface).
  Polyglot programming emerged as a solution allowing the seamless mixing of
  multiple programming languages. GraalVM and PolyNote are examples of runtimes
  allowing polyglot programming. However, there is a striking lack of support
  at design time for building and analyzing polyglot code. To the best of our
  knowledge, there is no uniform language-agnostic way of reasoning over
  multiple languages to provide seamless code analysis, since each language
  comes with its own form of Abstract Syntax Trees (AST).  In this paper, we
  present an approach to build a uniform yet polyglot AST over polyglot code,
  so that it is easier to perform global analysis. We first motivate this
  challenge and identify the main requirements for building a polyglot AST. We
  then propose a proof of concept implementation of our solutions on GraalVM’s
  polyglot API. On top of the polyglot AST, we demonstrate the ability to
  implement several polyglot-specific analysis services, namely
  auto-completion, consistency checking, type inference, and rename
  refactoring.
event: DiverSE Coffee
location: Rennes, France
speaker: Philémon Houdaille
---
