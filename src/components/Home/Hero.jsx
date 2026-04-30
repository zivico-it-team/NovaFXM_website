import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">

      {/* Background circles (mobile optimized) */}
      <div className="absolute w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-gray-200 rounded-full -left-24 md:-left-40 top-20 opacity-30 md:opacity-50"></div>

      <div className="absolute w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-gray-200 rounded-full -right-24 md:-right-40 top-20 opacity-30 md:opacity-50"></div>

      <div className="max-w-5xl text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-3 sm:px-6 py-2 mb-6 sm:mb-10 shadow-sm">
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
        <h1 className="leading-tight">
          <span className="block text-3xl sm:text-5xl md:text-6xl font-bold text-[#014421]">
            Unlock the Future
          </span>

          <span className="block text-2xl sm:text-4xl md:text-6xl font-normal text-gray-800">
            of
          </span>

          <span className="block text-3xl sm:text-5xl md:text-7xl font-light text-gray-900">
            Forex Trading
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. It has
          survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>

        {/* Button */}
        <div className="mt-6 sm:mt-10">
          <button className="bg-[#014421] hover:bg-[#01351a] text-white px-6 sm:px-10 py-3 rounded-lg shadow-md transition duration-300 text-sm sm:text-base w-full sm:w-auto">
            Trade Now
          </button>
        </div>

      </div>
    </div>
  );
}