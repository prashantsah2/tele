"use client"
import Image from "next/image";

import InputComp from "@/UiComp/ButtonComp"
import { useState } from "react";
import ButtonMain3 from '@/UiComp/ButtonMain'





export default function Login(){

  const [number,setNumber]=useState()


    return(
        <div className="flex flex-col justify-center items-center min-h-[100vh]  ">
           <div className="flex flex-row justify-center items-center min-h-[100vh]">
            
            <div className="flex flex-row w-[51vw] object-cover justify-center items-center h-[100vh]">
              <Image src={'/image/login.jpg'} width={311} height={311} alt="login" />
              <p>

              </p>
            </div>

            <div className="flex flex-1 min-w-[49vw] bg-[#ddfe90] h-[100vh] flex-col justify-center items-center">
  
               
             <div className="max-w-[371px] w-full">
                <InputComp label={'Email address or phone number'}/>
             </div>
              
                <div className="max-w-[371px] w-full mt-4 mb-4">
                <InputComp label={'Your password'}/>
             </div>

               <div className="max-w-[371px] w-full mt-6">
                <ButtonMain3 value={'login'}/>
             </div>


            </div>

           </div>
        </div>
    )
}