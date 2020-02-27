+++
# Date this page was created.
date = "2020-02-27"

# Position infos
type = "postdoc"
title = "[Post-doc position]: SLIMFAST project about Software Configurations and Security"
duree = "24 months"
start = "march 2020"
pdf = ""
#external_link = "https://www.linkedin.com/in/anas-motii-59b88868/"
note = ""

# Tags: can be used for filtering projects.
#tags = ["current", "phd", "indus"]
tags = ["current", "postdoc"]

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++


We are looking for a highly motivated post-doc in **software and security**.
The post-doc offer is for a period of at least 24 months. 
The salary is highly competitive, i.e., as much as an associate professor (tenured) with 5 years of experience. 

The research is funded by the SLIMFAST project, in collaboration with the DGA (french army). Screening of applications starts immediately. 

**Keywords**: Software Engineering, Program Analysis, Software Security, Systems 

**Main Contact**: [Mathieu Acher](https://www.mathieuacher.com) (mathieu.acher@irisa.fr)


# Objectives

We expect software systems to deliver the right functionality, as quickly and frugally as possible, in any possible circumstances whatever the hardware, the operating systems, or the input data are. 

For fitting such a diversity of settings, most modern systems (operating systems like Linux or Android, Web browsers like Firefox or Chrome, video encoders like ffmpeg, x264 or VLC, mobile and cloud applications, autonomous systems, etc.) are subject to variation or come in many variants. Hundreds of **configuration options** -- features, plugins, parameters, hyperparameters -- can be combined, each potentially with distinct functionality and effects on time, security, energy consumption, etc.

The ability of varying is therefore a mandatory feature of any (sub-)system. 
Despite its ubiquitous presence, variability (adaptation at compile-time or run-time) is also an enormous source of complexity with a combinatorial explosion of possible configurations. For example, the Linux kernel exhibits 16000+ options and most options can take "yes", "no", or "module" values. Several works observed that configuration options can be the source of compilation failures, can crash the system, can compute wrong results, or can degrade the performance. 

There is another important issue: the surface attack of configurable system is potentially extremely important. Each (combination of) option can be subject to a different attack, for example, an attacker can inspect many configuration-related paths in a program. 
Overall, our observation is twofold:

 - *configuration can be pointless*: users do not need necessarily the ability to configure their systems, especially at run-time. A default configuration can be sufficient for a majority of the use cases while most of the options will simply never been used; 
 - *configuration is a security threat*: configuration options cannot only be pointless, they can be unnecessary opportunity and entry point for attackers.

As configuration options can be pointless and represent a threat, our objective is to *automatically remove unneeded configuration-related code out of programs*.   
When options are removed, we aim to show that some attacks are no longer possible while the the functionality or usability of the system is not altered. We plan to study real-wold systems, attacks, and options to empirically study the effectiveness of our techniques. 
We also plan to provide some theoretical guarantees about our removal process.  

## References

 - Mathieu Acher, Guillaume Bécan, Benoit Combemale, Benoit Baudry, and Jean-Marc Jézéquel. Product lines can jeopardize their trade secrets (2015). In Proceedings of the 2015 10th Joint Meeting on Foundations of Software Engineering (ESEC/FSE'15), NIER track https://hal.inria.fr/hal-01234342 
 - Mathieu Acher, Hugo Martin, Juliana Alves Pereira, Arnaud Blouin, Jean-Marc Jézéquel, Djamel Eddine Khelladi, Luc Lesoil, and Olivier Barais. Learning Very Large Configuration Spaces: What Matters for Linux Kernel Sizes (2019). https://hal.inria.fr/hal-02314830  


# Skills

We are looking for highly motivated people in software (in a broad sense) and security.
We are studying real-world, popular, open-source, configurable software projects like Linux, Firefox, ffmpeg, VLC, Apache or JHipster -- and we hope to have concrete impacts on them!

The candidate should have a strong interest and the skills for performing large-scale experiments with software. In particular:
 
 - advanced software engineering skills, including program analysis, compilation, software automation, software testing. In general we need **highly technical software abilities**, since software is the main asset we are analyzing;  
 - experience or interest in software security, for example: fuzzing, code debloating, obfuscation; 
 - variability and configuration expertise: it is a *plus* to have knowledge about software configurations, but it's not mandatory 
 
The candidates will work with two PhD students, at 2 least two professors, and a researcher from DGA.  

# Working Environment

The candidate will work at Inria/IRISA in the [DiverSE team](https://diverse.irisa.fr) (workplace: University of Rennes 1, Campus de Beaulieu, 35000 Rennes, France).

DiverSE's research is in the area of software engineering, focusing on the management of diversity in the construction of software intensive systems.
The team is actively involved in European, French and industrial projects and is composed of 8 faculty members, 18 PhD students, and 3 engineers. 

The candidate can teach but it's not mandatory.

(Cyber)-security is an important topic at Inria/IRISA, with many teams and collaborations (e.g., with DGA).
Besides, Rennes is one of the best city to live in France (routinely ranked in the top 3). 

# How to apply

Please send your application (PDF) as soon as possible. 
Screening of applications starts immediately and continues until the position is filled. 
Send cover letter including names of at least two referees, CV, PDFs of PhD thesis (or draft) if any, and possibly up to three most relevant publications (if any) to [Mathieu Acher](https://www.mathieuacher.com): mathieu.acher@irisa.fr 
