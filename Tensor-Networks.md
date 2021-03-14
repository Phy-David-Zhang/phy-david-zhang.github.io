---
layout: post
---

## Tensor Networks

### Introduction

Various fascinating phenomena and phases of matter that emerge from the strongly correlated many-body systems have received much interest in condensed matter physics. However, direct treatment of a many-body system is close to impossible due to the exponentially large number of degrees of freedom. Tensor network techniques provide a compelling framework to circumvent the complexity problem. In this thesis, we employ the infinite Projected Entangled-Pair State (iPEPS) tensor network to simulate 2-dimensional quantum models defined on a square lattice with nearest-neighbor and next-nearest neighbor interactions. Compared with other popular numerical methods such as the Density Matrix Renormalization Group (DMRG) and Quantum Monte Carlo (QMC) method, iPEPS is especially competitive in its faithful representation of the entanglement area law and is free from the sign problem. Therefore, it is particularly suitable for studying fermionic models such as the Hubbard model where numerous captivating phenomena including high-T<sub>c</sub> superconductivity may emerge.

A unique feature of our iPEPS algorithms is the capability to exploit symmetries. The QSpace tensor library is utilized to automatically keep track of the U(1) or SU(2) symmetry of the tensors. This dramatically reduces the numerical costs and allows quantum states which conserve different types of symmetries can be studied. 

The quantum lattice models studied in this thesis include the Heisenberg model, the free-fermion model and the Hubbard model. We validate our iPEPS implementation using well-understood models (e.g. nearest-neighbor Heisenberg model) and an exactly solvable free-fermion model. Specifically, we investigate the U(1) and SU(2) symmetric ground state properties of next-nearest neighbor Hubbard model with next-nearest neighbor hopping amplitude t<sub>2</sub> = -0.25 at 1/8 hole doping. Remarkably, we find that the SU(2) symmetric ground state has a lower energy than the U(1) symmetric ground state with striped charge and spin orders found in previous iPEPS calculations.

### Document

This document can be accessed here: [Tensor Networks]({{ site.url }}/assets/iPEPS_QLM.pdf)

This version is released on March 12, 2021

Notice: Copyright © 2021 Zhang Chang-kai. All rights reserved. This is a MSc thesis at Ludwig-Maximilians-Universität München.
