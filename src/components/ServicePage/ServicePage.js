"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowRight, Clock, Zap, Target, CheckCircle, Users, TrendingUp } from 'lucide-react';
import SocialMedia from "./SocialMedia"
import OfflineServices from './OfflineServices';
import PPC from '../PPC/PPC';



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
    <div className="min-h-screen bg-primarybg relative overflow-hidden pt-[71px] w-full">

        

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
            <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-primary mb-6">
              <Clock className="w-5 h-5 text-primary  " />
              <span className="text-primary font-medium text-sm sm:text-base">Professional Services</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bebas md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 sm:mb-8"
          >
           {` DON'T WASTE`}
            <br />
            YOUR{' '}
            <span className="text-primary">
              TIME
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-primary font-bold mb-4"
          >
            START SAVING IT
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                {`In today's fast-moving world`},{' '}
                <span className="text-primary font-semibold">organized spaces</span>{' '}
                and{' '}
                <span className="text-primary font-semibold">smarter marketing</span>{' '}
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
          <div className='flex flex-row justify-center items-center font-bebas text-[71px] max-md:text-[51px] max-sm:text-[31px] text-[#fff] w-full text-left mb-6 mr-auto'>
          OUR <span className='text-primary ml-4'> ONLINE SERVICES</span>
        </div>


            

          <div className='w-full flex justify-start items-start font-bebas text-[32px] text-[#fff] mb-4'>Social Media Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-primary mb-4">
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
       {/*  <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
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
        </motion.div> */}
 

       

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
                <div className="text-2xl sm:text-2xl lg:text-3cxl font-black text-primary mb-1 sm:mb-2">
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
        className="absolute bottom-0 left-0 right-0 h-1 "
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
    <SocialMedia />
     <PPC/>


    {/*  <div className="relative w-full mx-auto">
     
      <div className=" rounded-lg bg-[#fff] p-8 md:p-12">
        
      
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-green-500">High-Impact</span>
            <span className="text-gray-800"> Website Development</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            for Startups and Small Businesses
          </h2>
        </div>

      
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We help you create a website that not only looks great but also drives conversions for your business.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
            Our web development services are designed to showcase your brand, attract customers, and increase sales.
          </p>
        </div>
      </div>
    </div> */}




    <div className="bg-primarybg text-white p-8 md:p-12 lg:p-16 max-sm:px-4">

      <div className="text-3xl flex justify-start w-full font-bebas mb-6 max-sm:justify-center">
        WEB DEVELOPMENT SERVICES
      </div>
      {/* Header */}
      <div className=" rounded-lg p-6 mb-12 max-sm:mb-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl  text-center leading-tight">
          Why Website Development is <span className="text-primary">Essential</span> for 
          Startups and Small Businesses ?
        </h2>
      </div>

      {/* Main content area with text and illustration */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left text content */}
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

        {/* Right illustration */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Computer monitor */}
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
        <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Get Your Free Consultation
        </button>
      </div>
    </div>
  
    <div className="bg-primarybg text-white p-8 md:p-12 lg:p-16 max-sm:px-4">
      <div className="text-3xl flex justify-start w-full font-bebas mb-6">
        GRAPHIC DESIGN SERVICES
      </div>
      
      {/* Header */}
      <div className="rounded-lg p-6 mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center leading-tight">
          Why Professional <span className="text-primary">Graphic Design</span> is 
          Critical for Brand Success ?
        </h2>
      </div>

      {/* Main content area with text and illustration */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left text content */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            <span className="text-primary font-semibold">Visual communication</span> is the language 
            {` of modern business, and your brand's visual identity speaks before you do. From logos 
            and business cards to social media graphics and marketing materials, every design element 
            tells your story and influences customer perception. We create compelling visual narratives 
            that capture attention, communicate value, and drive engagement. Whether you're launching 
            a new brand or refreshing an existing one, our designs ensure your message resonates with 
            your target audience.`}
          </p>
        </div>

        {/* Right illustration */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Design workspace */}
            <div className="bg-gray-800 rounded-lg p-4 w-80 h-56 relative">
              <div className="bg-white rounded h-full relative overflow-hidden">
                {/* Toolbar */}
                <div className="absolute top-2 left-2 right-2 h-8 bg-gray-100 rounded flex items-center px-3 space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div>
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                  </div>
                  <div className="flex space-x-1 ml-4">
                    <div className="w-6 h-3 bg-gray-300 rounded"></div>
                    <div className="w-6 h-3 bg-gray-300 rounded"></div>
                    <div className="w-6 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
                
                {/* Canvas area with design elements */}
                <div className="mt-12 p-4 space-y-3">
                  {/* Logo design mockup */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                        <div className="text-white font-bold text-xl">B</div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Business card mockup */}
                  <div className="flex justify-center">
                    <div className="w-20 h-12 bg-gradient-to-r from-primary to-blue-500 rounded shadow-lg transform rotate-3"></div>
                  </div>
                  
                  {/* Color palette */}
                  <div className="flex justify-center space-x-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                </div>

                {/* Design tools floating */}
                <div className="absolute bottom-2 right-2">
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-red-400 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded"></div>
                    </div>
                    <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                      <div className="w-2 h-4 bg-white rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Designer illustration */}
            <div className="absolute -bottom-8 -left-16">
              <div className="relative">
                {/* Person body */}
                <div className="w-20 h-24 bg-primary rounded-t-full relative">
                  {/* Head */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full"></div>
                  {/* Arms - one holding pen */}
                  <div className="absolute top-4 -left-2 w-12 h-3 bg-primary rounded-full transform rotate-12"></div>
                  <div className="absolute top-4 -right-2 w-12 h-3 bg-primary rounded-full transform -rotate-12"></div>
                  {/* Pen */}
                  <div className="absolute top-2 right-2 w-1 h-6 bg-yellow-400 rounded-full transform rotate-45"></div>
                </div>
                {/* Legs */}
                <div className="flex space-x-2 justify-center">
                  <div className="w-4 h-12 bg-primary rounded-b-full"></div>
                  <div className="w-4 h-12 bg-primary rounded-b-full"></div>
                </div>
              </div>
            </div>

            {/* Floating creative elements */}
            <div className="absolute -top-8 left-8">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
            </div>

            <div className="absolute top-4 -right-12">
              <div className="w-10 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center">
                Brand
              </div>
            </div>

            <div className="absolute bottom-12 -right-8">
              <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Three feature columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Build Brand Recognition */}
        <div className="text-center">
          {/* Brand identity icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#fff]">
                {/* Shield shape */}
                <path d="M40 10 L60 20 L60 45 Q60 60 40 70 Q20 60 20 45 L20 20 Z" fill="currentColor"/>
                <circle cx="40" cy="35" r="12" fill="white"/>
                <text x="40" y="42" textAnchor="middle" className="text-lg font-bold" fill="currentColor">B</text>
                {/* Crown on top */}
                <path d="M30 15 L35 10 L40 15 L45 10 L50 15 L45 20 L35 20 Z" fill="gold"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">Build Brand Recognition</h3>
          <p className="text-sm leading-relaxed">
            Create a consistent visual identity that makes your brand instantly recognizable and memorable across all touchpoints.
          </p>
        </div>

        {/* Communicate Effectively */}
        <div className="text-center">
          {/* Communication icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#fff]">
                {/* Speech bubble */}
                <path d="M15 20 Q15 15 20 15 L60 15 Q65 15 65 20 L65 40 Q65 45 60 45 L35 45 L25 55 L30 45 L20 45 Q15 45 15 40 Z" 
                      fill="currentColor"/>
                {/* Message lines */}
                <rect x="25" y="25" width="20" height="2" fill="white" rx="1"/>
                <rect x="25" y="30" width="25" height="2" fill="white" rx="1"/>
                <rect x="25" y="35" width="15" height="2" fill="white" rx="1"/>
                
                {/* Eye catching elements */}
                <circle cx="55" cy="25" r="8" fill="white"/>
                <path d="M50 25 L55 30 L60 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                
                {/* Sparkles */}
                <path d="M20 10 L22 14 L26 12 L22 16 L20 20 L18 16 L14 12 L18 14 Z" fill="gold"/>
                <path d="M60 55 L61 57 L63 56 L61 59 L60 61 L59 59 L57 56 L59 57 Z" fill="gold"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">Communicate Effectively</h3>
          <p className="text-sm leading-relaxed">
            Transform complex ideas into clear, compelling visuals that resonate with your audience and drive your message home.
          </p>
        </div>

        {/* Stand Out Competitively */}
        <div className="text-center">
          {/* Competition/trophy icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#fff]">
                {/* Trophy cup */}
                <path d="M25 30 L25 20 Q25 15 30 15 L50 15 Q55 15 55 20 L55 30 Q55 40 40 45 Q25 40 25 30 Z" 
                      fill="currentColor"/>
                {/* Trophy base */}
                <rect x="35" y="45" width="10" height="15" fill="currentColor"/>
                <rect x="30" y="60" width="20" height="5" fill="currentColor" rx="2"/>
                
                {/* Trophy handles */}
                <path d="M20 25 Q15 25 15 30 Q15 35 20 35" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M60 25 Q65 25 65 30 Q65 35 60 35" stroke="currentColor" strokeWidth="3" fill="none"/>
                
                {/* Winner elements around */}
                <circle cx="15" cy="15" r="3" fill="gold"/>
                <path d="M13 15 L15 12 L17 15 L15 18 Z" fill="white"/>
                
                <circle cx="65" cy="15" r="3" fill="gold"/>
                <path d="M63 15 L65 12 L67 15 L65 18 Z" fill="white"/>
                
                {/* #1 in trophy */}
                <text x="40" y="35" textAnchor="middle" className="text-sm font-bold" fill="white">1</text>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">Stand Out Competitively</h3>
          <p className="text-sm leading-relaxed">
            Differentiate your business with unique, professional designs that command attention and position you ahead of competitors.
          </p>
        </div>
      </div>
    </div>

   
    </>
  );
};

export default ServicePage;