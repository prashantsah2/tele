


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
           image:'/image/91.png',
        }
        ,{
           title:'Child Friendly Environment', 
           image:'/image/52.jpeg',
        }
        ,{
           title:'Friends and Social Gatherings', 
           image:'/image/16.png',
        }
        ,{
           title:'Wellness and Relaxation', 
           image:'/image/17.png',
        }
     ]

    }


return(

<div className='flex flex-col min-h-[75vh] bg-[#2c6f18] text-[#333] w-full justify-center items-center'>
<div className='flex justify-center items-center p-4 font-outfit text-[41px] text-[#fff] pt-12 pl-10 pb-6 max-md:text-[31px] max-md:leading-[35px] max-sm:text-[21px] max-sm:leading-[24px] max-sm:pt-4'>
{data.maintitle}
</div>

<div className='flex flex-row justify-center items-start gap-6 max-lg:flex-wrap '>
    {data.list.map((item,index)=>{

        return(
            <div className='flex flex-col justify-center items-center p-4 max-lg:w-[31%]' key={index}>
                <div className='flex justify-center items-center w-[245px] rounded-full h-[245px] border-4 border-[#e8ff3b] overflow-hidden max-lg2:w-[175px] max-lg2:h-[175px] max-lg:w-[135px] max-lg:h-[135px] max-sm:w-[95px] max-sm:h-[95px]'>
                    <Image src={item.image} width={200} height={200} alt="image" className='w-full h-full object-cover rounded-full' />
                </div>
                <p className='font-outfit text-[#fff] text-sm mt-2 max-w-[145px] max-sm:max-w-[125px] max-sm:text-sm text-center'>{item.title}</p>
            </div>
        )
    })}
</div>


</div>


)

}