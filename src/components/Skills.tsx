import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiPostman,
  SiBootstrap,
  SiSwr,
} from "react-icons/si";
import { DiGithub } from "react-icons/di";

const skills = [
  { name: "HTML5", level: "Advanced", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", level: "Advanced", icon: <FaCss3Alt color="#1572B6" /> },
  {
    name: "JavaScript (ES6+)",
    level: "Advanced",
    icon: <FaJs color="#F7DF1E" />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: <SiTypescript color="#3178C6" />,
  },
  { name: "React.js", level: "Advanced", icon: <FaReact color="#61DAFB" /> },
  {
    name: "Next.js",
    level: "Intermediate",
    icon: <SiNextdotjs color="#000000" />,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss color="#38B2AC" />,
  },
  {
    name: "Redux Toolkit",
    level: "Intermediate",
    icon: <SiRedux color="#764ABC" />,
  },
  {
    name: "Firebase",
    level: "Intermediate",
    icon: <SiFirebase color="#FFCA28" />,
  },
  { name: "REST APIs", level: "Advanced", icon: <SiPostman color="#FF6C37" /> },
  {
    name: "GitHub",
    level: "Advanced",
    icon: <FaGithub className=" text-black" />,
  },
  {
    name: "SWR",
    level: "Intermediate",
    icon: <SiSwr className="text-gray-400" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.level}
                  </p>
                </div>
                <div className="text-5xl">{skill.icon}</div>
              </div>
              <div className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: skill.level === "Advanced" ? "100%" : "75%",
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
