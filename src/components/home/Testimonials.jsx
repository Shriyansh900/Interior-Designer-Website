import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Emma Johnson',
    role: 'Homeowner',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Working with Elegance Interiors transformed our house into a home. They perfectly captured our style while adding unique elements we never would have thought of ourselves.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The team understood our brand vision and created a restaurant space that our customers love. The attention to detail and project management were exceptional.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Office Manager',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Our office redesign has significantly improved team morale and productivity. They created a beautiful, functional space within our budget and timeline.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto rotate testimonials
  useEffect(() => {
    if (!inView) return;

    const autoRotateInterval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(autoRotateInterval);
  }, [inView, currentIndex]);

  // Variants for slide animations
  const slideVariants = {
    enterFromRight: {
      x: 300,
      opacity: 0,
    },
    enterFromLeft: {
      x: -300,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exitToLeft: {
      x: -300,
      opacity: 0,
    },
    exitToRight: {
      x: 300,
      opacity: 0,
    },
  };

  return (
    <section 
      ref={ref} 
      className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-neutral-900 dark:text-white font-serif mb-4">
            What Our <span className="text-accent-600 dark:text-accent-400">Clients</span> Say
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their 
            experience working with our design team.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction === 'right' ? 'enterFromRight' : 'enterFromLeft'}
              animate="center"
              exit={direction === 'right' ? 'exitToLeft' : 'exitToRight'}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-neutral-700 dark:text-neutral-200 font-medium italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-serif text-lg font-medium text-neutral-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center text-neutral-700 dark:text-white hover:bg-primary-50 dark:hover:bg-neutral-600 -translate-x-5 md:-translate-x-1/2 transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous testimonial"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center text-neutral-700 dark:text-white hover:bg-primary-50 dark:hover:bg-neutral-600 translate-x-5 md:translate-x-1/2 transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next testimonial"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 dark:bg-primary-400 w-8'
                    : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;