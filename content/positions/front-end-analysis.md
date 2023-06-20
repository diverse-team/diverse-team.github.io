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

- How developers engineer test cases: An observational study, M Aniche et al. IEEE TSE, 2021
- A Taxonomy of Testable HTML5 Canvas Issues, F Macklon et al.- IEEE TSE, 2023
- Detecting code smells in React-based Web apps F Ferreira et al. Information and Software Technology, 2023
- Automatically inferring user behavior models in large-scale web applications SSS Ghaemmaghami et al, Information and Software, 2022
- Automatic program repair, C Le Goues, IEEE software, 2021
- GUI visual aspect migration: a framework agnostic solution, B Verhaeghe, et al. ASE journal, 2021
- Banerjee, I., Nguyen, B., Garousi, V., & Memon, A. (2013). Graphical user interface (GUI) testing: Systematic mapping and repository. Information and Software Technology, 55(10), 1679-1694.
- Memon, A. M., & Cohen, M. B. Automated testing of GUI applications: models, tools, and controlling flakiness. Proc. of ICSE 2013. pp. 1479-1480
- JENSEN, Casper S., PRASAD, Mukul R., et MØLLER, Anders. Automated testing with targeted event sequence generation. In : Proc of ISSTA 2013. ACM, 2013. p. 67-77.
- Mariani, L., Pezzè, M., & Zuddas, D., Augusto: Exploiting Popular Functionalities for the Generation of Semantic GUI Tests with Oracles. ICSE 2018.
- A. M. Memon, M. L. Soffa, and M. E. Pollack, “Coverage criteria for GUI testing,” Proc of ESEC/FSE-9. ACM, 2001, pp. 256–267
- Alégroth, E., & Feldt, R. (2017). On the long-term use of visual gui testing in industrial practice: a case study. Empirical Software Engineering, 22(6), 2937-2971
- Hori, A., Takada, S., Tanno, H., & Oinuma, M. (2015). An Oracle based on Image Comparison for Regression Testing of Web Applications. In SEKE (pp. 639-645).
- Alégroth, E., Feldt, R., & Ryrholm, L. (2015). Visual gui testing in practice: challenges, problems and limitations. Empirical Software Engineering, 20(3), 694-744.
- Hammoud, D., Zaraket, F. A., & Masri, W. (2017). GUICop: Approach and toolset for specification‐based GUI testing. Software Testing, Verification and Reliability, 27(8), e1642.
- Mirshokraie, S., Mesbah, A., & Pattabiraman, K. (2016, April). Atrina: Inferring unit oracles from GUI test cases. Proc of ICST 2013 (pp. 330-340). IEEE.
- Hammoudi, M., Rothermel, G., & Tonella, P. (2016, April). Why do record/replay tests of web applications break?. Proc of ICST 2016 (pp. 180-190). IEEE.
- ZHANG, Sai, LÜ, Hao, et ERNST, Michael D. Automatically repairing broken workflows for evolving GUI applications. Proc of ICST 2013. ACM, 2013. p. 45-55.
- Z. Gao, Z. Chen, Y. Zou, and A. M. Memon, “Sitar: GUI test script repair,” Ieee transactions on software engineering, vol. 42, no. 2, pp. 170–186, 2016
- Nguyen, B., & Memon, A. (2014). A New Observe-Model-Exercise* Paradigm to Test Event-Driven Systems with Undetermined Input Spaces. IEEE Transactions on Software Engineering, (1)1.
- Clapp, L., Bastani, O., Anand, S., & Aiken, A. (2016, November). Minimizing GUI event traces. In Proc of FSE  2016 (pp. 422-434). ACM.
- Alsmadi, Izzat Mahmoud. "Using mutation to enhance gui testing coverage." IEEE software 30.1 (2013): 67-73.
- Lelli, Valéria, Arnaud Blouin, and Benoit Baudry. "Classifying and qualifying GUI defects." Proc of ICST 2015 IEEE, 2015
- Blouin, Arnaud, et al. "User Interface Design Smell: Automatic Detection and Refactoring of Blob Listeners." Information and Software Technology (2018).
- Lelli, Valéria, et al. "On model-based testing advanced GUIs." Software Testing, Verification and Validation Workshops (ICSTW), 2015 IEEE Eighth International Conference on. IEEE, 2015.
- Baudry, Benoit, et al. "DSpot: Test Amplification for Automatic Assessment of Computational Diversity." arXiv preprint arXiv:1503.05807 (2015).
- Danglot, Benjamin, et al. "The emerging field of test amplification: A survey." arXiv preprint arXiv:1705.10692 (2017)
