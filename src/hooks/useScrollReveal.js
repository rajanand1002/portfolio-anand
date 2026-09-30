import { useEffect } from "react";

// Adds/removes the "show" class on all <section> elements as they enter
// the viewport — same behavior as the original script.js scroll listener.
export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    function reveal() {
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          sec.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);
}
