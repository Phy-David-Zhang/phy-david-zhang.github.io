---
layout: null
permalink: /NucParPhys-Online/
---
<!--
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN"
        "{{ site.url }}/assets/HTMLFiles/xhtml-math11-f.dtd">
-->

<!-- Created with the Wolfram Language : www.wolfram.com -->

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>
  NucParPhys.cdf
 </title>
 <link href="{{ site.url }}/assets/HTMLFiles/NucParPhys.css" rel="stylesheet" type="text/css" />
</head>

<body style="max-width: 865px; margin: auto">

<p class='Title' style='font-size: 36px;'>
 Basics of Nuclear and Particle Physics
</p>



<p class='Text' style='font-size: 20px;'>
 This is a Mathematica notebook for PHYS30121 Introduction to Nuclear and Particle Physics. This is the first attempt to write a Mathematica notebook with no prior standards set up. Therefore, it is subject to further update if new standards are included.
</p>



<p class='Text' style='font-size: 20px;text-align: Which[AlignmentMarker &gt;= 0.5, right, System`Convert`CSSDump`val$32692 &lt;= -0.5, left, True, center];margin-left: 88px;margin-right: 10px;margin-top: 8px;margin-bottom: 7px;'>
 Author: Zhang Chang-kai<br />E-mail: phy.zhangck@gmail.com
</p>



<p class="Text">
 This work is licensed under a <span><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><span class="HyperlinkInline">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</span></a></span>, except for specific notifications. Communications by email are welcomed regarding the content of this document or specific authorization of copyrighted materials.
</p>



<p class='Text' style='font-size: 20px;'>
 
</p>



<p class="Section">
 Basic Concepts in Particle Physics
</p>



<p class="Text">
 This section introduces several basic concepts in particle physics, including (1) elementary particles, (2) fundamental forces, (3) Feynman diagram, (4) natural units, (5) discrete symmetries, (6) spin-statistics, (7) cross section and decay rates.
</p>



<p class="Subsection">
 Elementary Particles
</p>



<p class="Text">
 Currently, the physics of elementary particles is described by the Standard Model. There are in total 61 distinct elementary particles in the Standard Model, including (1) 6 quarks &times; 3 colours + antiparticles &times; 2 = 36 distinct quarks, (2) 6 leptons + antiparticles = 12 leptons, (3) 8 gluons + 1 photon + <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_1.png" alt="NucParPhys_1.png" width="31" height="28" style="vertical-align:middle" /></span></span>,<span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_2.png" alt="NucParPhys_2.png" width="19" height="25" style="vertical-align:middle" /></span></span>) bosons = 12 gauge bosons, and (4) Higgs boson.
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_3.gif" alt="NucParPhys_3.gif" width="637" height="610" style="vertical-align:middle" /></span></span><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>1</span>&nbsp;&nbsp;&nbsp;Standard Model of Elementary Particles<br />(Source: <span><a href="https://commons.wikimedia.org/wiki/File:Standard_Model_of_Elementary_Particles.svg"><span class="HyperlinkInline">https://commons.wikimedia.org</span></a></span>)
</p>



<p class="Text">
 From the spin point of view, the elementary particles include <span style='font-weight: bold;'>spin-0</span>, <span style='font-weight: bold;'>spin-1/2</span> and <span style='font-weight: bold;'>spin-1</span> particles. Wherein, the Higgs boson is the only spin-0 boson. All matter particles, i.e. quarks and leptons, are spin-1/2 particles; while gauge bosons, gluons, photons and W, Z bosons, are spin-1 particles.
</p>



<p class="Text">
 From the interaction point of view, the matter particles are divided into <span style='font-weight: bold;'>leptons</span> and <span style='font-weight: bold;'>hadrons</span>. The former only interacts with electromagnetic and weak interaction, while the latter participates also in strong interaction. Hadrons consist of quarks. Depending on the number of constituent quarks, hadrons are divided into <span style='font-weight: bold;'>baryons</span> (3 quarks) and <span style='font-weight: bold;'>mesons</span> (2 quarks).
</p>



<p class="Text">
 All particles have their corresponding antiparticles. Antiparticles have exactly the same parameters as particles except for an opposite value of all their charges, including electric charge, isospin and colour.
</p>



<p class="Subsection">
 Fundamental Interactions
</p>



<p class="Text">
 There are in general four fundamental interactions: electromagnetic, weak, strong and gravitational interaction. The last one only appears at very high energy and thus no quantum effects have been observed. 
</p>



<p class="Text">
 <span style='font-weight: bold;'>Strong interaction</span> is generated by 8 gluons and only quarks take part in this interaction, where 8 comes from the dimension of SU(3). The range of the interaction is typically <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_4.png" alt="NucParPhys_4.png" width="43" height="25" style="vertical-align:middle" /></span></span>m. The strong interaction binds the quarks into nuclei. Also, strong interaction generates mesons (e.g. <span><em>&pi;</em></span>-meson) which initiate <span style='font-weight: bold;'>strong nuclear force</span> which binds the nuclei into nucleons. 
</p>



<p class="Text">
 <span style='font-weight: bold;'>Weak interaction</span> is generated by 3 gauge bosons <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_5.png" alt="NucParPhys_5.png" width="25" height="25" style="vertical-align:middle" /></span></span>, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_6.png" alt="NucParPhys_6.png" width="25" height="25" style="vertical-align:middle" /></span></span> and <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_7.png" alt="NucParPhys_7.png" width="19" height="25" style="vertical-align:middle" /></span></span>, where 3 comes from the dimension of SU(2). The range of weak interaction is typically <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_8.png" alt="NucParPhys_8.png" width="43" height="25" style="vertical-align:middle" /></span></span>m. The weak interaction is the causes of several crucial decays.
</p>



<p class="Text">
 <span style='font-weight: bold;'>Electromagnetic interaction</span> is generated by a single photon, which comes from the U(1) Abelian gauge theory. The range of the electromagnetic interaction is infinity, since the photons are massless.
</p>



<p class="Text">
 There is an additional boson called Higgs boson, which gives the gauge bosons, especially W and Z bosons, mass via Higgs mechanism. Also, the Higgs mechanism in electroweak theory initiates the crucial Gell-Mann&ndash;Nishijima relation.
</p>



<p class="Subsection">
 Feynman Diagram
</p>



<p class="Text">
 The Feynman diagram is the standard method of interpreting a particle reaction process. A typical diagram of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_9.png" alt="NucParPhys_9.png" width="115" height="25" style="vertical-align:middle" /></span></span> is shown as follows. A typical Feynman diagram consists of external lines, internal lines and vertex. Time conventionally flows from left to right. Arrows indicate the direction of charge flow and should be conserved at each vertex.
</p>



<p class='Figure' style='text-align: center;'>
 <br /><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_10.gif" alt="NucParPhys_10.gif" width="292" height="183" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>2</span>&nbsp;&nbsp;&nbsp;Feynman Diagram of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_11.png" alt="NucParPhys_11.png" width="40" height="22" style="vertical-align:middle" /></span></span> Annihilation<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)<br />
</p>



<p class="Text">
 For a specific process, the Feynman diagram is usually not unique. As an example, the following diagram is also a diagram for <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_12.png" alt="NucParPhys_12.png" width="115" height="25" style="vertical-align:middle" /></span></span> scattering. Differences occur at the right side of the diagram, with a reverse direction of charge flow. They represent different diagrams since they are topologically distinct.
</p>



<p class='Figure' style='text-align: center;'>
 <br /><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_13.gif" alt="NucParPhys_13.gif" width="292" height="200" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>3</span>&nbsp;&nbsp;&nbsp;Feynman Diagram of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_14.png" alt="NucParPhys_14.png" width="40" height="22" style="vertical-align:middle" /></span></span> Scattering<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)<br />
</p>



<p class="Text">
 The external line of the diagram represents a <span style='font-style: italic;font-weight: bold;'>real</span> particle, which follows the energy-momentum relationship <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_15.png" alt="NucParPhys_15.png" width="98" height="28" style="vertical-align:middle" /></span></span>; while the internal line represents a <span style='font-style: italic;font-weight: bold;'>virtual</span> particle, which does not preserve the energy-momentum relationship.
</p>



<p class="Text">
 The vertex of the diagram is generated by the form of the interaction potential. For electromagnetic potential, namely <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_16.png" alt="NucParPhys_16.png" width="79" height="28" style="vertical-align:middle" /></span></span>, there are two spinor field and one vector field, which corresponds to two electron or positron and one photon in each vertex.
</p>



<p class="Subsubsection">
 Quark Level Diagram
</p>



<p class="Text">
 The strong force that binds quarks to form hadrons has a special property called asymptotic freedom. This property forbids free quarks. Therefore, any interaction involving quarks should happen accompanied by hadrons. The quark level diagram exists for this situation. The free particles involved are hadrons, with constituent quarks participating the interaction.
</p>



<p class="Figure">
 <br /><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_17.gif" alt="NucParPhys_17.gif" width="359" height="170" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>4</span>&nbsp;&nbsp;&nbsp;Quark Level Diagram of <span><em>&beta;</em></span>-decay<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)<br />
</p>



<p class="Text">
 The above diagram is the quark level diagram of the weak <span><em>&beta;</em></span>-decay of the neutron. One of the down quarks within the neutron decays to up quark, emitting a <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_18.png" alt="NucParPhys_18.png" width="25" height="25" style="vertical-align:middle" /></span></span> boson which eventually decays to an electron and an electron antineutrino. The other two quarks within the hadrons do not participate the interaction.
</p>



<p class="Subsubsection">
 Field Theory and Interaction
</p>



<p class="Text">
 In all field theory, complex fields, i.e. with distinct particle and anti-particle, always come in pairs; and real fields have the anti-particles being themselves. Therefore, if a process is allowed, then all processes generated by exchanging the initial and final state with particle anti-particle switched are also allowed.
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_19.png" alt="NucParPhys_19.png" width="520" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 For example, let the elastic scattering of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_20.png" alt="NucParPhys_20.png" width="24" height="25" style="vertical-align:middle" /></span></span> and <span><em>p</em></span> be the known process. This immediately implies another process by moving the proton in final state to the initial state, and replace it by its anti-particle, plus the same process for <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_21.png" alt="NucParPhys_21.png" width="24" height="25" style="vertical-align:middle" /></span></span>, from left to right and replaced by <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_22.png" alt="NucParPhys_22.png" width="24" height="25" style="vertical-align:middle" /></span></span>.
</p>



<p class="Subsection">
 Natural Units
</p>



<p class="Text">
 In Nuclear and Particle Physics, the natural units are the most commonly used unit system. In general, natural units set the two physical constants to one
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_23.png" alt="NucParPhys_23.png" width="75" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 In this case, there are only one independent unit within length, mass and time. Also, the energy unit used in Nuclear and Particle Physics is <span style='font-weight: bold;'>electron volt</span>, or eV, and its multiples, MeV, GeV and TeV. The typical energy scales are
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_24.png" alt="NucParPhys_24.png" width="609" height="50" style="vertical-align:middle" />
</p>

