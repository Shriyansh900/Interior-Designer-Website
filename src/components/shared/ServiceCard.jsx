import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
          <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        
        <h3 className="text-xl font-serif font-medium text-neutral-900 dark:text-white mb-3">
          {service.title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {service.description}
        </p>
        
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                className="w-5 h-5 text-accent-600 dark:text-accent-400 mt-0.5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;