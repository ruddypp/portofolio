'use client';

import React, { useState, useRef } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiTypescript, SiFirebase, SiPostgresql, SiPrisma, SiKotlin, SiSqlite, SiPhp, SiBootstrap, SiMysql} from 'react-icons/si';
import Image from 'next/image';

const ProjectSection = () => {
  // State to handle image loading errors
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleImageError = (project: string) => {
    setImageErrors(prev => ({
      ...prev,
      [project]: true
    }));
  };

  // Project data
  const projects = [
    {
      id: 'project1',
      title: 'Paramata Inventory System',
      description: 'Paramata is a comprehensive inventory management application built using Next.js and initialized with create-next-app. The application is designed to manage equipment inventory, calibration, maintenance, and rentals with an integrated notification system.',
      status: 'completed',
      image: '/images/projects/1.png',
      techStack: [
        { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
        { icon: <SiPostgresql className="text-[#1660ff]" />, name: 'Postgresql'},
        { icon: <SiPrisma className="text-white" />, name: 'Prisma' },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' }
      ],
      github: 'https://github.com/ruddypp/Kerja-PraktikV2',
      demo: 'https://www.paramata-baraya.site/login'
    },
    {
      id: 'project2',
      title: 'Hospital Queue System Application',
      description: 'Hospital Queue System Application is an Android application designed to facilitate patient queue management in hospitals. This application allows patients to register independently and get a queue number, while hospital staff can manage and call patients in order.',
      status: 'completed',
      image: '/images/projects/2.png',
      techStack: [
        { icon: <SiKotlin className="text-[#704767]" />, name: 'Kotlin' },
        { icon: <SiSqlite className="text-blue-500" />, name: 'SQLite' },
      ],
      github: 'https://github.com/ruddypp/rs-citra-medika',
      demo: ''
    },
    {
      id: 'project3',
      title: 'Portaldik',
      description: 'Portaldik is a web-based e-learning application designed to facilitate materials, quizzes, and questionnaires as feedback from performance and questions given. There are four types of users: Admin, Teacher, Student, and Principal. This application is implemented at SDN 05 Bintaro',
      image: '/images/projects/3.png',
      techStack: [
        { icon: <SiPhp className="text-[#612a81]" />, name: 'PHP' },
        { icon: <SiBootstrap className="text-[#612a81]" />, name: 'Bootstrap' },
        { icon: <SiMysql className="text-[#4606f7]" />, name: 'MySQL' },
      ],
      github: 'https://github.com/ruddypp/e-learning',
      demo: 'https://tplp8.my.id/elearning/'
    },
    {
      id: 'project4',
      title: 'Didi Kalibrasi Employee Management and Payroll System',
      description: 'Didi Kalibrasi Employee Management and Payroll System is a web-based application designed to manage employee data, attendance, and payroll. This application is implemented at PT Didi Kalibrasi',
      status: 'completed',
      image: '/images/projects/4.png',
      techStack: [
        { icon: <SiPhp className="text-[#612a81]" />, name: 'PHP' },
        { icon: <SiBootstrap className="text-[#612a81]" />, name: 'Bootstrap' },
        { icon: <SiMysql className="text-[#4606f7]" />, name: 'MySQL' },
      ],
      github: 'https://github.com/ruddypp/didi-kalibrasi',
      demo: 'https://didikalibrasi.com/abdika/login.php'
    },
    {
      id: 'project5',
      title: 'Bento Kopi Inventory System',
      description: 'Bento Kopi Inventory System is a web-based application designed to manage stock, suppliers, receipts, expenses, stock opname, and returns. This application is built using native PHP, MySQL, and Tailwind CSS.',
      status: 'completed',
      image: '/images/projects/5.png', 
      techStack: [
        { icon: <SiPhp className="text-[#612a81]" />, name: 'PHP' },
        { icon: <SiBootstrap className="text-[#612a81]" />, name: 'Bootstrap' },
        { icon: <SiMysql className="text-[#4606f7]" />, name: 'MySQL' },
      ],
      github: 'https://github.com/ruddypp/bento-kopi',
      demo: 'tplp8.my.id/inventory/'
    },
    {
      id: 'project6',
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats and file sharing capabilities. Features include read receipts, typing indicators, and push notifications.',
      status: 'ongoing',
      image: '/images/projects/project6.jpg',
      techStack: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
        { icon: <SiFirebase className="text-[#FFCA28]" />, name: 'Firebase' },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' }
      ],
      github: 'https://github.com/rudypaningal/chat-app',
      demo: ''
    },
    {
      id: 'project7',
      title: 'Financial Dashboard',
      description: 'Interactive financial dashboard with expense tracking, budgeting tools and data visualization. Includes income/expense categorization, budget planning, and financial goal tracking.',
      status: 'ongoing',
      image: '/images/projects/project7.jpg',
      techStack: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
        { icon: <SiNodedotjs className="text-[#68A063]" />, name: 'Node.js' },
      ],
      github: 'https://github.com/rudypaningal/finance-app',
      demo: ''
    }
  ];

  // Calculate the number of projects to display at once based on screen size
  const projectsPerView = 3;
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Effect to scroll when currentIndex changes
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.scrollWidth / projects.length * currentIndex;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, projects.length]);

  return (
    <Section id="projects" title="Projects" subtitle="My recent work">
      {/* Decorative blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full filter blur-3xl"></div>
      
      <div className="relative z-10 px-4 sm:px-0">
        {/* Navigation buttons */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full ${currentIndex === 0 ? 'bg-gray-800/50 text-gray-600' : 'bg-primary/20 text-primary hover:bg-primary/30'} transition-colors`}
            aria-label="Previous projects"
          >
            <FaChevronLeft />
          </button>
          
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index >= currentIndex && index < currentIndex + projectsPerView 
                    ? 'bg-primary' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`p-3 rounded-full ${currentIndex >= maxIndex ? 'bg-gray-800/50 text-gray-600' : 'bg-primary/20 text-primary hover:bg-primary/30'} transition-colors`}
            aria-label="Next projects"
          >
            <FaChevronRight />
          </button>
        </div>
        
        {/* Project cards container with horizontal scrolling */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc(50%-12px)] xl:auto-cols-[calc(33.333%-16px)] gap-5 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index - currentIndex, 2) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full snap-start"
            >
              <div className="glass-card h-full backdrop-blur-xl relative overflow-hidden flex flex-col">
                {/* Inner light effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
                
                {/* Project Image */}
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                  {imageErrors[project.id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-black/40">
                      <div className="text-center">
                        <div className="text-primary text-3xl sm:text-4xl font-bold">{project.title.charAt(0)}</div>
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
                  <div className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'On Going'}
                  </div>
                </div>
                
                <div className="relative z-10 p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">{project.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.techStack.map((tech, index) => (
                        <div 
                          key={index} 
                          className="bg-background/30 p-1.5 sm:p-2 rounded-full flex items-center justify-center text-gray-300 hover:bg-background/50 transition-colors group relative"
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
                  <div className="flex gap-2 sm:gap-3 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 bg-background/30 hover:bg-primary/20 text-gray-300 hover:text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-colors"
                    >
                      <FaGithub size={14} />
                      <span className="text-xs sm:text-sm">GitHub</span>
                    </a>
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 bg-primary/20 hover:bg-primary/40 text-gray-300 hover:text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span className="text-xs sm:text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectSection;