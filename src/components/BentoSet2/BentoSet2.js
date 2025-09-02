"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Package,
  Server,
  Clock,
  MapPin,
  Star,
  Shield,
  Monitor,
  Settings,
  AlertCircle,
  CheckCircle,
  Play
} from 'lucide-react';

const BentoSet2 = () => {
  const [currentTime, setCurrentTime] = useState('14:32');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0906bd] p-6 w-full">

       <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-[1391px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Service Request Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600">Service ID</span>
            </div>
            <div className="text-lg font-bold mb-4">SR2024-7612 🔧</div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">From</span>
                <span className="font-medium">DevOps, Seattle</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">To</span>
                <span className="font-medium">Production, Dallas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Type</span>
                <span className="font-medium">Server Migration</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-medium text-green-600">In Progress</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-lime-400 text-black py-3 px-4 rounded-xl font-medium hover:bg-lime-500 transition-colors flex items-center justify-center gap-2">
                <Settings className="w-4 h-4" />
                Configure
              </button>
              <button className="bg-gray-800 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-700 transition-colors">
                Call
              </button>
            </div>
          </motion.div>

          {/* Service Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="text-6xl font-bold text-gray-800 mb-2">78%</div>
            <p className="text-gray-600 text-sm mb-6">
              Migration progress is tracked. Security protocols active, database sync in progress.
            </p>
            
            <div className="bg-lime-400 text-black py-2 px-4 rounded-xl font-medium text-sm flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Tech Lead
            </div>
          </motion.div>

          {/* Deployment Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Deploying</h3>
              <span className="text-sm text-gray-600">Your system is being deployed.</span>
            </div>

            {/* Progress Timeline */}
            <div className="flex items-center justify-between mb-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 h-1 bg-lime-400 rounded-full -translate-y-1/2 w-2/3"></div>
              
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center relative z-10">
                <CheckCircle className="w-4 h-4 text-black" />
              </div>
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center relative z-10">
                <Server className="w-4 h-4 text-black" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center relative z-10">
                <Shield className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="text-sm text-gray-600">Estimated completion time</div>
              <div className="text-2xl font-bold">{currentTime}</div>
            </div>
          </motion.div>

          {/* Service Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-lime-400 text-black py-2 px-3 rounded-xl font-medium text-sm flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Infrastructure
              </div>
            </div>

            {/* Service path visualization */}
            <div className="relative h-32 mb-4">
              <div className="absolute top-8 left-4 w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="absolute top-8 left-6 w-24 h-0.5 bg-gray-300"></div>
              <div className="absolute top-8 right-4 w-2 h-2 bg-gray-300 rounded-full"></div>
              
              {/* Server icon */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Server className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-gray-800 text-white py-2 px-4 rounded-xl text-sm">
                Remaining: 32min
              </div>
              <div className="bg-gray-800 text-white py-2 px-4 rounded-xl text-sm">
                Deploy Time: {currentTime}
              </div>
            </div>
          </motion.div>

          {/* Service Delivered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 rounded-2xl p-6 text-white text-center"
          >
            {/* Service box with star */}
            <div className="relative mb-4">
              <div className="w-20 h-16 bg-amber-600 rounded-lg mx-auto flex items-center justify-center mb-2">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-black fill-current" />
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              The service has been deployed! Please test functionality!
            </p>

            <button className="w-full bg-lime-400 text-black py-3 px-4 rounded-xl font-medium hover:bg-lime-500 transition-colors">
              Verify Service
            </button>
          </motion.div>

          {/* Service Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-semibold">Your</h3>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-amber-600 rounded flex items-center justify-center">
                  <Server className="w-3 h-3 text-white" />
                </div>
                <span className="font-semibold">service</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              will be at your environment within <strong>two hours</strong>
            </p>

            <div className="space-y-3">
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                Change deployment date
              </button>
              <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-700 transition-colors">
                I am at location
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BentoSet2;