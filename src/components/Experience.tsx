import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developer/Designer Intern',
    company: 'Alobha Technologies Pvt Ltd',
    period: '04/2024 - 09/2024',
    description: [
      'Designed and developed visually appealing, fully responsive landing pages and multiple web pages.',
      'Troubleshot and resolved over 60+ reported bugs, enhancing site performance by 30%.',
      'Actively updated and managed issue tickets, ensuring smooth communication between teams.',
      'Mediated between teams by tracking, escalating, and resolving technical challenges.',
      'Performed Unit testing to diagnose site issues, reducing load times by 25%.',
      'Used GitHub for version control and collaboration.'
    ],
  },
  {
    period: '2021 - 2024',
    title: 'Bachelor of Computer Applications',
    company: 'BTTS, GGSIPU',
   
    // description: [
    //   'Collaborated with clients to create personalized, responsive websites using HTML, CSS, and JavaScript.',
    //   'Integrated REST APIs to fetch and display live data dynamically.',
    //   'Improved website performance through optimization techniques, achieving 40% faster load times.',
    //   'Provided technical support and maintenance for ongoing projects.',
    //   'Used React.js to develop interactive user interfaces for clients in various industries.'
    // ],
  },
];



export const Experience = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Experience & Education</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-blue-600 dark:bg-blue-400" />
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg ml-4">
        <div className="flex items-center mb-2">
          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
          <h3 className="text-xl font-bold dark:text-white">{experience.title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{experience.company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{experience.period}</p>
        <p className="text-gray-700 dark:text-gray-200">{experience.description}</p>
      </div>
    </motion.div>
  );
};