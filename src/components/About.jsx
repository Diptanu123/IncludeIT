export default function About() {
    return (
      <section id="about" className="bg-gray-50 py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">About <span className="text-blue-600">IncludeIT</span></h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            At <span className="font-semibold text-gray-800">IncludeIT</span>, we empower students with cutting-edge technical knowledge and hands-on skills to thrive in the digital era.
          </p>
  
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Web Development */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">🌐 Web Development</h3>
              <p className="text-gray-600">
                Build modern, responsive websites using technologies like <span className="font-medium">React.js</span>, <span className="font-medium">Next.js</span>, and <span className="font-medium">Tailwind CSS</span>.
              </p>
            </div>
  
            {/* App Development */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">📱 App Development</h3>
              <p className="text-gray-600">
                Learn to create robust mobile applications with frameworks like <span className="font-medium">React Native</span> and <span className="font-medium">Flutter</span>.
              </p>
            </div>
  
            {/* Data Analysis */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">📊 Data Analysis</h3>
              <p className="text-gray-600">
                Master data analysis techniques using <span className="font-medium">Python</span>, <span className="font-medium">SQL</span>, and visualization tools like <span className="font-medium">Power BI</span>.
              </p>
            </div>
  
            {/* DSA */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">🧠 DSA (Data Structures & Algorithms)</h3>
              <p className="text-gray-600">
                Build a strong foundation in problem-solving with a focus on <span className="font-medium">Data Structures</span> and <span className="font-medium">Algorithms</span>.
              </p>
            </div>
  
            {/* CS Fundamentals */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">💻 CS Fundamentals</h3>
              <p className="text-gray-600">
                Gain in-depth knowledge of core <span className="font-medium">Computer Science</span> principles, including <span className="font-medium">Operating Systems</span> and <span className="font-medium">Networking</span>.
              </p>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-12">
            <a
              href="#enroll"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Join Us Today 🚀
            </a>
          </div>
        </div>
      </section>
    );
  }
  