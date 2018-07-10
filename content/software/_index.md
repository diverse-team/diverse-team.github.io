+++
title = "Software"
date = "2017-01-01T00:00:00Z"
math = false
highlight = false


# Optional featured image (relative to `static/img/` folder).
[header]
caption = ""
+++


The team develops many tools to support empirical research and we disseminate our techniques in the following main tools:

- [Melange](http://melange.inria.fr/) is a language and platform for assembling and integrating multiple domain-specific languages (DSL).
- [Familiar](http://familiar-project.github.io/) is a language for importing, exporting, composing, decomposing, editing, configuring, computing “diffs”, refactoring, reverse engineering, testing, and reasoning about (multiple) feature models.
- [Kevoree](http://kevoree.org/) aims at enabling distributed reconfigurable software development.
- Our [diversification toolbox](https://softwarediversity.eu/software/) gathers a set of tools to monitor and automatically synthesize variants of Java programs.

As a common technical  foundations, we use a lot in the team the followings tools:

## Spoon: Java src code transformation

- [Spoon](http://spoon.gforge.inria.fr/) parses Java source code and creates an Abstract Syntax Tree (AST) : *e.g.* Micro/Design pattern detection, Architectural rule checking, Metrics
- Usage for source-to-source code transformation: 
*e.g.* Automatic instrumentation & logging, Automatic refactoring, Automatic repair
- Powerful API (better than JavaParser)

## ByteBuddy:  runtime code generation

- [Byte Buddy](http://bytebuddy.net/) is a code generation and manipulation library for creating and modifying Java classes during the runtime of a Java application and without the help of a compiler. 
-  Byte Buddy offers a convenient API for changing classes either manually, using a Java agent or during a build.


## Graal, Truffle, Polyglot

- [GraalVM](https://www.graalvm.org/): Universal virtual machine for running applications written in JavaScript, Python, Ruby, R, JVM-based languages like Java, Scala, Clojure, Kotlin, and LLVM-based languages such as C and C++.
- [Truffle](https://github.com/oracle/graal/tree/master/truffle): Language Implementation Framework
  - High level representation of the language AST
  - Annotated AST to assist Graal speculative optimizations.
-  [Polyglot](http://www.oracle.com/technetwork/oracle-labs/program-languages/polyglot/index.html): A language interop framework that allows Truffle languages to call each other


## Gemoc Studio

- The [GEMOC Studio](http://gemoc.org/studio.html) provides generic components through Eclipse technologies for the development, integration, and use of heterogeneous executable modeling languages.

## SciPy

[SciPy](https://www.scipy.org/) is a Python-based ecosystem of open-source software for mathematics, science, and engineering. In particular, these are some of the core packages:

- NumPy Base N-dimensional array package
- SciPy library: Fundamental library for scientific computing
- Matplotlib: Comprehensive 2D Plotting
- IPython: Enhanced Interactive Console
- Sympy: Symbolic mathematics
- pandas:  Data structures & analysis



## [scikit-learn](http://scikit-learn.org/)

- Machine Learning in Python
  - Simple and efficient tools for data mining and data analysis
  - Accessible to everybody, and reusable in various contexts
  - Built on NumPy, SciPy, and matplotlib
  - Open source, commercially usable - BSD license

## [GreyCat: Next-Gen Live Analytics using Temporal Graph](https://github.com/datathings/greycat)

- GreyCat is the first Temporal Many-World Graph database. In a nutshell, this project defines a graph storage and processing framework that allows you to store and analyze highly interconnected complex data structures and rapidly evolving over time. This data structure can be as well infinitely cloneable in order to evaluate potential alternatives modifications to find the best one. To sum up GreyCat is a core data structure framework to build for businesses, a live reasoning engine that can handle simulations and analytics over data in motion.

