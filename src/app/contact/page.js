"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, User, MessageSquare } from "lucide-react";
import Image from "next/image";
import Header3 from "@/components/Header3/Header3";
import Footer2 from "@/components/Footer2/Footer2";
import ContactForm1 from "@/components/ContactForms/ContactForm1/ContactForm1";
import Header from "@/components/Header/Header";
import NewsletterFooter from "@/components/Footer/Footer";
import Footer from "@/components/Footer/Footer";
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
      <Header/>
      
      {/* Main Content */}
    <div className="min-h-screen bg-[#fff] pt-24">
       <ContactForm1 />
   
    </div>
    
    <Footer/>
  

   
    </>
  );
}