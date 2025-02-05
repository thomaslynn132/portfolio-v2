import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'OBS Myanmar',
    position: 'Frontend Developer',
    period: 'Sept 2024 - Present',
    description: [
      'Developing modern UI components with React JS and Tailwind CSS',
      'Integrating frontend with backend APIs',
      'Implementing responsive designs and ensuring cross-browser compatibility',
    ],
  },
  {
    company: 'Freelance',
    position: 'Frontend Developer',
    period: 'Sept 2023 - Dec 2023',
    description: [
      'Built responsive websites using React JS',
      'Collaborated with clients to deliver custom web solutions',
      'Implemented modern UI/UX designs',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Experience = () => {
  return (
    <section className="py-20 bg-white min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Experience
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                </div>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"
              >
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience