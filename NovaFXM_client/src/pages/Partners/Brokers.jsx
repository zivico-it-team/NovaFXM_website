import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/bro.png";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUp,
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
      action: "Get Started",
      image: heroBg,
    },
    {
      number: "02",
      title: "Invite New Traders",
      description:
        "Share your referral link with traders and grow your client network worldwide.",
      action: "Verify Now",
      image: "/Stock2.jpeg",
    },
    {
      number: "03",
      title: "Earn Commissions",
      description:
        "Receive commissions automatically whenever your referred clients trade.",
      action: "Start Now",
      image: "/Deposits5.png",
    },
  ];

  const goToPreviousStep = () => {
    setActiveStep((current) => (current === 0 ? steps.length - 1 : current - 1));
  };

  const goToNextStep = () => {
    setActiveStep((current) => (current + 1) % steps.length);
  };

  return (
    <div className="w-full bg-[#f7f8fc] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-black px-4 py-10 sm:min-h-[560px] sm:px-6 lg:min-h-[600px]">
        <img
          src={heroBg}
          alt="Introducing Brokers Hero"
          className="market-hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Hero Content */}
        <div className="market-hero-content relative z-10 mx-auto max-w-5xl text-center">

          <p className="market-hero-copy mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#D4AF37] md:text-base">
            NOVAFXM Partnership Program
          </p>

          <h1 className="market-hero-title text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Introducing Brokers
          </h1>

          <p className="market-hero-copy mt-6 text-base font-regular font-light leading-relaxed text-white/90">
            Build a powerful passive income stream by referring traders
            to NOVAFXM and earning commissions from every successful trade.
          </p>

          

        </div>

       

      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="px-6 py-10 sm:py-12 md:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Left Side */}
            <div>

              <p className="text-[#D4AF37] font-semibold uppercase tracking-[4px] mb-4">
                Partnership Benefits
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#014421] leading-tight">
                Refer Traders & Build Passive Income
              </h2>

              <div className="mt-4 mb-5 h-1 w-24 rounded-full bg-[#D4AF37]"></div>

              <p className="mb-4 text-justify font-regular text-base leading-relaxed text-gray-600">
                Join the NOVAFXM Introducing Broker program and unlock
                unlimited earning opportunities by referring traders
                to our trusted platform.
              </p>

              <p className="text-gray-600 text-justify font-regular text-base leading-relaxed">
                Our IB program is designed to help partners grow with
                reliable payouts, advanced tools, professional support
                and global market access.
              </p>

              

            </div>

            {/* ================= CREATIVE FEATURES SECTION ================= */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] border border-[#014421]/10 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Background Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

                  

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-semibold text-[#014421] transition duration-300 group-hover:text-[#012a15]">
                    {feature.title}
                  </h3>

                  {/* Divider */}
                  <div className="relative mb-4 h-[2px] w-full overflow-hidden bg-gray-100">

                    <div className="absolute left-0 top-0 h-full w-20 bg-[#D4AF37] group-hover:w-full transition-all duration-500"></div>

                  </div>

                  {/* Description */}
                  <p className="text-gray-600 font-regular leading-relaxed text-base">
                    {feature.description}
                  </p>

                  
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

   {/* ================= PROCESS SECTION ================= */}
<section className="bg-white px-4 py-8 sm:py-10">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-8 text-center sm:mb-10">
      <p className="mb-3 font-semibold uppercase tracking-[4px] text-[#D4AF37]">
        Partnership Process
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-[#014421]">
        Start Earning in 3 Steps
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]"></div>
    </div>

    {/* HORIZONTAL SLIDES */}
    <div className="overflow-hidden border-y-2 border-[#D4AF37] bg-[#04100b] shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeStep * 100}%)` }}
      >
      {steps.map((step, index) => (
        <article
          key={step.number}
          className={`group relative min-h-[250px] min-w-full overflow-hidden bg-[#04100b] transition-all duration-500 ${
            activeStep === index ? "shadow-[#014421]/25" : "opacity-95"
          }`}
        >
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 md:w-[58%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012414] via-[#014421]/95 to-[#014421]/20"></div>
          <div className="relative z-10 flex min-h-[230px] flex-col justify-center px-6 py-6 text-white sm:px-10 lg:px-14">
            <div className="flex max-w-3xl flex-col gap-4 md:max-w-xl">
              <div className="flex items-center gap-5">
                <span className="flex h-14 min-w-20 items-center justify-center rounded-l-[18px] rounded-r-sm bg-[#D4AF37] px-5 text-3xl font-black text-black">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold leading-tight text-[#f8d27a] md:text-3xl">
                  {step.title}
                </h3>
              </div>

              <p className="max-w-lg text-16px font-regular leading-7 text-white">
                {step.description}
              </p>
            <Link
              to="/signup"
              className="button-shine group/action w-fit rounded-full bg-[#D4AF37] px-9 py-3 text-16px font-semibold text-black shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#D4AF37]/80 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0"
            >
              <span
                className="inline-block transition-transform duration-300 ease-out group-hover/action:translate-x-0.5"
              >
                {step.action}
              </span>
            </Link>
            </div>
          </div>
        </article>
      ))}

      </div>
    </div>

    <div className="mx-auto mt-4 flex w-fit items-center gap-8 rounded-full bg-[#f7f8fc] px-6 py-3 shadow-sm">
      <button
        type="button"
        onClick={goToPreviousStep}
        aria-label="Previous step"
        className="text-[#014421] transition hover:text-[#D4AF37]"
      >
        <ChevronLeft size={28} strokeWidth={3} />
      </button>

      <div className="flex gap-3">
        {steps.map((step, index) => (
          <button
            key={step.number}
            type="button"
            aria-label={`Show step ${index + 1}`}
            onClick={() => setActiveStep(index)}
            className={`h-4 w-4 rounded-full transition ${
              activeStep === index ? "bg-[#014421]" : "bg-[#014421]/25"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={goToNextStep}
        aria-label="Next step"
        className="text-[#014421] transition hover:text-[#D4AF37]"
      >
        <ChevronRight size={28} strokeWidth={3} />
      </button>
    </div>

    {false && (<>

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
    </>)}

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
