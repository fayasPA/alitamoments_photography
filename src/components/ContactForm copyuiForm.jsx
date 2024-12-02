import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-formColor overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 space-y-8 animate-slideInFromLeft mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white animate-appear">
        Welcome
      </h2>
      <p className="text-center text-gray-200 text-sm sm:text-base md:text-lg animate-appear">
        Sign up for an account
      </p>
      <form method="POST" action="#" className="space-y-6 grid grid-cols-1 lg:grid-cols-2">
        {/* Full Name Field */}
        <div className="relative">
          <input
            placeholder="John Doe"
            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required
            id="fullName"
            name="fullName"
            type="text"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="fullName"
          >
            Full Name
          </label>
        </div>
        {/* Email Field */}
        <div className="relative">
          <input
            placeholder="john@example.com"
            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required
            id="email"
            name="email"
            type="email"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="email"
          >
            Email Address
          </label>
        </div>
        {/* Password Field */}
        <div className="relative">
          <input
            placeholder="Password"
            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required
            id="password"
            name="password"
            type="password"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        {/* Confirm Password Field */}
        <div className="relative">
          <input
            placeholder="Confirm Password"
            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
        </div>
        {/* Terms Checkbox */}
        <div className="flex items-center justify-start">
          <label className="flex items-center text-sm text-gray-200">
            <input
              className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
              type="checkbox"
            />
            <span className="ml-2">I agree to the terms and conditions</span>
          </label>
        </div>
        {/* Submit Button */}
        <button
          className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center text-gray-300">
        Already have an account?{" "}
        <a className="text-purple-300 hover:underline" href="#">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
