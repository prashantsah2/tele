'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Footer() {


   const router = useRouter()

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#0b3735] max-]">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="bg-[#1e1e1edd] w-[50%] h-1"></div>
        <div className="bg-[#1e1e1edd] w-[50%] h-1"></div>
      </div>

      <div className="min-h-[402px] w-full flex flex-row justify-center items-center max-lg:flex-col ">



      <div className="flex flex-col justify-start align-center flex-1 pl-11 max-lg:w-full max-lg:mt-8 max-lg:pl-0">
        
     {/*    <div className="flex flex-row justify-start items-center max-sm:flex-col max-sm:items-start max-sm:w-full">
          <div className="flex flex-col justify-start align-center px-6 w-[191px]">
             <p className="font-outfit text-[#222] text-xl mb-2">Catgeory</p>
             <p className="font-outfit text-md mb-1">Aestheics</p>    
             <p className="font-outfit text-md mb-1">Dharmik Styles</p>
             <p className="font-outfit text-md mb-1">Fantasy </p>
          </div>
          <div className="flex flex-col justify-start align-center px-6 w-[191px]  max-sm:flex-col max-sm:items-start max-sm:w-full">
             <p className="font-outfit text-[#222] text-xl mb-2 h-[30px]">{``}</p>
             <p className="font-outfit text-md mb-1">Gaming</p>    
             <p className="font-outfit text-md mb-1">Cozy Lifestyles</p>
             <p className="font-outfit text-md mb-1">Anime </p>
          </div>
          <div className="flex flex-col justify-start align-center px-6 w-[191px]  max-sm:flex-col max-sm:items-start max-sm:w-full">
             <p className="font-outfit text-[#222] text-xl mb-2 h-[30px]">{``}</p>
             <p className="font-outfit text-md mb-1">History</p>    
             <p className="font-outfit text-md mb-1">War and Battles</p>
             <p className="font-outfit text-md mb-1">Nostalgia</p>
          </div>
        </div> */}
        <div className="flex flex-row justify-start items-start mt-11 max-sm:flex-col max-sm:items-start max-sm:w-full">
          <div className="flex flex-col justify-start align-start px-6 w-[191px]">
             <p className="font-outfit text-[#fff] text-xl mb-2">Company</p>
             <p className="font-outfit text-[#fff] text-md mb-1 cursor-pointer" onClick={() => {router.push('privacy-policy')}}>Privacy Policy</p>    
             <p className="font-outfit text-[#fff] text-md mb-1 cursor-pointer" onClick={() => {router.push('terms-and-conditions')}}> Terms and Conditions</p>
             <p className="font-outfit text-[#fff] text-md mb-1 cursor-pointer" onClick={() => {router.push('pricing-policy')}}> Pricing Policy </p>
          </div>
         {/*  <div className="flex flex-col justify-start align-start px-6 w-[191px] max-sm:mt-8">
             <p className="font-outfit text-[#fff] text-xl mb-2">Report a bug</p>
             <p className="font-outfit text-[#fff] text-md mb-1">Report a bug</p>    
             <p className="font-outfit text-[#fff] text-md mb-1">Report a failed order</p>
             <p className="font-outfit text-[#fff] text-md mb-1">Other issues </p>
          </div> */}
          <div className="flex flex-col justify-start align-start px-6 w-[191px] max-sm:mt-8">
             <p className="font-outfit text-[#fff] text-xl mb-2">About us</p>
             <p className="font-outfit text-[#fff] text-md mb-1">Our Vision</p>    
             <p className="font-outfit text-[#fff] text-md mb-1">Collaborate with us</p>
             <p className="font-outfit text-[#fff] text-md mb-1">Legal</p>
          </div>
        </div>
         



      </div>

      <div className="flex flex-col justify-start align-center pr-11 min-w-[331px] max-lg:w-full max-lg:mt-8 max-lg:pl-6">
        <div className="flex flex-col justify-start align-center">
           <p className="font-outfit text-2xl text-[#fff] mb-1">Email us at</p>
           <p className="font-outfit text-sm text-[#fff]">info@goldestates.in</p>
          

          <div className="flex flex-col justify-start align-center mt-4">
             <p className="text-lg font-lora text-[#fff] font-semibold mb-2 cursor-pointer" >GREEN FARM HOUSE</p>
            <p className="font-outfit text-md text-[#fff]">Preseted by</p>
             <Image src={`/image/goldestates-logo.png`} onClick={() => {router.push('https://goldestates.in/')}} width={221} height={51} className="mt-5"  />
          </div>
        </div>

        <div className="flex flex-col justify-start align-center mt-6 w-full">
           <div className="border-b-2 border-[#2222222f] mt-8 w-full"> 

           </div>
        </div>

      </div>
      </div>
     
    </div>
  );
}
