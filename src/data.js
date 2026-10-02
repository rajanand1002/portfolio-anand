// Central place to edit your content — no need to touch components below.

export const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "ReactJS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["SQL", "MongoDB"] },
  { group: "Programming Languages", items: ["Java", "JavaScript"] },
  { group: "Core CS", items: [ "Data Structures", "Algorithms", "Object-Oriented Programming", "DBMS"," Computer Networks"] },
  { group: "Tools", items: ["Git & GitHub", "VS Code", "Netlify", "Postman"] },
];

export const projects = [
  {
    title: "Portfolio",
    description: "Personal Portfolio Website",
    tech: "HTML • CSS • JS",
    link: "https://anandkrr.netlify.app/",
    github: "https://github.com/rajanand1002/portfolio-anand", 
    image: "portfolio2.png",
    problem:
      "Needed a single place to showcase my projects and skills to recruiters instead of sending scattered links.",
    approach:
      "Built it fully custom with vanilla HTML/CSS/JS — no template — focusing on smooth scroll-based animations and a responsive layout that works from mobile to desktop.",
    challenges:
      "Getting the scroll-reveal and cursor-glow effects to stay smooth on lower-end mobile devices took some performance tuning (throttling scroll listeners, using CSS transforms instead of top/left).",
    improve:
      "Would add a CMS or JSON-driven content layer so I don't have to touch markup every time I add a project.",
  },
  {
    title: "Smart Task Manager",
    description: "Manage the tasks like a Pro",
    tech: "HTML • CSS • JS",
    link: "https://smart-task-manager-pro.netlify.app/",
    github: "", // TODO: add your repo link
    image: "TaskManager.png",
    problem:
      "Wanted a task manager that actually persists data and feels usable day to day, not just a UI demo.",
    approach:
      "Used localStorage to persist tasks across sessions, with add/edit/delete/complete flows and filtering by status.",
    challenges:
      "Keeping the UI in sync with localStorage without re-rendering the whole list on every change was trickier than expected — solved it by diffing task IDs instead of re-drawing everything.",
    improve:
      "Next step is moving storage to a real backend (Node + MongoDB) so tasks sync across devices — this is actually what pushed me toward learning the MERN stack.",
  },
  {
    title: "Tic Tac Toe",
    description: "Responsive UI",
    tech: "HTML • CSS • JS",
    link: "https://tictactoe-anand.netlify.app/",
    github: "https://github.com/rajanand1002/Tic-Tac-Toe-Game",
    image: "TicTacToe.png",
    problem:
      "Wanted to practice core JavaScript logic — game state, win detection, turn management — without any framework to lean on.",
    approach:
      "Implemented win-checking with a set of index combinations, and used a simple state object to track turns and board state.",
    challenges:
      "Handling edge cases like draw detection and preventing clicks after a win took a bit of careful condition-checking.",
    improve:
      "Could add an unbeatable AI opponent using the minimax algorithm — on my list to revisit after finishing DSA basics.",
  },
  {
    title: "Blinkit Clone",
    description: "Responsive UI Clone",
    tech: "HTML • CSS • JS",
    link: "https://blinkitanand.netlify.app/",
    github: "https://github.com/rajanand1002/Blinkit-Clone",
    image: "Blinkit.png",
    problem:
      "Wanted to practice replicating a real, complex production UI — grids, cards, responsive breakpoints — rather than a simple layout.",
    approach:
      "Broke the UI down section by section (nav, categories, product grid) and rebuilt each with pure CSS Grid/Flexbox, matching spacing and responsiveness pixel by pixel.",
    challenges:
      "Getting the product grid to reflow cleanly across breakpoints without fixed pixel values meant rethinking the layout with `minmax()` and `auto-fit`.",
    improve:
      "Would add real state — a working cart with add/remove and quantity — instead of a static UI.",
  },

  {
  title: "Shortly – URL Shortener",
  description: "Shorten URLs & Track Clicks",
  tech: "React • Node.js • Express • MongoDB",
  link: "https://shortly-url-shortener-2.onrender.com",
  github: "https://github.com/rajanand1002/shortly-url-shortener",
  image: "urlshortner.png",

  problem:
    "Managing and sharing long URLs can be inconvenient. I wanted to build a simple application that converts long URLs into short, shareable links and allows users to track link visits.",

  approach:
    "Built a full-stack URL shortener using React, Node.js, Express.js, and MongoDB. Users can generate short links, copy and share them, view click analytics, and access their recent links.",

  challenges:
    "Implementing URL validation, generating unique short IDs, recording click history, and connecting the React frontend with the Express API required careful handling of backend logic and asynchronous requests.",

  improve:
    "Would add user authentication, custom short URLs, QR code generation, and more detailed analytics, along with cloud-based link management."
},
];

// Journey / learning timeline — shown in a dedicated section to demonstrate
// genuine, self-driven progression (not something an AI generator would know).
export const journey = [
  {
    date: "Started",
    title: "Began with HTML, CSS & JavaScript",
    description:
      "Learned the fundamentals by building small static pages and slowly moving into interactive UI.",
  },
  {
    date: "Next",
    title: "Built first real projects",
    description:
      "Tic-Tac-Toe, Task Manager, and UI clones to practice DOM manipulation, layout, and responsive design.",
  },
  {
    date: "Currently",
    title: "Learning the MERN stack",
    description:
      "Moving from static sites to full applications — React on the frontend, Node/Express/SQL on the backend.",
  },
  {
    date: "In parallel",
    title: "DSA in Java + Aptitude prep",
    description:
      "Practicing data structures and algorithms daily to build strong problem-solving fundamentals for interviews.",
  },
];

// Fill in your real profile links/usernames — shown as a stats/links section.
export const codingProfiles = {
  leetcode: "https://leetcode.com/u/AnandKr_1002/",

};

export const typingWords = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Problem Solver",
];

export const resumeUrl =
  "https://drive.google.com/file/d/1rzjwRmU_sfMII82E4r0l1XwwWGalg8qS/view?usp=drivesdk";

export const emailjs = {
  publicKey: "IrQXdu-0Iy-iMrJ5R",
  serviceId: "service_zr0bdl2",
  templateId: "template_gv4urhg",
};

export const contactEmail = "anandraj912801@gmail.com";

export const socials = {
  linkedin: "https://www.linkedin.com/in/anandkrr/",
  github: "https://github.com/rajanand1002",
};

export const githubUsername = "rajanand1002";
