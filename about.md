---
layout: default
title: About
permalink: /about/
---

<section class="section">
  <div class="container">
    <div class="about-grid">
      <div class="about__image-wrapper animate-on-scroll">
        <div class="about__image-glow"></div>
        <img src="{{ '/docs/assets/crop_better.png' | relative_url }}" alt="Jared Popowski" class="about__image">
      </div>

      <div class="about__content">
        <div class="section-header animate-on-scroll">
          <p class="section-header__label">About</p>
          <h1 class="section-header__title">Hi, I'm Jared!</h1>
        </div>

        <div class="animate-on-scroll">
          <p>
            I'm a physicist exploring the intersection of active matter, biophysics, and intelligent materials. Currently pursuing my PhD at the University of Amsterdam, my research focuses on building intelligent active matter systems—materials whose constituents can sense, remember, and respond to their environment.
          </p>

          <p>
            My work combines theoretical physics with experimental approaches. I'm particularly interested in developing intelligent materials platforms that incorporate sensors, memory, and control systems, understanding the collective behavior of robotic active matter, and exploring the connections between active matter physics and biological systems.
          </p>

          <p>
            Beyond the lab, I enjoy breaking down complex physics concepts into accessible explanations through my blog. Whether you're a fellow physicist or simply curious about how our universe works, I hope you'll find something interesting here.
          </p>
        </div>

        <div class="about__details animate-on-scroll">
          <div class="about__detail">
            <span class="about__detail-label">Position</span>
            <span class="about__detail-value">PhD Candidate</span>
          </div>
          <div class="about__detail">
            <span class="about__detail-label">Institution</span>
            <span class="about__detail-value">University of Amsterdam</span>
          </div>
          <div class="about__detail">
            <span class="about__detail-label">Department</span>
            <span class="about__detail-value">Institute of Physics</span>
          </div>
          <div class="about__detail">
            <span class="about__detail-label">Email</span>
            <span class="about__detail-value"><a href="mailto:{{ site.social.email }}">{{ site.social.email }}</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Education Section -->
<section class="section" style="background: var(--bg-secondary);">
  <div class="container">
    <div class="section-header animate-on-scroll">
      <p class="section-header__label">Background</p>
      <h2 class="section-header__title">Education</h2>
    </div>

    <div class="grid grid--3">
      <div class="card animate-on-scroll animate-on-scroll--delay-1">
        <p class="card__label">2023 — Present</p>
        <h3 class="card__title">PhD in Physics</h3>
        <p class="card__meta">University of Amsterdam</p>
        <p class="card__description">
          Research focus: Intelligent Active Matter and Biophysics, in the group of Prof. Maziyar Jalaal. Developing robotic swarm systems with memory and environmental sensing.
        </p>
      </div>

      <div class="card animate-on-scroll animate-on-scroll--delay-2">
        <p class="card__label">2021 — 2023</p>
        <h3 class="card__title">MSc in Physics</h3>
        <p class="card__meta">University of British Columbia</p>
        <p class="card__description">
          Research at UBC, supervised by Prof. Joerg Rottler, applying information theory to understand the predictability of plastic avalanches in driven amorphous solids. <a href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0436957" target="_blank" rel="noopener">Link to MSc Thesis.</a>
        </p>
      </div>

      <div class="card animate-on-scroll animate-on-scroll--delay-3">
        <p class="card__label">2016 — 2019</p>
        <h3 class="card__title">BA in Physics & Mathematics</h3>
        <p class="card__meta">University of Colorado Boulder</p>
        <p class="card__description">
          Double major in Physics and Mathematics, graduated summa cum laude. Research at JILA on ultracold atomic physics and Feshbach molecules, supervised by Profs. Eric Cornell and Jun Ye. Link to BA Thesis.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Action Shot Section -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center animate-on-scroll">
      <p class="section-header__label">In the Lab</p>
      <h2 class="section-header__title">Science in Action</h2>
    </div>

    <div class="animate-on-scroll" style="max-width: 600px; margin: 0 auto;">
      <img src="{{ '/docs/assets/IMG-20251004-WA0006.jpg' | relative_url }}" alt="Jared demonstrating robotic active matter" style="width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
      <p class="text-center text-muted mt-md" style="font-size: 0.9rem;">
        Demonstrating 3D-printed boats powered by alcohol at the Open Science Day of the University of Amsterdam — <a href="https://arxiv.org/abs/2411.16011" target="_blank" rel="noopener">these boats, designed in the group of Maziyar Jalaal (my PhD supervisor) use the Marangoni effect to self-propel across a water surface.</a>
      </p>
    </div>
  </div>
</section>
