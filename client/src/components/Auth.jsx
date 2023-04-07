import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SignUp />
      <div className="hidden sm:flex mx-8 items-center">
        <div className="border-r-2 border-gray-300 h-1/2" />
        <span className="mx-3 text-gray-300 text-xl font-bold">OR</span>
        <div className="border-r-2 border-gray-300 h-1/2" />
      </div>
      <div className="flex sm:hidden my-8 mx-auto w-16 items-center">
        <div className="border-t-2 border-gray-300 w-1/2" />
        <span className="mx-3 text-gray-300 text-xl font-bold">OR</span>
        <div className="border-t-2 border-gray-300 w-1/2" />
      </div>
      <SignIn />
    </div>
  );
};

export default Auth;
