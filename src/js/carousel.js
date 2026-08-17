/**
 * carousel.js - Pure vanilla JS hero banner carousel
 * Auto-slides every 4s, supports touch swipe, prev/next, dot navigation
 */
export function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = track ? track.querySelectorAll('.slide') : [];
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!track || slides.length === 0) return;

  let current = 0;
  let autoTimer = null;
  const total = slides.length;

  // Build dots
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function getDots() {
    return dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];
  }

  function goTo(index) {
    const dots = getDots();
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    current = (index + total) % total;

    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, 4000);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  // Init
  goTo(0);
  startAuto();

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; stopAuto(); }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    startAuto();
  }, { passive: true });

  // Pause on hover
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);
}
