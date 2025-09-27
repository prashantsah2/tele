import React from 'react';
import { motion } from 'framer-motion';
import Footer2 from '@/components/Footer2/Footer2';
import Header3 from '@/components/Header3/Header3';















export default function Page() {










  return (
    <>  <Header3 />
      <div className='flex flex-col items-center justify-center min-h-screen pt-16 bg-primarybg'>
            <div className="bg-primarybg text-white p-8 md:p-12 lg:p-16 max-sm:px-4">

     
      
      <div className=" rounded-lg p-6 mb-12 max-sm:mb-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl  text-center leading-tight">
          Why Website Development is <span className="text-primary">Essential</span> for 
          Startups and Small Businesses ?
        </h2>
      </div>

      
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        
        <div className="space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            <span className="text-primary font-semibold">Your website</span> is often the first impression 
           {` customers have of your business, and first impressions matter. For startups and small 
            businesses, it's more than just a digital brochure; it's your 24/7 storefront, sales tool, 
            and credibility builder. We design and develop websites that are fast, mobile-friendly, and 
            focused on conversions. Whether you need an entirely new site or an upgrade to your 
            existing one, we ensure it is built to engage visitors, generate inquiries, and support your 
            growth.`}
          </p>
        </div>

        
        <div className="flex justify-center">
          <div className="relative">
            
            <div className="bg-gray-800 rounded-lg p-4 w-80 h-56">
              <div className="bg-white rounded h-full relative overflow-hidden">
                {/* Screen content */}
                <div className="absolute top-2 left-2 right-2 h-6 bg-gray-200 rounded flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-600">www</div>
                </div>
                
                {/* Website content simulation */}
                <div className="mt-10 p-4 space-y-2">
                  <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-6 bg-blue-400 rounded w-24 text-white text-xs flex items-center justify-center mt-4">
                    Please Wait
                  </div>
                </div>

                {/* Rocket illustration */}
                <div className="absolute -top-4 -right-4">
                  <div className="relative">
                    <div className="w-16 h-20 bg-green-500 rounded-full relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-orange-400 rounded-b-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Person illustration */}
            <div className="absolute -bottom-8 -left-16">
              <div className="relative">
                {/* Person body */}
                <div className="w-20 h-24 bg-primary rounded-t-full relative">
                  {/* Head */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full"></div>
                  {/* Arms */}
                  <div className="absolute top-4 -left-2 w-12 h-3 bg-primary rounded-full transform rotate-12"></div>
                  <div className="absolute top-4 -right-2 w-12 h-3 bg-primary rounded-full transform -rotate-12"></div>
                </div>
                {/* Legs */}
                <div className="flex space-x-2 justify-center">
                  <div className="w-4 h-12 bg-primary rounded-b-full"></div>
                  <div className="w-4 h-12 bg-primary rounded-b-full"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 left-12">
              <div className="w-8 h-6 bg-blue-400 rounded text-white text-xs flex items-center justify-center">
                Chat
              </div>
            </div>

            <div className="absolute top-8 -right-8">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three feature columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Enhance Your Online Presence */}
        <div className="text-center">
          {/* Growth chart icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#fff]">
                <rect x="10" y="50" width="8" height="20" fill="currentColor" rx="2"/>
                <rect x="22" y="40" width="8" height="30" fill="currentColor" rx="2"/>
                <rect x="34" y="30" width="8" height="40" fill="currentColor" rx="2"/>
                <rect x="46" y="20" width="8" height="50" fill="currentColor" rx="2"/>
                <rect x="58" y="10" width="8" height="60" fill="currentColor" rx="2"/>
                <path d="M45 25 L60 15 L55 20 M60 15 L55 10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">Enhance Your Online Presence</h3>
          <p className="text-sm leading-relaxed">
            Create a professional, branded website that sets you apart and builds trust with your audience.
          </p>
        </div>

        {/* Boost Conversions */}
        <div className="text-center">
          {/* Rocket icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#fff]">
                <ellipse cx="40" cy="35" rx="12" ry="25" fill="currentColor"/>
                <circle cx="40" cy="25" r="4" fill="white"/>
                <path d="M32 55 L40 50 L48 55 L44 65 L36 65 Z" fill="orange"/>
                <rect x="25" y="45" width="6" height="3" fill="currentColor" rx="1" transform="rotate(-30 28 46.5)"/>
                <rect x="49" y="45" width="6" height="3" fill="currentColor" rx="1" transform="rotate(30 52 46.5)"/>
                <path d="M15 40 L25 35 L20 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M65 40 L55 35 L60 30" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">Boost Conversions</h3>
          <p className="text-sm leading-relaxed">
            Design every element keeping your business goals in mind and guiding visitors toward action, whether 
            buying, booking, or contacting you.
          </p>
        </div>

        {/* Stay Future-Ready */}
        <div className="text-center">
          {/* Magnet with people icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#fff]">
                {/* Magnet */}
                <path d="M25 20 Q25 10 35 10 L45 10 Q55 10 55 20 L55 35 Q55 50 40 50 Q25 50 25 35 Z" 
                      fill="none" stroke="currentColor" strokeWidth="4"/>
                <rect x="20" y="15" width="10" height="15" fill="currentColor" rx="2"/>
                <rect x="50" y="15" width="10" height="15" fill="currentColor" rx="2"/>
                
                {/* People figures */}
                <g transform="translate(15, 55)">
                  <circle cx="5" cy="3" r="2" fill="currentColor"/>
                  <rect x="3" y="5" width="4" height="6" fill="currentColor" rx="1"/>
                  <circle cx="15" cy="3" r="2" fill="currentColor"/>
                  <rect x="13" y="5" width="4" height="6" fill="currentColor" rx="1"/>
                  <circle cx="25" cy="3" r="2" fill="currentColor"/>
                  <rect x="23" y="5" width="4" height="6" fill="currentColor" rx="1"/>
                  <circle cx="35" cy="3" r="2" fill="currentColor"/>
                  <rect x="33" y="5" width="4" height="6" fill="currentColor" rx="1"/>
                  <circle cx="45" cy="3" r="2" fill="currentColor"/>
                  <rect x="43" y="5" width="4" height="6" fill="currentColor" rx="1"/>
                </g>
                
                {/* Magnetic field lines */}
                <path d="M30 45 Q20 55 25 65" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M50 45 Q60 55 55 65" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M35 45 Q30 55 35 65" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M45 45 Q50 55 45 65" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">Stay Future-Ready</h3>
          <p className="text-sm leading-relaxed">
            We build flexible, scalable websites that can grow with your business and adapt to new needs without 
            starting from scratch.
          </p>
        </div>
      </div>
    </div>





    <div className="bg-primarybg text-white p-8 md:p-12 lg:p-16 max-sm:px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          The <span className="text-primary">Numbers</span> {`Don't Lie`}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {`Here's what the data reveals about the impact of professional web development on business success`}
        </p>
      </div>

      {/* Main stats grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Stat 1 */}
        <div className="text-center bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary mx-auto">
              <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M15 30 L25 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-primary mb-2">94%</div>
          <p className="text-sm text-gray-300">of first impressions are design-related</p>
        </div>

        {/* Stat 2 */}
        <div className="text-center bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary mx-auto">
              <rect x="10" y="40" width="6" height="15" fill="currentColor" rx="2"/>
              <rect x="20" y="30" width="6" height="25" fill="currentColor" rx="2"/>
              <rect x="30" y="20" width="6" height="35" fill="currentColor" rx="2"/>
              <rect x="40" y="15" width="6" height="40" fill="currentColor" rx="2"/>
              <path d="M35 20 L48 12 L44 16 M48 12 L44 8" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-primary mb-2">200%</div>
          <p className="text-sm text-gray-300">increase in conversions with mobile-optimized sites</p>
        </div>

        {/* Stat 3 */}
        <div className="text-center bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary mx-auto">
              <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M30 15 V30 L40 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-primary mb-2">3 SEC</div>
          <p className="text-sm text-gray-300">is all users wait before leaving a slow website</p>
        </div>

        {/* Stat 4 */}
        <div className="text-center bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary mx-auto">
              <path d="M30 10 L35 20 L45 20 L37 28 L40 38 L30 33 L20 38 L23 28 L15 20 L25 20 Z" 
                    fill="currentColor"/>
            </svg>
          </div>
          <div className="text-4xl font-bold text-primary mb-2">75%</div>
          <p className="text-sm text-gray-300">of users judge credibility based on website design</p>
        </div>
      </div>

      {/* Secondary insights */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-primary">What This Means for Your Business</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Every second counts:</span> A 1-second delay in page load time can reduce conversions by 7%
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Mobile is mandatory:</span> 54% of global web traffic comes from mobile devices
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">ROI speaks volumes:</span> Companies with well-designed websites see 32% more revenue growth
              </p>
            </div>
          </div>
        </div>

        {/* Right illustration */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Central dashboard */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 w-72 h-48 relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-primary">Analytics Dashboard</div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-75"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-50"></div>
                </div>
              </div>
              
              {/* Chart representation */}
              <div className="space-y-3">
                <div className="flex items-end space-x-2 h-16">
                  <div className="bg-primary w-4 h-8 rounded-t"></div>
                  <div className="bg-primary w-4 h-12 rounded-t"></div>
                  <div className="bg-primary w-4 h-16 rounded-t"></div>
                  <div className="bg-primary w-4 h-10 rounded-t"></div>
                  <div className="bg-primary w-4 h-14 rounded-t"></div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-700/50 rounded p-2">
                    <div className="text-gray-400">Visitors</div>
                    <div className="text-white font-bold">+24%</div>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2">
                    <div className="text-gray-400">Revenue</div>
                    <div className="text-white font-bold">+32%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-6 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              +200%
            </div>
            
            <div className="absolute -bottom-4 -right-6 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              3s ⚡
            </div>
            
            <div className="absolute top-12 -right-8 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
              94% ✓
            </div>

            {/* Growth arrow */}
            <div className="absolute -top-8 right-4">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary">
                <path d="M7 17 L17 7 M17 7 L7 7 M17 7 L17 17" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-16 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg p-8 max-md:mt-8 max-sm:mt-3">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Ready to <span className="text-primary">Transform</span> Your Digital Presence?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          {`Don't let poor web design cost you customers. Let's build a website that converts visitors into loyal customers.`}
        </p>
    <a href='/contact'><button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Get Your Free Consultation
        </button></a>    
      </div>
    </div>
     
      </div>
      <Footer2/>
      </>
  );
}