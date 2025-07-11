import Image from "next/image";



export default function Pricing(){
   
let data = [
  { title: 'Use this design for up to 775 total sales (physical or digital products)' },
  { title: 'You can edit colors, size, or layout for personal or business use' },
  { title: 'You cannot resell, share, or distribute the raw design file (PNG/SVG/PSD/etc)' },
  { title: 'This license is non-exclusive – others can also use the design' },
  { title: 'The design cannot be used in logos, trademarks, or branding' },
  { title: 'Ownership remains with the creator – this is a license to use, not ownership transfer' },
];


    return(
        <div className="flex flex-col w-full justify-center items-center max-w-[1381px] mt-6 px-8 pt-8 pb-8 mb-8 rounded-2xl max-sm:px-2">
           <div>

           </div>
           <div className="flex flex-row justify-center items-center gap-2 w-full max-sm:flex-col w-full">
            <div className="flex flex-col min-h-[511px] flex-1 rounded-2xl flex-1 w-full">
               <div className="flex flex-col justify-start items-center border-2 border-[#7db522] min-h-[311px] flex-1 rounded-2xl pt-6 pb-6">
                <p className="font-outfit text-lg text-[#222]">Basic License</p>
                <div>
                    <p className="font-outfit text-4xl mt-2 text-[#0f8009]">3 $</p>
                </div>
                <div className="flex flex-col justify-center items-start w-full p-4 mt-4 max-sm:flex-col max-sm:px-1">
                   {data.map((item,index)=>{

                    return(
                           <div key={index} className="flex flex-row justify-center items-center ml-4 my-2 px-7 max-sm:ml-1 max-sm:px-2">
                        <div className="relative flex justify-center items-center mr-3 leading-3">
                           
                            <p  className="z-10 bg-[#222222] text-[#fff] w-5 h-5 flex items-center justify-center rounded-full text-[11px] leading-3" style={{lineHeight:12}}>{index+1}</p>

                        </div>
                        <div>
                            <p className="font-outfit text-sm leading-4">{item.title}</p>
                        </div>
                    </div>
                    )
                   })}
                    
                </div>
                <div className="mt-auto">
                    <div className="flex justify-center cursor-pointer rounded-full bg-[#e62a2a] w-[211px] h-[43px] items-center mt-auto text-md text-[#fff]">
                     Purchase This
                    </div>
                </div>
               </div>
            </div>
             <div className="flex flex-col min-h-[511px] flex-1 rounded-2xl flex-1">
               <div className="flex flex-col justify-start items-center border-2 border-[#7db522] min-h-[311px] flex-1 rounded-2xl pt-6 pb-6">
                <p className="font-outfit text-lg text-[#222]">Standard License</p>
                <div>
                    <p className="font-outfit text-4xl mt-2 text-[#0f8009]">11 $</p>
                </div>
             
                  <div className="flex flex-col justify-center items-start w-full p-4 mt-4 max-sm:ml-1 max-sm:px-2">
                   {data.map((item,index)=>{

                    return(
                           <div key={index} className="flex flex-row justify-center items-center ml-4 my-2 px-7 max-sm:px-1 max-sm:ml-1">
                        <div className="relative flex justify-center items-center mr-3 leading-3">
                           
                            <p  className="z-10 bg-[#222222] text-[#fff] w-5 h-5 flex items-center justify-center rounded-full text-[11px] leading-3" style={{lineHeight:12}}>{index+1}</p>

                        </div>
                        <div>
                            <p className="font-outfit text-sm leading-4">{item.title}</p>
                        </div>
                    </div>
                    )
                   })}
                    
                </div>
                <div className="mt-auto">
                    <div className="flex justify-center cursor-pointer rounded-full bg-[#e62a2a] w-[211px] h-[43px] items-center mt-auto text-md text-[#fff]">
                     Purchase This
                    </div>
                </div>
               </div>
            </div>
             <div className="flex flex-col min-h-[511px] flex-1 rounded-2xl flex-1">
               <div className="flex flex-col justify-start items-center border-2 border-[#7db522] min-h-[311px] flex-1 rounded-2xl pt-6 pb-6">
                <p className="font-outfit text-lg text-[#222]">Full License</p>
                <div>
                    <p className="font-outfit text-4xl mt-2 text-[#0f8009]">55 $</p>
                </div>

                
               </div>
            </div>
           </div>
        </div>
    )
}