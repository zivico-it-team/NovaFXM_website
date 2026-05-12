import React, { useState, useEffect } from "react";

// === 1. GET YOUR FREE API KEY ===
// Go to https://finnhub.io/ and sign up (free tier gives 60 calls/minute)
const FINNHUB_API_KEY = "YOUR_FREE_API_KEY_FROM_FINNHUB"; // <-- REPLACE THIS

// Initial real market data (fallback values)
const INITIAL_MARKET_DATA = {
  Metals: [
    { symbol: "XAUUSD", name: "Gold / US Dollar", price: 4743.68, change: "+0.59%", up: true, tag: "AU", finnhubSymbol: "OANDA:XAUUSD" },
    { symbol: "XAGUSD", name: "Silver / US Dollar", price: 32.15, change: "-0.12%", up: false, tag: "AG", finnhubSymbol: "OANDA:XAGUSD" },
    { symbol: "XPTUSD", name: "Platinum / US Dollar", price: 987.50, change: "+0.45%", up: true, tag: "PT", finnhubSymbol: "OANDA:XPTUSD" },
  ],
  Forex: [
    { symbol: "EURUSD", name: "Euro / USD", price: 1.1786, change: "+0.01%", up: true, tag: "FX", finnhubSymbol: "OANDA:EURUSD" },
    { symbol: "GBPUSD", name: "Pound / USD", price: 1.2850, change: "-0.08%", up: false, tag: "FX", finnhubSymbol: "OANDA:GBPUSD" },
    { symbol: "USDJPY", name: "USD / Yen", price: 149.85, change: "+0.15%", up: true, tag: "FX", finnhubSymbol: "OANDA:USDJPY" },
  ],
  Crypto: [
    { symbol: "BTCUSD", name: "Bitcoin", price: 68500, change: "+2.10%", up: true, tag: "₿", finnhubSymbol: "BINANCE:BTCUSDT" },
    { symbol: "ETHUSD", name: "Ethereum", price: 3420, change: "+1.50%", up: true, tag: "Ξ", finnhubSymbol: "BINANCE:ETHUSDT" },
    { symbol: "XRPUSD", name: "Ripple", price: 0.62, change: "-0.30%", up: false, tag: "XRP", finnhubSymbol: "BINANCE:XRPUSDT" },
  ],
  Shares: [
    { symbol: "AAPL", name: "Apple Inc", price: 182.50, change: "-0.80%", up: false, tag: "ST", finnhubSymbol: "AAPL" },
    { symbol: "TSLA", name: "Tesla", price: 250.10, change: "+1.10%", up: true, tag: "ST", finnhubSymbol: "TSLA" },
    { symbol: "AMZN", name: "Amazon", price: 135.20, change: "+0.50%", up: true, tag: "ST", finnhubSymbol: "AMZN" },
  ],
  Commodities: [
    { symbol: "USOIL", name: "Crude Oil", price: 86.75, change: "+1.51%", up: true, tag: "CM", finnhubSymbol: "CME:CL1!" },
    { symbol: "NGAS", name: "Natural Gas", price: 2.86, change: "+3.88%", up: true, tag: "CM", finnhubSymbol: "CME:NG1!" },
    { symbol: "CORN", name: "Corn", price: 5.85, change: "+0.15%", up: true, tag: "CM", finnhubSymbol: "CBOT:ZC1!" },
  ],
};

const tabs = ["Metals", "Forex", "Crypto", "Shares", "Commodities"];

const MetalsSection = () => {
  const [marketData, setMarketData] = useState(INITIAL_MARKET_DATA);
  const [activeTab, setActiveTab] = useState("Metals");
  const [tabIndex, setTabIndex] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  // Fetch real-time price for a single symbol from Finnhub
  const fetchPrice = async (finnhubSymbol) => {
    if (!FINNHUB_API_KEY || FINNHUB_API_KEY === "YOUR_FREE_API_KEY_FROM_FINNHUB") {
      return null;
    }

    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${finnhubSymbol}&token=${FINNHUB_API_KEY}`
      );
      const data = await response.json();
      
      if (data && data.c && typeof data.c === 'number') {
        return {
          price: data.c,
          changePercent: data.dp || 0,
        };
      }
      return null;
    } catch (error) {
      console.error(`Error fetching ${finnhubSymbol}:`, error);
      return null;
    }
  };

  // Update all prices
  const updateAllPrices = async () => {
    setIsLoading(true);
    
    const updatedData = { ...marketData };
    
    for (const category of tabs) {
      for (let i = 0; i < updatedData[category].length; i++) {
        const item = updatedData[category][i];
        const liveData = await fetchPrice(item.finnhubSymbol);
        
        if (liveData && liveData.price > 0) {
          updatedData[category][i] = {
            ...item,
            price: parseFloat(liveData.price.toFixed(item.symbol === "USDJPY" ? 3 : 2)),
            change: `${liveData.changePercent > 0 ? "+" : ""}${liveData.changePercent.toFixed(2)}%`,
            up: liveData.changePercent >= 0,
          };
        }
      }
    }
    
    setMarketData(updatedData);
    setLastUpdate(new Date());
    setIsLoading(false);
  };

  // Initial fetch and set up polling
  useEffect(() => {
    updateAllPrices();
    const interval = setInterval(updateAllPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle tabs
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setTabIndex((prev) => (prev + 1) % tabs.length);
      setActiveTab(tabs[(tabIndex + 1) % tabs.length]);
    }, 5000);
    
    return () => clearInterval(autoPlayInterval);
  }, [tabIndex]);

  const visibleData = marketData[activeTab] || [];

  return (
    <section className="w-full bg-[#f5f6f7] px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Payment Section */}
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

        {/* Header with Status */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            {activeTab}
          </h3>
          
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50">
              <span className="text-green-600 font-semibold">
                {isLoading ? "⟳ Updating..." : "● Live Data"}
              </span>
            </div>
            <div className="text-gray-500">
              Last update: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {visibleData.map((item, index) => (
            <div
              key={item.symbol}
              className="relative bg-[#f8f9fa] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              {/* Gold Border Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-b-2xl"></div>
              
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-yellow-600 transition-colors">
                    {item.price && typeof item.price === 'number' 
                      ? item.symbol === "USDJPY" 
                        ? item.price.toFixed(3) 
                        : item.symbol.includes("BTC") || item.symbol.includes("ETH")
                          ? item.price.toLocaleString()
                          : item.price.toFixed(2)
                      : '0.00'}
                  </h2>
                </a>

                {/* Change */}
                <p
                  className={`text-xs sm:text-sm mt-1 font-semibold transition-all duration-500 ${
                    item.up ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.up ? "↑" : "↓"} {item.change}
                </p>
              </div>

              {/* Icon */}
              <div className="text-gray-400 text-3xl sm:text-4xl flex-shrink-0">
                <img
                  src="/image.png"
                  alt="chart"
                  className="w-10 h-10 sm:w-12 sm:h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 md:mt-12">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setTabIndex(idx);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-110 ${
                activeTab === tab
                  ? "bg-green-800 text-white shadow-lg scale-105"
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