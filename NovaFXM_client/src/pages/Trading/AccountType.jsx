import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaCheck,
  FaCreditCard,
  FaCrown,
  FaGem,
  FaMedal,
  FaShieldAlt,
  FaRegStar,
  FaSignal,
  FaUserAlt,
} from "react-icons/fa";

const accounts = [
  {
    title: "Startup Account",
    price: "$100",
    Icon: FaRegStar,
    features: [
      "Minimum Deposit $100",
      "Spreads from 1.5 pips",
      "No Commission",
      "Leverage up to 1:400",
      "Support 24/7",
    ],
  },
  {
    title: "Standard Account",
    price: "$200",
    Icon: FaMedal,
    features: [
      "Minimum Deposit $200",
      "Spreads from 1.3 pips",
      "No Commission",
      "Leverage up to 1:400",
      "Support 24/7",
    ],
  },
  {
    title: "Silver Account",
    price: "$1,000",
    Icon: FaShieldAlt,
    popular: true,
    features: [
      "Minimum Deposit $1000",
      "Spreads from 1 pips",
      "No Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
    title: "Gold Account",
    price: "$5,000",
    Icon: FaCrown,
    features: [
      "Minimum Deposit $5,000",
      "Spreads from 0.8 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
    title: "VIP Account",
    price: "$10,000",
    Icon: FaGem,
    features: [
      "Minimum Deposit $10,000",
      "Spreads from 0.6 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
      title: "RT Account",
    price: "$15,000",
    Icon: FaSignal,
    features: [
      "Minimum Deposit $15,000",
      "Spreads from 0.2 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
];

// Scroll Animation Component - Slide from Left
const ScrollRevealLeft = ({ children, delay = 0, threshold = 0.1 }) => {
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

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Alternating Direction Animation Component for Steps
const AlternatingStepReveal = ({ children, index, delay = 0 }) => {
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
        threshold: 0.15,
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

  // Alternating directions: 0 = left side, 1 = right side, 2 = left side
  const getDirectionClass = () => {
    if (index === 0) return '-translate-x-20'; // First card from LEFT
    if (index === 1) return 'translate-x-20';  // Second card from RIGHT
    if (index === 2) return '-translate-x-20'; // Third card from LEFT
    return '-translate-x-20';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-800 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${getDirectionClass()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animated Account Card Component - Slide from Left
const AnimatedAccountCard = ({ account, index }) => {
  const { Icon, ...accountData } = account;
  
  return (
    <ScrollRevealLeft delay={index * 80}>
      <div className={`account-plan-card relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6 ${
        accountData.popular ? 'ring-2 ring-[#D4AF37] ring-opacity-50 relative' : ''
      }`}>
        {/* POPULAR Badge - Fully Visible */}
        {accountData.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D35E] text-black text-xs font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap">
              POPULAR
            </span>
          </div>
        )}

        <div className="flex items-center gap-3 mb-5 mt-2">
          <div className="account-plan-icon flex h-9 w-9 items-center justify-center rounded-md bg-[#014421] text-sm text-white transition-all duration-300 group-hover:scale-110">
            <Icon />
          </div>
          <h2 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">{accountData.title}</h2>
        </div>

        <h2 className="account-plan-price mb-5 text-2xl font-extrabold text-[#014421]">{accountData.price}</h2>

        <ul className="space-y-3 text-sm text-gray-700 mb-6">
          {accountData.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
              <FaCheck className="mt-1 h-3 w-3 shrink-0 text-[#014421]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => navigate("/signup")}
          className={`button-shine w-full rounded-md border py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
            accountData.popular
              ? "border-[#014421] bg-[#014421] text-white hover:shadow-[#014421]/20"
              : "border-[#014421] bg-white text-[#014421] hover:bg-[#014421] hover:text-white hover:shadow-[#014421]/20"
          }`}
        >
          Open Account
        </button>
      </div>
    </ScrollRevealLeft>
  );
};

// Animated Step Card Component with Alternating Directions
const AnimatedStepCard = ({ step, index, Icon }) => {
  return (
    <AlternatingStepReveal index={index} delay={index * 100}>
      <div className="relative flex justify-center">
        {/* Connector Dots */}
        {index !== 2 && (
          <div className="hidden md:flex absolute top-16 -right-8 items-center gap-2 z-10">
            <span className="w-2 h-2 bg-[#014421] rounded-full"></span>
            <span className="w-2 h-2 bg-[#014421] rounded-full"></span>
          </div>
        )}

        {/* Card */}
        <div className="process-card relative w-full max-w-[320px] rounded-2xl border border-[#014421]/20 border-b-[4px] border-b-[#014421] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-6">
          
          {/* Top Circle Icon */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            <div className="process-icon w-14 h-14 rounded-full bg-[#014421] text-white flex items-center justify-center text-xl shadow-lg shadow-[#014421]/20 transition-all duration-300">
              <Icon />
            </div>
          </div>

          {/* Number Badge */}
          <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#014421] text-white text-xs font-bold flex items-center justify-center">
            {step.number}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-[#014421] mb-3">
            {step.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            {step.desc}
          </p>

          {/* Direction Indicator Line (Optional) */}
          <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            index === 0 ? 'md:left-auto md:right-0 md:translate-x-0' : ''
          }`} />
        </div>
      </div>
    </AlternatingStepReveal>
  );
};

export default function AccountTypesPage() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#0b1f16] overflow-hidden">
      {/* Hero */}
     <section className="relative flex min-h-[calc(100vh-72px)] items-start justify-center overflow-hidden bg-black px-4 pb-16 pt-24 text-center sm:min-h-[calc(100vh-80px)] sm:items-center sm:px-6 sm:py-16 lg:min-h-[calc(100vh-84px)]">
  
  {/* Animated Background Image with Zoom Effect */}
  <div className="absolute inset-0 overflow-hidden">
    <div 
      className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
      style={{
        transformOrigin: 'center',
      }}
    >
      <img
        src="/accounttype.png"
        alt=""
        className="account-hero-image h-full w-full object-cover object-top brightness-110 sm:object-center"
      />
    </div>
  </div>

  {/* Fade-in Overlays */}
  <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)] animate-[fadeIn_1.8s_ease-out]" />

  <div className="relative z-10 w-full max-w-4xl">
    {/* Badge - Slide In From Top */}
    <div className="animate-[slideInDown_0.6s_ease-out]">
      <span className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37] sm:mb-6 sm:px-5">
        <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
        Account Type
      </span>
    </div>

    {/* Heading - Staggered Fade In Up */}
    <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
      <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
        Find Your Perfect
      </span>
      <br className="hidden sm:block" />
      <span className="inline-block animate-[fadeInUp_1s_ease-out] text-[#D4AF37]">
        Trading Account
      </span>
    </h1>

    {/* Description - Fade In Up */}
    <div className="animate-[fadeInUp_1.2s_ease-out]">
      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
        Choose an account that fits your trading style and goals.
        <br className="hidden sm:block" />
        Flexible options for every level of trader.
      </p>
    </div>

    {/* Button - Fade In Up with Pulse */}
    <div className="animate-[fadeInUp_1.4s_ease-out]">
      <button
        className="button-shine mt-8 w-full max-w-[260px] rounded-full bg-[#014421] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 sm:mt-8 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-sm animate-[gentlePulse_3s_ease-in-out_infinite] hover:animate-none"
        onClick={() => {
          document.getElementById("account-cards")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        Choose Your Account Plan
      </button>
    </div>
  </div>

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
    
    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes gentlePulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.03);
      }
    }
    
    /* Button Shine Effect */
    .button-shine {
      position: relative;
      overflow: hidden;
    }

    .button-shine::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.5s ease;
    }

    .button-shine:hover::before {
      left: 100%;
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      .transition-all,
      [class*="animate-"] {
        animation: none !important;
        transition: none !important;
      }
      .button-shine::before {
        transition: none;
      }
    }
  `}</style>
</section>

      {/* Accounts Section - 6 Cards Sliding from Left */}
      <section id="account-cards" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {accounts.map((account, index) => (
            <AnimatedAccountCard key={index} account={account} index={index} />
          ))}
        </div>
      </section>

      {/* How it works - Animated Section with Alternating Directions */}
      <section className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-5 sm:py-12">
        
        {/* Top Small Heading - Animated from Left */}
        <ScrollRevealLeft delay={0}>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
            <p className="text-sm font-semibold text-gray-700">
              How It Works
            </p>
            <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
          </div>
        </ScrollRevealLeft>

        {/* Main Heading - Animated from Left */}
        <ScrollRevealLeft delay={100}>
          <h2 className="mb-12 text-2xl font-bold text-gray-900 sm:text-3xl md:mb-14 md:text-4xl">
            Trading Made Simple with{" "}
            <span className="text-[#014421]">NOVAFXM</span>
          </h2>
        </ScrollRevealLeft>

        {/* Steps Cards - Alternating Animations */}
        {/* Card 1: Slides from RIGHT side */}
        {/* Card 2: Slides from LEFT side */}
        {/* Card 3: Slides from RIGHT side */}
        <div className="relative grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <AnimatedStepCard key={index} step={step} index={index} Icon={step.Icon} />
          ))}
        </div>

        {/* Bottom Text - Animated from Left */}
        <ScrollRevealLeft delay={500}>
          <p className="mx-auto mt-12 max-w-md text-sm leading-relaxed text-gray-700 sm:mt-14 sm:text-base">
            Everything you need to trade Forex in one place.
          </p>
        </ScrollRevealLeft>

        {/* Button - Animated from Left */}
        <ScrollRevealLeft delay={600}>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine mt-5 w-full max-w-[220px] rounded-full bg-[#014421] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#014421] hover:shadow-lg hover:shadow-[#014421]/20 active:translate-y-0 sm:w-auto"
          >
            Trade Now
          </button>
        </ScrollRevealLeft>
      </section>

      <style jsx>{`
        /* Button Shine Effect */
        .button-shine {
          position: relative;
          overflow: hidden;
        }

        .button-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .button-shine:hover::before {
          left: 100%;
        }

        /* Card Hover Effects */
        .account-plan-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible;
        }

        .account-plan-card:hover .account-plan-icon {
          transform: scale(1.1);
        }

        .process-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .process-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .process-card:hover .process-icon {
          transform: scale(1.1);
          background-color: #D4AF37;
        }

        /* Popular Badge Animation */
        @keyframes badgePulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
            box-shadow: 0 6px 16px rgba(212, 175, 55, 0.5);
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all {
            transition: none;
          }
          .button-shine::before {
            transition: none;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .account-plan-card {
            transform: translateX(0);
          }
          
          .absolute.-top-3 {
            top: -12px;
          }
        }

        /* Animation Direction Classes */
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}