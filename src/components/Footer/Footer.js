'use client'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`)
  }

  const handleSubscribe = () => {
    console.log(`Subscribing email: ${email}`)
    setEmail('')
  }

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="bg-blue-700/30 w-[50%] h-1"></div>
        <div className="bg-blue-700/30 w-[50%] h-1"></div>
      </div>

      <div className="min-h-[502px] w-full flex flex-row justify-center items-start gap-8 py-12 max-lg:flex-col max-w-[1391px] max-sm:px-4">

        {/* Left Section - Navigation Links */}
        <div className="flex flex-col justify-start flex-1 max-lg:w-full">
          <div className="flex flex-row justify-start items-start gap-4 flex-wrap">
            
            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Services</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Digital Marketing</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">SEO Optimization</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Social Media</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Content Strategy</p>
            </div>

            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Solutions</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Brand Development</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Analytics & Insights</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Marketing Automation</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Growth Strategy</p>
            </div>

            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Company</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('about')}>About Us</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('careers')}>Careers</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('case-studies')}>Case Studies</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('blog')}>Blog</p>
            </div>

            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Legal</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('privacy-policy')}>Privacy Policy</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('terms-and-conditions')}>Terms of Service</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('cookie-policy')}>Cookie Policy</p>
            </div>
          </div>
            <div className="flex flex-row justify-start items-start gap-4 flex-wrap mt-8">
            
            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Services</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Digital Marketing</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">SEO Optimization</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Social Media</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Content Strategy</p>
            </div>

            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Solutions</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Brand Development</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Analytics & Insights</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Marketing Automation</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors">Growth Strategy</p>
            </div>

            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Company</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('about')}>About Us</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('careers')}>Careers</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('case-studies')}>Case Studies</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('blog')}>Blog</p>
            </div>

            <div className="flex flex-col justify-start  min-w-[180px]">
              <p className="font-outfit text-blue-200 text-xl mb-4 font-semibold">Legal</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('privacy-policy')}>Privacy Policy</p>    
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('terms-and-conditions')}>Terms of Service</p>
              <p className="font-outfit text-blue-100 text-sm mb-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigation('cookie-policy')}>Cookie Policy</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact & Newsletter */}
        <div className="flex flex-col justify-start min-w-[340px] max-lg:w-full">
          
          {/* Newsletter */}
          <div className="mb-8">
            <p className="font-outfit text-xl text-white mb-2 font-semibold">Stay Updated</p>
            <p className="font-outfit text-sm text-blue-200 mb-4">Subscribe to our newsletter for marketing tips and insights.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button 
                onClick={handleSubscribe}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-outfit transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-start">
            <p className="font-outfit text-2xl text-white mb-2 font-semibold">Get in Touch</p>
            <p className="font-outfit text-sm text-blue-200 mb-1">Email us at</p>
            <p className="font-outfit text-md text-white mb-4">hello@marketpulse.agency</p>
            
            <p className="font-outfit text-sm text-blue-200 mb-1">Call us</p>
            <p className="font-outfit text-md text-white mb-4">+1 (555) 123-4567</p>

            {/* Social Media */}
            <div className="flex flex-row gap-4 mt-4">
              <div className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white text-sm font-semibold">in</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white text-sm font-semibold">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white text-sm font-semibold">IG</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white text-sm font-semibold">FB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-blue-700/30 py-6 px-6 max-w-[1391px]">
        <div className="max-w-[1391px] mx-auto flex flex-row justify-between items-center max-sm:flex-col max-sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <p className="text-xl font-outfit text-white font-bold">MarketPulse</p>
          </div>
          <p className="font-outfit text-sm text-blue-300">© 2024 MarketPulse Agency. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}