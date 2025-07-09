import React from "react";



export default function Header(){
    

    return(
        <div className="w-full max-w-[100%] border-b border-b-[#e7e7e7] h-[71px] flex flex-row items-center">
            <div>

            </div>
            <div className="flex flex-row font-outfit text-md text-[#3d3d3e] justify-start items-center pl-8 cursor-pointer">
               <p className="flex justify-center align-middle pl-4"> Home </p>    <p className="flex justify-center align-middle pl-4"> About us  </p>    <p className="flex justify-center align-middle pl-4"> Our Works</p>
            </div>

            <div className="bg-[#6fff32] color-[#3d3d3e] max-h-41px px-2 py-2 rounded-3xl mx-5">
                  Contact us
            </div>

        </div>
    ) 
}