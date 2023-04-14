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
    <div className="text-white h-screen dark:bg-gray-900 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="bg-hero-pattern absolute inset-0 z-0 bg-cover bg-center"></div>
      <div className="max-w-xl text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="font-thefon gradient-text">SPICE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10">
          A community-driven recipe sharing website! Share your favorite recipes
          and discover new ones from people around the world. Whether you're a
          seasoned chef or a beginner in the kitchen, our platform is the
          perfect place to connect with other food lovers and explore new
          flavors. Join us today and let's share the joy of cooking together!
        </p>
      </div>
      <div className="mt-4 z-10">
        <button
          onClick={handleSignUpClick}
          className="animate-bounce py-3 px-8 md:px-12 rounded-full mr-4 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-800 hover:to-red-600 transition duration-300 font-semibold text-lg"
        >
          Sign Up
        </button>
        <button
          onClick={handleLogInClick}
          className="animate-bounce py-3 px-8 md:px-12 rounded-full ml-4 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-800 hover:to-red-600 transition duration-300 font-semibold text-lg"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Landing;