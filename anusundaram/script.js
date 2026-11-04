/* ===================================================================
   script.js — Anu Sundaram Enterprises
   =================================================================== */

'use strict';

// ── Preloader ──────────────────────────────────────────────────────
// Use DOMContentLoaded (fires before images/fonts) so the preloader
// never blocks on slow CDN resources (Google Fonts, Font Awesome).
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    // Remove from DOM after transition ends to free memory
    preloader.addEventListener('transitionend', () => preloader.remove(), { once: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(hidePreloader, 300));
} else {
  // DOM already ready (script deferred and loaded after parse)
  setTimeout(hidePreloader, 300);
}

// ── Navbar scroll behaviour ────────────────────────────────────────
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// ── Active nav-link on scroll ──────────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-link');

function activateNavLink() {
  let currentId = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) currentId = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
}

window.addEventListener('scroll', activateNavLink, { passive: true });
activateNavLink();

// ── Mobile hamburger ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  const isOpen = navLinksEl.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu on nav-link click
navLinksEl.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Back-to-Top button ─────────────────────────────────────────────
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ── Counter animation ──────────────────────────────────────────────
function animateCounter(el) {
  const target  = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step     = 16;
  const steps    = duration / step;
  const inc      = target / steps;
  let   current  = 0;

  const timer = setInterval(() => {
    current += inc;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

// Trigger counters when hero stats enter view
const statNums = document.querySelectorAll('.stat-num');
let countersStarted = false;

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      statNums.forEach(animateCounter);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// ── Scroll-reveal animations ───────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.product-card, .sector-card, .why-card, .process-step, .about-content, .about-visual, .gem-content, .gem-visual, .contact-info, .contact-form-wrap'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Product filter ─────────────────────────────────────────────────
const filterBtns   = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);

      if (match) {
        // small re-entry animation
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'fadeInUp .4s ease both';
      }
    });
  });
});

// ── Contact form ───────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    // Simulate async submission
    setTimeout(() => {
      formMsg.className = 'form-message success';
      formMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your enquiry has been received. Our team will respond within 24 business hours.';
      contactForm.reset();
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';

      setTimeout(() => {
        formMsg.className = 'form-message';
        formMsg.innerHTML = '';
      }, 8000);
    }, 1600);
  });
}

// ── Smooth-scroll for anchor links (fallback for older browsers) ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Hamburger SVG morph (3-line ↔ X) ──────────────────────────────
const spans = hamburger.querySelectorAll('span');
function morphHamburger(open) {
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '1';
    spans[2].style.transform = '';
  }
}

hamburger.addEventListener('click', () => {
  morphHamburger(navLinksEl.classList.contains('open'));
});

navLinksEl.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => morphHamburger(false));
});
