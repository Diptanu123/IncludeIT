import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Achievements from '../components/Achievement';
import CoursesSection from '../components/CoursesSection';
import FloatingSection from '../components/FloatingSection';
import Contact from '../components/contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

   
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center z-50">
        <motion.div
          className="text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
            IncludeIT
          </span>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="relative min-h-screen">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 z-[60]"
          style={{ scaleX: scrollProgress / 100, transformOrigin: "0%" }}
        />

        {/* Navbar - Fixed at the top */}
        <Navbar />

        {/* Main content - Adjusted padding to prevent navbar overlap */}
        <motion.main
          className="relative pt-16" // Add padding-top to account for fixed navbar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <motion.section
            className="relative z-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroSection />
          </motion.section>

          {/* About Section */}
          <motion.section
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Achievements />
          </motion.section>

          {/* Courses Section */}
          <motion.section
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CoursesSection />
          </motion.section>

          {/* Contact Section */}
          <motion.section
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.section>
        </motion.main>

        {/* Floating Section - Adjusted z-index */}
        <div className="relative z-20">
          <FloatingSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default HomePage;