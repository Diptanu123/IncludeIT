import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <img
              src="src/Photos/includeIT-removebg-preview.png"
              alt="Include IT Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="text-2xl font-extrabold text-gray-800 tracking-wide">Include IT</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">About</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Courses</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact Us</a>
            {/* Enroll Button */}
            <a
              href="#enroll"
              className="ml-4 px-6 py-2 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col bg-white border-t border-gray-200 shadow-md transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
          } overflow-hidden`}
        >
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-3 text-center transition duration-300">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-3 text-center transition duration-300">About</a>
          <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium py-3 text-center transition duration-300">Courses</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-3 text-center transition duration-300">Contact Us</a>
          {/* Enroll Button */}
          <a
            href="#enroll"
            className="mt-4 mx-auto px-6 py-2 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Enroll Now
          </a>
        </div>
      </nav>
    </header>
  );
}
