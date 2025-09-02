"use client"
import React from 'react';
import { motion } from 'framer-motion';

const OurProjects2 = () => {
  const projects = [
    {
      id: 1,
      title: "CLAN Businesss - Marketplace", 
      description: "Clan Marketplace is a cutting-edge platform designed to connect buyers and sellers in a seamless online environment.",
      technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
      image: "Project Screenshot"
    },
    {
      id: 2,
      title: "Clanfest - An artist event platforms",
      description: "A full-stack e-commerce solution with advanced analytics, inventory management, and seamless payment integration for modern businesses.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      image: "Project Screenshot"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Real-time weather monitoring and prediction system with beautiful data visualizations and historical trend analysis for multiple locations.",
      technologies: ["Vue.js", "D3.js", "Python", "API"],
      image: "Project Screenshot"
    },
    {
      id: 4,
      title: "Social Media Manager",
      description: "Comprehensive social media management tool with content scheduling, analytics tracking, and automated engagement features.",
      technologies: ["Angular", "Express", "Redis", "Docker"],
      image: "Project Screenshot"
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Mobile-first fitness application with workout planning, nutrition tracking, and progress visualization with social features.",
      technologies: ["React Native", "Firebase", "Charts", "GPS"],
      image: "Project Screenshot"
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features for digital asset management.",
      technologies: ["Web3", "Ethereum", "Solidity", "MetaMask"],
      image: "Project Screenshot"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0906bd] text-white w-full relative">

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


      <div className="max-w-[1391px] mx-auto  py-16">
        {/* Header Section */}
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-5 font-bebas">
            OUR{' '}
            <span className="text-green-500">PROJECTS</span>
          </h1>
          <div className="w-20 h-1 bg-white mb-6"></div>
          <div className="text-xl md:text-2xl font-light opacity-90 mb-6">
            INNOVATIVE SOLUTIONS
          </div>
          <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
            EXPLORE OUR CUTTING-EDGE PROJECTS THAT SHOWCASE
            <br />
            CREATIVITY, TECHNOLOGY, AND REAL-WORLD IMPACT.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div variants={hoverVariants}>
                {/* Green accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-white/10 rounded-2xl mb-6 flex items-center justify-center border-2 border-dashed border-white/30 transition-all duration-300 group-hover:bg-white/15">
                  <span className="text-lg opacity-70">{project.image}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-base leading-relaxed opacity-90 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.2 + techIndex * 0.1,
                        duration: 0.3 
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-green-600"
                    whileHover={{ 
                      y: -2,
                      boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-transparent text-white px-5 py-2 rounded-full font-semibold text-sm border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-green-600"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurProjects2;