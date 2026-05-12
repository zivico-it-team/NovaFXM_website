import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // adjust path if needed

export default function Header({
  onHomeClick,
  onSignUpClick,
  onLoginClick,
  onAccountTypeClick,
  onDepositsWithdrawalsClick,
  onPromotionsClick,
  onTermsConditionsClick,
  onWhyUsClick,
  onCryptoClick,
}) {
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const [showMobileLogin, setShowMobileLogin] = useState(false)

  // Dropdown content for each menu item
  const dropdownContent = {
    Home: ['Platform', 'Account Type', 'Deposits & Withdrawals','Promotions','Terms & Conditions'],
    Market: ['Indices','Crypto','Stocks','Forex', 'Commodities'],
    'Trading Tool': ['Economic Calender', 'Automated Trading'],
    Partners: ['Introducing Brokers'],
    'About Us': ['Why Us', "FAQ's", 'Contact Us'],
    'Register Now': ['Open Live Account', 'Demo Account', 'Islamic Account']
  }
  const menuItems = Object.keys(dropdownContent)

  const toggleMobileDropdown = (item) => {
    if (openMobileDropdown === item) {
      setOpenMobileDropdown(null)
    } else {
      setOpenMobileDropdown(item)
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenMobileDropdown(null)
  }

  const handleDropdownOptionClick = (option) => {
    const actions = {
      Platform: onHomeClick,
      'Account Type': onAccountTypeClick,
      'Deposits & Withdrawals': onDepositsWithdrawalsClick,
      Promotions: onPromotionsClick,
      'Terms & Conditions': onTermsConditionsClick,
      Crypto: onCryptoClick,
      'Why Us': onWhyUsClick,
      'Open Live Account': onSignUpClick,
      'Demo Account': onSignUpClick,
      'Islamic Account': onSignUpClick,
    }

    const action = actions[option]

    if (!action) {
      return
    }

    action()
    setHoveredMenu(null)
    closeMobileMenu()
  }

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8 relative">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center"
          onClick={onHomeClick}
        >
        <img 
        src={logo} 
        alt="NOVAFX Logo"
        className="h-6 md:h-9 object-contain"
      />
        <div className="text-green-700 font-bold text-xl md:text-2xl">
          
        </div>
      </button>
      {/* Desktop Menu - Hidden on mobile */}
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
                if (item === 'Home') {
                  onHomeClick?.()
                  setHoveredMenu(null)
                  return
                }

                setHoveredMenu(hoveredMenu === item ? null : item)
              }}
              onFocus={() => setHoveredMenu(item)}
            >
              {item}
            </button>
            
            {/* Dropdown Menu on Hover - Desktop only */}
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

      {/* Desktop Buttons - Hidden on mobile */}
    <div className="hidden items-center gap-3 lg:flex">
  
        <button
          type="button"
          onClick={onSignUpClick}
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
          onClick={onLoginClick}
          className="button-shine px-6 py-2 rounded-full text-xs font-medium 
        bg-[#014421] text-white
        shadow-md transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20
        active:translate-y-0"
        >
          Login
        </button>

      </div>

      {/* Mobile Right Section - Login Icon and Hamburger */}
      <div className="flex items-center gap-3 lg:hidden">
        {/* Mobile Login Icon Button */}
        <button 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
          onClick={() => {
            setShowMobileLogin(false)
            onLoginClick?.()
          }}
        >
          <FaUser className="w-5 h-5 text-gray-700" />
        </button>

        {/* Hamburger Button */}
        <button 
          className="flex flex-col space-y-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-green-600' : 'bg-gray-700'}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'bg-gray-700'}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-green-600' : 'bg-gray-700'}`}></span>
        </button>
      </div>

      {/* Mobile Login Panel */}
      {showMobileLogin && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowMobileLogin(false)}
          />
          
         
        </>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="absolute left-0 right-0 top-full z-50 animate-slideDown bg-white shadow-2xl lg:hidden">
            {/* Mobile Navigation Items */}
            <div className="flex flex-col py-2 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item} className="border-b border-gray-100">
                  {/* Main Menu Item with Arrow */}
                  {item === 'Home' ? (
                    <div className="flex items-center transition-colors hover:bg-green-50 active:bg-green-100">
                      <button
                        type="button"
                        className="flex-1 px-6 py-4 text-left font-medium text-gray-700 transition-colors hover:text-green-600 active:text-green-700"
                        onClick={() => {
                          onHomeClick?.()
                          closeMobileMenu()
                        }}
                      >
                        {item}
                      </button>

                      <button
                        type="button"
                        className="px-6 py-4"
                        onClick={() => toggleMobileDropdown(item)}
                        aria-label="Toggle Home menu"
                      >
                        <svg
                          className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openMobileDropdown === item ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-green-50 active:bg-green-100"
                      onClick={() => {
                        toggleMobileDropdown(item)
                      }}
                    >
                      <span className="font-medium text-gray-700 hover:text-green-600 active:text-green-700 transition-colors">
                        {item}
                      </span>
                      {/* Arrow Icon */}
                      <svg
                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openMobileDropdown === item ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  
                  {/* Mobile Dropdown Items - Collapsible */}
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
            </div>
          </div>
        </>
      )}
      </div>
    </header>
  )
}
