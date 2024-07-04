---
date: 2024-06-13T13:00:00
title: "Large language models as oracles for instantiating ontologies with domain-specific knowledge"
abstract: >

  Background. Endowing intelligent systems with semantic data commonly requires
  designing and instantiating ontologies with domain-specific
  knowledge. Especially in the early phases, those activities are typically
  performed manually by human experts possibly leveraging on their own
  experience. The resulting process is therefore time-consuming, error-prone, and
  often biased by the personal background of the ontology designer. Objective. To
  mitigate that issue, we propose a novel domain-independent approach to
  automatically instantiate ontologies with domain-specific knowledge, by
  leveraging on large language models (LLMs) as oracles. Method. Starting from (i)
  an initial schema composed by inter-related classes andproperties and (ii) a set
  of query templates, our method queries the LLM multiple times, and generates
  instances for both classes and properties from its replies. Thus, the ontology
  is automatically filled with domain-specific knowledge, compliant to the initial
  schema. As a result, the ontology is quickly and automatically enriched with
  manifold instances, which experts may consider to keep, adjust, discard, or
  complement according to their own needs and expertise. Contribution. We
  formalise our method in general way and instantiate it over various LLMs, as
  well as on a concrete case study. We report experiments rooted in the
  nutritional domain where an ontology of food meals and their ingredients is
  semi-automatically instantiated from scratch, starting from a categorisation of
  meals and their relationships. There, we analyse the quality of the generated
  ontologies and compare ontologies attained by exploiting different
  LLMs. Finally, we provide a SWOT analysis of the proposed method.

event: DiverSE Coffee
location: Rennes, France
speaker: Giovanni Ciatto (University of Bologna)
url_slides: https://gciatto.github.io/presentation-llm4kg/#/
---
