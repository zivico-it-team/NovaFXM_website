import React from "react";
import { ChartNoAxesCombined, Clock3, Landmark, Torus } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";

const exchangeIcons = [Landmark, ChartNoAxesCombined, Clock3, Torus];

const Stock = () => {
  return (
    <div className="bg-[#f5f5f5] font-sans">

      {/* ================= FULL SCREEN HERO ================= */}
      <section className="relative flex min-h-[70svh] w-full items-center justify-center overflow-hidden bg-black px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <div className="absolute inset-0 hero-parallax">
          <img
            src="/Stock1.png"
            alt="Stock Hero"
            className="market-hero-image h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="market-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">

          <h1 className="market-hero-title text-4xl font-bold text-white drop-shadow-sm sm:text-5xl md:text-6xl">
            Stocks
          </h1>
          <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-white drop-shadow-sm sm:mt-6 md:text-base md:leading-8">
            Start Stock Trading Today with NOVAFXM
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:items-center md:gap-10 lg:py-16">
        <div>
          <p className="text-sm font-medium text-yellow-600">
            Ever Dreamed Of Investing In Your Favourite Companies?
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Start Stock Trading Today <br />
            <span className="text-green-700">with Markets</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base lg:leading-8">
            Unlock the potential of stock trading and build your portfolio by investing in the world's leading companies. Keep in mind, all dividends are subject to adjustment—when a company pays out dividends, the stock price will reflect a decrease to account for the payout.
          </p>
        </div>
        <img
          src="/Stock2.jpeg"
          alt="chart"
          className="h-[240px] w-full rounded-2xl object-cover shadow-lg sm:h-[340px] md:h-auto md:max-h-[420px] md:justify-self-end lg:max-h-[480px]"
        />
      </section>

      {/* ================= TRADINGVIEW MARKET OVERVIEW ================= */}
      <section className="bg-[#f8faf9] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
          <div className="h-[300px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
            <TradingViewWidget />
          </div>
        </div>
      </section>

      {/* ================= WHAT ARE STOCKS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-2xl border-b-4 border-yellow-600 bg-[#f0eee9] p-5 sm:p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-green-800 sm:text-xl">
            What are Stocks?
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            A stock represents a unit of ownership in a company. By purchasing shares, you become a part-owner. If the company thrives, its stock price rises, offering you potential gains. If the company underperforms, the stock price may fall.
          </p>
        </div>
      </section>

      {/* ================= EXCHANGES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
          Where Are <span className="text-green-700">Stocks Traded?</span>
        </h3>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
          {[
            {
              name: "New York Stock Exchange (NYSE)",
              desc: "The largest exchange globally featuring leading companies.",
            },
            {
              name: "NASDAQ",
              desc: "Known for technology-focused companies such as Apple, Microsoft, and more.",
            },
            {
              name: "London Stock Exchange (LSE)",
              desc: "A major exchange in Europe with companies like Shell and HSBC.",
            },
            {
              name: "Tokyo Stock Exchange (TSE)",
              desc: "Asia's largest exchange, home to companies like Toyota and Sony.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative min-h-[150px] overflow-hidden rounded-2xl border-b-4 border-green-700 bg-white px-5 py-6 shadow-sm sm:min-h-[165px] sm:px-8 sm:py-8"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-16 sm:w-16">
                  {React.createElement(exchangeIcons[i], {
                    className: "h-7 w-7",
                    strokeWidth: 2.4,
                  })}
                </div>
                <div className="pt-2">
                  <h4 className="text-sm font-bold leading-tight text-slate-950 sm:text-base">
                    {item.name}
                  </h4>
                  <div className="mt-4 h-[3px] w-10 rounded-full bg-green-700"></div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 grid grid-cols-3 gap-2 sm:bottom-7 sm:left-8">
                {Array.from({ length: 9 }).map((_, dotIndex) => (
                  <span key={dotIndex} className="h-2 w-2 rounded-full bg-green-100" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY TRADE ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-2xl bg-green-900 p-5 text-white sm:p-6 lg:p-8">
          <h3 className="font-semibold text-yellow-400 sm:text-lg">
            Why Trade Stocks?
          </h3>
          <p className="mt-3 text-sm leading-7 sm:text-base">
            Stock trading offers access to a broad range of companies across various sectors, allowing you to diversify your investment strategy and manage risk. With the right stock trading approach, you can maximize returns and build wealth over time.
          </p>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 pb-16 sm:px-6">
        <div className="rounded-2xl border-b-4 border-yellow-600 bg-[#f0eee9] p-5 sm:p-6 lg:p-8">
          <h3 className="font-semibold text-green-800 sm:text-lg">
            How Does Stock Trading Work?
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Stock trading involves buying and selling shares of companies on exchanges. You can also trade stocks CFDs (Contracts for Difference), which allow you to speculate on price movements with leverage. Many traders diversify their portfolios by investing in a variety of sectors, balancing risk across industries and companies.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Stock;
