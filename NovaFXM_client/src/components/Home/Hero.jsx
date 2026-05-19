import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-96px)] scroll-mt-20 items-center justify-center overflow-hidden bg-gray-100 px-4 py-8 sm:min-h-[calc(100vh-72px)] sm:px-6 sm:py-14 lg:px-8"
    >

      {/* Background circles */}
      <div className="hero-circle hero-circle-left top-[44%] w-[180px] sm:top-1/2 sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="hero-circle hero-circle-right top-[44%] w-[180px] sm:top-1/2 sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[22rem] text-center sm:max-w-3xl md:max-w-5xl">

        {/* Badge */}
        <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm reveal-up sm:mb-8 sm:gap-3 sm:px-6">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=1"
              className="h-6 w-6 shrink-0 rounded-full border-2 border-white sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              className="h-6 w-6 shrink-0 rounded-full border-2 border-white sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              className="h-6 w-6 shrink-0 rounded-full border-2 border-white sm:h-8 sm:w-8"
              alt=""
            />
          </div>

          <span className="min-w-0 text-xs font-medium leading-none text-gray-600 sm:text-sm">
            Trusted by 450K Users
          </span>
        </div>

        {/* Heading */}
        <h1 className="leading-[1.08] reveal-up reveal-delay-1 sm:leading-tight">
          <span className="block text-[clamp(2rem,11vw,3.25rem)] font-bold text-[#014421] sm:text-5xl md:text-8xl">
            Your Gateway <span className="font-light text-gray-900">to</span>
          </span>

          <span className="mt-2 block text-[clamp(2rem,10vw,3.1rem)] font-light text-gray-900 sm:mt-6 sm:text-5xl md:text-7xl">
            Smarter Trading
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[19rem] text-sm leading-6 text-gray-500 reveal-up reveal-delay-2 sm:mt-5 sm:max-w-2xl sm:px-2 sm:text-base sm:leading-relaxed md:text-lg">
          Explore global markets with expert guidance and cutting-edge tools at NOVAFXM.
        </p>

        {/* Button */}
        <div className="mt-5 sm:mt-8">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine w-full max-w-[18rem] cursor-pointer rounded-lg bg-[#014421] px-6 py-3 text-sm text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#01351a] hover:shadow-xl sm:w-auto sm:max-w-none sm:px-10 sm:text-base"
          >
            Trade Now
          </button>
        </div>

      </div>
    </section>
  );
}
