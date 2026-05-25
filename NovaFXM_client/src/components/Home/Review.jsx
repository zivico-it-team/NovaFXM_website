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

const ReviewCard = ({ name, role, image, text, index }) => (
  <div
    className="review-card-animate relative flex min-h-[360px] w-[calc(100vw-2rem)] max-w-[300px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-[22px] border-2 border-[#D4AF37] bg-[#111312] px-8 py-9 shadow-[0_24px_60px_rgba(0,0,0,0.42)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(212,175,55,0.18)] sm:w-[320px] sm:max-w-[320px] md:min-h-[410px] md:w-[340px] md:max-w-[340px] md:px-9 md:py-10"
    style={{ animationDelay: `${(index % reviews.length) * 0.18}s` }}
  >
    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.045),transparent_48%)]"></span>

    <div className="relative mb-8 text-2xl leading-none text-[#f3cf64]">★★★★★</div>

    <p className="relative mb-4 text-left text-base leading-8 text-white sm:text-lg sm:leading-9">
      {text}
    </p>

    <div className="relative mt-10 flex items-center gap-4">
      <img
        src={image}
        alt={name}
        className="h-16 w-16 rounded-full border-2 border-[#D4AF37] object-cover p-1"
      />

      <div>
        <h4 className="text-xl font-semibold leading-tight text-[#6fba63]">{name}</h4>
        <p className="text-base leading-tight text-white/60">{role}</p>
      </div>
    </div>
  </div>
);

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

const StatBox = ({ icon: Icon, value, title, desc }) => (
  <div className="interactive-card flex flex-col items-center rounded-2xl p-4 text-center sm:p-5">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#D4AF37] md:h-12 md:w-12">
      <Icon size={20} color="black" />
    </div>

    <h3 className="text-xl font-bold md:text-2xl">{value}</h3>
    <p className="text-base font-bold text-gray-600">{title}</p>
    <p className="mt-2 text-center text-base text-gray-500 sm:text-center">{desc}</p>
  </div>
);

export default function Review() {
  return (
    <section className="reveal-section bg-white">
      <div className="bg-[#111312] px-4 py-10  rounded-3xl sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <h2 className="mb-8 text-center text-xl font-bold leading-tight text-white sm:text-2xl md:mb-10 md:text-3xl">
          Traders Experience With Us
        </h2>

        <div className="mx-auto max-w-7xl overflow-hidden py-3">
          <div className="flex w-max animate-scroll gap-6 sm:gap-8 md:gap-10">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={index} index={index} {...review} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-8 text-center sm:px-6 sm:py-10 md:py-14 lg:px-8">
        <h2 className="mb-5 text-xl font-bold leading-tight sm:mb-7 md:mb-9 md:text-2xl">
          Built on Trust & Performance
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-10">
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
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes reviewFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .review-card-animate {
            animation: reviewFloat 5s ease-in-out infinite;
          }

          .animate-scroll:hover .review-card-animate {
            animation-play-state: paused;
          }

        `}
      </style>
    </section>
  );
}
