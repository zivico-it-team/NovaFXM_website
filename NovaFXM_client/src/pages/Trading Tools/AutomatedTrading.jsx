import React, { useEffect, useRef, useState } from "react";
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

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case "left":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case "right":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getDirectionClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered Card Component
const StaggeredCard = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

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
      <section className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-black sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-84px)]">
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={heroBg}
              alt="Automated Trading Hero"
              className="h-full w-full object-cover object-center hero-image"
            />
          </div>
        </div>
        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-4 py-14 text-center hero-content sm:min-h-[calc(100vh-80px)] md:px-6 lg:min-h-[calc(100vh-84px)]">
          <h1 className="text-3xl font-bold leading-tight text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">
            Automated Trading
          </h1>

          <p className="mt-4 max-w-3xl px-1 text-sm leading-6 text-white animate-[fadeInUp_1s_ease-out] sm:px-2 sm:text-base md:mt-5 md:leading-7">
            Revolutionizing financial markets with precision-driven
            algorithmic strategies, intelligent market analysis, and
            lightning-fast execution designed for modern traders.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3f8f4_100%)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#014421]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-3xl md:text-[34px]">
                Revolutionizing the Way You Trade
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} threshold={0.2} direction="up">
              <p className="mx-auto mt-4 max-w-5xl text-justify text-sm leading-7 text-gray-600 sm:mt-5 sm:text-center sm:text-base md:text-lg md:leading-8">
                Automated trading, also known as algorithmic trading is transforming the financial markets by leveraging the power of technology to execute trades with precision and speed. This innovative approach eliminates the emotional biases of manual trading and enables traders to capitalize on opportunities across global markets, even while they sleep.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* TITLE */}
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-[34px]">
                How Does Automated Trading Work?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} threshold={0.2} direction="up">
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base md:text-lg md:leading-relaxed">
                Automated trading relies on technical indicators, statistical models and pre-defined conditions set by the trader. Once the system is activated:
              </p>
            </ScrollReveal>
          </div>

          {/* OFFICIAL CARDS */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-4">
            {[
              {
                icon: <ScanSearch className="w-8 h-8" />,
                title: "Market Scanning",
                text: "Continuously monitors global financial markets to identify profitable opportunities in real-time.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Trade Execution",
                text: "Executes trades instantly based on predefined strategies and optimized algorithmic parameters.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Risk Management",
                text: "Implements stop-loss, take-profit and portfolio protection strategies to reduce exposure.",
              },
            ].map((card, index) => (
              <StaggeredCard key={index} index={index}>
                <div className="relative flex justify-center">
                  <div className="process-card relative w-full max-w-[320px] rounded-2xl border border-[#014421]/20 border-b-[4px] border-b-[#014421] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-6">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <div className="process-icon flex h-14 w-14 items-center justify-center rounded-full bg-[#014421] text-xl text-white shadow-lg shadow-[#014421]/20 transition-all duration-300 hover:scale-110 hover:bg-[#D4AF37]">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#014421]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {card.text}
                    </p>
                  </div>
                </div>
              </StaggeredCard>
            ))}
          </div>

          {/* EXTRA BLOCK */}
          <div className="extra-block-reveal mt-10 overflow-hidden bg-white sm:mt-12">
            <div className="grid items-center gap-0 lg:grid-cols-2">

              {/* IMAGE */}
<ScrollReveal delay={0} threshold={0.2} direction="left">
  <div className="relative">
    <div
      className="relative h-[300px] w-full bg-cover bg-center transition-all duration-500 hover:scale-105 sm:h-[200px]"
      style={{
        backgroundImage: `url(${heroBg1})`,
      }}
    />
  </div>
</ScrollReveal>

              {/* CONTENT */}
              <ScrollReveal delay={100} threshold={0.2} direction="right">
                <div className="bg-white p-5 sm:p-8 lg:p-10">
                  <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 hover:scale-110 hover:bg-[#014421] hover:text-white sm:h-12 sm:w-12">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight sm:text-3xl">
                      Is Automated Trading for Everyone?
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-justify leading-7 text-gray-600 sm:text-base sm:leading-relaxed">
                    Whether you're a professional trader seeking scalable
                    execution or a beginner exploring algorithmic systems,
                    automated trading platforms can be tailored to suit different
                    investment goals and strategies.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white px-4 pb-8 pt-0 sm:px-6 lg:pb-10 lg:pt-1">
        <div className="mx-auto flex max-w-4xl justify-center">

          {/* LEFT */}
          <div className="why-choose-card w-full bg-white p-0 sm:p-6 lg:p-7">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#014421]">
                Why Choose Automated Trading?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} threshold={0.2} direction="up">
              <h2 className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
                Built for Speed, Precision & Consistency
              </h2>
            </ScrollReveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                <StaggeredCard key={index} index={index}>
                  <div className="group flex gap-3 rounded-xl border border-gray-100 bg-[#f7faf7] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#014421]/20 hover:bg-white hover:shadow-md sm:gap-4 sm:p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#014421]/10 text-[#014421] transition-all duration-300 group-hover:bg-[#014421] group-hover:text-white group-hover:scale-110 sm:h-12 sm:w-12">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-950 transition-all duration-300 group-hover:text-[#014421]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </StaggeredCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* Keyframe Animations */
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
          
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