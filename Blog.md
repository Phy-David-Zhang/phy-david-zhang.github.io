---
layout: blog
---

# News & Posts

<div class="top">
<p>This page shows the non-academic comments and selected travel records. For academic works, visit <a href="Exhibition">Exhibition</a>. Comments are welcomed.</p>
</div>

## Recent Posts

<div class="row">
<!-- Report on U(1) Gauge Field Theory -->
<div class="list row">
<article class="6u 12u$(xsmall) work-item" style="margin: 0 0 0 1.5em; width: 85%">
<span>
<a href="{{ site.url }}/Two-Unification">
  <h3>Two Kinds of Unification</h3></a>
<p style="font-size: 1em">This is a comment on the thinking regarding a unified theory. It is argued that the simplicity and the applicability are not to be achieved simultaneously. So a possible unified theory can only be more complicated than any existing theories.</p>
</span>
</article>
</div>
<!-- Report on U(1) Gauge Field Theory -->
<div class="list row">
<article class="6u 12u$(xsmall) work-item" style="margin: 0 0 0 1.5em; width: 85%">
<span>
<a href="{{ site.url }}/Road-Final-Theory">
  <h3>My Road to a Final Theory</h3></a>
<p style="font-size: 1em">This is a record of my pursue of a final theory during my undergraduate time. It is explained how I gradually gave up the search for a final theory, or more precisely, how I uncovered the mysterious mask over the final theory.</p>
</span>
</article>
</div>
</div>

--------------------------------

## Travel Records

<div class="blog row">

{% assign gallery = site.data.gallery | sort: 'date' %}

	{% for image in gallery %}
	<article class="6u 12u$(xsmall) blog work-item">
		<a href="{{image.src}}" class="image fit thumb"><img src="{{image.src}}" alt="" /></a>
		<title>{{image.title}}</title>
		<h3>{{image.name}}</h3>
	</article>

	{% assign galleries = site.data.galleries | where: "place", image.place %}

		{% for images in galleries %}
		<article class="6u 12u$(xsmall) blog work-item" style="display: none;">
			<a href="{{images.src}}" class="image fit thumb"><img src="images/bg.jpg" alt="" /></a><title>{{images.title}}</title>
		</article>
		{% endfor %}

	{% endfor %}

</div>
<!--
<ul class="actions">
	<li><a href="#" class="button">Full Portfolio</a></li>
</ul>
-->