"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowRight, Clock, Zap, Target, CheckCircle, Users, TrendingUp } from 'lucide-react';
import SocialMedia from "./SocialMedia"


const ServicePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Organization",
      description: "Streamline your workspace and digital assets for maximum efficiency"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Marketing",
      description: "Reach your ideal customers with precision-focused campaigns"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Strategy",
      description: "Data-driven approaches to scale your business sustainably"
    }
  ];

  const benefits = [
    "Save 40% more time weekly",
    "Increase productivity by 3x",
    "Reduce operational costs",
    "Improve team collaboration"
  ];

  return (
    <>
    <div className="min-h-screen bg-[#0906bd] relative overflow-hidden pt-[71px]">

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

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-green-400/10 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-blue-400/10 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

   

      {/* Main content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 z-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="text-center lg:text-left mb-12 lg:mb-20">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30 mb-6">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium text-sm sm:text-base">Professional Services</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bebas md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 sm:mb-8"
          >
           {` DON'T WASTE`}
            <br />
            YOUR{' '}
            <span className="text-transparent font-bebas bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
              TIME
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-green-400 font-bold mb-4"
          >
            START SAVING IT
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                {`In today's fast-moving world`},{' '}
                <span className="text-green-400 font-semibold">organized spaces</span>{' '}
                and{' '}
                <span className="text-green-400 font-semibold">smarter marketing</span>{' '}
                drive real growth.
              </p>
            </div>
          </motion.div>

          <a href="/contact">
          <motion.div variants={itemVariants} className="flex flex-col cursor-pointer sm:flex-row gap-4 justify-center lg:justify-start mb-12 sm:mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors backdrop-blur-sm w-full sm:w-auto"
            >
              View Services
            </motion.button>
          </motion.div>
          </a>
        </div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-green-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg p-6 sm:p-8 lg:p-12 rounded-3xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base lg:text-lg font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
 

       

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/20"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-xs sm:text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
    <SocialMedia />
    </>
  );
};

export default ServicePage;