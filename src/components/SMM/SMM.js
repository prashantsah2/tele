"use client"
import React, { useState, useEffect } from 'react';
import { Search, Target, BarChart3 } from 'lucide-react';

export default function SEO() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-primarybg text-white w-full">
      <div className={`container mx-auto px-8 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text Content */}
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why SEO Optimization is{' '}
              <span className="text-green-400">Essential</span> for
              Startups and Small Businesses
            </h1>
            
            <p className="text-lg leading-relaxed">
              Search Engine Optimization is one of the most effective channels for driving organic traffic and 
              building long-term online visibility. However, for startups and small businesses, implementing 
              comprehensive SEO strategies can be both complex and time-intensive. With the right SEO partner, your 
              website climbs search rankings with optimized content, technical improvements, and strategic keyword targeting 
              while you concentrate on growing your business. We handle keyword research, on-page optimization, technical SEO, 
              and performance monitoring—ensuring your website gets found by customers actively searching for your services.
            </p>
          </div>

          {/* Right Illustration */}
          <div className={`flex justify-center transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}>
            <div className="relative">
              {/* Main Analytics Dashboard */}
              <div className="bg-white rounded-lg p-6 shadow-2xl w-80 h-64 relative">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600">
                    SEO Analytics
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <Search className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-gray-600">Keyword Rankings Up</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">Organic Traffic</div>
                      <div className="text-green-500 font-bold text-xs">+147%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-400 h-2 rounded-full w-4/5 transition-all duration-1000 delay-1000"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-2">
                    <div className="text-xs text-gray-600 mb-1">Page Speed Score</div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">95</span>
                      </div>
                      <div className="text-green-500 text-xs font-semibold">Excellent</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Search Icons */}
              <div className="absolute -top-6 -right-6 bg-green-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-spin" style={{animationDuration: '20s'}}>
                <Search className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-xs">#1</span>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-lg p-2 shadow-lg animate-pulse">
                <div className="text-xs text-gray-600">Page 1</div>
                <div className="text-green-500 font-bold text-xs">Rankings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Dominate Search Results */}
          <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Search className="w-16 h-16 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" strokeWidth={2} />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs font-bold">#1</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Dominate Search Results</h3>
            <p className="text-sm leading-relaxed">
              Climb to the top of Google search results with strategic keyword optimization, 
              technical SEO improvements, and content that search engines love.
            </p>
          </div>

          {/* Drive Quality Traffic */}
          <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="mb-6 flex justify-center">
              <Target className="w-16 h-16 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Drive Quality Traffic</h3>
            <p className="text-sm leading-relaxed">
              Attract visitors who are actively searching for your products or services through 
              targeted keyword strategies and local SEO optimization that converts browsers into customers.
            </p>
          </div>

          {/* Sustainable Growth */}
          <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="mb-6 flex justify-center">
              <BarChart3 className="w-16 h-16 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Sustainable Growth</h3>
            <p className="text-sm leading-relaxed">
              Build long-term organic visibility that compounds over time with 
              data-driven SEO strategies that adapt to algorithm changes while 
              maintaining consistent search performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}