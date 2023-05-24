---
title: Next generation of development environments
starts: 2023
duration: 3 ans
position: phd
contact: Arnaud Blouin, Benoit Combemale
email: prenom.nom@irisa.fr
summary: domain-specific language, language workbench, IDE, human-computer interaction, DevOps, solution space exploration, user interface
---


## Context

Domain-Specific Languages (DSL) are now omnipresent in the industry and academy. Engineers and scientists are domain experts that handle DSLs to perform task specific to their job. In some way, DSLs are interfaces, at the good level of abstraction, that stand between domain experts and their engineering problems.
Concretely, domain experts use DSLs through dedicated environments (IDE – Integrated Development Environment). In such environments, experts handle DSL models using standard interactive features (e.g. auto-completion, templating, error checking, navigation) and using the concrete syntax of the DSL, that can take various forms (e.g. graphical, textual, tabular). Experts use numerous DSLs broadly used in the industry, sometimes without knowing that they handle a DSL. For example, conceiving an air plane usually involves electricity, resistance, scientific computing schemas/models, that follow a specific nomenclature (i.e. the DSL grammar), with a specific representation (i.e. the DSL concrete syntax), with editing environments. Similarly, for conceiving a Web application experts may handle Docker, Git-Lab CI (continuous integration), ANTLR (grammar definition), CSS (style definition), Kubernetes (container orchestration) models/configuration files. All these languages are DSLs that experts use for completing a specific task. If a DSL works by itself, its use may impact other DSL models. For example, an electrician engineer that apply changes on his DSL models may have impacts on DSL models of other experts, such as on heating models. Each of those experts brings their own viewpoint, based on their expertise, for solving the global challenge, developping the system. This phenomenon is known as collective intelligence [1]. Current IDEs hardly support such collective intelligence as it requires novel features to share, communicate, explore, synchronize experts works. Moreover, Such features and the way they are used within a IDE depend on the experts domain. Langage engineers, that develop IDEs specifically for DSLs, thus struggle in coding by hand such complex features.



## Objectives

### Challenge 1. Proper DSL Usability

On one side, researchers focus on improving the creation and maintenance process of DSL back-ends to reduce their development cost. On the other side, researchers study how to improve the usability, the interactivity of some DSL front-ends to match new usages. Few research work, however, focus on new techniques for reducing the cost of building usable DSL front-ends [2]. So, language engineers still have to customize the interactivity of DSL environments by hand. Such tasks are costly and may hinder the adoption of DSLs. For example, in our own research work we studied the impact of modern navigation features on one DSL [3]. We coded those features by hand. If we want to bring those features to another DSL we have to re-code them. Researchers need to include interactivity within the creation and maintenance process of DSLs. Those interactive features must go beyond the classical use of mice, keyboards, and standard widgets (buttons, menus) to leverage the advances made by the HCI community. This requires further research work on how to program user interactions: we shown in our recent work [4] that the current UI toolkits still rely on the UI event processing model that exhibits critical flaws for supporting modern interactive features, such as domain-specific undo algorithms, complex user interactions. To summarize we defined the following research question to address:

**RQ1. How to reduce the development cost of usable and highly interactive DSL front-ends?**



### Challenge 2. Joint and coordinated DSLs usability

A new generation of software systems (for example smart health support, building energy management, or intelligent transportation systems) gives new opportunities for leveraging DSLs. The development of those systems requires expertises in multiple domains. So, different types of experts (e.g. scientists, engineers from different domains) must work in a coordinated manner on various aspects of the system across multiple development phases. Those experts can use DSLs to support their work that focuses on a specific system aspect. The support and integration of DSLs lead to what researchers called the globalization of modeling languages [5], i.e. the use of multiple languages for the coordinated development of diverse aspects of a system.
So, while the previous point focuses on the proper interactivity of a DSL, i.e. when a DSL is used alone, in various cases experts use multiple DSLs conjointly. This is what we call the joint and coordinated use of DSLs: such a use of multiple DSLs can lead to a tower of Babel [6] (i.e. a cacophony of DSLs) when the coordination of experts and their DSL models is not achieved correctly. For example the development of air-plane engines involves various experts from different domains: an electrician engineer that apply changes on dedicated DSL models may have impacts on models of an heating engineer; a change in CAD models may impacts material resistance models; when physicians apply changes on their physical models, this may impact system engineers' models. All those models, made using various DSLs (e.g. Modelica, Simulink) are thus dependent each others. This makes the development process more complex: how domain experts can understand changes that affect their models if those changes come from models out-of-the-scope of their expertise? How experts from different domains can easily iterate on changes to converge to a optimal solution? We consider this problem as a usability issue that affects both development environments and processes, to lead to the following research question.

**RQ2. How to improve the usability of using several DSLs conjointly or in coordination?**


The candidate will work on these two scientific challenges to produce both high level scientific contributions published in top venues, and develop prototypes to assess the contributions.


## Environment

The candidate will work in the DiverSE team, common to IRISA and Inria. The DiverSE team is located in Rennes. DiverSE's research is in the field of software engineering. The team is actively involved in European, French and industrial projects and is composed of 9 professors/researchers, 20 PhD students, 4 post-docs and 3 engineers. The main supervisors of the thesis will be [Arnaud Blouin](https://people.irisa.fr/Arnaud.Blouin/), and [Benoit Combemale](https://people.irisa.fr/Benoit.Combemale). The candidate will enroll in the doctoral school in computer science of the University of Rennes 1.


## How to apply

Send your CV, motivation letter, and grades of your bachelor and master with the diplomas.


## References
[1] Pierre Levy. 1997. Collective Intelligence: Mankind’s Emerging World in Cyberspace. Perseus Books, Cambridge, MA.
[2] Sousa, Vasco, Eugene Syriani, and Khady Fall. "Operationalizing the integration of user interaction specifications in the synthesis of modeling editors." Proc. Of SLE 2019
[3] Assessing the Use of Slicing-based Visualizing Techniques on the Understanding of Large Metamodels. Arnaud Blouin, Naouel Moha, et al. Information and Software Technology, 2015.
[4] Arnaud Blouin, Jean-Marc Jézéquel. Interacto: A Modern User Interaction Processing Model. IEEE Transactions on Software Engineering, In press, pp.1-20
[5] Combemale, et al, J. (2014). Globalizing modeling languages. Computer, 47(6), 68-71
[6] Yegge, Steve. A Programmer's Rantings: On Programming-Language Religions, Code Philosophies, Google Work Culture, and Other Stuff. Hyperink Inc, 2012