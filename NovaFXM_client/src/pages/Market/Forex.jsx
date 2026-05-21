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
  {
    title: "24/5 Customer Support",
    desc: "A dedicated Forex support team ready to assist anytime.",
    icon: Headphones,
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
    <div className="mb-7 px-2 text-center sm:mb-12 lg:mb-14">
      <h2 className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${accent ? "text-[#014421]" : "text-[#1f1f1f]"}`}>
        {children}
      </h2>
      {!accent && <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#014421] sm:mt-6 sm:w-24" />}
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
    <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:mb-6 sm:flex-row sm:items-end">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#014421] sm:text-sm">
            Live Forex Rates
          </p>
          <h2 className="mt-1 text-2xl font-bold leading-tight text-[#014421] sm:text-3xl lg:text-4xl">
            TradingView Cross Rates
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500" />
          Real-time
        </span>
      </div>
      <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_16px_38px_rgba(15,23,42,0.10)] sm:rounded-2xl sm:p-3 sm:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
        {/* Height increased: mobile 900px → tablet 1050px → desktop 1200px */}
        <div
          ref={containerRef}
          className="tradingview-widget-container h-[360px] min-w-0 overflow-hidden rounded-lg bg-white sm:h-[520px] sm:rounded-xl lg:h-[600px]"
        />
      </div>
    </section>
  );
}
// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-black sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
      <img
        src="/Forex 1.jpeg"
        alt="Forex Hero"
        className="absolute inset-0 h-full w-full object-cover object-center market-hero-image"
      />
      <div className="absolute inset-0 bg-black/65 sm:bg-black/70" />
      <div className="market-hero-content relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <h1 className="market-hero-title text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">Forex</h1>
        <p className="market-hero-copy mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
          Trade the world's most liquid market with NOVAFXM.
        </p>
        
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
          alt="forex"
          className="h-[210px] w-full rounded-xl object-cover shadow-md sm:h-[320px] sm:rounded-2xl lg:h-[350px] lg:rounded-[30px]"
        />
        <div>
          <p className="mb-3 text-sm font-semibold text-[#014421] sm:mb-4">Forex Trading</p>
          <h2 className="text-2xl font-bold leading-tight text-[#1f1f1f] sm:text-4xl">
            Your Trusted Forex Trading Partner
          </h2>
          <h3 className="mt-2 text-2xl font-bold text-[#014421] sm:mt-3 sm:text-3xl">NOVAFXM</h3>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base lg:leading-8">
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
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <SectionTitle>
        Why Trade Forex with <span className="text-[#014421]">NOVAFXM</span>
      </SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {features.map((item) => {
          const Icon = item.icon;
          return (
          <div
            key={item.title}
            className={`group flex h-full min-h-[170px] flex-col items-center rounded-xl border-b-[4px] border-[#014421] bg-white px-4 py-5 text-center shadow-md sm:min-h-[185px] md:border-b-[5px] lg:min-h-[195px] lg:px-5 ${cardAnimation}`}
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] sm:h-13 sm:w-13">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
            </div>
            <h3 className="text-sm font-bold leading-snug text-gray-800 sm:text-base lg:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
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
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.35fr] lg:items-stretch">
        <div className="rounded-2xl bg-[#014421] px-5 py-7 text-white shadow-[0_18px_42px_rgba(1,68,33,0.18)] sm:px-8 sm:py-9 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#D4AF37] sm:text-sm">
            Forex Products
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Forex Market Offerings
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
            Access a focused range of currency markets and trading conditions
            designed for active forex strategies.
          </p>
          <div className="mt-6 flex items-center gap-4 border-t border-white/20 pt-5">
            <span className="text-4xl font-bold text-[#D4AF37]">
              {String(marketOfferings.length).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold leading-5 text-white/80">
              Trading categories available
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {marketOfferings.map(([title, desc], index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#014421]/20 hover:shadow-md sm:px-6"
            >
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#014421]" />
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-sm font-bold text-[#014421]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {desc}
                  </p>
                </div>
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
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
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

      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {fundingMethods.map((method) => {
          const Icon = method.icon;

          return (
          <div
            key={method.name}
            className={`flex min-h-[170px] flex-col items-center justify-start rounded-2xl border border-gray-100 border-b-4 border-b-[#014421] bg-white px-4 py-5 text-center shadow-md sm:min-h-[195px] sm:px-5 lg:min-h-[205px] ${cardAnimation}`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] sm:h-14 sm:w-14">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.3} />
            </div>

            <h3 className="mt-3 flex min-h-[42px] items-center justify-center text-sm font-bold leading-snug text-slate-900 sm:min-h-[48px] sm:text-base lg:text-lg">
              {method.name}
            </h3>

            <div className="mt-2 h-[3px] w-9 rounded-full bg-[#D4AF37]" />

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {method.desc}
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20 lg:pb-24">
      <SectionTitle accent>Forex Trading Tools & Market Insights</SectionTitle>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className={`flex min-h-[155px] flex-col items-center justify-start rounded-2xl border border-gray-100 bg-white px-5 py-6 text-center shadow-md sm:min-h-[175px] lg:min-h-[190px] lg:px-6 ${cardAnimation}`}
          >
            <h3 className="flex min-h-[44px] items-center justify-center text-base font-bold leading-snug text-gray-800 sm:min-h-[56px] sm:text-lg">
              {tool.title}
            </h3>
            <div className="mt-2 h-[3px] w-10 rounded-full bg-[#D4AF37]" />
            <p className="mt-3 text-sm leading-6 text-gray-500">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-10 sm:px-6 sm:py-12">
      <div className={`mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#014421] shadow-md ${cardAnimation}`}>
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
              Client Protection
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#D4AF37] sm:text-3xl">
              Security & Compliance
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-white sm:text-base">
            NOVAFXM is committed to the highest standards of financial security
            and regulatory compliance. We follow strict anti-money laundering
            (AML) policies and implement robust Know Your Customer (KYC)
            procedures to ensure a safe trading environment.
            </p>
          </div>

          <div className="border-t border-white/30 bg-[#014421] px-5 py-6 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10">
            <div className="space-y-4">
              {compliancePoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white" strokeWidth={2.4} />
                  <span className="font-semibold text-white">{point}</span>
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
