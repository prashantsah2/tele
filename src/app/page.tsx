"use client"
import Header from "@/components/Header/Header";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Image from "next/image";

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


  return (
    <>
     <Header/>
     <div className="flex flex-col justify-center items-center">
     <div className="w-full bg-[#fefefe] flex justify-center items-center">
      <Image className="w-full h-screen flex justify-center items-center aspect-square object-cover max-w-[511px] max-sm:max-w-[211px] max-sm:object-contain" src={`/bc91ba92-36a8-48f6-8f43-52aae6addf7e.jpg`} alt="Campaign Image" width={800} height={400} />
     </div>
     <ServiceCard  defaultConfig={defaultConfig2}/>
    <ServiceCard  defaultConfig={defaultConfig2}/>
     </div>
      
    </>
  );
}
