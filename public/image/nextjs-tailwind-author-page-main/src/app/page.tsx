
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
export default function Campaign() {
  return (
    <>
       {/*    <Header/> */}
       
       <HeaderNew/>
    
       <MiniHeader/>
       <PinterestGallery/>
       <Licensing/>
      {/*  <RequestDesign/> */}
      <div className="w-full flex justify-center items-center">
        <Pricing/>
      </div>
       


       <Footer/>

       

     {/*  <OurProjects/> */}
  
  
    </>
  );
}
