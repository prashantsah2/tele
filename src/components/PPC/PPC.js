"use client"
import { motion } from 'framer-motion';
import { Target, Zap, Calculator } from 'lucide-react';

export default function PPC() {
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
    <div className="min-h-screen bg-primarybg text-white">
      <motion.div 
        className="container mx-auto px-8 py-12 max-sm:px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text Content */}
          <motion.div variants={textVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why PPC Advertising{' '}
              <span className="text-primary">Works</span> for
              Small Businesses
            </h1>
            
            <p className="text-lg leading-relaxed">
              {`Pay-per-click (PPC) advertising puts your business directly in front of customers searching 
              for your products or services. With the right strategy, PPC delivers instant visibility, drives 
              conversions, and helps you compete with bigger brands—without the long wait. For startups and 
              small businesses, it's the fastest way to test offers, target the right audience, and scale 
              quickly. Whether your goal is leads, bookings, sign-ups, or sales—PPC gets results faster.`}
            </p>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            className="flex justify-center"
            variants={illustrationVariants}
          >
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-white rounded-lg p-6 shadow-2xl w-80 h-64 relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-blue-200"></div>
                    ))}
                  </div>
                </div>
                
                {/* Dashboard Elements */}
                <motion.div 
                  className="absolute top-8 left-8 bg-green-400 rounded-lg w-16 h-12 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-xs">AD</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-12 right-8 bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-white font-bold text-xs">99%</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-16 left-6 bg-green-400 rounded-full w-8 h-8 flex items-center justify-center"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-xs">$</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 right-12 bg-yellow-400 rounded w-6 h-8"
                  animate={{ scaleY: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded px-2 py-1"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-white text-xs">CPC</span>
                </motion.div>
              </div>

              {/* Floating Analytics */}
              <motion.div 
                className="absolute -bottom-6 left-4 bg-white rounded-lg p-3 shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-xs text-gray-600">ROI</div>
                <div className="text-green-500 font-bold">+340%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={bottomSectionVariants}
        >
          {/* Immediate Results */}
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
              <div className="relative w-16 h-16">
                {/* Circular Progress */}
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-primary"
                    strokeDasharray="175"
                    strokeDashoffset="35"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-primary mb-3">Immediate Results, Maximum ROI</h3>
            <p className="text-sm leading-relaxed">
              Start seeing qualified traffic and conversions as soon as 
              your ads go live. We prioritize targeting and ad content that 
              turns clicks into customers.
            </p>
          </motion.div>

          {/* Hyper-Targeted Campaigns */}
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
                <Target className="w-16 h-16 text-primary" strokeWidth={2} />
                <motion.div 
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 64 64" className="w-16 h-16">
                    <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" opacity="0.5" />
                    <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" opacity="0.3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-primary mb-3">Hyper-Targeted Campaigns</h3>
            <p className="text-sm leading-relaxed">
              Reach your ideal customers with precision targeting, 
              keyword research, and audience analysis to ensure your ad spend 
              goes where it counts most.
            </p>
          </motion.div>

          {/* Budget Control That Scales */}
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
                <Calculator className="w-16 h-16 text-primary" strokeWidth={2} />
                <motion.div 
                  className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-xs font-bold">$</span>
                </motion.div>
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-primary mb-3">Budget Control That Scales</h3>
            <p className="text-sm leading-relaxed">
              Only pay when someone clicks. You set the budget, 
              and we make sure every dollar is used efficiently to 
              deliver results.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}