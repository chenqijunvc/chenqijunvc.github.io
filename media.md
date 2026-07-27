---
layout: page
title: Media
description: Press coverage, TV interviews, speaking engagements, and industry recognition
background: '/img/bg-about.jpg'
---

<div class="row">
  <div class="col-lg-10 col-md-12 mx-auto">

    <p class="lead">Press coverage, TV interviews, conference speaking, and industry recognition referencing my work.</p>

    {% assign media_items = site.media | sort: 'date' | reverse %}
    {% for item in media_items %}
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">
          <a href="{{ item.external_url | default: item.url | relative_url }}" target="_blank" rel="noopener">{{ item.title }}</a>
          {% if item.media_type == 'tv' %}<span class="badge badge-info ml-2">TV Interview</span>{% endif %}
          {% if item.media_type == 'article' %}<span class="badge badge-secondary ml-2">Press</span>{% endif %}
          {% if item.media_type == 'speaking' %}<span class="badge badge-primary ml-2">Speaking</span>{% endif %}
          {% if item.media_type == 'video' %}<span class="badge badge-success ml-2">Video</span>{% endif %}
          {% if item.media_type == 'event' %}<span class="badge badge-warning ml-2">Event</span>{% endif %}
          {% if item.media_type == 'webinar' %}<span class="badge badge-dark ml-2">Webinar</span>{% endif %}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.outlet }} — {{ item.date | date: '%B %Y' }}</h6>
        {% if item.subtitle %}<p class="card-text">{{ item.subtitle }}</p>{% endif %}
      </div>
    </div>
    {% endfor %}

    <h3 class="mt-5">Industry Recognition</h3>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">PSN Top Guns Manager of the Decade</h5>
        <h6 class="card-subtitle mb-2 text-muted">Q4 2025</h6>
        <p class="card-text">Long-term risk-adjusted performance recognition for the strategies I designed and operated.</p>
        <p class="small text-muted mb-0">Independently calculated ranking data</p>
      </div>
    </div>

  </div>
</div>
