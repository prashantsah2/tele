import Image from "next/image";
import react from "react";






export default function HeroSection() {









    return (

<div className="w-full flex flex-row justify-center items-center bg-[#e3bb09] pt-12 pb-12" /* style={{ backgroundImage: 'url(/image/hotel.webp)',backgroundRepeat:'repeat', backgroundSize: 'contain',backgroundSize: '200px 200px', backgroundPosition: 'center' }} */>

    <div
    className="w-full flex flex-col justify-center items-start min-h-[95vh] max-w-[1441px] px-12 z-40"
    >
    <p className="font-lora text-[75px] text-[#333] text-left leading-[75px]">LUXURY GREEN <br/> FARMHOUSE</p>
    <p className="font-lora text-[21px] text-[#444] text-left leading-6 text-sm">Experience the ultimate luxury <br/> and comfort in our green farmhouse.</p>

    </div>
    <Image src={'/image/45.jpg'} width={500} height={500} alt="hero image" className=" object-cover  top-0 left-0 w-full h-full mr-12" />

</div>














    )




}