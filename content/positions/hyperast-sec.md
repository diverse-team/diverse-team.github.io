---
title: Large scale code history analysis for improving software stability
starts: 2023
duration: 3 ans
position: phd
contact: Arnaud Blouin, Djamel Eddine Khelladi
email: prenom.nom@irisa.fr
summary: code analysis, software code history, large scale analysis, software security, empirical study
---
## Context

Detecting and fixing bugs that threaten the stability of software systems is crucial to the industry. For example, recent research work studied patches that fixed security issues in Java code to understand how to prevent them in future development [1]. The literature is also vast on studying code histories to: understand how and why issues appear [2,3,4]; how to leverage such histories to alarm on possible issues to come [5].

However, it is crucial to also be able to study the software issues while scaling on large evolution histories. Indeed, large software systems do evolve with high frequencies with several commits (i.e., changes) per day or even per hour. Over years of evolution, a given history can reach hundreds of thousands of commits. Hence, posing scalability challenges for any analysis on the whole histories of software systems.

In our recent work we proposed HyperAST [6], a novel approach to capture, incrementally in an optimized way, in a single AST (Abstract Syntax Tree) the numerous ASTs a code history like Git contains in a raw format (i.e. one AST for each commit). In terms of scaling, HyperAST now enables large scale temporal code analyses (i.e. code analyses on large code histories), such as code evolution analyses, history-based security analyses, efficient code element tracking. In terms of features, HyperAST provides its users with an API at the expected level of abstraction for working on different versions of code. The work on HyperAST work received an ACM SIGSOFT Distinguished Paper Award at the ASE 2022 conference (A* core-ranked).

## Objectives

Thanks to its ability to scale and its features, HyperAST opens new research perspectives in terms of temporal code analysis. The goal of this PhD is to propose novel scientific contributions for analyzing large code histories.
The goals are multiple:
1) better understanding the coding processes that lead to those bugs;
2) detecting issues that threaten the stability of software systems;
3) supporting polyglot code histories (i.e. histories that contain code from several languages) in the aforementioned  analyses. To do that, one must have a polyglot reference resolution to run polyglot impact analyses.

To do so, the candidate will leverage HyperAST. The mentioned scientific contributions require:
1/ working on polyglot temporal code analysis and adding HyperAST polyglot support. This requires to put in relation ASTs from different languages stored in a single HyperAST to then perform code analyses, produce fixes, or co-evolve code.
2/ performing large scale code analyses to study the coding process that lead to issues. Learning processes can then be used to build prediction models or serve for providing fixes or ingredients of fixes.
3/ exploring the co-evolution challenge on top of the HyperAST in interdependent projects or libraries and clients projects.


## Environment

The candidate will work in the DiverSE team, common to IRISA and Inria. The DiverSE team is located in Rennes. DiverSE's research is in the field of software engineering. The team is actively involved in European, French and industrial projects and is composed of 9 professors/researchers, 20 PhD students, 4 post-docs and 3 engineers. The main supervisors of the thesis will be Arnaud Blouin and Djamel Eddine Khelladi. The candidate will enrol in the doctoral school in computer science of the University of Rennes 1.


## Application conditions

We are looking for exceptional and motivated candidates for this 3-year PhD. The candidate must have (or be about to obtain) a master's or engineering degree in computer science. A mastery of scientific English is necessary. Knowledge of French is not required. Gross monthly salary: around 2050 € (years 1 and 2) then around 2150 €.


## Application

The candidates must send their application to Arnaud Blouin and Djamel Eddine Khelladi (arnaud.blouin at irisa.fr, djamel.khelladi at irisa.fr), with the following documents:
- A detailed CV
- A cover letter
- Other documents that the candidate thinks would be useful for the application. (recommendation letters, examples of scientific writing and coding)


## References

- [1] Iannone, E., Guadagni, R., Ferrucci, F., De Lucia, A., & Palomba, F. (2022). The secret life of software vulnerabilities: A large-scale empirical study. IEEE Transactions on Software Engineering, 49(1), 44-63.
- [2] Lopes, M., & Hora, A. (2022). How and why we end up with complex methods: a multi-language study. Empirical Software Engineering, 27(5), 115.
- [3] Hora, A., Robbes, R., Valente, M. T., Anquetil, N., Etien, A., & Ducasse, S. (2018). How do developers react to API evolution? A large-scale empirical study. Software Quality Journal, 26, 161-191
- [4] Tufano, M., Palomba, F., Bavota, G., Oliveto, R., Di Penta, M., De Lucia, A., & Poshyvanyk, D. (2017). When and why your code starts to smell bad (and whether the smells go away). IEEE Transactions on Software Engineering, 43(11), 1063-1088
- [5] Radjenović, D., Heričko, M., Torkar, R., & Živkovič, A. (2013). Software fault prediction metrics: A systematic literature review. Information and software technology, 55(8), 1397-1418.
- [6] Le Dilavrec, Q., Khelladi, D. E., Blouin, A., & Jézéquel, J. M. (2022). HyperAST: Enabling Efficient Analysis of Software Histories at Scale. In 37th IEEE/ACM International Conference on Automated Software Engineering
