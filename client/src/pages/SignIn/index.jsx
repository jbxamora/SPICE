import React from "react";
import { Images } from "../../constants/constants";
import { Link } from "react-router-dom";

const SignIn = () => {
  const randomImage = Images[Math.floor(Math.random() * Images.length)];

  return (
    <section className="bg-transparent min-h-screen flex items-center justify-center">
      <div className="flex rounded-2xl shadow-lg max-w-3xl p-5 items-center bg-white dark:bg-gray-800">
        <div className="md:w-1/2 px-8 md:px-16 space-y-6">
          <h2 className="text-xl text-center font-bold text-gray-900 dark:text-white">
            Welcome Back!
          </h2>
          <p className="text-md text-center text-gray-900 dark:text-white">
            Login
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button className="bg-blue-500 rounded-lg text-white py-2 w-full transition-colors duration-200 hover:bg-blue-600">
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-lg mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-500">
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-gray-200 py-4 text-gray-900 dark:text-white">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-gray-900 dark:text-white">
            <p>Don't have an account?</p>
            <Link to='/signup' className="py-2 px-5 bg-white border rounded-lg hover:scale-110 duration-300">
              Register
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={randomImage} />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
