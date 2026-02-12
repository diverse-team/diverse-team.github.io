---
title: "PhD (M/F): Model-Based Threat Modeling for Compartmentalized Systems"
deadline: Spring 2026
starts: Autumn 2026
duration: 3 years
position: PhD
level: Master's degree or equivalent
contact: Arnaud BLOUIN, Gurvan LE GUERNIC
email: arnaud.blouin@irisa.fr
summary: Evaluate existing threat modeling tools ability to take into account compartmentalization in system architecture evaluation
pdf: /pdf/2026_PhD-position_MBTM-compartmentalized-systems.pdf
---

# PhD Project Description

From an evaluation point of view, one way to analyze the robustness of systems to cyberattacks is to threat model it. Threat modeling [TC20] is a generic term encompassing various methodologies (STRIDE, PASTA, OCTAVE, TRIKE, …) and tools (Microsoft Threat Modeling Tools, OWASP’s PyTM, OWASP’s ThreatDragon, SPARTA, IriusRisk, …) whose end goal is to identify some threats to the security (confidentiality, integrity and availability) of the analyzed system or data it processes. Threat modeling is more commonly used for, and adapted to, the analysis of large distributed systems, rather than single programs or even embedded systems. During threat modeling, those systems are often abstracted as a set of processes exchanging various data and executed in various networks (or domains) with differing levels of trust. The system abstraction languages used are usually quite simple with only 2 levels (processes executed into domains); and generic elements (processes, data, domains) that are completed by unspecified attributes.

From a design point of view, architecture compartmentalization is an efficient last defense against cyber attacks [Shu+16; Lef+25]. However, it is seldom used, or not to its fullest extent, in the design of security-sensitive embedded systems (or even of the majority of IT systems).
> « Despite longstanding recognition within the academic sphere and proven effectiveness in seminal industry projects, the adoption of compartmentalization techniques in main-stream software remains inconsistent: compartmentalizing is still far from being a common engineering practice. » Lefeuvre et al. [Lef+25]

One of the main reasons for this state of affair is that, except for virtualization and dockerization (which are mostly deployed in large systems for other reasons than security), compartmentalization is not a concept mastered and sufficiently valued by embedded system architects, even of the majority of security-sensitive system architects.

By providing a better evaluation of compartmentalized systems than monolithic ones, threat modeling can play a role in incentivizing the compartmentalization of embedded systems. The goal of this project is to propose a new tool-supported methodology to threat model compartmentalized embedded systems from a precise model of their architecture. The modeling language used to describe the architecture of the embedded system is based on a detailed ontology of compartmentalization to support a precise semantics of compartmentalization allowing the proposed semi-automated threat modeling algorithm to take into account the advantages and limitations of various compartmentalization techniques. The evaluation of the proposed tool-supported methodology consists in a comparison to existing tools on known well-compartmentalized softwares. If time permits, an evaluation will also be performed on a security-sensitive real-world embedded system from the US Naval Research Laboratory.

# Work Environment

**IRISA (Research Institute of Computer Science and Random Systems)** is one of France's largest research laboratories in computer science and information technology, with over 850 members. Organized into seven scientific departments, IRISA focuses on key areas such as bioinformatics, system security, software architectures, virtual reality, big data analysis, and artificial intelligence.

IRISA is part of a dynamic regional ecosystem, recognized for its expertise through international scientific collaborations. Focused on the future of computer science, IRISA plays a key role in digital transformation, cybersecurity, health, environment, transportation, robotics, energy, and AI.

The **DiverSE research team** specializes in software engineering techniques for building reliable and efficient applications and systems, focusing on areas such as cybersecurity and LLMs. The team consists of about 15 permanent members (Inria and CNRS researchers, university lecturers, including 3 members of the French University Institute), 15 PhD students, several engineers, and a DGA associate engineer. DiverSE is internationally recognized and maintains strong ties with global, national, and local industries. The team also prides itself on a friendly and engaging work atmosphere.

The position is located in a sector covered by the protection of scientific and technical potential (PPST), and therefore requires, in accordance with the regulations, that your arrival be authorised by the competent authority of the MESR.

# Why Join Us?

**Project Highlights**:
In addition to the PhD degree itself, this project offers unique opportunities due to its application domain, ambition, international network, and potential impact. It lies at the core of DiverSE's activities and involves close collaboration with practitioners.

**Ambition**:
While pursuing your PhD degree in Computer Science, you will contribute to improving methods for a task (threat modeling) that international regulations start to require. In an era where security is a strategic concern and system providers need to provide evidences of their product cyber resilience, this project aims to address this challenge directly.

**Network**:
This project involves frequent interactions with partners from the DGA.

# Benefits

* Remote work up to 2 days per week.
* Partial reimbursement of public transport or sustainable mobility costs.
* Partial coverage of health insurance costs.
* Subsidized on-site dining.
* Free car and bicycle parking; bus stop 5 minutes away; metro station 10 minutes away.

# Salary

Monthly salary should be equal to or above **€2,200gross** (€1,769 net)

# Location

**Campus de Beaulieu, IRISA/Inria Rennes**  
Building 12  
263 Avenue du Général Leclerc  
35042 RENNES Cedex, France

# Contacts and PhD advisors

* **Arnaud BLOUIN**, Tenured Associate Professor, INSA Rennes: Arnaud.Blouin@irisa.fr
* **Gurvan LE GUERNIC**, Research Engineer, DGA: Gurvan.Le_Guernic@inria.fr
