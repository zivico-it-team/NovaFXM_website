import React, { useState } from 'react'

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)

  // Dropdown content for each menu item
  const dropdownContent = {
    Home: ['Dashboard', 'Trading View', 'Economic Calendar'],
    Market: ['Forex', 'Commodities', 'Indices', 'Cryptocurrencies'],
    'Trading Tool': ['Calculator', 'Chart Tools', 'Signals', 'Analysis'],
    Partners: ['Affiliate Program', 'IB Program', 'White Label'],
    'About Us': ['Company', 'Contact', 'Careers', 'Legal'],
    'Register Now': ['Open Live Account', 'Demo Account', 'Islamic Account']
  }

  const toggleMobileDropdown = (item) => {
    if (openMobileDropdown === item) {
      setOpenMobileDropdown(null)
    } else {
      setOpenMobileDropdown(item)
    }
  }

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm relative">
      {/* Logo */}
      <div className="text-green-700 font-bold text-xl md:text-2xl">
        NOVAFX<span className="text-black"></span>
      </div>


      {/* Desktop Menu - Hidden on mobile */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        {['Home', 'Market', 'Trading Tool', 'Partners', 'About Us', 'Register Now'].map((item) => (
          <li 
            key={item} 
            className="relative"
            onMouseEnter={() => setHoveredMenu(item)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="hover:text-green-600 cursor-pointer transition-colors">
              {item}
            </div>
            
            {/* Dropdown Menu on Hover - Desktop only */}
            {hoveredMenu === item && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {dropdownContent[item].map((option, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors text-sm"
                    onClick={() => {
                      console.log(`Clicked: ${option}`)
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Buttons - Hidden on mobile (hidden on screens smaller ) */}
      <div className="hidden md:flex space-x-3">
        <button className="bg-white border border-gray-300 px-5 py-2 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
          Sign up
        </button>
        <button className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition-colors">
          Login
        </button>
      </div>

      {/* Mobile Hamburger Button - Only visible on mobile */}
      <button 
        className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-green-600' : 'bg-gray-700'}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'bg-gray-700'}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-green-600' : 'bg-gray-700'}`}></span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
             className="text-green-700 font-bold text-xl md:text-2xl">
            <span className="text-black">M.</span>
          </div>
          
          
          {/* Mobile Menu Panel - No buttons here anymore */}
          <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 md:hidden animate-slideDown">
            {/* Mobile Navigation Items */}
            <div className="flex flex-col py-2 max-h-[80vh] overflow-y-auto">
              {['Home', 'Market', 'Trading Tool', 'Partners', 'About Us', 'Register Now'].map((item) => (
                <div key={item} className="border-b border-gray-100">
                  {/* Main Menu Item with Arrow */}
                  <div 
                    className="flex items-center justify-between px-6 py-4 hover:bg-green-50 active:bg-green-100 cursor-pointer transition-colors"
                    onClick={() => toggleMobileDropdown(item)}
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
                  </div>
                  
                  {/* Mobile Dropdown Items - Collapsible */}
                  {openMobileDropdown === item && (
                    <div className="bg-green-50 pl-8 animate-slideDown">
                      {dropdownContent[item].map((option, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-green-100 active:bg-green-200 hover:text-green-700 cursor-pointer transition-colors text-sm text-gray-600 border-l-2 border-transparent hover:border-green-600 active:border-green-700"
                          onClick={() => {
                            console.log(`Clicked: ${option}`)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  )
}