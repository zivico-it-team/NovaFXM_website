import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaCheck,
  FaCreditCard,
  FaCrown,
  FaGem,
  FaMedal,
  FaShieldAlt,
  FaRegStar,
  FaSignal,
  FaUserAlt,
} from "react-icons/fa";

const accounts = [
  {
    title: "Startup Account",
    price: "$100",
    Icon: FaRegStar,
    features: [
      "Minimum Deposit $100",
      "Spreads from 1.5 pips",
      "No Commission",
      "Leverage up to 1:400",
      "Support 24/7",
    ],
  },
  {
    title: "Standard Account",
    price: "$200",
    Icon: FaMedal,
    features: [
      "Minimum Deposit $200",
      "Spreads from 1.3 pips",
      "No Commission",
      "Leverage up to 1:400",
      "Support 24/7",
    ],
  },
  {
    title: "Silver Account",
    price: "$1,000",
    Icon: FaShieldAlt,
    popular: true,
    features: [
      "Minimum Deposit $1000",
      "Spreads from 1 pips",
      "No Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
    title: "Gold Account",
    price: "$5,000",
    Icon: FaCrown,
    features: [
      "Minimum Deposit $5,000",
      "Spreads from 0.8 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
    title: "VIP Account",
    price: "$10,000",
    Icon: FaGem,
    features: [
      "Minimum Deposit $10,000",
      "Spreads from 0.6 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
      title: "RT Account",
    price: "$15,000",
    Icon: FaSignal,
    features: [
      "Minimum Deposit $15,000",
      "Spreads from 0.2 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
];

export default function AccountTypesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#0b1f16]">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-start justify-center overflow-hidden bg-black px-4 pb-16 pt-24 text-center sm:min-h-[calc(100vh-80px)] sm:items-center sm:px-6 sm:py-16 lg:min-h-[calc(100vh-84px)]">
        <div className="absolute inset-0">
          <img
            src="/accounttype.png"
            alt=""
            className="account-hero-image h-full w-full object-cover object-top brightness-110 sm:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)]" />

        <div className="relative z-10 w-full max-w-4xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37] sm:mb-6 sm:px-5">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
            Account Type
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            Find Your Perfect <br className="hidden sm:block" />
            <span className="text-[#D4AF37]">Trading Account</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
            Choose an account that fits your trading style and goals.
            <br className="hidden sm:block" />
            Flexible options for every level of trader.
          </p>

          <button
            className="button-shine mt-8 w-full max-w-[280px] rounded-full bg-[#014421] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 sm:w-auto sm:max-w-none sm:px-8"
            onClick={() => {
              document.getElementById("account-cards")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Choose Your Account Plan
          </button>
        </div>
      </section>

      {/* Accounts */}
      <section id="account-cards" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {accounts.map(({ Icon, ...account }, index) => (
            <div
              key={index}
              className={`account-plan-card reveal-up reveal-delay-${(index % 3) + 1} relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition sm:p-6`}
            >
              {account.popular && (
                <span className="account-popular-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-xs font-bold px-5 py-1 rounded-full">
                  POPULAR
                </span>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className="account-plan-icon flex h-9 w-9 items-center justify-center rounded-md bg-[#014421] text-sm text-white">
                  <Icon />
                </div>
                <h2 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">{account.title}</h2>
              </div>

              <h2 className="account-plan-price mb-5 text-2xl font-extrabold text-[#014421]">{account.price}</h2>

              <ul className="space-y-3 text-sm text-gray-700 mb-6">
  {account.features.map((feature) => (
    <li key={feature} className="flex items-start gap-2">
      
      {/* Simple Check Icon */}
      <FaCheck className="mt-1 h-3 w-3 shrink-0 text-[#014421]" />
      
      <span>{feature}</span>
    </li>
  ))}
</ul>

              <button
                type="button"
                onClick={() => navigate("/signup")}
                className={`button-shine w-full rounded-md border py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
                  account.popular
                    ? "border-[#014421] bg-[#014421] text-white hover:shadow-[#014421]/20"
                    : "border-[#014421] bg-white text-[#014421] hover:bg-[#014421] hover:text-white hover:shadow-[#014421]/20"
                }`}
              >
                Open Account
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
<section className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-5 sm:py-12">
  
  {/* Top Small Heading */}
  <div className="mb-4 flex items-center justify-center gap-3">
    <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
    <p className="text-sm font-semibold text-gray-700">
      How It’s Work
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
</section>
    </div>
  );
}
