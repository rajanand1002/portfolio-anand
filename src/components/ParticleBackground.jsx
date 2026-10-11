import { useEffect, useRef } from "react";

// Moving "network" background: drifting nodes that connect with thin lines
// when close, and reach toward the cursor. Pure canvas, theme-aware,
// pauses when the tab is hidden, and goes static for reduced-motion users.

const PALETTE = {
  dark:  { node: "232,163,61", line: "232,163,61", alt: "63,167,150", nodeA: 0.7,  lineA: 0.22 },
  light: { node: "184,121,25", line: "184,121,25", alt: "22,133,117", nodeA: 0.55, lineA: 0.2 },
};

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1;
    let nodes = [];
    let rafId = null;
    const mouse = { x: -9999, y: -9999 };
    let theme = document.documentElement.getAttribute("data-theme") || "dark";

    const LINK_DIST = 140;
    const MOUSE_DIST = 170;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.min(80, Math.floor((w * h) / 20000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.4 + 1,
        alt: Math.random() < 0.28,
      }));
    }

    function draw() {
      const c = PALETTE[theme] || PALETTE.dark;
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -10) n.x = w + 10;
          if (n.x > w + 10) n.x = -10;
          if (n.y < -10) n.y = h + 10;
          if (n.y > h + 10) n.y = -10;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * c.lineA;
            ctx.strokeStyle = `rgba(${a.alt || b.alt ? c.alt : c.line},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const mdx = a.x - mouse.x, mdy = a.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_DIST) {
          const alpha = (1 - md / MOUSE_DIST) * (c.lineA * 2);
          ctx.strokeStyle = `rgba(${c.line},${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${a.alt ? c.alt : c.node},${c.nodeA})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      draw();
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      if (reduceMotion) { draw(); return; }
      if (rafId === null) loop();
    }
    function stop() {
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    }

    function onVisibility() { document.hidden ? stop() : start(); }
    function onMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
    function onLeave() { mouse.x = -9999; mouse.y = -9999; }
    function onResize() { resize(); if (reduceMotion) draw(); }

    const themeObserver = new MutationObserver(() => {
      theme = document.documentElement.getAttribute("data-theme") || "dark";
      if (reduceMotion) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    start();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}