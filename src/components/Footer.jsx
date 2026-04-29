import React from "react";
import image1 from "../../public/logo1.png";
import image2 from "../../public/QR.PNG";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-black px-5 sm:px-8 py-10 text-sm sm:text-base">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start text-center md:text-left">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={image1}
            alt="Logo"
            className="w-28 h-28 sm:w-32 sm:h-32"
          />

          <p className="mt-3 text-gray-700 leading-6">
            Empowering traders globally with next-generation tools, tight spreads, and uncompromising security.
          </p>

          <img
            src={image2}
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
              <Mail size={14} className="text-green-700" />
              <a href="mailto:support@fxtrade.com" className="hover:text-green-700 break-all">
                support@fxtrade.com
              </a>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={14} className="text-green-700" />
              <a href="tel:+15551234567" className="hover:text-green-700">
                +1 (555) 123-4567
              </a>
            </p>

            <p className="flex items-start justify-center md:justify-start gap-2">
              <MapPin size={14} className="text-green-700 mt-1" />
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