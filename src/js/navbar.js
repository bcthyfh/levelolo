/**
 * navbar.js - Fixes the interactive elements on the original pw.live HTML:
 *  1. "All Courses" button → shows/hides the mega dropdown
 *  2. Category sidebar → hover/click switches the right panel
 *  3. Sticky navbar shadow on scroll
 *
 * Original HTML structure (key selectors):
 *  - All Courses button: button containing "All Courses" text inside navbar
 *  - Dropdown: div.fixed.left-0.w-full.z-20.top-\[80px\]  (already in DOM, hidden by display:none)
 *  - Category items: div.text-\[18px\].font-\[600\]  (left sidebar items)
 *  - Course panels: the right-side content panel that changes per category
 *  - Hamburger: svg.menu.w-7 parent button
 */

export function initNavbar() {

  // ── 1. Sticky navbar scroll shadow ───────────────────────────────
  const navbar = document.querySelector('nav, header, [class*="navbar"], [class*="z-50"]');
  if (navbar) {
    const handleScroll = () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,0.1)'
        : '';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ── 2. "All Courses" mega dropdown ──────────────────────────────
  // Find the All Courses button (contains that text)
  let coursesBtn = null;
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('All Courses')) coursesBtn = btn;
  });

  // The dropdown is fixed.left-0.w-full.z-20 (below navbar)
  const dropdown = document.querySelector('.fixed.left-0.w-full.z-20, [class*="fixed"][class*="left-0"][class*="w-full"][class*="z-20"]');

  if (coursesBtn && dropdown) {
    // Start hidden
    dropdown.style.display = 'none';
    let isOpen = false;

    function openDropdown() {
      isOpen = true;
      dropdown.style.display = '';
      dropdown.style.animation = 'fadeInDown 0.2s ease';
      coursesBtn.setAttribute('aria-expanded', 'true');
    }
    function closeDropdown() {
      isOpen = false;
      dropdown.style.display = 'none';
      coursesBtn.setAttribute('aria-expanded', 'false');
    }

    coursesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeDropdown() : openDropdown();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (isOpen && !dropdown.contains(e.target) && e.target !== coursesBtn) {
        closeDropdown();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeDropdown();
    });

    // ── 3. Category sidebar switching ──────────────────────────────
    // Category items have class text-[18px] font-[600] inside parent div groups
    const categoryItems = dropdown.querySelectorAll('[class*="text-\\[18px\\]"][class*="font-\\[600\\]"]');

    // The right-side panel: after the category sidebar there's a scrollable div
    // Find the animate-in slide-in-from-left panels (one per category)
    const coursePanels = dropdown.querySelectorAll('[class*="animate-in"][class*="slide-in-from-left"]');

    function activateCategory(index) {
      categoryItems.forEach((item, i) => {
        const parentRow = item.closest('[class*="flex"][class*="flex-col"]') || item.parentElement.parentElement;
        if (parentRow) {
          parentRow.style.background = i === index ? 'rgba(90,75,218,0.06)' : '';
          parentRow.style.borderLeft = i === index ? '3px solid #5a4bda' : '3px solid transparent';
        }
      });
      coursePanels.forEach((panel, i) => {
        panel.style.display = i === index ? '' : 'none';
      });
    }

    // Wire up category items
    if (categoryItems.length > 0) {
      categoryItems.forEach((item, index) => {
        const row = item.closest('[class*="flex-col"]') || item.parentElement.parentElement;
        if (row) {
          row.style.cursor = 'pointer';
          row.style.transition = 'background 0.15s, border-left 0.15s';
          row.style.borderLeft = '3px solid transparent';
          row.style.padding = '12px 16px 12px 20px';

          row.addEventListener('mouseenter', () => activateCategory(index));
          row.addEventListener('click', () => activateCategory(index));
        }
      });
      // Show first panel by default
      activateCategory(0);
    }
  }

  // ── 4. Hamburger / Mobile menu ──────────────────────────────────
  // Find hamburger: button containing svg.menu class
  let hamburgerBtn = null;
  document.querySelectorAll('button').forEach(btn => {
    if (btn.querySelector('.menu, svg[class*="menu"]')) hamburgerBtn = btn;
  });

  // Mobile nav: typically hidden on large screens, shown on mobile
  // The original has a mobile slide-out drawer
  const mobileDrawer = document.querySelector('[class*="fixed"][class*="inset-0"][class*="z-"]');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileDrawer) {
        const isVisible = mobileDrawer.style.display !== 'none' && !mobileDrawer.classList.contains('hidden');
        mobileDrawer.style.display = isVisible ? 'none' : '';
        document.body.style.overflow = isVisible ? '' : 'hidden';
      }
    });
  }

  // Inject CSS for dropdown animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}
