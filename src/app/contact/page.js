"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, User, MessageSquare } from "lucide-react";
import Image from "next/image";
import Header3 from "@/components/Header3/Header3";
import Footer2 from "@/components/Footer2/Footer2";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContactUs = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (result.ok) {
        const data = await result.json();
        alert("Contact form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      } else {
        console.error("Error:", result.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Header3 />
      
      {/* Main Content */}
      <div className="min-h-screen bg-[#0906bd] pt-24">
       



        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bebas mb-6">
              <span className="text-green-400">GET IN</span>
              <span className="text-white"> TOUCH</span>
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
             {` Ready to take your business to the next level? Let's discuss your project and create something amazing together.`}
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-blue-600/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 ">
              <form onSubmit={handleContactUs} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-blue-700/50 border border-blue-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-blue-700/50 border border-blue-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full bg-blue-700/50 border border-blue-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-blue-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-900"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Company Details */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-green-400">COMPANY</span>
              <span className="text-white"> DETAILS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phone Numbers */}
              <motion.div 
                className="bg-blue-600/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 text-center hover:bg-blue-600/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Phone Numbers</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">+91 9818793773</p>
                  <p className="text-gray-300">+91 8826615660</p>
                </div>
              </motion.div>

              {/* Emails */}
              <motion.div 
                className="bg-blue-600/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 text-center hover:bg-blue-600/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email Addresses</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 break-all">info@clan.business</p>
                  <p className="text-gray-300 break-all">support@clan.business</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="bg-blue-600/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 text-center hover:bg-blue-600/40 transition-all duration-300 md:col-span-2 lg:col-span-1"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <div className="text-gray-300 leading-relaxed">
                  <p>A-49, Engine House,</p>
                  <p>Mohan Industrial Estate, Mathura Road</p>
                  <p>New Delhi, India</p>
                  
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}