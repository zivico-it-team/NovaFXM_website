import React from "react";
import {
  ChartNoAxesCombined,
  Clock3,
  Landmark,
  Torus,
} from "lucide-react";
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

        <div className="absolute inset-0 bg-black/50"></div>

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
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:items-start md:gap-10 lg:py-16">
        
        <div className="pt-2 md:pt-0">
          
          <p className="text-sm font-medium text-[#D4AF37]">
            Ever Dreamed Of Investing In Your Favourite Companies?
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Start Stock Trading Today <br />
            <span className="text-[#014421]">with Markets</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base lg:leading-8 text-justify">
            Unlock the potential of stock trading by investing in some of the world’s
            leading companies and growing your portfolio with confidence. Stock markets
            provide opportunities for both long-term investment and short-term trading,
            allowing investors to respond to changing market trends in real time.
            Diversifying your investments across different industries can help manage
            risk while creating opportunities for steady financial growth. Please note
            that dividend payouts may affect stock prices as market adjustments occur
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
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        
        <div className="rounded-3xl border-b-4 border-[#D4AF37] bg-gradient-to-r from-[#f8f6f1] to-[#f1efe8] p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8 lg:p-10">
          
          <h3 className="text-xl font-bold text-[#014421] sm:text-2xl">
            What are Stocks?
          </h3>

          <div className="mt-4 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

          <p className="mt-5 text-sm leading-8 text-gray-700 sm:text-base lg:text-lg">
            A stock represents a unit of ownership in a company. By purchasing
            shares, you become a part-owner. If the company thrives, its stock
            price rises, offering you potential gains. If the company
            underperforms, the stock price may fall.
          </p>
        </div>
      </section>

      {/* ================= EXCHANGES ================= */}
      <section className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:py-12">
        
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Where Are{" "}
          <span className="text-[#014421]">
            Stocks Traded?
          </span>
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {[
            {
              name: "New York Stock Exchange",
              desc: "The largest exchange globally featuring leading companies.",
            },
            {
              name: "NASDAQ",
              desc: "Known for technology-focused companies such as Apple and Microsoft.",
            },
            {
              name: "London Stock Exchange",
              desc: "A major European exchange with global financial companies.",
            },
            {
              name: "Tokyo Stock Exchange",
              desc: "Asia's largest exchange, home to companies like Toyota and Sony.",
            },
          ].map((item, i) => (
            
            <div
              key={i}
              className="relative min-h-[220px] overflow-hidden rounded-3xl border-b-4 border-[#014421] bg-gradient-to-br from-white to-[#f5f7f2] px-5 py-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-6 sm:py-8"
            >
              
              <div className="flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#014421]">
                  {React.createElement(exchangeIcons[i], {
                    className: "h-7 w-7",
                    strokeWidth: 2.4,
                  })}
                </div>

                {/* Title */}
                <h4 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                  {item.name}
                </h4>

                {/* Line */}
                <div className="mt-4 h-[3px] w-10 rounded-full bg-[#014421]"></div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>

              {/* Dots */}
              <div className="absolute bottom-5 left-5 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className="h-2 w-2 rounded-full bg-green-100"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY TRADE ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-0">
        
        <div className="rounded-3xl bg-[#014421] p-6 text-white shadow-lg sm:p-8 lg:p-10">
          
          <h3 className="text-xl font-bold text-[#D4AF37] sm:text-2xl">
            Why Trade Stocks?
          </h3>

          <div className="mt-4 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

          <p className="mt-5 text-sm leading-8 sm:text-base lg:text-lg">
            Stock trading offers access to a broad range of companies across
            various sectors, allowing you to diversify your investment strategy
            and manage risk. With the right stock trading approach, you can
            maximize returns and build wealth over time.
          </p>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 pb-16 sm:px-6 lg:px-0">
        
        <div className="rounded-3xl border-b-4 border-[#D4AF37] bg-gradient-to-r from-[#f8f6f1] to-[#f1efe8] p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8 lg:p-10">
          
          <h3 className="text-xl font-bold text-[#014421] sm:text-2xl">
            How Does Stock Trading Work?
          </h3>

          <div className="mt-4 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

          <p className="mt-5 text-sm leading-8 text-gray-700 sm:text-base lg:text-lg">
            Stock trading involves buying and selling shares of companies on
            exchanges. You can also trade stocks CFDs (Contracts for Difference),
            which allow you to speculate on price movements with leverage. Many
            traders diversify their portfolios by investing in a variety of
            sectors, balancing risk across industries and companies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Stock;