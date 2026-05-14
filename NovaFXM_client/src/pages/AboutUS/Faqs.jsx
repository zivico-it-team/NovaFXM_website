import { useState } from "react";
import heroBg4 from "../../assets/images/plt3.jpg";

const faqs = [
  {
    num: "01",
    question: "What is Forex Trading?",
    answer:
      "Forex trading is the process of buying and selling currencies to profit from changes in their exchange rates. It takes place in a decentralized global market, open 24 hours a day, five days a week.",
  },
  {
    num: "02",
    question: "How Does Forex Trading Work?",
    answer:
      "Forex trading works by simultaneously buying one currency and selling another. Currency pairs like EUR/USD reflect the exchange rate between the two currencies. Traders speculate on whether a currency will rise or fall in value relative to another.",
  },
  {
    num: "03",
    question: "What Are the Major Currency Pairs?",
    answer:
      "The major currency pairs include EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, and USD/CHF. These pairs are the most traded in the forex market and typically have the tightest spreads.",
  },
  {
    num: "04",
    question: "What is Leverage in Forex?",
    answer:
      "Leverage allows traders to control a large position with a relatively small amount of capital. For example, with 1:100 leverage, you can control $10,000 worth of currency with just $100. While leverage can amplify profits, it can also amplify losses.",
  },
  {
    num: "05",
    question: "How Do I Start Forex Trading?",
    answer:
      "To start forex trading, open a trading account with a regulated broker, complete identity verification, deposit funds, download a trading platform, and begin with a demo account to practice before trading with real money.",
  },
  {
    num: "06",
    question: "What is a Pip in Forex?",
    answer:
      "A pip (percentage in point) is the smallest price move that a given exchange rate can make. For most currency pairs, a pip is equal to 0.0001. Pips are used to measure profit and loss in forex trading.",
  },
  {
    num: "07",
    question: "Is Forex Trading Safe?",
    answer:
      "Forex trading carries inherent risks due to market volatility and leverage. Trading with a regulated broker, using proper risk management strategies, and never risking more than you can afford to lose are essential practices for safer trading.",
  },
  {
    num: "08",
    question: "What is Fundamental Analysis in Forex?",
    answer:
      "Fundamental analysis evaluates economic indicators, such as GDP, interest rates, inflation, and political events, to predict currency movements.",
  },
  {
    num: "09",
    question: "What is Technical Analysis in Forex?",
    answer:
      "Technical analysis studies price charts, patterns, and indicators (e.g., Moving Averages, RSI, MACD) to make trading decisions.",
  },
  {
    num: "10",
    question: "What is a Margin Call in Forex?",
    answer:
      "A margin call occurs when your account balance falls below the required margin level. When this happens, the broker may require you to deposit additional funds or close your positions to cover the shortfall.",
  },
  {
    num: "11",
    question: "Is Forex Trading Legal?",
    answer:
      "Forex trading is legal in most countries but is regulated by financial authorities. Always trade with a licensed broker to ensure your funds are protected and operations are compliant with local laws.",
  },
  {
    num: "12",
    question: "How Can I Protect My Capital in Forex?",
    answer:
      "Use stop-loss and take-profit orders, avoid excessive leverage, diversify your trades, and follow a trading plan. Consistent risk management is the key to long-term survival in forex trading.",
  },
  {
    num: "13",
    question: "Can I Trade Forex on My Phone?",
    answer:
      "Yes, we offer a mobile trading platform that allows you to trade anytime, anywhere. Our mobile app provides real-time quotes, charting tools, and full account management features.",
  },
  {
    num: "14",
    question: "What is an Economic Calendar in Forex?",
    answer:
      "An economic calendar lists key financial events (e.g., interest rate decisions, job reports, GDP releases) that impact currency markets. Traders use it to anticipate volatility and plan their trades around high-impact news.",
  },
  {
    num: "15",
    question: "How Much Money Do I Need to Start Forex Trading?",
    answer:
      "Many brokers allow you to start with as little as $200, but a minimum of $500–$1,000 is recommended for better risk management. You can also practice with a demo account first before depositing real funds.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* ── HERO BANNER ── */}
      <div
  style={{
    position: "relative",
    width: "100%",
    minHeight: 600,
    backgroundImage: `url(${heroBg4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 60px",
  }}
>
        {/* code lines background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            background: `repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(80,200,120,0.08) 28px, rgba(80,200,120,0.08) 29px)`,
            pointerEvents: "none",
          }}
        />

        {/* glowing orb */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            width: 280,
            height: 280,
            background:
              "radial-gradient(circle at 40% 40%, rgba(180,220,80,0.25) 0%, rgba(80,180,60,0.12) 45%, transparent 70%)",
            borderRadius: "50%",
            border: "1px solid rgba(120,200,80,0.15)",
          }}
        />

        {/* question mark decoration */}
        <div
          style={{
            position: "absolute",
            right: 100,
            top: "50%",
            transform: "translateY(-55%)",
            fontSize: 120,
            fontWeight: 900,
            color: "rgba(100,180,60,0.25)",
            lineHeight: 1,
            userSelect: "none",
            textShadow: "0 0 40px rgba(80,160,40,0.3)",
          }}
        >
          ?
        </div>
        <div
          style={{
            position: "absolute",
            right: 200,
            top: "35%",
            fontSize: 60,
            fontWeight: 900,
            color: "rgba(100,180,60,0.15)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          ?
        </div>
        <div
          style={{
            position: "absolute",
            right: 60,
            top: "30%",
            fontSize: 50,
            fontWeight: 900,
            color: "rgba(100,180,60,0.15)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          ?
        </div>

        {/* Hero text */}
        {/* Hero text */}
<div style={{ position: "relative", zIndex: 2 }}>
  <h1
  style={{
    fontSize: 56,
    fontWeight: 750,
    color: "#fff",
    marginBottom: 16,
    lineHeight: 1.1,
    textShadow: "0 2px 12px rgba(0,0,0,0.3)",
    fontFamily: "sans-serif",
  }}
>
  Faq's
</h1>
  <p
    style={{
      fontSize: 16,
      color: "rgba(255,255,255,0.85)",
      fontWeight: 400,
      maxWidth: 560,
      lineHeight: 1.5,
      marginBottom: 30,
    }}
  >
    Reaching of the great explorer of the truth the builder
  </p>

  {/* EXPLORE MORE BUTTON */}
  <button
    style={{
      background: "#D4AF37",
      color: "#000",
      padding: "14px 34px",
      border: "none",
      borderRadius: "999px",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      transition: "0.3s ease",
      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#c89b1d";
      e.target.style.transform = "translateY(-2px)";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "#D4AF37";
      e.target.style.transform = "translateY(0px)";
    }}
     onClick={() => {
    document.getElementById("faq-questions")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  >
    Explore More
  </button>
</div>
      </div>
<div
  id="faq-questions"
  style={{ maxWidth: 1000, margin: "0 auto", padding: "30px 24px" }}
></div>
      {/* ── FAQ SECTION ── */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "30px 24px" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#014421",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              display: "block",
              marginBottom: 10,
            }}
          >
            FAQ's
          </span>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#014421",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Find <span style={{ color: "#D4AF37" }}>Answers</span> to Common
            <br />
            Questions
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                style={{
                  background: isOpen ? "#014421" : "#fff",
                  border: "1px solid",
                  borderColor: isOpen ? "#014421" : "#e5e7eb",
                  borderRadius: 12,
                  padding: "20px 24px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(21,128,61,0.15)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      minWidth: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: isOpen
                        ? "rgba(255,255,255,0.2)"
                        : "#dcfce7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: isOpen ? "#014421" : "#15803d",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {faq.num}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          margin: 0,
                          color: isOpen ? "#fff" : "#111827",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.question}
                      </h3>

                      {/* Chevron */}
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "75%",
                          border: `1.5px solid ${
                            isOpen ? "rgba(255,255,255,0.4)" : "#d1d5db"
                          }`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke={isOpen ? "#fff" : "#6b7280"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    

                    {/* Answer */}
                    {isOpen && (
                      <p
                        style={{
                          marginTop: 12,
                          fontSize: 14,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.88)",
                          margin: "12px 0 0",
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}