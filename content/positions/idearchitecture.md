---
title: A Platform for Multi-Physics Systems Modeling and Simulation
# deadline: 
starts: 2021
duration: 3 years
position: phd
contact: Benoit Combemale
email: benoit.combemale@irisa.fr
summary: IDE architecture to support multimodal and collaborative modeling and simulation.
# pdf: static/documents/example.pdf
---

## Context

To cope with the ever-growing number of programming languages, manufacturers of Integrated Development Environments (IDE) have recently defined protocols as a way to use and share multiple language services (e.g., auto-completion, type checker, language runtime) in language-agnostic environments (i.e., the user interface provided by the IDE): the most notable are the Language Server Protocol (LSP) for textual editors, and the Debug Adapter Protocol (DAP) for debugging facilities.

These protocols rely on a proper specification of the services that are commonly found in the tool support of general-purpose languages, and define a fixed set of capabilities to offer in the IDE.
However, new languages appear regularly offering unique constructs (e.g., Domain-Specific Languages), and supported by dedicated services to be offered as new capabilities in IDEs. This trend leads to the multiplication of new protocols, hard to combine and possibly incompatible (e.g., overlap, different technological stacks).

Beyond the proposition of specific protocols, the goal of this PhD is to propose an original appraoch for being able to specify language protocols and to offer IDEs to be configured with such protocol specifications. 

## Objective

This PhD focuses on the definition of the platform architecture to support multimodal and collaborative modeling and simulation. This will be achieved through an extensible, reconfigurable, scalable, and collaborative microservice architecture [1]. Each platform service (e.g., editing facilities, consistency checker, simulator, etc.) will be dynamically deployed as microservices [2], optimally distributed according to the available infrastructure (developer workstation, servers and cloud and the network linking them), the required Quality of Service (latency, resource consumption, etc.), and the expected scenario of use (activity, stakeholder, online/offline).

This PhD will establish the envisioned service architecture. We will explore an architecture based on microservices, such that each platform service can be dynamically deployed, duplicated, updated and reconfigured. Hence, the service architecture will support the optimal and scalable deployment of the platform services according to the available infrastructure, the QoS contracts, and the expected scenario of use. One of the specificity of this work lies in the high heterogeneity of the available infrastructure, both in terms of platform services, computing and storage ressources, and network capacity. The other specificity is related to the Quality of Service contract which will includes mutliple dimension of software metrics such as performance, energy consumption, latency, reliability, precision of simulation and security. 

State of the art tools for deploying micro-services architectures (e.g., [3]) are limited in their ability to handle quality of service contract with multiple dimensions and are not well suited  when facing a very heterogeneous infrastructure. Therefore, they are not adequate for deploying and supporting the execution of a multimodal and collaborative modeling and simulation platform.
   
IDEs went from directly supporting languages to protocols, and we envision in this paper the next step: IDE as code [4], where language protocols are created or inferred on demand and serve as support of an adaptation loop taking in charge of the (re)configuration of the IDE.

## Description of the work

To establish the envision service architecture this PhD will have to overcome the following challenges :
- Proposition of new langages to describe (i) the micro services and their interactions, (ii) the available infrastructure, (iii) the expected Quality of Services and (iv) the usage scenario.
- A smart runtime environment which will deploy, optimize and maintain the collaborative modeling and simulation platform according to the previous descriptions.

The PhD work will be apply to CosApp, a systems engineering and simulation platform involving various general-purpose and domain-specific languages, all suported by specific services.

## Environment

The candidate will be involved in the DiverSE team, joint to the CNRS (IRISA) and Inria. The DiverSE team is located in Rennes. DiverSE’s research is in the area of software engineering. The team is actively involved in European, French and industrial projects and is composed of 9 faculty members, 20 PhD students, 4 post-docs and 3 engineers. The main advisors of the PhD thesis will be [Prof. Benoit Combemale](https://people.irisa.fr/Benoit.Combemale) (University of Rennes 1, DiverSE team) and [Prof. Johann Bourcier](https://sites.google.com/site/johannbourcier/) (University of Rennes 1, DiverSE team). The candidate will register to the doctoral school in computer science of the University of Rennes 1. 

## How to apply

Please send your application (PDF) as soon as possible. Screening of applications starts immediately and continues until the position is filled. Send a cover letter including names of at least two referees, CV, PDFs of publications (if any) to the main advisors.

## References

1. Fabien Coulon, Alex Auvolat, Benoit Combemale, Yérom-David Bromberg, François Taïani, Olivier Barais, and Noël Plouzeau. 2020. Modular and distributed IDE. In Proceedings of the 13th ACM SIGPLAN International Conference on Software Language Engineering (SLE 2020). Association for Computing Machinery, New York, NY, USA, 270–282. DOI:https://doi.org/10.1145/3426425.3426947
1. J. Thones. “Microservices”. In: IEEE Software 32.1 (2015), pp. 116–116. doi: 10.1109/MS.2015.11.
1. https://netflix.github.io/conductor/
1. Pierre Jeanjean, Benoit Combemale, Olivier Barais. From DSL Specification to Interactive Computer Programming Environment. SLE 2019 - 12th ACM SIGPLAN International Conference on Software Language Engineering, Oct 2019, Athènes, Greece. pp.167-178

