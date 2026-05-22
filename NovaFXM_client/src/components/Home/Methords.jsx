import React, { useEffect, useRef, useState } from "react";

const tabs = ["Metals", "Forex", "Crypto", "Indices", "Energies"];

const PAYMENT_METHODS = [
  {
    name: "UPI",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/UPI-Logo-vector.svg",
    imageClass: "h-5 sm:h-6",
  },
  {
    name: "Google Pay",
    src: "/GPAY.png",
    imageClass: "h-12 sm:h-14",
  },
  {
    name: "PhonePe",
    src: "https://cdn.simpleicons.org/phonepe/5F259F",
    imageClass: "h-9 sm:h-10",
  },
  {
    name: "RuPay",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/RuPay.svg",
    imageClass: "h-7 sm:h-8",
  },
  {
    name: "Visa",
    src: "https://static.vecteezy.com/system/resources/previews/020/975/570/large_2x/visa-logo-visa-icon-transparent-free-png.png",
    imageClass: "h-8 sm:h-9",
  },
  {
    name: "Mastercard",
    src: "https://www.pngmart.com/files/22/Mastercard-Logo-PNG-HD-Isolated.png",
    imageClass: "h-9 sm:h-10",
  },
  {
    name: "Net Banking",
    src: "/NetBanking.png",
    imageClass: "h-9 sm:h-10",
  },
  {
    name: "IMPS",
    src: "IMPS.png",
    imageClass: "h-8 sm:h-9",
  },
  {
    name: "NEFT",
    src: "/NEFT.png",
    imageClass: "h-12 sm:h-14",
  },
  {
    name: "RTGS",
    src: "/RTGS.png",
    imageClass: "h-12 sm:h-14",
  },
  {
    name: "Bank Transfer",
    src: "/Banktransfer.png",
    imageClass: "h-12 sm:h-14",
  },
  {
    name: "USDT",
    src: "https://cdn.simpleicons.org/tether/26A17B",
    imageClass: "h-10 sm:h-11",
  },
  {
    name: "Bitcoin",
    src: "https://cdn.simpleicons.org/bitcoin/F7931A",
    imageClass: "h-10 sm:h-11",
  },
  {
    name: "Ethereum",
    src: "https://cdn.simpleicons.org/ethereum/3C3C3D",
    imageClass: "h-10 sm:h-11",
  },
  {
    name: "TRC20",
    src: "/TRC20.png",
    imageClass: "h-10 sm:h-11",
  },
  {
    name: "ERC20",
    src: "https://cdn.simpleicons.org/ethereum/3C3C3D",
    imageClass: "h-10 sm:h-11",
  },
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
  return (
    <img
      src={method.src}
      alt={method.name}
      className={`${method.imageClass} max-w-[76px] object-contain sm:max-w-[92px]`}
      loading="lazy"
    />
  );
};

const Methords = () => {
  const [activeTab, setActiveTab] = useState("Metals");
  const reversedPaymentMethods = [...PAYMENT_METHODS].reverse();

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
    <section className="w-full bg-white px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 md:pb-12 md:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h2 className="px-2 pb-2 text-xl font-semibold text-black sm:text-2xl md:text-3xl">
            Secure <span className="text-[#D4AF37]">Methods</span> for Deposits & Withdrawals
          </h2>

          <div className="methods-slider mx-auto mt-7 max-w-6xl overflow-hidden sm:mt-8 md:mt-10">
            <div className="methods-slider-track flex w-max items-center gap-3 sm:gap-4">
              {[...PAYMENT_METHODS, ...PAYMENT_METHODS].map((method, index) => (
                <a
                  key={`${method.name}-${index}`}
                  href="/deposit"
                  aria-label={`View ${method.name} deposit and withdrawal details`}
                  className="group flex min-h-[64px] w-[112px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/80 px-3 py-2 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[76px] sm:w-[136px] sm:gap-2"
                >
                  <div className="flex h-10 items-center justify-center transition duration-300 group-hover:scale-105 sm:h-11">
                    <PaymentLogo method={method} />
                  </div>
                  <span className="text-[10px] font-medium leading-tight text-gray-900 sm:text-xs">
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="methods-slider mx-auto mt-5 max-w-6xl overflow-hidden sm:mt-6">
            <div className="methods-slider-track methods-slider-track-reverse flex w-max items-center gap-3 sm:gap-4">
              {[...reversedPaymentMethods, ...reversedPaymentMethods].map((method, index) => (
                <a
                  key={`${method.name}-reverse-${index}`}
                  href="/deposit"
                  aria-label={`View ${method.name} deposit and withdrawal details`}
                  className="group flex min-h-[64px] w-[112px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/80 px-3 py-2 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[76px] sm:w-[136px] sm:gap-2"
                >
                  <div className="flex h-10 items-center justify-center transition duration-300 group-hover:scale-105 sm:h-11">
                    <PaymentLogo method={method} />
                  </div>
                  <span className="text-[10px] font-medium leading-tight text-gray-900 sm:text-xs">
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-black px-4 py-8 shadow-xl sm:px-6 sm:py-10 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_68%)]"></div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg font-bold text-white sm:text-2xl">
                {activeTab}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {visibleData.map((item) => (
                <div
                  key={item.symbol}
                  className="relative flex flex-col items-start justify-between gap-3 overflow-hidden rounded-xl bg-white/95 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg sm:flex-row sm:items-center sm:p-6 md:rounded-2xl"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

                  <div className="relative z-10 w-full min-w-0">
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

            <div className="mt-6 flex flex-col items-center gap-2 pb-2 sm:hidden">
              <div className="flex justify-center gap-2">
                {tabs.slice(0, 3).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition-all duration-300 hover:scale-105 ${
                      activeTab === tab
                        ? "bg-[#014421] text-white shadow-lg scale-105"
                        : "bg-white/85 text-gray-700 hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-2">
                {tabs.slice(3).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition-all duration-300 hover:scale-105 ${
                      activeTab === tab
                        ? "bg-[#014421] text-white shadow-lg scale-105"
                        : "bg-white/85 text-gray-700 hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 hidden justify-center gap-3 overflow-x-auto pb-2 sm:flex md:mt-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-110 ${
                    activeTab === tab
                      ? "bg-[#014421] text-white shadow-lg scale-105"
                      : "bg-white/85 text-gray-700 hover:bg-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methords;
