---
layout: page
wide: true
title: Published Research
description: Authored white papers and research articles on quantitative finance and investing
background: '/img/bg-post.jpg'
---

<div class="row">
  <div class="col-lg-10 col-md-12 mx-auto">

    <div class="mb-4 p-3 bg-light rounded">
      <p class="lead mb-0">Research articles and white papers I authored on quantitative finance, free cash flow investing, portfolio construction, and ETF strategy.</p>
    </div>

    <h3 class="mb-4">Research Articles</h3>

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