<p class="Text">
 Also, there is another typical value which is essential, i.e. <span><span><span class="script">h</span>c</span></span>. This value occurs frequently in various estimations.
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_25.png" alt="NucParPhys_25.png" width="415" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 In the above formula, unit <span><span>fm</span></span> in fact only gives a factor of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_26.png" alt="NucParPhys_26.png" width="43" height="25" style="vertical-align:middle" /></span></span> without producing the length unit <span><em>m</em></span>. This is important since it should not be counted into the balance of units.
</p>



<p class="Text">
 As an example, we estimate the relationship between the mediate particle and the range of the interaction. As is presumed by the Standard Model, the fundamental interaction are mediated by the exchanged particles.
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_27.png" alt="NucParPhys_27.png" width="152" height="30" style="vertical-align:middle" />
</p>

<p class="Text">
 Consider the interaction mediated by particle <span><em>X</em></span> between particle <span><em>A</em></span> and <span><em>B</em></span> shown in the above reaction. In Feynman diagram, the particle <span><em>X</em></span> is represented by an internal line and thus is virtual, which needs not satisfy the energy-momentum relation. 
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_28.png" alt="NucParPhys_28.png" width="356" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 Consider the above particle process from a particle <span><em>A</em></span> at rest to two particles <span><em>A</em></span> and <span><em>X</em></span>. In this process, the momentum is conserved, while the energy presents a difference
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_29.png" alt="NucParPhys_29.png" width="233" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 Therefore, there is always an energy excess. However, this energy excess is actually allowed in quantum theory, as long as it appears for a time less than
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_30.png" alt="NucParPhys_30.png" width="323" height="55" style="vertical-align:middle" />
</p>

<p class="Text">
 As an example, the strong nuclear force is mediated by pions with a mass of around <span>140<em> </em>MeV</span>. Therefore, considering <span><span><span class="script">h</span>&sim;200MeV&middot;fm</span></span>. The range will be around <span>1.4<em> </em>fm</span>. Another example is photon which is massless. Therefore, the range of electromagnetic interaction is infinity.
</p>



<p class="Subsection">
 Discrete Symmetries
</p>



<p class="Text">
 In Quantum Field Theory, there are three types of discrete symmetries &mdash; <span style='font-weight: bold;'>charge conjugate</span> <span style='font-weight: normal;'><em>C</em></span> <span style='font-weight: bold;'>parity</span> <span><em>P</em></span>, and <span style='font-weight: bold;'>time reverse</span> <span><em>T</em></span>. These symmetries, or their combinations are conserved in fundamental interactions, and thus provides a criterion for allowed processes.
</p>



<p class="Text">
 Also, the fundamental interaction also preserves some particle numbers, such as <span style='font-weight: bold;'>baryon number</span> and <span style='font-weight: bold;'>lepton number</span>. This will also be discussed in this section.
</p>



<p class="Subsubsection">
 Parity Symmetry
</p>



<p class="Text">
 The parity transformation simply reverses the space direction, i.e. <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_31.png" alt="NucParPhys_31.png" width="70" height="25" style="vertical-align:middle" /></span></span>. If the Hamiltonian of the system is commutable with the parity, then the process generated by the Hamiltonian will possess parity conservation.
</p>



<p class="Text">
 Different physical quantities can have different properties under parity. The transformation, labelled by even (unchanged) and odd (switch sign), of common quantities is shown as follows
</p>



<p class="Subitem">
 Even: angular momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_32.png" alt="NucParPhys_32.png" width="12" height="27" style="vertical-align:middle" /></span></span>, modulus <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_33.png" alt="NucParPhys_33.png" width="42" height="26" style="vertical-align:middle" /></span></span>, etc.
</p>



<p class="Subitem">
 Odd: displacement <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_34.png" alt="NucParPhys_34.png" width="13" height="24" style="vertical-align:middle" /></span></span>, momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_35.png" alt="NucParPhys_35.png" width="12" height="24" style="vertical-align:middle" /></span></span>, etc.
</p>



<p class="Text">
 In Particle Physics, there are in general two sources for parities &mdash; <span style='font-weight: bold;'>angular momentum</span> and <span style='font-weight: bold;'>intrinsic</span> parity. The angular momentum gives a factor of 
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_36.png" alt="NucParPhys_36.png" width="265" height="25" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><em>L</em></span> is the quantum number of the angular momentum. On the other hand, the intrinsic parity is determined by the types of the particle. Spin-0 bosons are evidently even in parity. For spin-1 vectors, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_37.png" alt="NucParPhys_37.png" width="83" height="28" style="vertical-align:middle" /></span></span>; for spin-1/2 spinors, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_38.png" alt="NucParPhys_38.png" width="86" height="25" style="vertical-align:middle" /></span></span>, which means the particle and anti-particle of spinors should have inverse parities. Usually, particles are assigned <span><em>+</em><em>1</em></span> and anti-particles <span><em>-</em><em>1</em></span> for convention.
</p>



<p class="Text">
 The parity is a multiplicative quantum number. So to get the overall parity of a composite state, simply multiply the parity of all its constituents and both sources of the parity. The <span style='font-weight: bold;'>strong</span> and <span style='font-weight: bold;'>electromagnetic</span> interaction preserves parity, while it is <span style='font-weight: bold;'>violated by weak</span> interaction.
</p>



<p class="Subsubsection">
 Charge Conjugation
</p>



<p class="Text">
 The charge conjugation is an operation to reverse the particles and their corresponding anti-particles. If the Hamiltonian of the system is commutable with the charge conjugation operator, then the interaction will preserve the charge designation.
</p>



<p class="Text">
 Since there are two classes of particles, one with distinct anti-particles and the other with anti-particles being themselves. Therefore, it is convenient to have them discussed separately. For the former one, labelled by <span><em>a</em></span>, the effect will be a parity factor; for the latter one, labelled by <span><em>b</em></span>, particle and anti-particle are exchanged.
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_39.png" alt="NucParPhys_39.png" width="224" height="30" style="vertical-align:middle" />
</p>

<p class="Text">
 Photon <span><em>&gamma;</em></span> is a typical particle of the former type. The charge conjugation parity of <span><em>&gamma;</em></span> is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_40.png" alt="NucParPhys_40.png" width="61" height="28" style="vertical-align:middle" /></span></span>. This is the intrinsic charge conjugate parity of the particle. Another source of the charge conjugate parity is the angular momentum, since switching the particle and anti-particle pair also switches the displacement but preserves the momentum. Thus
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_41.png" alt="NucParPhys_41.png" width="337" height="30" style="vertical-align:middle" />
</p>

<p class="Text">
 The charge conjugation parity is also a multiplicative quantum number. So it can also be obtained by multiplication for composite states. The <span style='font-weight: bold;'>strong</span> and <span style='font-weight: bold;'>electromagnetic</span> interaction also preserves charge conjugation, while it is <span style='font-weight: bold;'>violated by weak</span> interaction. However, the weak interaction will <span style='font-weight: bold;'>preserve the combination</span>, called <span style='font-weight: bold;'>CP invariance</span>, of the charge conjugation and parity.
</p>



<p class="Subsubsection">
 Time Reversal
</p>



<p class="Text">
 The time reversal operation simply reverses the direction of time, i.e. <span><span>t&rarr;-t</span></span>. The properties of common quantities under time reversal is listed as follows:
</p>



<p class="Subitem">
 Even: displacement <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_42.png" alt="NucParPhys_42.png" width="13" height="24" style="vertical-align:middle" /></span></span>, etc.
</p>



<p class="Subitem">
 Odd: time <span><em>t</em></span>, momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_43.png" alt="NucParPhys_43.png" width="12" height="24" style="vertical-align:middle" /></span></span>, angular momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_44.png" alt="NucParPhys_44.png" width="12" height="27" style="vertical-align:middle" /></span></span>, etc.
</p>



<p class="Text">
 In Quantum Field Theory, it is required that the theory is invariant under a combination of CPT transformation, which essentially rotates the whole system by <span>180<em>&deg;</em></span> and exchanges all particles and anti-particles. The CPT theorem also implies that the particle and anti-particle should have exactly the <span style='font-weight: bold;'>same mass</span>.
</p>



<p class="Subsection">
 Spin-Statistics Theorem
</p>



<p class="Text">
 The spin-statistics theorem states that <span style='font-weight: bold;'>all particles with integer spin are bosons, while all particles with half-integer spin are fermions</span>. Note that this theorem applies not only to the elementary particles, but also their composite states. Therefore, composite particle <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_45.png" alt="NucParPhys_45.png" width="23" height="25" style="vertical-align:middle" /></span></span> should be bosonic, and <span><em>p</em></span> and <span><em>n</em></span> should be fermionic.
</p>



<p class="Text">
 The essence of this theorem lies in Quantum Field Theory. By exchanging two particles, it is similar to a parity operation. Therefore, the half-integer spin state rotates a half-integer times of 2&pi;, which reduces to <span><em>&pi;</em></span>, while the integer spin state rotates an integer times, which reduces to <span><em>0</em></span>. And a rotation of <span><em>&pi;</em></span> in 4-dimensional spacetime gives a factor of <span><em>-</em><em>1</em></span>.
</p>



<p class="Subsection">
 Cross Section and Decay Rate
</p>



<p class="Text">
 The cross section and decay rate are the two major observables in Particle Physics. They are related to the scattering amplitude which can be computed in Quantum Field Theory. The idea of cross section arises by considering an equivalent rigid ball that generates the same scattering distributions. And the decay rate measures the speed of the spontaneous decay.
</p>



<p class="Subsubsection">
 Cross Section
</p>



<p class="Text">
 In Particle Physics, particles are considered to be a point-like object. The scattering of particles is then essentially generated by the interaction between two point particles. However, in classical physics, point-like incident particles can be scattered by a ball with finite size, and it is possible to find an equivalent ball with a finite radius which generates the same scattering distribution through classical scattering. Hence, the largest cross section of this ball is defined as the cross section of the interaction.
</p>



