/* export const metahome = {
  title: 'Buy Farmhouse in India | Luxury Farmhouse Plots Near Delhi, Mumbai, Bangalore',
  description:
    'Browse verified farmhouse listings and premium land for sale across India. Explore luxury plots and weekend homes near Delhi NCR, Mumbai, Gurgaon, Bangalore, and more. Transparent pricing, legal support, and free site visits.',
  keywords: [
    'Farmhouse for sale India',
    'Luxury farmhouse plots Delhi NCR',
    'Buy farmhouse land Mumbai',
    'Second home near Bangalore',
    'Verified farm properties India',
    'Affordable weekend farmhouse',
    'Farmhouse investment opportunities',
    'Agricultural land for sale India'
  ],
 
  twitter: {
    card: 'summary_large_image',
    title: 'Farmhouse for Sale in India',
    description:
      'Find verified farmhouse properties near Delhi, Gurgaon, Mumbai & Bangalore. Transparent deals. Legal + site visit help.',
  
  },
}; */







import OurProjects from "@/components/OurProjects/OurProjects";
import Header from '@/components/Header/Header'
import HeaderNew from '@/components/HeaderNew/HeaderNew';
import MiniHeader from '@/components/MiniHeader/MiniHeader'
import PinterestGallery from '@/components/Gallery/Gallery'
import Footer from "@/components/Footer/Footer";
import RequestDesign from "@/components/RequestDesign/RequestDesign";
import Email from "@/components/Email/Email"
import Licensing from "@/components/Licensing/Licensing"
import Pricing from "@/components/Pricing/Pricing"
import HeroSection from "@/components/HeroSection/HeroSection";
import StaticComp4 from "@/components/StaticComp4/StaticComp4"
import StaticComp7 from "@/components/StaticComp7/StaticComp7";
import MyMap from "@/components/MapLocation/MapLocation";
import KeyFeatures from "@/components/KeyFeatures/KeyFeatures";
import NearbyProjects from "@/components/NearbyProjects/NearbyProjects";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import QueryForm from "@/components/QueryForm/Query"



export default function Campaign() {

  const dataforstat4 = {
        titletop: "Why us",
        title: "Why Choose our farmhouse",
        titledesc : ``,
       innerdata : [
    {        image: `/image/97.png`,
        title: "Outdoor Dining",
    description: "We provide fast and reliable service to ensure your goods are delivered on time."},
    
    {        image: `/image/92.jpeg`, 
        title: "Orchard",
    description: "Our team ensures that all goods are handled with the utmost care and quality."},
    {        image: `/image/93.avif`, 
        title: "Swimming Pool",
    description: "We offer 24/7 customer support to assist you with any inquiries or issues."
    },
    ]
    }




  return (
    <>
   
       
       <HeaderNew/>
       <HeroSection/>
    
       {/* <MiniHeader/> */}
 {/*       <PinterestGallery/> */}
      {/*  <Licensing/> */}
      
      <div className="w-full flex justify-center items-center flex-col bg-[#f9f9d9]">
     
      
   <StaticComp4 data={dataforstat4}/>
            <KeyFeatures/>
             <LayoutContainer source={'11.png'}/>
            <LayoutContainer source={'9.png'}/>
       
      <LayoutContainer source={'8.png'}/>
       
       <StaticComp7/>
       <NearbyProjects/>
       

       <Pricing/>
       <QueryForm/>
       
       <MyMap />
       



      </div>




       <Footer/>

       


  
  
    </>
  );
}
