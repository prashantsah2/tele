"use client"
import Footer from "@/components/Footer/Footer";
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import AboutHero from "@/components/AboutHero/AboutHero";
import Footer2 from "@/components/Footer2/Footer2";
import Header from "@/components/Header/Header";
import Header3 from "@/components/Header3/Header3";





export default function Aboutus(){




    return(
        <>
        <Header3/>
        <div className="flex flex-col justify-center items-center w-full min-h-[91vh]">
         <AboutHero/>
         <Footer2/>
        </div>
      

        </>
    )
}