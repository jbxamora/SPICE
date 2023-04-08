import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogInClick = () => {
    navigate("/signin");
  };

  return (
    <div className="bg-hero-pattern text-white min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10">
        <div className="bg-food-pattern bg-cover bg-center h-96 rounded-xl">
          <div className="h-full w-full flex items-center justify-center">
            <h1 className="text-5xl font-bold gradient-text">SPICE</h1>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Discover the best recipes from around the world.
          </p>
          <p className="text-lg mt-2">
            Join our community and share your culinary experiences.
          </p>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSignUpClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogInClick}
            className="ml-4 text-blue-500 hover:text-blue-700 font-bold py-2 px-4"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
