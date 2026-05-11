import React, { useState, useEffect } from "react";
import heroBg from "../../assets/images/image 90.jpeg";
import {
  Coins,
  ChartNoAxesCombined,
  BadgeCheck,
  Blocks,
  Newspaper,
} from "lucide-react";
import { FaBitcoin, FaChartLine, FaLock } from "react-icons/fa";

const CryptocurrencyPage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTCUSD");

  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTCUSD",
      marketCap: "1.32 T",
      fdCap: "1.40 T",
      price: "$66,812",
      volume: "$24.23 B",
      change: "+1.62%",
      color: "#F7931A",
    },
    {
      name: "Ethereum",
      symbol: "ETHUSD",
      marketCap: "394.71 B",
      fdCap: "394.71 B",
      price: "$3,278",
      volume: "$15.42 B",
      change: "+2.18%",
      color: "#627EEA",
    },
    {
      name: "Tether USDT",
      symbol: "USDTUSD",
      marketCap: "112.35 B",
      fdCap: "114.59 B",
      price: "$1.00",
      volume: "$39.18 B",
      change: "+0.02%",
      color: "#26A17B",
    },
    {
      name: "Binance Coin",
      symbol: "BNBUSD",
      marketCap: "85.69 B",
      fdCap: "85.69 B",
      price: "$566",
      volume: "$2.11 B",
      change: "+0.75%",
      color: "#F3BA2F",
    },
    {
      name: "XRP",
      symbol: "XRPUSD",
      marketCap: "72.64 B",
      fdCap: "121.36 B",
      price: "$0.60",
      volume: "$2.76 B",
      change: "+0.95%",
      color: "#23292F",
    },
  ];

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
      icon: <FaLock className="text-blue-600 text-4xl" />,
    },
    {
      title: "High Volatility",
      description:
        "Leverage the volatility of the crypto market to potentially achieve significant gains, but be mindful of amplified risks.",
      icon: <FaChartLine className="text-green-600 text-4xl" />,
    },
    {
      title: "Simple & Accessible",
      description:
        "Unlike stocks and commodities, Crypto CFDs are easier to trade, providing straightforward opportunities for both beginners and experienced traders.",
      icon: <FaBitcoin className="text-yellow-500 text-4xl" />,
    },
  ];

  // TradingView Widget Script - Market Screener
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": 450,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "light",
      "locale": "en",
      "isTransparent": false,
      "symbols": [
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "proName": "BINANCE:BNBUSDT",
          "title": "Binance Coin"
        },
        {
          "proName": "BITSTAMP:XRPUSD",
          "title": "XRP"
        },
        {
          "proName": "BINANCE:SOLUSDT",
          "title": "Solana"
        },
        {
          "proName": "BINANCE:DOGEUSDT",
          "title": "Dogecoin"
        },
        {
          "proName": "BINANCE:ADAUSDT",
          "title": "Cardano"
        }
      ]
    });

    const container = document.getElementById("tradingview-widget");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  // TradingView Chart Widget - Reduced/Smaller Chart
  useEffect(() => {
    const chartScript = document.createElement("script");
    chartScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    chartScript.async = true;
    chartScript.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": selectedCrypto,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "calendar": false,
      "hide_side_toolbar": true,  // Hide side toolbar to reduce size
      "hide_legend": false,        // Keep legend
      "save_image": false,         // Disable save image option
      "studies": [],               // No default studies
      "show_popup_button": false,  // Hide popup button
      "support_host": "https://www.tradingview.com"
    });

    const chartContainer = document.getElementById("tradingview-chart");
    if (chartContainer) {
      chartContainer.innerHTML = "";
      chartContainer.appendChild(chartScript);
    }

    return () => {
      if (chartContainer) {
        chartContainer.innerHTML = "";
      }
    };
  }, [selectedCrypto]);

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[200px] md:h-[602px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Cryptocurrency</h1>
          <p className="text-base md:text-lg mb-2">
            Step into Crypto CFD Trading with Zivico Solutions
          </p>
          <p className="text-xs md:text-sm text-gray-300">
            Access the digital asset market with flexibility and confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-14">
        {/* About Crypto Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center mb-12 md:mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1470&auto=format&fit=crop"
              alt="crypto"
              className="rounded-2xl md:rounded-3xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-gray-700 text-base md:text-lg mb-2">
              Maximize Opportunities, Manage Risk
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-[#014421] mb-4">
              Trade Crypto CFDs with
            </h2>
            <p className="text-[#D4AF37] font-semibold mb-4">
              Zivico Solutions
            </p>
            <p className="text-gray-600 leading-7 mb-6 text-sm md:text-base">
              Gain exposure to leading cryptocurrencies like Bitcoin, Ethereum,
              Ripple, and more through Contract for Difference (CFD) trading.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
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

        {/* TradingView Live Table Section */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Live Cryptocurrency Market
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Real-time prices, market cap, volume, and price changes
            </p>
          </div>
          
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-800">Market Overview</h3>
              <p className="text-xs text-gray-500">Live cryptocurrency data from TradingView</p>
            </div>
            <div id="tradingview-widget" className="w-full h-[450px]"></div>
          </div>
        </div>

       </div>

      {/* What are Crypto CFDs Section */}
      <div className="bg-[#014421] text-white px-4 md:px-6 py-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-4 md:mb-6">
            What are Crypto CFDs?
          </h2>
          <p className="text-gray-200 leading-7 md:leading-8 mb-3 md:mb-4 text-sm md:text-base">
            Cryptocurrencies, since Bitcoin's introduction in 2009, have
            redefined the financial landscape. These digital assets function on
            a decentralized online ledger secured by cryptography, making them
            one of the safest online payment methods.
          </p>
          <p className="text-gray-200 leading-7 md:leading-8 text-sm md:text-base">
            While cryptocurrencies like Bitcoin have gained significant
            recognition globally, they operate outside the traditional banking
            system and remain unaffected by conventional economic factors.
          </p>
        </div>
      </div>

      {/* What Affects the Price Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl md:text-5xl font-bold text-black mb-4 md:mb-5">
            What Affects the Price of{" "}
            <span className="text-[#014421]">Crypto CFDs?</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-7 md:leading-8 text-sm md:text-base">
            Several key factors influence the price movements of Crypto CFDs.
            Understanding these elements helps traders make informed and
            strategic decisions in fast-moving markets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center pb-7">
          {factors.slice(0, 3).map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 md:p-10 text-center border-b-[4px] md:border-b-[6px] border-[#D4AF37] w-full max-w-sm"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full bg-yellow-100 flex items-center justify-center">
                {factor.icon}
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-6 md:leading-7 text-sm md:text-base">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6">
          {factors.slice(3, 5).map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 md:p-10 text-center border-b-[4px] md:border-b-[6px] border-[#D4AF37] w-full max-w-sm mx-auto md:mx-0"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full bg-yellow-100 flex items-center justify-center">
                {factor.icon}
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-6 md:leading-7 text-sm md:text-base">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why is Crypto CFD Trading So Popular Section */}
      <div className="bg-gradient-to-r from-white to-white text-gray-800 py-8 md:py-12 px-4 md:px-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Why is Crypto CFD Trading So Popular?
        </h1>
        <p className="leading-7 md:leading-8 max-w-6xl mx-auto text-sm md:text-base">
          The media frenzy surrounding Bitcoin and Ethereum has driven the rise
          in Crypto CFD trading. Cryptocurrencies do not rely on central banks
          or interest rates, and their value is not subject to traditional
          economic drivers. Crypto CFDs can be traded against popular currencies
          such as the US Dollar, British Pound, or Euro, offering unique trading
          opportunities without the complexities of ownership.
        </p>
      </div>

      {/* Why Trade Crypto CFDs Section */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="p-6 md:p-10 text-center bg-gray-50 flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Why Trade Crypto CFDs?</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-7 max-w-xl mx-auto">
            {promoFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-4 md:p-6 hover:shadow-xl transition duration-300 ${
                  index === 2 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex justify-center mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="font-bold text-base md:text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="p-3 md:p-3 text-center bg-gray-50 flex-1 min-h-[100px] md:min-h-[100px] bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBg})`
          }}
        />
      </div>

      
    </div>
  );
};

export default CryptocurrencyPage;