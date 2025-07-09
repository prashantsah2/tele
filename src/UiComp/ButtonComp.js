
import React from "react";



export default function InputComp({label,value,setValue,suggestion}){


    return(
        <div className="w-full">
          <p className={`text-sm font-outfit text-[#333333c6] mb-2 ml-1`}>{label}</p>
          <input value={value} onChange={(e)=>{setValue(e.target.value)}} className={`w-full font-outfit text-sm  h-11 rounded-md px-8 outline-none`} placeholder={suggestion}/>
        </div>
    )
}