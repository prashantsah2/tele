import React from "react";




export default function Licensing(){



    return(
       <div className="flex flex-col justify-center items-center">
         <div className="flex flex-col justify-center items-center w-full min-h-[51vh] max-w-[1445px] pl-7 pr-7">
            <div className="flex flex-col w-full justify-center items-center">
              <p className="text-left text-3xl font-outfit text-[#222] w-full">Our Licensing explained</p>
            </div>
           <div className="flex flex-row justify-between items-center w-full">
             <div className="flex flex-row justify-between items-center w-full">
                 <div className="flex flex-col justify-center items-center bg-[#f2f2f2] px-4 py-6 mt-4 w-full mr-4">
                    <div className="flex w-full text-left">
                        <p className="text-left w-full font-outfit">PREMIUM</p>
                    </div>

                 </div>
            </div>
              <div className="flex flex-row justify-between items-center w-full">
                 <div className="flex flex-col justify-center items-center bg-[#f2f2f2] px-4 py-6 mt-4 w-full">
                    <div className="flex w-full text-left">
                        <p className="text-left w-full font-outfit">FULL ACCESS</p>
                    </div>

                 </div>
            </div>
           </div>

        </div>
       </div>
    )
}