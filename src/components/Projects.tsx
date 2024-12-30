import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import image from '../utils/ecommerce-eduma.png';
import photo from '../utils/foodiesphoto.png';
const projects = [
  {
    title: 'Employee Management System',
    description: 'Developed a fully functional web-based Employee Management System using React.js, HTML, and Tailwind CSS. Designed an intuitive UI for seamless user interaction and utilized localStorage for efficient data handling.'+ ' If you can go to the web site first you shuold enter '+'for  ADMIN EMAIL - admin@me.com ,PASSWORD - 123 '+' FOR EMPLOYEE EMAIL - employee5@example.com'+'PASSWORD - 123',
    Features: 'Product Listings, Shopping Cart Functionality, Responsive Design.' ,
    image: ems,
    tech: ['HTML5', 'JavaScript', 'ReactJs', 'TailwindCSS'],
    github: 'https://github.com/8deepak/EMS.git',
    live: 'https://8deepak.github.io/EMS/',
    details: 'Key features include: ' +
             'Interactive UI enabling task assignment and workflow management. ' +
             'Task status tracking with "Accepted" and "Completed" options for employees. ' +
             'Scalable solution with reusable components and performance optimization. ' +
             'Data persistence via localStorage, ensuring offline access and efficient storage.',

  },
  {
    title: 'Ecommerce - Eduma',
    description: 'Developed a responsive e-commerce website using HTML, CSS, Bootstrap, and JavaScript. The site features a user-friendly design with modern UI elements, seamless navigation, and interactive components for enhanced user engagement. ',
    image: image,
    tech: ['HTML', 'JavaScript', 'Bootstrap','CSS'],
    github: 'https://github.com/8deepak/eduma-website.git',
    live: 'https://8deepak.github.io/eduma-website/',
    details: 'This demo site showcases the ecclommerce capabilities, illustrating how educational institutions or online course providers can integrate an online store into their platforms.',
    Features:'Product Listings, Shopping Cart Functionality, Responsive Design, ',

    
  },
  {
    title: 'Foodies Website',
    description: 'The FOODIES website is a food and restaurant-themed website built using HTML, CSS, and Bootstrap. It offers a responsive design with user-friendly navigation, displaying content such as restaurant menus, food items, and reviews.You can view more details about the project ',
    image: photo,
    tech: ['HTLM5', 'CSS', 'Bootstrap'],
    github: 'https://github.com/8deepak/FOODIES.git',
    live: 'https://8deepak.github.io/FOODIES/',
    details: 'A scalable e-commerce solution with real-time updates and an optimized backend.',
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
