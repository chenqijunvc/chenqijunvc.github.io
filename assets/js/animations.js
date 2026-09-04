/**
 * animations.js
 * Scroll-reveal, count-up, reading progress, and navbar scroll behaviour.
 * Pure vanilla JS — no jQuery required.
 */

(function () {
  'use strict';

  /* ── Navbar scroll behaviour ────────────────────────────────────────────── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    let prevScrollY = 0;
    const navH = nav.offsetHeight;

    window.addEventListener('scroll', function () {
      const y = window.scrollY;

      if (y > navH) {
        nav.classList.add('is-fixed');
        if (y < prevScrollY) {
          nav.classList.add('is-visible');
        } else {
          nav.classList.remove('is-visible');
        }
      } else {
        nav.classList.remove('is-fixed', 'is-visible');
      }
      prevScrollY = y;
    }, { passive: true });
  }

  /* ── Mobile nav toggle (vanilla, replaces jQuery Bootstrap dep) ─────────── */
  const toggler = document.querySelector('.navbar-toggler');
  const navCollapse = document.getElementById('navbarResponsive');
  if (toggler && navCollapse) {
    toggler.addEventListener('click', function () {
      const expanded = toggler.getAttribute('aria-expanded') === 'true';
      toggler.setAttribute('aria-expanded', String(!expanded));
      navCollapse.classList.toggle('show');
    });
  }

  /* ── Scroll-reveal (IntersectionObserver) ───────────────────────────────── */
  const revealTargets = document.querySelectorAll('.reveal, .reveal-left');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealTargets.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ── Count-up animation for proof-grid numbers ──────────────────────────── */
  function parseNum(str) {
    return parseFloat(str.replace(/[^0-9.]/g, '')) || null;
  }

  function animateCount(el, from, to, suffix, prefix, duration) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out-cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = from + (to - from) * ease;
      el.textContent = prefix + Math.round(value) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const proofValues = document.querySelectorAll('.proof-value, .record-summary strong, .strategy-grid strong');
  if (proofValues.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const original = el.textContent.trim();
        const numericVal = parseNum(original);

        if (numericVal !== null && numericVal > 5) {
          // Detect suffix (e.g. " ETFs", " AUM") and prefix
          const prefixMatch = original.match(/^(\D+)/);
          const suffixMatch = original.match(/[\d.]+(.*)$/);
          const prefix = prefixMatch ? prefixMatch[1] : '';
          const suffix = suffixMatch ? suffixMatch[1] : '';

          el.dataset.finalText = original;
          animateCount(el, 0, numericVal, suffix, prefix, 1200);
        }
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    proofValues.forEach(function (el) { countObserver.observe(el); });
  }

  /* ── Reading progress bar ───────────────────────────────────────────────── */
  const progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    function updateProgress() {
      const article = document.querySelector('.article-body') || document.querySelector('main');
      if (!article) return;
      const articleTop = article.offsetTop;
      const articleH = article.offsetHeight;
      const winH = window.innerHeight;
      const scrolled = window.scrollY - articleTop;
      const total = articleH - winH;
      const pct = total > 0 ? Math.min(Math.max((scrolled / total) * 100, 0), 100) : 0;
      progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── Smooth scroll for scroll-cue anchor ───────────────────────────────── */
  const scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    scrollCue.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = scrollCue.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

})();
