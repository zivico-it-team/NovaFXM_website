import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCreditCard, FaUserAlt } from "react-icons/fa";

const steps = [
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
];

export default function Account() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#f5f6f7] px-4 py-10 text-center sm:px-5 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Small Heading */}
        <div
          className={`mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
          <p className="text-sm font-semibold text-gray-700">How It Works</p>
          <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
        </div>

        {/* Main Heading */}
        <h2
          className={`mb-10 text-2xl font-bold leading-tight text-gray-900 transition-all duration-700 delay-100 sm:text-3xl md:mb-14 md:text-4xl ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Trading Made Simple with{" "}
          <span className="text-[#014421]">NOVAFXM</span>
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
          {/* Animated Progress Line - Desktop Only */}
          <div className="absolute left-[18%] right-[18%] top-1/2 hidden h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-[#014421]/15 md:block">
            <span
              className="step-line-progress block h-full rounded-full bg-[#D4AF37] transition-all duration-500 ease-out"
              style={{
                width: "33.333%",
                transform: `translateX(${activeStep !== null ? activeStep * 100 : -100}%)`,
                opacity: activeStep !== null ? 1 : 0,
              }}
            ></span>
          </div>

          {steps.map(({ Icon, ...step }, index) => (
            <div
              key={step.number}
              className={`relative flex justify-center transition-all duration-700 delay-${
                index * 150
              } ${
                hasAnimated
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <button
                type="button"
                onClick={() => setActiveStep(index)}
                className={`process-card relative z-10 flex min-h-[280px] w-full max-w-[360px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border bg-white px-8 py-12 text-center shadow-[0_18px_42px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-4 md:min-h-[300px] ${
                  activeStep === index
                    ? "border-[#D4AF37] shadow-[0_28px_48px_rgba(212,175,55,0.2)]"
                    : "border-[#014421]/15 hover:border-[#014421]/40 hover:shadow-[0_28px_60px_rgba(1,68,33,0.16)]"
                }`}
                aria-pressed={activeStep === index}
              >
                {/* Top Progress Bar */}
                <span
                  className={`absolute left-0 top-0 h-1.5 w-full origin-left rounded-t-2xl transition-all duration-300 ${
                    activeStep === index ? "scale-x-100 bg-[#D4AF37]" : "scale-x-0 bg-[#D4AF37]"
                  }`}
                ></span>

                {/* Click Ring Animation */}
                <span
                  className={`step-click-ring absolute inset-0 rounded-2xl border-2 border-[#D4AF37] transition-all duration-300 ${
                    activeStep === index ? "animate-ring-pulse opacity-100" : "opacity-0"
                  }`}
                ></span>

                {/* Corner Accent */}
                <span
                  className={`step-corner absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#014421]/8 transition-all duration-500 ${
                    activeStep === index ? "scale-150 opacity-100" : "scale-100 opacity-50"
                  }`}
                ></span>

                {/* Step Number Badge */}
                <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-md border border-[#014421]/15 bg-[#f5f7f2] text-xs font-bold text-[#014421] transition-all duration-300">
                  {step.number}
                </div>

                {/* Selected Badge */}
                {activeStep === index && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#D4AF37] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md animate-fade-in">
                    Selected
                  </div>
                )}

                {/* Icon Container */}
                <div
                  className={`process-icon mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-[#014421] text-2xl text-white shadow-sm transition-all duration-300 ${
                    activeStep === index ? "scale-110 bg-[#0d6b36]" : ""
                  }`}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-[#014421] transition-all duration-300 sm:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-center text-sm leading-relaxed text-gray-500 transition-all duration-300 sm:text-base">
                  {step.desc}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p
          className={`mx-auto mt-12 max-w-md text-justify text-sm leading-relaxed text-gray-700 transition-all duration-700 delay-500 sm:mt-14 sm:text-center sm:text-base ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Everything you need to trade Forex in one place.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className={`button-shine relative mt-5 w-full max-w-[220px] overflow-hidden rounded-full bg-[#014421] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#014421] hover:shadow-lg hover:shadow-[#014421]/20 active:translate-y-0 sm:w-auto ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Trade Now
        </button>
      </div>

      <style jsx>{`
        /* Ring Pulse Animation for Selected Card */
        @keyframes ringPulse {
          0% {
            opacity: 0.6;
            transform: scale(0.98);
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4);
          }
          70% {
            opacity: 0;
            transform: scale(1.04);
            box-shadow: 0 0 0 12px rgba(212, 175, 55, 0);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .animate-ring-pulse {
          animation: ringPulse 1.8s ease-out infinite;
        }

        /* Fade In Animation for Selected Badge */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        /* Button Shine Effect */
        .button-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .button-shine:hover::before {
          left: 100%;
        }

        /* Hover Scale for Icon */
        .process-card:hover .process-icon {
          transform: scale(1.05);
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .animate-ring-pulse,
          .animate-fade-in,
          .button-shine::before {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}