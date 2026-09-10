---
layout: blog
title: "News & Posts"
description: "Non-academic news and posts by Zhang Chang-kai, including thoughts and arguments as well as selected travel records."
---

# News & Posts

<div class="top">
<p>This page shows the non-academic news and posts, including innovative thoughts and arguments as well as selected travel records. For academic works, visit <a href="Exhibition">Exhibition</a>. Comments are welcomed.</p>
</div>

## Recent Posts

<div class="work-list">

  <!-- All Roads Lead to Rome -->
  <article class="work-item">
    <a href="{{ '/All-Roads-Lead-To-Rome' | relative_url }}">
      <h3>All Roads Lead to Rome</h3></a>
    <p>This is a short essay on the bottleneck of contemporary physics. It is argued that well-renowned open questions in various areas in physics all originate from the lack of understanding towards the dynamics in the vicinity of an interaction.</p>
  </article>

  <!-- Two Kinds of Unification -->
  <article class="work-item">
    <a href="{{ '/Two-Unification' | relative_url }}">
      <h3>Two Kinds of Unification</h3></a>
    <p>This is a comment on the thinking regarding a unified theory. It is argued that the simplicity and the applicability are not to be achieved simultaneously. So a possible unified theory can only be more complicated than any existing theories.</p>
  </article>

  <!-- My Road to a Final Theory -->
  <article class="work-item">
    <a href="{{ '/Road-Final-Theory' | relative_url }}">
      <h3>My Road to a Final Theory</h3></a>
    <p>This is a record of my pursue of a final theory during my undergraduate time. It is explained how I gradually gave up the search for a final theory, or more precisely, how I uncovered the mysterious mask over the final theory.</p>
  </article>

</div>

--------------------------------

## Travel Records

<div class="gallery-grid">
{% assign gallery = site.data.gallery | sort: 'date' %}
{% for image in gallery %}
  <article class="gallery-item">
    <a href="{{ image.src }}" class="glightbox image fit thumb" data-gallery="{{ image.place }}" data-title="{{ image.title }}"><img src="{{ image.src }}" alt="{{ image.title }}" /></a>
    <h3>{{ image.name }}</h3>
  </article>
{% assign galleries = site.data.galleries | where: "place", image.place %}
{% for photo in galleries %}
  <a href="{{ photo.src }}" class="glightbox" data-gallery="{{ image.place }}" data-title="{{ photo.title }}" hidden></a>
{% endfor %}
{% endfor %}
</div>
