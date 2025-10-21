import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Facebook, Twitter, ArrowUpRight, Instagram, Youtube } from 'lucide-react';

const  ContactForm1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [responseMsg, setResponseMsg] = useState('');
  

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      const data = await res.json();
      setResponseMsg(data.message || 'Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
   
    }
  };

  return (
    <div className="min-h-screen pb-20 px-8 w-full max-sm:px-2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-[1391px] mx-auto w-full"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-[#f3f3f3] text-black px-4 py-2 rounded-full text-sm font-medium">
                Contact Us
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-lora text-gray-900 leading-tight">
              Join Us in Creating <br />
              Something Great
            </motion.h1>
          </div>
          
          {/* Circular Logo */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="w-24 h-24 bg-[#f3f3f3] rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-lime-400" />
                </div>
              </div>
              {/* Text around circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 absolute" viewBox="0 0 100 100">
                  <path id="circle" d="M 50,50 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" fill="none" />
                  <text className="text-xs font-medium fill-gray-900">
                    <textPath href="#circle">
                    {`  LET'S MAKE FRESH THINGS • `}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-6">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-2xl border-none outline-none text-gray-600 placeholder-gray-500 focus:bg-gray-50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-2xl border-none outline-none text-gray-600 placeholder-gray-500 focus:bg-gray-50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-2xl border-none outline-none text-gray-600 placeholder-gray-500 focus:bg-gray-50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-2xl border-none outline-none text-gray-600 placeholder-gray-500 focus:bg-gray-50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 rounded-2xl border-none outline-none text-gray-600 placeholder-gray-500 focus:bg-gray-50 transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message *"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 rounded-2xl border-none outline-none text-gray-600 placeholder-gray-500 focus:bg-gray-50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#222] text-[#fff] px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-colors"
                >
                  Send Message
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="bg-[#f3f3f3] rounded-3xl p-8 h-full text-gray-900">
              {/* Address */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Address</h3>
                <p className="text-gray-700">
                  4517 Washington Ave, Manchester, <br />
                  Kentucky 39495
                </p>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-gray-700 mb-2">
                  Phone: +0123-456-789
                </p>
                <p className="text-gray-700">
                  Email: example@gmail.com
                </p>
              </div>

              {/* Open Time */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Open Time</h3>
                <p className="text-gray-700">
                  Monday - Friday: 10:00 - 20:00
                </p>
              </div>

              {/* Stay Connected */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
                <div className="flex gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm1;