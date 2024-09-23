---
date: 2024-08-29T13:00:00
title: Automating the extension of polyglot static analysis to new languages
abstract: >
  
  The PolyglotAST framework builds ASTs for polyglot programs, which can be used for static analysis of polyglot programs. In this talk, I will present my internship work on extending the framework to help automate the addition of new languages. At the beginning of my work, PolyglotAST supported Java, JS and Python. I started by implementing the C language at first so that I can learn how the framework works. Then we built a DSL to easily input some data on the targeted language. This was done using Langium and programmed in TypeScript. Now, I'm working on the code generator that handles the input and writes the appropriate PolyglotAST code (in Rust).

event: DiverSE Coffee
location: Rennes, France
speaker: Ivann Vyslanko

---