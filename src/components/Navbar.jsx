import { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // Import the logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? "bg-indigo-50 shadow-md" // Opaque and shadow when scrolled
          : "bg-transparent" // Transparent when at the top
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className={`text-xl font-semibold "text-gray-800"`}>
              includeIT
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className={`text-lg transition-all duration-200  text-gray-800 hover:text-blue-500`}
          >
            Home
          </a>
          <a
            href="#courses"
            className={`text-lg transition-all duration-200 text-gray-800 hover:text-blue-500 `}
          >
            Courses
          </a>
          <a
            href="#about"
            className={`text-lg transition-all duration-200 text-gray-800 hover:text-blue-500 `}
          >
            About Us
          </a>
          <a
            href="#contact"
            className={`text-lg transition-all duration-200 text-gray-800 hover:text-blue-500`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button className={`focus:outline-none ${isScrolled ? "text-gray-800" : "text-white"}`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
