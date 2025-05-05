import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      as = 'button',
      to,
      href,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Define base classes
    const baseClasses = `inline-flex items-center justify-center font-medium focus:outline-none transition-all duration-200 rounded-md`;

    // Size variations
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5',
      lg: 'px-6 py-3 text-lg',
    };

    // Variant styles
    const variantClasses = {
      primary: `bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed`,
      secondary: `bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-neutral-700 disabled:opacity-60 disabled:cursor-not-allowed`,
      accent: `bg-accent-600 text-white hover:bg-accent-700 focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 dark:bg-accent-500 dark:hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed`,
      text: `text-primary-600 hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300 disabled:opacity-60 disabled:cursor-not-allowed`,
    };

    // Combine classes
    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    // Create MotionComponent with the appropriate element type
    const MotionComponent = motion(as);

    // Render based on 'as' prop
    if (as === 'link' && to) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to={to}
            className={classes}
            ref={ref}
            {...props}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    if (as === 'a' && href) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href={href}
            className={classes}
            ref={ref}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        </motion.div>
      );
    }

    return (
      <MotionComponent
        className={classes}
        ref={ref}
        disabled={disabled}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;