import React from "react";
import {
  BarChart3,
  ShieldCheck,
  TrendingUp,
  ScanSearch,
  Clock3,
  Zap,
  Scale,
 ClipboardList,
  Users,
  ArrowRight,
} from "lucide-react";
import heroBg from "../../../public/Auto 1.jpeg";
import heroBg1 from "../../../public/Auto 2.jpg";

export default function AutomatedTradingPage() {
  return (
    <div className="bg-[#f7f7f5] text-gray-800 font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section
        className="relative h-screen min-h-[850px] w-full bg-cover bg-center"
        style={{
            backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm tracking-wide uppercase backdrop-blur-md">
                Advanced Algorithmic Solutions
              </span>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Automated
                <span className="text-green-400"> Trading</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Revolutionizing financial markets with precision-driven
                algorithmic strategies, intelligent market analysis, and
                lightning-fast execution designed for modern traders.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold shadow-lg shadow-green-500/20 hover:scale-105">
                  Get Started
                </button>

                <button className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  ["99.9%", "Execution Accuracy"],
                  ["24/7", "Market Monitoring"],
                  ["1ms", "Trade Response"],
                  ["500+", "Active Traders"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold text-green-400">
                      {item[0]}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-green-600 font-semibold tracking-wide uppercase">
            Automated Trading
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Revolutionizing the Way You Trade
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Automated trading, also known as algorithmic trading, is transforming the financial markets by leveraging the power of technology to execute trades with precision and speed. This innovative approach eliminates the emotional biases of manual trading and enables traders to capitalize on  opportunities across global markets, even while they sleep.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-green-600 font-semibold uppercase tracking-wide">
              How Does Automated Trading Work?
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Intelligent Trading Process
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Automated trading relies on technical indicators, statistical models, and pre-defined conditions set by the trader.Once the system is activated:
            </p>
          </div>

          {/* OFFICIAL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <ScanSearch className="w-8 h-8" />,
                title: "Market Scanning",
                text: "Continuously monitors global financial markets to identify profitable opportunities in real-time.",
                bg: "from-white to-gray-50",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Trade Execution",
                text: "Executes trades instantly based on predefined strategies and optimized algorithmic parameters.",
                bg: "from-[#f7f2dc] to-[#efe1a6]",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Risk Management",
                text: "Implements stop-loss, take-profit, and portfolio protection strategies to reduce exposure.",
                bg: "from-[#eef7f1] to-[#dcecdf]",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-br ${card.bg}
                p-10
                border border-white/60
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all
                duration-700
                hover:-translate-y-4
                hover:shadow-[0_25px_70px_rgba(16,185,129,0.18)]
                hover:border-green-200
                cursor-pointer
                `}
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 h-40 w-40 bg-green-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-700 group-hover:w-full"></div>

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-green-600 shadow-lg transition-all duration-500 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-green-700">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-relaxed text-[15px] transition-all duration-300 group-hover:text-gray-800">
                    {card.text}
                  </p>

                  {/* Learn More */}
                  <div className="mt-8 flex items-center gap-2 text-green-700 font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EXTRA BLOCK */}
          <div className="mt-20 rounded-[20px] overflow-hidden bg-[#edf3ef] shadow-xl">
            <div className="grid lg:grid-cols-2 items-center">

              {/* IMAGE */}
              <div className="relative">
                
 <div
        className="relative h-[400px] w-full bg-cover bg-center"
style={{
  backgroundImage: `url(${heroBg1})`,
}}
      />


              </div>

              {/* CONTENT */}
              <div className="p-12">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700">
                    <Users className="w-7 h-7" />
                  </div>

                  <h3 className="text-3xl font-bold">
                    Is Automated Trading for Everyone?
                  </h3>
                </div>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Whether you're a professional trader seeking scalable
                  execution or a beginner exploring algorithmic systems,
                  automated trading platforms can be tailored to suit different
                  investment goals and strategies.
                </p>

                <button className="mt-8 px-7 py-4 rounded-xl bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-semibold transition-all duration-300 shadow-lg shadow-green-500/20">
                  Explore Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="text-green-600 font-semibold uppercase tracking-wide">
              Why Choose Automated Trading?
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Built for Speed, Precision & Consistency
            </h2>

            <div className="mt-12 space-y-8">
              {[
                {
                  icon: <Clock3 />,
                  title: "24/7 Market Monitoring",
                  text: "Track market movements continuously without interruption.",
                },
                {
                  icon: <Zap />,
                  title: "Fast & Efficient Execution",
                  text: "Execute trades in milliseconds with optimized algorithms.",
                },
                {
                  icon: <Scale />,
                  title: "Emotion-Free Decisions",
                  text: "Trade based on data, logic, and disciplined strategies.",
                },
                {
                  icon: <ClipboardList />,
                  title: "Reliable Consistency",
                  text: "Maintain structured execution aligned with your strategy.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 group hover:translate-x-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-green-700 transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-5 bg-green-500/10 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-[#0c1f18] to-[#102d24] rounded-[40px] p-8 shadow-2xl">
              <img
                src="/Auto 3.jpg"
                alt="Trading Dashboard"
                className="rounded-3xl hover:scale-105 transition-all duration-700"
              />

              {/* FLOATING CARD */}
              <div className="absolute bottom-10 right-10 bg-white rounded-2xl p-5 shadow-xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-10 h-10 text-green-600" />

                  <div>
                    <h4 className="font-bold text-lg">+38.7%</h4>
                    <p className="text-sm text-gray-500">
                      Portfolio Performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#07130f] text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-green-400 uppercase tracking-widest font-semibold">
            Start Trading Smarter
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Empower Your Trading with Intelligent Automation
          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            Experience next-generation trading technology designed to help you
            analyze markets, execute strategies, and manage risk with
            confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 hover:scale-105 font-semibold transition-all duration-300 shadow-lg shadow-green-500/20">
              Get Started Now
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}