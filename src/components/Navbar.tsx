import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'skills', 'projects', 'contact'];
      
      // Check which section is in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Check if page is scrolled for navbar background change
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`py-4 px-6 transition-all duration-300 ${
        scrolled ? 'glass-card !bg-[rgba(13,13,13,0.8)]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold">
            <span className="gradient-text">Rudy Paningal</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="md:flex space-x-8 flex justify-center items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden relative z-20 w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            ></span>
          </button>

          {/* Mobile Navigation Menu */}
          <motion.div 
            className={`fixed top-0 right-0 h-screen w-full md:hidden glass-card backdrop-blur-lg !bg-[rgba(13,13,13,0.9)]`}
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? '0%' : '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full justify-center items-center">
              <ul className="flex flex-col space-y-6 items-center">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      href={item.href}
                      className={`text-xl font-medium hover:text-primary transition-colors ${
                        activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar; 