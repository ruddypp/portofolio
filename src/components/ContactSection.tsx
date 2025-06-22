import { motion } from 'framer-motion';
import Section from './Section';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <Section id="contact" title="Contact Me">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let&apos;s create something amazing together!
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactSection; 