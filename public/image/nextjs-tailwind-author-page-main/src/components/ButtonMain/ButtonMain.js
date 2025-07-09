"use client"

import Image from "next/image"

import { useRouter } from 'next/navigation';






export default function ButtonMain2(){

    const router = useRouter();
   

    const handleNavigate=()=>{
     
        

        try {
            router.push('/contact');

        } catch (error) {
            console.error("Navigation error:", error);
        }
        
    }





    return(

        <div className="bg-[#F8F3EB] rounded-full flex flex-row justify-center items-center px-3 py-2 cursor-pointer" onClick={handleNavigate}>
            <div className="mr-2">
                <Image src="/image/flower.png" width={21} height={21} alt="Flower" style={{backgroundColor:'#fff'}} />
            </div>
            <div>
                <p className="text-[#444] font-outfit text-lg">Contact</p>
            </div>
        </div>
       
    )
}