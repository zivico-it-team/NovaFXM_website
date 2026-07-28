import React, { useEffect, useRef } from "react";
import heroBg from "../../assets/images/image 90.jpeg";
import cryptoBottom from "../../assets/images/crypto_bottom.webp";
import {
  Coins,
  ChartNoAxesCombined,
  BadgeCheck,
  Blocks,
  Newspaper,
  Check,
} from "lucide-react";
import { FaBitcoin, FaChartLine, FaLock } from "react-icons/fa";

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2, direction = "up" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = useRef(null);

  React.useEffect(() => {
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
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = useRef(null);

  React.useEffect(() => {
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
      className={`transition-all duration-700 ease-out ${
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

// ── Live TradingView Crypto Screener Widget ──────────────────────────────────
const CryptoLiveTable = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="mb-12 overflow-hidden bg-white shadow-lg rounded-2xl md:rounded-3xl md:mb-16">
        <div
          className="tradingview-widget-container"
          ref={containerRef}
          style={{ width: "100%", minHeight: 550 }}
        />
        <div className="px-4 py-2 text-xs text-right text-gray-400">
          <a
            href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Cryptocurrency Prices
          </a>{" "}
          by TradingView
        </div>
      </div>
    </ScrollReveal>
  );
};
// ────────────────────────────────────────────────────────────────────────────

const CryptocurrencyPage = () => {

  const factors = [
    {
      title: "Supply",
      description:
        "The total number of coins available and their release schedule.",
      icon: <Coins size={28} />,
    },
    {
      title: "Market Capitalization",
      description:
        "The total value of coins in circulation and market expectations for future movements.",
      icon: <ChartNoAxesCombined size={28} />,
    },
    {
      title: "Reputation",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <BadgeCheck size={28} />,
    },
    {
      title: "Utility",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <Blocks size={28} />,
    },
    {
      title: "Events & News",
      description:
        "Reflects the performance of the market and major global movements.",
      icon: <Newspaper size={28} />,
    },
  ];

  const promoFeatures = [
    {
      title: "No Asset Ownership",
      description:
        "Trade cryptocurrencies without owning them, requiring minimal capital to get started.",
      icon: <FaLock className="text-4xl text-blue-600" />,
    },
    {
      title: "High Volatility",
      description:
        "Leverage the volatility of the crypto market to potentially achieve significant gains, but be mindful of amplified risks.",
      icon: <FaChartLine className="text-4xl text-green-600" />,
    },
    {
      title: "Simple & Accessible",
      description:
        "Unlike stocks and commodities, Crypto CFDs are easier to trade, providing straightforward opportunities for both beginners and experienced traders.",
      icon: <FaBitcoin className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden px-3 py-16 sm:min-h-[calc(100svh-80px)] sm:px-5 lg:min-h-[calc(100svh-84px)] lg:px-6">
        {/* Animated Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={heroBg}
              alt="Cryptocurrency Hero"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60 animate-[fadeIn_1.5s_ease-out]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white market-hero-content">
          <h1 className="mb-4 text-4xl font-bold market-hero-title sm:text-5xl md:text-6xl animate-[fadeInUp_0.8s_ease-out]">
            Cryptocurrency
          </h1>
          <p className="mb-2 text-base market-hero-copy md:text-base animate-[fadeInUp_1s_ease-out]">
            Step into Crypto CFD Trading with NOVAFXM
          </p>
          {/* <p className="text-base text-gray-300 market-hero-copy md:text-sm animate-[fadeInUp_1.2s_ease-out]">
            Access the digital asset market with flexibility and confidence.
          </p> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pb-5 pt-8 mx-auto max-w-7xl sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        {/* About Crypto Section */}
        <div className="grid items-center gap-6 mb-12 md:mb-16 lg:grid-cols-[1fr_1.08fr] lg:gap-10">
  
        {/* IMAGE - Slide from Left */}
<ScrollReveal delay={0} threshold={0.3} direction="left">
  <div className="order-2 group overflow-hidden rounded-2xl lg:order-1">
    <img
      src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1470&auto=format&fit=crop"
      alt="crypto"
      className="h-[220px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 group-hover:scale-105 sm:h-[300px] lg:h-[360px]"
    />
  </div>
</ScrollReveal>
          {/* TEXT CONTENT */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={100} threshold={0.3} direction="up">
              <h2 className="leading-tight">
                <span className="block text-base font-bold text-[#111827] sm:text-lg">
                  Maximize Opportunities, Manage Risk
                </span>
                <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                  Trade Crypto CFDs with NOVAFXM
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200} threshold={0.3} direction="up">
              <p className="mt-4 text-sm text-center sm:text-left leading-7 text-gray-600 sm:text-base lg:leading-8">
                Gain exposure to leading cryptocurrencies like Bitcoin, Ethereum, Ripple and
                more through Contract for Difference (CFD) trading. 
                Trade with advanced market analysis tools, real-time price tracking and
                secure trading platforms designed for both beginners and experienced traders. 
                Access global crypto markets anytime, manage risks effectively and explore
                new investment opportunities with flexible leverage options and seamless
                portfolio management features.
              </p>
            </ScrollReveal>
            
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-4 lg:flex-nowrap">
              <ScrollReveal delay={300} threshold={0.3} direction="up">
                <div className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base">
                  <Check className="shrink-0 text-[#014421] transition-transform duration-300 group-hover:scale-110" size={20} strokeWidth={3} />
                  Potential Returns
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400} threshold={0.3} direction="up">
                <div className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base">
                  <Check className="shrink-0 text-[#014421] transition-transform duration-300 group-hover:scale-110" size={20} strokeWidth={3} />
                  Simplified Trading
                </div>
              </ScrollReveal>
             
              <ScrollReveal delay={500} threshold={0.3} direction="up">
                <div className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base">
                  <Check className="shrink-0 text-[#014421] transition-transform duration-300 group-hover:scale-110" size={20} strokeWidth={3} />
                  Portfolio Diversification
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Live Crypto Table */}
        <CryptoLiveTable />
      </div>

     {/* What are Crypto CFDs Section */}
<ScrollReveal delay={0} threshold={0.2} direction="up">
 <div className="mx-auto w-[calc(100%_-_2rem)] -mt-2 max-w-7xl rounded-2xl bg-[#014421] p-5 text-white shadow-lg transition-all duration-100 hover:shadow-xl sm:mt-0 sm:rounded-3xl sm:p-6 lg:p-7">
  <div className="text-left">
    <h2 className="mb-4 text-2xl font-bold leading-tight text-[#D4AF37] md:text-3xl">
      What are Crypto CFDs?
    </h2>
    <p className="mb-4 text-sm leading-7 text-gray-200 md:text-base">
      Cryptocurrencies, since Bitcoin's introduction in 2009, have
      redefined the financial landscape. These digital assets function on
      a decentralized online ledger secured by cryptography, making them
      one of the safest online payment methods.
    </p>
    <p className="text-sm leading-7 text-gray-200 md:text-base">
      While cryptocurrencies like Bitcoin have gained significant
      recognition globally, they operate outside the traditional banking
      system and remain unaffected by conventional economic factors.
    </p>
  </div>
</div>
</ScrollReveal>

      {/* What Affects the Price Section */}
<div className="px-3 py-12 mx-auto max-w-7xl sm:px-5 md:py-20 lg:px-6">

  {/* Heading */}
  <ScrollReveal delay={0} threshold={0.2} direction="up">
    <div className="mb-12 text-center md:mb-16">
      <h1 className="mb-4 text-2xl font-bold text-black md:text-4xl">
        What Affects the Price of{" "}
        <span className="text-[#014421]">Crypto CFDs?</span>
      </h1>
      <p className="max-w-6xl mx-auto text-sm leading-relaxed text-gray-600 md:text-base">
        Several key factors influence the price movements of Crypto CFDs.
        Understanding these elements helps traders make informed and
        strategic decisions in fast-moving markets.
      </p>
    </div>
  </ScrollReveal>

  {/* Cards Layout - All cards slide from LEFT */}
  <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5">
    {factors.map((factor, index) => (
      <div
        key={index}
        className="relative w-full overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md opacity-0 transition duration-300 hover:-translate-y-2 hover:shadow-xl md:border-b-[5px] animate-[slideInLeft_0.6s_ease-out_forwards]"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Icon */}
        <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
          {factor.icon}
        </div>
        {/* Title */}
        <h3 className="relative z-10 text-lg font-bold leading-snug text-gray-800">
          {factor.title}
        </h3>
        {/* Description */}
        <p className="relative z-10 mt-3 text-sm leading-6 text-gray-500">
          {factor.description}
        </p>
      </div>
    ))}
  </div>
</div>

<style jsx>{`
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
  
  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    .transition-all,
    [class*="animate-"] {
      animation: none !important;
      opacity: 1 !important;
      transition: none !important;
    }
  }
`}</style>

      {/* Why is Crypto CFD Trading So Popular Section */}
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className="px-3 py-10 text-center text-gray-800 bg-gradient-to-r from-white to-white sm:px-5 md:py-14 lg:px-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-4 text-2xl font-bold md:text-4xl">
              Why is Crypto CFD Trading So Popular?
            </h1>
            <p className="max-w-6xl mx-auto text-sm leading-7 md:text-base md:leading-8">
              The media frenzy surrounding Bitcoin and Ethereum has driven the rise
              in Crypto CFD trading. Cryptocurrencies do not rely on central banks
              or interest rates and their value is not subject to traditional
              economic drivers. Crypto CFDs can be traded against popular currencies
              such as the US Dollar, British Pound or Euro offering unique trading
              opportunities without the complexities of ownership.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Trade Crypto CFDs Section */}
      <div className="mx-auto max-w-7xl bg-gray-50 px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid items-center gap-6 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-8 pl-4 sm:pl-8 lg:pl-10">
            <div className="text-left">
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:mb-8 sm:text-4xl">
                Why Trade <span className="text-[#014421]">Crypto CFDs?</span>
              </h2>
              <div className="h-1 w-20 rounded-full bg-[#014421]"></div>
            </div>

            <ScrollReveal delay={0} threshold={0.2} direction="left">
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="min-h-[300px] w-full rounded-2xl bg-cover bg-center shadow-lg transition-all duration-500 hover:shadow-xl sm:min-h-[360px] lg:min-h-[400px]"
                  style={{ backgroundImage: `url(${cryptoBottom})` }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#014421]/20 to-transparent"></div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {promoFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 border-b-4 border-b-[#014421] bg-gradient-to-br from-white to-[#f5f7f2] px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[230px] sm:rounded-3xl sm:px-6 sm:py-6 ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                    {React.cloneElement(feature.icon, {
                      className: "h-7 w-7 text-[#014421]",
                    })}
                  </div>
                  <h3 className="mt-4 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                    {feature.title}
                  </h3>
                  <div className="mt-3 h-[3px] w-10 rounded-full bg-[#014421]"></div>
                  <p className="relative z-10 mt-3 text-sm font-medium leading-6 text-slate-700 sm:leading-7">
                    {feature.description}
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
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Keyframe Animations */
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
        
        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CryptocurrencyPage;
