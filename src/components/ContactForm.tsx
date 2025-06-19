import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import GlassCard from './GlassCard';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace these values with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
        formRef.current!, 
        'YOUR_PUBLIC_KEY'
      );

      // You'll need to set up EmailJS account and create a template
      // that forwards messages to paningalrudy@gmail.com

      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="max-w-xl mx-auto backdrop-blur-2xl relative overflow-hidden">
      {/* Liquid light effect */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 p-8">
        {status.submitted && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-500/10 text-green-300 border border-green-500/30' : 'bg-red-500/10 text-red-300 border border-red-500/30'}`}
          >
            {status.message}
          </motion.div>
        )}
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="floating-label">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              required
              className="w-full"
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="floating-label">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
              className="w-full"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="floating-label">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              required
              rows={5}
              className="w-full"
            />
            <label htmlFor="message">Message</label>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-primary/80 hover:bg-primary text-white font-medium rounded-lg transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>
      </div>
    </GlassCard>
  );
};

export default ContactForm; 