---
position: postdoc
title: Postdoctoral Position "A programming model for simulation processes" at CEA DAM (France) 
duration: 24 months
starts: 2021-07-01
contact: Benoit Combemale
email: benoit.combemale@irisa.fr
---

# Postdoctoral Position at CEA DAM (France) "A programming model for simulation processes"

## Context
Scientific software is often designed in the form of a process including data preprocessing, simulation code, and data postprocessing. 
In the current state of the practices, this process is either split in several modules put together in an explicit data-flow process, 
or tightly coupled in a single program. 
The data-flow processes tend to treat in a very decoupled way the processing of the data from the simulation, most often thanks to persistent data exchanges. 
Although this approach allows a clear separation of concerns, 
it imposes a strong sequentiality which prevent from reasoning on the simulation code (e.g., linters, optimizers, checkers) according to a given input data. 
Conversely, strongly coupled approaches allow a very strong link between data processing and simulation, but do not support a clear separation of concerns, 
and create a big chunk of code preventing the optimal deployment on heterogeneous execution platforms (e.g., GPGPU). 
This leads to a complex code, without control over the expressiveness required in the different activities. 
Moreover, none of the current approaches support scientists in the definition and optimization of the compilation chain of the simulation code. 
In particular, this is very difficult for scientists to predict the performance of a simulation code (execution time, CPU and memory resources) according to a given input data. 

## Description of the research activities 
In this work, we will explore a new architecture for designing scientific processes based on explicit behavioral interfaces instead of structural data structure. Such an architecture will simplify the simulation code by avoiding all the conditionals regarding the initialization according to the input data, and will support:
  - the inference of the execution paths activated in the simulation code according to a given input data, 
  - the scientists in the testing activities based on the identified execution paths, as well as in the definition of the compilation chain partially automatically and partially with the support of linters that will predict quality of service (QoS) properties (e.g., execution time and CPU/memory consumption), and 
  - the optimization of the compilation chain with automatic inlining of initialization functions.

The post-doctoral researcher will conduct the following activities: 
  - Define an explicit behavioral interface between data processing and the simulation code, together with a composition operator to bring them together,  
  - Propose a combination of static and dynamic analysis of the simulation code to infer the execution paths according to a given input data, and
  - Explore several services to support testing activities, and help in the definition and optimization of the compilation chain. In particular, a learning model will be established to propose linters that assist the scientists in predicting QoS properties on the simulation code according to a given input data. 

The work will be realized in the context of the NabLab language (https://github.com/cea-hpc/NabLab), a domain-specific language (DSL) developed by CEA DAM for numerical analysis with high performance computing (HPC). The post-doctoral researcher will be part of the development team of the DSL, and will have the opportunity to experiment and involve the language accordingly. Scientific results will be published in high-quality conferences and journals from the fields of software engineering and scientific computing.

## Environment

The work will be supervised by the CEA DAM team in charge of the NabLab project 
which aims at providing a full-fledged industrial environment for scientific computing and High-Performance Computing. 
The work will take place at the TERATEC Campus located in the south of the Paris region, in the town of Bruyères-le-Châtel. 
The campus houses major players in high performance simulation and computing. 
The work will be also realized in collaboration with the DiverSE research team, joint to the CNRS (IRISA) and Inria. 
The DiverSE team is located in Rennes, Brittany, France. DiverSE’s research is in the area of software engineering. 
The team is actively involved in European, French and industrial projects and is composed of 9 faculty members, 20 PhD students, 4 post-docs and 3 engineers. 
The candidate will work more specifically with [Prof. Benoit Combemale](https://people.irisa.fr/Benoit.Combemale/) (University of Rennes 1, DiverSE team) and [Prof. Mathieu Acher](http://www.mathieuacher.com/) (University of Rennes 1, DiverSE team).

## Skills and background

- A PhD in the field of software engineering or language design and implementation, with a recognized research record
- Experience in software language engineering, in particular an experience with Xtext and EMF would be a plus
- Experience in the implementation of static and dynamic program analysis
- Autonomy, and the ability to work in a distributed and international group. 
- Fluent in English
