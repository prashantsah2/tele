import Image from "next/image";
import React from "react";





export default function LayoutContainer() {

    
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#f3f3d2] max-sm:px-4">
      

      <img
        src="/image/8.png"
        alt="Description of image"
        width={500}
        height={500}
        className="w-full h-auto object-cover"
      />
    
   </div>
  );
}
