import React, { useEffect, useMemo, useState } from "react";
import { ChartNoAxesCombined, Clock3, Landmark, SunMedium, Torus } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const exchangeIcons = [Landmark, ChartNoAxesCombined, Clock3, Torus];

const stocks = [
  {
    label: "Apple",
    name: "Apple Inc",
    symbol: "AAPL",
    color: "#16a34a",
    price: 193.42,
    change: "+2.05%",
  },
  {
    label: "Google",
    name: "Alphabet Inc",
    symbol: "GOOGL",
    color: "#2563eb",
    price: 177.31,
    change: "+1.23%",
  },
  {
    label: "Microsoft",
    name: "Microsoft Corp",
    symbol: "MSFT",
    color: "#7c3aed",
    price: 429.18,
    change: "+1.11%",
  },
];

const timeRanges = ["1D", "1W", "1M", "1Y", "All"];

const createStockData = (basePrice) => {
  let value = basePrice;

  return Array.from({ length: 42 }, (_, index) => {
    const wave = Math.sin(index * 0.48) * 1.25 + Math.cos(index * 0.22) * 0.85;
    const movement = (index % 4 === 0 ? 0.9 : -0.28) + wave * 0.35;
    value = Number((value + movement).toFixed(2));

    return {
      time: index % 7 === 0 ? `${9 + Math.floor(index / 7)}:00` : "",
      price: value,
    };
  });
};

