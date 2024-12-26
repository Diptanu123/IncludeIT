import { useState, useEffect } from 'react';
import { FaCheckCircle, FaCalendarAlt, FaCode, FaDatabase, FaLaptopCode, FaPython, FaChartLine, FaBrain, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CoursesSection = () => {
  const [bgColor, setBgColor] = useState('bg-white'); // Default color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change background color based on scroll position
      if (scrollPosition > 100) {
        setBgColor('bg-gray-100'); // Scroll down to change to light gray
      } else {
        setBgColor('bg-white'); // Default background color
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="courses" className={`${bgColor} py-12 bg-gradient-to-br from-cyan-50 to-white border-gray-200`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900">Our Courses</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {/* C/C++ Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">C/C++ Programming</h3>
                <p className="text-sm">
                  Learn the fundamentals of C/C++ programming and improve your coding skills.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-green-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaCode className="text-green-500 text-2xl" />
            </div>
          </div>

          {/* DSA with C++ Course */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-2">🧠 DSA (Data Structures & Algorithms)</h3>
                <p className="text-white">
                  Build a strong foundation in problem-solving with a focus on Data Structures and Algorithms.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-blue-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
              <FaDatabase className="text-blue-500 text-2xl" />
            </div>
          </div>

          {/* Web Development Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-fuchsia-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-2">🌐 Web Development</h3>
                <p className="text-white">
                  Build modern, responsive websites using technologies like React.js, Next.js, and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-fuchsia-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaLaptopCode className="text-fuchsia-500 text-2xl" />
            </div>
          </div>
             {/* Python Course */}
             <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
              <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Python Programming</h3>
                <p className="text-sm">
                  Master Python for various applications including automation, web development, and data analysis.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-yellow-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
              <FaPython className="text-yellow-500 text-2xl" />
            </div>
          </div>

          {/* Data Analysis Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-2">📊 Data Analysis</h3>
              <p className="text-white">
                Master data analysis techniques using <span className="font-medium">Python</span>, <span className="font-medium">SQL</span>, and visualization tools like <span className="font-medium">Power BI</span>.
              </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-purple-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaChartLine className="text-purple-500 text-2xl" />
            </div>
          </div>

          {/* Machine Learning Course */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
              <div className="bg-cyan-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-sm">
                  Dive into machine learning concepts and algorithms to build intelligent models and systems.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-cyan-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
              <FaBrain className="text-cyan-500 text-2xl" />
            </div>
          </div>

          {/* CS Fundamentals Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-2">💻 CS Fundamentals</h3>
              <p className="text-white">
                Gain in-depth knowledge of core <span className="font-medium">Computer Science</span> principles, including <span className="font-medium">Operating Systems</span> and <span className="font-medium">Networking</span>.
              </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-red-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaBook className="text-red-500 text-2xl" />
            </div>
          </div>

          {/* Join Us Today Section */}
          <div className="flex justify-center mt-16">
          <Link
  to="/enroll"
  className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 text-center w-full md:w-auto"
>
  Join Us Today 🚀
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
