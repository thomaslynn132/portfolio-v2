import React from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "./context/ThemeContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Logo } from "./assets";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 transition-colors duration-200">
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center justify-start">
              <img src={Logo} alt="Logo" className="w-16 h-16 " />
              <h1 className="text-orange-700 font-bold hidden md:block">My Portfolio V2</h1>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }>
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
