---
date: 2024-02-05T13:00:00
title: "Precise temporal analysis of source code histories at scale"
abstract: >
  Software systems play a central role in contemporary societies, continuously
  expanding and adjusting to meet emerging requirements and practices. Over the
  years, through extensive development efforts and numerous code updates, those
  systems can accumulate millions of lines of code. Moreover, they exhibit
  complexity, configurability, and multi-language characteristics, relying on
  large and complex build pipelines to target multiple platforms and hardware.

  This requires extensive code analyzes to maintain code, monitor quality and
  catch bugs.


  Automated code analysis is a resource-intensive process primarily designed to
  examine a single specific software version. Presently, existing code analysis
  methods struggle to efficiently evaluate multiple software versions within a
  single analysis, taking up an impractical amount of time.

  This type of code analysis, which scrutinizes software code over several moments
  of its existence, is referred to as "temporal code analysis."


  Temporal code analyses open new opportunities for improving software quality and
  reliability. For example, such analyses would permit to fully study how code and
  their tests co-evolve in a code history. To overcome the different challenges
  that prevent such analyses to run at large scale, this thesis makes the
  following contributions.

  This thesis first demonstrates the feasibility of analyzing source code changes
  to identify causality relations between changes (ie. co-evolutions).


  The second contribution addresses the efficiency of computing fine-grained
  changes and their impacts from code histories. This required to revisit how
  source code histories are represented and processed, leveraging the structured
  nature of code and its stability through time. It led to an approach, called
  HyperAST, that incrementally computes referential dependencies.


  The third contribution is a novel code differencing technique for diffing
  commits. This last contribution, called HyperDiff, complements HyperAST to
  compare commits at scale.

event: PhD Defense
event_url: https://www.irisa.fr/date/2024-01/co-evolution-constantly-evolving-software-systems
location: Rennes, France
speaker: Quentin Le Dilavrec
---