<p class="Text">
 According to the above idea, if the cross section of some interaction is <span><em>&sigma;</em></span>, then the total area of <span><em>N</em></span> target particles available for scattering will be <span><em>N</em><em></em><em>&sigma;</em></span>. If there are in average <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_46.png" alt="NucParPhys_46.png" width="16" height="25" style="vertical-align:middle" /></span></span> incident particles <span style='font-style: italic;'>per unit area</span>, it is then expected that <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_47.png" alt="NucParPhys_47.png" width="45" height="25" style="vertical-align:middle" /></span></span> particles will be scattered. Considering that we usually have a sustained beam of incident particles, it is convenient to divide the scattering by time, which turns <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_48.png" alt="NucParPhys_48.png" width="19" height="25" style="vertical-align:middle" /></span></span> to flux <span><em>J</em></span>. Consequently, we have
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_49.png" alt="NucParPhys_49.png" width="97" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_50.png" alt="NucParPhys_50.png" width="28" height="25" style="vertical-align:middle" /></span></span> is the scattered particle <span style='font-style: italic;'>per unit time</span>. The three quantities other than the cross section can all be measured and then the cross section can be computed. In practice, a more commonly used derivation of the cross section is the <span style='font-weight: bold;'>differential cross section </span><span>d&sigma;<em>/</em>d&Omega;</span>, which measures the scattering rate at a certain solid angle.
</p>



<p class="Subsubsection">
 Decay Rate
</p>



<p class="Text">
 The decay rate is simply defined as the number of decay events <span style='font-style: italic;'>per unit time</span>. However, there are two derivations that are used more frequently &mdash; the lifetime and the decay width. Let <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_51.png" alt="NucParPhys_51.png" width="11" height="25" style="vertical-align:middle" /></span></span> be the probability of decay <span style='font-style: italic;'>per unit time</span> (computable by scattering amplitude). Then the number of decayed particles <span style='font-style: italic;'>per unit time</span> is 
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_52.png" alt="NucParPhys_52.png" width="195" height="27" style="vertical-align:middle" />
</p>

<p class="Text">
 Therefore, the number of remaining particles goes like <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_53.png" alt="NucParPhys_53.png" width="125" height="25" style="vertical-align:middle" /></span></span>. Define the <span style='font-weight: bold;'>lifetime</span> of the particle as <span><span>&tau;=1/&lambda;</span></span>, which is the characteristic time of this decay. Moreover, define the decay width of the particle as <span><span>&Gamma;=<span class="script">h</span>/&tau;</span></span>. Within the lifetime, the uncertainty in energy is given by <span><span>&Delta;E=<span class="script">h</span>/2&tau;=2&Gamma;</span></span>. Therefore, &Gamma; measures the characteristic width in the energy spectrum.
</p>



<p class="Text">
 The typical lifetime of particles decayed by strong interaction is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_54.png" alt="NucParPhys_54.png" width="73" height="25" style="vertical-align:middle" /></span></span>; that by electromagnetic interaction is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_55.png" alt="NucParPhys_55.png" width="112" height="25" style="vertical-align:middle" /></span></span>; that by weak interaction is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_56.png" alt="NucParPhys_56.png" width="73" height="25" style="vertical-align:middle" /></span></span>. Therefore, by computing the lifetime can we tell the dominant interaction which causes the decay.
</p>



<p class="Text">
 
</p>



<p class="Section">
 Fundamental Interactions
</p>



<p class="Text">
 There are in general four fundamental interactions of nature &mdash; <span style='font-weight: bold;'>electromagnetic</span>, <span style='font-weight: bold;'>weak</span>, <span style='font-weight: bold;'>strong</span> and <span style='font-weight: bold;'>gravitational</span> interaction. The last one requires an energy scale much higher than current technology can reach, and is therefore absent in Particle Physics. The electromagnetic interaction is relatively simpler and more universally studied. Hence, Particle Physics cares majorly about the <span style='font-weight: bold;'>strong and weak interaction</span>.
</p>



<p class="Text">
 The central concept to investigate in Particle Physics is the <span style='font-weight: bold;'>quantum number</span> of the particle state. Concretely, the two major study object in Particle Physics &mdash; elementary particles and their interactions, are related to certain quantum numbers as 
</p>



<p class="Subitem">
 elementary particles &mdash; particle state identified by certain quantum numbers
</p>



<p class="Subitem">
 fundamental interactions &mdash; conservation of quantum number in processes
</p>



<p class="Text">
 There are in general four types of quantum numbers &mdash; <span style='font-weight: bold;'>charge</span>, <span style='font-weight: bold;'>flavour</span>, <span style='font-weight: bold;'>dynamic</span> and <span style='font-weight: bold;'>composite</span> quantum number. More details will be provided in the subsequent context on these quantum numbers. A summary is offered below on the preservation of the quantum numbers under the electromagnetic, strong and weak interaction process.
</p>



<p class='Text' style='font-size: 9px;'>
 
</p>



<p class='Input' style='font-size: 20px;font-weight: normal;text-align: center;'>
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_57.png" alt="NucParPhys_57.png" width="685" height="376" style="vertical-align:middle" />
</p>

<p class='Text' style='font-size: 9px;'>
 
</p>



<p class="Subsection">
 Charge Quantum Number
</p>



<p class="Text">
 In Gauge Field Theory, each interaction is implemented by the local gauge symmetry, each of which gives a conserved charge. In Standard Model, the fundamental interactions are given by a <span><span><span style='font-style: normal;'>U</span>(1)&times;SU(2)&times;SU(3)</span></span> gauge theory. For the three interactions of interest, they are
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>electric charge</span> <span><em>Q</em></span> &mdash; given by <span><span><span style='font-style: normal;'>U</span>(1)</span></span> gauge symmetry &mdash; electromagnetic interaction
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>weak isospin</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_58.png" alt="NucParPhys_58.png" width="13" height="27" style="vertical-align:middle" /></span></span> &mdash; given by <span>SU<em>(</em><em>2</em><em>)</em></span> gauge symmetry &mdash; weak interaction
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>colour charge</span> <span><em>r</em><em></em><em>g</em><em></em><em>b</em></span> &mdash; given by <span>SU<em>(</em><em>3</em><em>)</em></span> gauge symmetry &mdash; strong interaction
</p>



<p class="Text">
 The number of the charge in each gauge symmetry is given by the dimension of the representation space; while the number of gauge particles is given by the dimension of the gauge group itself. Therefore, electromagnetic interaction is mediated by a single photon, weak interaction by 3 gauge bosons <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_59.png" alt="NucParPhys_59.png" width="46" height="25" style="vertical-align:middle" /></span></span>, strong interaction by 8 gluons.
</p>



<p class="Subsection">
 Flavour Quantum Number
</p>



<p class="Text">
 Flavours indicate the types of elementary particles. In Standard Model, there are six flavours of quarks &mdash; up/down, charm/strange, top/bottom; and six flavours of leptons &mdash; electron, muon, tau and their corresponding neutrinos. In quark model, there are in total five flavour numbers:
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Isospin</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_60.png" alt="NucParPhys_60.png" width="110" height="24" style="vertical-align:middle" /></span></span>, where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_61.png" alt="NucParPhys_61.png" width="20" height="24" style="vertical-align:middle" /></span></span> and <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_62.png" alt="NucParPhys_62.png" width="21" height="24" style="vertical-align:middle" /></span></span> are the number of up and down quarks
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Charmness</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_63.png" alt="NucParPhys_63.png" width="48" height="24" style="vertical-align:middle" /></span></span>, where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_64.png" alt="NucParPhys_64.png" width="19" height="24" style="vertical-align:middle" /></span></span> is the number of charm quarks
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Strangeness</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_65.png" alt="NucParPhys_65.png" width="57" height="24" style="vertical-align:middle" /></span></span>, where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_66.png" alt="NucParPhys_66.png" width="18" height="24" style="vertical-align:middle" /></span></span> is the number of strange quarks
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Topness</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_67.png" alt="NucParPhys_67.png" width="46" height="24" style="vertical-align:middle" /></span></span>, where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_68.png" alt="NucParPhys_68.png" width="17" height="24" style="vertical-align:middle" /></span></span> is the number of top quarks
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Bottomness</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_69.png" alt="NucParPhys_69.png" width="60" height="24" style="vertical-align:middle" /></span></span>, where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_70.png" alt="NucParPhys_70.png" width="20" height="24" style="vertical-align:middle" /></span></span> is the number of bottom quarks
</p>



<p class="Text">
 Considering that the up, charm and top quarks carry a 2/3 unit of electric charge, and down, strange, bottom quarks a 1/3 unit of electric charge, it is easy to verify that there exists the following relationship between flavour numbers and electric charge
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_71.png" alt="NucParPhys_71.png" width="104" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_72.png" alt="NucParPhys_72.png" width="127" height="25" style="vertical-align:middle" /></span></span> is the <span style='font-weight: bold;'>hypercharge</span> of the state. The above relationship is the so-called <span style='font-weight: bold;'>Gell-Mann&ndash;Nishijima relation</span>. Both the electromagnetic and strong interaction will preserve the flavour quantum numbers, while they will be modified by weak interaction.
</p>



<p class="Subsection">
 Composite Quantum Number
</p>



<p class="Text">
 There are two composite quantum numbers &mdash; <span style='font-weight: bold;'>lepton number</span> <span><em>L</em></span> and <span style='font-weight: bold;'>baryon number</span> <span><em>B</em></span>. The lepton number is the number of leptons subtracted by the number of anti-leptons in the state, regardless of the flavour of leptons. The baryon number is the number of baryons subtracted by anti-baryons in the state.
</p>



<p class="Text">
 In quark model, quarks will form a bound state by strong interaction. Quarks carry a 1/3 unit of baryon numbers and anti-quarks -1/3 unit. Thus, for baryons (anti-baryons) which consist of three quarks (anti-quarks), the baryon number will be +1 (-1). And for mesons, it must consist of a quark and an anti-quark, which yields a 0 in baryon number.
</p>



<p class="Text">
 In weak interaction, the flavour quantum numbers are not conserved. However, the lepton and baryon number will always persist. They are the major two quantum numbers to consider in determining whether a weak process is banned.
</p>



<p class="Subsection">
 Dynamic Quantum Number
</p>



<p class="Text">
 The dynamic quantum numbers are those related to the dynamic properties and spacetime symmetries. In general, there are the following groups of dynamic quantum number
</p>



<p class="Subitem">
 energy/momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_73.png" alt="NucParPhys_73.png" width="18" height="24" style="vertical-align:middle" /></span></span>
</p>



<p class="Subitem">
 orbital/spin angular momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_74.png" alt="NucParPhys_74.png" width="33" height="27" style="vertical-align:middle" /></span></span>
</p>



<p class="Subitem">
 discrete symmetries <span><em>C</em></span>, <span><em>P</em></span>, <span><em>T</em></span>
</p>



<p class="Subitem">
 composite of discrete symmetries <span><em>C</em><em></em><em>P</em></span>, <span><em>C</em><em></em><em>P</em><em></em><em>T</em></span>
</p>



<p class="Text">
 The energy/momentum is required to be conserved universally. Therefore, it is somehow trivial in Particle Physics. The grand total angular momentum <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_75.png" alt="NucParPhys_75.png" width="75" height="27" style="vertical-align:middle" /></span></span> will also be required to conserve for any processes. Thus, the discrete symmetries and their composition need extra attention.
