import React from "react";
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="bg-[#4a070a] min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <a
          href="/"
          className="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Night's Watch
        </a>
        <div className="bg-red-800 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="bg-black/50 text-white text-center w-full rounded-xl mb-4 p-2 border-red-700 border-2"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="bg-black/50 text-white text-center w-full rounded-xl  mb-4 p-2 border-red-700 border-2"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="bg-black/50 text-white text-center w-full rounded-xl mb-4 p-2 border-red-700 border-2"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="bg-black/50 text-white text-center w-full rounded-xl mb-4 p-2 border-red-700 border-2"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-red-500 text-white hover:bg-[#4a070a] transition duration-300 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-white mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/terms"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-white mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to ="/signin"
            state = {{page: "SignIn"}}
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
