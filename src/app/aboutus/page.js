"use client"
import Footer from "@/components/Footer/Footer";
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import Image from "next/image";
import AboutHero from "@/components/AboutHero/AboutHero";
import MissionSection from "@/components/AboutMiddle/AboutMiddle";

import StaticUi from '@/components/StaticUi/StaticUI'
import StaticComp2 from "@/components/StaticComp2/StaticComp2"
import StaticComp3 from "@/components/StaticComp3/StaticComp3"
import StaticComp4 from "@/components/StaticComp4/StaticComp4"




export default function Aboutus(){




    return(
        <>
         <HeaderNew/>
        <div className="flex flex-col justify-center items-center w-full min-h-[91vh]">
         <AboutHero/>
         <MissionSection/>
      
        </div>
        <Footer/>

        </>
    )
}