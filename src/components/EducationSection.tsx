import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from './Section';
import GlassCard from './GlassCard';

const EducationSection = () => {
  const education = [
    {
      level: 'Junior High School',
      school: 'SMP Negeri 24 Tangerang',
      year: '2016 - 2018',
      description: 'Completed junior high school education',
    },
    {
      level: 'Senior High School',
      school: 'SMK Budi Mulia',
      year: '2018 - 2021',
      description: 'Graduated from senior high school with graphics design specialization.',
    },
    {
      level: 'University',
      school: 'Universitas Pamulang',
      major: 'Teknik Informatika',
      year: '2022 - now',
      description: 'Studied Computer Science with focus on programming, algorithms, and software development.',
    },
  ];

  // Create individual refs for each education item
  const [ref0, inView0] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Array of refs and inView values for easier access
  const refData = [
    { ref: ref0, inView: inView0 },
    { ref: ref1, inView: inView1 },
    { ref: ref2, inView: inView2 }
  ];

  return (
    <Section id="education" title="Education">
      {/* Decorative blobs */}
      <div className="absolute left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute right-1/4 w-80 h-80 bg-primary-light/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 transform md:-translate-x-1/2 z-10"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => {
              const { ref, inView } = refData[index];
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className={`flex flex-col md:flex-row gap-8 relative ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  {/* Timeline dot with glow */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 top-10 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50 transform -translate-x-1/2 md:-translate-x-1/2 z-20"
                    animate={{ 
                      boxShadow: ['0 0 10px 0px rgba(127, 0, 255, 0.5)', '0 0 20px 2px rgba(127, 0, 255, 0.3)', '0 0 10px 0px rgba(127, 0, 255, 0.5)']
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Year - mobile only */}
                  <div className="md:hidden pl-8 text-primary font-medium">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <GlassCard className="backdrop-blur-xl relative overflow-hidden">
                      {/* Inner light effect */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
                      
                      <div className="relative z-10 p-6">
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {item.level}
                        </h3>
                        <h4 className="text-lg font-medium mb-1">
                          {item.school}
                        </h4>
                        {item.major && (
                          <p className="text-gray-300 mb-2">{item.major}</p>
                        )}
                        <p className="text-gray-400 mb-3 hidden md:block">
                          {item.year}
                        </p>
                        <p className="text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </GlassCard>
                  </div>
                  
                  {/* Empty space for timeline alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection; 