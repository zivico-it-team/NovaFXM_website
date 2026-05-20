import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-72px)] scroll-mt-20 items-center justify-center overflow-hidden bg-gray-100 px-4 py-4 sm:min-h-[calc(100vh-80px)] sm:px-6 sm:py-8 lg:px-8">

      {/* Background circles */}
      <div className="hero-circle hero-circle-left w-[180px] sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="hero-circle hero-circle-right w-[180px] sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

        {/* Badge */}
        <div className="reveal-up mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm sm:mb-6 sm:gap-3 sm:px-6 sm:py-2">
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
        <h1 className="reveal-up reveal-delay-1 leading-[1.3] sm:leading-tight">
          <span className="block text-3xl font-bold text-[#014421] sm:text-5xl md:text-8xl">
            Unlock the Future <span className="text-3xl font-light text-gray-900 sm:text-5xl md:text-8xl">of</span>
          </span>

          <span className="mt-3 block text-3xl font-light text-gray-900 sm:mt-4 sm:text-5xl md:mt-5 md:text-7xl">
            Forex Trading
          </span>
        </h1>

        {/* Description */}
        <p className="reveal-up reveal-delay-2 mx-auto mt-3 max-w-2xl px-1 text-sm leading-8 text-gray-500 sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. It has
          survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>
        <p className="reveal-up reveal-delay-2 mx-auto mt-3 max-w-2xl px-1 text-sm leading-8 text-gray-500 sm:hidden">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. It has
          survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>
        

        {/* Button */}
        <div className="mt-6 sm:mt-7">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine w-auto cursor-pointer rounded-lg bg-[#014421] px-5 py-2.5 text-xs text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#01351a] hover:shadow-xl sm:px-10 sm:py-3 sm:text-base"
          >
            Trade Now
          </button>
        </div>

      </div>
    </section>
  );
}
