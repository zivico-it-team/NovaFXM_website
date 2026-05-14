import React, { useState } from "react";
import heroBg from "../../assets/images/bro.png";
import {
  ChevronRight,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";

export default function IntroducingBrokers() {

  const [activeStep, setActiveStep] = useState(0);

  // ================= FEATURES =================
  const features = [
    {
      title: "24/7 Support",
      description:
        "Dedicated partner support available anytime you need assistance.",
    },
    {
      title: "High Commissions",
      description:
        "Earn competitive commissions from every active trader.",
    },
    {
      title: "Fast Withdrawals",
      description:
        "Quick and secure withdrawals with smooth transactions.",
    },
    {
      title: "Global Reach",
      description:
        "Expand your partnership network across worldwide markets.",
    },
  ];

  // ================= STEPS =================
  const steps = [
    {
      number: "01",
      title: "Register Your Account",
      description:
        "Create your Introducing Broker account and receive your personal referral link instantly.",
    },
    {
      number: "02",
      title: "Invite New Traders",
      description:
        "Share your referral link with traders and grow your client network worldwide.",
    },
    {
      number: "03",
      title: "Earn Commissions",
      description:
        "Receive commissions automatically whenever your referred clients trade.",
    },
  ];

  return (
    <div className="w-full bg-[#f7f8fc] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex h-[450px] items-center justify-center overflow-hidden bg-black md:h-[600px]">
        <img
          src={heroBg}
          alt="Introducing Brokers Hero"
          className="market-hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Hero Content */}
        <div className="market-hero-content relative z-10 max-w-5xl px-6 text-center">

          <p className="market-hero-copy mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#D4AF37] md:text-base">
            NOVAFXM Partnership Program
          </p>

          <h1 className="market-hero-title text-4xl font-bold leading-tight text-white md:text-7xl">
            Introducing Brokers
          </h1>

          <p className="market-hero-copy mt-6 text-lg font-light leading-relaxed text-white/90 md:text-2xl">
            Build a powerful passive income stream by referring traders
            to NOVAFXM and earning commissions from every successful trade.
          </p>

          

        </div>

       

      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6 md:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Side */}
            <div>

              <p className="text-[#D4AF37] font-semibold uppercase tracking-[4px] mb-4">
                Partnership Benefits
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#014421] leading-tight">
                Refer Traders & Build Passive Income
              </h2>

              <div className="w-24 h-1 bg-[#D4AF37] rounded-full mt-6 mb-8"></div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Join the NOVAFXM Introducing Broker program and unlock
                unlimited earning opportunities by referring traders
                to our trusted platform.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our IB program is designed to help partners grow with
                reliable payouts, advanced tools, professional support
                and global market access.
              </p>

              

            </div>

            {/* ================= CREATIVE FEATURES SECTION ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] bg-white border border-[#014421]/10 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >

                  {/* Background Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

                  

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#014421] mb-4 group-hover:text-[#012a15] transition duration-300">
                    {feature.title}
                  </h3>

                  {/* Divider */}
                  <div className="relative w-full h-[2px] bg-gray-100 mb-6 overflow-hidden">

                    <div className="absolute left-0 top-0 h-full w-20 bg-[#D4AF37] group-hover:w-full transition-all duration-500"></div>

                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

   {/* ================= PROCESS SECTION ================= */}
<section className="py-10 px-4 bg-white">
  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold mb-4">
        Partnership Process
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#014421]">
        Start Earning in 3 Steps
      </h2>

      <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
    </div>

    {/* CARD */}
    <div className="relative bg-gradient-to-r from-[#014421] to-[#022d16] text-white rounded-[40px] p-8 md:p-10 shadow-2xl overflow-hidden">

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-sm font-bold mb-6">
        {steps[activeStep].number}
      </div>

      <h2 className="text-xl md:text-3xl font-bold mb-2">
        {steps[activeStep].title}
      </h2>

      <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-2xl">
        {steps[activeStep].description}
      </p>

      <div className="mt-10 flex justify-between items-center">

        <span className="text-[#D4AF37] text-sm md:text-base font-semibold">
          Step {activeStep + 1} of {steps.length}
        </span>

        <div className="flex gap-3">

          {activeStep > 0 && (
            <button
              onClick={() => setActiveStep(activeStep - 1)}
              className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 hover:bg-white/20"
            >
              Previous
            </button>
          )}

          {activeStep < steps.length - 1 ? (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="px-4 py-2 text-sm rounded-full bg-[#D4AF37] text-black font-bold hover:bg-[#c9a432]"
            >
              Next Step
            </button>
          ) : (
            <span className="text-[#D4AF37] font-bold px-4 py-2 text-sm">
              Completed 🎉
            </span>
          )}

        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= SCROLL BUTTON ================= */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#014421] hover:bg-[#012a15] text-white flex items-center justify-center shadow-2xl transition duration-300"
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
}
