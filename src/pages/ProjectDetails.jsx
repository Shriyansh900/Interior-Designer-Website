import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiMaximize, FiClock, FiTag } from 'react-icons/fi';
import Button from '../components/ui/Button';

const ProjectDetails = () => {
  useParams();
  const navigate = useNavigate();
  
  // Find the project from our data
  // In a real app, this would come from an API
  const project = {
    id: 1,
    title: 'Modern Minimalist Apartment',
    category: 'Residential',
    description: 'A clean, minimalist design for an urban apartment that maximizes space and light. The project focused on creating an open, airy feel while maintaining functionality and comfort. Through careful space planning and a thoughtful selection of materials, we transformed this apartment into a serene urban retreat.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    details: {
      location: 'Manhattan, NY',
      area: '1,200 sq ft',
      duration: '3 months',
      style: 'Modern Minimalist'
    },
    gallery: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg'
    ],
    features: [
      'Open concept living space',
      'Custom built-in storage solutions',
      'Natural light optimization',
      'Sustainable materials',
      'Smart home integration'
    ],
    challenges: 'The main challenge was maximizing storage while maintaining the minimalist aesthetic. We implemented custom built-ins and hidden storage solutions throughout the space.',
    solution: 'By carefully planning each area and utilizing innovative storage solutions, we created a clean, uncluttered environment that still provides all the functionality needed for modern urban living.'
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/projects')} variant="primary">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projects')}
          className="flex items-center text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 mb-8"
        >
          <FiArrowLeft className="mr-2" />
          Back to Projects
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-neutral-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <FiMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-medium mb-1">Location</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{project.details.location}</p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <FiMaximize className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-medium mb-1">Area</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{project.details.area}</p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <FiClock className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-medium mb-1">Duration</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{project.details.duration}</p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <FiTag className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-medium mb-1">Style</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{project.details.style}</p>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Features and Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-serif mb-6">Challenge & Solution</h2>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
              <h3 className="font-medium mb-3">The Challenge</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {project.challenges}
              </p>
              <h3 className="font-medium mb-3">Our Solution</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-serif mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;