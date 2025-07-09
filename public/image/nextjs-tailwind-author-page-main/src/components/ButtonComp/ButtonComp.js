
import React from "react";






export default function ButtonMain({title}){
    
    return(
        <div className="bottom-1 rounded-full border border-[#999] w-[211px] h-[41px] flex justify-center items-center mt-4 text-[#555] rounded-full ">
           <button>{title}</button>
        </div>
    )
}