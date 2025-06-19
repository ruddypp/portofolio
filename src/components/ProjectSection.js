'use client';

import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

const ProjectSection = () => {
  // State to handle image loading errors
  const [imageErrors, setImageErrors] = useState({
    project1: false,
    project2: false,
    project3: false
  });

  const handleImageError = (project) => {
    setImageErrors(prev => ({
      ...prev,
      [project]: true
    }));
  };

  // Project data
  const projects = [
    {
      id: 'project1',
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, and payment integration. Features include product search, filtering, cart management, and secure checkout process.',
      status: 'completed',
      image: '/images/projects/project1.jpg',
      techStack: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
        { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
        { icon: <SiNodedotjs className="text-[#68A063]" />, name: 'Node.js' },
        { icon: <SiMongodb className="text-[#4DB33D]" />, name: 'MongoDB' }
      ],
      github: 'https://github.com/rudypaningal/ecommerce',
      demo: 'https://example.com',
      delay: 0
    },
    {
      id: 'project2',
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern UI and animations to showcase projects and skills. Features include interactive 3D elements, smooth scrolling, and responsive design.',
      status: 'ongoing',
      image: '/images/projects/project2.jpg',
      techStack: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
        { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' }
      ],
      github: 'https://github.com/rudypaningal/portfolio',
      demo: '',
      delay: 0.1
    },
    {
      id: 'project3',
      title: 'Task Management App',
      description: 'A productivity application for task management with drag-and-drop interface and collaboration features. Includes task categorization, priority levels, due dates, and team assignment capabilities.',
      status: 'completed',
      image: '/images/projects/project3.jpg',
      techStack: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
        { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
        { icon: <SiNodedotjs className="text-[#68A063]" />, name: 'Node.js' }
      ],
      github: 'https://github.com/rudypaningal/task-app',
      demo: 'https://example.com',
      delay: 0.2
    }
  ];

  return (
    <Section id="projects" title="Projects" subtitle="My recent work">
      {/* Decorative blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full filter blur-3xl"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.delay }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <div className="glass-card h-full backdrop-blur-xl relative overflow-hidden flex flex-col">
              {/* Inner light effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
              
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                {imageErrors[project.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-black/40">
                    <div className="text-center">
                      <div className="text-primary text-4xl font-bold">{project.title.charAt(0)}</div>
                      <div className="text-xs text-gray-400 mt-2">Image not available</div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    onError={() => handleImageError(project.id)}
                  />
                )}
                
                {/* Status Badge */}
                <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'On Going'}
                </div>
              </div>
              
              <div className="relative z-10 p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow text-sm">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <div 
                        key={index} 
                        className="bg-background/30 p-2 rounded-full flex items-center justify-center text-gray-300 hover:bg-background/50 transition-colors group relative"
                        title={tech.name}
                      >
                        {tech.icon}
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-background/30 hover:bg-primary/20 text-gray-300 hover:text-white py-2 px-4 rounded-full transition-colors"
                  >
                    <FaGithub size={16} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary/20 hover:bg-primary/40 text-gray-300 hover:text-white py-2 px-4 rounded-full transition-colors"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection; 