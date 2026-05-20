import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function CommoditiesSection() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState({
    whyTrade: false,
    howTraded: false,
    factors: false,
    popular: false,
  });

  const sectionRefs = {
    whyTrade: useRef(null),
    howTraded: useRef(null),
    factors: useRef(null),
    popular: useRef(null),
  };

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return { observer, ref: ref.current };
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-black sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
        <div className="absolute inset-0 hero-parallax">
          <img
            src="/Commodities.png.jpeg"
            alt="Commodities Hero"
            className="market-hero-image h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="market-hero-content relative z-10 flex min-h-[70svh] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] md:px-6 lg:min-h-[calc(100svh-84px)]">
          <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Commodities
          </h1>

          <p className="market-hero-copy mt-4 max-w-3xl px-2 text-sm leading-6 text-white sm:text-base md:mt-5 md:leading-7">
            Trade global commodities like gold, oil and silver with Novafxm.
            Diversify your portfolio and capture opportunities in fast-moving
            markets.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f7f7f7] px-4 sm:px-5 py-8 sm:py-[34px] lg:py-[42px]">
        <div className="mx-auto max-w-[1160px] px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.03fr_1fr] items-center gap-8 lg:gap-[64px]">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 about-image animate-slide-right">
              <img
                src="/Commodities1.png.jpeg"
                alt="Commodities Trading"
                className="h-[240px] w-full max-w-[525px] rounded-[24px] object-cover transition-transform duration-500 hover:scale-105 sm:h-[330px] sm:rounded-[34px] lg:h-[400px]"
              />
            </div>

            {/* Right Content */}
            <div className="max-w-[575px] order-1 lg:order-2 animate-slide-left">
              <p className="text-sm sm:text-base font-medium leading-6 text-gray-600">
                Trade the Building Blocks of the Economy
              </p>

              <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight text-black">
                From Oil to Gold with
                <br />
                <span className="text-[#014421] relative inline-block">
                  Novafxm
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#014421] transition-all duration-700 group-hover:w-full"></span>
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base font-medium leading-relaxed sm:leading-[1.72] text-gray-600">
                Step into the dynamic world of commodities and discover lucrative
                opportunities in Earth's most essential resources. Commodities are
                the raw materials that fuel the global economy, including oil,
                gold and agricultural products. By trading these vital goods, you
                tap into the core of our economy.
              </p>

              {/* Features */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 sm:gap-x-[58px] gap-y-3 sm:gap-y-4">
                {["Liquidity", "Transparency", "Leverage"].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 feature-item animate-feature"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#014421] transition-all duration-300 hover:scale-125 hover:bg-[#0D7A43]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[9px] w-[9px] text-[#014421] transition-colors duration-300 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#014421]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#f7f7f7] pb-12 sm:pb-20">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5 lg:px-6">
          {/* What are Commodities */}
          <div className="bg-white px-5 sm:px-8 lg:px-12 py-6 sm:py-7 rounded-xl sm:rounded-none animate-fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
              What are{" "}
              <span className="text-[#014421]">Commodities?</span>
            </h2>

            <div className="mt-3 sm:mt-4 h-[2px] w-[75px] sm:w-[95px] bg-[#014421] animate-expand-width"></div>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base font-medium leading-6 text-gray-600 sm:pl-7">
              Commodities are basic goods used in commerce and they can be
              classified into two main categories:
            </p>

            <div className="mt-4 space-y-4 sm:space-y-3 sm:pl-7">
              {/* Hard Commodities */}
              <div className="flex flex-wrap items-start gap-x-2 gap-y-2 text-sm leading-6 group cursor-pointer">
                <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#014421] text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#014421]">
                  <GiGoldBar className="text-[10px]" />
                </div>
                <span className="font-semibold text-black text-sm sm:text-base transition-colors duration-300 group-hover:text-[#014421]">Hard Commodities</span>
                <span className="font-bold text-black">:</span>
                <span className="font-medium text-gray-600 text-sm sm:text-base flex-1">
                  Natural resources like oil, gold and metals gas, which are extracted from the Earth.
                </span>
              </div>

              {/* Soft Commodities */}
              <div className="flex flex-wrap items-start gap-x-2 gap-y-2 text-sm leading-6 group cursor-pointer">
                <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#014421] text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#0D7A43]">
                  <GiWheat className="text-[10px]" />
                </div>
                <span className="font-semibold text-black text-sm sm:text-base transition-colors duration-300 group-hover:text-[#014421]">Soft Commodities</span>
                <span className="font-bold text-black">:</span>
                <span className="font-medium text-gray-600 text-sm sm:text-base flex-1">
                  Agricultural products or livestock, such as wheat, coffee and sugar.
                </span>
              </div>
            </div>
          </div>

          {/* Why Trade Commodities */}
          <div ref={sectionRefs.whyTrade} className="mt-8 sm:mt-12">
            <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
              Why Trade <span className="text-[#014421]">Commodities?</span>
            </h2>

            <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-9 grid-cols-1 md:grid-cols-3">
              {/* Card 1 - Diversification */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 text-center shadow-md border-b-[4px] md:border-b-[6px] border-[#014421] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.whyTrade ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '0ms' }}>
                <div className="commodity-icon-animate mx-auto mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:mb-8 md:h-24 md:w-24">
                  <FaChartPie className="text-3xl md:text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 mb-3 md:mb-5">
                    Diversification
                  </h3>
                  <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Adding commodities to your portfolio can provide exposure to different markets.
                  </p>
                </div>
              </div>

              {/* Card 2 - Hedging */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 text-center shadow-md border-b-[4px] md:border-b-[6px] border-[#014421] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.whyTrade ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '150ms' }}>
                <div className="commodity-icon-animate mx-auto mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:mb-8 md:h-24 md:w-24">
                  <FaShieldAlt className="text-3xl md:text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 mb-3 md:mb-5">
                    Hedging
                  </h3>
                  <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Commodities can act as a hedge against inflation and currency fluctuations.
                  </p>
                </div>
              </div>

              {/* Card 3 - Market Dynamics */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 text-center shadow-md border-b-[4px] md:border-b-[6px] border-[#014421] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.whyTrade ? 'animate-slide-up' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                <div className="commodity-icon-animate mx-auto mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:mb-8 md:h-24 md:w-24">
                  <BiTrendingUp className="text-3xl md:text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 mb-3 md:mb-5">
                    Market Dynamics
                  </h3>
                  <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Commodity prices are highly responsive to supply and demand changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How Are Commodities Traded */}
          <div ref={sectionRefs.howTraded} className="mt-12 sm:mt-14">
            <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
              How Are <span className="text-[#014421]">Commodities Traded?</span>
            </h2>

            <div className="mt-8 sm:mt-11 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
              {/* Card 1 - Spot Market */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 text-center shadow-md border-b-[4px] md:border-b-[6px] border-[#014421] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.howTraded ? 'animate-scale-in' : 'opacity-0'}`} style={{ transitionDelay: '0ms' }}>
                <div className="flex h-full flex-col items-center">
                  <div className="commodity-icon-animate mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:mb-8 md:h-24 md:w-24">
                    <FaStore className="text-3xl md:text-4xl animate-bounce-slow" />
                  </div>
                  <div className="flex flex-1 flex-col justify-start">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 mb-3 md:mb-5">
                      Spot Market
                    </h3>
                    <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Immediate delivery of commodities, ideal for short-term trading.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Futures Market */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 text-center shadow-md border-b-[4px] md:border-b-[6px] border-[#014421] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.howTraded ? 'animate-scale-in' : 'opacity-0'}`} style={{ transitionDelay: '150ms' }}>
                <div className="flex h-full flex-col items-center">
                  <div className="commodity-icon-animate mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:mb-8 md:h-24 md:w-24">
                    <RiExchangeFundsLine className="text-3xl md:text-4xl animate-pulse-slow" />
                  </div>
                  <div className="flex flex-1 flex-col justify-start">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 mb-3 md:mb-5">
                      Futures Market
                    </h3>
                    <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Contracts to buy or sell a commodity at a predetermined price on a
                      future date—perfect for long-term strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - ETFs */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white p-6 md:p-10 text-center shadow-md border-b-[4px] md:border-b-[6px] border-[#014421] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.howTraded ? 'animate-scale-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                <div className="flex h-full flex-col items-center">
                  <div className="commodity-icon-animate mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:mb-8 md:h-24 md:w-24">
                    <RiStockLine className="text-3xl md:text-4xl animate-float" />
                  </div>
                  <div className="flex flex-1 flex-col justify-start">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 mb-3 md:mb-5 break-words">
                      Exchange-Traded Funds (ETFs)
                    </h3>
                    <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Invest in a variety of commodities without purchasing physical
                      assets, offering broad exposure to commodity markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Commodity Prices */}
      <section ref={sectionRefs.factors} className="bg-[#f7f7f7] px-4 sm:px-5 pb-16 sm:pb-20 pt-4">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] items-center gap-8 lg:gap-12">
            {/* LEFT SIDE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              {/* Card 1 - Supply and Demand */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white px-4 sm:px-5 py-6 sm:py-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.factors ? 'animate-zoom-in' : 'opacity-0'}`} style={{ transitionDelay: '0ms' }}>
                <div className="commodity-icon-animate mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110">
                  <FaChartBar className="h-6 w-6 sm:h-7 sm:w-7 text-[#014421]" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base md:text-lg font-bold text-gray-800">
                  Supply and Demand
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed sm:leading-[1.75] text-gray-600">
                  The balance between production and consumption heavily
                  influences commodity prices.
                </p>
              </div>

              {/* Card 2 - Economic Indicators */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white px-4 sm:px-5 py-6 sm:py-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.factors ? 'animate-zoom-in' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
                <div className="commodity-icon-animate mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110">
                  <FaLandmark className="h-6 w-6 sm:h-7 sm:w-7 text-[#014421]" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base md:text-lg font-bold text-gray-800">
                  Economic Indicators
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed sm:leading-[1.75] text-gray-600">
                  Data like GDP growth, inflation and employment rates can
                  indicate market direction and commodity values.
                </p>
              </div>

              {/* Card 3 - Geopolitical Events */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white px-4 sm:px-5 py-6 sm:py-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.factors ? 'animate-zoom-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                <div className="commodity-icon-animate mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110">
                  <BiWorld className="h-6 w-6 sm:h-7 sm:w-7 text-[#014421]" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base md:text-lg font-bold text-gray-800">
                  Geopolitical Events
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed sm:leading-[1.75] text-gray-600">
                  Political instability, natural disasters and trade policies
                  can cause price volatility in the commodity markets.
                </p>
              </div>

              {/* Card 4 - Market Speculation */}
              <div className={`commodity-card-animate group rounded-2xl md:rounded-3xl bg-white px-4 sm:px-5 py-6 sm:py-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible.factors ? 'animate-zoom-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                <div className="commodity-icon-animate mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110">
                  <MdShowChart className="h-6 w-6 sm:h-7 sm:w-7 text-[#014421]" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base md:text-lg font-bold text-gray-800">
                  Market Speculation
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed sm:leading-[1.75] text-gray-600">
                  Expectations about future price movements often drive the
                  short-term fluctuations of commodities.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center order-1 lg:order-2 animate-slide-right">
              <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                Factors Affecting
                <br />
                <span className="text-[#014421] relative inline-block">
                  Commodity Prices
                </span>
              </h2>

              <div className="mt-5 sm:mt-7 h-[2px] w-[70px] sm:w-[84px] rounded-full bg-[#014421]"></div>

              <div className="mt-6 sm:mt-9 overflow-hidden rounded-lg floating-image">
                <img
                  src="https://www.suttergoldmining.com/wp-content/uploads/2023/10/where-to-buy-gold-coins-and-bars.jpg"
                  alt="Gold bars representing commodity prices"
                  className="h-[180px] sm:h-[220px] lg:h-[238px] w-full max-w-[430px] object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Commodities Section */}
      <section ref={sectionRefs.popular} className="bg-[#f7f7f7] px-4 sm:px-5 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1160px]">
          <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
            Popular <span className="text-[#014421]">Commodities</span>
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="h-[2px] w-[70px] sm:w-[84px] rounded-full bg-[#014421]"></div>
          </div>

          <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Gold */}
            <div className={`commodity-card-animate group rounded-xl bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible.popular ? 'animate-scale-up' : 'opacity-0'}`} style={{ transitionDelay: '0ms' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#014421] to-[#0D7A43] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <GiGoldBar className="text-3xl" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-[#014421]">Gold</h3>
              <p className="mt-1 text-xs text-gray-500">Precious Metal</p>
            </div>

            {/* Silver */}
            <div className={`commodity-card-animate group rounded-xl bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible.popular ? 'animate-scale-up' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-500 to-gray-400 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" fill="none" />
                  <circle cx="12" cy="12" r="3" fill="white" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-gray-600">Silver</h3>
              <p className="mt-1 text-xs text-gray-500">Precious Metal</p>
            </div>

            {/* Oil */}
            <div className={`commodity-card-animate group rounded-xl bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible.popular ? 'animate-scale-up' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <GiOilPump className="text-3xl" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-gray-700">Crude Oil</h3>
              <p className="mt-1 text-xs text-gray-500">Energy</p>
            </div>

            {/* Wheat */}
            <div className={`commodity-card-animate group rounded-xl bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible.popular ? 'animate-scale-up' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                <GiWheat className="text-3xl" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-amber-600">Wheat</h3>
              <p className="mt-1 text-xs text-gray-500">Agriculture</p>
            </div>

            {/* Coffee */}
            <div className={`commodity-card-animate group rounded-xl bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible.popular ? 'animate-scale-up' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-800 to-amber-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <GiCoffeeBeans className="text-3xl" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-amber-800">Coffee</h3>
              <p className="mt-1 text-xs text-gray-500">Agriculture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Benefits Section */}
      <section className="bg-gradient-to-r from-[#014421] to-[#014421] px-4 sm:px-5 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 animate-pulse-slow"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="mx-auto max-w-[1160px] text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white animate-fade-down">
            Start Trading Commodities Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/90 animate-fade-up">
            Join Novafxm and access global commodity markets with competitive spreads,
            advanced trading tools and dedicated support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#014421] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 active:scale-95"
            >
              Open Account
            </button>
            
          </div>
        </div>
      </section>

      <style>{`
        @keyframes commodityCardIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes commodityIconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 75px;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .hero-parallax {
          transform: translateZ(0);
          will-change: transform;
        }

        .hero-image {
          animation: scaleUp 1.5s ease-out;
        }

        .hero-content {
          animation: fadeUp 0.8s ease-out;
        }

        .animate-fade-down {
          animation: fadeDown 0.8s ease-out forwards;
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideRight 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 0.5s ease-out forwards;
        }

        .animate-scale-up {
          animation: scaleUp 0.5s ease-out forwards;
        }

        .animate-expand-width {
          animation: expandWidth 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out infinite;
        }

        .commodity-card-animate {
          animation: commodityCardIn 700ms ease both;
          will-change: transform, opacity;
        }

        .commodity-card-animate:hover .commodity-icon-animate {
          animation: commodityIconPulse 850ms ease-in-out;
        }

        .floating-image {
          animation: float 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .commodity-card-animate,
          .commodity-card-animate:hover .commodity-icon-animate,
          .hero-image,
          .hero-content,
          .animate-fade-down,
          .animate-fade-up,
          .animate-slide-left,
          .animate-slide-right,
          .animate-slide-up,
          .animate-scale-in,
          .animate-zoom-in,
          .animate-scale-up,
          .animate-expand-width,
          .animate-bounce-slow,
          .animate-pulse-slow,
          .animate-float,
          .animate-float-delayed,
          .floating-image {
            animation: none;
          }
          
          .commodity-card-animate {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
