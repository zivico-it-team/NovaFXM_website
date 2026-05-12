import { Users, Globe, Headset } from "lucide-react";

const reviews = [
  {
    name: "David Chen",
    role: "Day Trader",
    image: "/src/assets/images/1.jpeg",
    text: "Execution speed is extremely fast and reliable. Perfect for short-term trading strategies.",
  },
  {
    name: "Sarah Jenkins",
    role: "Forex Analyst",
    image: "/src/assets/images/2.jpeg",
    text: "Customer support is very responsive and professional. Always available even during market volatility.",
  },
  {
    name: "John Silva",
    role: "Investor",
    image: "/src/assets/images/1.jpeg",
    text: "Stable and secure trading platform. Clean UI makes trading smooth and easy.",
  },
  {
    name: "Amal Perera",
    role: "Retail Trader",
    image: "/src/assets/images/2.jpeg",
    text: "Very beginner-friendly platform. Simple tools helped me start trading quickly.",
  },
  {
    name: "Nimal Fernando",
    role: "Crypto Trader",
    image: "/src/assets/images/1.jpeg",
    text: "Great performance across crypto & forex markets. Reliable execution even in volatility.",
  },
];

// ✅ REUSABLE REVIEW CARD
const ReviewCard = ({ name, role, image, text }) => (
  <div className="w-[260px] sm:w-[300px] md:w-[350px] flex-shrink-0 bg-gray-100 p-5 md:p-6 rounded-2xl">
    <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>

    <p className="text-gray-700 text-xs sm:text-sm leading-6 mb-4 text-justify">
      {text}
    </p>

    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src={image}
        alt={name}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
      />

      <div>
        <h4 className="font-semibold text-green-700 text-sm">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

// ✅ STATS DATA (NEW)
const stats = [
  {
    icon: Users,
    value: "20M+",
    title: "Traders",
    desc: "Active users executing trades daily across our global network.",
  },
  {
    icon: Globe,
    value: "150+",
    title: "Trusted Globally",
    desc: "Regulated and compliant in multiple jurisdictions worldwide.",
  },
  {
    icon: Headset,
    value: "24/7",
    title: "Expert Support",
    desc: "Multilingual support team ready to assist you at any time.",
  },
];

// ✅ REUSABLE STAT BOX
const StatBox = ({ icon: Icon, value, title, desc }) => (
  <div className="interactive-card flex flex-col items-center rounded-2xl p-4 text-center">
    <div className="bg-yellow-400 w-11 h-11 md:w-12 md:h-12 rounded-lg mb-4 flex items-center justify-center">
      <Icon size={20} color="black" />
    </div>

    <h3 className="text-xl md:text-2xl font-bold">{value}</h3>
    <p className="text-sm font-bold text-gray-600">{title}</p>
    <p className="text-xs text-gray-500 mt-2">{desc}</p>
  </div>
);

export default function Review() {
  return (
    <section className="reveal-section bg-white px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      {/* TITLE */}
      <h2 className="mb-10 text-center text-xl font-bold sm:text-2xl md:mb-14 md:text-3xl">
        Traders Experience With Us
      </h2>

      {/* CAROUSEL */}
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="flex gap-5 md:gap-8 w-max animate-scroll">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="mt-16 text-center md:mt-24">
        <h2 className="text-xl md:text-2xl font-bold mb-10 md:mb-14">
          Built on Trust & Performance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <StatBox key={i} {...s} />
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 45s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
