import React from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Standard",
    price: "$100",
    deposit: "min. deposit",
    features: [
      "Spreads from 1.2 pips",
      "Zero Commission",
      "Max Leverage 1:500",
      "24/5 Support",
    ],
    highlight: false,
  },
  {
    name: "Silver",
    price: "$1,000",
    deposit: "min. deposit",
    features: [
      "Spreads from 0.8 pips",
      "Zero Commission",
      "Max Leverage 1:500",
      "Dedicated Account Manager",
    ],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "RT VIP",
    price: "$15,000",
    deposit: "min. deposit",
    features: [
      "Spreads from 0.0 pips",
      "Low Commission",
      "Max Leverage 1:200",
      "Free VPS Hosting",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#f5f9f6] to-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl text-center">

        {/* Heading */}
        <h2 className="mb-3 text-2xl font-bold text-[#014421] animate-fadeUp sm:mb-4 sm:text-4xl md:text-5xl">
          Choose Your Account
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-600 animate-fadeUp delay-100 sm:mb-8 sm:text-base">
          Tailored trading conditions to suit every trader's style and experience level.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                group relative flex flex-col justify-between
                rounded-2xl p-4 sm:p-7 md:rounded-3xl md:p-8
                bg-[#fcfdfc] border border-[#dce9e1]
                shadow-md
                transition-all duration-500 ease-out

                hover:-translate-y-2 hover:scale-[1.02] md:hover:-translate-y-4 md:hover:scale-[1.03]
                hover:shadow-2xl hover:shadow-[#014421]/20

                animate-cardFade
                ${plan.highlight ? "ring-2 ring-[#D4AF37]" : ""}
              `}
              style={{
                animationDelay: `${index * 180}ms`,
              }}
            >

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[#014421]/5 opacity-0 group-hover:opacity-100 transition duration-500 md:rounded-3xl"></div>

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-3 py-1 text-[11px] font-semibold text-white shadow-lg animate-pulse sm:-top-4 sm:px-4 sm:py-1.5 sm:text-xs">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-[#014421] sm:mb-5 sm:text-2xl">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4 sm:mb-7">
                  <span className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    {plan.price}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    {plan.deposit}
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2.5 text-left sm:mb-10 sm:space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#014421]/10 text-[#014421] text-sm font-bold">
                        ✓
                      </div>
                      <span className="text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="
                  relative overflow-hidden
                  w-full rounded-xl py-3.5 sm:py-4
                  bg-[#014421] text-white
                  font-semibold text-sm sm:text-base
                  transition-all duration-300 ease-out

                  hover:scale-105 hover:shadow-xl hover:shadow-[#014421]/20
                  active:scale-95

                  before:absolute before:top-0 before:left-[-120%]
                  before:w-full before:h-full
                  before:bg-white/20
                  before:skew-x-12
                  hover:before:left-[120%]
                  before:transition-all before:duration-700
                "
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFade {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .animate-cardFade {
          opacity: 0;
          animation: cardFade 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
