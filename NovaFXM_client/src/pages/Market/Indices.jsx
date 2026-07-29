import React, { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/images/tech-analysis-1024x577 1.png";
import heroBg2 from "../../assets/images/image 106.png";
import indexPriceImage from "../../assets/images/image.png";
import {
  Star,
  BarChart3,
  ArrowUp,
  Clock3,
  Search,
  Landmark,
  TrendingUp,
  Briefcase,
  LineChart,
} from "lucide-react";

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
  {
    title: "Nikkei 225",
    desc: "Tracks 225 leading companies listed on the Tokyo Stock Exchange.",
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

const liveIndices = [
  {
    symbol: "US500",
    name: "S&P 500",
    description: "S&P 500 Index / U.S. Dollar",
    tradingViewSymbol: "OANDA:SPX500USD",
  },
  {
    symbol: "NAS100",
    name: "NASDAQ-100",
    description: "NASDAQ 100 Index / U.S. Dollar",
    tradingViewSymbol: "OANDA:NAS100USD",
  },
  {
    symbol: "US30",
    name: "Dow Jones Industrial Average",
    description: "Dow Jones 30 Index / U.S. Dollar",
    tradingViewSymbol: "OANDA:US30USD",
  },
  {
    symbol: "GERMANY40",
    name: "DAX 40",
    description: "Germany 40 Index / Euro",
    tradingViewSymbol: "OANDA:DE30EUR",
  },
  {
    symbol: "JAPAN225",
    name: "Nikkei 225",
    description: "Japan 225 Index / Japanese Yen",
    tradingViewSymbol: "OANDA:JP225USD",
  },
];

const LiveIndexQuote = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    containerRef.current.innerHTML = "";
    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(widget);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [symbol]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container min-h-[78px] w-full overflow-hidden"
    />
  );
};

