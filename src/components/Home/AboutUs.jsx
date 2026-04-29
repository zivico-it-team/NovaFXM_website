import React from "react";

export default function AboutUs() {
  return (
    <section className="relative bg-[#f5f6f7] py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left side - Image */}
        <div className="relative">
          <img
            src="/image1.png"
            alt="Laptop with code"
            className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 md:h-[400px]"
          />
        </div>

        {/* Right side - Text */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            We are a technology-driven broker committed to providing exceptional trading conditions. 
            Our platform bridges the gap between retail and institutional trading, offering unparalleled 
            access to global financial markets.
          </p>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Built by traders for traders, our mission is to empower your financial decisions with 
            cutting-edge tools, transparent pricing, and robust security.
          </p>
           <a
            href="#"
            className="inline-block text-[#014421] font-semibold hover:underline transition"
          >
            More About Us →
          </a>
        </div>
      </div>
    </section>
  );
}
