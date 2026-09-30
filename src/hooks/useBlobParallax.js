import { useEffect } from "react";

export default function useBlobParallax(blobsRef) {
  useEffect(() => {
    function handleScroll() {
      if (blobsRef.current) {
        blobsRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blobsRef]);
}
