import React, { useState, useEffect } from "react";

// 🔹 Initial Market Data
const initialData = {
  Metals: [
    { symbol: "XAUUSD", name: "Gold / US Dollar", price: 2034.5, change: "+0.45%", up: true, tag: "AU" },
    { symbol: "XAGUSD", name: "Silver / US Dollar", price: 22.85, change: "-0.12%", up: false, tag: "AG" },
    { symbol: "XPTUSD", name: "Platinum / US Dollar", price: 905.2, change: "+1.20%", up: true, tag: "PT" },
  ],

  Forex: [
    { symbol: "EURUSD", name: "Euro / USD", price: 1.08, change: "+0.22%", up: true, tag: "FX" },
    { symbol: "GBPUSD", name: "Pound / USD", price: 1.25, change: "-0.10%", up: false, tag: "FX" },
    { symbol: "USDJPY", name: "USD / Yen", price: 155.3, change: "+0.40%", up: true, tag: "FX" },
  ],

  Crypto: [
    { symbol: "BTCUSD", name: "Bitcoin", price: 62500, change: "+2.1%", up: true, tag: "₿" },
    { symbol: "ETHUSD", name: "Ethereum", price: 3200, change: "+1.5%", up: true, tag: "Ξ" },
    { symbol: "XRPUSD", name: "Ripple", price: 0.55, change: "-0.30%", up: false, tag: "XRP" },
  ],

  Shares: [
    { symbol: "AAPL", name: "Apple Inc", price: 182.3, change: "-0.80%", up: false, tag: "ST" },
    { symbol: "TSLA", name: "Tesla", price: 250.1, change: "+1.10%", up: true, tag: "ST" },
    { symbol: "AMZN", name: "Amazon", price: 135.2, change: "+0.50%", up: true, tag: "ST" },
  ],

  Commodities: [
    { symbol: "USOIL", name: "Crude Oil", price: 78.2, change: "+0.60%", up: true, tag: "CM" },
    { symbol: "NGAS", name: "Natural Gas", price: 2.45, change: "-0.20%", up: false, tag: "CM" },
    { symbol: "CORN", name: "Corn", price: 5.6, change: "+0.15%", up: true, tag: "CM" },
  ],
};

const tabs = Object.keys(initialData);

const MetalsSection = () => {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState("Metals");

  // 🔥 LIVE PRICE UPDATE SYSTEM
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const updated = { ...prev };

        Object.keys(updated).forEach((category) => {
          updated[category] = updated[category].map((item) => {
            const randomChange = (Math.random() * 2 - 1).toFixed(2); // -1% to +1%

            const basePrice = parseFloat(item.price);

            const newPrice = basePrice * (1 + randomChange / 100);

            return {
              ...item,
              price: parseFloat(newPrice.toFixed(2)),
              change: `${randomChange > 0 ? "+" : ""}${randomChange}%`,
              up: randomChange >= 0,
            };
          });
        });

        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleData = data[activeTab].slice(0, 3);

  return (
    <section className="w-full bg-[#f5f6f7] px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

      {/* 🔹 Payment Section */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Secure <span className="text-yellow-600">Methods</span> for Deposits & Withdrawals
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-6 md:mt-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 sm:h-10" />
          <img src="/Visa.png" alt="Visa" className="h-8 sm:h-10 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 sm:h-10" />
        </div>
      </div>

      {/* 🔹 Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 gap-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          {activeTab}
        </h3>

        
      </div>

      {/* 🔹 Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {visibleData.map((item, index) => (
          <div
            key={index}
            className="bg-[#e9ecef] rounded-2xl p-5 sm:p-6 flex justify-between items-center gap-4 shadow-sm hover:shadow-md transition"
          >
            <div className="w-full">

              {/* Tag + Name */}
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.symbol}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.name}
                  </p>
                </div>
              </div>

              {/* Price */}
              <a
                href={`https://www.tradingview.com/symbols/${item.symbol}/`}
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {item.price}
                </h2>
              </a>

              {/* Change */}
              <p
                className={`text-xs sm:text-sm mt-1 ${
                  item.up ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.up ? "↑" : "↓"} {item.change}
              </p>
            </div>

            {/* Icon */}
            <div className="text-gray-400 text-3xl sm:text-4xl">
              <img
                src="/image.png"
                alt="chart"
                className="w-10 h-10 sm:w-10 sm:h-10 opacity-70"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Tabs */}
      <div className="mt-10 flex justify-start gap-3 overflow-x-auto pb-2 sm:justify-center md:mt-12 md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-green-800 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>
    </section>
  );
};

export default MetalsSection;
