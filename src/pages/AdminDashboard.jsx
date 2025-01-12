import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Book, Code, Database, Terminal, ChevronDown, User, School, Hash } from 'lucide-react';

const AdminDashboard = ({
  userDetails = {
    name: "John Doe",
    college: "Engineering College",
    userId: "ADM123456",
    role: "Student"
  }
}) => {
  const [activeSection, setActiveSection] = useState('dsa');

  const courseData = {
    dsa: [
      { title: "Introduction to DSA", filename: "intro_dsa.pdf" },
      { title: "Arrays and Strings", filename: "arrays_strings.pdf" },
      { title: "Linked Lists", filename: "linked_lists.pdf" },
      { title: "Trees and Graphs", filename: "trees_graphs.pdf" }
    ],
    python: [
      { title: "Python Basics", filename: "python_basics.pdf" },
      { title: "OOP in Python", filename: "python_oop.pdf" },
      { title: "Python Libraries", filename: "python_libs.pdf" },
      { title: "Advanced Python", filename: "advanced_python.pdf" }
    ],
    fundamentals: [
      { title: "Computer Architecture", filename: "comp_arch.pdf" },
      { title: "Operating Systems", filename: "os_basics.pdf" },
      { title: "Networking Basics", filename: "networking.pdf" },
      { title: "Database Management", filename: "dbms.pdf" }
    ]
  };

  const handleDownload = (filename) => {
    // Implement actual download logic here
    console.log(`Downloading ${filename}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Space for Navbar */}
      <div className="mt-16 md:mt-20"></div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-8"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <User size={32} className="text-blue-600" />
                </div>
                <div className="ml-4 text-white">
                  <h1 className="text-2xl font-bold">{userDetails.name}</h1>
                  <p className="text-blue-100">{userDetails.role}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-blue-100">
                <div className="flex items-center">
                  <School className="w-5 h-5 mr-2" />
                  <span>{userDetails.college}</span>
                </div>
                <div className="flex items-center">
                  <Hash className="w-5 h-5 mr-2" />
                  <span>ID: {userDetails.userId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Sections */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(courseData).map(([section, items], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className={`p-6 cursor-pointer ${activeSection === section ? 'bg-blue-50' : ''}`}
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
              {activeSection === section && (
                <div className="p-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg mb-2"
                    >
                      <span className="text-gray-700">{item.title}</span>
                      <button
                        onClick={() => handleDownload(item.filename)}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        <span>Download</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
