---
layout: page
wide: true
title: Publications
description: Authored research on quantitative finance, active management, factor investing, and ETF strategy
background: '/img/bg-post.jpg'
---

<div class="row">
  <div class="col-lg-10 col-md-12 mx-auto">

    <p class="lead">Research articles and white papers on quantitative finance, free cash flow investing, portfolio construction, and active management evaluation.</p>

    {% for post in site.posts reversed %}
    <article class="mb-4">
      <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
      <p class="small text-muted mb-1">
        {{ post.date | date: '%B %Y' }}
        {% if post.categories.size > 0 %}
          {% for cat in post.categories %}
            <span class="badge badge-primary">{{ cat | replace: '-', ' ' | capitalize }}</span>
          {% endfor %}
        {% endif %}
      </p>
      {% if post.subtitle %}
      <p>{{ post.subtitle }}</p>
      {% endif %}
      <p class="small">{{ post.content | strip_html | truncatewords: 40 }}</p>
    </article>
    {% endfor %}

  </div>
</div>
