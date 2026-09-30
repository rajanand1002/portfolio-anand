// Custom smooth-scroll with easing, so scrolling to a section:
// 1) accounts for the fixed header height (no section title hidden behind nav)
// 2) works consistently across all browsers (native scroll-behavior:smooth
//    isn't fully reliable on older Safari)

const HEADER_OFFSET = 80;

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function smoothScrollTo(targetId, duration = 700) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - HEADER_OFFSET;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
