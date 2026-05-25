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
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Lower Volatility",
    desc: "Since indices track multiple companies, they tend to be more stable than individual stocks.",
  },
  {
    icon: <Search size={28} />,
    title: "Accessibility",
    desc: "Easier to analyze and trade due to their reflection of overall market performance.",
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
    <div className="w-full overflow-hidden bg-white">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="relative flex min-h-[calc(100svh-72px)] w-full items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <img
          src={heroBg}
          alt="Indices Hero"
          className="absolute inset-0 object-cover object-center w-full h-full market-hero-image"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="market-hero-content relative z-10 mx-auto max-w-5xl">
          <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Indices
          </h1>

          <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-200 md:text-base md:leading-8">
            Unlock a Wide Range of Indices from the World's Leading
            Economies with NOVAFXM
          </p>
        </div>
      </section>

      {/* =========================================
          ABOUT SECTION
      ========================================= */}

      <section className="px-4 pb-5 pt-8 mx-auto max-w-7xl sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">

          {/* IMAGE */}
          <div>
            <img
              src={heroBg2}
              alt="Indices"
              className="h-[220px] w-full rounded-2xl object-cover shadow-xl sm:h-[300px] lg:h-[360px]"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="leading-tight">
              <span className="block text-base font-bold text-[#111827] sm:text-lg">
                Elevate Your Trading Experience with
              </span>

              <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                Key Global Indices at NOVAFXM
                
              </span>
            </h2>

            <p className="mt-4 text-sm  text-justify leading-7 text-gray-600 sm:text-base lg:leading-8">
              Stock market indices provide a clear snapshot of a market's performance by calculating the combined value of a selected group of stocks. These indices offer valuable insight into market trends and economic health, representing sectors or entire stock markets. Whether it’s the NASDAQ or a country’s top corporations like the S&P 500, indices help investors gauge the broader market dynamics.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium sm:text-base lg:text-lg">
                <span className="text-[#014421] text-xl">✔</span>
                Market Exposure
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium sm:text-base lg:text-lg">
                <span className="text-[#014421] text-xl">✔</span>
                Simplicity
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium sm:text-base lg:text-lg">
                <span className="text-[#014421] text-xl">✔</span>
                High Liquidity
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          MARKET OVERVIEW WITH TRADINGVIEW
      ========================================= */}

      <section className="bg-[#f8faf9] px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-7">
        {/* TRADINGVIEW WIDGET CARD */}
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
          <div className="h-[300px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
            <TradingViewWidget />
          </div>
        </div>

        {/* WHAT ARE INDICES */}
        <div className="mx-auto mt-8 max-w-7xl rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-sm sm:mt-10 sm:px-8 sm:py-8 lg:px-12">
          <div className="max-w-5xl border-l-4 border-[#014421] pl-5 sm:pl-7">
            <h2 className="text-2xl font-bold leading-tight text-[#014421] sm:text-3xl">
              What Are Indices?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
              Indices track the performance of a collection of stocks, helping
              investors assess the strength and overall health of a market
              segment. Instead of focusing on a single company's performance,
              indices like the NASDAQ, S&amp;P 500, FTSE 100, and Nikkei 225
              offer a broader perspective.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              These indices can be country-specific or sector-focused, making
              it easier for investors to diversify their portfolios.
            </p>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-10 text-center sm:mt-12">

          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Popular <span className="text-[#014421]">Indices</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Track major market benchmarks and stay updated with key index
            performance.
          </p>
        </div>

        {/* INDEX CARDS */}
        <div className="grid grid-cols-1 gap-4 mx-auto mt-6 max-w-6xl sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {indices.map((item, index) => (
            <div
              key={index}
              className={`account-plan-card crypto-green-border reveal-up reveal-delay-${(index % 3) + 1} relative w-full overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition duration-300 md:border-b-[5px] lg:p-5`}
            >
              <div className="account-plan-icon relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] sm:h-16 sm:w-16">
                <Star className="fill-[#014421] text-[#014421]" size={28} />
              </div>

              <h3 className="relative z-10 text-lg font-bold leading-snug text-gray-800">
                {item.title}
              </h3>

              <p className="relative z-10 mt-3 text-sm leading-6 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          HOW INDICES ARE CALCULATED
      ========================================= */}

      <section className="px-4 py-8 bg-white sm:px-6 sm:py-10 lg:py-12">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
            How Are Indices{" "}
            <span className="text-[#014421]">Calculated?</span>
          </h2>

          <p className="mt-4 text-sm text-gray-500 sm:text-base">
            Indices are calculated in two primary ways
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid max-w-6xl gap-5 mx-auto mt-8 lg:mt-10 lg:grid-cols-2">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border-b-[4px] border-[#014421] bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-3xl md:border-b-[6px]"
            >
              <div className="flex items-start gap-4 p-5 sm:gap-5 sm:p-6 lg:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] sm:h-16 sm:w-16">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE SECTION */}
        <div className="grid items-center gap-5 mx-auto mt-10 max-w-7xl sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">

          {/* LEFT TEXT */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
              Benefits of{" "}
              <span className="text-[#014421]">Index Trading</span>
            </h2>

            <div className="mb-4 mt-5 h-1 w-16 rounded-full bg-[#014421]"></div>

            <p className="text-sm leading-7 text-gray-500 sm:text-base">
              Index trading offers several advantages for investors.
            </p>
          </div>

          {/* CARDS */}
          {middleCards.map((card, index) => (
            <div
              key={index}
              className={`account-plan-card crypto-green-border reveal-up reveal-delay-${(index % 3) + 1} relative overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-6 text-center shadow-md transition duration-300 md:rounded-3xl md:border-b-[6px] lg:p-8`}
            >
              <div className="account-plan-icon relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421]">
                {card.icon}
              </div>

              <h3 className="relative z-10 mt-6 text-xl font-bold text-gray-800">
                {card.title}
              </h3>

              <p className="relative z-10 text-sm leading-7 text-gray-600">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          WHAT MOVES INDEX PRICE
      ========================================= */}

      <section className="bg-[#f6f7f6] px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        <div className="grid items-center gap-8 mx-auto max-w-7xl lg:grid-cols-3 lg:gap-10">

          {/* LEFT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:gap-5">
            {factors.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-3xl lg:p-8"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT TEXT */}
          <div className="lg:pl-10">
            <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
              What Moves an{" "}
              <span className="text-[#014421]">Index Price</span>
            </h2>

            <div className="mb-4 mt-5 h-1 w-20 rounded-full bg-[#014421]"></div>

            <p className="text-sm leading-7 text-gray-500">
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
