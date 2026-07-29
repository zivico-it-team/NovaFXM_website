import { useEffect, useRef } from "react";
import { BarChart3, LineChart } from "lucide-react";

const LiveQuote = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    containerRef.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(widget);
    containerRef.current.appendChild(script);
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [symbol]);

  return (
    <div className="relative min-h-[78px] w-full overflow-hidden">
      <div
        ref={containerRef}
        className="tradingview-widget-container min-h-[78px] w-full overflow-hidden"
      />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-20 w-12 bg-[#050505]"
      />
    </div>
  );
};

export default function LiveMarketCards({ title, subtitle, items, Icon = BarChart3 }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-black px-3 py-6 shadow-2xl sm:rounded-[32px] sm:px-6 sm:py-9 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_30%),radial-gradient(circle_at_bottom,rgba(1,68,33,0.25),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4 sm:mb-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] bg-black text-[#F4D35E] sm:h-16 sm:w-16">
            <Icon size={27} strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-1 text-sm text-white/65 sm:text-base">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <article
              key={item.symbol}
              className="group relative min-h-[245px] overflow-hidden rounded-xl border border-[#D4AF37]/80 bg-[#050505] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#F4D35E] hover:shadow-[0_20px_45px_rgba(212,175,55,0.13)]"
            >
              <div className="absolute inset-0 bg-[url('/m2.png')] bg-cover bg-center opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-black/30 to-black/80" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37] bg-black/75 text-[#F4D35E]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 text-right">
                    <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                      {item.symbol}
                    </h3>
                    <p className="mt-1 max-w-full truncate text-xs text-white/65 sm:text-sm">{item.name}</p>
                  </div>
                </div>
                <div className="min-h-[80px]">
                  <LiveQuote symbol={item.tradingViewSymbol} />
                </div>
                <div className="mt-auto flex items-end justify-between gap-3 pt-3">
                  <p className="max-w-[75%] text-[10px] uppercase tracking-wide text-white/45 sm:text-xs">
                    {item.description}
                  </p>
                  <a
                    href={`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(item.tradingViewSymbol)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.name} chart`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D35E] text-black transition hover:scale-110"
                  >
                    <LineChart size={16} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
