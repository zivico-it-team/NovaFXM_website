import React from "react";
import heroBg from "../../assets/images/tech-analysis-1024x577 1.png";
import heroBg2 from "../../assets/images/image 106.png";
import TradingViewWidget from "../../pages/Market/TradingViewWidget";

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
    desc: "Elections, policy shifts and international tensions can all move market prices.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Corporate Announcements",
    desc: "Major company news, such as leadership changes, mergers and earnings reports, impacts the indices they are part of.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Economic Data",
    desc: "Employment reports, inflation and central bank policies shape investor sentiment and index performance.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Industry News",
    desc: "News affecting key sectors or industries (e.g. energy or tech) can influence the indices related to those sectors.",
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

      <section className="relative flex min-h-[calc(100vh-72px)] w-full items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100vh-80px)] sm:px-6 lg:min-h-[calc(100vh-84px)]">
        <img
          src={heroBg}
          alt="Indices Hero"
          className="market-hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="market-hero-content relative z-10 mx-auto max-w-5xl">
          <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Indices
          </h1>

          <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-200 sm:mt-6 md:text-lg md:leading-8">
            Unlock a Wide Range of Indices from the World's Leading
            Economies with AS Markets
          </p>
        </div>
      </section>

      {/* =========================================
          ABOUT SECTION
      ========================================= */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* IMAGE */}
          <div>
            <img
              src={heroBg2}
              alt="Indices"
              className="h-auto max-h-[420px] w-full rounded-2xl object-cover shadow-xl lg:max-h-[480px]"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="leading-tight">
              <span className="block text-base font-bold text-[#111827] sm:text-lg">
                Elevate Your Trading Experience with
              </span>

              <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                Key Global Indices at Zivico Solutions
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base lg:text-lg lg:leading-8">
              Stock market indices offer a powerful overview of market
              performance by tracking the collective value of selected
              stocks. These benchmarks provide deep insights into market
              trends, economic conditions and sector growth.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex items-center gap-3 text-base font-medium sm:text-lg">
                <span className="text-[#014421] text-xl">✔</span>
                Market Exposure
              </div>

              <div className="flex items-center gap-3 text-base font-medium sm:text-lg">
                <span className="text-[#014421] text-xl">✔</span>
                Simplicity
              </div>

              <div className="flex items-center gap-3 text-base font-medium sm:text-lg">
                <span className="text-[#014421] text-xl">✔</span>
                High Liquidity
              </div>

              <div className="flex items-center gap-3 text-base font-medium sm:text-lg">
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

      <section className="bg-[#f8faf9] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* TRADINGVIEW WIDGET CARD */}
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
          <div className="h-[360px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
            <TradingViewWidget />
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-12 text-center sm:mt-16">
          <button className="px-5 py-2 rounded-full border border-green-200 bg-green-50 text-green-700 text-sm font-medium">
            📈 Market Overview
          </button>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Popular <span className="text-[#014421]">Indices</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Track major market benchmarks and stay updated with key index
            performance.
          </p>
        </div>

        {/* INDEX CARDS */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {indices.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-lg lg:p-7"
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

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
            How Are Indices{" "}
            <span className="text-[#014421]">Calculated?</span>
          </h2>

          <p className="mt-4 text-sm text-gray-500 sm:text-base">
            Indices are calculated in two primary ways
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:mt-12 lg:grid-cols-2">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-[#f8faf9] shadow-sm"
            >
              <div className="h-2 bg-[#014421]"></div>

              <div className="flex items-start gap-4 p-6 sm:gap-5 lg:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#014421] text-white sm:h-16 sm:w-16">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#014421] sm:text-2xl">
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
        <div className="mx-auto mt-12 grid max-w-7xl items-center gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">

          {/* LEFT TEXT */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold leading-tight text-[#111827] lg:text-4xl">
              Benefits of{" "}
              <span className="text-[#014421]">Index Trading</span>
            </h2>

            <div className="mb-5 mt-6 h-1 w-16 rounded-full bg-[#014421]"></div>

            <p className="text-sm leading-7 text-gray-500 sm:text-base">
              Index trading offers several advantages for investors.
            </p>
          </div>

          {/* CARDS */}
          {middleCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-lg lg:p-8"
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

      <section className="bg-[#f6f7f6] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-3 lg:gap-12">

          {/* LEFT CARDS */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:gap-6">
            {factors.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg lg:p-8"
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
            <h2 className="text-3xl font-bold leading-tight text-[#111827] lg:text-4xl">
              What Moves an{" "}
              <span className="text-[#014421]">Index Price</span>
            </h2>

            <div className="mb-5 mt-6 h-1 w-20 rounded-full bg-[#014421]"></div>

            <p className="text-gray-500 text-sm leading-7">
              Several factors influence index prices including economic data,
              political events, corporate announcements and industry trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndicesPage;
