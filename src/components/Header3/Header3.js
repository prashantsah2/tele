"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, MenuIcon, Phone, Search, User, ChevronRight } from "lucide-react"
import { AnimatePresence } from "framer-motion"

import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header3() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showOnlineServicesDropdown, setShowOnlineServicesDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onlineServices = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Digital Marketing", href: "/services/socialmedia" },
    { name: "SEO Services", href: "/services/seo" },
   /*  { name: "Graphics Design", href: "/services/graphics" }, */
    {name:" PPC Management", href:"/services/ppc" },
   
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <>
    <motion.nav
      className="flex items-center justify-between px-8 py-6 fixed s z-50 backdrop-blur-md border-b border-green-600/30 d top-0 left-0 right-0 max-sm:px-4"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <a href="/"><div className="flex items-center space-x-8 mr-6">
        <Image src={`/image/logo2.png`} alt="Logo" className='w-32 max-sm:w-24' width={500} height={300} />
      </div></a>
      
      <div className="items-center space-x-8 hidden md:flex">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search services........."
            className="bg-primarybg bg-opacity-50 text-white placeholder-gray-300 px-4 py-2 pr-10 rounded-full border border-primarybg focus:outline-none focus:border-green-400 w-64 transition-all duration-300"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-300" />
        </motion.div>
        
        <div 
          className="relative"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => {
            setShowServicesDropdown(false)
            setShowOnlineServicesDropdown(false)
          }}
        >
          <motion.div 
            className="flex items-center space-x-2 text-primary cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-semibold">Services</span>
            <motion.div
              animate={{ rotate: showServicesDropdown ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Main Services Dropdown */}
          <AnimatePresence>
            {showServicesDropdown && (
              <motion.div
                className="absolute top-full left-0 mt-2 w-48 bg-[#111] backdrop-blur-md rounded-lg shadow-xl border border-green-600/30 "
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Online Services with submenu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowOnlineServicesDropdown(true)}
                  onMouseLeave={() => setShowOnlineServicesDropdown(false)}
                >
                  <motion.div
                    className="px-4 py-3 text-white hover:bg-primarybg transition-colors duration-200 cursor-pointer border-b border-gray-700/50"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primarybg rounded-full"></div>
                        <span className="font-medium">Online Services</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Online Services Submenu */}
                  <AnimatePresence>
                    {showOnlineServicesDropdown && (
                      <motion.div
                        className="absolute top-0 left-full ml-1 w-52 bg-[#111] backdrop-blur-md rounded-lg shadow-xl border border-green-600/30 overflow-hidden"
                        initial={{ opacity: 0, x: -10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {onlineServices.map((service, index) => (
                          <a key={service.name} href={service.href}>
                            <motion.div
                              className={`px-4 py-3 text-white hover:bg-green-600/20 transition-colors duration-200 cursor-pointer ${
                                index < onlineServices.length - 1 ? 'border-b border-gray-700/50' : ''
                              }`}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="font-medium">{service.name}</span>
                              </div>
                            </motion.div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Offline Services */}
                <a href="/services/offline">
                  <motion.div
                    className="px-4 py-3 text-white hover:bg-green-600/20 transition-colors duration-200 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primarybg rounded-full"></div>
                      <span className="font-medium">Offline Services</span>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="/aboutus">
          <motion.div 
            className="flex items-center space-x-2 text-white"
            whileHover={{ scale: 1.05, color: "#4ade80" }}
            transition={{ duration: 0.2 }}
          >
            <User className="w-6 h-6 text-blue-300" />
            <span className="text-lg font-semibold">About Us</span>
          </motion.div>
        </a>
      </div>

      <a href="/contact">
        <motion.div 
          className="flex items-center space-x-2 text-white max-sm:hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-lg font-semibold">Contact us</span>
          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <Phone className="w-3 h-3 text-white" />
          </div>
        </motion.div>
      </a>

      <div className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
        <MenuIcon className="text-[#fff]"/>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed h-[111vh] inset-0 bg-black bg-opacity-50 z-70"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="md:hidden fixed top-0 h-[111vh] left-0 w-80 bg-[#111] backdrop-blur-md border-r border-green-600/30 z-50 overflow-y-auto">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-600/30">
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">Home</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-gray-800 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-6 space-y-6">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services........."
                  className="bg-primarybg bg-opacity-50 text-white placeholder-gray-300 px-4 py-3 pr-10 rounded-full border border-primarybg focus:outline-none focus:border-green-400 w-full"
                />
                <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-300" />
              </div>

              {/* Navigation Items */}
              <div className="space-y-4">
                {/* Services */}
                <div>
                  <div 
                    className="flex items-center justify-between text-primary cursor-pointer py-3"
                    onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg font-semibold">Services</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} />
                  </div>

                  {showServicesDropdown && (
                    <div className="ml-9 space-y-2">
                      {/* Online Services in Mobile */}
                      <div>
                        <div 
                          className="flex items-center justify-between py-2 px-4 text-white hover:bg-primarybg rounded-lg transition-colors cursor-pointer"
                          onClick={() => setShowOnlineServicesDropdown(!showOnlineServicesDropdown)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primarybg rounded-full"></div>
                            <span>Online Services</span>
                          </div>
                          <ChevronDown className={`w-3 h-3 transition-transform ${showOnlineServicesDropdown ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {showOnlineServicesDropdown && (
                          <div className="ml-6 mt-2 space-y-1">
                            {onlineServices.map((service) => (
                              <a key={service.name} href={service.href} onClick={() => setIsMobileMenuOpen(false)}>
                                <div className="flex items-center space-x-3 py-2 px-3 text-sm text-gray-300 hover:bg-green-600/20 rounded transition-colors">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                  <span>{service.name}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Offline Services */}
                      <a href="/services/offline" onClick={() => {setIsMobileMenuOpen(false)}}>
                        <div className="flex items-center space-x-3 py-2 px-4 text-white hover:bg-green-600/20 rounded-lg transition-colors">
                          <div className="w-2 h-2 bg-primarybg rounded-full"></div>
                          <span>Offline Services</span>
                        </div>
                      </a>
                    </div>
                  )}
                </div>

                {/* About Us */}
                <a href="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center space-x-3 text-white py-3 hover:text-green-400 transition-colors">
                    <User className="w-6 h-6 text-blue-300" />
                    <span className="text-lg font-semibold">About Us</span>
                  </div>
                </a>

                {/* Contact */}
                <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center space-x-3 text-white py-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Contact us</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.nav>
    
    </>
  )
}