// ============================================
// QuickMem — Mobile Navigation Toggle
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  if (!menuToggle || !nav) return;

  // Toggle menu open/close
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on resize above mobile breakpoint
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      nav.classList.remove('nav-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('nav-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
