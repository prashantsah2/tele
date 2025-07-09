import React from "react";
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import StaticComp9 from "@/components/StaticComp9/StaticComp9";


import WhyUsUI from "@/components/WhyUsUI/WhyUsUI";
import WhyUsUI2 from "@/components/WhyUsUI2/WhyUsUI2";
import {
  FaBolt,
  FaRocket,
  FaMicrochip,
  FaFlag,
} from "react-icons/fa";



export default function WhyUs() {




      const shippingData = {
    tag: "TRAVEL TO DELIVER",
    heading: "Travel-Driven Shipping",
    subheading:
      "Revolutionizing package delivery—connect, save, earn, and trust in a global network.",
    features: [
      {
        icon: <></>,
        title: "Worldwide",
        description: "Send packages globally from any city with matching travelers.",
      },
      {
        icon:<></> ,
        title: "Profitable",
        description: "Earn money on travel and fund future trips at reduced costs.",
      },
      {
        icon:<></> ,
        title: "Economical",
        description: "Reduce shipping costs by matching travelers to carry packages.",
      },
      {
        icon: <></>,
        title: "Secure Payment",
        description: "Payments are safely held until delivery or refunded if the trip is canceled.",
      },
    ],
  };

 const dummyWhyUsData   = {
  tag: "WHY CHOOSE US",
  heading: "Green Farmhouse Advantages",
  subheading:
    "Discover why Green Farmhouse is the perfect choice for peaceful living and smart investment.",
  features: [
    {
      icon: <></>, // You can replace with an actual icon (e.g., <FaLeaf />)
      title: "Peaceful Location",
      description:
        "Located in a quiet and clean village, perfect for relaxing, spending weekends, or enjoying time with family and nature.",
    },
    {
      icon: <></>,
      title: "Good Connectivity",
      description:
        "Easily reachable by road and nearby railway stations. Well connected to Barabanki, Lucknow, and nearby towns.",
    },
    {
      icon: <></>,
      title: "Daily Needs Nearby",
      description:
        "Shops, schools, petrol pumps, banks, and clinics are close by—offering city-like convenience in a natural setting.",
    },
    {
      icon: <></>,
      title: "Area is Growing",
      description:
        "Ongoing development like new roads, pond cleaning, and green projects improves quality of life and property value.",
    },
    {
      icon: <></>,
      title: "Great for Investment",
      description:
        "A peaceful place to live and a smart long-term investment for land buyers.",
    },
    {
      icon: <></>,
      title: "Safe and Friendly Community",
      description:
        "Supportive local community with stable village administration ensures safety and a welcoming environment.",
    },
  ],
};


 const perfumeData = {
    heading: "We take pride in crafting exceptional perfumes that evoke emotion",
    description:
      "Central to our commitment to quality and innovation is the careful selection of premium ingredients that compose our exquisite fragrances. Each scent is a symphony of harmonious notes, meticulously blended to create a captivating olfactory experience. We believe in transparency and want to share the essence of our creations with you.",
    imageSrc: "/image/25.png", // Replace with real image path in public folder
    features: [
      { icon: <FaBolt />, title: "Premium Quality" },
      { icon: <FaRocket />, title: "Unique Blends" },
      { icon: <FaMicrochip />, title: "Innovation Hub" },
      { icon: <FaFlag />, title: "Customer Centric" },
    ],
  };


  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#fff] pt-[141px]">
        <HeaderNew/>






<StaticComp9
  title={dummyWhyUsData.title}
  description={dummyWhyUsData.description}
  points={dummyWhyUsData.features}
/>

 <WhyUsUI {...shippingData} />
 <WhyUsUI2 {...perfumeData} />

    </div>
  );
}
