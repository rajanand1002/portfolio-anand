import { useState } from "react";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e, href) {
    e.preventDefault();
    smoothScrollTo(href);
    setMenuOpen(false);
  }

  return (
    <header>
      <nav>
        <div className="logo">ANAND KUMAR</div>

        <button
          type="button"
          className="menu-icon"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
