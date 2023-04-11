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
    <div className="bg-hero-pattern bg-cover text-white min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10">
        <div className="bg-food-pattern bg-cover bg-center h-96 rounded-xl">
          <div className="h-full w-full flex items-center justify-center">
            {/* <h1 className="text-5xl font-bold gradient-text">SPICE</h1> */}
          </div>
        </div>

        <div className="mt-60">
          <div className="text-2xl">
            Welcome to <span className="text-3xl font-thefont gradient-text">SPICE</span> , a community-driven recipe sharing website! Share your favorite recipes and discover new ones from people around the world. Whether you're a seasoned chef or a beginner in the kitchen, our platform is the perfect place to connect with other food lovers and explore new flavors. Join us today and let's share the joy of cooking together!
          </div>

        </div>
        <div className="mt-20">
          <button
            onClick={handleSignUpClick}
            className="py-2 px-10 rounded mr-4 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-800 hover:to-red-600 ..."
          >
            Sign Up
          </button>
          <button
            onClick={handleLogInClick}
            className=" py-2 px-12 ml-6 rounded bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-800 hover:to-red-600 ..."
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
