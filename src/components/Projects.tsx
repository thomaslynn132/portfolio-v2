import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  englishGrammar,
  homePage,
  alyMyanmar,
  ToDoList,
  Portfolio,
  PiVaping,
  Books,
  ShalKyi,
  tapNumberGame,
} from "../assets/index";

const projects = [
  {
    name: "Tap Number Game",
    img: tapNumberGame,
    description: "A fun number tapping game to test your speed and reflexes.",
    tech: ["React", "JavaScript", "CSS"],
    demo: "https://tap-number-game.vercel.app/",
    github: "https://github.com/thomaslynn132/tap-number-game",
  },
  {
    name: "The WPPOOL Index",
    img: Books,
    description:
      "Data visualization dashboard with interactive charts and filters.",
    tech: ["React", "Chart.js", "Tailwind CSS"],
    demo: "https://wppoolindex.vercel.app/",
    github: "https://github.com/thomaslynn132/wppoolindex",
  },
  {
    name: "Pi Vaping Store",
    img: PiVaping,
    description: "E-commerce store for vaping products with a modern UI.",
    tech: ["React", "Bootstrap", "CSS"],
    demo: "https://pi-vaping-store.vercel.app/",
    github: "https://github.com/thomaslynn132/pi_vaping_store",
  },
  {
    name: "English Grammar App",
    img: englishGrammar,
    description:
      "Interactive English learning platform with grammar exercises and quizzes.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    demo: "https://learn-english-with-thomas132.web.app/",
    github: "https://github.com/thomaslynn132/EnglishGrammar",
  },
  {
    name: "ALY Myanmar Website",
    img: alyMyanmar,
    description: "Corporate website with modern design and responsive layout.",
    tech: ["React", "Bootstrap", "Framer Motion"],
    demo: "https://aly-myanmar.vercel.app/",
    github: undefined,
  },
  {
    name: "My Todo App",
    img: ToDoList,
    description:
      "Feature-rich todo application with real-time updates and data persistence.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    demo: "https://delightful-donut-b6d2ea.netlify.app/",
    github: "https://github.com/thomaslynn132/todolistapp",
  },
  {
    name: "My Portfolio V1",
    img: Portfolio,
    description:
      "Personal portfolio website to showcase projects and experience.",
    tech: ["React", "Framer Motion", "CSS"],
    demo: "https://portfolio-v2-sage-nine.vercel.app/",
    github: "https://github.com/thomaslynn132/portfolio",
  },
  {
    name: "Homepage Design for Contest",
    img: homePage,
    description: "A modern homepage UI designed for a competition.",
    tech: ["HTML", "CSS"],
    demo: undefined,
    github: "https://github.com/thomaslynn132/homepage-design",
  },
  {
    name: "Shal Kyi Movie App",
    img: ShalKyi,
    description:
      "Movie streaming platform with user authentication and favorites list.",
    tech: ["React", "Bootstrap", "Firebase", "NextCloud", "Video.js", "GSAP"],
    demo: "https://movies-app-wine-seven.vercel.app/",
    github: undefined,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-black/25 transition-shadow">
              {/* Background Image on Hover */}
              <div
                className="absolute inset-0 w-full h-full bg-center dark:opacity-55 bg-cover bg-no-repeat group-hover:opacity-25 opacity-5 transition-opacity duration-500"
                style={{ backgroundImage: `url(${project.img})` }}>
                <div className="w-full h-full dark:bg-black/65"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex absolute bottom-3 w-full pr-10 justify-between">
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
