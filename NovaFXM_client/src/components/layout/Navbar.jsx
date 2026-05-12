// src/components/layout/Navbar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // adjust path if needed

export default function Navbar() {
  const navigate = useNavigate();

  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  // ─── Route map: dropdown option → path ──────────────────────────────────────
  // Add new pages here. Options not listed here do nothing when clicked.
  const optionRoutes = {
    // Home dropdown
    Platform: "/",
    "Account Type": "/account-type",
    "Deposits & Withdrawals": "/deposit",
    Promotions: "/promotions",
    "Terms & Conditions": "/terms-conditions",
    // Market dropdown
    Indices: "indices",
    Crypto: "/crypto",
    Stocks: "/stocks",
    Forex: "/markets/forex",
    Commodities: "/markets/commodities",
    // Trading Tool dropdown
    "Economic Calender": "/tools/economic-calendar",
    "Automated Trading": "/tools/automated-trading",
    // Partners dropdown
    "Introducing Brokers": "/partners/introducing-brokers",
    // About Us dropdown
    "Why Us": "/why-us",
    "FAQ's": "/faqs",
    "Contact Us": "/contact",
    // Register Now dropdown
    "Open Live Account": "/signup",
    "Demo Account": "/signup",
    "Islamic Account": "/signup",
  };

  // ─── Dropdown structure ──────────────────────────────────────────────────────
  const dropdownContent = {
    Home: [
      "Platform",
      "Account Type",
      "Deposits & Withdrawals",
      "Promotions",
      "Terms & Conditions",
    ],
    Market: ["Indices", "Crypto", "Stocks", "Forex", "Commodities"],
    "Trading Tool": ["Economic Calender", "Automated Trading"],
    Partners: ["Introducing Brokers"],
    "About Us": ["Why Us", "FAQ's", "Contact Us"],
    "Register Now": ["Open Live Account", "Demo Account", "Islamic Account"],
  };

  const menuItems = Object.keys(dropdownContent);

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  const goHome = () => {
    navigate("/");
    closeMobileMenu();
    requestAnimationFrame(() => {
      document
        .getElementById("hero")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (item) => {
    setOpenMobileDropdown((prev) => (prev === item ? null : item));
  };

  const handleDropdownOptionClick = (option) => {
    const route = optionRoutes[option];
    if (route) {
      navigate(route);
    }
    setHoveredMenu(null);
    closeMobileMenu();
  };

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8 relative">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">

        {/* ── Logo ──────────────────────────────────────────────────────────── */}
        <button type="button" className="flex items-center" onClick={goHome}>
          <img
            src={logo}
            alt="NOVAFX Logo"
            className="h-6 md:h-9 object-contain"
          />
        </button>

        {/* ── Desktop Menu ──────────────────────────────────────────────────── */}
        <ul className="hidden items-center gap-5 text-sm font-medium text-gray-700 lg:flex xl:gap-8">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                type="button"
                className="nav-link cursor-pointer transition-colors hover:text-green-600"
                onClick={() => {
                  if (item === "Home") {
                    goHome();
                    return;
                  }
                  setHoveredMenu((prev) => (prev === item ? null : item));
                }}
              >
                {item}
              </button>

              {/* Desktop Dropdown */}
              {hoveredMenu === item && (
                <div className="absolute left-0 top-full z-50 w-52 pt-2">
                  <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                    {dropdownContent[item].map((option, index) => (
                      <button
                        type="button"
                        key={index}
                        className="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-green-50 hover:text-green-600"
                        onClick={() => handleDropdownOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop Buttons ───────────────────────────────────────────────── */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="button-shine px-4 py-2 rounded-full text-xs font-medium
              bg-white/80 backdrop-blur-md border border-gray-300 text-gray-700
              shadow-sm transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:border-green-700 hover:bg-green-50 hover:text-green-700 hover:shadow-md
              active:translate-y-0"
          >
            Sign up
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine px-6 py-2 rounded-full text-xs font-medium
              bg-[#014421] text-white
              shadow-md transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20
              active:translate-y-0"
          >
            Login
          </button>
        </div>

        {/* ── Mobile: User Icon + Hamburger ─────────────────────────────────── */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => navigate("/login")}
          >
            <FaUser className="w-5 h-5 text-gray-700" />
          </button>

          <button
            className="flex flex-col space-y-1.5 p-2"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-45 translate-y-2 bg-green-600"
                  : "bg-gray-700"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "bg-gray-700"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-green-600"
                  : "bg-gray-700"
              }`}
            />
          </button>
        </div>

        {/* ── Mobile Menu Panel ─────────────────────────────────────────────── */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            <div className="absolute left-0 right-0 top-full z-50 animate-slideDown bg-white shadow-2xl lg:hidden">
              <div className="flex flex-col py-2 max-h-[80vh] overflow-y-auto">
                {menuItems.map((item) => (
                  <div key={item} className="border-b border-gray-100">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-green-50 active:bg-green-100"
                      onClick={() => {
                        if (item === "Home") {
                          goHome();
                          return;
                        }
                        toggleMobileDropdown(item);
                      }}
                    >
                      <span className="font-medium text-gray-700 hover:text-green-600 active:text-green-700 transition-colors">
                        {item}
                      </span>
                      <svg
                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                          openMobileDropdown === item ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Items */}
                    {openMobileDropdown === item && (
                      <div className="bg-green-50 pl-8 animate-slideDown">
                        {dropdownContent[item].map((option, index) => (
                          <button
                            type="button"
                            key={index}
                            className="block w-full border-l-2 border-transparent px-4 py-3 text-left text-sm text-gray-600 transition-colors hover:border-green-600 hover:bg-green-100 hover:text-green-700 active:border-green-700 active:bg-green-200"
                            onClick={() => handleDropdownOptionClick(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Sign Up / Login buttons */}
                <div className="flex gap-3 px-6 py-4">
                  <button
                    type="button"
                    onClick={() => { navigate("/signup"); closeMobileMenu(); }}
                    className="flex-1 py-2 rounded-full text-xs font-medium border border-gray-300 text-gray-700 hover:border-green-700 hover:text-green-700 transition-colors"
                  >
                    Sign up
                  </button>
                  <button
                    type="button"
                    onClick={() => { navigate("/login"); closeMobileMenu(); }}
                    className="flex-1 py-2 rounded-full text-xs font-medium bg-[#014421] text-white hover:bg-green-800 transition-colors"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}