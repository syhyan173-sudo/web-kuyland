/**
 * KUYLAND Floating Pill Navigation Logic
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const navPill = document.querySelector('.nav-pill');
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobilePlayBtn = document.querySelector('.mobile-play-btn');
  const sections = document.querySelectorAll('section[id]');

  // Hamburger & Close Icon SVGs
  const iconHamburger = `<svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  const iconClose = `<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  // 1. Scroll styling: enhances pill shadow and contrast when page is scrolled
  const handleScroll = () => {
    if (window.scrollY > 25) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Mobile Menu Controller
  const closeMobileMenu = () => {
    if (navMenu?.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      if (toggleBtn) toggleBtn.innerHTML = iconHamburger;
    }
  };

  const openMobileMenu = () => {
    navMenu?.classList.add('open');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    if (toggleBtn) toggleBtn.innerHTML = iconClose;
  };

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking any nav link or mobile CTA
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    if (mobilePlayBtn) {
      mobilePlayBtn.addEventListener('click', () => {
        closeMobileMenu();
      });
    }

    // Close when clicking outside the floating pill
    document.addEventListener('click', (e) => {
      if (navPill && !navPill.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close with Escape key for keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });

    // Close on window resize if viewport scales to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  // 3. Active Section Link Indicator via IntersectionObserver
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));
}

