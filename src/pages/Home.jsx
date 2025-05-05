import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Elegance Interiors | Interior Design Portfolio';
  }, []);
  
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;