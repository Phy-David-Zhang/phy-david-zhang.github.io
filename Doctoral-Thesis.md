---
layout: post
title: "Doctoral Thesis"
description: "PhD thesis on tensor network methods and artificial intelligence study of the two-dimensional Hubbard model: zero- and finite-temperature iPEPS and XTRG simulations and an optimized encoder-only transformer analysis of snapshots."
---

## Doctoral Thesis

### Introduction

The two-dimensional (2D) Hubbard model, widely believed to capture the essential physics of high-T<sub>c</sub> cuprate compounds, has attracted immense research interest ever since the discovery of superconductivity in these materials. Despite its superficial simplicity, the Hubbard model incubates abundant fascinating phenomena owing to the strong interactions between charge carriers, encompassing antiferromagnetism, the pseudogap, and unconventional superconductivity. Yet these very interactions induce strong correlations, rendering canonical perturbative approaches unreliable. With advances in modern computational hardware, numerical techniques — notably tensor network methods and Artificial Intelligence (AI) algorithms — have become indispensable to our expedition.

Tensor networks encode the amplitude information of many-body quantum states in a network of interconnected tensors. Leveraging the entanglement area law, tensor networks provide efficient, systematic, and controllable representations of quantum states that would otherwise require an exponentially large number of parameters. Past decades have witnessed the development of various tensor network ansatzes, such as Matrix Product States/Operators (MPS/MPO) for one-dimensional systems and Projected Entangled-Pair States (PEPS) for two-dimensional systems, together with diverse algorithms for optimizing these ansatzes for both zero- and finite-temperature scenarios.

Over the past years, AI technologies have revolutionized the way we analyze scientific data. The transformer architecture, in particular, has demonstrated exceptional capabilities in the domain of natural language processing. Its attention mechanism excels at capturing long-range correlations in sequential data, making it a promising tool for studying strongly correlated many-body systems. The interpretable nature of the attention mechanism further offers valuable insights into the AI's perception of the underlying physics.

In this thesis, we assemble an all-inclusive numerical toolchain for analyzing strongly correlated lattice systems. As a demonstration, we investigate the zero- and finite-temperature properties of the 2D Hubbard model on a square lattice via the infinite PEPS (iPEPS) and the eXponential Tensor Renormalization Group (XTRG), respectively. The native two-dimensional iPEPS tensor network faithfully embodies the entanglement area law and helps settle long-standing debates regarding superconducting order in the ground state of the Hubbard model. The XTRG algorithm efficiently constructs thermal density matrices across a broad temperature range via a highly effective exponential-cooling protocol, thereby enabling detailed probes of pairing and pseudogap phenomena. Afterwards, we generate a comprehensive snapshot dataset which furnishes subsequent training of an optimized encoder-only transformer model. Our novel AI architecture features a Markovian interpretation of the attention design and affords improved parallelism. The collective technological stack opens a brand new avenue for exploring the rich physics of strongly correlated many-body systems.

### Document

This document can be accessed here: [Doctoral Thesis]({{ '/assets/doctoral_thesis.pdf' | relative_url }})

This thesis was submitted on November 11, 2025 and defended on December 17, 2025

Notice: Copyright © 2025 Zhang Chang-kai. All rights reserved. This is a PhD thesis at Ludwig-Maximilians-Universität München.
