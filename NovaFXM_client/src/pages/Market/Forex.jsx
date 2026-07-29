import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Gauge,
  Check,
  LineChart,
  MonitorSmartphone,
  WalletCards,
} from "lucide-react";
import forexAboutImage from "../../assets/images/stock2.avif";
import LiveMarketCards from "./LiveMarketCards";

const topForexPairs = [
  { symbol: "EURUSD", name: "EUR/USD", description: "Euro / U.S. Dollar", tradingViewSymbol: "OANDA:EURUSD" },
  { symbol: "GBPUSD", name: "GBP/USD", description: "British Pound / U.S. Dollar", tradingViewSymbol: "OANDA:GBPUSD" },
  { symbol: "USDJPY", name: "USD/JPY", description: "U.S. Dollar / Japanese Yen", tradingViewSymbol: "OANDA:USDJPY" },
  { symbol: "USDCHF", name: "USD/CHF", description: "U.S. Dollar / Swiss Franc", tradingViewSymbol: "OANDA:USDCHF" },
  { symbol: "AUDUSD", name: "AUD/USD", description: "Australian Dollar / U.S. Dollar", tradingViewSymbol: "OANDA:AUDUSD" },
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

const tradingViewCurrencies = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"];

const cardAnimation =
  "transition duration-300 sm:hover:-translate-y-2 sm:hover:shadow-xl";

const features = [
  {
    title: "Low Spreads & Competitive Pricing",
    desc: "Get access to tight spreads and real-time market execution.",
    icon: BarChart3,
  },
  {
    title: "Fast & Reliable Trading",
    desc: "Lightning-fast trade execution with minimal slippage.",
    icon: Gauge,
  },
  {
    title: "Leverage Options",
    desc: "Flexible leverage to maximize your trading potential.",
    icon: LineChart,
  },
  {
    title: "Multiple Trading Platforms",
    desc: "Trade via desktop, mobile and web-based applications.",
    icon: MonitorSmartphone,
  },
  {
    title: "Educational Resources",
    desc: "Enhance your Forex knowledge with webinars and expert analysis.",
    icon: BookOpenCheck,
  },
];

const fundingMethods = [
  {
    name: "Credit/Debit Cards",
    desc: "Fast deposits with secure card processing.",
    icon: CreditCard,
  },
  {
    name: "Bank Transfers",
    desc: "Reliable transfers for larger account funding.",
    icon: Building2,
  },
  {
    name: "Cryptocurrency Payments",
    desc: "Borderless payments with quick confirmation.",
    icon: CircleDollarSign,
  },
  {
    name: "E-wallets",
    desc: "Convenient deposits and withdrawals.",
    icon: WalletCards,
  },
];

const marketOfferings = [
  ["Major Currency Pairs", "Trade EUR/USD, GBP/USD, USD/JPY  and more with tight spreads."],
  ["Minor Currency Pairs", "Access pairs like EUR/AUD, GBP/NZD  and CAD/CHF."],
  ["Exotic Currency Pairs", "Explore high-volatility pairs such as USD/ZAR, EUR/TRY and more."],
  ["Forex CFDs", "Trade Forex without owning the underlying asset."],
  ["Scalping & Hedging Allowed", "Use advanced strategies with no restrictions."],
];

const tools = [
  ["Economic Calendar", "Stay updated on key financial events affecting currency markets."],
  ["Live Forex Market News", "Real-time updates to help you make informed trading decisions."],
  ["Advanced Charting Tools", "Technical indicators and trend analysis for smart trading."],
  ["Forex Signals", "Receive expert trading signals to enhance your strategies."],
].map(([title, desc]) => ({ title, desc }));

const compliancePoints = [
  "Strict AML monitoring",
  "Robust KYC verification",
  "Secure trading environment",
];

function SectionTitle({ children, accent = false }) {
  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="mb-7 px-2 text-center sm:mb-12 lg:mb-14">
        <h2 className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${accent ? "text-[#014421]" : "text-[#1f1f1f]"}`}>
          {children}
        </h2>
        {!accent && <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#014421] sm:mt-6 sm:w-24" />}
      </div>
    </ScrollReveal>
  );
}

// ── TradingView Forex Cross Rates Widget — height increased ──────────────────
function ForexRatesWidget() {
  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <LiveMarketCards
          title="Forex"
          subtitle="Live currency pair market data"
          items={topForexPairs}
          Icon={CircleDollarSign}
        />
      </section>
    </ScrollReveal>
  );
}
// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-black sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
      {/* Animated Background with Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
          style={{ transformOrigin: 'center' }}
        >
          <img
            src="/Forex 1.jpeg"
            alt="Forex Hero"
            className="h-full w-full object-cover object-center market-hero-image"
          />
        </div>
      </div>
      {/* Fade-in Overlay */}
      <div className="absolute inset-0 bg-black/65 animate-[fadeIn_1.5s_ease-out] sm:bg-black/70" />
      
      <div className="market-hero-content relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <h1 className="market-hero-title text-4xl font-bold leading-tight text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">Forex</h1>
        <p className="market-hero-copy mt-4 max-w-2xl text-base leading-6 text-gray-200 animate-[fadeInUp_1s_ease-out] sm:text-base sm:leading-7">
          Trade the world's most liquid market with NOVAFXM.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14">
        <ScrollReveal delay={0} threshold={0.3} direction="left">
          <img
            src={forexAboutImage}
            alt="forex"
            className="h-[210px] w-full rounded-xl object-cover shadow-md transition-all duration-500 hover:scale-105 sm:h-[320px] sm:rounded-2xl lg:h-[350px] lg:rounded-[30px]"
          />
        </ScrollReveal>
        
        <div>
          
          <ScrollReveal delay={200} threshold={0.3} direction="up">
            <h2 className="leading-tight">
              <span className="block text-base font-bold text-[#111827] sm:text-lg">
                Your Trusted Forex Trading Partner
              </span>
              <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                NOVAFXM
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={400} threshold={0.3} direction="up">
            <p className="mt-4 text-center text-sm leading-7 text-gray-600 sm:text-left sm:text-base lg:leading-8">
              At NOVAFXM, we specialize in providing an exceptional Forex trading
              experience. Our platform offers access to major, minor and exotic
              currency pairs with deep liquidity, competitive spreads and
              cutting-edge trading tools.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500} threshold={0.3} direction="up">
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-4 lg:flex-nowrap">
              <div className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base">
                <Check className="shrink-0 text-[#014421]" size={20} strokeWidth={3} />
                Higher Returns
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base">
                <Check className="shrink-0 text-[#014421]" size={20} strokeWidth={3} />
                Portfolio Diversification
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base">
                <Check className="shrink-0 text-[#014421]" size={20} strokeWidth={3} />
                Tax Benefits
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Why Trade Forex with <span className="text-[#014421]">NOVAFXM?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-[#111827] sm:text-base sm:leading-8">
            Trade the global forex market with competitive spreads, fast and
            reliable execution, flexible leverage and access across multiple
            trading platforms. NOVAFXM also provides educational resources
            designed to help traders strengthen their market knowledge and make
            more informed trading decisions.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function MarketOfferingsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#D4AF37] sm:text-sm">
            Forex Products
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Forex Market <span className="text-[#014421]">Offerings</span>
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-gray-600 sm:text-base">
            Access a focused range of currency markets and trading conditions
            designed for active forex strategies.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-4">
        {marketOfferings.map(([title, desc], index) => (
          <StaggeredCard key={title} index={index}>
            <article className="relative flex h-full min-h-[235px] flex-col items-center overflow-hidden rounded-2xl border border-gray-200 border-b-[5px] border-b-[#014421] bg-white px-4 py-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-sm font-bold text-[#014421]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-base font-bold leading-snug text-gray-900 lg:text-lg">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {desc}
              </p>
            </article>
          </StaggeredCard>
        ))}
      </div>
    </section>
  );
}

function FundingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className="mb-7 px-2 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#D4AF37] sm:text-sm">
            Account Funding
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#014421] sm:text-3xl lg:text-4xl">
            Funding & Withdrawal Methods
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
            Use trusted payment options designed for secure deposits, smooth
            withdrawals and transparent processing.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {fundingMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <StaggeredCard key={method.name} index={index}>
              <div className="group relative flex h-full min-h-[200px] flex-col items-center justify-start overflow-hidden rounded-2xl border border-gray-200 border-b-4 border-b-[#014421] bg-white px-4 py-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[210px] sm:px-5 lg:min-h-[220px]">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.3} />
                </div>
                <h3 className="relative z-10 mt-3 flex min-h-[42px] items-center justify-center text-sm font-bold leading-snug text-slate-900 sm:min-h-[48px] sm:text-base lg:text-lg">
                  {method.name}
                </h3>
                <div className="relative z-10 mt-2 h-[3px] w-9 rounded-full bg-[#D4AF37]" />
                <p className="relative z-10 mt-3 text-sm leading-6 text-slate-600">
                  {method.desc}
                </p>
              </div>
            </StaggeredCard>
          );
        })}
      </div>
    </section>
  );
}
function ToolsSection() {
  const toolIcons = [BookOpenCheck, MonitorSmartphone, BarChart3, LineChart];

  return (
    <section className="w-full bg-[#e7f0eb] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center gap-8 pl-4 sm:pl-8 lg:pl-10">
          <div className="text-left">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:mb-8 sm:text-4xl">
              Forex Trading Tools &{" "}
              <span className="text-[#014421]">Market Insights</span>
            </h2>
            <div className="h-1 w-20 rounded-full bg-[#014421]"></div>
          </div>

          <ScrollReveal delay={0} threshold={0.2} direction="left">
            <div className="relative flex justify-center overflow-hidden rounded-2xl">
              <div className="relative group">
                <img
                  src="/EconomicCalendar.png"
                  alt="Forex trading tools and market analysis"
                  className="w-full max-w-[700px] rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#014421]/20 to-transparent"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool, index) => (
          <StaggeredCard key={tool.title} index={index}>
            <div className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 border-b-4 border-b-[#014421] bg-gradient-to-br from-white to-[#f5f7f2] px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[230px] sm:rounded-3xl sm:px-6 sm:py-6">
              <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  {(() => {
                    const Icon = toolIcons[index];
                    return <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />;
                  })()}
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  {tool.title}
                </h3>
                <div className="mt-3 h-[3px] w-10 rounded-full bg-[#014421]"></div>
                <p className="relative z-10 mt-3 text-sm font-medium leading-6 text-slate-700 sm:leading-7">
                  {tool.desc}
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
  );
}
function SecuritySection() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-10 sm:px-6 sm:py-12">
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className={`mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#014421] shadow-md transition-all duration-300 hover:shadow-xl`}>
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
                Client Protection
              </p>
              <h2 className="mb-4 mt-2 text-2xl font-bold leading-tight text-[#D4AF37] md:text-3xl">
                Security & Compliance
              </h2>
              <p className="max-w-4xl text-sm leading-7 text-gray-200 md:text-base">
                NOVAFXM is committed to the highest standards of financial security
                and regulatory compliance. We follow strict anti-money laundering
                (AML) policies and implement robust Know Your Customer (KYC)
                procedures to ensure a safe trading environment.
              </p>
            </div>

            {/* Centered compliance points */}
            <div className="flex items-center justify-center border-t border-white/30 bg-[#014421] px-5 py-6 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10">
              <div className="w-full max-w-md space-y-4">
                {compliancePoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-white" strokeWidth={2.4} />
                    <span className="text-sm font-semibold leading-7 text-white md:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default function ForexPage() {
  return (
    <div className="w-full max-w-none overflow-hidden bg-[#f7f7f7] font-sans">
      <HeroSection />
      <AboutSection />
      <ForexRatesWidget />
      <MarketOfferingsSection />
      <FeatureGrid />
      <ToolsSection />

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
}
