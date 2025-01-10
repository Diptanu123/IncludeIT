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
              <strong>📞 Phone: </strong> 
              <a href="tel:+917085959167" className="text-cyan-600 underline">  7085959167</a>
            </p>
            <p className="text-lg text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
              <strong>📧 Email: </strong> 
              <a href="mailto:saikat1236@gmail.com" className="text-cyan-600 underline">  saikat1236@gmail.com</a>
            </p>
            <p className="text-lg text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
              <strong>🌐 Website: </strong> 
              <a href="https://includeit.vercel.app/" className="text-cyan-600 underline">  www.includeit.vercel.app</a>
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
            <a href="https://saikat-biswas.vercel.app/">

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
            </a>
            {/* Profile Details */}
            <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Saikat Biswas</h3>
            <p className="text-lg text-gray-600 font-medium mb-4 text-center">
              Founder & Tutor of <strong>INCLUDE-IT</strong>
            </p>
            <p className="text-md text-gray-600 text-center leading-relaxed mb-4">
              Saikat Biswas is a seasoned <strong>Full Stack Developer</strong> at <strong>Drapo</strong>, with extensive experience in leading complex projects and building innovative solutions.
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


// import React from 'react';
// import founderImage from '/1702989116329.jpeg';
// import cofounderImage from '/saumya.png';
// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <section id="contact" className="bg-gradient-to-br from-gray-50 to-gray-200 py-16 overflow-hidden">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         {/* Section Title */}
//         <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16 animate-fade-down">
//           📞 Let's Get in Touch
//         </h2>

//         {/* Founders Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
//           {/* Founder */}
//           <div className="w-full md:w-1/2 p-10 flex flex-col items-center bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 animate-slide-in-left">
//             <div className="relative mb-6">
//               <img
//                 src={founderImage}
//                 alt="Saikat Biswas"
//                 className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-indigo-600 hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute bottom-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
//                 Founder
//               </div>
//             </div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300 text-center md:text-left">
//   Saikat Biswas
// </h3>

//             <p className="text-lg text-gray-600 font-medium mb-4 text-center">
//               Founder & Tutor of <strong>INCLUDE-IT</strong>
//             </p>
//             <p className="text-md text-gray-600 text-center leading-relaxed mb-4">
//               Saikat Biswas is a <strong>Full Stack Developer</strong> at <strong>Drapo</strong>, with extensive experience in leading complex projects and building innovative solutions.
//             </p>
//             <p className="text-md text-gray-600 text-center leading-relaxed">
//               Lead Coach at Include IT with over 3 years of experience in C++, DSA, and Web & App Development.
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a href="https://github.com/saikat" className="text-gray-700 hover:text-indigo-600 text-2xl transition-colors">
//                 <FaGithub />
//               </a>
//               <a href="https://twitter.com/saikat" className="text-gray-700 hover:text-indigo-600 text-2xl transition-colors">
//                 <FaTwitter />
//               </a>
//               <a href="https://linkedin.com/in/saikat" className="text-gray-700 hover:text-indigo-600 text-2xl transition-colors">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* Co-Founder */}
//           <div className="w-full md:w-1/2 p-10 flex flex-col items-center bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 animate-slide-in-right">
//             <div className="relative mb-6">
//               <img
//                 src={cofounderImage}
//                 alt="Saumyadeep Debnath"
//                 className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-indigo-600 hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute bottom-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
//                 Co-Founder
//               </div>
//             </div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
//               Saumyadeep Debnath
//             </h3>
//             <p className="text-lg text-gray-600 font-medium mb-4 text-center">
//               Co-Founder of <strong>INCLUDE-IT</strong>
//             </p>
//             <p className="text-md text-gray-600 text-center leading-relaxed mb-4">
//               Saumyadeep is an <strong>Analyst </strong>at <strong> Deloitte</strong>, specializing in data analysis, business intelligence, and decision-making frameworks.
//             </p>
//             <p className="text-md text-gray-600 text-center leading-relaxed">
//               He has successfully delivered insights for Fortune 500 clients, leveraging tools like Power BI, Excel, and SQL.
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a href="https://github.com/saumyadeep" className="text-gray-700 hover:text-indigo-600 text-2xl transition-colors">
//                 <FaGithub />
//               </a>
//               <a href="https://twitter.com/saumyadeep" className="text-gray-700 hover:text-indigo-600 text-2xl transition-colors">
//                 <FaTwitter />
//               </a>
//               <a href="https://linkedin.com/in/saumyadeep" className="text-gray-700 hover:text-indigo-600 text-2xl transition-colors">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="w-full p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50 border-t border-gray-200 animate-slide-in-up rounded-3xl shadow-xl">
//           <h3 className="text-3xl font-bold text-gray-700 mb-4 text-center animate-pulse">📍 Get in Touch</h3>
//           <p className="text-lg text-gray-600 mb-4 text-center">
//             <strong>🏢 Address:</strong> Pathfinder Institute, Near Ramnagar-3 Main Road, Above Aroma Cake Shop, Agartala, Tripura(W).
//           </p>
//           <p className="text-lg text-gray-600 mb-4 text-center">
//             <strong>📞 Phone: </strong>
//             <a href="tel:+917085959167" className="text-cyan-600 underline">7085959167</a>
//           </p>
//           <p className="text-lg text-gray-600 mb-4 text-center">
//             <strong>📧 Email: </strong>
//             <a href="mailto:saikat1236@gmail.com" className="text-cyan-600 underline">saikat1236@gmail.com</a>
//           </p>
//           <p className="text-lg text-gray-600 text-center">
//             <strong>🌐 Website: </strong>
//             <a href="https://includeit.vercel.app/" className="text-cyan-600 underline">www.includeit.vercel.app</a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
