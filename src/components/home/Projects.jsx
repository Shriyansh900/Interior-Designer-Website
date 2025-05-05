import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import ProjectCard from '../shared/ProjectCard';

// Enhanced projects data
const projectsData = [
  {
    id: 1,
    title: 'Modern Minimalist Apartment',
    category: 'Residential',
    description: 'A clean, minimalist design for an urban apartment that maximizes space and light.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    details: {
      location: 'Manhattan, NY',
      area: '1,200 sq ft',
      duration: '3 months',
      style: 'Modern Minimalist'
    }
  },
  {
    id: 2,
    title: 'Luxury Boutique Hotel Lobby',
    category: 'Commercial',
    description: 'An elegant, welcoming lobby design for a boutique hotel in the heart of the city.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    details: {
      location: 'Brooklyn, NY',
      area: '2,500 sq ft',
      duration: '4 months',
      style: 'Contemporary Luxury'
    }
  },
  {
    id: 3,
    title: 'Contemporary Family Home',
    category: 'Residential',
    description: 'A warm, functional design for a growing family, balancing style with practicality.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    details: {
      location: 'Greenwich, CT',
      area: '3,200 sq ft',
      duration: '5 months',
      style: 'Modern Contemporary'
    }
  },
  {
    id: 4,
    title: 'Urban Office Space',
    category: 'Office',
    description: 'A dynamic workspace designed for creativity and collaboration.',
    image: 'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg',
    details: {
      location: 'Boston, MA',
      area: '5,000 sq ft',
      duration: '4 months',
      style: 'Industrial Modern'
    }
  },
  {
    id: 5,
    title: 'Coastal Beach House',
    category: 'Residential',
    description: 'A serene beach house that brings the outside in with natural materials and ocean views.',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    details: {
      location: 'Hampton Bays, NY',
      area: '4,500 sq ft',
      duration: '6 months',
      style: 'Coastal Contemporary'
    }
  },
  {
    id: 6,
    title: 'Modern Restaurant Design',
    category: 'Commercial',
    description: 'An atmospheric dining space that combines comfort with sophisticated design.',
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
    details: {
      location: 'Manhattan, NY',
      area: '3,000 sq ft',
      duration: '4 months',
      style: 'Industrial Chic'
    }
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = ['All', 'Residential', 'Commercial', 'Office'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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
            Our <span className="text-accent-600 dark:text-accent-400">Featured</span> Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore our curated collection of design projects that showcase our commitment to 
            creativity, functionality, and timeless elegance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            as="link" 
            to="/projects" 
            variant="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;