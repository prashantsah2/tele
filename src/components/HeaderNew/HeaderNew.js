"use client"
import Image from "next/image";
import ButtonMain from "../ButtonComp/ButtonComp";
import ButtonMain2 from "@/components/ButtonMain/ButtonMain"
import { useRouter } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";



export default function HeaderNew(){


    const[isTop,setIsTop]=useState(true)
    const [isMobile, setIsMobile] = useState(false);
 const [navOpen,setNavOpen]=useState(false)

     const navOptionsMobile = [
    {
      label: "Home",
      path: "/",
      submenu: [],
    },
    {
      label: "About Us",
      path: "/aboutus",
      submenu: [],
    },
    
      
       
      
    

    

    {
      label: "Why us",
      path: "/whyus",
      submenu: [],
    },
  ];



   const handleMouseLeave = (index) => {
    if (hoveredIndex === index) {
      setHoveredIndex(null);
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
    console.log("Nav Open:", navOpen);
  };

// Close nav when clicking outside the mobile menu
// Ref for the mobile menu

const mobileMenuRef = useRef(null);

useEffect(() => {
    if (!navOpen) return;
    const handleClickOutside = (event) => {
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target)
        ) {
            setNavOpen(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [navOpen]);

   

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
        <div className="w-full flex flex-row justify-between items-center  pl-12 pr-12 pt-4 pb-4 bg-[#0b3735] z-50 fixed top-0 max-sm:pl-2 max-sm:pr-2" style={{scale:isTop||isMobile?1:.8,marginTop:isTop||isMobile?0:21,transition:'all 0.3s ease-in-out',borderRadius:isTop||isMobile?'0':'12px'}} >



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
            {isMobile &&<>
                        <svg  width="34" height="33" style={{marginLeft:-41}}  onClick={toggleNav}  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9474 31.5434C25.2527 31.5434 31.9854 24.8106 31.9854 16.5054C31.9854 8.20014 25.2527 1.46741 16.9474 1.46741C8.64219 1.46741 1.90945 8.20014 1.90945 16.5054C1.90945 24.8106 8.64219 31.5434 16.9474 31.5434Z" stroke="#fff" stroke-width="2.31353" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1636 10.7216H22.7312" stroke="#fff" stroke-width="2.31353" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1636 16.5054H22.7312" stroke="#fff" stroke-width="2.31353" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1636 22.2892H22.7312" stroke="#fff" stroke-width="2.31353" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            
            </>}

                <div
                ref={mobileMenuRef}
                style={{ height: '100vh', position: 'fixed' }}
                className={`navbar-mobilemenu position-fixed top-0 left-[290px] w-[71%] h-100vh bg-white shadow-lg z-25 transition-all duration-300 ease-in-out lg:hidden max-md:left-[221px]   max-sm:left-[175px] max-xs:left-[121px] ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col justify-start items-start p-8 h-full" >
                  {navOptionsMobile.map((item,index)=>{

                    return (
                        <div key={index} className="w-full mb-4">
                            <p      
                                className="text-lg font-outfit text-[#2d4e64] cursor-pointer mb-2"
                                onClick={() => handleNavigate(item.path)}
                            >
                                {item.label}
                            </p>
                        </div>
                    );
                  })}
                </div>
            </div>
        </div>
       
        </>
        )
}