import React from "react";

const iconProps = {
  className: "text-green-700 shrink-0",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
};

const MailIcon = () => (
  <svg {...iconProps} width="14" height="14" aria-hidden="true">
    <path d="m4 4 8 8 8-8" />
    <rect width="18" height="14" x="3" y="5" rx="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps} width="14" height="14" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MapPinIcon = () => (
  <svg {...iconProps} className="text-green-700 mt-1 shrink-0" width="14" height="14" aria-hidden="true">
    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-black px-5 sm:px-8 py-10 text-sm sm:text-base">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start text-center md:text-left">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo1.png"
            alt="Logo"
            className="w-28 h-28 sm:w-32 sm:h-32"
          />

          <p className="mt-3 text-gray-700 leading-6">
            Empowering traders globally with next-generation tools, tight spreads, and uncompromising security.
          </p>

          <img
            src="/QR.PNG"
            alt="QR Code"
            className="w-20 h-20 sm:w-24 sm:h-24 mt-5"
          />
        </div>

        {/* Quick Links */}
        <div className="mt-6 md:mt-10">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-green-700">Home</a></li>
            <li><a href="#" className="hover:text-green-700">Market</a></li>
            <li><a href="#" className="hover:text-green-700">Trading Tools</a></li>
            <li><a href="#" className="hover:text-green-700">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="mt-6 md:mt-10">
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-green-700">FAQ</a></li>
            <li><a href="#" className="hover:text-green-700">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-700">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-700">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-6 md:mt-10">
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-700">

            <p className="flex items-center justify-center md:justify-start gap-2">
              <MailIcon />
              <a href="mailto:support@fxtrade.com" className="hover:text-green-700 break-all">
                support@fxtrade.com
              </a>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <PhoneIcon />
              <a href="tel:+15551234567" className="hover:text-green-700">
                +1 (555) 123-4567
              </a>
            </p>

            <p className="flex items-start justify-center md:justify-start gap-2">
              <MapPinIcon />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-700"
              >
                Global Tech Hub, London
              </a>
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-400 mt-10 pt-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-700 text-center md:text-left">
        <p>© 2023 FXTrade. All rights reserved.</p>
        <p className="md:text-right max-w-xl">
          Risk Warning: Trading foreign exchange and CFDs on margin carries a high level of risk and may not be suitable for all investors.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
