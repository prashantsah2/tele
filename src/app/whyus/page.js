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
import Footer from "@/components/Footer/Footer";



export default function WhyUs() {




const shippingData = {
  tag: "WHY CHOOSE GREEN FARMHOUSE",
  heading: "Peaceful Living Meets Smart Investment",
  subheading:
    "At Green Farmhouse, we don’t just offer land—we offer a lifestyle that blends peace, potential, and smart planning.",
  features: [
    {
      icon: <></>,
      title: "Strategic Location",
      description:
        "Located on Dariyabad–Safdarganj Road, our project offers rural calm with city access. Ideal for daily commuting from Barabanki or weekend visits from Lucknow.",
    },
    {
      icon: <></>,
      title: "Farmhouse-Ready Plots",
      description:
        "Plots come ready for transformation—plant trees, set up fencing, install water sources, lighting, and gardens without starting from scratch.",
    },
    {
      icon: <></>,
      title: "Long-Term Land Value",
      description:
        "Benefit from regional development. Roads, water bodies, and upgrades in the area ensure your investment grows over time.",
    },
    {
      icon: <></>,
      title: "Transparent & Trustworthy Process",
      description:
        "All plots come with clear titles, defined boundaries, and easy documentation. No hidden charges or surprises.",
    },
    {
      icon: <></>,
      title: "Live Close to Nature",
      description:
        "Enjoy green surroundings, clean air, and a quiet environment that supports stress-free, healthy living.",
    },
    {
      icon: <></>,
      title: "Low Maintenance, High Flexibility",
      description:
        "Whether fully developed or DIY at your pace, plots offer flexibility without the burden of constant upkeep.",
    },
    {
      icon: <></>,
      title: "Customer Support You Can Count On",
      description:
        "From visits to paperwork and after-sales service, we assist you throughout. We're more than sellers—we're partners.",
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
  tag: "CRAFTED FOR THE SENSES",
  heading:
    "We take pride in crafting exceptional perfumes that evoke emotion",
  subheading:
    "At the heart of every fragrance lies our promise of premium ingredients, careful formulation, and creative expression. Every bottle is a story, every note a feeling.",
  imageSrc: "/image/garden-1680802_1920.jpg", // Replace with the actual image path
  features: [
    {
      icon: <FaBolt />,
      title: "Premium Quality",
      description:
        "We use only high-grade ingredients to ensure long-lasting and refined fragrances.",
    },
    {
      icon: <FaRocket />,
      title: "Unique Blends",
      description:
        "Our scents are thoughtfully composed to deliver one-of-a-kind olfactory experiences.",
    },
    {
      icon: <FaMicrochip />,
      title: "Innovation Hub",
      description:
        "Combining tradition with modernity, we explore new methods to push fragrance boundaries.",
    },
    {
      icon: <FaFlag />,
      title: "Customer Centric",
      description:
        "We create with you in mind—your preferences, feedback, and satisfaction drive us.",
    },
  ],
};


  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#fff] pt-[71px]">
        <HeaderNew/>






<StaticComp9
  title={dummyWhyUsData.title}
  description={dummyWhyUsData.description}
  points={dummyWhyUsData.features}
/>

 <WhyUsUI {...shippingData} />
 <WhyUsUI2 {...perfumeData} />
 <Footer/>

    </div>
  );
}
