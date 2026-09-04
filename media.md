---
layout: page
title: Media
seo_title: "Media, Speaking & Press | Vince Chen"
description: "Speaking engagements, interviews, market commentary, and industry recognition referencing Vince Chen's investment work."
background: '/img/bg-about.jpg'
---

<div class="row">
  <div class="col-lg-10 col-md-12 mx-auto">
    <p class="lead">Speaking engagements, interviews, market commentary, and external recognition from my prior investment-management work and ongoing research activity.</p>

    {% assign all_media = site.media | sort: 'date' | reverse %}

    <section class="my-5" aria-labelledby="speaking-media">
      <h2 id="speaking-media">Speaking &amp; interviews</h2>
      <div class="media-list-compact media-list-page">
        {% for item in all_media %}
          {% if item.media_type == 'speaking' or item.media_type == 'tv' or item.media_type == 'video' or item.media_type == 'webinar' or item.media_type == 'event' %}
          <article class="media-row">
            <div class="media-date">{{ item.date | date: '%b %Y' }}</div>
            <div class="media-copy">
              <h3>{% if item.external_url %}<a href="{{ item.external_url }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}<a href="{{ item.url | relative_url }}">{{ item.title }}</a>{% endif %}</h3>
              <p><strong>{{ item.outlet }}</strong>{% if item.subtitle %} — {{ item.subtitle }}{% endif %}</p>
            </div>
          </article>
          {% endif %}
        {% endfor %}
      </div>
    </section>

    <section class="my-5" aria-labelledby="press-recognition">
      <h2 id="press-recognition">Press &amp; recognition</h2>
      <div class="media-list-compact media-list-page">
        {% for item in all_media %}
          {% if item.media_type == 'article' %}
          <article class="media-row">
            <div class="media-date">{{ item.date | date: '%b %Y' }}</div>
            <div class="media-copy">
              <h3>{% if item.external_url %}<a href="{{ item.external_url }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}<a href="{{ item.url | relative_url }}">{{ item.title }}</a>{% endif %}</h3>
              <p><strong>{{ item.outlet }}</strong>{% if item.subtitle %} — {{ item.subtitle }}{% endif %}</p>
            </div>
          </article>
          {% endif %}
        {% endfor %}
      </div>
    </section>
  </div>
</div>
