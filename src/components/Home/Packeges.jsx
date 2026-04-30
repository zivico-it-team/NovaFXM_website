import React from "react";

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
  return (
    <section className="reveal-section bg-gray-100 px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Choose Your Account
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base">
          Tailored trading conditions to suit every trader's style and experience level.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`interactive-card relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 shadow-md transition-all duration-300
              ${
                plan.highlight
                  ? "bg-[#014421] text-white md:scale-105 shadow-xl"
                  : "bg-[#f4f9f6] text-gray-800"
              }`}
            >

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold">
                    {plan.price}
                  </span>{" "}
                  <span className="text-xs sm:text-sm opacity-80">
                    {plan.deposit}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-8 text-left text-sm sm:text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      
                      {/* ✔ Icon */}
                      <span
                        className={`text-base sm:text-lg ${
                          plan.highlight
                            ? "text-blue-400"
                            : "text-[#014421]"
                        }`}
                      >
                        ✔
                      </span>

                      {/* Text */}
                      <span
                        className={`${
                          plan.highlight ? "text-gray-200" : ""
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className={`button-shine w-full py-3.5 sm:py-4 rounded-xl border text-sm sm:text-base transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-white text-[#D4AF37] font-semibold hover:bg-gray-200"
                    : "border-[#014421] text-[#014421] hover:bg-[#014421] hover:text-white"
                }`}
              >
                Get Started
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
