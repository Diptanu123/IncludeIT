import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Users, Star, Award } from "lucide-react";

export default function HeroSection() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  const statsItems = [
    { icon: Users, count: "100+", label: "Students Enrolled" },
    { icon: Star, count: "10 LPA", label: "Average Package" },
    { icon: Award, count: "50+", label: "Placed" },
  ];

  return (
    <div
      id="home"
      className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-36 h-36 md:w-72 md:h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 mb-16 lg:mb-0 text-center lg:text-left"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl leading-tight"
            variants={fadeInUp}
          >
            An Institute with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              NITians
            </span>{" "}
            by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              NITians
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-lg text-gray-700 md:text-xl"
            variants={fadeInUp}
          >
            Empower your future with top-notch coaching and expert mentorship
            from industry leaders at <strong>IncludeIT</strong>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
            variants={fadeInUp}
          >
            <Link
              to="/enroll"
              className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#about"
              className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium text-indigo-700 bg-white/80 backdrop-blur-sm border-2 border-indigo-100 hover:border-indigo-200 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              Learn More
              <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 md:gap-8"
            variants={fadeInUp}
          >
            {statsItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-center mb-2">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
                <div className="font-bold text-lg md:text-2xl text-gray-900">
                  {item.count}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center relative lg:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group w-full">
            <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 transform group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-72 sm:h-96 md:h-[600px] transform group-hover:scale-110 transition-transform duration-700"
                src="DemoClass.jpg"
                alt="Include IT"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent group-hover:from-indigo-900/60 transition-colors duration-300"></div>
              <motion.div
                className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-lg md:text-2xl font-bold mb-1 sm:mb-2">
                  Interactive Learning
                </h3>
                <p className="text-sm md:text-lg text-gray-200">
                  Experience personalized coaching tailored for your success
                  journey.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
