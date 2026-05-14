import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="reveal-section relative bg-[#f5f6f7] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
        {/* Left side - Image */}
        <div className="interactive-card relative overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
          <img
            src="/image1.png"
            alt="Laptop with code"
            className="h-64 w-full rounded-lg object-cover shadow-md transition duration-500 hover:scale-105 sm:h-80 md:h-[420px]"
          />
        </div>

        {/* Right side - Text */}
        <div className="mx-auto max-w-xl text-center md:mx-0 md:justify-self-end md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#014421] md:mx-0"></div>

          <p className="mt-7 text-base leading-relaxed text-justify text-gray-600 sm:text-lg">
            We are a technology-driven broker committed to providing exceptional trading conditions.
            Our platform bridges the gap between retail and institutional trading, offering unparalleled
            access to global financial markets.
          </p>
          <p className="mt-5 text-base leading-relaxed text-justify text-gray-600 sm:text-lg">
            Built by traders for traders, our mission is to empower your financial decisions with
            cutting-edge tools, transparent pricing, and robust security.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              to="/why-us"
              className="button-shine inline-flex  items-center justify-center rounded-full bg-[#014421] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg sm:text-base"
            >
              More About Us 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
