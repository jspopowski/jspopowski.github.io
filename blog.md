---
layout: default
title: Blog
permalink: /blog/
---

<section class="section">
  <div class="container">
    <div class="section-header animate-on-scroll">
      <p class="section-header__label">Blog</p>
      <h1 class="section-header__title">Posts</h1>
      <p class="section-header__description">
        Breaking down complex physics concepts into accessible explanations. Whether you're a fellow physicist or simply curious about how our universe works, I hope you'll find something interesting here.
      </p>
    </div>

    {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

    {% for year in postsByYear %}
    <div class="mb-2xl">
      <h2 class="animate-on-scroll" style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: var(--space-lg); font-family: var(--font-mono);">{{ year.name }}</h2>

      <div class="post-list">
        {% for post in year.items %}
        <a href="{{ post.url | relative_url }}" class="post-item animate-on-scroll">
          <span class="post-item__date">{{ post.date | date: "%b %d" }}</span>
          <span class="post-item__title">{{ post.title }}</span>
          <svg class="post-item__arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>
