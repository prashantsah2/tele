import React from 'react';
import { MessageCircle, Users, BarChart3, Zap, CheckCircle } from 'lucide-react';

export default function WhatsAppCard() {
  return (
    <div className='w-full bg-[#fefefe] flex justify-center py-12'>
      <div className="bounded-xl w-full max-w-[1371px] px-12 py-12 rounded-3xl bg-gradient-to-br from-green-500 via-green-600 to-green-700 flex items-center justify-center p-6">
        <div className="max-w-[1371px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Icon */}
              <div className="flex mb-4">
                <div className="bg-white rounded-2xl p-3 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-3xl">
                WhatsApp Messaging
              </h1>
              
              {/* Description */}
              <p className="text-lg text-green-100 max-w-xl">
                Connect with customers instantly through powerful WhatsApp Business solutions. Drive engagement, boost sales, and deliver exceptional customer experiences.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex flex-col gap-2">
                  <Users className="w-8 h-8 text-green-200" />
                  <h3 className="font-semibold text-sm">Broadcast Lists</h3>
                  <p className="text-green-100 text-xs">Reach thousands</p>
                </div>
                <div className="flex flex-col gap-2">
                  <BarChart3 className="w-8 h-8 text-green-200" />
                  <h3 className="font-semibold text-sm">Analytics</h3>
                  <p className="text-green-100 text-xs">Track engagement</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Zap className="w-8 h-8 text-green-200" />
                  <h3 className="font-semibold text-sm">Automation</h3>
                  <p className="text-green-100 text-xs">Chatbot powered</p>
                </div>
                <div className="flex flex-col gap-2">
                  <CheckCircle className="w-8 h-8 text-green-200" />
                  <h3 className="font-semibold text-sm">Verified Badge</h3>
                  <p className="text-green-100 text-xs">Build trust</p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center">
              {/* Background decorative circles */}
              <div className="absolute w-96 h-96 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute w-72 h-72 bg-white rounded-full opacity-10 blur-2xl"></div>
              
              {/* Main WhatsApp Chat Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                {/* Chat Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="bg-green-100 rounded-full p-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-2 bg-green-100 rounded w-20"></div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 mb-6">
                  {/* Received message */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <div className="h-2 bg-gray-300 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded w-24"></div>
                    </div>
                  </div>
                  
                  {/* Sent message */}
                  <div className="flex justify-end">
                    <div className="bg-green-100 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <div className="h-2 bg-green-300 rounded w-28 mb-2"></div>
                      <div className="h-2 bg-green-300 rounded w-20"></div>
                    </div>
                  </div>

                  {/* Received message */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <div className="h-2 bg-gray-300 rounded w-36"></div>
                    </div>
                  </div>

                  {/* Sent message with checkmarks */}
                  <div className="flex justify-end">
                    <div className="bg-green-100 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <div className="h-2 bg-green-300 rounded w-32 mb-2"></div>
                      <div className="flex justify-end items-center gap-1 mt-1">
                        <div className="text-xs">✓✓</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="bg-gray-100 rounded-full p-3 flex items-center gap-2">
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Message Icons */}
              <div className="absolute top-10 right-10 bg-white rounded-2xl p-3 shadow-xl animate-bounce">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="absolute bottom-20 left-10 bg-white rounded-2xl p-3 shadow-xl" style={{animation: 'bounce 2s infinite 0.5s'}}>
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="absolute top-1/3 -right-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}