import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EnrollPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value.trim(),
      phone: e.target.phone.value,
      college: e.target.college.value,
      semester: e.target.semester.value,
      batch: e.target.batch.value,
      message: e.target.message.value,
      password: e.target.password.value.trim(),
      userid: e.target.userid.value.trim(),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_DOMAIN}/api/enroll`,
        formData
      );

      console.log('Response:', response); // For debugging

     
      if (response.data.status) {
        toast.success(response.data.message || "Registration successful! Redirecting...", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        e.target.reset();
        setTimeout(() => {
          navigate("/thank-you");
        }, 3000);
      } else {
        // Handle case where API returns a failure status
        toast.error(response.data.message || "Registration failed. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        });
      }
    } catch (error) {
      console.log('Error:', error); // For debugging
      
      // Handle API error responses
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        toast.error(error.response.data.message || "Registration failed. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        });
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response from server. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        });
      } else {
        // Something happened in setting up the request
        toast.error("An error occurred. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900 py-20 min-h-screen flex items-center">
      <ToastContainer />
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Full Name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="userid" className="block text-lg font-medium text-gray-700 mb-2">
                    Set User ID
                  </label>
                  <input
                    type="text"
                    id="userid"
                    name="userid"
                    placeholder="eg: Example@123"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
                    Set Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="college" className="block text-lg font-medium text-gray-700 mb-2">
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    placeholder="Enter Your College Name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="semester" className="block text-lg font-medium text-gray-700 mb-2">
                    Semester
                  </label>
                  <input
                    type="text"
                    id="semester"
                    name="semester"
                    placeholder="Enter Your Current Semester (e.g., 4th, 6th)"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="batch" className="block text-lg font-medium text-gray-700 mb-2">
                    Preferred Batch Timing
                  </label>
                  <input
                    type="text"
                    id="batch"
                    name="batch"
                    placeholder="Enter Preferred Timing (e.g., Morning, Evening)"
                    required
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Any specific details or requests?"
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium text-lg py-3 rounded-lg 
                  ${!isSubmitting ? 'hover:scale-105 transform transition-transform duration-300' : 'opacity-75 cursor-not-allowed'}
                  flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Submit Registration'}
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollPage;