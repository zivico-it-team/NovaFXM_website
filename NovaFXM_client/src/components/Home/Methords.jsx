import React, { useEffect, useRef, useState } from "react";
import { Landmark, Repeat2 } from "lucide-react";
import {
  SiBitcoin,
  SiEthereum,
  SiGooglepay,
  SiMastercard,
  SiPhonepe,
  SiTether,
  SiVisa,
} from "react-icons/si";

const tabs = ["Metals", "Forex", "Crypto", "Indices", "Energies"];

const PAYMENT_METHODS = [
  {
    name: "UPI",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/UPI%20logo.svg",
    imageClass: "h-7",
  },
  { name: "Google Pay", type: "brandIcon", icon: SiGooglepay, color: "text-[#4285f4]", size: "text-4xl sm:text-5xl" },
  { name: "PhonePe", type: "brandIcon", icon: SiPhonepe, color: "text-[#5f259f]", size: "text-3xl sm:text-4xl" },
  {
    name: "RuPay",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/RuPay.svg",
    imageClass: "h-7",
  },
  { name: "Visa", type: "brandIcon", icon: SiVisa, color: "text-[#1434cb]", size: "text-4xl sm:text-5xl" },
  { name: "Mastercard", type: "brandIcon", icon: SiMastercard, color: "text-[#eb001b]", size: "text-4xl sm:text-5xl" },
  { name: "Net Banking", type: "icon", icon: Landmark, color: "text-[#0b2545]" },
  { name: "IMPS", type: "icon", icon: Landmark, color: "text-gray-700" },
  { name: "NEFT", type: "icon", icon: Landmark, color: "text-emerald-700" },
  { name: "RTGS", type: "icon", icon: Landmark, color: "text-blue-800" },
  { name: "Bank Transfer", type: "icon", icon: Repeat2, color: "text-[#0b2545]" },
  { name: "USDT", type: "brandIcon", icon: SiTether, color: "text-[#26a17b]", size: "text-3xl sm:text-4xl" },
  { name: "Bitcoin", type: "brandIcon", icon: SiBitcoin, color: "text-[#f7931a]", size: "text-3xl sm:text-4xl" },
  { name: "Ethereum", type: "brandIcon", icon: SiEthereum, color: "text-[#627eea]", size: "text-3xl sm:text-4xl" },
  { name: "TRC20", type: "brandIcon", icon: SiTether, color: "text-red-600", size: "text-3xl sm:text-4xl" },
  { name: "ERC20", type: "brandIcon", icon: SiEthereum, color: "text-gray-700", size: "text-3xl sm:text-4xl" },
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
      className="tradingview-widget-container min-h-[66px] w-full overflow-hidden sm:min-h-[74px]"
    />
  );
};

const PaymentLogo = ({ method }) => {
  if (method.type === "image") {
    return (
      <img
        src={method.src}
        alt={method.name}
        className={`${method.imageClass} max-w-16 object-contain sm:max-w-20`}
      />
    );
  }

  if (method.type === "brandIcon") {
    const Icon = method.icon;
    return (
      <span aria-label={method.name} className={`${method.size} ${method.color}`} title={method.name}>
        <Icon />
      </span>
    );
  }

  if (method.type === "icon") {
    const Icon = method.icon;
    return <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${method.color}`} strokeWidth={1.8} />;
  }

  return null;
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
    <section className="w-full bg-[#f5f6f7] px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-center sm:mb-7 md:mb-9">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Secure <span className="text-yellow-600">Methods</span> for Deposits & Withdrawals
          </h2>

          <div className="mx-auto mt-3 grid max-w-4xl grid-cols-4 gap-x-2 gap-y-2 sm:mt-4 sm:gap-y-4 md:grid-cols-8 lg:gap-x-3">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.name}
                className="group flex min-h-[44px] flex-col items-center justify-center px-0 text-center transition-all duration-300 hover:-translate-y-1 sm:min-h-[56px]"
              >
                <div className="flex h-10 items-center justify-center transition duration-300 group-hover:scale-105 sm:h-12">
                  <PaymentLogo method={method} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <h3 className="text-lg font-bold text-gray-900 sm:text-2xl">
            {activeTab}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {visibleData.map((item) => (
            <div
              key={item.symbol}
              className="relative flex flex-col items-start justify-between gap-3 rounded-xl bg-[#f8f9fa] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg sm:flex-row sm:items-center sm:p-6 md:rounded-2xl"
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

        <div className="mt-6 flex justify-start gap-2 overflow-x-auto pb-2 sm:mt-7 sm:justify-center sm:gap-3 md:mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition-all duration-300 hover:scale-105 sm:px-5 sm:text-sm ${
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
