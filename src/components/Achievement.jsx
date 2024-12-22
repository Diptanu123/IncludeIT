
export default function Achievements() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <div className="relative bg-white hover:bg-gray-100 rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-bounce">
              100+
            </div>
            <h3 className="text-2xl font-semibold mt-10">Students Enrolled</h3>
            <p className="mt-2 text-gray-700">We have successfully enrolled over 100 students across various technical domains.</p>
          </div>

          {/* Achievement 2 */}
          <div className="relative bg-white hover:bg-gray-100 rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-bounce">
              50+
            </div>
            <h3 className="text-2xl font-semibold mt-10">Students Placed</h3>
            <p className="mt-2 text-gray-700">More than 50 students have secured placements in top companies.</p>
          </div>

          {/* Achievement 3 */}
          <div className="relative bg-white hover:bg-gray-100 rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-bounce">
              10 LPA
            </div>
            <h3 className="text-2xl font-semibold mt-10">Average Package</h3>
            <p className="mt-2 text-gray-700">Our students have achieved an impressive average package of 10 LPA.</p>
          </div>

          {/* Achievement 4 */}
          <div className="relative bg-white hover:bg-gray-100 rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-bounce">
              20+
            </div>
            <h3 className="text-2xl font-semibold mt-10">Industry Partners</h3>
            <p className="mt-2 text-gray-700">We collaborate with over 20 top industry partners to ensure high-quality education.</p>
          </div>

          {/* Achievement 5 */}
          <div className="relative bg-white hover:bg-gray-100 rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 group">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-bounce">
              5+
            </div>
            <h3 className="text-2xl font-semibold mt-10">Global Certifications</h3>
            <p className="mt-2 text-gray-700">Our curriculum includes globally recognized certifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
