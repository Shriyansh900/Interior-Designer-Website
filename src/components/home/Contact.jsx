import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Button from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    // For demo, we'll just simulate a successful submission
    setFormStatus({ submitted: true, error: false });
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Our Studio',
      info: '123 Design Street, Suite 456, New York, NY 10001',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      info: '(212) 555-1234',
      link: 'tel:+12125551234',
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'info@eleganceinteriors.com',
      link: 'mailto:info@eleganceinteriors.com',
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      info: 'Monday-Friday: 9am-6pm, Weekend: By appointment',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-neutral-900 dark:text-white font-serif mb-4">
            Ready to <span className="text-accent-600 dark:text-accent-400">Transform</span> Your Space?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start your journey toward 
            a beautifully designed space that reflects your unique style and needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif font-medium text-neutral-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-neutral-900 dark:text-white">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {item.info}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h4 className="font-serif font-medium text-neutral-900 dark:text-white mb-3">
                Free Initial Consultation
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                We offer a complimentary 30-minute consultation to discuss your project 
                needs and see if we're the right fit for your vision.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8"
          >
            {formStatus.submitted ? (
              <div className="text-center py-10">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-16 h-16 text-green-500 mx-auto mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <h3 className="text-2xl font-serif font-medium text-neutral-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setFormStatus({ submitted: false, error: false })}
                  variant="secondary"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-serif font-medium text-neutral-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="space-planning">Space Planning</option>
                      <option value="renovation">Renovation Guidance</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="accent" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;