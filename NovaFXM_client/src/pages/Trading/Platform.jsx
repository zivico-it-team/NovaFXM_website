import React from "react";
import heroBg5 from "/platform.png";
import heroBg6 from "../../assets/images/Rectangle 90.png";
import {
  BarChart3,
  UserRound,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function TradingPage() {
  const cards = [
    {
      title: "Real-Time Market Insights & Analytics",
      icon: <BarChart3 size={22} />,
      color: "green",
      description:
        "At Novafxm we equip you with cutting-edge tools and data to make smart trading decisions with ease.",
      points: [
        "Real-time data updates",
        "Advanced charting solutions",
        "Comprehensive technical analysis tools",
      ],
    },

    {
      title: "Seamless and User-Friendly Interface",
      icon: <UserRound size={22} />,
      color: "gold",
      description:
        "Designed to enhance your trading journey, Novafxm provides an intuitive experience for both beginners and pros.",
      points: [
        "Customizable dashboard options",
        "Quick access to preferred tools",
        "Personalized alerts and notifications",
      ],
    },

    {
      title: "Swift and Reliable Execution",
      icon: <Zap size={22} />,
      color: "orange",
      description:
        "Experience unmatched speed and dependability in every trade with Novafxm.",
      points: [
        "Ultra-fast execution speeds",
        "Minimal delays or slippage",
        "Stability even during high-volume trading hours",
      ],
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-black px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <div className="absolute inset-0">
          <img
            src={heroBg5}
            alt="Trading Platform"
            className="h-full w-full object-cover object-center brightness-110"
          />
        </div>

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)]" />

        <div className="relative z-10 w-full max-w-4xl -translate-y-4 sm:translate-y-0">
          <span className="mb-2 inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37] sm:mb-6 sm:px-5">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
            Platform
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            Navigate Your <br className="hidden sm:block" />
            <span className="text-[#D4AF37]">Trading Success!</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
            Trade smarter with a fast, secure, and user-friendly platform.
            <br className="hidden sm:block" />
            Everything you need to navigate the markets with confidence.
          </p>

          <button
            className="button-shine mt-4 w-full max-w-[280px] rounded-full bg-[#014421] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 sm:mt-8 sm:w-auto sm:max-w-none sm:px-8"
            onClick={() => {
              document.getElementById("platform-overview")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Explore Platform
          </button>
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}

      <section
        id="platform-overview"
        className="px-6 py-12 bg-[#f8f8f8] md:px-8 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 items-center md:grid-cols-2 md:gap-12">
          {/* LEFT CONTENT */}

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              The Perfect Map
            </p>

            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-[#014421]">
              Navigate Your
              <br />
              <span className="text-[#014421]">
                Trading Success!
              </span>
            </h2>

            <div className="w-24 h-1 bg-[#014421] rounded-full mt-6 mb-8"></div>

            <p className="text-gray-600 leading-relaxed text-sm">
              <span className="font-bold text-black">NOVAFXM</span> is your
              gateway to mastering the financial markets. Whether you're an
              experienced trader or just starting your journey, our
              cutting-edge platform offers a smooth and intuitive trading
              experience designed to adapt to your unique needs.
            </p>

            {/* Features */}

            <div className="mt-12 space-y-6 text-sm ">
              {[
                "Real-Time Market Insights & Analytics",
                "Seamless and User-Friendly Interface",
                "Swift and Reliable Execution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white shadow-md rounded-full px-3 py-1 hover:shadow-xl transition duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-[#014421] text-lg">✓</span>
                  </div>

                  <p className="text-gray-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative flex min-h-[65svh] items-center justify-center md:min-h-0">
            <img
              src={heroBg6}
              alt="Trading"
              className="relative z-10 w-full max-w-[500px] md:w-[500px] md:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* ================= THIRD SECTION ================= */}

      <section className="w-full bg-[#efefe7] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Why NOVAFXM is Your Perfect Trading Partner?
            </h2>

            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-16 h-[2px] bg-[#014421]"></div>
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
              <div className="w-16 h-[2px] bg-[#D4AF37]"></div>
            </div>
          </div>

          {/* CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex h-full flex-col bg-white rounded-2xl border-b-4 border-[#014421] p-8 transition duration-300 hover:-translate-y-1"
              >
                {/* Header */}

                <div className="flex min-h-[72px] items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                      card.color === "green"
                        ? "border-[#014421] text-[#014421] bg-[#014421]/10"
                        : card.color === "gold"
                        ? "border-[#014421] border-[#014421] bg-[#D4AF37]/10"
                        : "border-[#014421] text-[#014421] bg-[#014421]/10"
                    }`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-sm font-bold text-[#1f1f1f] leading-snug sm:text-base">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}

                <p className="mb-3 min-h-[72px] text-gray-600 leading-relaxed text-sm">
                  {card.description}
                </p>

                {/* Bullet Points */}

                <div className="space-y-3">
                  {card.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className={`mt-1 ${
                          card.color === "green"
                            ? "text-[#014421]"
                            : card.color === "gold"
                            ? "border-[#014421]"
                            : "border-[#014421]"
                        }`}
                      />

                      <p className="text-gray-700   text-sm  ">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}

          <div className="text-center mt-14">
            <p className="text-xl md:text-2xl font-medium text-[#1f1f1f] leading-relaxed">
              NOVAFXM is where innovation meets precision helping you thrive in
              the{" "}
              <span className="text-[#D4AF37] font-semibold">
                fast-paced world of trading!
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
