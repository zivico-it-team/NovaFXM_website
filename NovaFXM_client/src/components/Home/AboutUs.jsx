import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="reveal-section relative bg-[#f5f6f7] px-4 py-6 sm:px-6 sm:py-8 md:py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
        {/* Image */}
        <div className="button-shine relative overflow-hidden rounded-xl md:order-2">
          <img
            src="/image1.png"
            alt="Laptop with code"
            className="h-52 w-full rounded-lg object-cover sm:h-72 md:h-[420px]"
          />
        </div>

        {/* Text */}
        <div className="mx-auto max-w-xl text-center md:order-1 md:mx-0 md:justify-self-start md:text-left">
          
          <h2 className="text-2xl font-medium text-gray-900 sm:text-4xl">
            Discover NOVAFXM
          </h2>

          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#014421] sm:mt-4 sm:w-16 md:mx-0"></div>

          <p className="mt-4 text-left text-2xl leading-relaxed text-gray-600 sm:mt-5 sm:text-lg md:text-justify">
            We are a technology-driven broker committed to providing exceptional trading conditions.
            Our platform bridges the gap between retail and institutional trading, offering unparalleled
            access to global financial markets.
          </p>
          <p className="mt-4 text-left text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-lg md:text-justify">
            Built by traders for traders, our mission is to empower your financial decisions with
            cutting-edge tools, transparent pricing and robust security.
          </p>

          <div className="mt-5 flex justify-center sm:mt-6 md:justify-start">
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
