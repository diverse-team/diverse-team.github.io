---
date: 2023-11-02T13:00:00
title: "Adaptive Structural Operational Semantics"
abstract: >
  Software systems evolve more and more in complex and changing environments,
  often requiring runtime adaptation to best deliver their services. When
  self-adaptation is the main concern of the system, a manual implementation of
  the underlying feedback loop and trade-off analysis may be desirable. However,
  the required expertise and substantial development effort make such
  implementations prohibitively difficult when it is only a secondary concern for
  the given domain. In this paper, we present ASOS, a metalanguage abstracting the
  runtime adaptation concern of a given domain in the behavioral semantics of a
  domain-specific language (DSL), freeing the language user from implementing it
  from scratch for each system in the domain. We demonstrate our approach on
  RobLANG, a procedural DSL for robotics, where we abstract a recurrent
  energy-saving behavior depending on the context. We provide formal semantics for
  ASOS and pave the way for checking properties such as determinism, completeness,
  and termination of the resulting self-adaptable language. We provide first
  results on the performance of our approach compared to a manual implementation
  of this self-adaptable behavior. We demonstrate, for RobLANG, that our approach
  provides suitable abstractions for specifying sound adaptive operational
  semantics while being more efficient.
event: DiverSE Coffee
location: Rennes, France
speaker: Gwendal Jouneaux
url_pdf: https://dl.acm.org/doi/10.1145/3623476.3623517
---
