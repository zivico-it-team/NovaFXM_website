import React, { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaStore,
  FaChartBar,
  FaLandmark,
  FaChartPie,
} from "react-icons/fa";
import {
  GiWheat,
  GiGoldBar,
  GiOilPump,
  GiCoffeeBeans,
  GiFarmer,
  GiGrain,
  GiCow,
} from "react-icons/gi";
import {
  MdAgriculture,
  MdShowChart,
} from "react-icons/md";
import {
  RiExchangeFundsLine,
  RiStockLine,
} from "react-icons/ri";
import {
  BiTrendingUp,
  BiWorld,
} from "react-icons/bi";
import {
  TbCurrencyDollar,
} from "react-icons/tb";
import { Gem } from "lucide-react";
import LiveMarketCards from "./LiveMarketCards";

const topCommodities = [
  { symbol: "XAUUSD", name: "Gold", description: "Gold Spot / U.S. Dollar", tradingViewSymbol: "OANDA:XAUUSD" },
  { symbol: "XAGUSD", name: "Silver", description: "Silver Spot / U.S. Dollar", tradingViewSymbol: "OANDA:XAGUSD" },
  { symbol: "WTI", name: "Crude Oil", description: "West Texas Intermediate", tradingViewSymbol: "TVC:USOIL" },
  { symbol: "BRENT", name: "Brent Crude Oil", description: "Brent Crude Oil", tradingViewSymbol: "TVC:UKOIL" },
  { symbol: "NG", name: "Natural Gas", description: "Natural Gas / U.S. Dollar", tradingViewSymbol: "OANDA:NATGASUSD" },
];

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case "left":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case "right":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getDirectionClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered Card Component
const StaggeredCard = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`h-full transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

export default function CommoditiesSection() {
  return (
    <div className="w-full max-w-none overflow-x-hidden bg-white">
      {/* Hero Section with Animations */}
      <section className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-black sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src="/Commodities.png.jpeg"
              alt="Commodities Hero"
              className="object-cover object-center w-full h-full market-hero-image"
            />
          </div>
        </div>
        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="market-hero-content relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] md:px-6 lg:min-h-[calc(100svh-84px)]">
          <h1 className="market-hero-title text-4xl font-bold text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">
            Commodities
          </h1>

          <p className="max-w-3xl px-2 mt-4 text-base leading-6 text-white market-hero-copy animate-[fadeInUp_1s_ease-out] sm:text-base md:mt-5 md:leading-7">
            Trade global commodities like gold, oil and silver with Novafxm.
            Diversify your portfolio and capture opportunities in fast-moving
            markets.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 pb-5 pt-8 mx-auto max-w-7xl sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left Image */}
            <ScrollReveal delay={0} threshold={0.3} direction="left">
              <div className="order-2 lg:order-1 about-image">
                <img
                  src="/Commodities1.png.jpeg"
                  alt="Commodities Trading"
                  className="h-[210px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 hover:scale-105 sm:h-[280px] lg:h-[330px]"
                />
              </div>
            </ScrollReveal>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <ScrollReveal delay={100} threshold={0.3} direction="up">
                <h2 className="leading-tight">
                  <span className="block text-base font-bold text-[#111827] sm:text-lg">
                    Trade the Building Blocks of the Economy
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                    From Oil to Gold with NOVAFXM
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200} threshold={0.3} direction="up">
                <p className="mt-4 text-center text-sm leading-7 text-gray-600 sm:text-left sm:text-base lg:leading-8">
                  Step into the dynamic world of commodities and discover lucrative
                  opportunities in Earth's most essential resources. Commodities are
                  the raw materials that fuel the global economy, including oil,
                  gold and agricultural products. By trading these vital goods, you
                  tap into the core of our economy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} threshold={0.3} direction="up">
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-4 lg:flex-nowrap">
                  {["Liquidity", "Transparency", "Leverage"].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base"
                    >
                      <span className="text-[#014421] text-xl">✔</span>
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="mx-auto max-w-7xl">
            <LiveMarketCards
              title="Commodities"
              subtitle="Live global commodities market data"
              items={topCommodities}
              Icon={Gem}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#f7f7f7] pb-12 sm:pb-20">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5 lg:px-6">
          {/* What are Commodities */}
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <div className="relative overflow-hidden rounded-2xl bg-[#014421] px-6 py-8 shadow-[0_18px_45px_rgba(1,68,33,0.22)] sm:rounded-3xl sm:px-9 sm:py-10 lg:px-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_38%)]" />
              <div className="relative z-10">
              <h2 className="text-2xl font-bold leading-tight text-[#F4C542] md:text-3xl">
                What are Commodities?
              </h2>
              <p className="mt-5 text-center text-sm leading-7 text-white sm:text-left sm:text-base sm:leading-8">
                Commodities are basic goods used in commerce and they can be
                classified into two main categories:
              </p>
              <div className="mt-4 space-y-4 sm:space-y-3">
                <div className="flex flex-wrap items-start text-sm leading-6 cursor-pointer gap-x-2 gap-y-2 group">
                  <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#F4C542] text-[#014421] shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125">
                    <GiGoldBar className="text-[10px]" />
                  </div>
                  <span className="text-sm font-semibold text-white sm:text-base">Hard Commodities</span>
                  <span className="font-bold text-white">:</span>
                  <span className="flex-1 text-center text-sm text-white/90 sm:text-left sm:text-base">
                    Natural resources like oil, gold and metals gas, which are extracted from the Earth.
                  </span>
                </div>
                <div className="flex flex-wrap items-start text-sm leading-6 cursor-pointer gap-x-2 gap-y-2 group">
                  <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#F4C542] text-[#014421] shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125">
                    <GiWheat className="text-[10px]" />
                  </div>
                  <span className="text-sm font-semibold text-white sm:text-base">Soft Commodities</span>
                  <span className="font-bold text-white">:</span>
                  <span className="flex-1 text-center text-sm text-white/90 sm:text-left sm:text-base">
                    Agricultural products or livestock, such as wheat, coffee and sugar.
                  </span>
                </div>
              </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Trade Commodities */}
          <div className="mt-8 sm:mt-12">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                Why Trade <span className="text-[#014421]">Commodities?</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 mt-7 sm:mt-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              <StaggeredCard index={0}>
                <div className="group relative h-full min-h-[245px] overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <FaChartPie className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Diversification</h3>
                    <p className="text-sm leading-6 text-gray-600">Adding commodities to your portfolio can provide exposure to different markets.</p>
                  </div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={1}>
                <div className="group relative h-full min-h-[245px] overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <FaShieldAlt className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Hedging</h3>
                    <p className="text-sm leading-6 text-gray-600">Commodities can act as a hedge against inflation and currency fluctuations.</p>
                  </div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={2}>
                <div className="group relative h-full min-h-[245px] overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <BiTrendingUp className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Market Dynamics</h3>
                    <p className="text-sm leading-6 text-gray-600">Commodity prices are highly responsive to supply and demand changes.</p>
                  </div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={3}>
                <div className="group relative h-full min-h-[245px] overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <FaGlobe className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Global Exposure</h3>
                    <p className="text-sm leading-6 text-gray-600">Access opportunities influenced by economic activity and demand across global markets.</p>
                  </div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={4}>
                <div className="group relative h-full min-h-[245px] overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <FaChartLine className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Trading Opportunities</h3>
                    <p className="text-sm leading-6 text-gray-600">Capture potential opportunities from changing prices in active commodity markets.</p>
                  </div>
                </div>
              </StaggeredCard>
            </div>
          </div>

          {/* How Are Commodities Traded */}
          <div className="mt-12 py-10 sm:mt-14 sm:py-14">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <div className="mx-auto max-w-6xl text-center">
                <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
                  How Are <span className="text-[#014421]">Commodities Traded?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-[#111827] sm:text-base sm:leading-8">
                  Commodities can be traded through spot markets for immediate
                  delivery, futures contracts that set a price for a future date,
                  and exchange-traded funds that provide broad commodity exposure
                  without requiring traders to purchase or store physical assets.
                </p>
              </div>
            </ScrollReveal>

            <div className="hidden">
  {[
    { icon: FaStore, title: "Spot Market", desc: "Immediate delivery of commodities, ideal for short-term trading." },
    { icon: RiExchangeFundsLine, title: "Futures Market", desc: "Contracts to buy or sell a commodity at a predetermined price on a future date—perfect for long-term strategies." },
    { icon: RiStockLine, title: "Exchange-Traded Funds (ETFs)", desc: "Invest in a variety of commodities without purchasing physical assets, offering broad exposure to commodity markets." }
  ].map((item, index) => (
    <StaggeredCard key={index} index={index}>
      <div className="group relative flex h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex-col items-center overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-4 sm:p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-6">
        <div className="relative z-10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14 md:h-16 md:w-16">
          <item.icon className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <h3 className="mb-2 text-base sm:text-lg font-bold leading-tight text-gray-800 md:text-xl">{item.title}</h3>
        <p className="flex-1 text-sm leading-6 text-gray-600">{item.desc}</p>
      </div>
    </StaggeredCard>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Commodity Prices */}
      <section className="w-full bg-[#e7f0eb] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-8 pl-4 sm:pl-8 lg:pl-10">
            <div className="text-left">
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:mb-8 sm:text-4xl">
                Factors Affecting{" "}
                <span className="text-[#014421]">Commodity Prices</span>
              </h2>
              <div className="h-1 w-20 rounded-full bg-[#014421]"></div>
            </div>

            <ScrollReveal delay={0} threshold={0.2} direction="left">
              <div className="relative flex justify-center overflow-hidden rounded-2xl">
                <div className="relative group">
                  <img
                    src="https://www.suttergoldmining.com/wp-content/uploads/2023/10/where-to-buy-gold-coins-and-bars.jpg"
                    alt="Gold bars representing commodity prices"
                    className="w-full max-w-[700px] rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#014421]/20 to-transparent"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: FaChartBar, title: "Supply and Demand", desc: "The balance between production and consumption heavily influences commodity prices." },
                { icon: FaLandmark, title: "Economic Indicators", desc: "Data like GDP growth, inflation and employment rates can indicate market direction and commodity values." },
                { icon: BiWorld, title: "Geopolitical Events", desc: "Political instability, natural disasters and trade policies can cause price volatility in the commodity markets." },
                { icon: MdShowChart, title: "Market Speculation", desc: "Expectations about future price movements often drive the short-term fluctuations of commodities." }
              ].map((item, index) => (
                <StaggeredCard key={index} index={index}>
                  <div className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 border-b-4 border-b-[#014421] bg-gradient-to-br from-white to-[#f5f7f2] px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[230px] sm:rounded-3xl sm:px-6 sm:py-6">
                    <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                        <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <h3 className="mt-4 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                        {item.title}
                      </h3>
                      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#014421]"></div>
                      <p className="relative z-10 mt-3 text-sm font-medium leading-6 text-slate-700 sm:leading-7">
                        {item.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-5 left-5 z-0 grid grid-cols-3 gap-2 opacity-50">
                      {Array.from({ length: 9 }).map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className="h-2 w-2 rounded-full bg-green-100"
                        />
                      ))}
                    </div>
                  </div>
                </StaggeredCard>
              ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .floating-image {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
          .floating-image {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
