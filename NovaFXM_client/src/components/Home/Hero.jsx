import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-72px)] scroll-mt-20 items-center justify-center overflow-hidden bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">

      {/* Background circles */}
      <div className="hero-circle hero-circle-left w-[220px] sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="hero-circle hero-circle-right w-[220px] sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

        {/* Badge */}
        <div className="reveal-up inline-flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-3 sm:px-6 py-2 mb-6 sm:mb-10 shadow-sm">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=1"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              alt=""
            />
          </div>

          <span className="text-gray-600 text-xs sm:text-sm font-medium">
            Trusted by 450K Users
          </span>
        </div>

        {/* Heading */}
        <h1 className="reveal-up reveal-delay-1 leading-tight">
          <span className="block text-3xl sm:text-5xl md:text-8xl font-bold text-[#014421]">
            Unlock the Future <span className="text-3xl sm:text-5xl md:text-8xl font-light text-gray-900">of</span>
          </span>

          <span className="block mt-5 sm:mt-8 text-3xl sm:text-5xl md:text-7xl font-light text-gray-900">
            Forex Trading
          </span>
        </h1>

        {/* Description */}
        <p className="reveal-up reveal-delay-2 mx-auto mt-4 max-w-2xl px-2 text-sm leading-relaxed text-gray-500 sm:mt-6 sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. It has
          survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>

        {/* Button */}
        <div className="mt-6 sm:mt-10">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine bg-[#014421] hover:bg-[#01351a] cursor-pointer text-white px-6 sm:px-10 py-3 rounded-lg shadow-md transition duration-300 text-sm sm:text-base w-full sm:w-auto hover:-translate-y-1 hover:shadow-xl"
          >
            Trade Now
          </button>
        </div>

      </div>
    </section>
  );
}
