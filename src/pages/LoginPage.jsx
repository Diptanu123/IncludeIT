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
    const loginData = {
      userid: e.target.userid.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_DOMAIN}/api/login`, loginData);
      if (response.status === 200) {
        // Include user data in loginSuccess action
        dispatch(loginSuccess({ 
          id: response.data.id,
          userid: loginData.userid,
          // Add any other user data you want to store
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
              {status && <p className="mt-4 text-sm text-center text-red-500">{status}</p>}
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
