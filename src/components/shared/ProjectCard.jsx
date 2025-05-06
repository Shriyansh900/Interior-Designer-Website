import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiMaximize, FiClock, FiTag } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: index * 0.1
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
          }}
          transition={{ duration: 0.4 }}
        />
        
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
        />
      </div>
      
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        variants={contentVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        <div>
          <motion.div 
            className="bg-accent-500 text-white inline-block px-2 py-1 rounded text-xs font-medium mb-2"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.div>
          
          <h3 className="text-xl font-serif font-medium mb-2 text-white">
            {project.title}
          </h3>
          
          <p className="text-white/90 mb-4 text-sm line-clamp-2">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center text-white/80 text-sm">
              <FiMapPin className="w-4 h-4 mr-1" />
              {project.details.location}
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <FiMaximize className="w-4 h-4 mr-1" />
              {project.details.area}
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <FiClock className="w-4 h-4 mr-1" />
              {project.details.duration}
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <FiTag className="w-4 h-4 mr-1" />
              {project.details.style}
            </div>
          </div>
          
          <Link 
            to={`/projects/${project.id}`}
            className="inline-flex items-center text-white hover:text-accent-300 transition-colors"
          >
            <span className="mr-2">View Project</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiArrowRight />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    details: PropTypes.shape({
      location: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;