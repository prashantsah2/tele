"use client"
import { motion } from "framer-motion"

export default function HorizontalStrip() {
  const services = [
    "Web Development",
    "App Development", 
    "SEO",
    "Social Media",
    "Web Development",
    "App Development",
    "SEO", 
    "Social Media"
  ]

  // Abstract shapes component
  const AbstractShape = ({ delay = 0, size = "w-8 h-8", color = "bg-green-400" }) => (
    <motion.div
      className={`absolute ${size} ${color} opacity-20`}
      style={{
        borderRadius: Math.random() > 0.5 ? "50%" : "20%",
        top: `${Math.random() * 80 + 10}%`,
        transform: `rotate(${Math.random() * 360}deg)`
      }}
      animate={{
        x: [0, Math.random() * 50 - 25],
        y: [0, Math.random() * 30 - 15],
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )

  return (
    <div className="relative w-full h-20 bg-[#1c41f6] mt-[-53px] z-50 max-w-[100vw] overflow-hidden flex items-center max-sm:mt-[-1px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0">
        <AbstractShape delay={0} size="w-6 h-6" color="bg-green-400" />
        <AbstractShape delay={1} size="w-4 h-4" color="bg-blue-400" />
        <AbstractShape delay={2} size="w-8 h-8" color="bg-purple-400" />
        <AbstractShape delay={3} size="w-5 h-5" color="bg-yellow-400" />
        <AbstractShape delay={4} size="w-7 h-7" color="bg-pink-400" />
        <AbstractShape delay={5} size="w-3 h-3" color="bg-cyan-400" />
        <AbstractShape delay={6} size="w-6 h-6" color="bg-orange-400" />
        <AbstractShape delay={7} size="w-4 h-4" color="bg-red-400" />
      </div>

      {/* Scrolling Text Container */}
      <div className="flex items-center h-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* First set of items */}
          {services.map((service, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <motion.span
                className="text-2xl font-bold text-white mx-8 relative"
                whileHover={{ scale: 1.1, color: "#4ade80" }}
                transition={{ duration: 0.2 }}
              >
                {service}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              
              {/* Separator dot */}
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mx-4"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </div>
          ))}
          
          {/* Second set of items for seamless loop */}
          {services.map((service, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <motion.span
                className="text-2xl font-bold text-white mx-8 relative"
                whileHover={{ scale: 1.1, color: "#4ade80" }}
                transition={{ duration: 0.2 }}
              >
                {service}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              
              {/* Separator dot */}
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mx-4"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays for seamless edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-primarybg to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-primarybg to-transparent z-10"></div>
    </div>
  )
}