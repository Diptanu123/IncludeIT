import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  LogOut,
  Code, 
  Database, 
  Terminal, 
  ChevronDown, 
  User, 
  School, 
  Hash,
  BookOpen,
  Search,
  Bell,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Home
} from 'lucide-react';
import { logout } from '../redux/authSlice';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dsa');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New course material available", isNew: true },
    { id: 2, text: "Assignment deadline tomorrow", isNew: true },
    { id: 3, text: "Upcoming live session", isNew: false }
  ]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Close mobile menu when route changes
    return () => setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    // Close notification panel when clicking outside
    const handleClickOutside = (event) => {
      if (isNotificationOpen && !event.target.closest('.notification-panel')) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNotificationOpen]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleNavigateToCodeEditor = () => {
    navigate('/editor');
  };

  const courseData = {
    dsa: [
      { title: "Introduction to DSA", filename: "intro_dsa.pdf", description: "Basic concepts and importance of DSA" },
      { title: "Arrays and Strings", filename: "arrays_strings.pdf", description: "Fundamental data structures" },
      { title: "Linked Lists", filename: "linked_lists.pdf", description: "Linear data structures" },
      { title: "Trees and Graphs", filename: "trees_graphs.pdf", description: "Advanced data structures" }
    ],
    python: [
      { title: "Python Basics", filename: "python_basics.pdf", description: "Introduction to Python programming" },
      { title: "OOP in Python", filename: "python_oop.pdf", description: "Object-oriented programming concepts" },
      { title: "Python Libraries", filename: "python_libs.pdf", description: "Popular Python libraries and frameworks" },
      { title: "Advanced Python", filename: "advanced_python.pdf", description: "Advanced Python concepts" }
    ],
    fundamentals: [
      { title: "Computer Architecture", filename: "comp_arch.pdf", description: "Basic computer architecture" },
      { title: "Operating Systems", filename: "os_basics.pdf", description: "OS concepts and principles" },
      { title: "Networking Basics", filename: "networking.pdf", description: "Introduction to computer networks" },
      { title: "Database Management", filename: "dbms.pdf", description: "Database concepts and SQL" }
    ]
  };

  const handleDownload = (filename) => {
    console.log(`Downloading ${filename}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isNew: false
    })));
  };

  const filteredCourseData = Object.entries(courseData).reduce((acc, [key, items]) => {
    acc[key] = items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  const newNotificationsCount = notifications.filter(notification => notification.isNew).length;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header/Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center space-x-3" 
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
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
                  <span className="text-indigo-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 transition-all duration-300">
                    Include
                  </span>
                  <span className={`${isDarkMode ? 'text-white' : 'text-blue-200'}`}>IT</span>
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
            <div className="hidden md:flex items-center space-x-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-gray-700 focus:ring-indigo-500 text-white placeholder-gray-400' 
                      : 'bg-gray-100 focus:ring-indigo-400 text-gray-800 placeholder-gray-500'
                  } transition-all duration-300`}
                />
                <Search className={`absolute left-3 top-2.5 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>

              {/* Notification Bell */}
              <div className="relative notification-panel">
                <button 
                  onClick={toggleNotifications} 
                  className={`relative p-2 rounded-full transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                      : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Bell className="w-6 h-6" />
                  {newNotificationsCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                      {newNotificationsCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                <AnimatePresence>
                  {isNotificationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute right-0 mt-2 w-80 origin-top-right rounded-md shadow-lg ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                      } z-50`}
                    >
                      <div className="py-1 rounded-md">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Notifications</h3>
                          {newNotificationsCount > 0 && (
                            <button
                              onClick={markAllNotificationsAsRead}
                              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                            >
                              Mark all as read
                            </button>
                          )}
                        </div>
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div 
                              key={notification.id} 
                              className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                notification.isNew ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                              }`}
                            >
                              <div className="flex items-start">
                                <div className={`flex-shrink-0 w-2 h-2 mt-1.5 rounded-full ${
                                  notification.isNew ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-600'
                                }`}></div>
                                <div className="ml-3">
                                  <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {notification.text}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {notification.isNew ? 'Just now' : '2 hours ago'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                            No notifications yet
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>

              {/* Logout Button */}
              <button 
                onClick={() => navigate('/')}
                className={`flex items-center text-sm px-4 py-2 rounded-md ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } transition-colors`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
              <button 
                onClick={handleLogout}
                className={`flex items-center text-sm px-4 py-2 rounded-md ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } transition-colors`}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } focus:outline-none`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t border-gray-200 dark:border-gray-700`}
            >
              <div className="px-4 py-3 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 ${
                      isDarkMode 
                        ? 'bg-gray-700 focus:ring-indigo-500 text-white placeholder-gray-400' 
                        : 'bg-gray-100 focus:ring-indigo-400 text-gray-800 placeholder-gray-500'
                    } transition-colors`}
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={toggleNotifications}
                    className={`flex items-center justify-center py-2 px-4 rounded-md ${
                      isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'
                    } transition-colors`}
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    <span className="text-sm">Notifications</span>
                    {newNotificationsCount > 0 && (
                      <span className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                        {newNotificationsCount}
                      </span>
                    )}
                  </button>
                  
                  <button 
                    onClick={toggleDarkMode}
                    className={`flex items-center justify-center py-2 px-4 rounded-md ${
                      isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'
                    } transition-colors`}
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="w-5 h-5 mr-2" />
                        <span className="text-sm">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 mr-2" />
                        <span className="text-sm">Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
                
                <button 
                  onClick={() => navigate('/')}
                  className={`flex items-center justify-center w-full py-2 px-4 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  } transition-colors`}
                >
                  <Home className="w-5 h-5 mr-2" />
                  <span className="text-sm">Home</span>
                </button>
                
                <button 
                  onClick={handleLogout}
                  className={`flex items-center justify-center w-full py-2 px-4 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  } transition-colors`}
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className={`rounded-2xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
            <div className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-700 to-purple-800' : 'from-indigo-600 to-blue-600'} p-6`}>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <User size={32} className="text-indigo-600" />
                  </div>
                  <div className="ml-4 text-white">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-indigo-100 text-sm mt-1">Welcome back! You have {newNotificationsCount} new notifications.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-indigo-100 text-sm">
                  <div className="flex items-center">
                    <School className="w-5 h-5 mr-2" />
                    <span>{user.college}</span>
                  </div>
                  <div className="flex items-center">
                    <Hash className="w-5 h-5 mr-2" />
                    <span>ID: {user.userid}</span>
                  </div>
                  <button 
                    onClick={handleNavigateToCodeEditor}
                    className="flex items-center justify-center bg-white hover:bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg group w-full md:w-auto"
                  >
                    <Code className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                    <span className="font-medium">Open Code Editor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className={`flex space-x-2 min-w-max pb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {Object.keys(courseData).map((section) => (
              <button
                key={section}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center ${
                  activeSection === section
                    ? isDarkMode
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-500 text-white'
                    : isDarkMode
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section === 'dsa' && <Database className="w-4 h-4 mr-2" />}
                {section === 'python' && <Code className="w-4 h-4 mr-2" />}
                {section === 'fundamentals' && <Terminal className="w-4 h-4 mr-2" />}
                <span className="capitalize">{section}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredCourseData[activeSection].length > 0 ? (
              filteredCourseData[activeSection].map((item, index) => (
                <motion.div
                  key={`${activeSection}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`rounded-xl shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`h-2 ${
                    activeSection === 'dsa' ? 'bg-blue-500' : 
                    activeSection === 'python' ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                      <div className={`rounded-full w-10 h-10 flex items-center justify-center ${
                        activeSection === 'dsa' ? 'bg-blue-100 text-blue-600' : 
                        activeSection === 'python' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                      }`}>
                        {activeSection === 'dsa' && <Database className="w-5 h-5" />}
                        {activeSection === 'python' && <Code className="w-5 h-5" />}
                        {activeSection === 'fundamentals' && <Terminal className="w-5 h-5" />}
                      </div>
                    </div>
                    <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
                    <button
                      onClick={() => handleDownload(item.filename)}
                      className={`flex items-center text-sm font-medium ${
                        activeSection === 'dsa' ? 'text-blue-600 hover:text-blue-700' : 
                        activeSection === 'python' ? 'text-green-600 hover:text-green-700' : 'text-purple-600 hover:text-purple-700'
                      } transition-colors`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Materials
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`col-span-full rounded-xl shadow-md p-8 text-center ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-500'}`}
              >
                <Search className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p className="text-lg font-medium mb-2">No matching courses found</p>
                <p className="text-sm">Try adjusting your search term or browse another category</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Course Progress Card */}
          <div className={`rounded-xl shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Course Progress</h3>
              <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className={`text-xs font-semibold inline-block ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    67% Complete
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-green-600">
                    8/12 Courses
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                <div style={{ width: "67%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines Card */}
          <div className={`rounded-xl shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Upcoming Deadlines</h3>
              <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
            </div>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="text-sm flex justify-between">
                <span>DSA Assignment</span>
                <span className="text-red-500 font-medium">Tomorrow</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>Python Project</span>
                <span>In 3 days</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>OS Quiz</span>
                <span>In 5 days</span>
              </li>
            </ul>
          </div>

          {/* Latest Activities Card */}
          <div className={`rounded-xl shadow-md p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Latest Activities</h3>
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            </div>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="text-sm flex justify-between">
                <span>Completed Python quiz</span>
                <span className="text-gray-400 text-xs">2 hours ago</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>Submitted DSA assignment</span>
                <span className="text-gray-400 text-xs">Yesterday</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>Joined Live Session</span>
                <span className="text-gray-400 text-xs">3 days ago</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;