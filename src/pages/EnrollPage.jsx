import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API call

function EnrollPage() {
  const [status, setStatus] = useState(""); // For showing success/error messages
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      college: e.target.college.value,
      semester: e.target.semester.value,
      batch: e.target.batch.value,
      message: e.target.message.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/enroll", formData);
      if (response.status === 201) {
        setStatus("Registration successful!");
        e.target.reset(); // Clear the form fields after submission
        setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black">
          Register for Our Coaching Classes
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
              Fill Your Details Below
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" placeholder="Enter Your Full Name" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" placeholder="Enter Your Email" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input type="text" id="phone" name="phone" placeholder="Enter Your Phone Number" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="college" className="block text-lg font-medium text-gray-700 mb-2">
                    College Name
                  </label>
                  <input type="text" id="college" name="college" placeholder="Enter Your College Name" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="semester" className="block text-lg font-medium text-gray-700 mb-2">
                    Semester
                  </label>
                  <input type="text" id="semester" name="semester" placeholder="Enter Your Current Semester (e.g., 4th, 6th)" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="batch" className="block text-lg font-medium text-gray-700 mb-2">
                    Preferred Batch Timing
                  </label>
                  <input type="text" id="batch" name="batch" placeholder="Enter Preferred Timing (e.g., Morning, Evening)" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea id="message" name="message" placeholder="Any specific details or requests?" required className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" rows="5"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium text-lg py-3 rounded-lg hover:scale-105 transform transition-transform duration-300">
                Submit Registration
              </button>
              {status && <p className="mt-4 text-sm text-center text-indigo-500">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollPage;
