"use client"
import Email from "@/components/Email/Email";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Image from "next/image";
import EmailCard from "@/components/EmailCard/EmailCard";
import WhatsAppCard from "@/components/WhatsappCard/WhatsappCard";
import WhoCan from "./WhoCan/WhoCan";


export default function Campaign() {


 const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const defaultConfig2 = {
  theme: {
    gradient: "from-blue-600 via-blue-700 to-blue-800",
    background: "from-gray-50 to-gray-100"
  },
  hero: {
    icon: "MessageCircle",
    iconColor: "text-blue-600",
    iconBg: "bg-white",
    title: "RCS Messaging",
    titleColor: "text-white",
    description: "Enhance your customer interactions with RCS Messaging, delivering rich media and interactive content directly to users' messaging apps for a superior communication experience.",
    descriptionColor: "text-blue-50",
    ctaText: "Get Started",
    ctaStyle: "border-white text-white hover:bg-white hover:text-blue-600"
  },
  cards: {
    topCard: {
      icon: "Send",
      iconColor: "text-blue-600",
      title: "Add Signature",
      content: {
        heading: "SendGun",
        items: [
          "1. Signature will affect message credits",
          "2. Space are also considered as character"
        ]
      }
    },
    mainCard: {
      title: "Send SMS",
      subtitle: "WORLD WIDE",
      tabs: [
        { name: "Transactional", active: true },
        { name: "Promotional", active: false }
      ],
      fields: [
        {
          label: "1. SENDER ID",
          type: "select",
          placeholder: "Select Sender ID"
        },
        {
          label: "2. TO",
          type: "textarea",
          placeholder: "Enter mobile numbers..."
        }
      ]
    }
  }
}


const defaultConfig = {
  theme: {
    gradient: "from-blue-600 via-blue-700 to-blue-800",
    background: "from-gray-50 to-gray-100"
  },
  hero: {
    icon: "MessageCircle",
    iconColor: "text-blue-600",
    iconBg: "bg-white",
    title: "SMS Marketing",
    titleColor: "text-white",
    description: "Leverage powerful SMS marketing solutions to boost engagement, drive sales, and enhance customer communication effortlessly.",
    descriptionColor: "text-blue-50",
    ctaText: "Get Started",
    ctaStyle: "border-white text-white hover:bg-white hover:text-blue-600"
  },
  cards: {
    topCard: {
      icon: "Send",
      iconColor: "text-blue-600",
      title: "Add Signature",
      content: {
        heading: "SendGun",
        items: [
          "1. Signature will affect message credits",
          "2. Required for promotional SMS"
        ]
      }
    },
    mainCard: {
      title: "Send SMS",
      subtitle: "Nationwide",
      tabs: [
        { name: "Service", active: true },
        { name: "Promotional", active: false }
      ],
      fields: [
        {
          label: "1. SENDER ID",
          type: "select",
          placeholder: "Select Sender ID"
        },
        {
          label: "2. TO",
          type: "textarea",
          placeholder: "Enter mobile numbers..."
        }
      ]
    }
  }
}

  return (
    <>
     <Header/>
   
    <div className="w-full">
      {/* First Image - Vertical Layout */}
      <div className="w-full hidden sm:flex">
        <img 
          src="/image/DESKTOP BANNER (1)-min.png" 
          alt="Our Services - Vertical Layout"
          className="w-full h-auto"
        />
      </div>
      
      {/* Second Image - Horizontal Layout */}
      <div className="w-full mt-4 max-sm:flex sm:hidden ">
        <img 
          src="/image/Info@clan.business (31)-min.png" 
          alt="Our Services - Horizontal Layout"
          className="w-full h-auto"
        />
      </div>
    </div>
 
     <div className="flex flex-col justify-center items-center pt-12 max-sm:pt-2">
   {/*   <div className="w-full bg-[#fefefe] flex justify-center items-center">
      <Image className="w-full h-screen flex justify-center items-center aspect-square object-cover max-w-[511px] max-sm:max-w-[211px] max-sm:object-contain" src={`/bc91ba92-36a8-48f6-8f43-52aae6addf7e.jpg`} alt="Campaign Image" width={800} height={400} />
     </div> */}
     <ServiceCard  defaultConfig={defaultConfig}/>
    <ServiceCard  defaultConfig={defaultConfig2}/>
    <EmailCard/>
    <WhatsAppCard/>
    <WhoCan/>
     </div>
     <Footer/>
      
    </>
  );
}
