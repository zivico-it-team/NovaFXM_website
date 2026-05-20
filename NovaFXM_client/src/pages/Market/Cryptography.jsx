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
      <div className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <img
          src={heroBg}
          alt="Cryptocurrency Hero"
          className="absolute inset-0 object-cover object-center w-full h-full market-hero-image"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="market-hero-content relative z-10 mx-auto max-w-5xl text-center text-white">
          <h1 className="market-hero-title mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Cryptocurrency</h1>
          <p className="market-hero-copy mb-2 text-sm md:text-base">
            Step into Crypto CFD Trading with Zivico Solutions
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
              className="h-[240px] w-full rounded-2xl object-cover shadow-lg sm:h-[320px] md:h-auto md:rounded-3xl"
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

        {/* Crypto Table */}
        <div className="mb-12 overflow-hidden rounded-2xl bg-white shadow-lg md:mb-16 md:rounded-3xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 md:p-4 text-sm md:text-base">Name</th>
                  <th className="p-3 md:p-4 text-sm md:text-base">MKT CAP</th>
                  <th className="p-3 md:p-4 text-sm md:text-base">FD MKT CAP</th>
                  <th className="p-3 md:p-4 text-sm md:text-base">PRICE</th>
                  <th className="p-3 md:p-4 text-sm md:text-base">TRADED VOL</th>
                  <th className="p-3 md:p-4 text-sm md:text-base">CHG %</th>
                </tr>
              </thead>
              <tbody>
                {cryptos.map((crypto, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 md:p-4 font-medium text-blue-600 text-sm md:text-base">
                      {crypto.name}
                    </td>
                    <td className="p-3 md:p-4 text-sm md:text-base">{crypto.marketCap}</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">{crypto.fdCap}</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">{crypto.price}</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">{crypto.volume}</td>
                    <td className="p-3 md:p-4 text-green-500 font-semibold text-sm md:text-base">
                      {crypto.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* What are Crypto CFDs Section */}
      <div className="bg-[#014421] text-white px-4 md:px-6 py-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-4 px-0 text-2xl font-bold text-[#D4AF37] md:mb-6 md:px-12 md:text-3xl lg:text-4xl">
            What are Crypto CFDs?
          </h2>
          <p className="mb-3 px-0 text-sm leading-7 text-gray-200 md:mb-4 md:px-12 md:text-base md:leading-8">
            Cryptocurrencies, since Bitcoin's introduction in 2009, have
            redefined the financial landscape. These digital assets function on
            a decentralized online ledger secured by cryptography, making them
            one of the safest online payment methods.
          </p>
          <p className="px-0 text-sm leading-7 text-gray-200 md:px-12 md:text-base md:leading-8">
            While cryptocurrencies like Bitcoin have gained significant
            recognition globally, they operate outside the traditional banking
            system and remain unaffected by conventional economic factors.
          </p>
        </div>
      </div>

      {/* What Affects the Price Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-5">
            What Affects the Price of{" "}
            <span className="text-[#014421]">Crypto CFDs?</span>
          </h1>
          <p className="mx-auto max-w-3xl px-0 text-sm leading-7 text-gray-600 md:px-4 md:text-base md:leading-8">
            Several key factors influence the price movements of Crypto CFDs.
            Understanding these elements helps traders make informed and
            strategic decisions in fast-moving markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 justify-items-center pb-7">
          {factors.slice(0, 3).map((factor, index) => (
            <div
              key={index}
              className="w-full max-w-sm rounded-2xl border-b-[4px] border-[#D4AF37] bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-3xl md:border-b-[6px] lg:p-10"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 md:mb-8 md:h-24 md:w-24">
                {factor.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-5">
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
              className="mx-auto w-full max-w-sm rounded-2xl border-b-[4px] border-[#D4AF37] bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:mx-0 md:rounded-3xl md:border-b-[6px] lg:p-10"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 md:mb-8 md:h-24 md:w-24">
                {factor.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-5">
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
        <p className="mx-auto max-w-6xl px-0 pb-4 text-sm leading-7 md:px-12 md:text-base md:leading-8">
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
