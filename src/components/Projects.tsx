import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';
import GlassCard from './GlassCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiMongodb, SiExpress, SiFirebase
} from 'react-icons/si';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform with user authentication, product catalog, and payment integration.",
      image: "/images/project-1.jpg",
      status: "Completed",
      github: "https://github.com/username/ecommerce",
      demo: "https://example.com",
      tech: [
        { name: "React", icon: <SiReact size={20} /> },
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "Express", icon: <SiExpress size={20} /> },
        { name: "MongoDB", icon: <SiMongodb size={20} /> }
      ]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern UI and animations to showcase projects and skills.",
      image: "/images/project-2.jpg",
      status: "Completed",
      github: "https://github.com/username/portfolio",
      demo: "https://example.com",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
        { name: "TypeScript", icon: <SiTypescript size={20} /> }
      ]
    },
    {
      title: "Task Management App",
      description: "A productivity application for task management with drag-and-drop interface and collaboration features.",
      image: "/images/project-3.jpg",
      status: "On Going",
      github: "https://github.com/username/task-app",
      tech: [
        { name: "React", icon: <SiReact size={20} /> },
        { name: "Firebase", icon: <SiFirebase size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> }
      ]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with forecast data and customizable views for different locations.",
      image: "/images/project-4.jpg",
      status: "Completed",
      github: "https://github.com/username/weather-app",
      demo: "https://example.com",
      tech: [
        { name: "React", icon: <SiReact size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> }
      ]
    },
    {
      title: "Blog Platform",
      description: "Content management system for blogs with markdown support, user authentication and commenting system.",
      image: "/images/project-5.jpg",
      status: "Completed",
      github: "https://github.com/username/blog-platform",
      demo: "https://example.com",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs size={20} /> },
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "MongoDB", icon: <SiMongodb size={20} /> }
      ]
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats and file sharing capabilities.",
      image: "/images/project-6.jpg",
      status: "On Going",
      github: "https://github.com/username/chat-app",
      tech: [
        { name: "React", icon: <SiReact size={20} /> },
        { name: "Firebase", icon: <SiFirebase size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> }
      ]
    },
    {
      title: "Financial Dashboard",
      description: "Interactive financial dashboard with expense tracking, budgeting tools and data visualization.",
      image: "/images/project-7.jpg",
      status: "On Going",
      github: "https://github.com/username/finance-app",
      tech: [
        { name: "React", icon: <SiReact size={20} /> },
        { name: "TypeScript", icon: <SiTypescript size={20} /> },
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "MongoDB", icon: <SiMongodb size={20} /> }
      ]
    }
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setActiveProject(index)}
            onHoverEnd={() => setActiveProject(null)}
          >
            <GlassCard 
              className="h-full flex flex-col overflow-hidden relative group"
              hoverEffect={false}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                <div className="bg-gradient-to-br from-primary/30 to-primary-dark/30 absolute inset-0"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium z-20 ${
                project.status === "Completed" 
                  ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                  : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
              }`}>
                {project.status}
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="bg-background/40 p-2 rounded-full flex items-center justify-center text-gray-300"
                        title={tech.name}
                      >
                        {tech.icon}
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
                    className="flex items-center gap-2 bg-background/40 hover:bg-primary/20 text-gray-300 hover:text-white py-2 px-4 rounded-full transition-colors"
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
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects; 