</p>



<p class="Text">
 For electromagnetic and strong interaction, the <span><em>C</em></span>, <span><em>P</em></span>, <span><em>T</em></span> symmetries are individually conserved, so do their compositions. However, the individual <span><em>C</em></span>, <span><em>P</em></span> symmetries are not preserved by weak interaction. In most processes, their combination <span><em>C</em></span><span><em>P</em></span> will be conserved. However, the <span><em>C</em></span><span><em>P</em></span> conservation will also be slightly violated in some special weak processes due to the flavour mixing mechanism. Finally, the <span><em>C</em><em></em><em>P</em><em></em><em>T</em></span> invariance is forced for all processed by Quantum Field Theory.
</p>



<p class="Subsection">
 Strong Interaction
</p>



<p class="Text">
 The strong interaction is a fundamental interaction mediated by gluons. The standard theory for strong interaction is Quantum Chromodynamics, which is an <span>SU<em>(</em><em>3</em><em>)</em></span> gauge theory. The <span>SU<em>(</em><em>3</em><em>)</em></span> local gauge symmetry equips spinor field with three components, which yields the three colours of quarks. The dimension of the Lie algebra of <span>SU<em>(</em><em>3</em><em>)</em></span> is 8, and thus we have 8 distinct gluons as components of the connection. The gluons couple to colour of quarks and generate strong interaction in between.
</p>



<p class="Text">
 The <span>SU<em>(</em><em>3</em><em>)</em></span> gauge theory is a non-Abelian gauge theory. Thus, unlike photons, gluons can have self-interaction. This fact produces a unique feature of QCD &mdash; the <span style='font-weight: bold;'>asymptotic freedom</span>, which means that the strong interaction becomes even stronger at low energy (large distance) and weaker at high energy (short distance). In low energy, the quark system is strongly correlated and thus no methods other than lattice QCD are able to tackle.
</p>



<p class="Text">
 The asymptotic freedom subsequently leads to another feature &mdash; <span style='font-weight: bold;'>quark confinement</span>, or <span style='font-weight: bold;'>colour confinement</span>, which bans the existence of any free quarks. Consequently, the QCD requires that quarks stay always in <span style='font-weight: bold;'>colourless bound states (hadrons)</span>.
</p>



<p class="Text">
 As a result of the quark confinement, quarks are not able to be observed directly. Instead, the only observable is the products of the hadron scattering. The gluons form flux tubes between quarks with a force equivalent to <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_76.png" alt="NucParPhys_76.png" width="93" height="25" style="vertical-align:middle" /></span></span>. When the hadrons collide with an energy sufficient to break these tubes, the incident hadrons break and form new hadrons. The outgoing hadrons form <span style='font-weight: bold;'>hadron jets</span>. The angular distribution of these jets is critical in determining the reality of quarks.
</p>



<p class="Text">
 For a long time, quarks are considered as mathematically convenient tools for analysing strong interactions between hadrons. The evidence suggesting that quarks are in fact a realistic entity arises in consideration of the angular distribution of hadron jets produced by
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_77.png" alt="NucParPhys_77.png" width="306" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 Quark-antiquarks pairs will be created by the above high energy scattering process. Although the colour confinement will immediately bind quarks into hadrons, they preserve the angular distribution of its parent process
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_78.png" alt="NucParPhys_78.png" width="142" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 In this case, by studying the <span style='font-weight: bold;'>two jets</span> of hadrons in this scattering experiment can we testify the reality of quarks. In most cases, there will be two jets &ldquo;back-to-back&rdquo;, while occasionally, <span style='font-weight: bold;'>three jets</span> will be observed. This is due to the emission of gluons (bremsstrahlung) before the quarks eventually fragment to hadrons. Thus, this is the evidence of the reality of gluons.
</p>



<p class="Subsection">
 Running Coupling
</p>



<p class="Text">
 In Quantum Field Theory, the strength of the interaction is determined by the <span style='font-weight: bold;'>coupling constant</span>. However, due to the existence of the quantum fluctuations, the coupling <span style='font-style: italic;'>constant</span> is not actually a &ldquo;constant&rdquo;. Instead, it depends on an <span style='font-weight: bold;'>energy scale</span>. Consider Quantum Electrodynamics (QED) first. Quantum Field Theory predicts that there will be virtual particle-antiparticle pairs <span style='font-style: italic;'>randomly</span> created and annihilated. This can be seen in the following diagram.
</p>



<p class="Figure">
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_79.gif" alt="NucParPhys_79.gif" width="360" height="170" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>5</span>&nbsp;&nbsp;&nbsp;One-loop Correction of QED<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)
</p>



<p class="Text">
 This diagram comes from the one-loop correction of the photon propagator (virtual photon), and can be joined subsequently to gain higher order corrections with more loops. These particle-antiparticle pairs flood the vacuum and make the vacuum behave like a dielectric material. Therefore, any electric charge will produce <span style='font-weight: bold;'>vacuum polarization</span>. The polarized vacuum creates a shield around the charge and reduces the effective charge observed by a distant observer. This effect is understood as <span><a href="https://en.wikipedia.org/wiki/Electric-field_screening"><span class="HyperlinkInline">electric field screening</span></a></span>.
</p>



<p class="Text">
 In gauge theory, the coupling is closely related to the charge, e.g. in QED, the coupling constant is the fine structure constant <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_80.png" alt="NucParPhys_80.png" width="109" height="28" style="vertical-align:middle" /></span></span>. Thus, the screening effectively leads to the scale dependence of the coupling. This is the origin of the <span style='font-weight: bold;'>running coupling</span>.
</p>



<p class="Text">
 In Quantum Field Theory, the quantitative scale dependence of coupling comes from the renormalization. Schematically, the energy (or modes) of the particle-antiparticle pairs cannot be as high as possible. Conversely, there must be a cut off at sufficiently high energy. This yields an energy scale <span><em>&mu;</em></span>. An explicit computation of loop correction produces the following form of the scattering matrix
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_81.png" alt="NucParPhys_81.png" width="227" height="29" style="vertical-align:middle" />
</p>

<p class="Text">
 The overall scattering matrix should be independent of the fake parameter <span><em>&mu;</em></span>. Therefore, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_82.png" alt="NucParPhys_82.png" width="56" height="25" style="vertical-align:middle" /></span></span> should change covariantly with <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_83.png" alt="NucParPhys_83.png" width="68" height="28" style="vertical-align:middle" /></span></span>. By differentiating with respect to <span><span>ln&mu;</span></span>, we get the how <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_84.png" alt="NucParPhys_84.png" width="32" height="25" style="vertical-align:middle" /></span></span> varies with <span><em>&mu;</em></span>. For QED, there is
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_85.png" alt="NucParPhys_85.png" width="217" height="55" style="vertical-align:middle" />
</p>

<p class="Text">
 The right hand side is the so-called <span style='font-weight: bold;'>beta function</span>. However, this equation only generates how <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_86.png" alt="NucParPhys_86.png" width="32" height="25" style="vertical-align:middle" /></span></span> varies, i.e. we can only get the relationship between <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_87.png" alt="NucParPhys_87.png" width="56" height="25" style="vertical-align:middle" /></span></span> and some reference value <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_88.png" alt="NucParPhys_88.png" width="63" height="25" style="vertical-align:middle" /></span></span>. Concretely, the solution looks like
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_89.png" alt="NucParPhys_89.png" width="340" height="55" style="vertical-align:middle" />
</p>

<p class="Text">
 It is important to notice that <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_90.png" alt="NucParPhys_90.png" width="32" height="25" style="vertical-align:middle" /></span></span> increases as the energy scale <span><em>&mu;</em></span> increases. A theory with this property is described as <span style='font-weight: bold;'>infrared free</span>, and the perturbation theory becomes more and more accurate at low energies (or large distances).
</p>



<p class="Text">
 Things become different in Quantum Chromodynamics (QCD). As a non-Abelian gauge theory, the one-loop correction consists not only of the virtual particle-antiparticle pairs, but also the self-coupling of gluons as well. The responsible diagrams are shown as follows.
</p>



<p class="Figure">
 <br /><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_91.gif" alt="NucParPhys_91.gif" width="293" height="158" style="vertical-align:middle" /></span></span><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_92.gif" alt="NucParPhys_92.gif" width="338" height="160" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>6</span>&nbsp;&nbsp;&nbsp;One-loop Correction of QCD<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)
</p>



<p class="Text">
 The existence of a second possibility brings all the differences. Instead of creating a shield around the charge, the self-coupling produces an anti-screening effect, i.e. the interaction becomes even stronger at long distances. Quantitatively, the beta function of QCD is
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_93.png" alt="NucParPhys_93.png" width="237" height="51" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_94.png" alt="NucParPhys_94.png" width="19" height="25" style="vertical-align:middle" /></span></span> is the number of flavours participating the interaction. Notice that this beta function is negative, which indicates that the anti-screening effect overcomes the screening and makes the overall strong interaction stronger at long distances. A theory with a negative beta function is described as <span style='font-weight: bold;'>asymptotic free</span>. 
</p>



<p class="Subsection">
 Weak Interaction
</p>



<p class="Text">
 The weak interaction is a fundamental interaction mediated by <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_95.png" alt="NucParPhys_95.png" width="25" height="25" style="vertical-align:middle" /></span></span> and <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_96.png" alt="NucParPhys_96.png" width="19" height="25" style="vertical-align:middle" /></span></span> bosons. Unlike the electromagnetic and strong interaction, the weak interaction will not preserve the flavours. Therefore, all the processes which include flavour changes will be initiated by weak decay.
</p>



<p class="Text">
 Both leptons and quarks couple with the <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_97.png" alt="NucParPhys_97.png" width="25" height="25" style="vertical-align:middle" /></span></span>, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_98.png" alt="NucParPhys_98.png" width="19" height="25" style="vertical-align:middle" /></span></span> bosons. Moreover, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_99.png" alt="NucParPhys_99.png" width="19" height="25" style="vertical-align:middle" /></span></span> has zero electric charge. Therefore, the following context will be arranged by an order of (1) <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_100.png" alt="NucParPhys_100.png" width="25" height="25" style="vertical-align:middle" /></span></span> vertices of leptons and lepton mixing, (2) <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_101.png" alt="NucParPhys_101.png" width="25" height="25" style="vertical-align:middle" /></span></span> vertices with quarks and quark flavour mixing, (3) <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_102.png" alt="NucParPhys_102.png" width="19" height="25" style="vertical-align:middle" /></span></span> vertices.
</p>



<p class="Text">
 The<span style='font-weight: bold;'> weak decay of leptons</span> is similar for all generations of particles. There are two major <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_103.png" alt="NucParPhys_103.png" width="25" height="25" style="vertical-align:middle" /></span></span> decay vertices shown as follows. The <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_104.png" alt="NucParPhys_104.png" width="25" height="25" style="vertical-align:middle" /></span></span> particles carry electric charges and thus will convert <span><span>&#8467;=e,&mu;,&tau;</span></span> to its accompanied neutrinos. 
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_105.gif" alt="NucParPhys_105.gif" width="359" height="164" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>7</span>&nbsp;&nbsp;&nbsp;Weak Decay of Leptons<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)
</p>



<p class="Text">
 The eigenstates of the weak decay are usually not the same as the neutrino creation and annihilation operator eigenstates. Therefore, neutrino mixing occurs. The actual state generated by weak decay will then be
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_106.png" alt="NucParPhys_106.png" width="236" height="75" style="vertical-align:middle" />
</p>

<p class="Text">
 It is now known that the neutrinos have small masses, and they are different for different neutrinos. Therefore, neutrinos with the same energy possess different momenta, and cause the difference in phase. The distance to show this difference is 
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_107.png" alt="NucParPhys_107.png" width="162" height="29" style="vertical-align:middle" />
</p>

<p class="Text">
 The magnitude of the mass difference is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_108.png" alt="NucParPhys_108.png" width="135" height="28" style="vertical-align:middle" /></span></span>. So a typical neutrino with energy greater than <span><em>1</em>MeV</span> takes over <span><em>1</em>km</span> to show an observable difference in phase. Thus, the experiments are usually done in the vicinity of a nuclear reactor.
</p>



<p class="Text">
 The <span style='font-weight: bold;'>weak decay of quarks</span> can be derived similarly to that of the leptons. Hence, the weak decay vertices of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_109.png" alt="NucParPhys_109.png" width="25" height="25" style="vertical-align:middle" /></span></span> for the first two quark generations are shown as follows. Note that the electric charge flow of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_110.png" alt="NucParPhys_110.png" width="25" height="25" style="vertical-align:middle" /></span></span> is often omitted.
</p>



<p class='Figure' style='text-align: center;'>
 <span class='InputInline' style='text-align: center;'><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_111.gif" alt="NucParPhys_111.gif" width="710" height="163" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>8</span>&nbsp;&nbsp;&nbsp;Weak Decay of Quarks<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)
</p>



<p class="Text">
 If only the above four vertices exist, then the weak interaction will preserve quark generations. However, it does not. This fact triggers the quark mixing. Similar to the neutrino mixing, the quarks in different generations also mix
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_112.png" alt="NucParPhys_112.png" width="222" height="75" style="vertical-align:middle" />
</p>

<p class="Text">
 Therefore, processes such as <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_113.png" alt="NucParPhys_113.png" width="85" height="25" style="vertical-align:middle" /></span></span> may exist. The <span style='font-weight: bold;'>CKM matrix</span> can be regarded as a 3D rotation matrix. The first two generations of quarks are particularly intriguing, since they are much lighter. Therefore, for <span><em>d</em></span> and <span><em>s</em></span> quark, there is
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_114.png" alt="NucParPhys_114.png" width="247" height="48" style="vertical-align:middle" />
</p>

<p class="Text">
 The angle <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_115.png" alt="NucParPhys_115.png" width="18" height="25" style="vertical-align:middle" /></span></span> is the so-called <span style='font-weight: bold;'>Cabibbo angle</span>. This angle is very small, around <span>13<em>&deg;</em></span>. On the contrary, the mixing angle of neutrinos can be as high as <span>45<em>&deg;</em></span>. The quark mixing scheme enables vertices by shuffling the <span><em>d</em></span>, <span><em>s</em></span>, <span><em>b</em></span> quark in the shown vertices.
</p>



<p class="Text">
 The weak decay mediated by neutral current (<span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_116.png" alt="NucParPhys_116.png" width="19" height="25" style="vertical-align:middle" /></span></span> particle) is a relatively different sort of weak decay. In Electroweak Unified Theory, the <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_117.png" alt="NucParPhys_117.png" width="19" height="25" style="vertical-align:middle" /></span></span> particle is created by a field being a mix of <span>SU<em>(</em><em>2</em><em>)</em></span> gauge field and <span><span><span style='font-style: normal;'>U</span>(1)</span></span> gauge field. Typical vertices include
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_118.gif" alt="NucParPhys_118.gif" width="562" height="163" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>9</span>&nbsp;&nbsp;&nbsp;Neutral Weak Decays<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)
</p>



<p class="Text">
 where <span><em>q</em></span> represents any quarks. The coupling strength of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_119.png" alt="NucParPhys_119.png" width="19" height="25" style="vertical-align:middle" /></span></span> particle is common to all flavours. Therefore, there is no mixing mechanism, which indicates that the weak decay by <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_120.png" alt="NucParPhys_120.png" width="19" height="25" style="vertical-align:middle" /></span></span> preserves particle flavours. This feature resembles very much the electromagnetic interaction. And thus the processes mediated by photons can also be mediated by weak <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_121.png" alt="NucParPhys_121.png" width="19" height="25" style="vertical-align:middle" /></span></span> decay.
</p>



<p class="Subsection">
 Discrete C,P Violation
</p>



<p class="Text">
 The parity and charge conjugation symmetry are broken by weak interaction. In short, this is essentially the result of the asymmetry of chirality (or helicity) of particles participating the weak interaction. This section will discuss the chirality (and helicity) first, followed by an illustration of its consequences on parity violation.
</p>



<p class="Text">
 The <span style='font-weight: bold;'>chirality</span> is an intrinsic property of the spin-1/2 fermions. There are in general three types of spin-1/2 fermions &mdash; <span style='font-weight: bold;'>left-handed spinor</span> <span><span>(1/2,0)</span></span>, <span style='font-weight: bold;'>right-handed spinor</span> <span><span>(0,1/2)</span></span> and <span style='font-weight: bold;'>Dirac spinor</span> <span><span>(1/2,0)&#62431;(0,1/2)</span></span>. Chirality refers to this left- and right-handed property. The chiral spinors can be told by applying the projection operator
</p>



<p class="DisplayFormula">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_122.png" alt="NucParPhys_122.png" width="501" height="50" style="vertical-align:middle" />
</p>

<p class="Text">
 The eigenspinor of <span class="DisplayFormulaInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_123.png" alt="NucParPhys_123.png" width="32" height="22" style="vertical-align:middle" /></span></span> and <span class="DisplayFormulaInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_124.png" alt="NucParPhys_124.png" width="40" height="25" style="vertical-align:middle" /></span></span> will be left- and right-handed respectively. In addition, Dirac spinor is a mixture of left- and right-handed spinor, and can be decomposed into a left- and a right-handed component. 
</p>



<p class="Text">
 The <span style='font-weight: bold;'>helicity</span> is the projection of the particle spin onto the direction of momentum. The spin vector <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_125.png" alt="NucParPhys_125.png" width="13" height="27" style="vertical-align:middle" /></span></span> is always studied by its magnitude <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_126.png" alt="NucParPhys_126.png" width="18" height="25" style="vertical-align:middle" /></span></span> and z-component <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_127.png" alt="NucParPhys_127.png" width="17" height="25" style="vertical-align:middle" /></span></span>. Set the z-axis as the direction of the particle momentum. The possible value of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_128.png" alt="NucParPhys_128.png" width="17" height="25" style="vertical-align:middle" /></span></span> will be <span><span>+<span class="script">h</span>/2</span></span> and <span><span>-<span class="script">h</span>/2</span></span>, which corresponds to the helicity being <span><em>+</em><em>1</em></span> and <span><em>-</em><em>1</em></span>.
</p>



<p class="Text">
 The helicity and the chirality coincide with each other for massless particles. Concretely, the left-handed massless particle has a helicity of <span><em>-</em><em>1</em></span>, while that of a right-handed one is <span><em>+</em><em>1</em></span>. However, this is not true for the massive particles. Massive particles move at a speed lower than light speed. So a Lorentz transformation to a frame moving faster than the particle will reverse the helicity.
</p>



<p class="Text">
 The parity violation of weak interaction can be spotted by the following fact: only <span style='font-weight: bold;'>left-handed fermion</span> and <span style='font-weight: bold;'>right-handed anti-fermion</span> participate the weak interaction. The parity will exchange the chirality while the charge conjugation reverses the fermion and the anti-fermion. Therefore, both parity and charge conjugation are violated in weak interaction.
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_129.gif" alt="NucParPhys_129.gif" width="183" height="174" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>10</span>&nbsp;&nbsp;&nbsp;Parity and Charge Conjugation of Neutrinos<br />(Adapted by Zhang Chang-kai from Martin (2009).)
</p>



<p class="Text">
 However, it can be observed that a combination of parity and charge conjugation, i.e. CP, will turn a left-handed fermion to a right-handed anti-fermion. Therefore, the weak interaction should possess <span style='font-weight: bold;'>CP invariance</span>. Nonetheless, the CP invariance is also slightly violated when the flavour mixing occurs. In this case, weak interaction only preserves the weakest CPT symmetry.
</p>



<p class="Subsection">
 Light Hadron Multiplets
</p>



<p class="Text">
 The <span><em>u</em></span>, <span><em>d</em></span>, <span><em>s</em></span> quark are much lighter than the other three quarks, and thus are much easier to produce. Also, their mass difference is small compared to the mesons and baryons they form. So mass is not a crucial parameter for these mesons and baryons, and we can group them into &ldquo;supermultiplets&rdquo; according to their quantum numbers.
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_130.gif" alt="NucParPhys_130.gif" width="584" height="293" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>11</span>&nbsp;&nbsp;&nbsp;Mesons and Spin-1/2 Baryons Supermultiplets<br />(Adapted by Zhang Chang-kai from Martin (2009).)
</p>



<p class="Text">
 The above figure shows the <span><em>J</em><em>=</em><em>1</em></span> meson nonet (9 mesons) and the <span><span>J=1/2</span></span> baryon octet (8 baryons). The content of the particle can be deduced from the quantum numbers. For example, for <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_131.png" alt="NucParPhys_131.png" width="21" height="25" style="vertical-align:middle" /></span></span> meson, there is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_132.png" alt="NucParPhys_132.png" width="145" height="25" style="vertical-align:middle" /></span></span>, which leads to a <span><em>u</em></span> quark and an <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_133.png" alt="NucParPhys_133.png" width="8" height="25" style="vertical-align:middle" /></span></span> anti-quark. The only exceptions are the three <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_134.png" alt="NucParPhys_134.png" width="102" height="25" style="vertical-align:middle" /></span></span> mesons. They are the combination of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_135.png" alt="NucParPhys_135.png" width="22" height="25" style="vertical-align:middle" /></span></span>, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_136.png" alt="NucParPhys_136.png" width="25" height="25" style="vertical-align:middle" /></span></span>, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_137.png" alt="NucParPhys_137.png" width="16" height="25" style="vertical-align:middle" /></span></span>. Similar deduction also holds for baryons. For example, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_138.png" alt="NucParPhys_138.png" width="20" height="25" style="vertical-align:middle" /></span></span> baryon has <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_139.png" alt="NucParPhys_139.png" width="62" height="25" style="vertical-align:middle" /></span></span>, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_140.png" alt="NucParPhys_140.png" width="111" height="25" style="vertical-align:middle" /></span></span>. For baryons, <span><em>B</em><em>=</em><em>1</em></span>. So <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_141.png" alt="NucParPhys_141.png" width="52" height="25" style="vertical-align:middle" /></span></span>. Thus, it must contain a <span><em>u</em></span> quark and two <span><em>s</em></span> quarks.
</p>



<p class='Figure' style='text-align: center;'>
 <span class='InputInline' style='text-align: center;'><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_142.gif" alt="NucParPhys_142.gif" width="423" height="436" style="vertical-align:middle" /></span></span><br /><br />Figure 12&nbsp;&nbsp;&nbsp;Spin-3/2 Baryons Supermultiplets<br />(Adapted by Zhang Chang-kai from Martin (2009).)
</p>



<p class="Text">
 Three quarks can also form <span><span>J=3/2</span></span> baryons. This angular momentum indicates that the three quarks are totally symmetric, which enables particles like <span><em>u</em><em></em><em>u</em><em></em><em>u</em></span>, <span><em>d</em><em></em><em>d</em><em></em><em>d</em></span> and <span><em>s</em><em></em><em>s</em><em></em><em>s</em></span>. These baryons form a decuplet (10 baryons), shown as the lowest layer in the above pyramid. Particularly, the baryons consisting of three <span><em>s</em></span> quarks, i.e. <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_143.png" alt="NucParPhys_143.png" width="23" height="25" style="vertical-align:middle" /></span></span>, decay as
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_144.gif" alt="NucParPhys_144.gif" width="414" height="232" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>13</span>&nbsp;&nbsp;&nbsp;Decay of <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_145.png" alt="NucParPhys_145.png" width="24" height="22" style="vertical-align:middle" /></span></span> and Subsequent Decays<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)
</p>



