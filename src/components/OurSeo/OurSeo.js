"use client"
import { motion } from 'framer-motion';

export default function OurSeo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-primarybg w-full text-white p-8">
      <div className="max-w-[1371px] mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-6" variants={titleVariants}>
            <div className="w-24 h-0.5 bg-white mr-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold">Our SEO Approach</h1>
            <div className="w-24 h-0.5 bg-white ml-4"></div>
          </motion.div>
          
          <motion.div className="text-left max-w-sm" variants={titleVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our SEO Services That Deliver</h2>
            <p className="text-sm leading-relaxed">
             {` From local search visibility to Generative Engine Optimization (GEO), we cover every corner of SEO. 
              Whether it's a full strategy, ongoing support, in-house team assistance, or powerful content and link 
              building—we deliver solutions that boost rankings, drive traffic, and grow your revenue.`}
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* SEO Audit */}
          <motion.div
            className="bg-white rounded-2xl p-6 text-gray-800 shadow-lg border-2 border-green-400"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">SEO Audit</h3>
            <p className="text-sm leading-relaxed">
            {`  Before we start working on your existing website and improving it, we need to find out 
              what's holding you back. Our SEO audit uncovers technical issues, content gaps, and 
              missed opportunities, giving you a clear action plan.`}
            </p>
          </motion.div>

          {/* SEO Strategy */}
          <motion.div
            className="bg-white rounded-2xl p-6 text-gray-800 shadow-lg border-2 border-green-400"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">SEO Strategy</h3>
            <p className="text-sm leading-relaxed">
              We create a customized plan to grow your search visibility. We identify the keywords your 
              customers are searching for, analyze your competitors, and create a step-by-step 
              roadmap to reach (and stay at) the top of search results.
            </p>
          </motion.div>

          {/* Local SEO */}
          <motion.div
            className="bg-white rounded-2xl p-6 text-gray-800 shadow-lg border-2 border-green-400"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">Local SEO</h3>
            <p className="text-sm leading-relaxed">
              Get found by customers right in your area. We optimize your Google Business Profile, local 
              listings, and location-based keywords so your business appears in Maps and local search 
              results. Perfect for driving more foot traffic, calls, and local leads.
            </p>
          </motion.div>

          {/* In-House SEO Support */}
          <motion.div
            className="bg-white rounded-2xl p-6 text-gray-800 shadow-lg border-2 border-green-400"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">In-House SEO Support</h3>
            <p className="text-sm leading-relaxed">
              Do you already have a small marketing or SEO team? We can work alongside them, providing 
              expert guidance, advanced strategies, and hands-on help to make sure your in-house 
              efforts deliver the best results possible.
            </p>
          </motion.div>

          {/* SEO-Optimised Content Creation */}
          <motion.div
            className="bg-white rounded-2xl p-6 text-gray-800 shadow-lg border-2 border-green-400 md:col-span-2 lg:col-span-1"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">SEO-Optimised Content Creation</h3>
            <p className="text-sm leading-relaxed">
              From web pages to blog posts, we create content that ranks and converts. Every piece is 
              keyword-optimised, tailored to your audience, and built to bring in consistent, high-quality 
              traffic over time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}