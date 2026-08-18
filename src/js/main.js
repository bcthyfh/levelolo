/**
 * main.js - Entry point.
 * Imports interactive fix modules and runs them on the ORIGINAL pw.live HTML.
 * No CSS import needed — the original HTML's own stylesheet bundle handles styling.
 */
import { initCarousel } from './carousel.js';
import { initNavbar }   from './navbar.js';

// ── FAQ Accordion ─────────────────────────────────────────────
function initFAQ() {
  // Original HTML FAQ: questions are usually in an accordion
  // Target any FAQ-like collapsible elements
  const faqItems = document.querySelectorAll('[class*="faq"], [class*="accordion"], [class*="FAQ"]');
  faqItems.forEach(item => {
    const toggle = item.querySelector('button, [role="button"], h3, h4');
    const answer = item.querySelector('[class*="answer"], [class*="content"], [class*="body"]');
    if (toggle && answer) {
      answer.style.overflow = 'hidden';
      answer.style.maxHeight = '0';
      answer.style.transition = 'max-height 0.3s ease';
      toggle.style.cursor = 'pointer';
      toggle.addEventListener('click', () => {
        const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '0';
        // Close all others
        faqItems.forEach(other => {
          const otherAnswer = other.querySelector('[class*="answer"], [class*="content"], [class*="body"]');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
        });
        if (!isOpen) answer.style.maxHeight = answer.scrollHeight + 'px';
      });
    }
  });
}

// ── Error suppression (keep original's Next.js error dialogs hidden) ───
function suppressErrors() {
  // Hide any Next.js error overlays that may appear
  const observer = new MutationObserver(() => {
    const errorEls = document.querySelectorAll(
      '[data-nextjs-dialog], [data-nextjs-dialog-header], nextjs-portal'
    );
    errorEls.forEach(el => {
      el.style.display = 'none';
      el.style.visibility = 'hidden';
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// ── Run everything after DOM is ready ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCarousel();
  suppressErrors();
  // FAQ is optional — the original may have its own handler if React loaded
  // initFAQ();
});
