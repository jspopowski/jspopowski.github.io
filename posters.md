---
layout: default
title: Posters
permalink: /posters/
---

<section class="section">
  <div class="container">
    <div class="section-header animate-on-scroll">
      <p class="section-header__label">Posters</p>
      <h1 class="section-header__title">Research Posters</h1>
      <p class="section-header__description">
        Conference posters presenting my research. Click on a poster to expand and view, or download the PDF directly.
      </p>
    </div>

    <div class="posters-grid">
      <!-- Poster 1: Trichomes -->
      <div class="poster-card animate-on-scroll" data-poster="trichomes">
        <div class="poster-card__header">
          <div class="poster-card__info">
            <p class="poster-card__venue">NWO Physics @ Les Houches</p>
            <h3 class="poster-card__title">Glandular Trichomes: A Plant's Fast & Sensitive Defense</h3>
            <p class="poster-card__year">2025</p>
          </div>
          <div class="poster-card__actions">
            <a href="{{ '/docs/assets/posters/Trichomes - NWO Physics, Les Houches 2025.pdf' | relative_url }}"
               class="btn btn--small btn--secondary"
               download
               onclick="event.stopPropagation();">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
            <button class="btn btn--small btn--primary poster-toggle">
              <span class="poster-toggle__expand">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                View
              </span>
              <span class="poster-toggle__collapse">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                Collapse
              </span>
            </button>
          </div>
        </div>
        <div class="poster-card__embed">
          <object data="{{ '/docs/assets/posters/Trichomes - NWO Physics, Les Houches 2025.pdf' | relative_url }}"
                  type="application/pdf"
                  width="100%"
                  height="800px">
            <p>Unable to display PDF. <a href="{{ '/docs/assets/posters/Trichomes - NWO Physics, Les Houches 2025.pdf' | relative_url }}">Download instead</a>.</p>
          </object>
        </div>
      </div>

      <!-- Add more posters here following the same pattern -->

    </div>
  </div>
</section>

<style>
.posters-grid {
  display: grid;
  gap: var(--space-xl);
}

.poster-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.poster-card:hover {
  border-color: var(--border-color-hover);
  box-shadow: var(--shadow-md);
}

.poster-card.is-expanded {
  box-shadow: var(--shadow-glow);
  border-color: var(--accent-primary);
}

.poster-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-lg);
  padding: var(--space-xl);
  cursor: pointer;
}

.poster-card__info {
  flex: 1;
}

.poster-card__venue {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-sm);
}

.poster-card__title {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  line-height: 1.3;
}

.poster-card__year {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

.poster-card__actions {
  display: flex;
  gap: var(--space-sm);
  flex-shrink: 0;
}

.poster-toggle__collapse {
  display: none;
}

.poster-card.is-expanded .poster-toggle__expand {
  display: none;
}

.poster-card.is-expanded .poster-toggle__collapse {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
}

.poster-toggle__expand,
.poster-toggle__collapse {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
}

.poster-card__embed {
  display: none;
  padding: 0 var(--space-xl) var(--space-xl);
}

.poster-card.is-expanded .poster-card__embed {
  display: block;
}

.poster-card__embed object {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

@media (max-width: 600px) {
  .poster-card__header {
    flex-direction: column;
  }

  .poster-card__actions {
    width: 100%;
  }

  .poster-card__actions .btn {
    flex: 1;
    justify-content: center;
  }

  .poster-card__embed object {
    height: 500px;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const posterCards = document.querySelectorAll('.poster-card');

  posterCards.forEach(card => {
    const header = card.querySelector('.poster-card__header');

    header.addEventListener('click', function(e) {
      // Don't toggle if clicking the download button
      if (e.target.closest('a[download]')) return;

      card.classList.toggle('is-expanded');
    });
  });
});
</script>
