---
date: 2023-10-26T13:00:00
title: "The Hitchhiker's Guide to Malicious Third-Party Dependencies"
abstract: >
  The increasing popularity of certain programming languages has spurred the
  creation of ecosystem-specific package repositories and package managers.
  Such repositories (e.g., npm, PyPI) serve as public databases that users can
  query to retrieve packages for various functionalities, whereas package managers
  automatically handle dependency resolution and package installation on the
  client side.
  
  
  These mechanisms enhance software modularization and accelerate
  implementation. However, they have become a target for malicious actors seeking
  to propagate malware on a large scale.
  
  
  In this work, we show how attackers can leverage capabilities of popular package
  managers and languages to achieve arbitrary code execution on victim machines,
  thereby realizing open-source software supply chain attacks.
  Based on the analysis of 7 ecosystems, we identify 3 install-time and 4 runtime
  techniques, and we provide recommendations describing how to reduce the risk
  when consuming third-party dependencies. We provide example implementations that
  demonstrate the identified techniques. Furthermore, we describe evasion
  strategies employed by attackers to circumvent detection mechanisms.
event: DiverSE Coffee
location: Rennes, France
speaker: Piergiorgio Ladisa
url_pdf: https://arxiv.org/pdf/2307.09087.pdf
---
