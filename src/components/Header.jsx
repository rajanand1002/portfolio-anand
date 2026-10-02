
import { useState, useEffect } from "react";
import { smoothScrollTo } from "../utils/smoothScroll";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleNavClick(e, href) {
    e.preventDefault();
    setActiveSection(href.substring(1));
    smoothScrollTo(href);
    setMenuOpen(false);
  }

  return (
    <header>
      <nav>
        <div className="logo">ANAND KUMAR</div>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  activeSection === link.href.substring(1)
                    ? "active"
                    : ""
                }
                aria-current={
                  activeSection === link.href.substring(1)
                    ? "page"
                    : undefined
                }
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <i
              className={
                theme === "dark"
                  ? "bx bx-sun"
                  : "bx bx-moon"
              }
            />
          </button>

          <button
            type="button"
            className="menu-icon"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={menuOpen ? "bx bx-x" : "bx bx-menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}