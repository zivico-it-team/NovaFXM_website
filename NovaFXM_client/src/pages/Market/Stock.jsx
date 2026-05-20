
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChartNoAxesCombined, Clock3, Landmark, SunMedium, Torus } from "lucide-react";
import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[360px] sm:h-[420px] lg:h-[500px]">
      <div ref={containerRef} className="tradingview-widget-container w-full h-full" />
    </div>
  );
};

const exchangeIcons = [Landmark, ChartNoAxesCombined, Clock3, Torus];

const companies = [
  { label: "Apple", name: "Apple Inc", symbol: "AAPL", price: "293.32", change: "+5.88", percent: "+2.05%" },
  { label: "Google", name: "Alphabet Inc", symbol: "GOOGL", price: "177.41", change: "+2.16", percent: "+1.23%" },
  { label: "Microsoft", name: "Microsoft Corp", symbol: "MSFT", price: "429.18", change: "+4.72", percent: "+1.11%" },
];

const timeframes = ["1D", "1M", "3M", "1Y", "5Y", "All"];

const buildChartData = () => {
  const labelMap = {
    0: "19.",
    24: "21:00",
    48: "22:30",
    66: "9",
    76: "01:30",
    95: "03:01",
    116: "11",
    135: "15:00",
    154: "16:30",
    176: "18:00",
  };
  const splitPoint = 82;
  let value = 292.85;

  return Array.from({ length: 188 }).map((_, index) => {
    const activeMove =
      Math.sin(index * 0.36) * 0.18 +
      Math.sin(index * 1.75) * 0.24 +
      Math.sin(index * 3.45) * 0.12 +
      Math.cos(index * 0.11) * 0.08;
    const mutedMove =
      Math.sin(index * 0.24) * 0.16 +
      Math.cos(index * 0.82) * 0.15 +
      Math.sin(index * 2.7) * 0.09 +
      Math.sin(index * 1.31) * 0.08;
    const roughMove =
      (index % 2 === 0 ? 0.11 : -0.13) +
      (index % 5 === 0 ? 0.24 : 0) +
      (index % 7 === 0 ? -0.26 : 0);
    const jump =
      index === 4 ? 1.35 :
      index === 9 ? -0.72 :
      index === 18 ? 0.7 :
      index === 26 ? -1.1 :
      index === 33 ? 0.62 :
      index === 41 ? -0.58 :
      index === 58 ? -0.45 :
      index === 72 ? 0.95 :
      index === 89 ? -0.42 :
      index === 101 ? 0.38 :
      index === 115 ? -1.55 :
      index === 128 ? 0.5 :
      index === 151 ? 0.55 :
      index === 168 ? -0.65 :
      0;

    value += (index <= splitPoint ? activeMove : mutedMove) + roughMove + jump * 0.5;
    value = Math.max(291.55, Math.min(294.5, value));
    const roundedValue = Number(value.toFixed(2));

    return {
      label: labelMap[index] ?? "",
      value: roundedValue,
      activeValue: index <= splitPoint ? roundedValue : null,
      mutedValue: index >= splitPoint ? roundedValue : null,
    };
  });
};

