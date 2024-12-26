import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Use react-icons for social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 animate-fadeIn">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2 text-cyan-500 hover:text-cyan-400 transition-colors duration-300">
              INCLUDE-IT
            </h3>
            <p className="text-lg text-gray-400 mb-4">
              Empowering students with practical skills in tech, leadership, and innovation.
            </p>
            <p className="text-gray-400 text-sm">© 2024 INCLUDE-IT. All Rights Reserved.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 text-3xl transition-colors duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/saikat1236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 text-3xl transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 text-3xl transition-colors duration-300 transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 mt-8 animate-fadeIn">
        <p className="text-gray-400 text-center md:text-left text-sm">
  Created by <strong className="text-cyan-500">Dip & Dhriti</strong> |{' '}
  <a href="mailto:Saikat1236@gmail.com" className="hover:text-cyan-500 transition-colors duration-300">
    Saikat1236@gmail.com
  </a>
</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300 transform hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300 transform hover:scale-105"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
