"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection.js';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 border-t-4 border-primary rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <HeroSection />
        <IntroductionSection />
        <EducationSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 text-sm">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Rudy Paningal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
