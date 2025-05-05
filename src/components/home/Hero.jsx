import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 dark:from-black/80 dark:to-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent-500/90 text-white rounded-full"
          >
            Designing Extraordinary Spaces
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-white"
          >
            Where Elegance Meets <span className="text-accent-400">Functionality</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-white/90"
          >
            Transform your space into a reflection of your personality and lifestyle. We create bespoke interiors that tell your story through thoughtful design.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button 
              as="link" 
              to="/projects" 
              variant="accent" 
              size="lg" 
              className="flex-shrink-0"
            >
              View Projects
            </Button>
            <Button 
              as="link" 
              to="/contact" 
              variant="secondary"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;