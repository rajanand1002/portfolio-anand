# Anand Kumar — Portfolio

A personal portfolio site built with **React + Vite**, rebuilt from an original HTML/CSS/JS version into a fully component-based app. Designed around a "spec sheet / datasheet" visual theme — deep graphite background, brass/amber accent, monospace data labels, and corner-bracket framing instead of generic glassmorphism cards.

**Live demo:** [anandkrr.vercel.app](https://anandkrr.vercel.app/) 
               

## Features

- **Case-study project cards** — each project expands into Problem → Approach → Challenges → What I'd Improve, instead of just a title and screenshot
- **Command Palette (⌘K / Ctrl+K)** — keyboard-driven quick navigation to any section or external link (GitHub, LinkedIn, Resume)
- **Journey timeline** — shows real learning progression (HTML/CSS → React → MERN stack → DSA)
- **Coding profiles section** — links out to LeetCode / GFG / HackerRank (optional, hides itself if empty)
- **Contact form** wired to EmailJS, with one-click copy-to-clipboard email button
- **Smooth, eased scroll navigation** with fixed-header offset handling
- **Scroll-reveal animations**, 3D tilt on project cards, cursor glow, scroll progress bar
- **Fully responsive** — tested down to small mobile breakpoints
- **Accessible** — skip-to-content link, visible focus states
- **Print-friendly stylesheet** — clean output if saved/printed as PDF

## Tech Stack

- **React 19** + **Vite** — component architecture, fast dev/build tooling
- **Plain CSS** (custom properties / design tokens) — no UI framework
- **EmailJS** — contact form email delivery
- **Boxicons** — icon set

## Project Structure

```
src/
  components/    → one component per section (Hero, About, Projects, Contact, ...)
  hooks/         → scroll reveal, blob parallax (custom hooks)
  utils/         → smooth-scroll utility
  data.js        → all editable content — projects, skills, links, EmailJS keys
  imageLoader.js → auto-loads images dropped into src/assets/
  index.css      → design system + all component styles
```

## Getting Started

```bash
git clone https://github.com/rajanand1002/portfolio-anand.git
cd portfolio-anand
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Netlify, Vercel, GitHub Pages, etc.

### Adding your own content

Everything editable lives in `src/data.js`:

- `projects` — title, description, tech stack, live link, GitHub repo link, case-study text
- `skills` — grouped skill lists
- `journey` — learning timeline entries
- `codingProfiles` — LeetCode / GFG / HackerRank links
- `resumeUrl`, `socials`, `contactEmail`, `emailjs` config

Images referenced by filename in `data.js` just need to be dropped into `src/assets/` — no import statements required (handled by `imageLoader.js`).

## License

This project is personal portfolio code. Feel free to reference the structure, but please don't copy the content (name, projects, resume) as your own.
