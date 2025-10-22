import React from 'react';
import { Mail, Users, BarChart3, Zap, CheckCircle } from 'lucide-react';

export default function EmailCrd() {



  return (
    <div className='w-full bg-[#fefefe] flex justify-center py-12'>
    <div className="bounded-xl w-full max-w-[1371px] px-12 py-12 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center p-6">
      <div className="max-w-[1371px] mx-auto w-full ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Icon */}
            <div className="flex mb-4">
              <div className="bg-white rounded-2xl p-3 shadow-lg">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-3xl">
              Email Marketing
            </h1>
            
            {/* Description */}
            <p className="text-lg text-blue-100 max-w-xl">
              Leverage powerful email marketing solutions to boost engagement, drive sales, and enhance customer communication effortlessly.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex flex-col gap-2">
                <Users className="w-8 h-8 text-blue-200" />
                <h3 className="font-semibold text-sm">Segmentation</h3>
                <p className="text-blue-100 text-xs">Target audiences</p>
              </div>
              <div className="flex flex-col gap-2">
                <BarChart3 className="w-8 h-8 text-blue-200" />
                <h3 className="font-semibold text-sm">Analytics</h3>
                <p className="text-blue-100 text-xs">Track performance</p>
              </div>
              <div className="flex flex-col gap-2">
                <Zap className="w-8 h-8 text-blue-200" />
                <h3 className="font-semibold text-sm">Automation</h3>
                <p className="text-blue-100 text-xs">Smart campaigns</p>
              </div>
              <div className="flex flex-col gap-2">
                <CheckCircle className="w-8 h-8 text-blue-200" />
                <h3 className="font-semibold text-sm">Deliverability</h3>
                <p className="text-blue-100 text-xs">Inbox guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Background decorative circles */}
            <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute w-72 h-72 bg-white rounded-full opacity-10 blur-2xl"></div>
            
            {/* Main Email Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
              {/* Email Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="bg-blue-100 rounded-full p-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded w-24"></div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>

              {/* Email Body Lines */}
              <div className="space-y-3 mb-6">
                <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-100 rounded w-full"></div>
                <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-100 rounded w-5/6"></div>
                <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-100 rounded w-4/6"></div>
                <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-100 rounded w-full"></div>
                <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-100 rounded w-3/4"></div>
              </div>

              {/* CTA Button in Email */}
              <div className="bg-blue-600 rounded-xl p-4 text-center mb-6">
                <div className="h-3 bg-white rounded w-24 mx-auto opacity-90"></div>
              </div>

              {/* Footer Icons */}
              <div className="flex justify-center gap-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
              </div>
            </div>

            {/* Floating Email Icons */}
            <div className="absolute top-10 right-10 bg-white rounded-2xl p-3 shadow-xl animate-bounce">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="absolute bottom-20 left-10 bg-white rounded-2xl p-3 shadow-xl" style={{animation: 'bounce 2s infinite 0.5s'}}>
              <Mail className="w-5 h-5 text-blue-500" />
            </div>
            <div className="absolute top-1/3 -right-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )



}