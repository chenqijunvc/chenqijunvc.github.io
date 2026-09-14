---
layout: page
title: Publications
seo_title: "Publications | Vince (Qijun) Chen, CFA"
description: "Research papers and authored publications by Vince (Qijun) Chen on fund alternatives, return decomposition, active management, free cash flow, ETFs, factor investing, and portfolio construction."
schema_type: CollectionPage
og_image: '/img/posts/Risk.jpg'
---

<p class="lead">Research papers, white papers, and authored work on investment selection, fund alternatives, return decomposition, active management, free cash flow, factor investing, ETFs, and portfolio construction.</p>

<section class="my-5" id="portfoliofuture-research" aria-labelledby="current-research">
  <h2 id="current-research">Current PortfolioFuture research</h2>
  <div class="writing-list">
    <article class="writing-row">
      <div class="writing-date">2026</div>
      <div class="writing-copy">
        <h3><a href="{{ '/finding-better-fund-alternatives/' | relative_url }}">Finding Better Fund Alternatives</a></h3>
        <p>PortfolioFuture research on identifying better fund alternatives through investable return decomposition and evidence-based comparison.</p>
        <p class="writing-tags">Working Paper · PortfolioFuture · <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7396520" target="_blank" rel="noopener noreferrer">SSRN ↗</a> · <a href="https://doi.org/10.2139/ssrn.7396520" target="_blank" rel="noopener noreferrer">DOI ↗</a></p>
      </div>
    </article>
    <article class="writing-row">
      <div class="writing-date">2026</div>
      <div class="writing-copy">
        <h3><a href="{{ '/investable-return-decomposition-and-residual-persistence/' | relative_url }}">Investable Return Decomposition and Residual Persistence</a></h3>
        <p>PortfolioFuture research on decomposing investable returns and evaluating the persistence of residual value.</p>
        <p class="writing-tags">Working Paper · PortfolioFuture · <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7406999" target="_blank" rel="noopener noreferrer">SSRN ↗</a></p>
      </div>
    </article>
    {% for post in current_research %}
    <article class="writing-row">
      <div class="writing-date">{{ post.date | date: '%Y' }}</div>
      <div class="writing-copy">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 34 }}</p>
        <p class="writing-tags">Working Paper · PortfolioFuture · <a href="{{ post.source_url }}" target="_blank" rel="noopener noreferrer">SSRN ↗</a>{% if post.doi %} · <a href="{{ post.doi }}" target="_blank" rel="noopener noreferrer">DOI ↗</a>{% endif %}</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="my-5" id="free-cash-flow" aria-labelledby="research-archive">
  <h2 id="research-archive">Investment research and white papers</h2>
  <div class="writing-list">
    {% assign archive_posts = site.posts | sort: 'date' | reverse %}
    {% for post in archive_posts %}
    {% if post.publication_group != 'current' and post.content_type != 'media' %}
    <article class="writing-row">
      <div class="writing-date">{{ post.date | date: '%Y' }}</div>
      <div class="writing-copy">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 34 }}</p>
        <p class="writing-tags">{{ post.publication_type | default: 'Research article' }}{% if post.source_url %} · <a href="{{ post.source_url }}" target="_blank" rel="noopener noreferrer">Original source ↗</a>{% endif %}</p>
      </div>
    </article>
    {% endif %}
    {% endfor %}
  </div>
</section>

<section class="my-5" id="active-management" aria-labelledby="selected-work">
  <h2 id="selected-work">Selected earlier work</h2>
  <p>Earlier research covers active-manager evaluation, quality factor exposure, free-cash-flow profitability, ETF implementation, and portfolio construction. Historical employer-hosted material is preserved here as authored work, with original sources linked where available.</p>
</section>
