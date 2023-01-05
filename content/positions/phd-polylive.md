---
title: Handling Evolution for Polyglot and Live Programming
starts: 2022
duration: 3 ans
position: phd
contact: Djamel E. Khelladi, Arnaud Blouin, Benoit Combemale
email: firstname.lastname@irisa.fr
summary: Evolution, co-evolution, Polyglot, Live, Programming
---

## Context

The evolution of software engineering discipline has seen the emergence of a multitude of programming languages (PL), each dedicated to a particular application concern. Nowadays, complex software development often involves more than a single language for the implementation, refered to as *polyglot programming*. Indeed, we observe more and more software projects that are implemented with various PLs, in particular, to combine their strengths and counterbalance their weaknesses.
For example, polyglot programming is relevant and popular in development of web applications, video games, DSLs, etc.
Emerging solutions do exist that support polyglot programming relying on Intermediate Representation (IR), such as the GrallVM/Truffle, PolyNote notebook, LLVM, or WebAssembly.
In addition to polyglot programming, *live programming* makes it possible to change a program while it is running by propagating changes on a program’s code to its run-time state. The goal is to ease the inflexibility of programming, i.e., write code, then compile/interpret it, before to observe the results, which must happen following every update of the program.


## Problem

Polyglot programming of software do offer many advantages, however, they come with cost. One of the issues that arise is w.r.t. evolution over time. Indeed, since programs written in different languages co-exists, when one evolves, others may be impacted, and then must be co-evolved accordingly. An example would be a change of variable/method declaration in Python, and its impact and necessary co-evolution on its usage in Java or Scala. The same issue rises on the exchanged data itself, which may require a finer co-evolution as well.

This scenario is amplified in collaborative development and in modern architecture like microservices, where different developers work on different parts of the code. In the case of polyglot programming, developers may work separately on a single PL without being aware of how the other programs in other PLs evolve. This may cause build failures in the CI pipeline, introduce silent bugs, and slow down the development.  Therefore, it is essential to support co-evolution to maintain a global consistency with delivering feedback to developers.
In the context of live programming, live for polyglot programming lacks flagrant support in the literature, where changes must be propagated to run time states of/from different languages.



## Objectives

The main objective of this thesis is to address the lack of support for evolution in polyglot and live programming. This PhD candidate will address the following tasks:

1. An in-depth analysis and investigation of current state-of-the-art solutions that provide environments for polyglot programming. The goal is to identify the weakness and existing gap in the evolution and co-evolution in polyglot programming.

2. Addressing co-evolution at design time and at run time covering live and polyglot programming. First by specifying a structural interface with consistency links between polyglot entities (e.g., based on graph representation) that would be used for the     co-evolution at design time for polyglot programming. Second, by specifying protocols on how to handle data exchanges and sharing contextual information through run time interfaces of various PLs that would be used for the co-evolution at run time (i.e., live). This can be done by inlining polyglot types and data.

3. Supporting incremental co-evolution in a feedback loop on demand the runtime state and propagating the changes to the associated runtime states. Hence, to increase efficiency of live and polyglot programming and to make sure the right developer is notified at the right time with the right information, herein, evolution, impact, and co-evolution.

4. Providing dedicated tooling chain to support evolution  for live and polyglot programming at design time and at run time.


## References

[1] Fabio Niephaus et al.. “Example-Based Live Programming for Everyone: Building Language-agnostic Tools for Live Programming with LSP and GraalVM”, Onward! 2020
[2] McDirmid, Sean. "Usable live programming", Onwards! 2013
[3] Santolucito, Mark, William T. Hallahan, and Ruzica Piskac. "Live programming by example." In Extended Abstracts of the CHI 2019
[4] Hidehiko Masuhara, Shusuke Takahashi, Yusuke Izawa, Youyou Cong. “Toward a Multi-Language and Multi-Environment Framework for Live Programming”, LIVE 2020.
[5] Würthinger, Thomas, et al. "One VM to rule them all", Onward! 2013
[6] Niephaus, Fabio, Tim Felgentreff, and Robert Hirschfeld. "GraalSqueak: toward a smalltalk-based tooling platform for polyglot programming" In Proc. of MPLR 2019
[7] Niephaus, Fabio, Tim Felgentreff, and Robert Hirschfeld. "Towards polyglot adapters for the graalvm" In Proc. of Programming 2019.

## Environment

The candidate will work in the DiverSE team, common to CNRS (IRISA) and Inria. The DiverSE team is located in Rennes. DiverSE's research is in the field of software engineering. The team is actively involved in European, French and industrial projects and is composed of 9 professors/researchers, 20 PhD students, 4 post-docs and 3 engineers. The main supervisors of the thesis will be Djamel E. Khelladi, Arnaud Blouin, and Benoit Combemale. The candidate will enroll in the doctoral school in computer science of the University of Rennes 1.



## How to apply

Send your CV, motivation letter, and grades of your bachelor and master with the diplomas.

