import { motion } from 'framer-motion';
import Section from './Section';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, 
  FaDatabase, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiMongodb, 
  SiPostgresql, SiJquery, SiTailwindcss 
} from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={60} className="text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt size={60} className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs size={60} className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact size={60} className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={60} className="text-white" /> },
    { name: 'TypeScript', icon: <SiTypescript size={60} className="text-[#3178C6]" /> },
    { name: 'PHP', icon: <FaPhp size={60} className="text-[#777BB4]" /> },
    { name: 'MySQL', icon: <FaDatabase size={60} className="text-[#4479A1]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={60} className="text-[#336791]" /> },
    { name: 'MongoDB', icon: <SiMongodb size={60} className="text-[#47A248]" /> },
    { name: 'jQuery', icon: <SiJquery size={60} className="text-[#0769AD]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} className="text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={60} className="text-[#7952B3]" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section id="skills" title="Skills">
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-light/5 rounded-full filter blur-3xl"></div>
      
      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={item} className="flex justify-center">
            <motion.div 
              className="relative w-24 h-24 flex items-center justify-center rounded-full backdrop-blur-sm bg-black/10 hover:bg-black/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.15,
                boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Glass effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute inset-0 rounded-full border border-white/10"></div>
              
              {/* Inner glow on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative z-10">
                {skill.icon}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SkillsSection; 