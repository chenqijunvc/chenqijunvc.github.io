---
layout: page
title: Media
seo_title: "Recognition, Speaking & Media | Vince (Qijun) Chen, CFA"
description: "Independent coverage, interviews, speaking appearances, exchange videos, and industry recognition relating to Vince (Qijun) Chen's investment research and prior portfolio-management work."
schema_type: CollectionPage
og_image: '/img/bg-about.jpg'
---

<p class="lead">Independent coverage, interviews, speaking appearances, public profiles, and recognition relating to my investment research and prior portfolio-management work.</p>

<section class="my-5" id="featured-coverage" aria-labelledby="featured-title">
  <h2 id="featured-title">Featured independent coverage</h2>
  <div class="media-list-compact media-list-page">
    <article class="media-row"><div class="media-date">2026</div><div class="media-copy"><h3><a href="https://www.alphaevents.com/events-futurealphaglobal/blog/beyond-the-backtest-vince-chen-on-building-durable-multi-factor-portfolios" target="_blank" rel="noopener noreferrer">Future Alpha — Beyond the Backtest: Vince Chen on Building Durable Multi-Factor Portfolios ↗</a></h3><p>Dedicated interview on signal quality, overfitting, and durable multi-factor portfolios.</p></div></article>
    <article class="media-row"><div class="media-date">2023</div><div class="media-copy"><h3><a href="https://www.cnbc.com/2023/02/07/biden-buyback-tax-isnt-working-in-state-of-the-union-he-wants-more.html" target="_blank" rel="noopener noreferrer">CNBC — Biden's 1% stock buyback tax isn't working ↗</a></h3><p>Quoted coverage on operating results, buybacks, and cash flow.</p></div></article>
    <article class="media-row"><div class="media-date">2022</div><div class="media-copy"><h3><a href="https://www.advisorperspectives.com/free-cash-flow-channel/why-free-cash-flow-better-determines-profitability" target="_blank" rel="noopener noreferrer">Advisor Perspectives — Why Free Cash Flow Better Determines Profitability ↗</a></h3><p>Independent discussion centered on Chen's free-cash-flow research.</p></div></article>
    <article class="media-row"><div class="media-date">2022</div><div class="media-copy"><h3><a href="https://www.etftrends.com/free-cash-flow-content-hub/why-investors-should-consider-etf-strategies-with-a-focus-on-free-cash-flows/" target="_blank" rel="noopener noreferrer">ETF Trends — ETF strategies focused on free cash flow ↗</a></h3><p>Industry coverage of free-cash-flow strategies and the FCF Quality Model.</p></div></article>
    <article class="media-row"><div class="media-date">2021</div><div class="media-copy"><h3><a href="https://www.mutualfundobserver.com/2021/01/manager-changes-december-2020/" target="_blank" rel="noopener noreferrer">Mutual Fund Observer — December 2020 manager changes ↗</a></h3><p>Independent documentation of the 2021 portfolio-manager transition.</p></div></article>
  </div>
</section>

{% assign all_media = site.media | sort: 'date' | reverse %}

<section class="my-5" id="interviews-speaking" aria-labelledby="speaking-title">
  <h2 id="speaking-title">Interviews and speaking</h2>
  <div class="media-list-compact media-list-page">
    {% for item in all_media %}
      {% if item.media_type == 'speaking' or item.media_type == 'tv' or item.media_type == 'video' or item.media_type == 'webinar' or item.media_type == 'event' %}
      <article class="media-row"><div class="media-date">{{ item.date | date: '%b %Y' }}</div><div class="media-copy"><h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3><p><strong>{{ item.outlet }}</strong>{% if item.subtitle %} — {{ item.subtitle }}{% endif %}</p></div></article>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="my-5" id="recognition" aria-labelledby="recognition-title">
  <h2 id="recognition-title">Recognition</h2>
  <ul>
    <li><strong>FCF Leaders Strategy — PSN Top Guns Manager of the Decade, Q4 2025.</strong> The strategy received the designation; Vince Chen was identified as portfolio manager of the strategy. <a href="https://abacusgm.com/abacus-fcf-advisors-named-to-psn-top-guns-list-of-best-performing-strategies-for-q4-2025/" target="_blank" rel="noopener noreferrer">Original release ↗</a></li>
    <li><strong>FCF US Quality Strategy — PSN Top Guns 3-Star, Q3 2024.</strong> <a href="https://abacusfcf.com/fcf-advisors-named-to-psn-top-guns-list-of-best-performing-strategies-for-q3-2024/" target="_blank" rel="noopener noreferrer">Original release ↗</a></li>
  </ul>
</section>

<section class="my-5" id="selected-media" aria-labelledby="selected-media-title">
  <h2 id="selected-media-title">Selected archive</h2>
  <div class="media-list-compact media-list-page">
    {% for item in all_media %}
      {% if item.media_type == 'article' %}
      <article class="media-row"><div class="media-date">{{ item.date | date: '%b %Y' }}</div><div class="media-copy"><h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3><p><strong>{{ item.outlet }}</strong>{% if item.subtitle %} — {{ item.subtitle }}{% endif %}</p></div></article>
      {% endif %}
    {% endfor %}
  </div>
</section>
