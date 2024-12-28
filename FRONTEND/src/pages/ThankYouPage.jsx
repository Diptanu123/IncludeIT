import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

function ThankYouPage() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900 px-4 sm:px-8">
      {/* Confetti Animation */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        gravity={0.8}
        numberOfPieces={400}
        recycle={false}
      />

      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-10 max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
          🎉 Registration Successful!
        </h1>
        <p className="text-md sm:text-lg text-gray-700 mb-6 leading-relaxed">
          Thank you for registering. We have received your details and will get
          back to you soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium text-md sm:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:scale-105 transform transition-transform duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
