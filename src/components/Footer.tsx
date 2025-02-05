import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Thant Lynn Naing</h3>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="hover:text-blue-400 transition-colors">
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#about"
              className="hover:text-blue-400 transition-colors">
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#projects"
              className="hover:text-blue-400 transition-colors">
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#contact"
              className="hover:text-blue-400 transition-colors">
              Contact
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-6 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://github.com/thomaslynn132"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              href="https://www.linkedin.com/in/thant-lynn-naing-788b282a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="mailto:thantlinnaing0000@gmail.com"
              className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Thant Lynn
            Naing © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
