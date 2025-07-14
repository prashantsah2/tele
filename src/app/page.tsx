
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
    {        image: `/image/12.png`,
        title: "Fast Service",
    description: "We provide fast and reliable service to ensure your goods are delivered on time."},
    
    {        image: `/image/13.png`, 
        title: "Quality Assurance",
    description: "Our team ensures that all goods are handled with the utmost care and quality."},
    {        image: `/image/14.png`, 
        title: "Customer Support",
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
      <LayoutContainer/>
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
