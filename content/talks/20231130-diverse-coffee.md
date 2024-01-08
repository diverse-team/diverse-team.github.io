---
date: 2023-11-30T13:00:00
title: "Leveraging MLIR for GPU-accelerated stencil computing"
abstract: >
  Weather and climate models extensively use stencil computations to model
  physical phenomena. These models have grown in complexity over the past decades
  and comprise large parts of today’s HPC workloads. With new architectures
  switching to heterogeneous compute nodes, climate models must be compiled and
  optimized for accelerator hardware. This presentation illustrates how a small
  team leveraged the MLIR infrastructure to compile stencil code for GPU
  accelerators. We demonstrate how we took advantage of the multi-level
  capabilities of MLIR by representing stencils in a high-level intermediate
  representation and subsequently lowering this representation down to GPU code.
  We show that the resulting toolchain outperforms the state-of-the-art when
  compiling the dynamical core of the European weather and climate model.


  More details in the following paper: https://dl.acm.org/doi/10.1145/3469030
event: DiverSE Coffee
location: Rennes, France
speaker: Jean-Michel Gorius (TARAN, Inria/IRISA)
url_pdf: https://jmgorius.com/pdf/gorius-mlir4hpc-presentation.pdf
---
