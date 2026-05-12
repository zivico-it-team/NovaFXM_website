import React, { useEffect, useRef, useState } from "react";

const tabs = ["Metals", "Forex", "Crypto", "Shares", "Commodities"];

const MARKET_DATA = {
  Metals: [
    { symbol: "XAUUSD", name: "Gold / US Dollar", tag: "AU", tradingViewSymbol: "OANDA:XAUUSD" },
    { symbol: "XAGUSD", name: "Silver / US Dollar", tag: "AG", tradingViewSymbol: "OANDA:XAGUSD" },
    { symbol: "XPTUSD", name: "Platinum / US Dollar", tag: "PT", tradingViewSymbol: "OANDA:XPTUSD" },
  ],
  Forex: [
    { symbol: "EURUSD", name: "Euro / USD", tag: "FX", tradingViewSymbol: "OANDA:EURUSD" },
    { symbol: "GBPUSD", name: "Pound / USD", tag: "FX", tradingViewSymbol: "OANDA:GBPUSD" },
    { symbol: "USDJPY", name: "USD / Yen", tag: "FX", tradingViewSymbol: "OANDA:USDJPY" },
  ],
  Crypto: [
    { symbol: "BTCUSD", name: "Bitcoin", tag: "BTC", tradingViewSymbol: "BINANCE:BTCUSDT" },
    { symbol: "ETHUSD", name: "Ethereum", tag: "ETH", tradingViewSymbol: "BINANCE:ETHUSDT" },
    { symbol: "XRPUSD", name: "Ripple", tag: "XRP", tradingViewSymbol: "BINANCE:XRPUSDT" },
  ],
  Shares: [
    { symbol: "AAPL", name: "Apple Inc", tag: "ST", tradingViewSymbol: "NASDAQ:AAPL" },
    { symbol: "TSLA", name: "Tesla", tag: "ST", tradingViewSymbol: "NASDAQ:TSLA" },
    { symbol: "AMZN", name: "Amazon", tag: "ST", tradingViewSymbol: "NASDAQ:AMZN" },
  ],
  Commodities: [
    { symbol: "USOIL", name: "Crude Oil", tag: "CM", tradingViewSymbol: "NYMEX:CL1!" },
    { symbol: "NGAS", name: "Natural Gas", tag: "CM", tradingViewSymbol: "NYMEX:NG1!" },
    { symbol: "CORN", name: "Corn", tag: "CM", tradingViewSymbol: "CBOT:ZC1!" },
  ],
};

const TradingViewQuote = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      isTransparent: true,
      colorTheme: "light",
      locale: "en",
    });

    containerRef.current.appendChild(widget);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbol]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container min-h-[74px] w-full overflow-hidden"
    />
  );
};

const Methords = () => {
  const [activeTab, setActiveTab] = useState("Metals");

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setActiveTab((currentTab) => {
        const nextIndex = (tabs.indexOf(currentTab) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000);

    return () => clearInterval(autoPlayInterval);
  }, []);

  const visibleData = MARKET_DATA[activeTab] || [];

  return (
    <section className="w-full bg-[#f5f6f7] px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Secure <span className="text-yellow-600">Methods</span> for Deposits & Withdrawals
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/Visa.png"
              alt="Visa"
              className="h-7 w-auto object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {activeTab}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {visibleData.map((item) => (
            <div
              key={item.symbol}
              className="relative bg-[#f8f9fa] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

              <div className="w-full min-w-0">
                <TradingViewQuote symbol={item.tradingViewSymbol} />

                <a
                  href={`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(
                    item.tradingViewSymbol
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-yellow-700 hover:text-yellow-800"
                >
                  Open chart
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 md:mt-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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

export default Methords;
