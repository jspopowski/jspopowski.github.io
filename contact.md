---
layout: default
title: Contact
permalink: /contact/
---

<section class="section">
  <div class="container">
    <div class="section-header section-header--center animate-on-scroll">
      <p class="section-header__label">Contact</p>
      <h1 class="section-header__title">Get in Touch</h1>
      <p class="section-header__description">
        Interested in collaboration, have questions about my research, or just want to say hello? I'd love to hear from you.
      </p>
    </div>

    <div class="contact-grid">
      <div class="card contact-card animate-on-scroll animate-on-scroll--delay-1">
        <svg class="contact-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <h3 class="contact-card__title">Email</h3>
        <p class="contact-card__value">
          <a href="mailto:{{ site.social.email }}">{{ site.social.email }}</a>
        </p>
      </div>

      <div class="card contact-card animate-on-scroll animate-on-scroll--delay-2">
        <svg class="contact-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <h3 class="contact-card__title">Location</h3>
        <p class="contact-card__value">
          Institute of Physics<br>
          Science Park 904<br>
          Amsterdam, Netherlands
        </p>
      </div>

      <div class="card contact-card animate-on-scroll animate-on-scroll--delay-3">
        <svg class="contact-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <h3 class="contact-card__title">Institution</h3>
        <p class="contact-card__value">
          <a href="https://www.uva.nl/en/profile/p/o/j.s.popowski/j.s.popowski.html" target="_blank" rel="noopener">
            University of Amsterdam
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Social Links -->
<section class="section" style="background: var(--bg-secondary);">
  <div class="container">
    <div class="section-header section-header--center animate-on-scroll">
      <p class="section-header__label">Online</p>
      <h2 class="section-header__title">Find Me Elsewhere</h2>
    </div>

    <div class="animate-on-scroll" style="display: flex; justify-content: center; gap: var(--space-lg); flex-wrap: wrap;">
      <a href="{{ site.social.scholar }}" class="btn btn--secondary" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
        </svg>
        Google Scholar
      </a>

      <a href="{{ site.social.github }}" class="btn btn--secondary" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        GitHub
      </a>

      <a href="{{ site.social.orcid }}" class="btn btn--secondary" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
        </svg>
        ORCID
      </a>

      <a href="{{ site.social.bluesky }}" class="btn btn--secondary" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
        </svg>
        Bluesky
      </a>
    </div>
  </div>
</section>