const IndicesMarketCards = () => (
  <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-black px-3 py-6 shadow-2xl sm:rounded-[32px] sm:px-6 sm:py-9 lg:px-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_30%),radial-gradient(circle_at_bottom,rgba(1,68,33,0.25),transparent_42%)]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

    <div className="relative z-10">
      <div className="mb-6 flex items-center gap-4 sm:mb-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] bg-black text-[#F4D35E] sm:h-16 sm:w-16">
          <BarChart3 size={27} strokeWidth={1.8} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-4xl">Indices</h2>
          <p className="mt-1 text-sm text-white/65 sm:text-base">
            Live global index market data
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {liveIndices.map((item) => (
          <article
            key={item.symbol}
            className="group relative min-h-[245px] overflow-hidden rounded-xl border border-[#D4AF37]/80 bg-[#050505] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#F4D35E] hover:shadow-[0_20px_45px_rgba(212,175,55,0.13)]"
          >
            <div className="absolute inset-0 bg-[url('/m2.png')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-black/30 to-black/80" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37] bg-black/75 text-[#F4D35E]">
                  <BarChart3 size={24} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 text-right">
                  <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                    {item.symbol}
                  </h3>
                  <p className="mt-1 text-xs text-white/65 sm:text-sm">{item.name}</p>
                </div>
              </div>

              <div className="min-h-[80px]">
                <LiveIndexQuote symbol={item.tradingViewSymbol} />
              </div>

              <div className="mt-auto flex items-end justify-between gap-3 pt-3">
                <p className="max-w-[75%] text-[10px] uppercase tracking-wide text-white/45 sm:text-xs">
                  {item.description}
                </p>
                <a
                  href={`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(item.tradingViewSymbol)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.name} chart`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D35E] text-black transition hover:scale-110"
                >
                  <LineChart size={16} strokeWidth={2} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

/* =========================
   MAIN COMPONENT
========================= */

const IndicesPage = () => {
  return (
    <div className="w-full max-w-none overflow-hidden bg-white">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="relative flex min-h-[calc(100svh-72px)] w-full items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
  
        {/* Animated Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{
              transformOrigin: 'center',
            }}
          >
            <img
              src={heroBg}
              alt="Indices Hero"
              className="market-hero-image h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Fade-in Overlays */}
        <div className="absolute inset-0 bg-black/70 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="market-hero-content relative z-10 mx-auto max-w-5xl">
          
          {/* Heading - Fade In Up with Staggered Animation */}
          <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Indices
            </span>
          </h1>

          {/* Divider Line - Animated */}
          <div className="animate-[fadeInUp_1s_ease-out]">
            <div className="mx-auto mt-4 flex w-24 items-center justify-center gap-1">
              <span className="h-[2px] flex-1 bg-[#D4AF37]" />
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="h-[2px] flex-1 bg-[#D4AF37]" />
            </div>
          </div>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-200 md:text-base md:leading-8">
              Unlock a Wide Range of Indices from the World's Leading
              Economies with NOVAFXM
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT SECTION WITH ANIMATIONS
      ========================================= */}

      <section className="px-4 pb-5 pt-8 mx-auto max-w-7xl sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">

          {/* IMAGE */}
          <ScrollReveal delay={0} threshold={0.3} direction="left">
            <div className="group overflow-hidden rounded-2xl">
              <img
                src={heroBg2}
                alt="Indices"
                className="h-[220px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 group-hover:scale-105 sm:h-[300px] lg:h-[360px]"
              />
            </div>
          </ScrollReveal>

          {/* TEXT */}
          <div>
            <ScrollReveal delay={100} threshold={0.3} direction="up">
              <h2 className="leading-tight">
                <span className="block text-base font-bold text-[#111827] sm:text-lg">
                  Elevate Your Trading Experience with
                </span>
                <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                  Key Global Indices at NOVAFXM
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200} threshold={0.3} direction="up">
              <p className="mt-4 text-sm text-center sm:text-left leading-7 text-gray-600 sm:text-base lg:leading-8">
                Stock market indices provide a clear snapshot of a market's performance by calculating the combined value of a selected group of stocks. These indices offer valuable insight into market trends and economic health, representing sectors or entire stock markets. Whether it's the NASDAQ or a country's top corporations like the S&P 500, indices help investors gauge the broader market dynamics.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} threshold={0.3} direction="up">
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#014421] text-xl">✔</span>
                  Market Exposure
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#014421] text-xl">✔</span>
                  Simplicity
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#014421] text-xl">✔</span>
                  High Liquidity
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          MARKET OVERVIEW WITH TRADINGVIEW
      ========================================= */}

      <section className="bg-[#f8faf9] px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-7">
        
        {/* LIVE INDICES MARKET CARDS */}
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="mx-auto max-w-7xl">
            <IndicesMarketCards />
          </div>
        </ScrollReveal>

        {/* WHAT ARE INDICES */}
        <ScrollReveal delay={100} threshold={0.2} direction="up">
          <div className="relative mx-auto mt-8 max-w-7xl overflow-hidden rounded-2xl bg-[#014421] px-6 py-8 shadow-[0_18px_45px_rgba(1,68,33,0.22)] sm:mt-10 sm:rounded-3xl sm:px-9 sm:py-10 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_38%)]" />
            <div className="relative z-10 max-w-6xl">
              <h2 className="text-2xl font-bold leading-tight text-[#F4C542] sm:text-3xl">
                What Are Indices?
              </h2>
              <p className="mt-5 text-sm leading-7 text-white sm:text-base sm:leading-8">
                Indices track the performance of a collection of stocks, helping
                investors assess the strength and overall health of a market
                segment. Instead of focusing on a single company's performance,
                indices like the NASDAQ, S&amp;P 500, FTSE 100, and Nikkei 225
                offer a broader perspective.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                These indices can be country-specific or sector-focused, making
                it easier for investors to diversify their portfolios.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* TITLE */}
        <ScrollReveal delay={200} threshold={0.2} direction="up">
          <div className="mt-10 text-center sm:mt-12">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Popular <span className="text-[#014421]">Indices</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Track major market benchmarks and stay updated with key index
              performance.
            </p>
          </div>
        </ScrollReveal>

        {/* INDEX CARDS - Staggered */}
        <div className="grid grid-cols-1 gap-4 mx-auto mt-6 max-w-7xl sm:grid-cols-2 lg:mt-8 lg:grid-cols-5 lg:gap-4">
          {indices.map((item, index) => (
            <StaggeredCard key={index} index={index}>
              <div className="relative flex min-h-[235px] h-full w-full flex-col items-center overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:border-b-[5px] lg:p-5">
                <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <Star className="fill-[#014421] text-[#014421]" size={28} />
                </div>
                <h3 className="relative z-10 text-lg font-bold leading-snug text-gray-800">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-gray-500">
                  {item.desc}
                </p>
              </div>
            </StaggeredCard>
          ))}
        </div>
      </section>

      

      {/* =========================================
    HOW INDICES ARE CALCULATED
========================================= */}

<section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
  <ScrollReveal delay={0} threshold={0.2} direction="up">
    <div className="mx-auto max-w-6xl text-center">
      <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
        How Are <span className="text-[#014421]">Indices Calculated?</span>
      </h2>
      <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-[#111827] sm:text-base sm:leading-8">
        Indices are calculated primarily through market capitalization-weighted
        and price-weighted methods. Market capitalization-based indices give
        larger companies more influence over index movements, while
        price-weighted indices give higher-priced stocks a greater impact,
        offering different perspectives on overall market performance.
      </p>
    </div>
  </ScrollReveal>
</section>

      {/* =========================================
  WHAT MOVES INDEX PRICE
========================================= */}

<section className="w-full bg-[#e7f0eb] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
  <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2 lg:gap-16">
    <div className="flex flex-col justify-center gap-8 pl-4 sm:pl-8 lg:pl-10">
      <div className="text-left">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:mb-8 sm:text-4xl">
          What Moves an{" "}
          <span className="text-[#014421]">Index Price</span>
        </h2>
        <div className="h-1 w-20 rounded-full bg-[#014421]"></div>
        <p className="mt-4 text-sm leading-7 text-gray-500">
          Several factors influence index prices including economic data,
          political events, corporate announcements and industry trends.
        </p>
      </div>

      <ScrollReveal delay={0} threshold={0.2} direction="left">
        <div className="relative flex justify-center overflow-hidden rounded-2xl">
          <div className="relative group">
            <img
              src={indexPriceImage}
              alt="Index Price Movement Chart"
              className="w-full max-w-[700px] rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#014421]/20 to-transparent"></div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {factors.map((item, index) => (
        <StaggeredCard key={index} index={index}>
          <div className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 border-b-4 border-b-[#014421] bg-gradient-to-br from-white to-[#f5f7f2] px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[230px] sm:rounded-3xl sm:px-6 sm:py-6">
            <div className="relative z-10 flex flex-1 flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                {item.icon}
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

export default IndicesPage;
