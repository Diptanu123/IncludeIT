import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  CodeIcon // Add this import for CodeEditor button
} from 'lucide-react';
import { logout } from '../redux/authSlice';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dsa');
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New course material available", isNew: true },
    { id: 2, text: "Assignment deadline tomorrow", isNew: true },
    { id: 3, text: "Upcoming live session", isNew: false }
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  
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

  const filteredCourseData = Object.entries(courseData).reduce((acc, [key, items]) => {
    acc[key] = items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Content */}
      <div className="pt-16">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <User size={32} className="text-blue-600" />
                  </div>
                  <div className="ml-4 text-white">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-blue-100">
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
                    className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg group"
                  >
                    <Code className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                    <span className="font-medium">Open Code Editor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(filteredCourseData).map(([section, items], sectionIndex) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: sectionIndex * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div
                  className={`p-6 cursor-pointer transition-colors ${
                    activeSection === section ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {section === 'dsa' && <Database className="w-6 h-6 text-blue-600 mr-3" />}
                      {section === 'python' && <Code className="w-6 h-6 text-blue-600 mr-3" />}
                      {section === 'fundamentals' && <Terminal className="w-6 h-6 text-blue-600 mr-3" />}
                      <h2 className="text-xl font-semibold text-gray-800 capitalize">{section}</h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        activeSection === section ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {activeSection === section && items.length > 0 && (
                  <div className="p-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col p-4 hover:bg-gray-50 rounded-lg mb-2"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-800">{item.title}</h3>
                          <button
                            onClick={() => handleDownload(item.filename)}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            <span>Download</span>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeSection === section && items.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    No matching courses found
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(filteredCourseData).map(([section, items], sectionIndex) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: sectionIndex * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div
                  className={`p-6 cursor-pointer transition-colors ${
                    activeSection === section ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {section === 'dsa' && <Database className="w-6 h-6 text-blue-600 mr-3" />}
                      {section === 'python' && <Code className="w-6 h-6 text-blue-600 mr-3" />}
                      {section === 'fundamentals' && <Terminal className="w-6 h-6 text-blue-600 mr-3" />}
                      <h2 className="text-xl font-semibold text-gray-800 capitalize">{section}</h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        activeSection === section ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {activeSection === section && items.length > 0 && (
                  <div className="p-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col p-4 hover:bg-gray-50 rounded-lg mb-2"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-800">{item.title}</h3>
                          <button
                            onClick={() => handleDownload(item.filename)}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            <span>Download</span>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeSection === section && items.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    No matching courses found
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
