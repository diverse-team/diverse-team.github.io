---
date: 2023-01-12T13:00:00
title: A Testing Framework for Executable Domain-Specific Languages
abstract: >
  The continuous growth of software complexity raises the need for effective
  complexity management in the software development life cycle.
  
  Model-Driven Engineering (MDE) is a development paradigm that meets this
  requirement by separating concerns through the application of models. A model
  is a specific abstraction of a system that can be defined by a
  Domain-Specific Language (DSL).
  A DSL with execution facilities, referred to as Executable DSL (xDSL),
  enriches the modeling quality by enabling the employment of dynamic
  Verification & Validation (V&V) techniques.
  Testing is the primary and the most prevalent dynamic V&V technique in the
  field of software engineering.
  While many testing frameworks exist for general-purpose programming
  languages, providing testing facilities for any given xDSL remains a costly
  and challenging task.
  
  In this talk, I will present part of my contributions during my Ph.D. In
  particular, a generic testing framework for executable DSLs.
  Given an xDSL, the framework provides a testing language that supports the
  use of xDSL-specific concepts in the definition of test cases. This enables
  the xDSL's users, namely the domain experts, to write test cases for their
  models.
  The written test cases can be executed on the models and the test results
  will be produced.
  To further support the domain expert in efficiently testing models, the
  framework offers three supplementary services:
  (i)   test quality measurement to ensure that the written test cases are good
  enough;
  (ii)  test debugging to localize the fault of the model under test in case of
  test failure; and
  (iii) automatic test improvement to strengthen the ability of written test
  cases in detecting regression faults.
  We provide tool support for the framework atop the Eclipse GEMOC Studio and
  evaluate its genericity through its application on several xDSLs of
  different application domains.
event: DiverSE Coffee
location: Rennes, France
speaker: Faezeh Khorram
---
