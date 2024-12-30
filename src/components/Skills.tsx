import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'Tailwind CSS', 'Bootstrap','HTML5','CSS','JavaScript'],
  },
  {
    category: 'Backend',
    icon: Database,
    items: [, 'Python', 'SQL',],
  },
  {
    category: 'DevOps',
    icon: Settings,
    items: ['AWS cloud Practitioner', 'Git','Github']
  },
  {
    category: 'Languages',
    icon: Code2,
    items: ['JavaScript', 'Python', 'SQL'],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
        <h3 className="text-xl font-bold dark:text-white">{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};