---
date: 2024-10-03T13:00:00
title: "Marmot: Extraction of Fine-Grain Memory Access Profiles for real-time software"
abstract: >
  
  Enforcing deadlines in real-time systems calls for the computation of an upper-bound of the Worst-Case Execution Time (WCET) of tasks. In multi-core systems, shared-resource usage leads to interference between tasks running on parallel cores, resulting in additional delays in the execution time of tasks. Schedulability analysis techniques rely on Interference-Aware WCET (IA-WCET, WCET integrating delays resulting from interference) of tasks to safely consider these delays. Calculation of IA-WCET requires knowledge about the worst-case shared-resource usage of tasks, in the form of a memory access profile as far as shared memory accesses are concerned.
  State-of-the-art memory profiles only provide coarse-grain information (at the level of an entire task), resulting in pessimism in IA-WCET computation. More recent solutions propose to refine the information available in memory profiles, but are still limited: they lack information about shared-resource usage of code inside loops and are unable to use contextual information, which leads to over-approximation. This paper presents Marmot, a technique that extends recent memory access profile extraction solutions for real-time software. In Marmot, tasks are split in successive intervals, with the worst-case resource usage of each interval described as a distribution instead of a single value. Experimental results show that IA-WCET computation and schedulability analysis can take advantage of the fine-grain intervals produced by Marmot to obtain more precise IA-WCET and therefore higher schedulability than coarser-grain profiles.
event: DiverSE Coffee
location: Rennes, France
speaker: Hector Chabot

---

