---
title: Smart Microservicization, Deployment and Dynamic Reconfiguration of Distributed Systems
# deadline: 
starts: 2021
duration: 3 years
position: phd
contact: Benoit Combemale
email: benoit.combemale@irisa.fr
summary: an holistic appraoch that assist, or even automate, the microservicization, deployment and dynamic reconfiguration of distributed systems.
# pdf: static/documents/example.pdf
---

## Scientific and Industrial Context

The software engineering community recently introduced the concept of microservice [1] as a support for a new distributed and dynamic software architecture [2]. Microservices are orchestrated, self-contained, reusable and minimalist processes interacting via messages. This new software architecture enables complex applications to be more readable and maintainable, together with a better quality of service with scalability and dynamic reconfiguration. It also enable effective implementation of DevOps, as an essential companion of microservices to be deployed and orchestrated [3]. Both academy and industry investigated new tools and methods to support software development following this new architecture (e.g., microprofile, Quarkus/SpringBoot, Kubernetes/Nomad, etc). In practice, this new software architecture has been instrumental in the development of large-scale applications with complex and varying contracts of quality of services, such as Netflix [4], Spotify [5], and Uber [6].

However, the success of such an architecture in large applications lead to an increasing number of microservices that comes with new challenges. In particular, the developer needs to provide complex orchestrators [7], and faces complex deployment and delivery pipelines over very heterogeneous technologies (e.g., various execution platforms, communication protocols, etc.) [8,9].
     
In the telecommunication domain, 5G mobile network is being developed and deployed in several countries. It's a new kind of network that is designed to connect people and objects together. It's one of the critical component of the fourth industrial revolution that will require in other massive and efficient machine to machine (M2M) communication. 5G is also promoting the operator and vendors to re-think the mobile network architecture for inherent flexibility and efficienty: network functions should be modular so that they can be quickly deployed, updated, scaled on demand to provide service agility and cost-effectiveness. This objectives can be achieved by adopting cloud native technologies and architecture based on microservices. Many 5G networks will be deployed in large (public mobile neworks) or small infrastructures (entreprise private mobile networks) for differents use cases. That will require for each deployment a re-think of the way to split or group efficiently 5G functions in micro-services, according to the infrastructures constraints.


## Objective and scientific breakthroughs

The main objective of the PhD is to assist in the the optimal delivery of large-scale distributed systems, by not only considering the targetted execution infrastructure, but also the moldable business code to be automatically modularized, deployed and delivered. The PhD candidate will explore the fields of program transformation, software architecture, self-adaptive systems and predictive modeling, to propose an holistic appraoch that assist, or even automate, the microservicization, deployment and dynamic reconfiguration of distributed systems. In particular, the work will consider the following challenges:
- Challenge #1: automatic microservicization according to the available infrastructure (e.g., execution platforms, context). The main objective is to infer a family of possible functionally-equivalent modularizations of a given business code, and automate on demand their production, possibly dynamically, in terms of coordinated microservices well-fitting the available infrastructure. 
- Challenge #2: automatic and continuous (re)configuration according to the microservices, infrastructure and environment, in order to reach an optimal configuration of the modularizations of the business code and deployment of the resulting microservices. 
- Challenge #3: smart recommenders and assistant for live deployment configuration. The main objective is to explore KPIs, goals and costraints to support the development teams in their design choices (live feedback on the given choices) and the IT team to find an optimal deployment configuration. For this purpose, we will rely on the collected data from simulations and previous deployment, to predict and give estimations to the dev and IT teams. 

## Environment

The candidate will work at the institute of research and technology [b<>com](https://b-com.com/en) as an employee, full-time junior researcher dedicated to the PhD work. The candidate will be also involved in the DiverSE team, joint to the CNRS (IRISA) and Inria. The DiverSE team is located in Rennes. DiverSE’s research is in the area of software engineering. The team is actively involved in European, French and industrial projects and is composed of 9 faculty members, 20 PhD students, 4 post-docs and 3 engineers.

The main advisors of the PhD thesis will be [Prof. Benoit Combemale](https://people.irisa.fr/Benoit.Combemale) (University of Rennes 1, DiverSE team) and [Prof. Olivier Barais](https://olivier.barais.fr/) (University of Rennes 1, DiverSE team). The candidate will register to the doctoral school in computer science of the University of Rennes 1. 

## How to apply

Please send your application (PDF) as soon as possible. Screening of applications starts immediately and continues until the position is filled. Send a cover letter including names of at least two referees, CV, PDFs of publications (if any) to the main advisors.

## References

1. J. Thones. “Microservices”. In: IEEE Software 32.1 (2015), pp. 116–116. doi: 10.1109/MS.2015.11.
1. Len Bass, Ingo Weber, and Liming Zhu. 2015. DevOps: A Software Architect's Perspective (1st. ed.). Addison-Wesley Professional.
1. A. Balalaie, A. Heydarnoori and P. Jamshidi, "Microservices Architecture Enables DevOps: Migration to a Cloud-Native Architecture," in IEEE Software, vol. 33, no. 3, pp. 42-52, May-June 2016, doi: 10.1109/MS.2016.64.
1. M. McGarr, E. Bukoski, and B. Moyles. How We Build Code at Netflix. 2016. url: http://techblog.netflix.com/2016/03/how-we-build-code-at-netflix.html.
1. How We Use Backstage at Spotify. 2020. url: https://engineering.atspotify.com/2020/04/21/how-we-use-backstage-at-spotify/.
1. Einas Haddad. Service-Oriented Architecture: Scaling the Uber Engineering Codebase As We Grow. 2015. url: https://eng.uber.com/service-oriented-architecture/.
1. Conductor, a Workflow Orchestration engine that runs in the cloud. Cf. https://netflix.github.io/conductor/
1. M. Selimi, L. Cerdà-Alabern, M. Sánchez-Artigas, F. Freitag and L. Veiga, "Practical Service Placement Approach for Microservices Architecture," 2017 17th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGRID), Madrid, 2017, pp. 401-410, doi: 10.1109/CCGRID.2017.28.
1. Muhammad Waseem, Peng Liang, Mojtaba Shahin, A Systematic Mapping Study on Microservices Architecture in DevOps, Journal of Systems and Software, Volume 170, 2020, 110798, ISSN 0164-1212, https://doi.org/10.1016/j.jss.2020.110798.
