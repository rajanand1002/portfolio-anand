// Fast, eased scroll to a section.
// - Accounts for the fixed header (section title never hides behind nav)
// - Duration scales with distance (short hops stay snappy, long ones capped)
// - Uses behavior:"instant" so the CSS `scroll-behavior: smooth` on <html>
//   does NOT re-smooth every frame (that was making the scroll feel slow)

const HEADER_OFFSET = 80;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - HEADER_OFFSET;
  const distance = targetY - startY;

  // 280ms minimum, 650ms maximum
  const duration = Math.min(650, Math.max(280, Math.abs(distance) * 0.18));
  const startTime = performance.now();

  function step(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = easeOutCubic(progress);
    window.scrollTo({ top: startY + distance * eased, behavior: "instant" });

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}