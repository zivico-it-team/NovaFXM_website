
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const LoginPage = ({ onSignUpClick }) => {
  const [showPassword, setShowPassword] = useState("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      
      {/* Card */}
      <div className="bg-white w-full max-w-[350px] rounded-3xl shadow-md p-6 relative">
        
        {/* Logo */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-2.5 py-1.5 rounded-xl shadow">
  <img
    src="/logo2.png"
    alt="Logo"
    className="h-8 object-contain"
  />
</div>


        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mt-6">
          Hello,<br />
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Login to continue to your account
        </p>

        {/* Form */}
       <form className="mt-6 space-y-4">
  {/* Email */}
  <input
    type="email"
    placeholder="example@gmail.com"
    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
  />
  {/* Password */}
  <div className="relative">
    <input
      type="password"
      placeholder="********"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
    />
  </div>


          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white bg-green-600text-gray-500">or</span>
          </div>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={onSignUpClick}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;