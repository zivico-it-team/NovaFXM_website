import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="relative bg-white shadow-md rounded-xl p-6 w-full max-w-md text-center">
        
       {/* Logo - Smaller size */}
<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-2.5 py-1.5 rounded-xl shadow">
  <img
    src="/logo2.png"
    alt="Logo"
    className="h-10 object-contain"
  />

</div>

        {/* Title */}
        <h2 className="text-xl font-semibold mt-8">
          Welcome to <span className="text-green-700">Novafxm!</span>
        </h2>

        <p className="text-sm text-gray-500 mt-2 mb-4">
          Credentials are only used to authenticate. All saved data will be stored in your database.
        </p>

        {/* Form */}
        <form className="space-y-3">
          {/* Name fields */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
          />

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <FaEyeSlash className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>

          {/* Country */}
          <input
            type="text"
            placeholder="Country"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
          />

          {/* Terms */}
          <div className="flex items-start text-xs text-gray-500 gap-2">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the{" "}
              <span className="text-green-700 font-medium">Terms of service</span>{" "}
              and Privacy policies
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Social Icons - Order: Instagram, Facebook, Twitter */}
        <div className="flex justify-center gap-8 mt-6">
          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <div className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <FaInstagram size={18} />
            </div>
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <div className="bg-[#1877F2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <FaFacebookF size={18} />
            </div>
          </a>

          {/* Twitter */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <div className="bg-[#1DA1F2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <FaTwitter size={18} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};



export default LoginPage;