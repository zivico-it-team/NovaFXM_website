import React from "react";
import heroBg from "../../assets/images/tech-analysis-1024x577 1.png";
import heroBg2 from "../../assets/images/image 106.png";
import TradingViewWidget from "./TradingViewWidget";

import {
  Star,
  BarChart3,
  ArrowUp,
  Clock3,
  Search,
  Landmark,
  TrendingUp,
  Briefcase,
} from "lucide-react";

/* =========================
   POPULAR INDICES
========================= */

const indices = [
  {
    title: "Wall Street (Dow Jones)",
    desc: "Tracks 30 prominent companies on the NYSE.",
  },
  {
    title: "S&P 500",
    desc: "A comprehensive benchmark for the US stock market.",
  },
  {
    title: "FTSE 100",
    desc: "Measures the top 100 companies by market cap in London.",
  },
  {
    title: "DAX (Germany 40)",
    desc: "Reflects the performance of Germany's 40 largest companies.",
  },
];

/* =========================
   INDEX CALCULATION CARDS
========================= */

const topCards = [
  {
    icon: <BarChart3 size={22} />,
    title: "Market Capitalization-Based Indices",
    desc: "Companies' market value influences the index more heavily, so larger firms dominate the movement (e.g., S&P 500, FTSE 100).",
  },
  {
    icon: <ArrowUp size={22} />,
    title: "Price-Weighted Indices",
    desc: "These depend on the stock price of the companies in the index, with higher-priced stocks having more impact (e.g., Dow Jones, Nikkei 225).",
  },
];

const middleCards = [
  {
    icon: <Clock3 size={28} />,
    title: "Diversification",
    desc: "Represents a broad market sector without the need to invest in individual stocks.",
    color: "green",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Lower Volatility",
    desc: "Since indices track multiple companies, they tend to be more stable than individual stocks.",
    color: "yellow",
  },
  {
    icon: <Search size={28} />,
    title: "Accessibility",
    desc: "Easier to analyze and trade due to their reflection of overall market performance.",
    color: "green",
  },
];

/* =========================
   MARKET FACTORS
========================= */

