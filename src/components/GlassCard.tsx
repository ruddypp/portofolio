import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

const GlassCard = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0 
}: GlassCardProps) => {
  return (
    <motion.div
      className={`glass-card p-6 ${className} ${
        hoverEffect ? 'hover:translate-y-[-5px] transition-transform duration-300' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard; 