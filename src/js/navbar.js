/**
 * navbar.js - Sticky navbar, All Courses dropdown, sidebar category switcher, mobile menu
 */
export function initNavbar() {
  // ── Sticky navbar shadow ──────────────────────────────
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── All Courses dropdown ──────────────────────────────
  const coursesBtn = document.getElementById('all-courses-btn');
  const coursesDropdown = document.getElementById('courses-dropdown');

  if (coursesBtn && coursesDropdown) {
    coursesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = coursesDropdown.classList.toggle('open');
      coursesBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!coursesDropdown.contains(e.target) && e.target !== coursesBtn) {
        coursesDropdown.classList.remove('open');
        coursesBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Category sidebar switching
    const categoryItems = coursesDropdown.querySelectorAll('.category-item');
    const coursePanels = coursesDropdown.querySelectorAll('.course-panel');

    function activateCategory(index) {
      categoryItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      coursePanels.forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
      });
    }

    categoryItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => activateCategory(index));
      item.addEventListener('click', () => activateCategory(index));
    });

    if (categoryItems.length > 0) activateCategory(0);
  }

  // ── Mobile hamburger menu ─────────────────────────────
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-menu-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (mobileClose) mobileClose.addEventListener('click', closeMenu);

    // Close on backdrop click
    mobileMenu.addEventListener('click', e => {
      if (e.target === mobileMenu) closeMenu();
    });

    // Mobile: all courses accordion
    const mobileCoursesToggle = document.getElementById('mobile-courses-toggle');
    const mobileCoursesPanel = document.getElementById('mobile-courses-panel');
    if (mobileCoursesToggle && mobileCoursesPanel) {
      mobileCoursesToggle.addEventListener('click', () => {
        mobileCoursesPanel.classList.toggle('open');
        const chevron = mobileCoursesToggle.querySelector('.chevron');
        if (chevron) chevron.classList.toggle('rotate-180');
      });
    }
  }
}
