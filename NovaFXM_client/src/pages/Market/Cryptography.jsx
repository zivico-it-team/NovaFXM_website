import React from "react";
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
  const cryptos = [
    {
      name: "Bitcoin",
      marketCap: "1.32 T",
      fdCap: "1.40 T",
      price: "$66,812",
      volume: "$24.23 B",
      change: "+1.62%",
    },
    {
      name: "Ethereum",
      marketCap: "394.71 B",
      fdCap: "394.71 B",
      price: "$3,278",
      volume: "$15.42 B",
      change: "+2.18%",
    },
    {
      name: "Tether USDT",
      marketCap: "112.35 B",
      fdCap: "114.59 B",
      price: "$1.00",
      volume: "$39.18 B",
      change: "+0.02%",
    },
    {
      name: "Binance Coin",
      marketCap: "85.69 B",
      fdCap: "85.69 B",
      price: "$566",
      volume: "$2.11 B",
      change: "+0.75%",
    },
    {
      name: "XRP",
      marketCap: "72.64 B",
      fdCap: "121.36 B",
      price: "$0.60",
      volume: "$2.76 B",
      change: "+0.95%",
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

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <img
          src={heroBg}
          alt="Cryptocurrency Hero"
          className="market-hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="market-hero-content relative z-10 mx-auto max-w-5xl text-center text-white">
          <h1 className="market-hero-title mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Cryptocurrency</h1>
          <p className="market-hero-copy mb-2 text-sm md:text-base">
            Step into Crypto CFD Trading with Zivico Solutions
          </p>
          <p className="market-hero-copy text-xs text-gray-300 md:text-sm">
            Access the digital asset market with flexibility and confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-14">
        {/* About Crypto Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center mb-12 md:mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1470&auto=format&fit=crop"
              alt="crypto"
              className="h-[240px] w-full rounded-2xl object-cover shadow-lg sm:h-[320px] md:h-auto md:rounded-3xl"
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
              Ripple and more through Contract for Difference (CFD) trading.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center pb-7">
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
              <p className="text-gray-600 leading-6 md:leading-7 text-sm md:text-base">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6 md:mt-0">
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
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="p-6 md:p-10 text-center bg-gray-50 flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Why Trade Crypto CFDs?</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-xl mx-auto">
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
          className="p-6 md:p-10 text-center bg-gray-50 flex-1 min-h-[300px] md:min-h-[400px]"
          style={{ 
            backgroundImage: `url(${heroBg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '0px'
          }}
        >
        </div>
      </div>

      
    </div>
  );
};

export default CryptocurrencyPage;
