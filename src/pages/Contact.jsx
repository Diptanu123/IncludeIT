import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState(""); // For showing success/error messages

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been received.");
    e.target.reset(); // Clear the form fields after submission
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900 py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 mb-4">
              Get in Touch
            </h3>
            <p>We are here to help you with your inquiries or projects.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-indigo-500 mr-2" />
              <a
                href="mailto:demo@example.com"
                className="hover:underline"
              >
                demo@example.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-indigo-500 mr-2" />
              <span>+1-234-567-890</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-indigo-500 mr-2" />
              <span>123 Demo Street, City, Country</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
              {status && (
                <p className="mt-4 text-sm text-center text-indigo-500">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
