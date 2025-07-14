import Image from "next/image";
import react from "react";






export default function HeroSection() {



    







    return (

<div className="w-full flex flex-row justify-center items-center bg-[#e3bb09] min-h-[100vh] pt-12 mb-12 max-lg:flex-col max-sm:pb-2 max-sm:pl-1" /* style={{ backgroundImage: 'url(/image/hotel.webp)',backgroundRepeat:'repeat', backgroundSize: 'contain',backgroundSize: '200px 200px', backgroundPosition: 'center' }} */>

    <div
    className="w-full flex flex-col justify-center items-start min-h-[100vh] max-w-[1441px] px-12 z-40 max-lg:min-h-[531px] max-sm:min-h-[441px] max-sm:px-2 overflow-hidden"
    >
    <p className="font-lora text-[75px] text-[#fff] text-left leading-[75px] max-sm:text-[41px] max-sm:leading-[41px]">GREEN <br/> FARMHOUSE</p>
    <p className="font-lora text-[21px] text-[#fff] text-left leading-6 text-sm">Experience the ultimate luxury <br/> and comfort in our green farmhouse.</p>

    </div>
  {/*   <Image src={'/image/45.jpg'} width={500} height={500} alt="hero image" className=" object-cover top-0 left-0 h-full w-full mr-12 rounded-lg max-lg:mr-1 max-lg:ml-1 max-lg:w-[95%] mb-2" /> */}

    <div className="w-full flex justify-center items-center max-lg:mt-4 max-lg:mb-4">
    {/* video will be added here as bg of hero section*/}
    <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover left-0 top-0"
     
    >
        <source src="/image/farmm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
   


    </div>

</div>














    )




}