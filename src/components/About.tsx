import React, { useState, useEffect } from "react";
import { myPhoto, myPhoto2 } from "../assets";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const About = () => {
  const images = [myPhoto, myPhoto2];
  const [shownImage, setShownImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShownImage((prevImage) =>
        prevImage === images[0] ? images[1] : images[0]
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section
      id="about"
      className="py-20 bg-white min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <img
                src={shownImage}
                alt="Thant Lynn Naing"
                className="relative min-w-48 h-48 duration-300 rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hi! I'm Thant Lynn Naing, a passionate Frontend Developer
                specializing in React.js. With expertise in modern web
                technologies including Next.js, Tailwind CSS, and Framer Motion,
                I create engaging and responsive web applications that deliver
                exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/thomaslynn132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/thant-lynn-naing-788b282a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:thantlinnaing0000@gmail.com"
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://drive.google.com/file/d/1mpRhANq6k-9Fl8V0AM2N-iYrYHNKEdjS/view?usp=drive_link"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {/* <Download className="w-4 h-4" /> */}
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
