import React, { useEffect, useRef } from "react";
import heroBg from "../../assets/images/image 90.jpeg";
import {
  Coins,
  ChartNoAxesCombined,
  BadgeCheck,
  Blocks,
  Newspaper,
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
      <div className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[calc(100vh-80px)] sm:px-6 lg:min-h-[calc(100vh-84px)]">
        <img
          src={heroBg}
          alt="Cryptocurrency Hero"
          className="absolute inset-0 object-cover object-center w-full h-full market-hero-image"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white market-hero-content">
          <h1 className="mb-4 text-4xl font-bold market-hero-title sm:text-5xl md:text-6xl lg:text-7xl">
            Cryptocurrency
          </h1>
          <p className="mb-2 text-base market-hero-copy md:text-lg">
            Step into Crypto CFD Trading with NOVAFXM
          </p>
          <p className="text-xs text-gray-300 market-hero-copy md:text-sm">
            Access the digital asset market with flexibility and confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl px-4 py-8 mx-auto md:px-6 md:py-14">
        {/* About Crypto Section */}
        <div className="grid items-center gap-8 mb-12 md:grid-cols-2 md:gap-10 md:mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1470&auto=format&fit=crop"
              alt="crypto"
              className="w-full h-auto shadow-lg rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-2 text-base text-gray-700 md:text-lg">
              Maximize Opportunities, Manage Risk
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-[#014421] mb-4">
              Trade Crypto CFDs with
            </h2>
            <p className="text-[#D4AF37] font-semibold mb-4">NOVAFXM</p>
            <p className="mb-6 text-sm leading-7 text-gray-600 md:text-base">
              Gain exposure to leading cryptocurrencies like Bitcoin, Ethereum,
              Ripple and more through Contract for Difference (CFD) trading.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#014421]">✔</span>
                <p className="text-sm md:text-base">Potential Returns</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#014421]">✔</span>
                <p className="text-sm md:text-base">Simplified Trading</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <p className="text-sm md:text-base">Portfolio Diversification</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── LIVE TradingView Crypto Table (replaces dummy table) ── */}
        <CryptoLiveTable />
        {/* ─────────────────────────────────────────────────────── */}
      </div>

      {/* What are Crypto CFDs Section */}
      <div className="bg-[#014421] text-white px-4 md:px-6 py-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-4 md:mb-6 px-4 md:px-12">
            What are Crypto CFDs?
          </h2>
          <p className="px-4 mb-3 text-sm leading-7 text-gray-200 md:leading-8 md:mb-4 md:px-12 md:text-base">
            Cryptocurrencies, since Bitcoin's introduction in 2009, have
            redefined the financial landscape. These digital assets function on
            a decentralized online ledger secured by cryptography, making them
            one of the safest online payment methods.
          </p>
          <p className="px-4 text-sm leading-7 text-gray-200 md:leading-8 md:px-12 md:text-base">
            While cryptocurrencies like Bitcoin have gained significant
            recognition globally, they operate outside the traditional banking
            system and remain unaffected by conventional economic factors.
          </p>
        </div>
      </div>

      {/* What Affects the Price Section */}
      <div className="px-4 py-12 mx-auto max-w-7xl md:py-20 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-2xl font-bold text-black md:text-5xl md:mb-5">
            What Affects the Price of{" "}
            <span className="text-[#014421]">Crypto CFDs?</span>
          </h1>
          <p className="max-w-3xl px-4 mx-auto text-sm leading-7 text-gray-600 md:leading-8 md:text-base">
            Several key factors influence the price movements of Crypto CFDs.
            Understanding these elements helps traders make informed and
            strategic decisions in fast-moving markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 justify-items-center pb-7">
          {factors.slice(0, 3).map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 md:p-10 text-center border-b-[4px] md:border-b-[6px] border-[#D4AF37] w-full max-w-sm"
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full md:w-24 md:h-24 md:mb-8">
                {factor.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800 md:text-3xl md:mb-5">
                {factor.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600 md:leading-7 md:text-base">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row md:gap-10 md:mt-0">
          {factors.slice(3, 5).map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 md:p-10 text-center border-b-[4px] md:border-b-[6px] border-[#D4AF37] w-full max-w-sm mx-auto md:mx-0"
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full md:w-24 md:h-24 md:mb-8">
                {factor.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800 md:text-3xl md:mb-5">
                {factor.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600 md:leading-7 md:text-base">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why is Crypto CFD Trading So Popular Section */}
      <div className="px-4 py-8 text-center text-gray-800 bg-gradient-to-r from-white to-white md:py-12 md:px-6">
        <h1 className="mb-4 text-2xl font-bold md:text-4xl">
          Why is Crypto CFD Trading So Popular?
        </h1>
        <p className="max-w-6xl px-4 pb-4 mx-auto text-sm leading-7 md:leading-8 md:px-12 md:text-base">
          The media frenzy surrounding Bitcoin and Ethereum has driven the rise
          in Crypto CFD trading. Cryptocurrencies do not rely on central banks
          or interest rates and their value is not subject to traditional
          economic drivers. Crypto CFDs can be traded against popular currencies
          such as the US Dollar, British Pound or Euro offering unique trading
          opportunities without the complexities of ownership.
        </p>
      </div>

      {/* Why Trade Crypto CFDs Section with Background Image */}
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex-1 p-6 text-center md:p-10 bg-gray-50">
          <h2 className="mb-6 text-xl font-semibold md:text-2xl md:mb-8">
            Why Trade Crypto CFDs?
          </h2>
          <div className="grid max-w-xl gap-6 mx-auto md:grid-cols-2 md:gap-8">
            {promoFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-4 md:p-6 hover:shadow-xl transition duration-300 ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-bold md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="p-6 md:p-10 text-center bg-gray-50 flex-1 min-h-[300px] md:min-h-[400px]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "0px",
          }}
        />
      </div>
    </div>
  );
};

export default CryptocurrencyPage;
