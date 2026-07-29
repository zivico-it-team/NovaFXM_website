import { Users, Globe, Headset } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import arjunPhoto from "../../assets/images/testimonials/arjun-mehta.jpg";
import priyaPhoto from "../../assets/images/testimonials/priya-sharma.jpg";
import rohanPhoto from "../../assets/images/testimonials/rohan-kapoor.jpg";
import ananyaPhoto from "../../assets/images/testimonials/ananya-iyer.jpg";
import vikramPhoto from "../../assets/images/testimonials/vikram-singh.jpg";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Day Trader",
    image: arjunPhoto,
    text: "The platform feels well organised and responsive. I can review the markets, manage my positions, and stay focused throughout the trading day.",
  },
  {
    name: "Priya Sharma",
    role: "Forex Analyst",
    image: priyaPhoto,
    text: "The clear market information and practical tools make my daily analysis more efficient. Everything I need is presented in a professional way.",
  },
  {
    name: "Rohan Kapoor",
    role: "Investor",
    image: rohanPhoto,
    text: "I appreciate the clean account overview and straightforward navigation. Monitoring my activity has become a simple and comfortable experience.",
  },
  {
    name: "Ananya Iyer",
    role: "Retail Trader",
    image: ananyaPhoto,
    text: "As a retail trader, I value a platform that is easy to understand without feeling limited. NOVAFXM offers a balanced and user-friendly experience.",
  },
  {
    name: "Vikram Singh",
    role: "Crypto Trader",
    image: vikramPhoto,
    text: "Moving between different markets is smooth, and the layout keeps important details easy to follow. It supports a more disciplined trading routine.",
  },
];

const ReviewCard = ({ name, role, image, text, index }) => (
  <div
    className="relative w-[calc(100vw-2rem)] max-w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl sm:w-[300px] sm:max-w-[300px] md:w-[350px] md:max-w-[350px] md:rounded-2xl md:p-6"
    style={{ animationDelay: `${(index % reviews.length) * 0.18}s` }}
  >
    <span className="absolute inset-0 pointer-events-none review-gold-border rounded-xl md:rounded-2xl"></span>

    <div className="mb-3 text-sm text-[#D4AF37]">★★★★★</div>

    <p className="mb-4 text-xs leading-6 text-center sm:text-left text-gray-700 sm:text-sm">
      {text}
    </p>

    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src={image}
        alt={name}
        className="object-cover w-8 h-8 rounded-full sm:h-9 sm:w-9"
      />

      <div>
        <h4 className="text-sm font-semibold text-green-700">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const CountUpNumber = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: 20,
    suffix: "M+",
    title: "Traders",
    desc: "Active users executing trades daily across our global network.",
  },
  {
    icon: Globe,
    value: 150,
    suffix: "+",
    title: "Trusted Globally",
    desc: "Regulated and compliant in multiple jurisdictions worldwide.",
  },
  {
    icon: Headset,
    value: 24,
    suffix: "/7",
    title: "Expert Support",
    desc: "Multilingual support team ready to assist you at any time.",
  },
];

const StatBox = ({ icon: Icon, value, suffix, title, desc }) => (
  <div className="flex flex-col items-center justify-center p-6 text-center transition bg-white border shadow-sm rounded-xl hover:border-yellow-400 sm:p-6">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#D4AF37] md:h-12 md:w-12">
      <Icon size={20} color="black" />
    </div>

    <h3 className="text-xl font-bold md:text-2xl">
      <CountUpNumber end={value} suffix={suffix} duration={2000} />
    </h3>

    <p className="text-sm font-bold text-gray-600">{title}</p>

    <p className="mt-2 text-xs text-center text-gray-500 sm:text-center">
      {desc}
    </p>
  </div>
);

export default function Review() {
  return (
    <section className="px-4 py-10 bg-white reveal-section sm:px-6 sm:py-8 md:py-12 lg:px-8">
      <h2 className="mb-6 text-xl font-bold leading-tight text-center sm:mb-7 sm:text-2xl md:mb-9 md:text-3xl">
        Traders Experience With Us
      </h2>

      <div className="mx-auto max-w-7xl overflow-hidden py-4">
        <div className="flex gap-4 w-max animate-scroll sm:gap-5 md:gap-8">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} index={index} {...review} />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center sm:mt-10 md:mt-14">
        <h2 className="mb-5 text-xl font-bold leading-tight sm:mb-7 md:mb-9 md:text-2xl">
          Built on Trust & Performance
        </h2>

        <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto sm:grid-cols-3 md:gap-10">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 45s linear infinite;
            will-change: transform;
          }

          .review-gold-border {
            padding: 1.5px;
            overflow: hidden;
            background: rgba(212, 175, 55, 0.2);
            -webkit-mask:
              linear-gradient(#000 0 0) content-box,
              linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }

          .review-gold-border::before {
            content: "";
            position: absolute;
            inset: -150%;
            background: conic-gradient(
              from 0deg,
              transparent 0deg 292deg,
              rgba(212, 175, 55, 0.15) 310deg,
              #d4af37 334deg,
              #fff1a8 346deg,
              #d4af37 356deg,
              transparent 360deg
            );
            animation: goldBorderOrbit 4s linear infinite;
          }

          @keyframes goldBorderOrbit {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}
