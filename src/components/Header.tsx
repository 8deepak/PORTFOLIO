import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Deepak
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle />
            <SocialLinks />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
    {['About', 'Projects', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <>
    <a href="https://github.com/8deepak" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      <Github size={20} />
    </a>
    <a href="https://www.linkedin.com/in/deepak-singh-8933b9200/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      <Linkedin size={20} />
    </a>
    <a href="singhdeepakk766@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      <Mail size={20} />
    </a>
  </>
);