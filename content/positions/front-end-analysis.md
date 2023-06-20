---
title: "Web front-end testing: large scale analysis and techniques improvement"
starts: 2023
duration: 3 years
position: phd
contact: Arnaud Blouin, Olivier Barais, Djamel-Eddine Khelladi
email: firstname.last@irisa.fr
summary: Web front-end, software testing, code analysis, software code history, empirical study, software security, test generation, test amplification, UI coverage
---
## Context

Web front-ends are integral parts of Web applications and are specific software components to be tested. Detecting and fixing bugs in Web front-ends that threaten the stability of entire software systems is crucial to the industry (stability, privacy, etc.). However, testing front-ends is currently a complex task: the test fixtures (that configure front-end tests) are complex since they have to simulate (mock) multiple dependencies of the front-end component under test. Moreover, software engineers still rely on low-level object-oriented metrics (code coverage) to measure the quality of their front-end test suites. Finally, the maintenance of front-end tests after production code changes is still a burden for engineers that need to manually craft co-evolutions between code and their tests.


## Objectives

The global objective of this PhD is to improve the front-end testing techniques.
More precisely, this PhD will focus on the following research questions:

1/ What characterize front-end tests? Mainstream front-end testing toolkit rely on object-oriented testing concepts. Is there differences between object-oriented test suites and front-end test suites (in terms of complexity, assertions, etc.)? What compose a front-end test? Etc. Discussing this question requires conducting large scale code analyzes (on code Software Heritage archived).

2/ How to characterize and measure front-end coverage? This question aims at providing front-end testers with dedicate coverage techniques. Test coverage is used to identify elements that are not, or only partially, covered by tests. As one of the pillars of the testing process, coverage calculation is used to automatically analyze the gaps in a test suite and then determine how to fill them. Existing front-end testing approaches do not consider all aspects of state-of-the-art front-ends for human-computer interaction and mainly focus on code coverage. However, a front-end is made of interactive graphical objects, which state may depend on the interactive path a user took using the front-end. This raises the challenge of gathering and leveraging front-end paths to detect stability and security issues.


3/ How to ease the production of front-end tests? This question focuses on developing techniques to produce (partial) front-end tests automatically using different techniques, such as test amplification or static/dynamic code analysis.


4/ How to maintain front-end tests? Front-end code is composed of multiple languages (e.g. TypeScript, HTML, CSS). Changes in such code may have impacts on their front-end tests. This makes more complex that testing tasks of developers that need to manually modify tests. This question focuses on easing such a task using adapted techniques such as code analyses, impact analyses in a polyglot context.


## Method

To work on the above-mentioned objectives the candidate will conduct empirical studies on large set of representative front-end projects the Software Heritage project archived. Software Heritage is an open (french) initiative for building a universal code archive. They harvest publicly available source code from numerous software projects and have archived 14 008 454 316 source files, 2 916 219 378 commits and 207 503 026 projects. They currently provide standard search engines only. The candidate will investigate new approaches for improving front-end testing. The candidate will evaluate the proposals empirically on representative front-end projects and based on developed prototypes.



## Environment

The candidate will work in the DiverSE team, common to IRISA and Inria. The DiverSE team is located in Rennes. DiverSE's research is in the field of software engineering. The team is actively involved in European, French and industrial projects and is composed of 9 professors/researchers, 20 PhD students, 4 post-docs and 3 engineers. The main supervisors of the thesis will be Arnaud Blouin, Olivier Barais and Djamel Eddine Khelladi. The candidate will enrol in the doctoral school in computer science of the University of Rennes 1.


## Application conditions

We are looking for exceptional and motivated candidates for this 3-year PhD. The candidate must have (or be about to obtain) a master's or engineering degree in computer science. Appetence and curiosity related to code analysis, code transformation, software testing, Web front-end are mandatory for this thesis. A mastery of scientific English is necessary. Knowledge of French is not required. Gross monthly salary: around 2050 € (years 1 and 2) then around 2150 €.


## Application

The candidates must send their application to Arnaud Blouin and Djamel Eddine Khelladi (arnaud.blouin at irisa.fr, djamel.khelladi at irisa.fr), with the following documents:
- A detailed CV
- A cover letter
- Other documents that the candidate thinks would be useful for the application. (recommendation letters, examples of scientific writing and coding)


## References

[1] Iannone, E., Guadagni, R., Ferrucci, F., De Lucia, A., & Palomba, F. (2022). The secret life of software vulnerabilities: A large-scale empirical study. IEEE Transactions on Software Engineering, 49(1), 44-63.
[2] Lopes, M., & Hora, A. (2022). How and why we end up with complex methods: a multi-language study. Empirical Software Engineering, 27(5), 115.
[3] Hora, A., Robbes, R., Valente, M. T., Anquetil, N., Etien, A., & Ducasse, S. (2018). How do developers react to API evolution? A large-scale empirical study. Software Quality Journal, 26, 161-191
[4] Tufano, M., Palomba, F., Bavota, G., Oliveto, R., Di Penta, M., De Lucia, A., & Poshyvanyk, D. (2017). When and why your code starts to smell bad (and whether the smells go away). IEEE Transactions on Software Engineering, 43(11), 1063-1088
[5] Radjenović, D., Heričko, M., Torkar, R., & Živkovič, A. (2013). Software fault prediction metrics: A systematic literature review. Information and software technology, 55(8), 1397-1418.
[6] Le Dilavrec, Q., Khelladi, D. E., Blouin, A., & Jézéquel, J. M. (2022). HyperAST: Enabling Efficient Analysis of Software Histories at Scale. In 37th IEEE/ACM International Conference on Automated Software Engineering
