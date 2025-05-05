import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

const ThemeToggle = ({ className }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
        isDarkMode ? "bg-primary-800" : "bg-primary-100"
      } ${className}`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <IoMdMoon className="w-5 h-5 text-yellow-200 " />
        ) : (
          <IoSunny className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

import PropTypes from "prop-types";

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

export default ThemeToggle;
