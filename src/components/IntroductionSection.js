'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaUser } from 'react-icons/fa';
import Section from './Section';
import GlassCard from './GlassCard';

const IntroductionSection = () => {
  // State to handle image loading error
  const [imageError, setImageError] = useState(false);
  
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Focus areas in web development
  const focusAreas = [
    {
      icon: <FaCode className="text-primary text-2xl" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <FaServer className="text-primary text-2xl" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs using Node.js, Express, and database technologies."
    },
    {
      icon: <FaLaptopCode className="text-primary text-2xl" />,
      title: "Full Stack Integration",
      description: "Seamlessly connecting frontend and backend systems to create complete web applications."
    },
    {
      icon: <FaMobileAlt className="text-primary text-2xl" />,
      title: "Responsive Design",
      description: "Ensuring applications work flawlessly across all devices and screen sizes."
    }
  ];

  return (
    <Section id="introduction" title="Introduction" subtitle="Get to know me better">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 px-4 sm:px-0">
        {/* Photo Card - Left Side */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="h-full flex flex-col items-center justify-center p-4 sm:p-6">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 mb-4 sm:mb-6 bg-black/30">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-black/40">
                  <FaUser className="text-5xl sm:text-6xl text-primary/70" />
                </div>
              ) : (
                <Image 
                  src="/images/rudy.jpg" 
                  alt="Rudy Paningal" 
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Rudy Paningal</h3>
            <p className="text-gray-300 text-center text-sm sm:text-base">Fullstack Web Developer based in Indonesia, passionate about creating modern web applications.</p>
            
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 w-full">
              <div className="text-center">
                <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
                <p className="text-white font-medium text-sm sm:text-base">1Years</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                <p className="text-white font-medium text-sm sm:text-base">Indonesia</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
        
        {/* About Me & Focus Areas - Right Side */}
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="h-full p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">About Me</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Hello! I&apos;m Rudy Paningal, a passionate Fullstack Web Developer with expertise in modern web technologies. 
              I specialize in creating responsive, user-friendly web applications that provide exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              With a strong foundation in both frontend and backend development, I enjoy tackling complex problems and turning ideas into 
              functional, elegant solutions. My approach combines technical expertise with creativity to build applications that not only work 
              flawlessly but also look great.
            </p>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">My Focus Areas</h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {focusAreas.map((area, index) => (
                <motion.div 
                  key={index} 
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-primary/10"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-2 sm:mb-3">
                    {area.icon}
                    <h4 className="text-base sm:text-lg font-semibold text-white ml-3">{area.title}</h4>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">{area.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default IntroductionSection; 