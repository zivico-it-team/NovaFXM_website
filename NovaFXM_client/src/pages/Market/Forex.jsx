import { useEffect, useRef } from "react";
import {
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Gauge,
  Headphones,
  LineChart,
  MonitorSmartphone,
  WalletCards,
} from "lucide-react";

const tradingViewCurrencies = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"];

const cardAnimation =
  "transition duration-300 hover:-translate-y-2 hover:shadow-xl";

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
  {
    title: "24/5 Customer Support",
    desc: "A dedicated Forex support team ready to assist anytime.",
    icon: Headphones,
  },
];

const fundingMethods = [
  ["Credit/Debit Cards", "Instant deposits with zero fees.", CreditCard],
  ["Bank Transfers", "Secure transactions with 1-3 day processing.", Building2],
  ["Cryptocurrency Payments", "Fast and borderless transactions.", CircleDollarSign],
  ["E-wallets", "Quick deposits and withdrawals.", WalletCards],
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
    <div className="mb-8 text-center sm:mb-12 lg:mb-14">
          <h2 className={`text-2xl font-bold sm:text-3xl lg:text-4xl ${accent ? "text-[#014421]" : "text-[#1f1f1f]"}`}>
        {children}
      </h2>
      {!accent && <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#014421]" />}
    </div>
  );
}

// ── TradingView Forex Cross Rates Widget — height increased ──────────────────
function ForexRatesWidget() {
  const containerRef = useRef(null);
  const hasLoadedWidget = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasLoadedWidget.current) return;

    hasLoadedWidget.current = true;
    containerRef.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.height = "100%";
    widget.style.width = "100%";
    containerRef.current.appendChild(widget);

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      currencies: tradingViewCurrencies,
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:mb-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#014421]">
            Live Forex Rates
          </p>
          <h2 className="mt-1 text-2xl font-bold text-[#014421] sm:text-3xl lg:text-4xl">
            TradingView Cross Rates
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700">
          <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500" />
          Real-time
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_22px_60px_rgba(15,23,42,0.12)] sm:p-3">
        {/* Height increased: mobile 900px → tablet 1050px → desktop 1200px */}
        <div
          ref={containerRef}
          className="tradingview-widget-container h-[430px] overflow-hidden rounded-xl bg-white sm:h-[520px] lg:h-[600px]"
        />
      </div>
    </section>
  );
}
// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
      <img
        src="/Forex 1.jpeg"
        alt="Forex Hero"
        className="absolute inset-0 object-cover object-center w-full h-full market-hero-image"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="market-hero-content relative z-10 flex min-h-[70svh] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
        <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl">Forex</h1>
        <p className="market-hero-copy mt-4 text-sm text-gray-200 md:text-base">
          Trade the world's most liquid market with NOVAFXM.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className={`grid items-center gap-8 rounded-2xl bg-white p-5 shadow-md sm:p-8 lg:grid-cols-2 lg:gap-14 lg:rounded-[30px] ${cardAnimation}`}>
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
          alt="forex"
          className="h-[240px] w-full rounded-2xl object-cover sm:h-[320px] lg:h-[350px] lg:rounded-[30px]"
        />
        <div>
          <p className="mb-4 text-sm font-semibold text-[#014421]">Forex Trading</p>
          <h2 className="text-3xl font-bold leading-tight text-[#1f1f1f] sm:text-4xl">
            Your Trusted Forex Trading Partner
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-[#014421] sm:text-4xl">NOVAFXM</h3>
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base lg:leading-8">
            At NOVAFXM, we specialize in providing an exceptional Forex trading
            experience. Our platform offers access to major, minor and exotic
            currency pairs with deep liquidity, competitive spreads and
            cutting-edge trading tools.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
      <SectionTitle>
        Why Trade Forex with <span className="text-[#014421]">NOVAFXM</span>
      </SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((item) => {
          const Icon = item.icon;
          return (
          <div
            key={item.title}
            className={`group rounded-2xl border-b-[4px] border-[#014421] bg-white p-5 text-center shadow-md md:border-b-[6px] lg:p-6 ${cardAnimation}`}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] sm:h-16 sm:w-16">
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
            </div>
            <h3 className="text-lg font-bold leading-snug text-gray-800 sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              {item.desc}
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
}

function MarketOfferingsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
      <div className="mb-8 text-center sm:mb-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#014421]">
          Forex Products
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#014421] sm:text-3xl lg:text-4xl">
          Forex Market Offerings
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
          Access a broad range of currency markets and trading conditions
          designed for active forex strategies.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {marketOfferings.map(([title, desc], index) => (
          <div
            key={title}
            className={`rounded-2xl border-b-[4px] border-[#014421] bg-white p-5 text-center shadow-md md:border-b-[6px] lg:p-5 ${cardAnimation}`}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] text-sm font-bold text-[#014421]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-base font-bold leading-snug text-gray-800 sm:text-lg">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FundingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
      <div className="mb-8 text-center sm:mb-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#014421]">
          Account Funding
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#014421] sm:text-3xl lg:text-4xl">
          Funding & Withdrawal Methods
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
          Choose secure payment options designed for fast deposits,
          controlled withdrawals and transparent processing.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {fundingMethods.map(([name, desc, Icon]) => (
          <div
            key={name}
            className={`rounded-2xl border-b-[4px] border-[#014421] bg-white p-5 text-center shadow-md md:border-b-[6px] lg:p-6 ${cardAnimation}`}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] sm:h-16 sm:w-16">
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
            </div>
            <h3 className="text-lg font-bold leading-snug text-gray-800 sm:text-xl">{name}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:pb-24">
      <SectionTitle accent>Forex Trading Tools & Market Insights</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {tools.map((tool) => (
          <div key={tool.title} className={`rounded-2xl bg-white p-5 text-center shadow-md lg:p-6 ${cardAnimation}`}>
            <h3 className="text-lg font-bold leading-snug text-gray-800 sm:text-xl">{tool.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-10 sm:px-6">
      <div className={`mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-md ${cardAnimation}`}>
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#014421]">
              Client Protection
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#014421] sm:text-3xl">
              Security & Compliance
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            NOVAFXM is committed to the highest standards of financial security
            and regulatory compliance. We follow strict anti-money laundering
            (AML) policies and implement robust Know Your Customer (KYC)
            procedures to ensure a safe trading environment.
            </p>
          </div>

          <div className="border-t border-slate-200 bg-[#f8faf9] px-5 py-6 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10">
            <div className="space-y-4">
              {compliancePoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#014421]" strokeWidth={2.4} />
                  <span className="font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ForexPage() {
  return (
    <div className="w-full overflow-hidden bg-[#f7f7f7] font-sans">
      <HeroSection />
      <AboutSection />
      <ForexRatesWidget />
      <FeatureGrid />
      <MarketOfferingsSection />
      <FundingSection />
      <ToolsSection />
      <SecuritySection />
    </div>
  );
}
