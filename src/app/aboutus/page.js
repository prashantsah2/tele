"use client"
import Footer from "@/components/Footer/Footer";
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import Image from "next/image";

import StaticUi from '@/components/StaticUi/StaticUI'
import StaticComp2 from "@/components/StaticComp2/StaticComp2"
import StaticComp3 from "@/components/StaticComp3/StaticComp3"
import StaticComp4 from "@/components/StaticComp4/StaticComp4"




export default function Aboutus(){




    return(
        <>
         <HeaderNew/>
        <div className="flex flex-col justify-center items-center w-full min-h-[141vh]">
            <div className="flex flex-col justify-center items-center w-full max-w-[1431px] font-outfit">
                  
                  <div className="flex flex-col justify-start items-center w-full bg-[#fff] pt-11 pl-11 pb-4 rounded-lg min-h-[331px] mb-8">
                     <div className="flex flex-col justify-center w-full items-center">
                        <p className="flex text-2xl text-outfit mb-1 w-full text-left text-[#222]">Who we are and what we do?</p>
                        <p className="flex text-sm text-outfit w-full text-left text-[#222]">We are group of indepenadat artist who creates art original arts for both digital and traditional.

                        </p>
                     </div>
                     <div className="flex flex-row justify-start w-full items-start pr-11">
         <div className="flex flex-col justify-start items-start">               <p className="flex text-sm mt-5 text-outfit mb-1 w-full text-left text-[#555] max-w-[711px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                             <p className="flex text-sm mt-5 text-outfit mb-1 w-full text-left text-[#555] max-w-[711px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p></div>
                        <Image src={`/image/aboutus.png`} width={211} height={311} className="flex-1 max-w-[411px] pl-5 ml-auto " />
                     </div>

                     <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-col justify-start items-start">
                           <p className="font-sans mt-4 text-3xl text-[#676464]">32 Designers</p>
                           <p className="font-outfit mt-2 text-[#676464]">from around the world</p>
                      </div>
                         <div className="flex flex-col justify-start items-start ml-6">
                           <p className="font-sans mt-4 text-3xl text-[#676464]">100+ Clients</p>
                           <p className="font-outfit mt-2 text-[#676464]">from around the world</p>
                      </div>
                         <div className="flex flex-col justify-start items-start ml-6">
                           <p className="font-sans mt-4 text-3xl text-[#676464]">32 Designers</p>
                           <p className="font-outfit mt-2 text-[#676464]">from around the world</p>
                      </div>
                     </div>
                  </div>

             <StaticUi/>
           {/*   <StaticComp2/>
             <StaticComp3/>
             <StaticComp4/> */}
             
             
            </div>
        </div>
        <Footer/>

        </>
    )
}