const factors = [
  {
    icon: <Landmark size={26} />,
    title: "Political Events",
    desc: "Elections, policy shifts, and international tensions can all move market prices.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Corporate Announcements",
    desc: "Major company news, such as leadership changes, mergers, and earnings reports, impacts the indices they are part of.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Economic Data",
    desc: "Employment reports, inflation, and central bank policies shape investor sentiment and index performance.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Industry News",
    desc: "News affecting key sectors or industries (e.g., energy or tech) can influence the indices related to those sectors.",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

const IndicesPage = () => {
  return (
    <div className="w-full bg-white overflow-hidden">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section
        className="relative w-full h-[450px] md:h-[550px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Indices
          </h1>

          <p className="mt-6 text-gray-200 max-w-3xl mx-auto text-sm md:text-lg leading-8">
            Unlock a Wide Range of Indices from the World's Leading
            Economies with AS Markets
          </p>
        </div>
      </section>

      {/* =========================================
          ABOUT SECTION
      ========================================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div>
            <img
              src={heroBg2}
              alt="Indices"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="leading-tight">
              <span className="block text-0.5xl md:text-1xl font-bold text-[#111827]">
                Elevate Your Trading Experience with
              </span>

              <span className="block text-1xl md:text-3xl font-semibold text-[#014421] mt-3">
                Key Global Indices at Zivico Solutions
              </span>
            </h2>

            <p className="text-gray-600 mt-8 leading-8 text-lg">
              Stock market indices offer a powerful overview of market
              performance by tracking the collective value of selected
              stocks. These benchmarks provide deep insights into market
              trends, economic conditions, and sector growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="flex items-center gap-3 text-lg font-medium">
                <span className="text-[#014421] text-xl">✔</span>
                Market Exposure
              </div>

              <div className="flex items-center gap-3 text-lg font-medium">
                <span className="text-[#014421] text-xl">✔</span>
                Simplicity
              </div>

              <div className="flex items-center gap-3 text-lg font-medium">
                <span className="text-[#014421] text-xl">✔</span>
                High Liquidity
              </div>

              <div className="flex items-center gap-3 text-lg font-medium">
                <span className="text-[#014421] text-xl">✔</span>
                Portfolio Diversification
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          MARKET OVERVIEW WITH TRADINGVIEW
      ========================================= */}

      <section className="bg-[#f8faf9] px-6 py-20">

        {/* TRADINGVIEW WIDGET CARD */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <div className="h-[500px] w-full">
            <TradingViewWidget />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mt-24">
          <button className="px-5 py-2 rounded-full border border-green-200 bg-green-50 text-green-700 text-sm font-medium">
            📈 Market Overview
          </button>

          <h2 className="text-5xl font-bold mt-6">
            Popular <span className="text-[#014421]">Indices</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-7">
            Track major market benchmarks and stay updated with key index
            performance.
          </p>
        </div>

        {/* INDEX CARDS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {indices.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition"
            >
              <div className="w-20 h-20 bg-[#014421] rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-white fill-white" size={34} />
              </div>

              <h3 className="font-semibold text-[#014421] text-xl leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-5 leading-7">
                {item.desc}
              </p>

              <div className="w-20 h-2 bg-[#014421] rounded-full mx-auto mt-8"></div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          HOW INDICES ARE CALCULATED
      ========================================= */}

      <section className="bg-white px-6 py-24">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#111827]">
            How Are Indices{" "}
            <span className="text-[#014421]">Calculated?</span>
          </h2>

          <p className="text-gray-500 mt-5">
            Indices are calculated in two primary ways
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mt-16">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f8faf9] rounded-3xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="h-2 bg-[#014421]"></div>

              <div className="p-8 flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-[#014421] text-white flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#014421]">
                    {card.title}
                  </h3>

                  <div className="w-14 h-1 bg-[#014421] rounded-full mt-4 mb-5"></div>

                  <p className="text-gray-600 leading-7 text-sm">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE SECTION */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 mt-24 items-center">

          {/* LEFT TEXT */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold leading-tight text-[#111827]">
              Benefits of{" "}
              <span className="text-[#014421]">Index Trading</span>
            </h2>

            <div className="w-16 h-1 bg-[#014421] rounded-full mt-8 mb-6"></div>

            <p className="text-gray-500">
              Index trading offers several advantages for investors.
            </p>
          </div>

          {/* CARDS */}
          {middleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center hover:shadow-lg transition"
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white ${
                  card.color === "yellow"
                    ? "bg-[#D4AF37]"
                    : "bg-[#014421]"
                }`}
              >
                {card.icon}
              </div>

              <h3
                className={`font-semibold text-xl mt-6 ${
                  card.color === "yellow"
                    ? "text-[#D4AF37]"
                    : "text-[#014421]"
                }`}
              >
                {card.title}
              </h3>

              <div
                className={`w-14 h-1 rounded-full mx-auto mt-4 mb-5 ${
                  card.color === "yellow"
                    ? "bg-[#D4AF37]"
                    : "bg-[#014421]"
                }`}
              ></div>

              <p className="text-gray-600 text-sm leading-7">
                {card.desc}
              </p>

              <div
                className={`w-20 h-2 rounded-full mx-auto mt-8 ${
                  card.color === "yellow"
                    ? "bg-[#D4AF37]"
                    : "bg-[#014421]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          WHAT MOVES INDEX PRICE
      ========================================= */}

      <section className="bg-[#f6f7f6] py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">

          {/* LEFT CARDS */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {factors.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#014421] text-white flex items-center justify-center mx-auto">
                  {item.icon}
                </div>

                <h3 className="text-[#014421] font-semibold text-xl mt-6 leading-snug">
                  {item.title}
                </h3>

                <div className="w-14 h-1 bg-[#014421] rounded-full mx-auto mt-4 mb-5"></div>

                <p className="text-gray-600 text-sm leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT TEXT */}
          <div className="lg:pl-10">
            <h2 className="text-4xl font-bold leading-tight text-[#111827]">
              What Moves an{" "}
              <span className="text-[#014421]">Index Price</span>
            </h2>

            <div className="w-20 h-1 bg-[#014421] rounded-full mt-8 mb-6"></div>

            <p className="text-gray-500 text-sm leading-7">
              Several factors influence index prices including economic data,
              political events, corporate announcements, and industry trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndicesPage;