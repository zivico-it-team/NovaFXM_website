// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

 useEffect(() => {
  if (!container.current) return;

  // Prevent duplicate widget
  container.current.innerHTML = "";

  const widget = document.createElement("div");
  widget.className = "tradingview-widget-container__widget";
  widget.style.height = "calc(100% - 32px)";
  widget.style.width = "100%";

  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";

  script.type = "text/javascript";
  script.async = true;

  script.innerHTML = `
  {
    "lineWidth": 2,
    "lineType": 0,
    "chartType": "area",
    "backgroundColor": "#ffffff",
    "colorTheme": "light",
    "locale": "en",
    "autosize": true,
    "width": "100%",
    "height": "100%",
    "symbols": [
      ["Apple","NASDAQ:AAPL|1D"],
      ["Google","NASDAQ:GOOGL|1D"],
      ["Microsoft","NASDAQ:MSFT|1D"]
    ]
  }`;

  widget.appendChild(script);
  container.current.appendChild(widget);

  return () => {
    if (container.current) {
      container.current.innerHTML = "";
    }
  };
}, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Apple</span>
        </a>
        <span className="comma">,</span>&nbsp;
        <a href="https://www.tradingview.com/symbols/NASDAQ-GOOGL/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Google</span>
        </a>
        <span className="comma">,</span>
        <span className="and">&nbsp;and&nbsp;</span>
        <a href="https://www.tradingview.com/symbols/NASDAQ-MSFT/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Microsoft stock price</span>
        </a>
        <span className="trademark">&nbsp;by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);