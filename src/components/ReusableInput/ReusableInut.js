import React from "react";




export default function ReusablInput({label,value,setValue,placeholder }){




    return(
        <div className=" w-full justify-start flex flex-col">
          <div className="font-outfit">
           {label}
          </div>

          <div className="font-outfit w-full">
            <input type='text' multiple className="outline-none border-b-[2px] pr-3 py-2 border-[#2222228b] font-outfit w-full bg-transparent"  value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder={placeholder} />
          </div>
        </div>
    )
}