


import Image from 'next/image';
import { list } from 'postcss';
import { title } from 'process';
import react from 'react';






export default function StaticComp7() {
   

    let data = {
     maintitle: "Lifestyle Experience",

     list :[
        {
           title:'Family Bonding', 
           image:'/image/21.png',
        }
        ,{
           title:'Friends & Social Gatherings', 
           image:'/image/22.png',
        }
        ,{
           title:'Wellness and Relaxation', 
           image:'/image/23.png',
        }
        ,{
           title:'Child-Friendly Environment', 
           image:'/image/24.png',
        }
     ]

    }


return(

<div className='flex flex-col min-h-[75vh] bg-[#2c6f18] text-[#333] w-full justify-center items-center'>
<div className='flex justify-center items-center p-4 font-outfit text-[41px] text-[#fff] pt-12 pl-10'>
{data.maintitle}
</div>

<div className='flex flex-row justify-center items-center gap-6'>
    {data.list.map((item,index)=>{

        return(
            <div className='flex flex-col justify-center items-center p-4' key={index}>
                <div className='flex justify-center items-center w-[245px] rounded-full h-[245px] border-4 border-[#e8ff3b] overflow-hidden'>
                    <Image src={item.image} width={200} height={200} alt="image" className='w-full h-full object-cover rounded-full' />
                </div>
                <p className='font-outfit text-[#fff] text-sm mt-2'>{item.title}</p>
            </div>
        )
    })}
</div>


</div>


)

}