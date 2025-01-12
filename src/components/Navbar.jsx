import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Home, Info, BookOpen, PhoneCall, Sparkles } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from '../redux/authSlice'; 
import {User}  from 'lucide-react';
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);// Authentication state
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Add dispatch

  
  const navItems = [
    { name: 'Home', icon: Home, target: 'home' },
    { name: 'About', icon: Info, target: 'about' },
    { name: 'Courses', icon: BookOpen, target: 'courses' },
    { name: 'Contact', icon: PhoneCall, target: 'contact' },
  ];

  const handleNavigation = (target) => {
    if (location.pathname === '/') {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogOut = () => {
    // Simulate log-out process
   
    dispatch(logout());
    navigate('/login'); // Redirect to login page
    
  };
  const handleProfileClick = () => {
    navigate('/profile');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-indigo-900/95 via-indigo-800/95 to-blue-900/95 backdrop-blur-lg shadow-lg shadow-indigo-500/10'
            : 'bg-gradient-to-r from-indigo-600/80 via-indigo-500/80 to-blue-600/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
              <div className="relative">
                <motion.img
                  src="logo.png"
                  alt="Include IT Logo"
                  className="h-10 w-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute -inset-2 bg-black-400/20 rounded-full -z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                />
              </div>
              <div className="relative group">
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 transition-all duration-300">
                    include
                  </span>
                  <span className="text-blue-200">IT</span>
                </span>
                <motion.div
                  className="absolute -right-6 -top-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-4 h-4 text-blue-200/40" />
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.target)}
                  className="relative px-4 py-2 text-blue-100 hover:text-white font-medium rounded-lg group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  />
                </motion.button>
              ))}

              {isAuthenticated ? (
                <>
                 <div className="flex items-center space-x-4">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="relative px-6 py-2 bg-white text-blue-500 text-xl font-medium rounded-xl shadow-md flex items-center space-x-2 hover:bg-blue-50 transition-all"
    onClick={handleProfileClick} // Updated handler
  >
    <User size={32} className="text-blue-600" />
    <span>Profile</span>
  </motion.button>
  
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="relative px-6 py-2 bg-red-500 text-white text-xl font-medium rounded-xl shadow-md flex items-center space-x-2 hover:bg-red-600 transition-all"
    onClick={handleLogOut}
  >
    <span>Log Out</span>
  </motion.button>
</div>

                </>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="ml-2">
                  <Link
                    to="/login"
                    className="relative px-6 py-2 bg-white font-medium rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 group overflow-hidden"
                  >
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:from-indigo-500 group-hover:to-blue-500">
                      Enroll Now
                    </span>
                    <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 -z-0"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    />
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-indigo-900/95 to-blue-900/95 backdrop-blur-lg border-t border-white/10 shadow-xl"
            >
              <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.target)}
                    className="w-full px-4 py-3 flex items-center gap-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </motion.button>
                ))}
                {isAuthenticated ? (
                  <>
                      <motion.button
    whileHover={{ scale: 1.05 }}
    className="w-full px-6 py-3 bg-white text-blue-500 text-2xl font-medium rounded-xl shadow-md hover: transition-all"
    onClick={handleProfileClick} // Updated handler
  >
    Profile
  </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="mt-2 w-full px-6 py-3 bg-red-500 text-white text-2xl font-medium rounded-xl shadow-md hover:bg-red-600 transition-all"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </motion.button>
                  </>
                ) : (
                  <motion.div className="pt-2">
                    <Link
                      to="/login"
                      className="w-full px-6 py-3 bg-white text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-medium rounded-xl shadow-md flex items-center justify-center gap-2 group"
                    >
                      Enroll Now
                      <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