<p class="Text">
 In 1964, particle physicists in Brookhaven National Laboratory happened to capture all the above particle reactions within one bubble chamber photograph. [V. E. Barnes et al., PRL 12 (1964) 204] This is one of the most famous photographs in the history of Particle Physics.
</p>



<p class='Figure' style='text-align: center;'>
 <span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_146.gif" alt="NucParPhys_146.gif" width="80%" height="auto" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>14</span>&nbsp;&nbsp;&nbsp;<span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_147.png" alt="NucParPhys_147.png" width="24" height="22" style="vertical-align:middle" /></span></span> Decay in Bubble Chamber<br />(Source: V. E. Barnes et al. (1964))
</p>



<p class="Text">
 Heavier quarks, like <span><em>c</em></span> quark, can form baryons with other light quarks. The structure is shown as a pyramid. Also, heavy quarks like <span><em>c</em></span>, <span><em>b</em></span> quark can form mesons. However, since the typical size of hadrons is <span><em>1</em>fm</span>, the typical momentum will be <span><span>p&sim;<span class="script">h</span>c/1fm&sim; 200MeV</span></span>. This is much smaller than the mass of the hadron. So these heavy mesons behave like positronium, and hence known as &ldquo;quarkonia&rdquo;.
</p>



<p class="Text">
 The heaviest quark, <span><em>t</em></span> quark, never forms hadrons. This is because the lifetime of <span><em>t</em></span> quark is around <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_148.png" alt="NucParPhys_148.png" width="54" height="25" style="vertical-align:middle" /></span></span>, which is smaller than the typical time within a hadron, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_149.png" alt="NucParPhys_149.png" width="154" height="25" style="vertical-align:middle" /></span></span>.
</p>



<p class="Subsection">
 Weak CP Violation
</p>



<p class="Text">
 For the weak interaction within the two generations of particles, the C, P symmetry are individually violated, but their combination CP is preserved. However, if the interaction involves three or more generations, the particle mixing will produce the CP violation.
</p>



