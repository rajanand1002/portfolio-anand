
import { useEffect, useState } from "react";

import Loader from "./components/Loader";
// import BackgroundBlobs from "./components/BackgroundBlobs";
// import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";

import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  

  // Light / Dark Mode
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <ScrollProgress />
      <Loader hidden={loaderHidden} />

      {/* <BackgroundBlobs />
      <ParticleBackground /> */}

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>

      <Footer />

      {/* <CursorGlow /> */}
      <BackToTop />
      <CommandPalette />
    </>
  );
}

export default App;