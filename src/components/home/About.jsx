import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Interior designer working"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg md:max-w-[200px] hidden md:block">
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">Experience</p>
              <p className="text-4xl font-serif text-neutral-900 dark:text-white font-semibold">15+</p>
              <p className="text-neutral-600 dark:text-neutral-400">Years in design</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-neutral-900 dark:text-white font-serif mb-6">
              Passionate About <span className="text-accent-600 dark:text-accent-400">Creating</span> Beautiful Spaces
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              At Elegance Interiors, we believe that great design has the power to transform not just spaces, but lives. For over 15 years, we&apos;ve been crafting interiors that inspire, comfort, and delight.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              Our approach combines aesthetic excellence with functional intelligence. We listen carefully to your needs, respect your vision, and enhance it with our expertise to create spaces that are both beautiful and practical.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg">
                <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">Residential</h4>
                <p className="text-neutral-700 dark:text-neutral-400 text-sm">Transforming houses into beautiful homes</p>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg">
                <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">Commercial</h4>
                <p className="text-neutral-700 dark:text-neutral-400 text-sm">Creating inspiring spaces for businesses</p>
              </div>
            </div>
            
            <Button as="link" to="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;