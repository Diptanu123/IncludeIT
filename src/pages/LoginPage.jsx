import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess } from "../redux/authSlice";

function LoginPage() {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("");
    
    const loginData = {
      userid: e.target.userid.value,
      password: e.target.password.value,
    };
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_DOMAIN}/api/login`, loginData);
      
      if (response.data && response.data.data) {
        // Extract user data from the nested response structure
        const userData = response.data.data.userData;
        const token = response.data.data.token;
  
        // Dispatch login action with token and user data
        dispatch(loginSuccess({ 
          token,
          userData: {
            name: userData.name,
            college: userData.college,
            userid: userData.userid,
            email: userData.email
          }
        }));
  
        setStatus("Login successful!");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setStatus("Invalid User ID or Password. Please try again.");
    }
  };

  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black">Login to Your Account</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Login</h3>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="userid" className="block text-lg font-medium text-gray-700 mb-2">User ID</label>
                <input
                  type="text"
                  id="userid"
                  name="userid"
                  placeholder="Enter Your User ID"
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium text-lg py-3 rounded-lg hover:scale-105 transform transition-transform duration-300"
              >
                Login
              </button>
              {status && (
                <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
                  status === "Login successful!" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}>
                  {status}
                </div>
              )}
            </form>
            <p className="mt-6 text-center text-gray-600">
              Not enrolled?{" "}
              <Link to="/enroll" className="text-indigo-500 hover:underline font-medium">
                Enroll here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;