'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Use dynamic import with no SSR for the 3D model component
const SphereBackground = dynamic(() => import('./SphereBackground'), { 
  ssr: false,
  loading: () => null
});

const HeroSection = () => {
  // State to control when to render the 3D model
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render the 3D model on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: 'https://github.com/rudypaningal', label: 'GitHub' },
    { icon: <FaInstagram size={24} />, href: 'https://instagram.com/rudypaningal', label: 'Instagram' },
    { icon: <FaLinkedin size={24} />, href: 'https://linkedin.com/in/rudypaningal', label: 'LinkedIn' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16">
      {/* 3D sphere background - positioned absolute to cover the entire section */}
      <div className="absolute inset-0 z-0">
        {isMounted && <SphereBackground />}
      </div>
      
      {/* Small hint text for interaction */}
      <div className="absolute bottom-10 left-10 text-gray-400 text-sm opacity-70 z-10 md:block hidden">
        <span className="animate-pulse">Drag the sphere to rotate</span>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - empty space for the sphere to show */}
          <div className="w-full md:w-1/2 order-2 md:order-1 h-[400px] md:h-auto"></div>

          {/* Content on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative z-10"
            >
              <span className="gradient-text"><span className="text-amber-50">Hi,I&apos;m </span>Rudy Paningal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 relative z-10"
            >
              Fullstack Web Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-6 relative z-10 mb-10"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, color: '#7F00FF' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link 
                href="#education" 
                className="px-8 py-4 bg-primary/80 hover:bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30 backdrop-blur-md text-lg"
              >
                Explore My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 