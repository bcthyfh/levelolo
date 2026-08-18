/**
 * carousel.js - Fixes the hero banner carousel on the original pw.live HTML structure.
 * The original used React state for sliding; this replaces that with pure JS.
 *
 * Original HTML structure:
 *   <div role="region" aria-roledescription="carousel">
 *     <div class="overflow-hidden">
 *       <div class="flex gap-4" style="transform: translate3d(...)">   ← track
 *         <div role="group" aria-roledescription="slide">…</div>       ← each slide
 *       </div>
 *     </div>
 *     <div class="absolute w-full flex items-center justify-center -bottom-5">  ← dots wrapper
 *       <div class="flex md:gap-3 gap-2 z-20">
 *         <button …>  ← dot buttons (already in HTML)
 *       </div>
 *     </div>
 *     <div … left-0><button …>Previous slide</button></div>  ← prev
 *     <div … right-0><button …>Next slide</button></div>     ← next
 *   </div>
 */

export function initCarousel() {
  // Find all carousel regions (there may be more than one on the page)
  const carousels = document.querySelectorAll('[role="region"][aria-roledescription="carousel"]');

  carousels.forEach(carousel => {
    // The track: the flex container that holds all slides
    const track = carousel.querySelector('.flex.gap-4, [defaultdotsbg]');
    if (!track) return;

    const slides = track.querySelectorAll('[role="group"][aria-roledescription="slide"]');
    if (slides.length === 0) return;

    const total = slides.length;
    let current = 0;
    let autoTimer = null;

    // Dot buttons (already rendered in HTML)
    const dotsWrapper = carousel.querySelector('.flex.md\\:gap-3, .flex.gap-2.z-20, [class*="gap-2"][class*="z-20"]');
    const dots = dotsWrapper ? dotsWrapper.querySelectorAll('button[type="button"]') : [];

    // Prev/Next buttons
    const prevContainer = carousel.querySelector('.left-0 button, [class*="left-0"] button');
    const nextContainer = carousel.querySelector('.right-0 button, [class*="right-0"] button');

    // Make track transition smoothly
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.willChange = 'transform';

    // Dot color config from data attributes
    const inactiveBg = track.getAttribute('defaultdotsbg') || '#D9DCE1';
    const activeBg = track.getAttribute('activedotsbg') || '#414347';

    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.style.backgroundColor = i === index ? activeBg : inactiveBg;
      });
    }

    function goTo(index) {
      current = (index + total) % total;
      const targetSlide = slides[current];
      const firstSlide = slides[0];
      let offset = 0;
      if (targetSlide && firstSlide && targetSlide.offsetLeft !== undefined) {
        offset = targetSlide.offsetLeft - firstSlide.offsetLeft;
      } else {
        const slideWidth = slides[0].getBoundingClientRect().width || track.parentElement.getBoundingClientRect().width;
        offset = current * slideWidth;
      }
      track.style.transform = `translate3d(-${offset}px, 0px, 0px)`;
      updateDots(current);
    }

    // Handle window resize — recalculate position
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => goTo(current), 100);
    }, { passive: true });

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(next, 4000);
    }
    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    // Wire up dots
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
      dot.style.cursor = 'pointer';
      dot.style.transition = 'background-color 0.25s';
    });

    // Wire up prev/next
    if (prevContainer) {
      prevContainer.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
    }
    if (nextContainer) {
      nextContainer.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
    }

    // Touch swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; stopAuto(); }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      startAuto();
    }, { passive: true });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    // Start
    goTo(0);
    startAuto();
  });
}
