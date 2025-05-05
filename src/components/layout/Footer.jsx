import { NavLink } from "react-router-dom";
import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Studio
              <span className="text-accent-600 dark:text-accent-400">
                Maanikh
              </span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Transforming spaces into extraordinary experiences with thoughtful
              design and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/services#residential"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Residential Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#commercial"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Commercial Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#renovation"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Renovation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#space-planning"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Space Planning
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#consultation"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  Consultation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mt-0.5 mr-3 text-accent-600 dark:text-accent-400" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  123 Design Street, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-accent-600 dark:text-accent-400" />
                <a
                  href="tel:+12125551234"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-accent-600 dark:text-accent-400" />
                <a
                  href="mailto:info@eleganceinteriors.com"
                  className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
                >
                  info@eleganceinteriors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Studio Maanikh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
