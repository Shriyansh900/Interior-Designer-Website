import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const navLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 transition-colors duration-300 ${
      isActive
        ? 'text-accent-600 dark:text-accent-400 font-medium'
        : 'text-neutral-700 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400'
    }`;

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 dark:bg-neutral-950/60 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-semibold tracking-tight text-primary-800 dark:text-white">
            Studio<span className="text-accent-600 dark:text-accent-400">Maanikh</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle className="ml-4" />
        </nav>

        {/* Mobile Navigation Buttons */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-neutral-700 dark:text-neutral-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-neutral-900 z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="p-2 text-neutral-700 dark:text-neutral-300 focus:outline-none"
                aria-label="Close navigation menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive
                        ? 'text-accent-600 dark:text-accent-400'
                        : 'text-neutral-700 dark:text-neutral-300'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;