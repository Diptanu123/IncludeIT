import React from 'react';
import coachImage from '/1702989116329.jpeg'; // Ensure the image is in the public folder

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-white to-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16 animate-fade-down">
          📞 Let's Get in Touch
        </h2>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
          
          {/* Left Side: Contact Information */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-cyan-50 to-white border-r border-gray-200 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-700 mb-4">📍 Get in Touch</h3>
            <p className="text-lg text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
              <strong>🏢 Address:</strong> Pathfinder Institute, Near Ramnagar-3 Main Road, Above Aroma Cake Shop, Agartala, Tripura(W).
            </p>
            <p className="text-lg text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
              <strong>📞 Phone:</strong> 
              <a href="tel:+917085959167" className="text-cyan-600 underline"> 7085959167</a>
            </p>
            <p className="text-lg text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
              <strong>📧 Email:</strong> 
              <a href="mailto:Saikat1236@gmail.com" className="text-cyan-600 underline">Saikat1236@gmail.com</a>
            </p>
            <p className="text-lg text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
              <strong>🌐 Website:</strong> 
              <a href="https://www.includeit.com" className="text-cyan-600 underline"> www.includeit.com</a>
            </p>
            <p className="text-lg text-gray-700 mt-6 italic font-medium text-center md:text-left animate-pulse">
              📤 We're always here to assist you!
            </p>
          </div>

          {/* Right Side: Coach Profile */}
          <div className="w-full md:w-1/2 p-10 flex flex-col items-center bg-white group animate-slide-in-right relative">
            {/* Decorative Background Circle */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-200 rounded-full blur-xl opacity-30"></div>

            {/* Profile Image */}
            <div className="relative mb-6">
              <img
                src={coachImage}
                alt="Saikat Biswas"
                className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-indigo-600 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Lead Coach
              </div>
            </div>

            {/* Profile Details */}
            <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Saikat Biswas</h3>
            <p className="text-lg text-gray-600 font-medium mb-4 text-center">
              Founder & Tutor of <strong>INCLUDE-IT</strong>
            </p>
            <p className="text-md text-gray-600 text-center leading-relaxed mb-4">
              Saikat Biswas is a seasoned <strong>Full Stack Web Developer</strong> at <strong>Drapo</strong>, with extensive experience in leading complex projects and building innovative solutions.
            </p>
            <p className="text-md text-gray-600 text-center leading-relaxed mb-4">
               <p> Lead Coach at Include IT. With over 3 years of experience in programming and teaching, Saikat specializes in C++, DSA, and Web & App Development.</p>
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6 animate-fade-up">
              <a href="https://www.linkedin.com/in/saikat1236/" className="text-gray-500 hover:text-cyan-600 text-2xl transition-colors duration-300">
                🔗 <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-600 text-2xl transition-colors duration-300">
                🐦 <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/saikat1236/" className="text-gray-500 hover:text-cyan-600 text-2xl transition-colors duration-300">
                💻 <i className="fab fa-github"></i>
              </a>
            </div>

            {/* Call-to-Action Button */}
            <a
              href="mailto:Saikat1236@gmail.com"
              className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 animate-bounce"
            >
              Send a Message 📧
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
