import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiHome, FiLayout, FiShoppingBag, FiRefreshCw, FiEdit, FiTarget } from 'react-icons/fi';
import ServiceCard from '../shared/ServiceCard';
import Button from '../ui/Button';

// Sample services data
const servicesData = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Transform your living spaces into beautiful, functional environments that reflect your personal style.',
    icon: FiHome,
    features: [
      'Custom furniture selection and arrangement',
      'Color and material consultation',
      'Lighting design and implementation',
      'Full-service project management'
    ]
  },
  {
    id: 2,
    title: 'Commercial Design',
    description: 'Create impressive, productive commercial spaces that enhance your brand and inspire your team.',
    icon: FiShoppingBag,
    features: [
      'Brand integration into physical spaces',
      'Ergonomic workspace planning',
      'Client-facing area design',
      'ADA compliance consultation'
    ]
  },
  {
    id: 3,
    title: 'Space Planning',
    description: 'Optimize your floor plans to maximize functionality, flow, and aesthetic appeal.',
    icon: FiLayout,
    features: [
      'Traffic flow optimization',
      'Spatial analysis and recommendations',
      '2D and 3D floor plans',
      'Furniture layout recommendations'
    ]
  },
  {
    id: 4,
    title: 'Renovation Guidance',
    description: 'Navigate the renovation process with expert guidance from concept to completion.',
    icon: FiRefreshCw,
    features: [
      'Contractor coordination',
      'Material and finish selection',
      'Budget management strategies',
      'Timeline planning and oversight'
    ]
  },
  {
    id: 5,
    title: 'Design Consultation',
    description: 'Get professional advice on colors, layouts, or specific design challenges.',
    icon: FiEdit,
    features: [
      'Color palette development',
      'Furniture arrangement advice',
      'Material and texture recommendations',
      'Styling and accessory guidance'
    ]
  },
  {
    id: 6,
    title: 'Project Management',
    description: 'Ensure your design project is completed on time, within budget, and to your specifications.',
    icon: FiTarget,
    features: [
      'Vendor and contractor coordination',
      'Procurement management',
      'Budget tracking and reporting',
      'Quality control and inspections'
    ]
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Our Design <span className="text-accent-600 dark:text-accent-400">Services</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We offer a comprehensive range of interior design services to help you create
            spaces that are both beautiful and functional, tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button as="link" to="/services" variant="primary">
            Learn More About Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;