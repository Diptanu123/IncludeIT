import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-indigo-50 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="logo.png"
              alt="Include IT Logo"
              className="h-10 w-auto"
            />
            <span className="text-3xl font-extrabold text-indigo-600 tracking-wide">
              Include<span className="text-gray-800">IT</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              Contact Us
            </a>
            {/* Enroll Button */}
            <a
              href="#enroll"
              className="ml-4 px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col items-center bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 py-4' : 'max-h-0'
          }`}
        >
          <a
            href="#home"
            className="w-full text-center text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="w-full text-center text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
          >
            About
          </a>
          <a
            href="#courses"
            className="w-full text-center text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="w-full text-center text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
          >
            Contact Us
          </a>
          {/* Enroll Button */}
          <a
            href="#enroll"
            className="mt-2 px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Enroll Now
          </a>
        </div>
      </nav>
    </header>
  );
}
