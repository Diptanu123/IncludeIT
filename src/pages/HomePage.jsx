import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate content loading with a more professional timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Handle scroll events for progress bar and scroll-to-top button
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setShowScrollTop(window.scrollY > 500);
    };

    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener('click', handleAnchorClick);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Enhanced loading screen with animated elements
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center z-50">
        <div className="relative">
          <motion.div
            className="absolute -inset-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-30 blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="relative text-5xl font-bold flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 7,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Include
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              IT
            </span>
            <motion.span
              className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Enhanced Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-[60]"
          style={{ 
            scaleX: scrollProgress / 100, 
            transformOrigin: "0%",
            background: "linear-gradient(90deg, #4F46E5 0%, #3B82F6 100%)" 
          }}
          animate={{
            boxShadow: scrollProgress > 5 ? "0 0 10px rgba(79, 70, 229, 0.6)" : "none"
          }}
        />

        {/* Navbar - Fixed at the top */}
        <Navbar />

        {/* Scroll to top button */}
        
        {/* Main content with staggered animations */}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <motion.main
            className="relative pt-16" // Padding to account for fixed navbar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <motion.section
              className="relative z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <HeroSection />
            </motion.section>

            {/* About Section with improved animation */}
            <motion.section
              id="about"
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <About />
            </motion.section>

            {/* Achievements Section with improved animation */}
            <motion.section
              id="achievements"
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Achievements />
            </motion.section>

            {/* Courses Section with improved animation */}
            <motion.section
              id="courses"
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <CoursesSection />
            </motion.section>

            {/* Contact Section with improved animation */}
            <motion.section
              id="contact"
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Contact />
            </motion.section>
          </motion.main>
        </Suspense>

        {/* Floating Section */}
        <div className="relative z-20">
          <FloatingSection />
        </div>

        {/* Footer with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>

        {/* Decorative elements - subtle background details */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Top right decorative circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Bottom left decorative circle */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default HomePage;