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
      <div
        className="relative h-[602px] bg-cover bg-center flex items-center justify-center"
       style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Cryptocurrency</h1>
          <p className="text-lg mb-2">
            Step into Crypto CFD Trading with Zivico Solutions
          </p>
          <p className="text-sm text-gray-300">
            Access the digital asset market with flexibility and confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* About Crypto Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1470&auto=format&fit=crop"
              alt="crypto"
              className="rounded-3xl shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-gray-700 text-lg mb-2">
              Maximize Opportunities, Manage Risk
            </h3>
           <h2 className="text-3xl font-bold text-[#014421] mb-4">
  Trade Crypto CFDs with
</h2>
            <p className="text-[#D4AF37] font-semibold mb-4">
              Zivico Solutions
            </p>
            <p className="text-gray-600 leading-7 mb-6">
              Gain exposure to leading cryptocurrencies like Bitcoin, Ethereum,
              Ripple, and more through Contract for Difference (CFD) trading.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#014421]">✔</span>
                <p>Potential Returns</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#014421]">✔</span>
                <p>Simplified Trading</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <p>Portfolio Diversification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crypto Table */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">MKT CAP</th>
                  <th className="p-4">FD MKT CAP</th>
                  <th className="p-4">PRICE</th>
                  <th className="p-4">TRADED VOL</th>
                  <th className="p-4">CHG %</th>
                </tr>
              </thead>
              <tbody>
                {cryptos.map((crypto, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium text-blue-600">
                      {crypto.name}
                    </td>
                    <td className="p-4">{crypto.marketCap}</td>
                    <td className="p-4">{crypto.fdCap}</td>
                    <td className="p-4">{crypto.price}</td>
                    <td className="p-4">{crypto.volume}</td>
                    <td className="p-4 text-green-500 font-semibold">
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
      <div className="bg-[#014421] text-white px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-6 px-12">
  What are Crypto CFDs?
</h2>
          <p className="text-gray-200 leading-8 mb-4 px-12">
  Cryptocurrencies, since Bitcoin's introduction in 2009, have
  redefined the financial landscape. These digital assets function on
  a decentralized online ledger secured by cryptography, making them
  one of the safest online payment methods.
</p>
          <p className="text-gray-200 leading-8 px-10">
  While cryptocurrencies like Bitcoin have gained significant
  recognition globally, they operate outside the traditional banking
  system and remain unaffected by conventional economic factors.
</p>
        </div>
      </div>

      {/* What Affects the Price Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-5">
            What Affects the Price of{" "}
            <span className="text-[#014421]">Crypto CFDs?</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            Several key factors influence the price movements of Crypto CFDs.
            Understanding these elements helps traders make informed and
            strategic decisions in fast-moving markets.
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {factors.slice(0, 3).map((factor, index) => (
            <div
              key={index}
className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-10 text-center border-b-[6px] border-[#D4AF37] w-full max-w-sm"            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-yellow-100 flex items-center justify-center border-[#D4AF37]">
                {factor.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-5">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-7">{factor.description}</p>
            </div>
          ))}
        </div>
///
<div className="flex justify-center gap-10">
  {factors.slice(3, 5).map((factor, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-10 text-center border-b-[6px] border-[#D4AF37] w-full max-w-sm"
    >
      <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-yellow-100 flex items-center justify-center border-[#D4AF37]">
        {factor.icon}
      </div>

      <h3 className="text-3xl font-bold text-gray-800 mb-5">
        {factor.title}
      </h3>

      <p className="text-gray-600 leading-7">
        {factor.description}
      </p>
    </div>
  ))}
</div>
//
      </div>

      {/* Why is Crypto CFD Trading So Popular Section */}
      <div className="bg-gradient-to-r from-white to-white-700 text-gray-800 p-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Why is Crypto CFD Trading So Popular?
        </h1>
       <p className="  leading-8 mb-4 px-12 pb-3">
  The media frenzy surrounding Bitcoin and Ethereum has driven the rise
  in Crypto CFD trading. Cryptocurrencies do not rely on central banks
  or interest rates, and their value is not subject to traditional
  economic drivers. Crypto CFDs can be traded against popular currencies
  such as the US Dollar, British Pound, or Euro, offering unique trading
  opportunities without the complexities of ownership.
</p>
      </div>






<div className="flex justify-between">
  {/* Why Trade Crypto CFDs Section */}
  <div className="p-10 text-center bg-gray-50 flex-1">
    <h2 className="text-2xl font-semibold mb-8">Why Trade Crypto CFDs?</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
  {promoFeatures.map((feature, index) => (
    <div
      key={index}
      className={`bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ${
        index === 2 ? 'col-span-2' : ''
      }`}
    >
      <div className="flex justify-center mb-4">{feature.icon}</div>
      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
</div>
  </div>

  {/* Right Side with Background Image */}
<div 
  className="p-10 text-center  bg-gray-50 flex-1"
  style={{ 
    backgroundImage: `url(${heroBg})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '40px'
  }}
>
    {/* Add any content here if needed, or leave empty for image only */}
  </div>
</div>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 p-8 mt-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">FX Trade</h4>
            <p>
              Empowering traders globally with next-generation tools, tight
              spreads, and uncompromising security.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">Market</li>
              <li className="hover:text-white cursor-pointer transition">Trading Tools</li>
              <li className="hover:text-white cursor-pointer transition">About Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition">FAQ</li>
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-800 pt-8">
          <p>📧 support@fxtrade.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 Global Tech Hub, London</p>
          <p className="mt-4 text-sm text-gray-500">
            A5 Markets Limited – Registered with the Financial Services
            Authority (FSA) of St. Vincent and the Grenadines, Registration No
            1627 BC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CryptocurrencyPage;