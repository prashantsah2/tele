"use client"
import Image from "next/image";
import ButtonMain from "../ButtonComp/ButtonComp";
import ButtonMain2 from "@/components/ButtonMain/ButtonMain"
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function HeaderNew(){

    const router = useRouter()

    const handleNavigate=(nav)=>{
    
        router.push(nav)
     
    }



    const [bgpos,setBgPos]=useState('')


    const navOptions = [
        { label: "Home", path: "/" },
        { label: "Categories", path: "/categories" },
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
        <div className="w-full flex flex-row justify-between items-center max-w-[1511px] pl-12 pr-12 pt-4 pb-4 bg-white " >
            <div className="flex flex-row space-x-6 relative">
                
             <div className="w-[71px] h-8 bg-[#d4d4f9] absolute left-2 z-0 rounded-full bottom-[-5px]"></div>   
            <p className="cursor-pointer font-outfit z-10" onClick={()=>{handleNavigate('/')}}>Home</p>
            <p className="cursor-pointer font-outfit z-10" onClick={()=>{handleNavigate('/categories')}}>Categories</p>
            <p className="cursor-pointer font-outfit z-10" onClick={()=>{handleNavigate('/aboutus')}}>About us</p>
            </div>
            <div>
            <Image 
                src="/image/logos/ra.png" 
                alt="Rainnee Logo" 
                width={198} 
                height={50} 
                className="obje ct-contain cursor-pointer"
                style={{marginRight:'auto',marginLeft:-51}}
            />
            
            </div>
            <div>
             <ButtonMain2/>
            </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="bg-[#5b3de18a] w-[50%] h-2">

          </div>
          <div className="bg-[#60e13ddd] w-[50%] h-2">

          </div>
        </div>
        </>
        )
}