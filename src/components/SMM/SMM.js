"use client"
import { motion } from 'framer-motion';
import { TrendingUp, Rocket, Users } from 'lucide-react';

export default function SMM() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const illustrationVariants = {
    hidden: { 
      opacity: 0,
      x: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const bottomSectionVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0906bd]  text-white w-full">
      <motion.div 
        className="container mx-auto px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text Content */}
          <motion.div variants={textVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Social Media Management is{' '}
              <span className="text-green-400">Essential</span> for
              Startups and Small Businesses
            </h1>
            
            <p className="text-lg leading-relaxed">
              Social media is one of the most effective channels for building brand visibility and 
              customer trust. However, for startups and small businesses, managing it consistently can be 
              both challenging and time-intensive. With the right social media management partner, your 
              profiles remain active with fresh, engaging, and brand-focused content while you concentrate on 
              growing your business. We take care of the strategy, content creation, scheduling, and 
              audience engagement—ensuring your brand stays relevant and top of mind.
            </p>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            className="flex justify-center"
            variants={illustrationVariants}
          >
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-white rounded-lg p-6 shadow-2xl w-80 h-64 relative">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600">
                    Dashboard
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                      <div className="text-xs text-gray-600">New Post Created</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                      <div className="text-xs text-gray-600">Analytics</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-2">
                    <div className="text-xs text-gray-600">Campaign Performance</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Social Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-green-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white font-bold">f</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-green-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold">📱</span>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -right-8 bg-white rounded-lg p-2 shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-gray-600">+25%</div>
                <div className="text-green-500 font-bold text-xs">Engagement</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={bottomSectionVariants}
        >
          {/* Enhance Your Online Presence */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="mb-6 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="relative">
                <TrendingUp className="w-16 h-16 text-green-400" strokeWidth={2} />
                <div className="absolute inset-0">
                  <svg viewBox="0 0 64 64" className="w-16 h-16">
                    <path
                      d="M8 40 L20 28 L32 35 L56 15"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      className="text-green-400"
                    />
                    <circle cx="20" cy="28" r="3" fill="currentColor" className="text-green-400" />
                    <circle cx="32" cy="35" r="3" fill="currentColor" className="text-green-400" />
                    <circle cx="56" cy="15" r="3" fill="currentColor" className="text-green-400" />
                  </svg>
                </div>
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Enhance Your Online Presence</h3>
            <p className="text-sm leading-relaxed">
              Boost your brand recognition with strategic social media management that builds 
              awareness and creates trust with your audience.
            </p>
          </motion.div>

          {/* Boost Conversions */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="mb-6 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <Rocket className="w-16 h-16 text-green-400" strokeWidth={2} />
            </motion.div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Boost Conversions</h3>
            <p className="text-sm leading-relaxed">
              Drive engagement and convert followers into paying customers through targeted content 
              strategies and optimized audience engagement tactics, whether 
              buying, booking or browsing.
            </p>
          </motion.div>

          {/* Stay Future-Ready */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="mb-6 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <Users className="w-16 h-16 text-green-400" strokeWidth={2} />
            </motion.div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Stay Future-Ready</h3>
            <p className="text-sm leading-relaxed">
              We build flexible, data-driven social media strategies that grow 
              with your business and adapt to new trends without 
              losing brand consistency.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}