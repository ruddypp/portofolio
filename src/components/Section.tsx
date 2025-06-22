import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id={id} 
      className={`min-h-screen py-16 sm:py-20 relative ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="mb-8 sm:mb-12 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-gray-400 mt-2 text-sm sm:text-base">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section; 