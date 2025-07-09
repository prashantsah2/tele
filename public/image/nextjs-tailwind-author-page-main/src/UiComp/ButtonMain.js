



import React from "react";




export default function ButtonMain3({value,onClick}){

    return(
        <div className="w-full bg-[#efcf00] rounded-lg">
          <button onClick={onClick} className={`w-[100%] h-11 flex align-middle justify-center items-center rounded-md   text-[#fff]`} >{value}</button>  
        </div>
    )
}