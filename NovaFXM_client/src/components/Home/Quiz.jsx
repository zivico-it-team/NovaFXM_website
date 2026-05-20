import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is Forex Trading?",
    answer:
      "Forex trading is the process of buying and selling currencies in the global Forex Market to make a profit. Traders exchange one currency for another and earn by predicting price movements based on market trends and global events.",
  },
  {
    id: 2,
    question: "How Does Forex Trading Work?",
    answer:
      "Forex trading works by exchanging one currency for another in the global Forex Market, where currencies are always traded in pairs like EUR/USD or GBP/USD. When a trader believes that one currency will increase in value compared to another, they place a buy (long) trade and if they expect it to decrease, they place a sell (short) trade.",
  },
  {
    id: 3,
    question: "What is a Pip in Forex?",
    answer:
      "A pip in forex is the smallest price movement in a currency pair within the Forex Market. It is usually the fourth decimal place in most currency pairs.",
  
  },
  {
    id: 4,
    question: "What is Leverage in Forex Trading?",
    answer:
      "Leverage in forex trading allows traders to control a larger position with a smaller amount of money.",
  
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="reveal-section flex justify-center bg-gray-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="w-full max-w-4xl">
        
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
          Find <span className="text-[#014421]">Answers</span> to Common Questions
        </h2>

        {/* FAQ */}
        <div className="space-y-5">
          {faqData.map((item) => (
            <div key={item.id} className="interactive-card rounded-xl border-b border-gray-300 bg-white/40 p-4">
              
              {/* FIXED ROW */}
              <div
                onClick={() => toggle(item.id)}
                className="flex items-center gap-3 sm:gap-4 cursor-pointer"
              >
                
                {/* Number */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#014421] text-white text-xs sm:text-sm font-medium">
                  {item.id}
                </div>

                {/* Question + Arrow */}
                <div className="flex-1 flex justify-between items-center">
                  
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.question}
                  </h3>

                  {/* Arrow */}
                  <svg
                    className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 transform transition-transform duration-300 ${
                      openId === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Answer */}
              {openId === item.id && (
                <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed ml-9 sm:ml-11">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
