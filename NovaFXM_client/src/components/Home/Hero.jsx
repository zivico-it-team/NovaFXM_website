import React from "react";
import { useNavigate } from "react-router-dom";

function LetterReveal({ text, delay = 0, step = 0.035, className = "" }) {
  return (
    <span className={`letter-reveal ${className}`} aria-hidden="true">
      {Array.from(text).map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="letter-reveal-char"
          style={{ "--letter-delay": `${delay + index * step}s` }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center justify-center overflow-hidden bg-gray-100 px-4 py-4 sm:min-h-[calc(100vh-72px)] sm:px-6 sm:py-8 lg:px-8"
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
        <div className="hero-trust-badge inline-flex items-center max-w-full gap-2 px-3 py-1.5 mb-5 bg-white border border-gray-200 rounded-full shadow-sm sm:mb-6 sm:gap-3 sm:px-6 sm:py-2">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=1"
              className="w-6 h-6 border-2 border-white rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              className="w-6 h-6 border-2 border-white rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              className="w-6 h-6 border-2 border-white rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
          </div>

          <span className="min-w-0 text-xs font-medium leading-none text-gray-600 sm:text-sm">
            Trusted by 450K Users
          </span>
        </div>

        {/* Heading */}
        <h1
          className="leading-[1.34] sm:leading-tight"
          aria-label="Your Gateway to Smarter Trading"
        >
          <span className="block text-[clamp(2rem,11vw,3.25rem)] font-bold text-[#014421] sm:text-5xl md:text-8xl">
            <LetterReveal text="Your Gateway " />
            <span className="font-light text-gray-900">
              <LetterReveal text="to" delay={0.46} />
            </span>
          </span>


          <span className="mt-3 block text-[clamp(2rem,10vw,3.1rem)] font-light text-gray-900 sm:mt-4 sm:text-5xl md:text-7xl">
            <LetterReveal text="Smarter Trading" delay={0.76} />
          </span>
        </h1>

        {/* Description */}

        <p
          className="mx-auto mt-3 hidden max-w-[19rem] text-sm leading-9 text-gray-500 sm:mt-4 sm:block sm:max-w-2xl sm:px-2 sm:text-base sm:leading-relaxed md:text-lg"
          aria-label="Explore global markets with expert guidance and cutting-edge tools at NOVAFXM."
        >
          <LetterReveal
            text="Explore global markets with expert guidance and cutting-edge tools at NOVAFXM."
            delay={3}
            step={0.018}
          />
        </p>
        <p
          className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-8 text-gray-500 sm:hidden"
          aria-label="Explore global markets with expert guidance and cutting-edge tools at NOVAFXM."
        >
          <LetterReveal
            text="Explore global markets with expert guidance and cutting-edge tools at NOVAFXM."
            delay={3}
            step={0.018}
          />
        </p>
        

        {/* Button */}
        <div className="hero-trade-cta mt-6 sm:mt-7">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine w-auto cursor-pointer rounded-lg bg-[#014421] px-5 py-2.5 text-xs text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#01351a] hover:shadow-xl sm:w-auto sm:max-w-none sm:px-10 sm:py-3 sm:text-base"
          >
            Trade Now
          </button>
        </div>

      </div>
    </section>
  );
}
