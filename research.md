---
layout: default
title: Research
permalink: /research/
---

<section class="section">
  <div class="container">
    <div class="section-header animate-on-scroll">
      <p class="section-header__label">Research</p>
      <h1 class="section-header__title">Publications & Projects</h1>
      <p class="section-header__description">
        My research spans active matter physics, biophysics, and statistical mechanics—exploring how materials can exhibit intelligent behavior.
      </p>
    </div>
  </div>
</section>

<!-- Research Areas -->
<section class="section" style="background: var(--bg-secondary); padding-top: 0;">
  <div class="container">
    <div class="section-header animate-on-scroll">
      <p class="section-header__label">Focus Areas</p>
      <h2 class="section-header__title">Research Interests</h2>
    </div>

    <div class="grid grid--2">
      <div class="card card--glow animate-on-scroll" id="active-matter">
        <p class="card__label">Active Matter</p>
        <h3 class="card__title">Intelligent Robotic Swarms</h3>
        <p class="card__description">
          Scaling up robotic active matter systems to hundreds of robots, incorporating memory and environmental sensing capabilities. This work aims to bridge the gap between traditional active matter studies and intelligent materials that can process information about their environment.
        </p>
        <div class="card__tags">
          <span class="tag">Robotics</span>
          <span class="tag">Collective Behavior</span>
          <span class="tag">Sensing</span>
        </div>
      </div>

      <div class="card card--glow animate-on-scroll" id="biophysics">
        <p class="card__label">Biophysics</p>
        <h3 class="card__title">Plant Defense Mechanics</h3>
        <p class="card__description">
          Investigating the biomechanics of glandular trichome rupture in tomato plants—an ultra-fast and sensitive defense mechanism against insects. This work combines high-speed imaging, rheology, and theoretical modeling.
        </p>
        <div class="card__tags">
          <span class="tag">Biomechanics</span>
          <span class="tag">Rheology</span>
          <span class="tag">Plant Physics</span>
        </div>
      </div>

      <div class="card card--glow animate-on-scroll" id="statistical-physics">
        <p class="card__label">Statistical Physics</p>
        <h3 class="card__title">Information Dynamics in Glasses</h3>
        <p class="card__description">
          Understanding information dynamics in the yielding transition of amorphous solids. Studying cage-breaking phenomena and how information propagates through disordered systems.
        </p>
        <div class="card__tags">
          <span class="tag">Glassy Dynamics</span>
          <span class="tag">Information Theory</span>
          <span class="tag">Amorphous Solids</span>
        </div>
      </div>

      <div class="card card--glow animate-on-scroll">
        <p class="card__label">Ultracold Physics</p>
        <h3 class="card__title">Few-Body Physics</h3>
        <p class="card__description">
          Previous work at JILA on precision tests of universality in few-body physics using ultracold potassium atoms. Studying Feshbach molecules and three-body recombination.
        </p>
        <div class="card__tags">
          <span class="tag">Ultracold Atoms</span>
          <span class="tag">Feshbach Resonances</span>
          <span class="tag">AMO Physics</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Active Particle Simulation -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center animate-on-scroll">
      <p class="section-header__label">Simulation</p>
      <h2 class="section-header__title">Active Ornstein-Uhlenbeck Dynamics</h2>
      <p class="section-header__description">
        Cage-breaking dynamics of three active particles in circular confinement
      </p>
    </div>

    <div class="animate-on-scroll" style="max-width: 500px; margin: 0 auto; text-align: center;">
      <img src="{{ '/docs/assets/AOUP trajectory movie, taup=1.gif' | relative_url }}" alt="Active Ornstein-Uhlenbeck particle dynamics simulation" style="width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-color); background: white;">
      <p class="text-muted mt-md" style="font-size: 0.85rem;">
        Simulation showing three active particles exhibiting cage-breaking behavior. The persistence time τ<sub>p</sub> = 1 determines the correlation time of the self-propulsion force.
      </p>
    </div>
  </div>
</section>

<!-- Publications -->
<section class="section" style="background: var(--bg-secondary);">
  <div class="container">
    <div class="section-header animate-on-scroll">
      <p class="section-header__label">Publications</p>
      <h2 class="section-header__title">Selected Works</h2>
    </div>

    <div class="grid" style="gap: var(--space-lg);">
      {% for pub in site.data.publications %}
      <div class="card animate-on-scroll">
        <div class="publication-card">
          <p class="publication-card__venue">{{ pub.venue }}{% if pub.volume %}, {{ pub.volume }}{% endif %} ({{ pub.year }})</p>
          <h3 class="publication-card__title">{{ pub.title }}</h3>
          <p class="publication-card__authors">{{ pub.authors }}</p>
          {% if pub.links %}
          <div class="publication-card__links">
            {% for link in pub.links %}
            <a href="{{ link.url }}" class="publication-card__link" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              {{ link.label }}
            </a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>

    <div class="text-center mt-2xl animate-on-scroll">
      <a href="{{ site.social.scholar }}" class="btn btn--secondary" target="_blank" rel="noopener">
        View on Google Scholar
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Visual Research -->
<section class="section">
  <div class="container">
    <div class="section-header section-header--center animate-on-scroll">
      <p class="section-header__label">Gallery</p>
      <h2 class="section-header__title">Research Imagery</h2>
    </div>

    <div class="grid grid--2">
      <div class="animate-on-scroll">
        <img src="{{ '/docs/assets/tomato_glandular_trichomes_across_scales.png' | relative_url }}" alt="Tomato glandular trichomes across scales" style="width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <p class="text-muted mt-md text-center" style="font-size: 0.85rem;">
          Glandular trichomes on tomato plants, from macroscopic to microscopic scales
        </p>
      </div>

      <div class="animate-on-scroll">
        <img src="{{ '/docs/assets/cage_break_graphic_nice_design.png' | relative_url }}" alt="Cage breaking dynamics schematic" style="width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-color); background: white;">
        <p class="text-muted mt-md text-center" style="font-size: 0.85rem;">
          Schematic of cage-breaking dynamics in confined active particles
        </p>
      </div>
    </div>
  </div>
</section>
