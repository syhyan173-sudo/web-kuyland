/**
 * KUYLAND Scroll Reveal & Micro-Interactions
 */

export function initAnimations() {
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  // Inject reveal styles dynamically to ensure progressive enhancement
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .reveal.is-revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const revealElements = document.querySelectorAll(
    '.section-header, .feature-card, .step-card, .download-card, .about-grid > *, .server-dashboard, .community-card, .accordion-item'
  );

  revealElements.forEach((el, index) => {
    el.classList.add('reveal');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

