---
layout: page
title: Posts
permalink: /blog/
---

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

{% for year in postsByYear %}
<h2>{{ year.name }}</h2>
<ul class="post-list">
  {% for post in year.items %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
    </li>
  {% endfor %}
</ul>
{% endfor %}
