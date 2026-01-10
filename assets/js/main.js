/**
 * Jared Popowski - Academic Portfolio
 * Main JavaScript
 */

(function() {
  'use strict';

  // ==========================================================================
  // Theme Toggle
  // ==========================================================================
  const ThemeManager = {
    init() {
      this.toggle = document.querySelector('.theme-toggle');
      if (!this.toggle) return;

      this.toggle.addEventListener('click', () => this.toggleTheme());

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    },

    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    },

    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================
  const MobileNav = {
    init() {
      this.toggle = document.querySelector('.mobile-menu-toggle');
      this.nav = document.querySelector('.nav__list');

      if (!this.toggle || !this.nav) return;

      this.toggle.addEventListener('click', () => this.toggleMenu());

      // Close menu when clicking a link
      this.nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.toggle.contains(e.target) && !this.nav.contains(e.target)) {
          this.closeMenu();
        }
      });
    },

    toggleMenu() {
      this.nav.classList.toggle('is-open');
      this.toggle.classList.toggle('is-active');
    },

    closeMenu() {
      this.nav.classList.remove('is-open');
      this.toggle.classList.remove('is-active');
    }
  };

  // ==========================================================================
  // Scroll Animations (Intersection Observer)
  // ==========================================================================
  const ScrollAnimations = {
    init() {
      this.elements = document.querySelectorAll('.animate-on-scroll');
      if (!this.elements.length) return;

      const options = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionally stop observing after animation
            // this.observer.unobserve(entry.target);
          }
        });
      }, options);

      this.elements.forEach(el => this.observer.observe(el));
    }
  };

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href === '#') return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================
  const HeaderScroll = {
    init() {
      this.header = document.querySelector('.header');
      if (!this.header) return;

      let lastScroll = 0;
      const scrollThreshold = 100;

      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add background when scrolled
        if (currentScroll > scrollThreshold) {
          this.header.classList.add('is-scrolled');
        } else {
          this.header.classList.remove('is-scrolled');
        }

        lastScroll = currentScroll;
      }, { passive: true });
    }
  };

  // ==========================================================================
  // Active Navigation Link
  // ==========================================================================
  const ActiveNav = {
    init() {
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav__link');

      navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Check if this link matches the current page
        if (linkPath === currentPath ||
            (currentPath.startsWith(linkPath) && linkPath !== '/')) {
          link.classList.add('nav__link--active');
        }
      });
    }
  };

  // ==========================================================================
  // Initialize Everything
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    MobileNav.init();
    ScrollAnimations.init();
    SmoothScroll.init();
    HeaderScroll.init();
    ActiveNav.init();
  });

})();
