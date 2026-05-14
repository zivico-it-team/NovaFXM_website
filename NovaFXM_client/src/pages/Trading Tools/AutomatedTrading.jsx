import React from "react";
import { FaChartLine, FaCreditCard, FaUserAlt } from "react-icons/fa";
import {
  ShieldCheck,
  TrendingUp,
  ScanSearch,
  Clock3,
  Zap,
  Scale,
  ClipboardList,
  Users,
} from "lucide-react";
import heroBg from "../../../public/Auto 1.jpeg";
import heroBg1 from "../../../public/Auto 2.jpg";

const steps = [
  {
    number: "01",
    title: "Choose Account",
    desc: "Choose the account that suits you best",
    Icon: FaUserAlt,
  },
  {
    number: "02",
    title: "Fund",
    desc: "Fund your account securely",
    Icon: FaCreditCard,
  },
  {
    number: "03",
    title: "Start Trading",
    desc: "Start trading and achieve your goals.",
    Icon: FaChartLine,
  },
];

export default function AutomatedTradingPage() {
  return (
    <div className="bg-[#f7f7f5] text-gray-800 font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[380px] w-full overflow-hidden bg-black sm:h-[460px] md:h-[560px]">
        <div className="absolute inset-0 hero-parallax">
          <img
            src={heroBg}
            alt="Automated Trading Hero"
            className="h-full w-full object-cover object-center hero-image"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center hero-content md:px-6">
          <h1 className="animate-fade-down text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Automated Trading
          </h1>

          <p className="mt-4 max-w-3xl px-2 text-sm leading-6 text-white animate-fade-up sm:text-base md:mt-5 md:leading-7">
            Revolutionizing financial markets with precision-driven
            algorithmic strategies, intelligent market analysis, and
            lightning-fast execution designed for modern traders.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-14 sm:py-16">
        <div className="section-reveal mx-auto max-w-4xl text-center">
          
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[42px]">
            Revolutionizing the Way You Trade
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Automated trading, also known as algorithmic trading is transforming the financial markets by leveraging the power of technology to execute trades with precision and speed. This innovative approach eliminates the emotional biases of manual trading and enables traders to capitalize on  opportunities across global markets, even while they sleep.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">

          {/* TITLE */}
          <div className="section-reveal mx-auto max-w-3xl text-center">
            <p className="text-[#014421] font-semibold uppercase tracking-wide">
              How Does Automated Trading Work?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-[42px]">
              Intelligent Trading Process
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Automated trading relies on technical indicators, statistical models and pre-defined conditions set by the trader.Once the system is activated:
            </p>
          </div>

          {/* OFFICIAL CARDS */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {[
              {
                icon: <ScanSearch className="w-8 h-8" />,
                title: "Market Scanning",
                text: "Continuously monitors global financial markets to identify profitable opportunities in real-time.",
                bg: "from-[#c8f3dd] to-gray-50",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Trade Execution",
                text: "Executes trades instantly based on predefined strategies and optimized algorithmic parameters.",
                bg: "from-[#c8f3dd] to-gray-50",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Risk Management",
                text: "Implements stop-loss, take-profit and portfolio protection strategies to reduce exposure.",
                bg: "from-[#c8f3dd] to-gray-50",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`
                process-card-reveal process-delay-${index + 1}
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-br ${card.bg}
                p-6
                border border-white/60
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(16,185,129,0.18)]
                hover:border-green-200
                cursor-pointer
                `}
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-[#014421]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#014421] to-emerald-600 transition-all duration-700 group-hover:w-full"></div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#014421] shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#014421] group-hover:text-white">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-[#014421]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                    {card.text}
                  </p>

                 
                  
                </div>
              </div>
            ))}
          </div>

          {/* EXTRA BLOCK */}
          <div className="extra-block-reveal mt-12 overflow-hidden rounded-2xl bg-[#edf3ef] shadow-lg">
            <div className="grid lg:grid-cols-2 items-center">

              {/* IMAGE */}
              <div className="relative">
                
 <div
        className="relative h-[280px] w-full bg-cover bg-center sm:h-[340px]"
style={{
  backgroundImage: `url(${heroBg1})`,
}}
      />


              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    <Users className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Is Automated Trading for Everyone?
                  </h3>
                </div>

                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Whether you're a professional trader seeking scalable
                  execution or a beginner exploring algorithmic systems,
                  automated trading platforms can be tailored to suit different
                  investment goals and strategies.
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:py-16">
        <div className="mx-auto flex max-w-4xl justify-center">

          {/* LEFT */}
          <div className="why-choose-card w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-black/5 sm:p-8 lg:p-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#014421]">
              Why Choose Automated Trading?
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
              Built for Speed, Precision & Consistency
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                  text: "Trade based on data, logic and disciplined strategies.",
                },
                {
                  icon: <ClipboardList />,
                  title: "Reliable Consistency",
                  text: "Maintain structured execution aligned with your strategy.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`why-choose-item why-choose-delay-${index + 1} group flex gap-4 rounded-xl border border-gray-100 bg-[#f7faf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#014421]/20 hover:bg-white hover:shadow-md`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#014421]/10 text-[#014421] transition-all duration-300 group-hover:bg-[#014421] group-hover:text-white group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-950 transition-all duration-300 group-hover:text-[#e5f8ee]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

     

     

      <style>{`
        @keyframes automatedHeroZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes itemReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-image {
          animation: automatedHeroZoom 1.5s ease-out both;
        }

        .hero-content {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-fade-down {
          animation: fadeDown 0.85s ease-out both;
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease-out 0.18s both;
        }

        .why-choose-card {
          animation: cardReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .why-choose-item {
          animation: itemReveal 0.65s ease-out both;
        }

        .why-choose-delay-1 {
          animation-delay: 0.14s;
        }

        .why-choose-delay-2 {
          animation-delay: 0.24s;
        }

        .why-choose-delay-3 {
          animation-delay: 0.34s;
        }

        .why-choose-delay-4 {
          animation-delay: 0.44s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-content,
          .animate-fade-down,
          .animate-fade-up,
          .why-choose-card,
          .why-choose-item {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}