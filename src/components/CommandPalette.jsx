import { useEffect, useRef, useState } from "react";
import { socials, resumeUrl, contactEmail } from "../data";
import { smoothScrollTo } from "../utils/smoothScroll";

// A keyboard-driven quick-nav palette (Cmd/Ctrl+K) — jump to any section
// or open external links without touching the mouse. A small, genuinely
// useful engineering flourish that most portfolio sites don't bother with.

const commands = [
  { label: "Go to Home", type: "section", target: "#home" },
  { label: "Go to About", type: "section", target: "#about" },
  { label: "Go to Journey", type: "section", target: "#journey" },
  { label: "Go to Skills", type: "section", target: "#skills" },
  { label: "Go to Projects", type: "section", target: "#projects" },
  { label: "Go to Resume", type: "section", target: "#resume" },
  { label: "Go to Contact", type: "section", target: "#contact" },
  { label: "Open GitHub Profile", type: "link", target: socials.github },
  { label: "Open LinkedIn Profile", type: "link", target: socials.linkedin },
  { label: "Open Resume (PDF)", type: "link", target: resumeUrl },
  { label: "Copy Email Address", type: "copy", target: contactEmail },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isShortcut) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
    if (!open) setQuery("");
  }, [open]);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  function runCommand(cmd) {
    if (cmd.type === "section") {
      smoothScrollTo(cmd.target);
    } else if (cmd.type === "link") {
      window.open(cmd.target, "_blank", "noopener,noreferrer");
    } else if (cmd.type === "copy") {
      navigator.clipboard?.writeText(cmd.target);
    }
    setOpen(false);
  }

  return (
    <>

      {open && (
        <div className="command-palette-overlay" onClick={() => setOpen(false)}>
          <div className="command-palette" onClick={(e) => e.stopPropagation()}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && filtered.length > 0) {
                  runCommand(filtered[0]);
                }
              }}
            />
            <div className="command-palette-list">
              {filtered.length === 0 && (
                <div className="command-palette-empty">No matching command</div>
              )}
              {filtered.map((cmd) => (
                <button
                  key={cmd.label}
                  className="command-palette-item"
                  onClick={() => runCommand(cmd)}
                >
                  <span className="command-palette-tag">
                    {cmd.type === "section" ? "→" : cmd.type === "link" ? "↗" : "⧉"}
                  </span>
                  {cmd.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
