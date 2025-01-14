import React from "react";
import { motion } from "framer-motion";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";

const Footer = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-400 transition-all duration-500">
              IncludeIT
            </h3>
            <p className="text-gray-300">
              Empowering students with practical skills in tech, leadership, and
              innovation.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <FaMapMarkerAlt className="text-cyan-500" />
                <span>Ramnagar,Agartala,Tripura(W)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <FaPhone className="text-cyan-500" />
                <span>+91 7085959167</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <FaEnvelope className="text-cyan-500" />
                <span>Saikat1236@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {["About Us", "Services", "Projects", "Blog"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:translate-x-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              {[
                { Icon: FaInstagram, url: "https://www.instagram.com" },
                { Icon: FaLinkedin, url: "https://www.linkedin.com/in/saikat1236/" },
                { Icon: FaTwitter, url: "https://www.twitter.com" }
              ].map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 INCLUDE-IT. All Rights Reserved. Created by{" "}
              <span className="text-cyan-500 font-semibold">Dip & Dhriti</span>
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;