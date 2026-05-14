import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaLock,
  FaShieldAlt,
  FaCheckCircle,
  FaCreditCard,
  FaUniversity,
  FaBitcoin,
} from "react-icons/fa";

export default function DepositWithdrawSection() {
  const navigate = useNavigate();

  const paymentMethods = [
    {
      title: "Credit/Debit Card",
      icon: <FaCreditCard className="text-white" />,
      image: "/Deposits3.png",
      currencies: "USD, EUR, GBP",
      type: "Card Payment",
      fees: "0%",
      time: "Instant",
    },
    {
      title: "Bank Transfer",
      icon: <FaUniversity className="text-white" />,
      image: "/Deposits4.png",
      currencies: "USD/YEN",
      type: "Local Bank Wire",
      fees: "0%",
      time: "24 - 72 hours",
    },
    {
      title: "Cryptocurrency",
      icon: <FaBitcoin className="text-white" />,
      image: "/Deposits5.png",
      currencies: "All Popular Crypto",
      type: "Wallet to wallet",
      fees: "0%",
      time: "Instant",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ea] overflow-hidden">
      
      {/* HERO SECTION */}
      <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-black px-4 py-14 text-center sm:min-h-[520px] sm:px-6 sm:py-16 md:min-h-[580px] lg:min-h-[640px]">
        <img
          src="/accounttype.png"
          alt=""
          className="account-hero-image absolute inset-0 h-full w-full object-cover object-center brightness-110"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)]"></div>

        {/* Wave */}
        

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <div>
            <span className="reveal-up mb-5 inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37] sm:mb-6 sm:px-5">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
              Deposits and Withdrawals
            </span>

            <h1 className="reveal-up reveal-delay-1 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
              Move Money on
              <br className="hidden sm:block" />
              <span className="text-[#D4AF37]">Your Terms</span>
            </h1>

            <p className="reveal-up reveal-delay-2 mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
              Deposit and withdraw funds quickly and securely with Novafxm.
              <br className="hidden sm:block" />
              Enjoy smooth transactions with trusted payment methods.
            </p>

            <button
              className="button-shine mt-8 w-full max-w-[260px] rounded-full bg-[#014421] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 sm:w-auto sm:max-w-none sm:px-8"
              onClick={() => {
                document.getElementById("payment-methods")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              View Payment Methods
            </button>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        
        {/* Heading */}
        <div className="reveal-up mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-[#0b1f16] sm:text-3xl md:text-4xl">
            Tailor Your
            <br />
            <span className="text-[#014421]">
              Earnings and Spendings
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base">
            With Novafxm, you're in control. Customize your trading strategy
            to maximize earnings and manage spending efficiently.
          </p>

          <p className="mt-2 text-sm italic text-[#D4AF37]">
            Your financial journey, your rules!
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* CARD 1 */}
          <div className="deposit-feature-card group reveal-up reveal-delay-1 relative overflow-hidden rounded-xl border border-gray-200 bg-white px-5 pb-6 pt-7 text-center shadow-sm sm:px-8 sm:pt-8">
            <div className="deposit-feature-icon mx-auto mb-5 flex h-9 w-9 items-center justify-center rounded-md bg-[#014421] text-sm text-white">
              <FaBolt className="text-white" />
            </div>

            <h3 className="text-sm font-bold leading-snug text-[#0b1f16] sm:text-base">
              Swift, Seamless, and
              <br />
              <span className="text-[#014421]">
                Zero-Fee Transactions
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-gray-700">
              Experience trading without limits—fast, flexible, and completely
              fee-free. With Novafxm, your money moves as quickly as your
              ideas.
            </p>

            <div className="mt-7 flex h-32 items-end justify-center overflow-hidden rounded-b-xl sm:mt-8 sm:h-36">
              <img
                src="/Deposits1.png.PNG"
                alt="Fast deposits and withdrawals illustration"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="deposit-feature-card group reveal-up reveal-delay-2 relative overflow-hidden rounded-xl border border-gray-200 bg-white px-5 pb-6 pt-7 text-center shadow-sm sm:px-8 sm:pt-8">
            <div className="deposit-feature-icon mx-auto mb-5 flex h-9 w-9 items-center justify-center rounded-md bg-[#014421] text-sm text-white">
              <FaLock className="text-white" />
            </div>

            <h3 className="text-sm font-bold leading-snug text-[#0b1f16] sm:text-base">
              Your Security,
              <br />
              <span className="text-[#014421]">
                Our Commitment
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-gray-700">
              At Novafxm, safeguarding your funds is our top priority. With
              advanced encryption and robust protection technologies, every
              transaction is secure.
            </p>

            <div className="mt-7 flex h-32 items-end justify-center overflow-hidden rounded-b-xl sm:mt-8 sm:h-36">
              <img
                src="/Deposits2.png.PNG"
                alt="Secure transactions illustration"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="reveal-up reveal-delay-3 mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm sm:rounded-full">
          <div className="flex items-center gap-2 text-[11px] font-medium text-gray-700 sm:text-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ffcf60]">
              <FaBolt className="text-[#ffb000]" />
            </span>
            Fast & Flexible
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-gray-700 sm:text-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ffcf60]">
              <FaCheckCircle className="text-[#ffb000]" />
            </span>
            Zero Fees
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-gray-700 sm:text-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ffcf60]">
              <FaShieldAlt className="text-[#ffb000]" />
            </span>
            Secure & Protected
          </div>
        </div>

        {/* PAYMENT METHODS SECTION */}
        <div id="payment-methods" className="mt-16 scroll-mt-24 sm:mt-20 lg:mt-24">
          
          {/* Title */}
          <div className="reveal-up mb-10 text-center sm:mb-14">
            <h1 className="text-[32px] font-extrabold leading-tight">
              <span className="text-black">Deposits</span>{" "}
              <span className="text-[#014421]">& Withdrawals</span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="w-14 h-[2px] bg-[#d6c49d]"></div>

              <div className="w-3 h-3 rounded-full bg-[#d6a400]"></div>

              <div className="w-14 h-[2px] bg-[#d6c49d]"></div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {paymentMethods.map((item, index) => (
              <div
                key={index}
                className={`account-plan-card reveal-up reveal-delay-${(index % 3) + 1} relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition sm:p-6`}
              >
                
                {/* Top */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="account-plan-icon flex h-9 w-9 items-center justify-center rounded-md bg-[#014421] text-sm text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-sm font-bold leading-snug text-[#0b1f16] sm:text-base">
                    {item.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="mb-6 flex justify-center sm:mb-7">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-36 object-contain transition duration-300 hover:scale-105 sm:h-32 sm:w-40"
                  />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  
                  <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3 text-xs sm:text-sm">
                    <span className="max-w-[52%] text-gray-500">
                      Supported Currencies
                    </span>

                    <span className="max-w-[48%] text-right font-semibold text-[#014421]">
                      {item.currencies}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3 text-xs sm:text-sm">
                    <span className="max-w-[52%] text-gray-500">Type</span>

                    <span className="max-w-[48%] text-right font-semibold text-[#014421]">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3 text-xs sm:text-sm">
                    <span className="max-w-[52%] text-gray-500">Fees</span>

                    <span className="max-w-[48%] text-right font-semibold text-[#014421]">
                      {item.fees}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                    <span className="max-w-[52%] text-gray-500">
                      Processing Time
                    </span>

                    <span className="max-w-[48%] text-right font-semibold text-[#014421]">
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="button-shine mt-7 w-full rounded-md border border-[#014421] bg-[#014421] py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-[#014421]/20 active:translate-y-0"
                >
                  Open Your Account
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
