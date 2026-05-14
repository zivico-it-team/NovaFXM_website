import React, { useEffect, useRef, useState } from "react";
import { Bitcoin, Building2, CircleDollarSign, Landmark, Repeat2 } from "lucide-react";

const tabs = ["Metals", "Forex", "Crypto", "Indices", "Energies"];

const PAYMENT_METHODS = [
  { name: "UPI", type: "text", logo: "UPI", color: "text-gray-700" },
  { name: "Google Pay", type: "gpay" },
  { name: "PhonePe", type: "phonepe" },
  { name: "RuPay", type: "text", logo: "RuPay", color: "text-blue-800" },
  { name: "Visa", type: "image", src: "/Visa.png", imageClass: "h-7" },
  {
    name: "Mastercard",
    type: "image",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    imageClass: "h-8",
  },
  { name: "Net Banking", type: "icon", icon: Landmark, color: "text-[#0b2545]" },
  { name: "IMPS", type: "text", logo: "IMPS", color: "text-gray-700" },
  { name: "NEFT", type: "text", logo: "NEFT", color: "text-emerald-700" },
  { name: "RTGS", type: "text", logo: "RTGS", color: "text-blue-800" },
  { name: "Bank Transfer", type: "icon", icon: Repeat2, color: "text-[#0b2545]" },
  { name: "USDT", type: "icon", icon: CircleDollarSign, color: "text-emerald-600" },
  { name: "Bitcoin", type: "icon", icon: Bitcoin, color: "text-orange-500" },
  { name: "Ethereum", type: "text", logo: "ETH", color: "text-gray-700" },
  { name: "TRC20", type: "text", logo: "TRC20", color: "text-red-600" },
  { name: "ERC20", type: "icon", icon: Building2, color: "text-gray-700" },
];

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
  Indices: [
    { symbol: "US100", name: "Nasdaq 100", tag: "IDX", tradingViewSymbol: "NASDAQ:NDX" },
    { symbol: "US500", name: "S&P 500", tag: "IDX", tradingViewSymbol: "SP:SPX" },
    { symbol: "US30", name: "Dow Jones", tag: "IDX", tradingViewSymbol: "DJ:DJI" },
  ],
  Energies: [
    { symbol: "USOIL", name: "Crude Oil", tag: "EN", tradingViewSymbol: "TVC:USOIL" },
    { symbol: "UKOIL", name: "Brent Crude Oil", tag: "EN", tradingViewSymbol: "TVC:UKOIL" },
    { symbol: "NGAS", name: "Natural Gas", tag: "EN", tradingViewSymbol: "NYMEX:NG1!" },
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

const PaymentLogo = ({ method }) => {
  if (method.type === "image") {
    return (
      <img
        src={method.src}
        alt={method.name}
        className={`${method.imageClass} max-w-16 object-contain`}
      />
    );
  }

  if (method.type === "gpay") {
    return (
      <div className="flex items-center gap-1 text-xl font-semibold text-gray-700">
        <span className="font-bold text-blue-600">G</span>
        <span>Pay</span>
      </div>
    );
  }

  if (method.type === "phonepe") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="flex h-10 w-10 items-center justify-center text-3xl font-bold text-purple-700">
          p
        </div>
        <span className="text-base font-extrabold text-purple-700">PhonePe</span>
      </div>
    );
  }

  if (method.type === "icon") {
    const Icon = method.icon;
    return <Icon className={`h-10 w-10 ${method.color}`} strokeWidth={1.8} />;
  }

  return (
    <span className={`text-xl font-extrabold italic tracking-tight ${method.color}`}>
      {method.logo}
    </span>
  );
};

const Methords = () => {
  const [activeTab, setActiveTab] = useState("Metals");

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;

        if (currentIndex === -1) {
          return tabs[0];
        }

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

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-4 gap-x-2 gap-y-4 md:grid-cols-8 lg:gap-x-3">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.name}
                className="group flex min-h-[56px] flex-col items-center justify-center px-0 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 items-center justify-center transition duration-300 group-hover:scale-105">
                  <PaymentLogo method={method} />
                </div>
              </div>
            ))}
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
                <TradingViewQuote
                  key={`${activeTab}-${item.tradingViewSymbol}`}
                  symbol={item.tradingViewSymbol}
                />

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
