import Image from "next/image";
import react from "react";






export default function HeroSection() {



    







    return (

<div className="w-full flex flex-row justify-center items-center bg-[#e3bb09] pt-12 pb-12 max-lg:flex-col max-sm:pb-2 max-sm:pl-1" /* style={{ backgroundImage: 'url(/image/hotel.webp)',backgroundRepeat:'repeat', backgroundSize: 'contain',backgroundSize: '200px 200px', backgroundPosition: 'center' }} */>

    <div
    className="w-full flex flex-col justify-center items-start min-h-[95vh] max-w-[1441px] px-12 z-40 max-lg:min-h-[331px] max-sm:min-h-[241px] max-sm:px-2"
    >
    <p className="font-lora text-[75px] text-[#333] text-left leading-[75px] max-sm:text-[41px] max-sm:leading-[41px]">LUXURY GREEN <br/> FARMHOUSE</p>
    <p className="font-lora text-[21px] text-[#444] text-left leading-6 text-sm">Experience the ultimate luxury <br/> and comfort in our green farmhouse.</p>

    </div>
    <Image src={'/image/45.jpg'} width={500} height={500} alt="hero image" className=" object-cover top-0 left-0 h-full w-full mr-12 rounded-lg max-lg:mr-1 max-lg:ml-1 max-lg:w-[95%] mb-2" />

</div>














    )




}