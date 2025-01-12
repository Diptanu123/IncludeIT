import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheckCircle, FaCalendarAlt, FaCode, FaDatabase, FaLaptopCode, FaPython, FaChartLine, FaBrain, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Animation variants
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const courses = [
    {
      title: "C/C++ Programming",
      description: "Master fundamental & advanced concepts of C/C++. Build strong programming foundations with practical projects and industry-relevant skills.",
      icon: FaCode,
      color: "green",
      skills: ["Object-Oriented Programming", "Memory Management", "STL", "Modern C++"]
    },
    {
      title: "Data Structures & Algorithms",
      description: "Deep dive into DSA concepts with hands-on problem solving. Prepare for technical interviews at top tech companies.",
      icon: FaDatabase,
      color: "blue",
      skills: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "System Design"]
    },
    {
      title: "Web Development",
      description: "Build modern web applications using cutting-edge technologies. Learn frontend, backend, and deployment strategies.",
      icon: FaLaptopCode,
      color: "fuchsia",
      skills: ["React.js", "Next.js", "Node.js", "Database Design"]
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts. Master automation, web development, and data processing.",
      icon: FaPython,
      color: "yellow",
      skills: ["Core Python", "Web Scraping", "API Development", "Automation"]
    },
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights. Master essential tools and techniques for data analysis.",
      icon: FaChartLine,
      color: "purple",
      skills: ["Python for Data", "SQL", "Power BI", "Statistical Analysis"]
    },
    {
      title: "Machine Learning",
      description: "Explore ML algorithms and build intelligent systems. From basic regression to advanced neural networks.",
      icon: FaBrain,
      color: "cyan",
      skills: ["Supervised Learning", "Deep Learning", "NLP", "Computer Vision"]
    }
  ];

  return (
    <section id="courses" className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-20">
      {/* Scroll Progress Line */}
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-indigo-600/20"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-black">
            Our Courses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive learning paths designed by NITians to help you achieve your career goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-12 h-12 rounded-lg bg-${course.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className={`text-${course.color}-500 text-2xl`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2">
                  {course.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 w-full py-2 px-4 rounded-lg bg-${course.color}-500 text-white font-medium hover:bg-${course.color}-600 transition-colors`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/enroll"
            className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Learning Journey 🚀
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;















// import { useState, useEffect } from 'react';
// import { FaCheckCircle, FaCalendarAlt, FaCode, FaDatabase, FaLaptopCode, FaPython, FaChartLine, FaBrain, FaBook } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// const CoursesSection = () => {
//   const [bgColor, setBgColor] = useState('bg-white'); // Default color

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       // Change background color based on scroll position
//       if (scrollPosition > 100) {
//         setBgColor('bg-gray-100'); // Scroll down to change to light gray
//       } else {
//         setBgColor('bg-white'); // Default background color
//       }
//     };

//     // Listen for scroll events
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section id="courses" className={`${bgColor} py-12 bg-gradient-to-br from-cyan-50 to-white border-gray-200`}>
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900">Our Courses</h2>
//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

//           {/* C/C++ Course */}
//           <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
//               <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//                 <h3 className="text-xl font-bold mb-2">C/C++ Programming</h3>
//                 <p className="text-sm">
//                   Learn the fundamentals of C/C++ programming and improve your coding skills.
//                 </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-green-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
//               <FaCode className="text-green-500 text-2xl" />
//             </div>
//           </div>

//           {/* DSA with C++ Course */}
//           <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
//               <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//                 <h3 className="text-2xl font-semibold text-white mb-2">🧠 DSA (Data Structures & Algorithms)</h3>
//                 <p className="text-white">
//                   Build a strong foundation in problem-solving with a focus on Data Structures and Algorithms.
//                 </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-blue-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
//               <FaDatabase className="text-blue-500 text-2xl" />
//             </div>
//           </div>

//           {/* Web Development Course */}
//           <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
//               <div className="bg-fuchsia-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//                 <h3 className="text-2xl font-semibold text-white mb-2">🌐 Web Development</h3>
//                 <p className="text-white">
//                   Build modern, responsive websites using technologies like React.js, Next.js, and Tailwind CSS.
//                 </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-fuchsia-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
//               <FaLaptopCode className="text-fuchsia-500 text-2xl" />
//             </div>
//           </div>
//              {/* Python Course */}
//              <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
//               <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//                 <h3 className="text-xl font-bold mb-2">Python Programming</h3>
//                 <p className="text-sm">
//                   Master Python for various applications including automation, web development, and data analysis.
//                 </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-yellow-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
//               <FaPython className="text-yellow-500 text-2xl" />
//             </div>
//           </div>

//           {/* Data Analysis Course */}
//           <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
//               <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//               <h3 className="text-2xl font-semibold text-white mb-2">📊 Data Analysis</h3>
//               <p className="text-white">
//                 Master data analysis techniques using <span className="font-medium">Python</span>, <span className="font-medium">SQL</span>, and visualization tools like <span className="font-medium">Power BI</span>.
//               </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-purple-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
//               <FaChartLine className="text-purple-500 text-2xl" />
//             </div>
//           </div>

//           {/* Machine Learning Course */}
//           <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
//               <div className="bg-cyan-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//                 <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
//                 <p className="text-sm">
//                   Dive into machine learning concepts and algorithms to build intelligent models and systems.
//                 </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-cyan-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
//               <FaBrain className="text-cyan-500 text-2xl" />
//             </div>
//           </div>

//           {/* CS Fundamentals Course */}
//           <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
//               <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
//               <h3 className="text-2xl font-semibold text-white mb-2">💻 CS Fundamentals</h3>
//               <p className="text-white">
//                 Gain in-depth knowledge of core <span className="font-medium">Computer Science</span> principles, including <span className="font-medium">Operating Systems</span> and <span className="font-medium">Networking</span>.
//               </p>
//               </div>
//             </div>
//             <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-red-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
//               <FaBook className="text-red-500 text-2xl" />
//             </div>
//           </div>

//           {/* Join Us Today Section */}
//           <div className="flex justify-center mt-16">
//           <Link
//   to="/enroll"
//   className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 text-center w-full md:w-auto"
// >
//   Join Us Today 🚀
// </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesSection;
