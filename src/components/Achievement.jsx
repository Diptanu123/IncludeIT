import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, IndianRupee ,Trophy, Rocket } from 'lucide-react';


export default function Achievements() {
  const achievements = [
    {
      icon: Users,
      number: "100+",
      title: "Students Enrolled",
      description: "Passionate learners across technical domains",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Trophy,
      number: "50+",
      title: "Students Placed",
      description: "Successful placements in top companies",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon:IndianRupee,
      number: "10 LPA",
      title: "Average Package",
      description: "Impressive compensation packages",
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-50 to-blue-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 overflow-hidden py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-black">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Celebrating our milestones and the success of our students
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-gradient-to-br ${achievement.bgGradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-lg`}
                >
                  <achievement.icon className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <div className="mt-12 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text mb-4"
                >
                  {achievement.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>

              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl text-white text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Rocket className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Join Our Success Story?</h3>
              <p className="text-indigo-100">Start your journey with includeIT today</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enroll Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}