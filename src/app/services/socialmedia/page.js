"use client"
import React from "react";
import Header3 from "@/components/Header3/Header3";
import Footer2 from "@/components/Footer2/Footer2";


import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import SocialMedia from "@/components/ServicePage/SocialMedia";



export default function page() {




const services = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Social Media Management",
    description: "Comprehensive management of your social media profiles"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Content Creation",
    description: "Engaging content tailored to your brand's voice"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Community Engagement",
    description: "Building and nurturing your online community"
  }
]


let containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6
    }
  }
};

let itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};



    return(

<>
<Header3 />

 <div className="min-h-screen bg-primarybg pt-16">


  <SocialMedia/>


   <div className='w-full flex justify-start items-start font-bebas text-[32px] text-[#fff] mb-4 max-w-[1371px] px-8'>Social Media Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1371px] px-8 pb-16">
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
      </div>


<Footer2 />


</>


    )





}