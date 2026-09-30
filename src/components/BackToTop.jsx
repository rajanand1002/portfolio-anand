import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    const startY = window.scrollY;
    const duration = 600;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      window.scrollTo(0, startY * (1 - eased));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (!visible) return null;

  return (
    <button id="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      <i className="bx bx-up-arrow-alt"></i>
    </button>
  );
}
