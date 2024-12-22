export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
            “An Institute with <span className="text-indigo-600">NITians</span> by <span className="text-indigo-600">NITians</span>”
          </h1>
          <p className="mt-6 text-lg text-gray-700 md:text-xl">
            Empower your future with top-notch coaching and expert mentorship from industry leaders at <strong>Include IT</strong>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-md transform hover:scale-105 transition-transform"
            >
              Get Started
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-indigo-700 bg-white border border-indigo-600 hover:bg-indigo-50 rounded-md shadow-md transform hover:scale-105 transition-transform"
            >
              Learn More
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Join over <strong>100+</strong> students who have transformed their careers with us.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative group">
            <img
              className="object-cover rounded-xl shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] transition-transform transform group-hover:scale-105"
              src="src/Photos/vecteezy_a-student-is-studying-with-the-teacher-on-a-laptop_8258674.jpg"
              alt="Include IT"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-300 to-transparent opacity-40 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">Interactive Learning</h3>
              <p className="text-sm">Personalized coaching tailored for your success.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply opacity-30 filter blur-3xl"></div>
    </div>
  );
}
