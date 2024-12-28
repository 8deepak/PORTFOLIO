import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    details: 'This project involves creating a web app with advanced TypeScript features and reusable components.',
  },
  {
    title: 'Project 2',
    description: 'Full-stack e-commerce platform with real-time features',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    details: 'A scalable e-commerce solution with real-time updates and an optimized backend.',
  },
  {
    title: 'Project 3',
    description: 'Mobile-first social media dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tech: ['Vue.js', 'Firebase', 'Sass'],
    github: 'https://github.com',
    live: 'https://example.com',
    details: 'Designed for mobile users, this dashboard provides real-time analytics for social media platforms.',
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          ✖
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.details}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Github size={20} className="mr-2" />
            Code
          </a>
          <a
            href={project.live}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ExternalLink size={20} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