const LiveStockChart = () => {
  const [activeStock, setActiveStock] = useState(stocks[0]);
  const [activeRange, setActiveRange] = useState("1D");
  const [chartData, setChartData] = useState(() => createStockData(stocks[0].price));

  useEffect(() => {
    setChartData(createStockData(activeStock.price));
  }, [activeStock]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setChartData((data) => {
        const lastPrice = data[data.length - 1]?.price ?? activeStock.price;
        const nextPrice = Number((lastPrice + (Math.random() - 0.42) * 1.35).toFixed(2));
        const nextPoint = {
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          price: nextPrice,
        };

        return [...data.slice(1), nextPoint];
      });
    }, 1800);

    return () => window.clearInterval(interval);
  }, [activeStock.price]);

  const latestPrice = chartData[chartData.length - 1]?.price ?? activeStock.price;
  const chartDomain = useMemo(() => {
    const values = chartData.map((point) => point.price);
    return [Math.floor(Math.min(...values) - 2), Math.ceil(Math.max(...values) + 2)];
  }, [chartData]);

  return (
    <div className="w-full border border-slate-200 bg-white px-3 py-4 shadow-[0_12px_34px_rgba(15,23,42,0.06)] sm:px-5 sm:py-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {stocks.map((stock) => (
            <button
              key={stock.symbol}
              type="button"
              onClick={() => setActiveStock(stock)}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
                activeStock.symbol === stock.symbol
                  ? "bg-slate-950 text-white"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {stock.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Live
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#11161c] text-xl font-bold text-white">
            {activeStock.label.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-black">{activeStock.name}</h3>
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <SunMedium className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-end gap-2">
              <span className="text-3xl font-bold tracking-normal text-black">
                ${latestPrice.toFixed(2)}
              </span>
              <span className="mb-1 text-sm font-bold text-emerald-700">{activeStock.change}</span>
              <span className="mb-1 text-xs text-slate-500">{activeRange}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => setActiveRange(range)}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
                activeRange === range ? "bg-green-700 text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 h-[360px] w-full sm:h-[430px] lg:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 12, right: 10, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="stockGraphFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={activeStock.color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={activeStock.color} stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#eef2f7" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              minTickGap={18}
              tick={{ fill: "#64748b", fontSize: 11 }}
            />
            <YAxis
              orientation="right"
              domain={chartDomain}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 11 }}
              width={46}
            />
            <Tooltip
              formatter={(value) => [`$${Number(value).toFixed(2)}`, activeStock.symbol]}
              labelFormatter={(label) => label || "Live price"}
              contentStyle={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke={activeStock.color}
              strokeWidth={3}
              fill="url(#stockGraphFill)"
              dot={false}
              activeDot={{ r: 5, fill: activeStock.color, stroke: "#fff", strokeWidth: 2 }}
              isAnimationActive
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Stock = () => {
  return (
    <div className="bg-[#f5f5f5] font-sans">

      
      {/* ================= FULL SCREEN HERO ================= */}
<section className="stock-hero relative h-[72vh] min-h-[520px] w-full overflow-hidden sm:h-[82vh] lg:h-screen">

  {/* Background Image */}
  <img
    src="/Stock1.png"
    alt="Stock Hero"
    className="stock-hero-image absolute inset-0 w-full h-full object-cover"
  />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
    
    <h1 className="stock-hero-title text-4xl font-bold text-[#014421] sm:text-5xl lg:text-6xl">
      Stocks
    </h1>

    <p className="stock-hero-subtitle mt-3 max-w-[22rem] text-base font-semibold text-slate-950 sm:mt-4 sm:max-w-none sm:text-xl">
      Start Stock Trading Today with NOVAFXM
    </p>

  </div>
</section>


      {/* ================= INTRO ================= */}
      <section className="grid gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:gap-10 lg:px-10 lg:py-16">
        <div>
          <p className="text-yellow-600 text-sm">
            Ever Dreamed Of Investing In Your Favourite Companies?
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
            Start Stock Trading Today <br />
            <span className="text-green-700">with Markets</span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Unlock the potential of stock trading and build your portfolio by investing in the world’s leading companies. Keep in mind, all dividends are subject to adjustment—when a company pays out dividends, the stock price will reflect a decrease to account for the  payout.
          </p>
        </div>

        <img
  src="/Stock2.jpeg"
  alt="chart"
  className="h-auto w-full rounded-2xl object-cover shadow-lg sm:h-[260px] md:max-w-[420px] md:justify-self-end"
/>
      </section>


      {/* ================= LIVE CHART ================= */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <LiveStockChart />
      </section>


      {/* ================= WHAT ARE STOCKS ================= */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="bg-[#f0eee9] p-6 rounded-xl border-b-4 border-yellow-600">
          <h3 className="text-green-800 text-lg font-semibold">
            What are Stocks?
          </h3>
          <p className="text-gray-600 mt-2">
            A stock represents a unit of ownership in a company. By purchasing shares, you become a part-owner. If the company thrives, its stock price rises,offering you potential gains. If the company underperforms, the stock price may fall..
          </p>
        </div>
      </section>


      {/* ================= EXCHANGES ================= */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <h3 className="mb-6 text-lg font-semibold sm:text-xl">
          Where Are <span className="text-green-700">Stocks Traded?</span>
        </h3>

        <div className="grid gap-5 md:grid-cols-2 md:gap-10">
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
              desc: "Asia’s largest exchange, home to companies like Toyota and Sony.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative min-h-[165px] overflow-hidden rounded-lg border-b-4 border-green-700 bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-8"
            >
              <div className="flex gap-4 sm:gap-7">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  {React.createElement(exchangeIcons[i], {
                    className: "h-7 w-7",
                    strokeWidth: 2.4,
                  })}
                </div>

                <div className="pt-2">
                  <h4 className="max-w-[260px] text-sm font-bold leading-tight text-slate-950">
                    {item.name}
                  </h4>
                  <div className="mt-4 h-[3px] w-10 rounded-full bg-green-700"></div>
                  <p className="mt-5 max-w-[285px] text-xs leading-relaxed text-slate-700">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-7 left-8 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className="h-2 w-2 rounded-full bg-green-100"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= WHY TRADE ================= */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="bg-green-900 text-white p-6 rounded-xl">
          <h3 className="text-yellow-400 font-semibold">
            Why Trade Stocks?
          </h3>
          <p className="mt-2 text-sm">
            Stock trading offers access to a broad range of companies across various sectors, allowing you to diversify your investment strategy and manage risk. With the right stock trading approach, you can maximize returns and build wealth over time..
          </p>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="px-4 py-6 pb-16 sm:px-6 lg:px-10">
        <div className="bg-[#f0eee9] p-6 rounded-xl border-b-4 border-yellow-600">
          <h3 className="text-green-800 font-semibold">
            How Does Stock Trading Work?
          </h3>
          <p className="text-gray-600 mt-2">
            Stock trading involves buying and selling shares of companies  on exchanges. You can also trade stocks CFDs (Contracts for Difference), which allow you to speculate on price movements with leverage. Many traders diversify their portfolios by investing in a variety of sectors, balancing risk across industries and companies. 
          </p>
        </div>
      </section>

    </div>
  );
};

export default Stock;
