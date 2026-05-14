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
    <section className="bg-gradient-to-b from-[#f5f9f6] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#014421] mb-4 animate-fadeUp">
          Choose Your Account
        </h2>

        <p className="text-gray-600 mb-12 text-sm sm:text-base max-w-2xl mx-auto animate-fadeUp delay-100">
          Tailored trading conditions to suit every trader's style and experience level.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                group relative flex flex-col justify-between
                rounded-3xl p-7 sm:p-8
                bg-[#fcfdfc] border border-[#dce9e1]
                shadow-md
                transition-all duration-500 ease-out

                hover:-translate-y-4 hover:scale-[1.03]
                hover:shadow-2xl hover:shadow-[#014421]/20

                animate-cardFade
                ${plan.highlight ? "ring-2 ring-[#D4AF37]" : ""}
              `}
              style={{
                animationDelay: `${index * 180}ms`,
              }}
            >

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-[#014421]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#014421] mb-5">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-7">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    {plan.deposit}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 text-left">
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
                  w-full py-4 rounded-xl
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
