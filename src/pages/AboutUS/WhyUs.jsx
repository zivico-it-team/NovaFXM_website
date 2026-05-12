import React from "react";
import {
  ShieldCheck,
  Scale,
  Users,
  Star,
  ChevronDown,
  TrendingUp,
  Globe,
 Headphones,
} from "lucide-react";

/* ================= DATA ================= */

const values = [
  {
    title: "Transparency",
    description:
      "We prioritize open communication and integrity, ensuring our clients have full access to the information necessary to make informed decisions and trade confidently.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description:
      "Trust is the foundation of our reputation. We are committed to upholding the highest standards of integrity in all our actions and interactions.",
    icon: Scale,
  },
  {
    title: "Customer-Centric",
    description:
      "Our clients are at the heart of everything we do. We focus on providing personalized solutions tailored to each trader’s specific needs.",
    icon: Users,
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Advanced & Cutting-Edge\nPlatform",
    color: "text-green-700",
    bg: "bg-green-100",
    iconColor: "text-green-700",
    border: "bg-green-700",
    description:
      "Enjoy a seamless trading experience with our state-of-the-art technology, featuring fast execution and advanced trading tools.",
  },
  {
    icon: Globe,
    title: "Diverse Range of\nProducts",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    border: "bg-yellow-500",
    description:
      "Access global markets including forex, commodities, indices, and more with flexible trading solutions.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    color: "text-green-700",
    bg: "bg-green-100",
    iconColor: "text-green-700",
    border: "bg-green-700",
    description:
      "Our professional support team is available anytime to assist throughout your trading journey.",
  },
];

/* ================= COMPONENTS ================= */

const SectionTitle = ({ top, title }) => (
  <div className="text-center mb-16">
    <p className="text-yellow-500 uppercase tracking-[3px] text-sm font-semibold">
      {top}
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">{title}</h2>

    <div className="w-20 h-1 bg-yellow-500 rounded-full mx-auto mt-5"></div>
  </div>
);

/* ================= FEATURE CARD ================= */

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  bg,
  iconColor,
  border,
}) => (
  <div
    className="
      relative
      bg-white
      rounded-[16px]
      border border-gray-100
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      hover:-translate-y-2
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      transition-all duration-300
      overflow-hidden
      pt-32
      pb-10
      px-8
      min-h-[390px]
      flex flex-col items-center
      text-center
    "
  >
    {/* ICON */}
    <div
      className={`
        absolute
        top-6
        left-1/2
        -translate-x-1/2
        w-[78px]
        h-[78px]
        rounded-full
        ${bg}
        border-[6px]
        border-white
        shadow-lg
        flex items-center justify-center
      `}
    >
      <Icon
        className={`${iconColor} w-9 h-9`}
        strokeWidth={2.3}
      />
    </div>

    {/* TITLE */}
    <h3
      className={`
        whitespace-pre-line
        ${color}
        text-[22px]
        leading-[40px]
        font-bold
        min-h-[130px]
        flex items-center justify-center
      `}
    >
      {title}
    </h3>

    {/* LINE */}
    <div className={`w-14 h-[3px] rounded-full mb-6 ${border}`}></div>

    {/* DESCRIPTION */}
    <p
      className="
        text-gray-500
        text-[15px]
        leading-[34px]
        flex-1
        flex items-start justify-center
      "
    >
      {description}
    </p>

    {/* BOTTOM BAR */}
    <div
      className={`
        absolute
        bottom-0
        left-0
        w-full
        h-[5px]
        ${border}
      `}
    ></div>
  </div>
);

/* ================= VALUE CARD ================= */

const ValueCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex gap-6 items-start border border-gray-100">

    <div className="min-w-[72px] h-[72px] rounded-full bg-[#e4e4e4] flex items-center justify-center">
      <Icon className="w-8 h-8 text-[#557d34]" />
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-[#3f7d2c]">
        {title}
      </h3>

      <p className="mt-2 text-gray-600 leading-relaxed text-base">
        {description}
      </p>
    </div>

  </div>
);

/* ================= MAIN ================= */

const WhyUs = () => {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}

      <section
  className="relative h-screen bg-cover bg-center flex items-center justify-start px-6 md:px-20"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')",
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 w-full max-w-7xl flex justify-start">

    <div className="max-w-xl text-left text-white">

      <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
        Welcome To NOVAFXM
      </p>


      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Why Choose <br />
        <span className="text-green-400 text-2xl">NOVAFXM</span>
      </h1>

      <p className="mt-6 text-gray-200 leading-relaxed">
        Trusted by traders. Driven by excellence. Secure and innovative
        trading solutions.
      </p>

      <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3 rounded-full shadow-lg">
        Explore More
      </button>

    </div>

  </div>
</section>
      {/* ================= ABOUT ================= */}

      <section className="px-6 md:px-16 py-20 bg-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="building"
              className="rounded-[30px] shadow-2xl w-full h-[500px] object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-green-700 text-white rounded-2xl px-6 py-5 shadow-xl">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm mt-1">Years Experience</p>
            </div>

          </div>

          {/* TEXT */}

          <div>

            <p className="text-yellow-500 uppercase tracking-[2px] text-sm font-semibold">
              ABOUT AS MARKETS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Why Choose <br />
              <span className="text-green-700 text-3xl">NOVAFXM</span>
            </h2>

            <div className="w-24 h-[3px] bg-yellow-500 rounded-full mt-5"></div>

            <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">

              <p>
                At NOVAFXM, our mission is to create a trusted and efficient
                trading environment that empowers our clients to achieve their
                financial objectives.
              </p>

              <p>
                We are dedicated to delivering an exceptional trading experience
                by continuously innovating our platform, expanding our range of
                products, and providing world-class customer service.
              </p>

              <p>
                Our vision is to make financial markets accessible to everyone,
                fostering a global community of informed and confident traders.
              </p>

            </div>

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-full shadow-lg">
              Learn More About Us
            </button>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="px-6 md:px-16 py-24 bg-[#f7f7f7]">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            top="Why Traders Trust Us"
            title={
              <>
                What Sets{" "}
                <span className="text-green-700">NOVAFXM</span> Apart?
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            {features.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}

          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="bg-[#f5f5f5] py-24 px-4 md:px-10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-10 items-stretch">

          {/* LEFT BOX */}

          <div className="relative self-stretch rounded-[22px] bg-[#00552d] overflow-hidden shadow-2xl h-full">

            <div className="absolute top-0 left-0 w-full h-[120px] bg-[#0d6b3f] rounded-b-[100%]" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-10">

              <div className="w-20 h-20 rounded-full border border-yellow-400 flex items-center justify-center mb-6">
                <Star className="w-9 h-9 text-yellow-400" />
              </div>

              <h2 className="text-white text-4xl font-bold">
                Our <span className="block text-yellow-400">Core Values</span>
              </h2>

              <div className="w-16 h-[3px] bg-yellow-400 rounded-full mt-5"></div>

            </div>

          </div>

          {/* RIGHT CARDS */}

          <div className="space-y-6 flex flex-col justify-between">

            {values.map((item, i) => (
              <ValueCard key={i} {...item} />
            ))}

            <div className="flex justify-end pt-2">
              <ChevronDown className="text-gray-400 w-6 h-6" />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default WhyUs;