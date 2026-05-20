import React, { useEffect, useRef, useState } from "react";
import { Landmark } from "lucide-react";

const tabs = ["Metals", "Forex", "Crypto", "Indices", "Energies"];

const PAYMENT_METHODS = [
  { name: "UPI", type: "upi" },
  { name: "Google Pay", type: "gpay" },
  { name: "PhonePe", type: "phonepe" },
  { name: "RuPay", type: "rupay" },
  { name: "Visa", type: "image", src: "/Visa.png", imageClass: "h-8" },
  {
    name: "Mastercard",
    type: "image",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    imageClass: "h-8",
  },
  { name: "Net Banking", type: "icon", icon: Landmark, color: "text-[#0b2545]" },
  { name: "IMPS", type: "imps" },
  { name: "NEFT", type: "neft" },
  { name: "RTGS", type: "rtgs" },
  { name: "Bank Transfer", type: "bank-transfer" },
  { name: "USDT", type: "usdt" },
  { name: "Bitcoin", type: "bitcoin" },
  { name: "Ethereum", type: "ethereum" },
  { name: "TRC20", type: "tron" },
  { name: "ERC20", type: "erc20" },
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
        className={`${method.imageClass} max-w-[86px] object-contain`}
      />
    );
  }

  if (method.type === "upi") {
    return (
      <div className="relative pr-4 text-2xl font-extrabold italic tracking-tighter text-gray-600">
        UPI
        <span className="absolute -right-1 top-1 h-7 w-4 skew-x-[-18deg] bg-orange-500" />
        <span className="absolute right-1 top-1 h-7 w-4 skew-x-[-18deg] bg-emerald-600" />
      </div>
    );
  }

  if (method.type === "gpay") {
    return (
      <div className="flex items-center gap-1 text-xl font-medium text-gray-700">
        <span className="font-bold text-blue-600">G</span>
        <span>Pay</span>
      </div>
    );
  }

  if (method.type === "phonepe") {
    return (
      <div className="flex flex-col items-center gap-1">
        <svg className="h-11 w-14" viewBox="0 0 64 54" aria-hidden="true">
          <circle cx="32" cy="20" r="18" fill="#5f259f" />
          <path
            d="M24 12h15M25 19h14M32 12v25M25 19c0 10 5 16 13 16"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.2"
          />
          <text
            x="32"
            y="51"
            fill="#5f259f"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="12"
            fontWeight="800"
            textAnchor="middle"
          >
            PhonePe
          </text>
        </svg>
      </div>
    );
  }

  if (method.type === "rupay") {
    return (
      <div className="relative pr-3 text-2xl font-extrabold italic tracking-tighter text-blue-900">
        RuPay
        <span className="absolute -right-2 top-1 h-6 w-3 skew-x-[-18deg] bg-orange-500" />
        <span className="absolute right-0 top-1 h-6 w-3 skew-x-[-18deg] bg-emerald-600" />
      </div>
    );
  }

  if (method.type === "imps") {
    return (
      <div className="relative pr-3 text-xl font-extrabold italic tracking-tighter text-gray-600">
        IMPS
        <span className="absolute -right-2 top-1 h-5 w-3 skew-x-[-18deg] bg-orange-500" />
        <span className="absolute right-0 top-1 h-5 w-3 skew-x-[-18deg] bg-emerald-600" />
      </div>
    );
  }

  if (method.type === "neft") {
    return (
      <div className="text-center leading-none">
        <div className="text-2xl font-extrabold italic tracking-tight text-emerald-700">NEFT</div>
        <div className="mt-1 text-[7px] font-semibold text-gray-800">NATIONAL ELECTRONIC</div>
        <div className="text-[7px] font-semibold text-gray-800">FUNDS TRANSFER</div>
      </div>
    );
  }

  if (method.type === "rtgs") {
    return (
      <div className="text-center leading-none">
        <div className="text-2xl font-extrabold italic tracking-tight text-blue-800">RTGS</div>
        <div className="mt-1 text-[7px] font-semibold text-gray-800">REAL TIME GROSS</div>
        <div className="text-[7px] font-semibold text-gray-800">SETTLEMENT</div>
      </div>
    );
  }

  if (method.type === "bank-transfer") {
    return (
      <svg className="h-12 w-16" viewBox="0 0 82 56" aria-hidden="true">
        <path
          d="M22 17 35 25H9L22 17ZM12 28h20v3H12v-3ZM14 33h4v9h-4v-9ZM21 33h4v9h-4v-9ZM28 33h4v9h-4v-9ZM10 44h24v4H10v-4Z"
          fill="#0b2545"
        />
        <path
          d="M58 17 71 25H45L58 17ZM48 28h20v3H48v-3ZM50 33h4v9h-4v-9ZM57 33h4v9h-4v-9ZM64 33h4v9h-4v-9ZM46 44h24v4H46v-4Z"
          fill="#0b2545"
        />
        <path
          d="M27 13c10-9 29-8 39 2"
          fill="none"
          stroke="#0b2545"
          strokeLinecap="round"
          strokeWidth="3.5"
        />
        <path d="M66 15 63 6l-8 6 11 3Z" fill="#0b2545" />
        <path
          d="M55 51c-10 7-28 6-39-3"
          fill="none"
          stroke="#0b2545"
          strokeLinecap="round"
          strokeWidth="3.5"
        />
        <path d="M16 48 19 56l8-6-11-2Z" fill="#0b2545" />
      </svg>
    );
  }

  if (method.type === "usdt") {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-500 text-2xl font-extrabold text-white [clip-path:polygon(50%_0,100%_24%,84%_100%,16%_100%,0_24%)]">
        T
      </div>
    );
  }

  if (method.type === "bitcoin") {
    return (
      <svg className="h-11 w-11" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="#f7931a" />
        <text
          x="24"
          y="34"
          fill="#fff"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30"
          fontWeight="800"
          textAnchor="middle"
          transform="rotate(12 24 24)"
        >
          &#8383;
        </text>
      </svg>
    );
  }

  if (method.type === "ethereum") {
    return (
      <div className="relative h-11 w-8">
        <span className="absolute left-0 top-0 h-7 w-8 bg-gradient-to-b from-gray-500 to-black [clip-path:polygon(50%_0,100%_100%,50%_76%,0_100%)]" />
        <span className="absolute bottom-0 left-0 h-5 w-8 bg-gradient-to-b from-gray-400 to-gray-800 [clip-path:polygon(0_0,50%_26%,100%_0,50%_100%)]" />
      </div>
    );
  }

  if (method.type === "erc20") {
    return (
      <div className="relative flex h-11 w-11 items-center justify-center">
        <span className="absolute h-9 w-7 border-2 border-gray-800 bg-gradient-to-b from-white to-gray-200 [clip-path:polygon(50%_0,100%_58%,50%_100%,0_58%)]" />
        <span className="relative text-[9px] font-extrabold tracking-tight text-gray-900">
          ERC
        </span>
      </div>
    );
  }

  if (method.type === "tron") {
    return (
      <svg className="h-11 w-11" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 7l33 10-19 25L8 7zm0 0 14 35m19-25-19 25M8 7l14 10 19 0" fill="none" stroke="#e50914" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (method.type === "icon") {
    const Icon = method.icon;
    return <Icon className={`h-9 w-9 ${method.color}`} strokeWidth={1.8} />;
  }

  return (
    <span className={`text-2xl font-extrabold italic tracking-tight ${method.color}`}>
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

          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-4 gap-x-4 gap-y-5 md:grid-cols-8">
            {PAYMENT_METHODS.map((method) => (
              <a
                key={method.name}
                href="/deposit"
                aria-label={`View ${method.name} deposit and withdrawal details`}
                className="group flex min-h-[74px] flex-col items-center justify-center gap-2 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-11 items-center justify-center transition duration-300 group-hover:scale-105">
                  <PaymentLogo method={method} />
                </div>
                <span className="text-[11px] font-medium leading-tight text-gray-900 sm:text-xs">
                  {method.name}
                </span>
              </a>
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
