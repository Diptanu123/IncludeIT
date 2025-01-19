import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Industry-Focused Curriculum",
      description: "Master cutting-edge technologies and financial strategies crafted by NITians with real-world expertise.",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Target,
      title: "Hands-On Learning",
      description: "Build your portfolio with practical projects and real-world applications guided by industry experts.",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: Users,
      title: "Personalized Mentorship",
      description: "Receive dedicated guidance through one-on-one sessions and comprehensive doubt-clearing support.",
      bgColor: "from-purple-50 to-blue-50"
    }
  ];

  return (
    <div id="about" className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 md:w-72 md:h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold mb-6"
              variants={fadeInUp}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                includeIT
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              At <span className="font-semibold text-indigo-600">includeIT</span>, we bring you a comprehensive learning experience designed and delivered by NITians. Our curriculum spans across modern technology and finance, including{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
                C/C++, DSA, Web Development, App Development, Python, Data Analysis, Machine Learning
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-semibold">
                Stock Market & Financial Literacy
              </span>.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-8"
              variants={fadeInUp}
            >
              Our mission is to transform passionate learners into industry-ready professionals through practical experience, personalized mentorship, and real-world projects.
            </motion.p>

            <motion.button
              className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              variants={fadeInUp}
            >
              Discover More
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 transform group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="saikatimg.jpeg"
                  alt="About includeIT"
                  className="w-full h-[400px] object-cover brightness-125 transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent group-hover:from-indigo-900/60 transition-colors duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-24"
          variants={fadeInUp}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300`}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}