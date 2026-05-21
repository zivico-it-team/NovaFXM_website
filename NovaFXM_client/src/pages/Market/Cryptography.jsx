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
  );
};
// ────────────────────────────────────────────────────────────────────────────

const CryptocurrencyPage = () => {

  const factors = [
    {
      title: "Supply",
      description:
        "The total number of coins available and their release schedule.",
      icon: <Coins size={34} />,
    },
    {
      title: "Market Capitalization",
      description:
        "The total value of coins in circulation and market expectations for future movements.",
      icon: <ChartNoAxesCombined size={34} />,
    },
    {
      title: "Reputation",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <BadgeCheck size={34} />,
    },
    {
      title: "Utility",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <Blocks size={34} />,
    },
    {
      title: "Events & News",
      description:
        "Reflects the performance of the market and major global movements.",
      icon: <Newspaper size={34} />,
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
      <div className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-3 py-16 sm:min-h-[calc(100svh-80px)] sm:px-5 lg:min-h-[calc(100svh-84px)] lg:px-6">
        <img
          src={heroBg}
          alt="Cryptocurrency Hero"
          className="absolute inset-0 object-cover object-center w-full h-full market-hero-image"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white market-hero-content">
          <h1 className="mb-4 text-4xl font-bold market-hero-title sm:text-5xl md:text-6xl">Cryptocurrency</h1>
          <p className="mb-2 text-sm market-hero-copy md:text-base">
            Step into Crypto CFD Trading with Zivico Solutions
          </p>
          <p className="text-xs text-gray-300 market-hero-copy md:text-sm">
            Access the digital asset market with flexibility and confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-3 py-8 mx-auto max-w-7xl sm:px-5 md:py-14 lg:px-6">
        {/* About Crypto Section */}
        <div className="grid items-start gap-8 mb-12 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1470&auto=format&fit=crop"
              alt="crypto"
              className="h-[240px] w-full rounded-2xl object-cover shadow-lg sm:h-[320px] md:h-[420px] md:rounded-3xl lg:h-[450px]"
            />
          </div>
          <div className="order-1 md:order-2 md:pl-2 lg:pl-4">
            <h3 className="mb-2 text-base text-gray-700 md:text-lg">
              Maximize Opportunities, Manage Risk
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-[#014421] mb-4">
              Trade Crypto CFDs with
            </h2>
            <p className="text-[#D4AF37] font-bold mb-4 text-2xl">NOVAFXM</p>
            <p className="mb-6 text-sm leading-7 text-justify text-gray-600 md:text-base">
               Gain exposure to leading cryptocurrencies like Bitcoin, Ethereum, Ripple and
               more through Contract for Difference (CFD) trading. 
               Trade with advanced market analysis tools, real-time price tracking and
               secure trading platforms designed for both beginners and experienced traders. 
               Access global crypto markets anytime, manage risks effectively and explore
               new investment opportunities with flexible leverage options and seamless
               portfolio management features.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-[#014421]" strokeWidth={3} />
                <p className="text-sm md:text-base">Potential Returns</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-[#014421]" strokeWidth={3} />
                <p className="text-sm md:text-base">Simplified Trading</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-[#014421]" strokeWidth={3} />
                <p className="text-sm md:text-base">Portfolio Diversification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Crypto Table */}
        <CryptoLiveTable />
      </div>

      {/* What are Crypto CFDs Section */}
      <div className="bg-[#014421] px-3 py-8 text-white sm:px-5 md:py-10 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold text-[#D4AF37] md:mb-6 md:text-3xl lg:text-4xl">
            What are Crypto CFDs?
          </h2>
          <p className="mb-3 text-sm leading-7 text-gray-200 md:mb-4 md:text-base md:leading-8">
            Cryptocurrencies, since Bitcoin's introduction in 2009, have
            redefined the financial landscape. These digital assets function on
            a decentralized online ledger secured by cryptography, making them
            one of the safest online payment methods.
          </p>
          <p className="text-sm leading-7 text-gray-200 md:text-base md:leading-8">
            While cryptocurrencies like Bitcoin have gained significant
            recognition globally, they operate outside the traditional banking
            system and remain unaffected by conventional economic factors.
          </p>
        </div>
      </div>

      {/* What Affects the Price Section */}
      <div className="px-3 py-12 mx-auto max-w-7xl sm:px-5 md:py-20 lg:px-6">

        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-2xl font-bold text-black md:text-4xl">
            What Affects the Price of{" "}
            <span className="text-[#014421]">Crypto CFDs?</span>
          </h1>
          <p className="mx-auto text-sm leading-relaxed text-gray-600 max-w-8xl md:text-base">
            Several key factors influence the price movements of Crypto CFDs.
            Understanding these elements helps traders make informed and
            strategic decisions in fast-moving markets.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="flex min-h-[300px] flex-col rounded-3xl border-b-4 border-[#D4AF37] bg-white px-6 py-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full shrink-0">
                {factor.icon}
              </div>
              {/* Title */}
              <h3 className="mb-5 flex min-h-[52px] items-center justify-center px-2 text-center text-xl font-bold leading-tight text-gray-800">
                {factor.title}
              </h3>
              {/* Description */}
              <p className="px-2 text-sm leading-7 text-center text-gray-600">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why is Crypto CFD Trading So Popular Section */}
      <div className="px-3 py-10 text-center text-gray-800 bg-gradient-to-r from-white to-white sm:px-5 md:py-14 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-2xl font-bold md:text-4xl">
            Why is Crypto CFD Trading So Popular?
          </h1>
          <p className="mx-auto text-sm leading-7 max-w-8xl md:text-base md:leading-8">
            The media frenzy surrounding Bitcoin and Ethereum has driven the rise
            in Crypto CFD trading. Cryptocurrencies do not rely on central banks
            or interest rates and their value is not subject to traditional
            economic drivers. Crypto CFDs can be traded against popular currencies
            such as the US Dollar, British Pound or Euro offering unique trading
            opportunities without the complexities of ownership.
          </p>
        </div>
      </div>

      {/* Why Trade Crypto CFDs Section with Background Image */}
      <div className="px-3 py-10 bg-gray-50 sm:px-5 md:py-14 lg:px-6">
        <div className="grid mx-auto overflow-hidden max-w-7xl rounded-2xl bg-gray-50 lg:grid-cols-2">
          <div className="py-4 text-center md:py-8 lg:pr-8">
            <h2 className="mb-6 text-xl font-bold md:mb-8 md:text-2xl">
              Why Trade Crypto CFDs?
            </h2>
            <div className="grid max-w-xl gap-5 mx-auto md:grid-cols-2 md:gap-6">
              {promoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-lg bg-white p-5 shadow-md transition duration-300 hover:shadow-xl md:p-6 ${
                    index === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex justify-center mb-3 md:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600 md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="min-h-[300px] bg-gray-50 md:min-h-[400px]"
            style={{
              backgroundImage: `url(${cryptoBottom})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CryptocurrencyPage;
