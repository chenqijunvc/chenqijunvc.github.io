---
layout: page
title: Media
description: Television interviews and press coverage
background: '/img/bg-about.jpg'
---

<div class="row">
  <div class="col-lg-10 col-md-12 mx-auto">

    <p class="lead">Recorded television interviews, press coverage, and industry recognition. Tier 1 evidence — independently verifiable.</p>

    <h3 class="mb-4">Television & Media</h3>

    {% assign media_items = site.media | sort: 'date' | reverse %}
    {% for item in media_items %}
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">
          <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
          {% if item.media_type == 'tv' %}<span class="badge badge-info ml-2">TV Interview</span>{% endif %}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.outlet }} — {{ item.date | date: '%B %d, %Y' }}</h6>
        {% if item.subtitle %}<p class="card-text">{{ item.subtitle }}</p>{% endif %}
        {% if item.external_url %}<a href="{{ item.external_url }}" class="card-link small" target="_blank">External Link</a>{% endif %}
      </div>
    </div>
    {% endfor %}

    <h3 class="mt-5 mb-4">Industry Recognition</h3>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">PSN Top Guns Manager of the Decade</h5>
        <h6 class="card-subtitle mb-2 text-muted">Q4 2025</h6>
        <p class="card-text">Long-term risk-adjusted performance recognition for the strategy I designed and operated.</p>
        <p class="small text-muted mb-0">Tier 1 — Independently calculated ranking data</p>
      </div>
    </div>

  </div>
</div>
