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
    const duration = Math.min(650, Math.max(280, startY * 0.18));
    const startTime = performance.now();

    function step(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      window.scrollTo({ top: startY * (1 - eased), behavior: "instant" });
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
