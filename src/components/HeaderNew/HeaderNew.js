"use client"
import Image from "next/image";
import ButtonMain from "../ButtonComp/ButtonComp";
import ButtonMain2 from "@/components/ButtonMain/ButtonMain"
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";



export default function HeaderNew(){


    const[isTop,setIsTop]=useState(true)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const router = useRouter()

    const handleNavigate=(nav)=>{
    
        router.push(nav)
     
    }



    const [bgpos,setBgPos]=useState('')


    const navOptions = [
        { label: "Home", path: "/" },
        { label: "Why us", path: "/whyus" },
        { label: "About us", path: "/aboutus" },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getBgBarStyle = () => {
        switch (hoveredIndex) {
            case 0:
                return "left-2";
            case 1:
                return "left-[90px]";
            case 2:
                return "left-[210px]";      
            default:
                return "left-2";
        }

    };

    return (
        <>
        <div className="w-full flex flex-row justify-between items-center  pl-12 pr-12 pt-4 pb-4 bg-[#0b3735] z-50 fixed top-0 max-sm:pl-2 max-sm:pr-2" style={{scale:isTop?1:.8,marginTop:isTop?0:21,transition:'all 0.3s ease-in-out',borderRadius:isTop?'0':'12px'}} >
           


           {!isMobile?<> <div className="flex flex-row space-x-6 relative">
                
             <div className="w-[71px] h-8 bg-[#d4d4f9] absolute left-2 z-0 rounded-full bottom-[-5px] max-md:hidden"></div>   
            <p className="cursor-pointer font-outfit z-10 text-[#fff]" onClick={()=>{handleNavigate('/')}}>Home</p>
            <p className="cursor-pointer font-outfit z-10 text-[#fff]" onClick={()=>{handleNavigate('/whyus')}}>Why us</p>
            <p className="cursor-pointer font-outfit z-10 text-[#fff]" onClick={()=>{handleNavigate('/aboutus')}}>About us</p>
            </div></>:<></>}
            <div>
            <Image 


                src="/image/goldestates-logo.png" 
                alt="Rainnee Logo" 
                width={198} 
                height={50} 
                className="obje ct-contain cursor-pointer max-sm:w-[131px]"
                style={{marginRight:'auto',marginLeft:isMobile?0:-41,}}
            />
            
            </div>
            <div>
             <ButtonMain2/>
            </div>
        </div>
       
        </>
        )
}