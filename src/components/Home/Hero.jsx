import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-gray-100 min-h-screen flex items-center justify-center px-4 overflow-hidden">

 {/* Background circles */}
      <div className="absolute w-[500px] h-[500px] bg-gray-200 rounded-full -left-40 top-20 opacity-50"></div>
      <div className="absolute w-[500px] h-[500px] bg-gray-200 rounded-full -right-40 top-20 opacity-50"></div>


      <div className="max-w-5xl text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-2 mb-10 shadow-sm">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=1"
              alt=""
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              alt=""
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              alt=""
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
          <span className="text-gray-600 text-sm font-medium">
            Trusted by 450K Users
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[56px] md:text-[64px] leading-[1.2] font-semibold">
          <span className="text-[#014421] font-bold">
            Unlock the Future
          </span>{" "}
          <span className="text-gray-800 font-normal">of</span>
          <br />
          <span className="text-gray-900 font-light">
            Forex Trading
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. It has
          survived not only five centuries, but also the leap into electronic
          typesetting
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-[#014421] hover:bg-[#01351a] text-white px-10 py-3 rounded-lg shadow-md transition duration-300">
            Trade Now
          </button>
        </div>

      </div>
    </div>
  );
}