<p class="Text">
 For three particle generations, the mixing matrix will be a unitary 3&times;3 matrix. This matrix can be parameterized by 9 independent parameters, including 3 mixing angles and 6 phases coming from the 3 particle eigenstate (e.g. <span><em>u</em><em>,</em><em>d</em><em>,</em><em>s</em></span>) and the 3 weak eigenstate (e.g. <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_150.png" alt="NucParPhys_150.png" width="66" height="25" style="vertical-align:middle" /></span></span>). However, these phases are unobservable except for an overall phase. So the mixing matrix can in fact parameterized by only 4 independent parameters. 
</p>



<p class="Text">
 The additional phase brings the time reversal violation, since a time reversal will reverse initial and final state which differs in a complex conjugate. On the other hand, the CPT invariance is enforced for current theories. So there must be a CP violation to compensate the T violation. 
</p>



<p class="Subsection">
 Mass and Higgs Mechanism
</p>



<p class="Text">
 In Standard Model, all three fundamental interactions are described by gauge theories. However, an essential trait of the gauge theory is that gauge bosons should be massless, in order to preserve gauge symmetry. This is true for electromagnetic and strong interaction, as photons and gluons are strictly massless. However, this is not true for <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_151.png" alt="NucParPhys_151.png" width="46" height="25" style="vertical-align:middle" /></span></span> bosons. So there must be an explanation this mass.
</p>



<p class="Text">
 The story begins with a complex <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_152.png" alt="NucParPhys_152.png" width="21" height="25" style="vertical-align:middle" /></span></span> gauge theory. Usually, the Lagrangian of a&nbsp;&nbsp;complex <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_153.png" alt="NucParPhys_153.png" width="21" height="25" style="vertical-align:middle" /></span></span> gauge theory can be written as
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_154.png" alt="NucParPhys_154.png" width="430" height="50" style="vertical-align:middle" />
</p>

<p class="Text">
 Parameter <span><em>m</em></span> is traditionally the mass of the scalar field and thus <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_155.png" alt="NucParPhys_155.png" width="53" height="25" style="vertical-align:middle" /></span></span>. The potential is shown in the left figure below. However, consider now <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_156.png" alt="NucParPhys_156.png" width="53" height="25" style="vertical-align:middle" /></span></span>. This generates a very different theory, and <span><em>m</em></span> is no longer the mass. The potential will be like the right figure below.
</p>



<p class="Figure">
 <span class='TextInline' style='text-align: center;'><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_157.gif" alt="NucParPhys_157.gif" width="723" height="314" style="vertical-align:middle" /></span></span><br /><br />Figure 15&nbsp;&nbsp;&nbsp;Potentials before and after Symmetry Breaking<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)<br />
</p>



<p class="Text">
 It is discovered that <span><em>&phi;</em><em>=</em><em>0</em></span> is no longer the lowest energy position of the potential. Instead, the ground state will be a circle in the complex plane. Therefore, <span><em>&phi;</em></span> is not suitable for the quantization, as a non-zero vacuum expectation value will give a non-zero overlap of vacuum and one-particle state. An appropriate field redefinition is
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_158.png" alt="NucParPhys_158.png" width="299" height="58" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><em>v</em></span> is a constant, <span><em>&rho;</em><em>(</em><em>x</em><em>)</em></span> is the field we want and <span><em>&chi;</em><em>(</em><em>x</em><em>)</em></span> is an additional Goldstone boson. This additional boson is not a desirable thing. However, we also notice that the last factor with the Goldstone boson may be cancelled by a local gauge transformation. Therefore, adding local gauge symmetry will validate this theory. Moreover, the Lagrangian is now
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_159.png" alt="NucParPhys_159.png" width="374" height="50" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><em>g</em></span> is the coupling constant. Now we see that the gauge field possesses a mass of <span><span>M=gv</span></span>. This is the so-called <span style='font-weight: bold;'>Higgs mechanism</span>, i.e. use the local gauge transformation to cancel the Goldstone boson and at the same time gives the gauge field mass. The scalar field whose ground state breaks a gauge symmetry is called a <span style='font-weight: bold;'>Higgs field</span>.
</p>



<p class="Text">
 
</p>



<p class="Section">
 Nuclear Phenomenology
</p>



<p class="Text">
 The nuclear phenomenology explains the nuclear experiments without considering structures inside the nucleon. This section will include (1) strong nuclear force, (2) charge distribution &amp; nuclear size, (3) models of nucleus structure, (4) &alpha;-decay and &beta;-decay, (5) fusion &amp; fission.
</p>



<p class="Subsection">
 Strong Nuclear Force
</p>



<p class="Text">
 The strong nuclear force is the force that binds the nucleons to nuclei. It is important to distinguish the strong nuclear force with strong force, as their nature is very much disparate. The strong force binds quarks to hadrons, and is mediated by gluons. For strong nuclear force, the colourlessness of nucleons makes gluon exchange implausible. So it must be mediated by some other particles.
</p>



<p class="Text">
 <span style='font-weight: bold;'>At short distances</span>, nucleons may exchange their quarks. These quarks resemble the valence electrons in a covalent bond. Nonetheless, to keep nucleons colourless, shared quarks should have the same colour. This reduces the effective force and cannot explain the strength observed in experiments.
</p>



<p class="Text">
 <span style='font-weight: bold;'>At long distances</span>, one exchanged quark can annihilate with a one of the (anti)quark in a randomly emerged <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_160.png" alt="NucParPhys_160.png" width="22" height="25" style="vertical-align:middle" /></span></span> pair, and form a meson with the other exchanged quark. Therefore, the strong nuclear force is mediated by mesons. The most common one will be the pion, whose mass fits with the range of force (<span><span>&sim;1.4fm</span></span>) very well.
</p>



<p class="Text">
 <span style='font-weight: bold;'>At intermediate distances</span>, strong nuclear force can be mediated by multiple pions exchange or heavier mesons. In addition, it is also suggested that pion exchange can form excited states like <span><em>&Delta;</em></span> particles in this case.
</p>



<p class="Text">
 Overall, the strong nuclear force is the effective force of all these interactions. It behaves as an attraction as the distance between nucleons is large, and repulsion when the distance is small. The exact mechanism of the repulsion is yet unknown. It is suspected that the <span><em>&omega;</em></span> meson exchange and quark Pauli principle may be the culprit.
</p>



<p class="Text">
 In addition, the strong nuclear force is <span style='font-weight: bold;'>charge symmetric</span>, i.e. <span><span>pp=nn</span></span>, and <span style='font-weight: bold;'>almost charge independent</span>, i.e. <span><span>pp=nn&asymp;pn</span></span>. This is because <span><em>p</em><em></em><em>p</em></span> and <span><em>n</em><em></em><em>n</em></span> are largely mediated by <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_161.png" alt="NucParPhys_161.png" width="23" height="25" style="vertical-align:middle" /></span></span> and <span><em>p</em><em></em><em>n</em></span> by <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_162.png" alt="NucParPhys_162.png" width="24" height="25" style="vertical-align:middle" /></span></span> which is <span><em>5</em>MeV</span> heavier. On the other hand, it is <span style='font-weight: bold;'>spin dependent</span>. Finally, the strong nuclear force <span style='font-weight: bold;'>saturates</span>, i.e. a nucleon only interacts with nucleons nearby.
</p>



<p class="Subsection">
 Charge Distribution &amp; Nuclear Sizes
</p>



<p class="Text">
 The charge distribution in a small region is typically studied by bombarding the target with high energy particles, and measure the differential cross section of the interaction. For charge distribution of nuclei, this is achieved by electron scattering. The derivation starts with the simplest model of <span style='font-weight: bold;'>Rutherford scattering</span>
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_163.png" alt="NucParPhys_163.png" width="196" height="61" style="vertical-align:middle" />
</p>

<p class="Text">
 The Rutherford scattering treats the projectile and target as point-like particles and thus cannot be used to study the distribution of charge. Therefore, several modifications are needed. Considering the electron spin leads to the <span style='font-weight: bold;'>Mott cross section</span>, upon which a <span style='font-weight: bold;'>form factor</span> <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_164.png" alt="NucParPhys_164.png" width="42" height="28" style="vertical-align:middle" /></span></span> will make it realistic
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_165.png" alt="NucParPhys_165.png" width="457" height="55" style="vertical-align:middle" />
</p>

<p class="Text">
 where <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_166.png" alt="NucParPhys_166.png" width="38" height="25" style="vertical-align:middle" /></span></span> is the charge distribution and <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_167.png" alt="NucParPhys_167.png" width="13" height="25" style="vertical-align:middle" /></span></span> the momentum transfer. Notice that the form factor is simply a Fourier transform of the charge distribution. This formula allows us to deduce the charge distribution via the experimental cross section. 
</p>



<p class="Text">
 Particularly, we can extract the mean-square charge radius <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_168.png" alt="NucParPhys_168.png" width="28" height="29" style="vertical-align:middle" /></span></span> of the target. For medium and heavy nuclei, it is found to be proportional to <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_169.png" alt="NucParPhys_169.png" width="29" height="25" style="vertical-align:middle" /></span></span>, where <span><em>A</em></span> is the atomic number. The nucleus is often approximated by a homogeneous hard sphere whose radius is linear to <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_170.png" alt="NucParPhys_170.png" width="28" height="29" style="vertical-align:middle" /></span></span>. Thus, we deduce the <span style='font-weight: bold;'>nuclear radius</span> as
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_171.png" alt="NucParPhys_171.png" width="131" height="25" style="vertical-align:middle" />
</p>

<p class="Text">
 The coefficient 1.21 comes from the fit to a range of data, e.g. <span>55<em>&le;</em><em>A</em><em>&le;</em>209</span> given in Barett and Jackson (1977). A further insight can be seen if we take the cube of both sides. In that case, the volume of the nucleus will be proportional to the number of nucleons, which implies that nucleons can be approximated by some ball with a fixed volume.
</p>



<p class="Subsection">
 Mass Spectroscopy
</p>



<p class="Text">
 The mass is one of the fundamental properties of a particle. A great deal of effort has been put into measuring the mass of either stable or unstable nuclei. It is hither presented two typical methods of mass spectroscopy &mdash; deflection spectrometer and penning trap.
</p>



<p class="Subsubsection">
 Deflection Spectrometer
</p>



<p class="Text">
 Deflection spectrometer is one of the simplest ways to measure the mass-to-charge ratio. Usually, the deflection spectrometer consists of a velocity selector followed by a homogeneous magnetic field. A schematic setup is shown in the following figure.
</p>



<p class='Figure' style='text-align: center;'>
 <br /><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_172.gif" alt="NucParPhys_172.gif" width="520" height="421" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>16</span>&nbsp;&nbsp;&nbsp;Deflection Spectrometer<br />(Adapted by Zhang Chang-kai from Martin (2009).)<br />
</p>



<p class="Text">
 The ion beam first passes through a velocity selector which is filled with both an electric and a magnetic field. This picks the particles with velocity <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_173.png" alt="NucParPhys_173.png" width="69" height="25" style="vertical-align:middle" /></span></span>. These particles then go into the second region with only a uniform magnetic field and hit the detector. 
</p>



<p class="Text">
 Utilizing the detector in the end can we extract the radius of the circular motion (called cyclotron motion). It can be shown that the radius of cyclotron motion is <span><span>R=mv/qB</span></span>. Therefore, the charge-mass ratio can be computed from <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_174.png" alt="NucParPhys_174.png" width="131" height="25" style="vertical-align:middle" /></span></span>.
</p>



<p class="Subsubsection">
 Penning Trap
</p>



<p class="Text">
 Penning trap is a particle trap which can also be used to measure the charge-mass ratio. The Penning trap consists of a well-shaped electric quadrupole field and a uniform magnetic field. Without applying the electric field, charged particles undergo the cyclotron motion as usual. The electric field confines the particles along the axial direction and causes the particles to drift along a circle (called magnetron motion). The frequencies of the cyclotron and magnetron motion yield the charge-mass ratio.
</p>



<p class="Figure">
 <br /><span class="InputInline"><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_175.gif" alt="NucParPhys_175.gif" width="564" height="300" style="vertical-align:middle" /></span></span><br /><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>17</span>&nbsp;&nbsp;&nbsp;Penning Trap and Particle Trajectory<br />(Copyright (2018) Zhang Chang-kai. All rights reserved.)<br />
</p>



<p class="Text">
 The Penning trap is renowned for the high accuracy. Usually, the relative error of measurement can be as low as <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_176.png" alt="NucParPhys_176.png" width="36" height="25" style="vertical-align:middle" /></span></span>. Also, only a small number of particles (usually &sim;100) are needed for a measurement, and the overall time required can be as short as <span><span>0.1<span style='font-style: normal;'>s</span></span></span>. Therefore, Penning trap can be used to measure the charge-mass ratio of very short-lived particles.
</p>



<p class="Subsection">
 Nuclei and Nuclear Masses
</p>



<p class="Text">
 A nucleus consists of neutrons and protons, so the number of them can be used to identify different nucleus. Concretely, a nucleus is labelled by (1) <span style='font-weight: bold;'>atomic number</span> <span><em>Z</em></span>: the number of protons; and (2) <span style='font-weight: bold;'>mass number</span> <span><em>A</em></span>: the number of nucleons. The number of neutrons <span><em>N</em></span> can thus be deduced as <span><span>N=A-Z</span></span>.
</p>



<p class="Text">
 Nuclei with the same <span><em>A</em></span> but different <span><em>Z</em></span> are called <span style='font-weight: bold;'>isotopes</span>. They are essential in nuclear radiations which emit or absorb neutrons. Nuclei with the same <span><em>Z</em></span> but different <span><em>A</em></span>&nbsp;&nbsp;are called <span style='font-weight: bold;'>isobars</span>. They are essential in <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_177.png" alt="NucParPhys_177.png" width="21" height="25" style="vertical-align:middle" /></span></span>-decays, which flips the neutrons and protons.
</p>



<p class="Text">
 The stable nuclei lie approximately around the line of <span><em>N</em><em>&asymp;</em><em>Z</em></span>, and any deviation (either by adding extra neutrons or protons) will decrease the stability of the nuclei, until the nuclei reach a <span style='font-weight: bold;'>drip line</span> where no extra neutrons or protons can be bound. The stability of the nuclei and the decay of the unstable nuclei are the central topics in Nuclear Physics.
</p>



<p class="Text">
 There are two kinds of mass definitions used in Nuclear Physics, the nuclear mass and the atomic mass. The <span style='font-weight: bold;'>nuclear mass</span> of an atom is the mass of the nucleus; while the <span style='font-weight: bold;'>atomic mass</span> refers to the mass of the atom, including the mass carried by the electrons. 
</p>



<p class="Text">
 The <span style='font-weight: bold;'>binding energy</span> is the energy difference between the individual particles and their bound states. Concretely, the binding energy of the atom is defined as
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_178.png" alt="NucParPhys_178.png" width="326" height="29" style="vertical-align:middle" />
</p>

<p class="Text">
 The <span style='font-weight: bold;'>mass excess</span> is the mass difference between the mass of the atom and the expected mass calculated from the atomic mass unit <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_179.png" alt="NucParPhys_179.png" width="166" height="25" style="vertical-align:middle" /></span></span>, i.e.
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_180.png" alt="NucParPhys_180.png" width="224" height="22" style="vertical-align:middle" />
</p>

<p class="Text">
 The reaction <span style='font-weight: bold;'><em>Q</em></span><span style='font-weight: bold;'>-value</span> is the energy released in a typical nuclear reaction. It can be extracted from the mass difference between initial particles and final products, i.e.
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_181.png" alt="NucParPhys_181.png" width="168" height="33" style="vertical-align:middle" />
</p>

<p class="Text">
 Logically, we need to use the nuclear mass. However, the nuclear mass is very much hard to obtain in practice, and we hope to replace it with atomic mass. The only discrepancy will be the difference in binding energies of the electrons. However, this contribution is small (<span><span>&lt;100keV</span></span>) compared to the nuclear mass <span><span>&sim;100MeV</span></span>, and thus is usually ignored.
</p>



<p class="Subsection">
 Liquid Drop Model
</p>



<p class="Text">
 The stability of the nuclei depends heavily on the binding energy, or binding energy per nucleon <span><em>B</em><em>/</em><em>A</em></span> to be more precise. There are currently no essential theories which can explain the behaviour of <span><em>B</em><em>/</em><em>A</em></span>. So we can only rely on the phenomenological model and empirical formulas, and the liquid drop model is the most basic one of them.
</p>



<p class="Text">
 Liquid drop model arises when noticing two similarities between the liquid drop and the nucleus: (1) their mass density is generally uniform (assuming nucleons are spherical balls); (2) the interaction energy is generally proportional to their mass (<span><em>B</em><em>/</em><em>A</em></span> falls in a small range of <span><span>7MeV&sim;9MeV</span></span> and can be regarded as constants).
</p>



<p class="Figure">
 <span class="InputInline"><span>
 	<img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_182.gif" alt="NucParPhys_182.gif" width="90%" height="auto" style="vertical-align:middle">
 </span></span><br /><span style='font-weight: bold;'>Figure </span><span style='font-weight: bold;'>18</span>&nbsp;&nbsp;&nbsp;Semi-empirical Mass Formula<br />(Source: <span><a href="https://commons.wikimedia.org/wiki/File:Liquid_drop_model.svg"><span class="HyperlinkInline">https://commons.wikimedia.org)</span></a></span>
</p>



<p class="Text">
 The liquid drop model (plus some properties from Fermi gas model) gives rise to the well-renowned <span style='font-weight: bold;'>Semi-empirical Mass Formula</span>, or SEMF. SEMF consists of five terms with physical origins, but each term is accompanied by a coefficient to be determined by the fitting of the experimental data later (which makes it semi-empirical). 
</p>



<p class="DisplayFormulaNumbered">
 <img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_183.png" alt="NucParPhys_183.png" width="509" height="57" style="vertical-align:middle" />
</p>

<p class="Text">
 In the above formula, the <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_184.png" alt="NucParPhys_184.png" width="15" height="25" style="vertical-align:middle" /></span></span>s are the proportionality coefficient, <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_185.png" alt="NucParPhys_185.png" width="20" height="25" style="vertical-align:middle" /></span></span> takes 1 if there are an odd number of both neutrons and protons; -1 if both even; and 0 otherwise. The physical origin of the five terms are explained as follows
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Volume term</span>: the first term is the volume term. Due to the saturation of the strong nuclear force, each nucleon experiences approximately the same force and possesses the same energy, which makes the binding energy directly proportional to the number of nucleons.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Surface term</span>: the second term is the surface term. The nucleons on the surface will experience a relatively lower strong nuclear force. This contribution is subtracted by the surface term. Note that the radius of nuclei is <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_186.png" alt="NucParPhys_186.png" width="44" height="24" style="vertical-align:middle" /></span></span> and thus surface <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_187.png" alt="NucParPhys_187.png" width="44" height="24" style="vertical-align:middle" /></span></span>.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Coulomb term</span>: the third term is the Coulomb term, which takes into account the Coulomb forces between the protons. Each proton will be interacting with all the other protons, and the Coulomb force is inversely proportional to the distance.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Asymmetry term</span>: the fourth term is the asymmetry term. This comes from the Fermionic property of the nucleons. Any discrepancies between the number of protons and neutrons will result in a higher kinetic energy and weaken the binding.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Pairing term</span>: the fifth term is the pairing term. If the nucleons come in pairs, they tend to be closer and increase the energy. Therefore, this term carries a <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_188.png" alt="NucParPhys_188.png" width="18" height="24" style="vertical-align:middle" /></span></span> factor to select the pairing situation in the nucleus.
</p>



<p class="Text">
 The Semi-empirical Mass Formula explains the shape of the binding energy per nucleon very well. In practice, it works to about <span><em>1</em>MeV</span> and creates less than 1% of the relative error. This accuracy is good enough for most situations. However, it is not suitable for quantities like the <span><em>Q</em></span>-value as it requires higher accuracy. 
</p>



<p class="Subsection">
 Shell Model
</p>



<p class="Text">
 The Semi-empirical Mass Formula has provided a relatively accurate prediction of the binding energy. However, it can not explain the small fluctuations around the smooth line. Particularly, it cannot explain why there exist some special nuclei that have extra stability. This implies that there are substructures within the nuclei and new phenomenology is needed.
</p>



<p class="Text">
 It has been known in Atomic Physics (and Chemistry) that there exists a set of elements which possess extra chemical stability &mdash; the so-called inert gas. The quantum mechanical origin of this extra stability comes from the shell structure of these elements. The outermost shell is fully filled by the electrons, which is a considerably stable configuration.
</p>



<p class="Text">
 In Nuclear Physics, some nuclei are also found to own extra stability. Experimentally, the number of protons and neutrons in these stable nuclei are found to be one of the following
</p>



<p class='DisplayFormulaNumbered' style='text-align: center;'>
 <span class='DisplayFormulaNumberedInline' style='text-align: Which[AlignmentMarker &gt;= 0.5, right, System`Convert`CSSDump`val$95562 &lt;= -0.5, left, True, center];'><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_189.gif" alt="NucParPhys_189.gif" width="236" height="51" style="vertical-align:middle" /></span></span>
</p>



<p class="Text">
 These numbers are called <span style='font-weight: bold;'>magic numbers</span>. Due to their similarity to the atomic magic numbers, a phenomenological model, the <span style='font-weight: bold;'>shell model</span>, is established based on the shell structure of the nuclei. In shell model, there exists a central potential similar (but not the same as) the Coulomb potential. Besides, the spin-orbit interaction is also considered. As the potential is not a Coulomb potential, angular momentum quantum number <span><em>l</em></span> is not restricted by the principal quantum number <span><em>n</em></span>. This model provides a precise prediction of the magic number, see <span><a href="https://upload.wikimedia.org/wikipedia/commons/e/e5/Shells.png"><span class="HyperlinkInline">Wikipedia</span></a></span> for detailed information.
</p>



<p class="Text">
 Nuclei whose number of either protons or neutrons being one of the magic numbers make a closed shell and obtain extra stability, just as the atoms. Moreover, nuclei whose number of both nucleons are one of the magic numbers (may not be the same) gain even greater stability (called <span style='font-weight: bold;'>doubly magic</span>). An important case is the Helium nuclei <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_190.png" alt="NucParPhys_190.png" width="38" height="27" style="vertical-align:middle" /></span></span> (&alpha;-particle), which plays an essential role in the <span><em>&alpha;</em></span>-decay of heavy nuclei.
</p>



<p class="Text">
 The next to study is the ground state spins and parities. For a closed shell, nucleons pair up and form a <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_191.png" alt="NucParPhys_191.png" width="56" height="25" style="vertical-align:middle" /></span></span> state. The other situation can always be decomposed into a closed shell plus valence nucleons. For a single valence nucleon, the ground state spin and parity are fully controlled by this valence nucleon. For more valence nucleons, especially if both shells are not closed, the situation gets complicated and hard to predict.
</p>



<p class="Subsection">
 Nuclear Reaction
</p>



<p class="Text">
 Nuclear ground states are often unstable. Therefore, they may spontaneously go through some nuclear reaction to reach a more stable state. The tendency of the reaction can be viewed from the binding energy per nucleon. <span><em>B</em><em>/</em><em>A</em></span> increases first and reaches a summit at <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_192.png" alt="NucParPhys_192.png" width="35" height="25" style="vertical-align:middle" /></span></span>, before a gradual decrease as the number of nucleons increases. Thus, nuclei before <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_193.png" alt="NucParPhys_193.png" width="35" height="25" style="vertical-align:middle" /></span></span> tend to join together, while those after tend to break apart. Four types of reactions are hither introduced: (1) <span><em>&alpha;</em></span>-decay, (2) &beta;-decay, (3) fusion, (4) fission. 
</p>



<p class="Subitem">
 <span style='font-weight: bold;'><em>&alpha;</em></span><span style='font-weight: bold;'>-decay</span>: decay that produces <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_194.png" alt="NucParPhys_194.png" width="28" height="24" style="vertical-align:middle" /></span></span>, or <span><em>&alpha;</em></span>-particles. As is seen from the previous section, &alpha;-particles are exceptionally stable. Only a handful of nuclei with <span><em>A</em><em>&lt;</em>208</span> decay in this way, while almost all nuclei with <span><em>A</em><em>&gt;</em>208</span> do. Lifetime varies drastically. Phenomenology includes a central potential well and &alpha;-decay happens through quantum tunnelling.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>&beta;-decay</span>: includes <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_195.png" alt="NucParPhys_195.png" width="18" height="24" style="vertical-align:middle" /></span></span>-decay (<span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_196.png" alt="NucParPhys_196.png" width="109" height="24" style="vertical-align:middle" /></span></span>) and <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_197.png" alt="NucParPhys_197.png" width="18" height="24" style="vertical-align:middle" /></span></span>-decay <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_198.png" alt="NucParPhys_198.png" width="106" height="24" style="vertical-align:middle" /></span></span>. &beta;-decay modifies the type of the nucleons but keeps the total number. Spontaneous &beta;-decay eventually turns the nuclei into its stable isobar (due to the symmetric term in SEMF). Even <span><em>A</em></span> and odd <span><em>A</em></span> nuclei decay disparately due to the paring term.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Fusion</span>: two light nuclei can fuse and form heavier nuclei. This process usually happens for nuclei with <span><em>A</em><em>&lt;</em>56</span>, i.e. before <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_199.png" alt="NucParPhys_199.png" width="31" height="24" style="vertical-align:middle" /></span></span>, because <span><em>B</em><em>/</em><em>A</em></span> before <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_200.png" alt="NucParPhys_200.png" width="31" height="24" style="vertical-align:middle" /></span></span> increases as <span><em>A</em></span> increases, and thus fusion will release energy. Typical fusion includes <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_201.png" alt="NucParPhys_201.png" width="132" height="24" style="vertical-align:middle" /></span></span>. This is the major source that powers most stars.
</p>



<p class="Subitem">
 <span style='font-weight: bold;'>Fission</span>: heavy nuclei (usually beyond <span><em>A</em><em>=</em>225</span>) can break apart into lighter nuclei. Coulomb energy in this case can deform the nuclei and make them unstable. Eventually when <span><em>A</em></span> grows beyond <span><em>=</em>300</span>, the nuclei will fall apart. For heavy nuclei in between, the fission also happens spontaneously through quantum tunnelling.
</p>



<p class="Text">
 The universe is born with only the light nuclei, and the heavier nuclei are formed through fusion. However, spontaneous fusion should stop at <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_202.png" alt="NucParPhys_202.png" width="35" height="25" style="vertical-align:middle" /></span></span>, since further fusion will absorb energy. Heavy nuclei beyond <span><span><img src="{{ site.url }}/assets/HTMLFiles/NucParPhys_203.png" alt="NucParPhys_203.png" width="35" height="25" style="vertical-align:middle" /></span></span> are created majorly through another mechanism &mdash; <span style='font-weight: bold;'>rapid neutron capture</span>, or <span style='font-weight: bold;'>r-process</span>. Under intense flux of neutrons, nuclei can capture extra neutrons, and protons are subsequently produced through &beta;-decay. This process can happen in the core of collapsing supernova, or merger and break up of neutron-rich matter.
</p>



<p class="Text">
 
</p>



<p class='Text' style='border-left: 0px;border-right: 0px;border-top: 2px;border-bottom: 0px;border-style: solid;border-color: #BFBFBF;margin-left: 24px;margin-right: 16px;margin-top: 1px;margin-bottom: 1px;padding: 0px;'>
  
</p>



<p class="Text">
 This is the end of Basics of Nuclear and Particle Physics. Current version: release-0.3.7.2. Project started January 3, 2018, finished March 31, 2018, last revised March 31, 2018.
</p>






<div style="font-family:Helvetica; font-size:11px; width:100%; border:1px none #999999; border-top-style:solid; padding-top:2px; margin-top:20px;">
 <a href="http://www.wolfram.com/language/" style="color:#000; text-decoration:none;">
  <span style="color:#555555">Created with the Wolfram Language</span> 
 </a>
</div>
</body>

</html>
