---
date: 2024-02-15T13:00:00
title: "Tera-scale graph processing on the Software Heritage graph"
image: https://annex.softwareheritage.org/public/logo/software-heritage-logo-title-motto.svg
abstract: >
  I will present my work on the compressed graph representation of the [Software
  Heritage](https://www.softwareheritage.org/) archive, whose latest version features 34 billion nodes and 520
  billion edges.


  I started by building on top of someone's PhD project (in Java), and am now
  rewriting it in Rust, leading to a 2 to 6x performance gain.


  Lessons learned include unexpected data structures, columnar file formats (ORC),
  annoying multi-threading bugs, and arguments for your future language flamewars.
event: DiverSE Coffee
location: Rennes, France
speaker: Valentin Lorentz
---
