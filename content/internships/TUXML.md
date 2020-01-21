+++
# Date this page was created.
date = "2019-01-21"

# Position infos
type = "internship"
title = "[Internship]: Compiling and Booting Linux Kernel Configurations"
duree = "3 months"
start = "may 2020"
pdf = ""
#external_link = "https://www.linkedin.com/in/anas-motii-59b88868/"
note = ""

# Tags: can be used for filtering projects.
#tags = ["current","phd","indus"]
tags = ["internship"]

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""

+++

The Linux operating system is one the most complex software ever developed and is crucial to our daily lives.
The Linux kernel provides more than 15000 options and perhaps more than 10^6000 possible configurations. 
Among those configurations, we can wonder whether all of them compile and boot. 
We have developed TuxML an OSS tool based on Docker/Python to massively gather data about thousands of kernel configurations (see 
https://github.com/TuxML).
We have automatically compiled 200K+ configurations. 
Thanks to this amount of data, we can envision to predict properties of unseen Linux configurations, with different use cases (identification of influential/buggy options, finding of small kernels, etc.) 
The vision is that a continuous understanding of the configuration space is undoubtedly beneficial for the Linux community, yet several technical challenges remain in terms of infrastructure and automation (see http://blog.mathieuacher.com/ELCETuxML/ and the [Youtube presentation](https://www.youtube.com/watch?v=UBghs-cwQX4&feature=youtu.be)).

The goal of this internship is to develop and use TuxML in order to collect even more information about the kernel (ie more configurations and more properties). 
In particular, we aim to verify whether a configuration of the kernel does boot. 

We are looking for candidates that are interested by Linux, software automation, tooling systems (bash, gcc, Make, etc.) and that have skills with Python and Docker. 
