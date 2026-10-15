/**
 * TANYA — PORTFOLIO JAVASCRIPT
 * Vanilla JS | 0 Dependencies | Fully Responsive
 *
 * Editable Profile Configuration:
 * Easily update your social media handles and phone numbers below.
 */

window.PORTFOLIO_CONFIG = {
  name: "Tanya Muzhanye",
  role: "Digital Marketing Specialist & Product Designer",
  phone: "+263774102310",
  email: "muzhanyekresia@gmail.com",
  location: "Harare, Zimbabwe",
  linkedin: "https://www.linkedin.com/in/kresia-tanyaradzwa-muzhanye-00634527a",
  github: "https://github.com/muzhanyekresia-lady",
  whatsapp: "https://wa.me/263774102310",
  // Editable social media profiles (Tanya can edit these anytime):
  instagram: "https://instagram.com",
  behance: "https://behance.net"
};

document.addEventListener('DOMContentLoaded', () => {
  // Apply configured links if elements exist
  const igLink = document.getElementById('socialLinkInstagram');
  if (igLink && window.PORTFOLIO_CONFIG.instagram) {
    igLink.href = window.PORTFOLIO_CONFIG.instagram;
  }
  const behanceLink = document.getElementById('socialLinkBehance');
  if (behanceLink && window.PORTFOLIO_CONFIG.behance) {
    behanceLink.href = window.PORTFOLIO_CONFIG.behance;
  }

  // -------------------------------------------------------------------------
  // 1. Navigation & Mobile Menu (Full Accessibility & Body Lock)
  // -------------------------------------------------------------------------
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link, .mobile-btn');
  const siteNav = document.getElementById('siteNav');

  function closeMobileNav() {
    if (hamburger && mobileMenu) {
      hamburger.classList.remove('is-active');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  function toggleMobileNav() {
    if (hamburger && mobileMenu) {
      const isOpen = hamburger.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Lock background scroll when open on mobile
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });

    // Close mobile menu when any navigation link or action button is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close on click outside navbar & drawer
    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileNav();
      }
    });
  }

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }, { passive: true });

  // -------------------------------------------------------------------------
  // 2. Active Section Highlighting via IntersectionObserver
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.site-nav .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href && href.replace('#', '') === currentId) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // -------------------------------------------------------------------------
  // 3. Project Category Filtering
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedFilter = btn.getAttribute('data-filter');

        // Update active filter button
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter cards
        projectCards.forEach(card => {
          const categoryAttr = card.getAttribute('data-category') || '';
          const categories = categoryAttr.split(' ');

          if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
            card.classList.remove('is-hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. Service Cards Interactive Expansion
  // -------------------------------------------------------------------------
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const isExpanded = card.classList.contains('expanded');
      // Collapse other cards
      serviceCards.forEach(c => c.classList.remove('expanded'));
      if (!isExpanded) {
        card.classList.add('expanded');
      }
    });

    // Keyboard accessibility for cards
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. Modal System (Contact, Project Details, CV Viewer, Story)
  // -------------------------------------------------------------------------
  const modals = document.querySelectorAll('.modal-backdrop');
  const openModalBtns = document.querySelectorAll('[data-modal-target]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';

      // Focus first actionable element inside modal
      const focusable = targetModal.querySelector('button, [href], input, textarea, [tabindex="0"]');
      if (focusable) {
        setTimeout(() => focusable.focus(), 100);
      }
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('is-active');
      // Only unlock scroll if mobile nav isn't open
      const isMobileNavOpen = mobileMenu && mobileMenu.classList.contains('is-open');
      if (!isMobileNavOpen) {
        document.body.style.overflow = '';
      }
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = btn.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => closeModal(modal));
    }
  });

  // -------------------------------------------------------------------------
  // 6. Contact Form Validation & Submission
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.textContent = 'Please fill out all fields before sending.';
          formFeedback.className = 'form-feedback error';
        }
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formFeedback) {
          formFeedback.textContent = 'Please enter a valid email address.';
          formFeedback.className = 'form-feedback error';
        }
        return;
      }

      const submitBtn = contactForm.querySelector('.btn-send');
      const originalContent = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending message…</span>';
      submitBtn.disabled = true;

      // Simulated local submission feedback
      setTimeout(() => {
        if (formFeedback) {
          formFeedback.textContent = "Thank you, " + name + "! Your message has been sent. I will get back to you shortly.";
          formFeedback.className = 'form-feedback success';
        }
        contactForm.reset();
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
      }, 600);
    });
  }
});
