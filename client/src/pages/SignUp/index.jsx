import React, { useState } from "react";
import { Images } from "../../constants/constants";
import SignIn from "../SignIn";

const SignUp = ({}) => {

  const [showSignIn, setShowSignIn] = useState(false);
  const randomImage = Images[Math.floor(Math.random() * Images.length)];

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  if (showSignIn) {
    return <SignIn />;
  }
  return (
    <section className="bg-transparent min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            Create your account to get started
          </p>
          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              className="p-2 mt-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative mt-2">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 mt-2 hover:scale-105 duration-300">
              Register
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            Sign up with Google
          </button>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#" onClick={handleSignInClick}>
              Already have an account? Sign In
            </a>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={randomImage} />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
