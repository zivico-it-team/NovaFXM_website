import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Headphones,
  User,
  MessageSquare,
  ChevronDown,
  Check,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#f7f8f7] min-h-screen overflow-hidden">
      
      {/* HERO SECTION */}
      <section
        className="relative min-h-[350px] md:min-h-[520px] lg:min-h-[calc(100vh-76px)] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%] flex items-center"
        style={{
          backgroundImage: "url('/contact Us.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#021b14]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 py-20 lg:py-28 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
            Contact <span className="text-[#1fa15a]">Us</span>
          </h1>

          <p className="mt-5 lg:mt-7 text-gray-300 max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-xl lg:text-2xl leading-7 lg:leading-9">
            Our dedicated support team is here to assist you through various
            channels.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.2fr] gap-7 items-stretch">

          {/* LEFT SIDE */}
          <div className="relative overflow-hidden rounded-[30px] border border-[#edf1ed] bg-white p-6 sm:p-8 md:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">

            {/* BG CIRCLE */}
            <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[#f3f6f2]"></div>

            <div className="relative z-10">

              {/* LABEL */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef8f0] px-4 py-2">
                <Headphones className="text-[#0d6b36]" size={16} />
                <span className="text-sm font-semibold text-[#0d6b36]">
                  Need help?
                </span>
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-[#171717]">
                Contact <span className="text-[#0d6b36]">Novafxm</span>
              </h2>

              {/* LINE */}
              <div className="mt-5 h-[3px] w-14 rounded-full bg-[#0d6b36]"></div>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-600">
                Our dedicated support team is here to assist you through
                various channels.
                <span className="font-semibold text-[#0d6b36]">
                  {" "}Reach out to us
                </span>{" "}
                through any of the options below.
              </p>

              {/* CARDS */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* CALL CARD */}
                <div className="group rounded-[26px] border border-[#edf0ed] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(1,68,33,0.14)]">

                  {/* ICON */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#d5e4d8] bg-[#f8fbf8]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-[#0d6b36]">
                      <Phone
                        className="text-[#0d6b36] group-hover:text-white"
                        size={30}
                      />
                    </div>

                    <span className="absolute right-1 top-10 h-3.5 w-3.5 rounded-full bg-lime-400 ring-4 ring-white"></span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-6 text-center">
                    <span className="text-sm font-semibold text-[#0d6b36]">
                      Contact Us
                    </span>

                    <h3 className="mt-3 text-[30px] font-extrabold text-[#161616]">
                      Call us on
                    </h3>

                    <p className="mt-2 text-[15px] text-gray-500">
                      Our Phone Number
                    </p>

                    <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#0d6b36]"></div>
                  </div>

                  {/* FEATURES */}
                  <ul className="mt-7 space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0d6b36]" />
                      Speak directly with our team
                    </li>

                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0d6b36]" />
                      Available during business hours
                    </li>

                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0d6b36]" />
                      Quick and reliable support
                    </li>
                  </ul>

                  {/* BUTTON */}
                  <button className="mt-8 flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#0b5b2e] text-sm font-bold text-white transition-all duration-300 hover:bg-[#084725]">
                    <Phone size={18} />
                    Click to call
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* EMAIL CARD */}
                <div className="group rounded-[26px] border border-[#edf0ed] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(1,68,33,0.14)]">

                  {/* ICON */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#d5e4d8] bg-[#f8fbf8]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-[#0d6b36]">
                      <Mail
                        className="text-[#0d6b36] group-hover:text-white"
                        size={30}
                      />
                    </div>

                    <span className="absolute right-1 top-10 h-3.5 w-3.5 rounded-full bg-lime-400 ring-4 ring-white"></span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-6 text-center">
                    <span className="text-sm font-semibold text-[#0d6b36]">
                      Support
                    </span>

                    <h3 className="mt-3 text-[30px] font-extrabold text-[#161616]">
                      Email Support
                    </h3>

                    <p className="mt-2 text-[15px] text-gray-500">
                      Chat live with our forex specialist.
                    </p>

                    <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#0d6b36]"></div>
                  </div>

                  {/* FEATURES */}
                  <ul className="mt-7 space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0d6b36]" />
                      We aim to respond quickly
                    </li>

                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0d6b36]" />
                      Detailed and helpful replies
                    </li>

                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0d6b36]" />
                      Available 24/7
                    </li>
                  </ul>

                  {/* BUTTON */}
                  <button className="mt-8 flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#0b5b2e] text-sm font-bold text-white transition-all duration-300 hover:bg-[#084725]">
                    <Mail size={18} />
                    Email to us
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#00381f] via-[#004b2a] to-[#005f36] p-7 sm:p-8 text-white shadow-[0_18px_45px_rgba(0,40,22,0.26)]">

            {/* DOTS */}
            <div className="absolute right-5 top-5 h-28 w-28 bg-[radial-gradient(rgba(185,255,120,0.4)_1px,transparent_1.5px)] [background-size:10px_10px] opacity-70"></div>

            <div className="relative z-10">
              <h3 className="text-[34px] font-bold mt-10 mb-2">Contact Info</h3>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-lime-400"></div>

              {/* INFO ITEMS */}
              <div className="mt-7 space-y-6">

                {/* ADDRESS */}
                <div className="flex gap-4 border-b border-white/15 pb-10 pt-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-500 shadow-[0_8px_24px_rgba(117,214,43,0.30)]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold">Address</h4>

                    <p className="mt-1 text-sm leading-6 text-white/85">
                      82 Buckingham Palace Rd,
                      <br />
                      London SW1W 9TJ, UK
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4 border-b border-white/15 pb-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-500 shadow-[0_8px_24px_rgba(117,214,43,0.30)]">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold">Phone</h4>

                    <p className="mt-1 text-sm text-white/85">
                      +44 1227 390479
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4 border-b border-white/15 pb-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-500 shadow-[0_8px_24px_rgba(117,214,43,0.30)]">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold">Email</h4>

                    <p className="mt-1 text-sm break-all text-white/85">
                      support@novafxm.com
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex gap-4 pb-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-500 shadow-[0_8px_24px_rgba(117,214,43,0.30)]">
                    <Clock size={22} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold">Working Hours</h4>

                    <p className="mt-1 text-sm leading-6 text-white/85">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM (GMT)
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-8 flex h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-lime-400 text-sm font-bold text-[#06351e] transition-all duration-300 hover:bg-lime-300">
                <MapPin size={18} />
                View On Google Map
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}