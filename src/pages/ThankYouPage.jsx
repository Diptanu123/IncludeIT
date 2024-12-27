import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState } from "react";

function ThankYouPage() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        gravity={0.8} // Increase gravity to make it faster
        numberOfPieces={400} // Adjust the number of confetti pieces
        recycle={false} // Disable recycling for a single burst effect
      />
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">
        Registration Successful!
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Thank you for registering. We have received your details and will get
        back to you soon.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium text-lg py-3 px-6 rounded-lg hover:scale-105 transform transition-transform duration-300"
      >
        Go to Home
      </button>
    </div>
  );
}

export default ThankYouPage;
