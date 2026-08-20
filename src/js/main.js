/**
 * main.js - Entry point.
 * Imports interactive fix modules and runs them on the ORIGINAL pw.live HTML.
 */
import { initCarousel } from './carousel.js';
import { initNavbar }   from './navbar.js';
import { initSecureFetchInterceptor, initAntiTamperingShield } from './secureSdk.js';
import { b7 as initApp } from '../../assets/js/pw-auth-web-sdk.main.n2b22y_z.js';

// Assign global initPWAuthWebSDK function
window.initPWAuthWebSDK = initApp;

// ── Login / Register & Get Started Auth Handlers ─────────────────
function initAuthModalHandlers() {
  const triggerAuth = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    
    // Call the PW Auth Web SDK initializer recovered from original zip
    if (typeof window.initPWAuthWebSDK === 'function') {
      window.initPWAuthWebSDK({ flow: 'auth', renderType: 'modal' });
    } else if (typeof initApp === 'function') {
      initApp({ flow: 'auth', renderType: 'modal' });
    }
  };

  // Bind click listener for Login/Register and Get Started buttons across DOM
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a, [role="button"]');
    if (!target) return;
    const text = (target.textContent || '').trim();
    if (text.includes('Login/Register') || text.includes('Get Started')) {
      triggerAuth(e);
    }
  });
}

// ── FAQ Accordion ─────────────────────────────────────────────
function initFAQ() {
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
  initSecureFetchInterceptor();
  initAntiTamperingShield();
  initNavbar();
  initCarousel();
  initAuthModalHandlers();
  suppressErrors();
});
