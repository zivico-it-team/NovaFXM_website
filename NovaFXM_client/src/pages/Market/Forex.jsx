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
  "transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#c89d32]/70 hover:shadow-xl hover:shadow-slate-900/10";

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
    <div className="text-center mb-14">
      <h2 className={`text-5xl font-bold ${accent ? "text-[#014421]" : "text-[#1f1f1f]"}`}>
        {children}
      </h2>
      {!accent && <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#c89d32]" />}
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
    <section className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c89d32]">
            Live Forex Rates
          </p>
          <h2 className="mt-1 text-3xl font-bold text-[#014421] sm:text-4xl">
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
          className="overflow-hidden bg-white tradingview-widget-container rounded-xl"
          style={{ height: "clamp(100px, 50vh, 1200px)" }}
        />
      </div>
    </section>
  );
}
// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-72px)] overflow-hidden sm:h-[calc(100vh-80px)] lg:h-[calc(100vh-84px)]">
      <img
        src="/Forex 1.jpeg"
        alt="Forex Hero"
        className="absolute inset-0 object-cover object-center w-full h-full market-hero-image"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center market-hero-content">
        <h1 className="text-4xl font-bold text-white market-hero-title sm:text-5xl md:text-6xl lg:text-7xl">Forex</h1>
        <p className="mt-4 text-sm text-gray-200 market-hero-copy md:text-base">
          Trade the world's most liquid market with NOVAFXM.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-20 mx-auto max-w-7xl">
      <div className={`grid items-center gap-14 rounded-[30px] border border-transparent bg-white p-8 shadow-sm lg:grid-cols-2 ${cardAnimation}`}>
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
          alt="forex"
          className="h-[350px] w-full rounded-[30px] object-cover"
        />
        <div>
          <p className="mb-4 text-sm font-semibold text-[#c89d32]">Forex Trading</p>
          <h2 className="text-5xl font-bold leading-tight text-[#1f1f1f]">
            Your Trusted Forex Trading Partner
          </h2>
          <h3 className="mt-3 text-4xl font-bold text-[#014421]">NOVAFXM</h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
    <section className="px-6 pb-20 mx-auto max-w-7xl">
      <SectionTitle>
        Why Trade Forex with <span className="text-[#014421]">NOVAFXM</span>
      </SectionTitle>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 text-left ${cardAnimation}`}
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-[#c89d32]" />
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl border border-[#014421] bg-white text-[#014421] transition-all duration-300 group-hover:border-[#014421] group-hover:bg-[#014421] group-hover:text-white">
                <Icon className="w-8 h-8" strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-bold leading-snug text-[#014421]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MarketOfferingsSection() {
  return (
    <section className="px-6 pb-20 mx-auto max-w-7xl">
      <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${cardAnimation}`}>
        <div className="border-b border-slate-200 bg-[#f8faf9] px-8 py-8 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c89d32]">Forex Products</p>
          <h2 className="mt-2 text-4xl font-bold text-[#014421]">Forex Market Offerings</h2>
          <p className="max-w-3xl mt-4 leading-7 text-slate-600">
            Access a broad range of currency markets and trading conditions designed for active forex strategies.
          </p>
        </div>
        <div className="divide-y divide-slate-200">
          {marketOfferings.map(([title, desc], index) => (
            <div
              key={title}
              className="group grid gap-5 px-8 py-6 transition-colors duration-300 hover:bg-[#014421] sm:px-10 md:grid-cols-[84px_1fr]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#c89d32]/40 bg-white text-sm font-bold text-[#014421] transition-all duration-300 group-hover:border-[#014421] group-hover:bg-[#014421] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#014421] transition-colors duration-300 group-hover:text-white">{title}</h3>
                <p className="max-w-3xl mt-2 leading-7 transition-colors duration-300 text-slate-600 group-hover:text-white">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FundingSection() {
  return (
    <section className="px-6 pb-20 mx-auto max-w-7xl">
      <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${cardAnimation}`}>
        <div className="border-b border-slate-200 bg-[#f8faf9] px-8 py-8 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c89d32]">Account Funding</p>
          <h2 className="mt-2 text-4xl font-bold text-[#014421]">Funding & Withdrawal Methods</h2>
          <p className="max-w-3xl mt-4 leading-7 text-slate-600">
            Choose secure payment options designed for fast deposits, controlled withdrawals and transparent processing.
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-2">
          {fundingMethods.map(([name, desc, Icon]) => (
            <div
              key={name}
              className="group flex gap-5 border-b border-slate-200 px-8 py-7 transition-colors duration-300 hover:bg-[#014421] md:border-r md:last:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 sm:px-10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#014421] bg-white text-[#014421] transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#014421]">
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#014421] transition-colors duration-300 group-hover:text-white">{name}</h3>
                <p className="mt-2 leading-7 transition-colors duration-300 text-slate-600 group-hover:text-white">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className="px-6 pb-24 mx-auto max-w-7xl">
      <SectionTitle accent>Forex Trading Tools & Market Insights</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <div key={tool.title} className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 text-center ${cardAnimation}`}>
            <div className="absolute bottom-0 left-0 h-2 w-full bg-[#c89d32] transition-all duration-300 group-hover:h-3" />
            <h3 className="text-2xl font-bold leading-snug text-[#014421]">{tool.title}</h3>
            <p className="mt-6 text-lg leading-7 text-gray-600">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="bg-[#f1f1f1] px-6 py-10">
      <div className={`mx-auto max-w-7xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${cardAnimation}`}>
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="px-8 py-8 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c89d32]">Client Protection</p>
            <h2 className="mt-2 text-3xl font-bold text-[#014421]">Security & Compliance</h2>
            <p className="max-w-4xl mt-5 text-base leading-7 text-slate-600">
              NOVAFXM is committed to the highest standards of financial security and regulatory compliance. We follow
              strict anti-money laundering (AML) policies and implement robust Know Your Customer (KYC) procedures to
              ensure a safe trading environment.
            </p>
          </div>
          <div className="border-t border-slate-200 bg-[#f8faf9] px-8 py-8 lg:border-l lg:border-t-0 sm:px-10">
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