const LiveStockChart = () => {
  const [activeCompany, setActiveCompany] = useState(companies[0]);
  const [activeRange, setActiveRange] = useState("1D");
  const [liveData, setLiveData] = useState(() => buildChartData());
  const chartData = useMemo(() => liveData, [liveData]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLiveData((current) =>
        current.map((point, index) => {
          if (index > 82) return point;

          const liveStrength = index === 82 ? 0.11 : 0.025;
          const nextValue = Number((point.value + (Math.random() - 0.48) * liveStrength).toFixed(2));
          return {
            ...point,
            value: nextValue,
            activeValue: nextValue,
            mutedValue: index === 82 ? nextValue : point.mutedValue,
          };
        })
      );
    }, 1200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-full border border-slate-200 bg-white px-3 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.06)] sm:px-5 sm:py-4">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-black">
        {companies.map((company) => (
          <button
            key={company.symbol}
            type="button"
            onClick={() => setActiveCompany(company)}
            className={`rounded-md px-3 py-2 transition ${
              activeCompany.symbol === company.symbol
                ? "bg-slate-50 font-bold shadow-sm ring-1 ring-slate-100"
                : "hover:bg-slate-50"
            }`}
          >
            {company.label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#11161c] text-xl font-bold text-white">
          {activeCompany.label.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-black">{activeCompany.name}</h3>
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
              <SunMedium className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </div>
          <div className="flex flex-wrap items-end gap-2">
            <span className="text-3xl font-bold tracking-normal text-black">{activeCompany.price}</span>
            <span className="mb-1 text-[9px] font-semibold uppercase leading-none text-orange-500">D<br />USD</span>
            <span className="mb-1 text-sm font-bold text-[#008b78]">
              {activeCompany.change} {activeCompany.percent}
            </span>
            <span className="mb-1 text-xs text-[#008b78]">1 day</span>
            <span className="mb-1 flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase text-emerald-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Live
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-black">
        {timeframes.map((range) => (
          <button
            key={range}
            type="button"
            onClick={() => setActiveRange(range)}
            className={`rounded-md px-3 py-2 transition ${
              activeRange === range ? "bg-slate-50 font-bold shadow-sm" : "hover:bg-slate-50"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      <div className="h-[280px] sm:h-[320px] lg:h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 4 }}>
            <defs>
              <linearGradient id="activeChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea58f" stopOpacity={0.26} />
                <stop offset="100%" stopColor="#0ea58f" stopOpacity={0.04} />
              </linearGradient>
              <filter id="activeLineGlow" x="-10%" y="-30%" width="120%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.6" floodColor="#0ea58f" floodOpacity="0.38" />
              </filter>
              <filter id="mutedLineGlow" x="-10%" y="-30%" width="120%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#9ca3af" floodOpacity="0.28" />
              </filter>
            </defs>
            <CartesianGrid stroke="#eef1f4" strokeDasharray="2 2" vertical={false} />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              interval={0}
              minTickGap={8}
              tick={{ fill: "#777", fontSize: 10 }}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              orientation="right"
              domain={[291.5, 294.5]}
              ticks={[291.5, 292, 292.5, 293, 293.5, 294, 294.5]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#777", fontSize: 10 }}
              width={38}
            />
            <Area
              type="linear"
              dataKey="activeValue"
              stroke="none"
              fill="url(#activeChartFill)"
              connectNulls={false}
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="activeValue"
              stroke="#0ea58f"
              strokeWidth={5.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#activeLineGlow)"
              dot={false}
              connectNulls={false}
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="mutedValue"
              stroke="#a8a8a8"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#mutedLineGlow)"
              dot={false}
              connectNulls={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


const Stock = () => {
  return (
    <div className="bg-[#f5f5f5] font-sans">

      {/* ================= FULL SCREEN HERO ================= */}
      <section className="relative flex min-h-[calc(100vh-72px)] w-full items-center justify-center overflow-hidden bg-black px-4 py-16 text-center sm:min-h-[calc(100vh-80px)] sm:px-6 lg:min-h-[calc(100vh-84px)]">
        <div className="absolute inset-0 hero-parallax">
          <img
            src="/Stock1.png"
            alt="Stock Hero"
            className="market-hero-image h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="market-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">

          <h1 className="market-hero-title text-4xl font-bold text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
            Stocks
          </h1>
          <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-white drop-shadow-sm sm:mt-6 md:text-lg md:leading-8">
            Start Stock Trading Today with NOVAFXM
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:items-center md:gap-10 lg:py-16">
        <div>
          <p className="text-sm font-medium text-yellow-600">
            Ever Dreamed Of Investing In Your Favourite Companies?
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Start Stock Trading Today <br />
            <span className="text-green-700">with Markets</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base lg:leading-8">
            Unlock the potential of stock trading and build your portfolio by investing in the world's leading companies. Keep in mind, all dividends are subject to adjustment—when a company pays out dividends, the stock price will reflect a decrease to account for the payout.
          </p>
        </div>
        <img
          src="/Stock2.jpeg"
          alt="chart"
          className="h-auto max-h-[420px] w-full rounded-2xl object-cover shadow-lg md:justify-self-end lg:max-h-[480px]"
        />
      </section>

      {/* ================= TRADINGVIEW MARKET OVERVIEW ================= */}
      <section className="bg-[#f8faf9] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
          <div className="h-[300px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
            <TradingViewWidget />
          </div>
        </div>
      </section>

      {/* ================= WHAT ARE STOCKS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-2xl border-b-4 border-yellow-600 bg-[#f0eee9] p-5 sm:p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-green-800 sm:text-xl">
            What are Stocks?
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            A stock represents a unit of ownership in a company. By purchasing shares, you become a part-owner. If the company thrives, its stock price rises, offering you potential gains. If the company underperforms, the stock price may fall.
          </p>
        </div>
      </section>

      {/* ================= EXCHANGES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
          Where Are <span className="text-green-700">Stocks Traded?</span>
        </h3>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
          {[
            {
              name: "New York Stock Exchange (NYSE)",
              desc: "The largest exchange globally featuring leading companies.",
            },
            {
              name: "NASDAQ",
              desc: "Known for technology-focused companies such as Apple, Microsoft, and more.",
            },
            {
              name: "London Stock Exchange (LSE)",
              desc: "A major exchange in Europe with companies like Shell and HSBC.",
            },
            {
              name: "Tokyo Stock Exchange (TSE)",
              desc: "Asia's largest exchange, home to companies like Toyota and Sony.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative min-h-[165px] overflow-hidden rounded-2xl border-b-4 border-green-700 bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-8"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-16 sm:w-16">
                  {React.createElement(exchangeIcons[i], {
                    className: "h-7 w-7",
                    strokeWidth: 2.4,
                  })}
                </div>
                <div className="pt-2">
                  <h4 className="text-sm font-bold leading-tight text-slate-950 sm:text-base">
                    {item.name}
                  </h4>
                  <div className="mt-4 h-[3px] w-10 rounded-full bg-green-700"></div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-7 left-8 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, dotIndex) => (
                  <span key={dotIndex} className="h-2 w-2 rounded-full bg-green-100" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY TRADE ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-2xl bg-green-900 p-5 text-white sm:p-6 lg:p-8">
          <h3 className="font-semibold text-yellow-400 sm:text-lg">
            Why Trade Stocks?
          </h3>
          <p className="mt-3 text-sm leading-7 sm:text-base">
            Stock trading offers access to a broad range of companies across various sectors, allowing you to diversify your investment strategy and manage risk. With the right stock trading approach, you can maximize returns and build wealth over time.
          </p>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-6 pb-16 sm:px-6">
        <div className="rounded-2xl border-b-4 border-yellow-600 bg-[#f0eee9] p-5 sm:p-6 lg:p-8">
          <h3 className="font-semibold text-green-800 sm:text-lg">
            How Does Stock Trading Work?
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Stock trading involves buying and selling shares of companies on exchanges. You can also trade stocks CFDs (Contracts for Difference), which allow you to speculate on price movements with leverage. Many traders diversify their portfolios by investing in a variety of sectors, balancing risk across industries and companies.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Stock;