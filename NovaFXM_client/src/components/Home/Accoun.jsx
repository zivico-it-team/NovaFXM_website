import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCreditCard, FaUserAlt } from "react-icons/fa";

export default function Account() {
  const navigate = useNavigate();

  return (
  <section className="w-full bg-white px-4 py-8 text-center sm:px-5 sm:py-12">
  <div className="mx-auto max-w-6xl">
  
  {/* Top Small Heading */}
  <div className="mb-4 flex items-center justify-center gap-3">
    <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
    <p className="text-sm font-semibold text-gray-700">
      How It Works
    </p>
    <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
  </div>

  {/* Main Heading */}
  <h2 className="mb-12 text-2xl font-bold text-gray-900 sm:text-3xl md:mb-14 md:text-4xl">
    Trading Made Simple with{" "}
    <span className="text-[#014421]">NOVAFXM</span>
  </h2>

  {/* Cards */}
  <div className="relative grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-10">
    {[
      {
        number: "01",
        title: "Choose Account",
        desc: "Choose the account that suits you best",
        Icon: FaUserAlt,
      },
      {
        number: "02",
        title: "Fund",
        desc: "Fund your account securely",
        Icon: FaCreditCard,
      },
      {
        number: "03",
        title: "Start Trading",
        desc: "Start trading and achieve your goals.",
        Icon: FaChartLine,
      },
    ].map(({ Icon, ...step }, index) => (
      <div key={index} className={`reveal-up reveal-delay-${index + 1} relative flex justify-center`}>
        
        {/* Connector Dots */}
        {index !== 2 && (
          <div className="hidden md:flex absolute top-16 -right-8 items-center gap-2 z-10">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </div>
        )}

        {/* Card */}
        <div className="process-card relative w-full max-w-[320px] rounded-2xl border border-[#014421]/20 border-b-[4px] border-b-[#014421] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-6">
          
          {/* Top Circle Icon */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            <div className="process-icon w-14 h-14 rounded-full bg-[#014421] text-white flex items-center justify-center text-xl shadow-lg shadow-[#014421]/20">
              <Icon />
            </div>
          </div>

          {/* Number Badge */}
          <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#014421] text-white text-xs font-bold flex items-center justify-center">
            {step.number}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-[#014421] mb-3">
            {step.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            {step.desc}
          </p>

        </div>
      </div>
    ))}
  </div>

  {/* Bottom Text */}
  <p className="mx-auto mt-12 max-w-md text-sm leading-relaxed text-gray-700 sm:mt-14 sm:text-base">
    Everything you need to trade Forex in one place.
  </p>

  {/* Button */}
  <button
    type="button"
    onClick={() => navigate("/login")}
    className="button-shine mt-5 w-full max-w-[220px] rounded-full bg-[#014421] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#014421] hover:shadow-lg hover:shadow-[#014421]/20 active:translate-y-0 sm:w-auto"
  >
    Trade Now
  </button>
  </div>
</section>
  );
}
