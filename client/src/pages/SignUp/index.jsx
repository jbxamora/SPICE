import React, { useState,useRef, useCallback } from "react";
import { Images } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignUp = () => {
  const randomImage = useRef(Images[Math.floor(Math.random() * Images.length)]);
  const [formState, setFormState] = useState({
    name:'',
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className="bg-transparent min-h-screen flex items-center justify-center">
      <div className="flex rounded-2xl shadow-black shadow-lg max-w-3xl p-5 items-center bg-white dark:bg-gray-800">
        <div className="md:w-1/2 px-8 md:px-16 space-y-6">
          <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">
            Sign Up
          </h2>
          <p className="text-md text-center text-gray-900 dark:text-white">
            Join The Community!
          </p>
          <form className="space-y-6"onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nacho Cheese"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={handleChange}
                value={formState.email}
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                id="username"
                type="username"
                name="username"
                placeholder="GrillMaster900"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={formState.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={handleChange}
                value={formState.password}
                required
              />
            </div>
            <button className="bg-blue-500 rounded-lg text-white py-2 w-full transition-colors duration-200 hover:bg-blue-600">
              Create Account
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-lg mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-500">
            Sign Up with Google
          </button>

          <div className="mt-3 text-xs flex justify-between items-center text-gray-900 dark:text-white">
            <Link
              to="/signin"
              className="bg-white border py-2 w-full rounded-lg mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-500"
            >
              Already have an account?
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={randomImage.current} />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
