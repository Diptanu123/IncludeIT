import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-cyan-50 to-white border-gray-200 text-gray-800 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-600">includeIT</span>
          </h2>

          <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            At <span className="text-indigo-600 font-semibold">includeIT</span>, we empower aspiring tech enthusiasts and finance professionals with industry-relevant skills. Our curriculum covers <span className="text-blue-500">C/C++, DSA, Web Development, App Development, Python, Data Analysis, Machine Learning</span>, and even <span className="text-blue-500">Stock Market and Financial Literacy</span>.
          </p>
          <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            Our goal is simple: enable every student to achieve their dreams. With hands-on projects, personalized mentorship, and real-world applications, we ensure you're industry-ready from day one.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-blue-600 rounded-md text-white font-semibold transition-transform transform hover:scale-105 duration-300 shadow-md">
            Learn More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="It.jpeg" 
            alt="About includeIT"
            className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Highlights Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-pink-50 rounded-md shadow-md border border-gray-200 hover:shadow-xl hover:bg-pink-100 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-500">🚀 Industry-Focused Curriculum</h3>
          <p className="text-gray-600 mt-2">Learn the latest technologies and financial strategies designed by industry experts.</p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-yellow-50 rounded-md shadow-md border border-gray-200 hover:shadow-xl hover:bg-yellow-100 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-500">💼 Hands-On Projects</h3>
          <p className="text-gray-600 mt-2">Work on real-world projects to gain practical experience.</p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-teal-50 rounded-md shadow-md border border-gray-200 hover:shadow-xl hover:bg-teal-100 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-500">🤝 Personalized Support</h3>
          <p className="text-gray-600 mt-2">Get one-on-one mentoring and regular doubt-clearing sessions.</p>
        </motion.div>
      </div>

      {/* Testimonials Section */}
    </section>
  );
};

export default About;
