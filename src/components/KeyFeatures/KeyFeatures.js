




import React from 'react';
import Image from 'next/image';
import { title } from 'process';




export default function KeyFeatures(){


 let data ={    titletop: "Key Features",
    title: "What makes us special",

list :[{title:'Lush Green Lawn', image:'/image/18.png'},
{title:'Children’s Play Zone', image:'/image/19.png'},
{title:'Kitchen', image:'/image/20.png'},
{title:'Outdoor Lighting', image:'/image/21.png'},
{title:'Organic Farming Zone', image:'/image/22.png'},
{title:'Gated Access', image:'/image/23.png'},
{title:'24/7 Security', image:'/image/24.png'},
{title:'Private Swimming Pool', image:'/image/25.png'},
{title:'Wellness & Relaxation', image:'/image/17.png'}
]}





    return(
        <div className='flex flex-col justify-center items-center w-full bg-[#acc531] min-h-[100vh] pt-8 px-8 pb-8 max-sm:px-1'>

            <div className='flex flex-col justify-center items-center w-full mb-4 font-outfit text-[41x] text-[#555]'>
                <p className='flex text-[#8f1889] leading-4'>{data.titletop}</p>
                <p className='flex text-[#222] text-[41px] max-md:-text[31px] max-md:leading-[35px] max-sm:text-[21px] max-sm:leading-[24px]'>{data.title}</p>
            </div>
            <div className='flex flex-row flex-wrap justify-center items-center w-full mb-4'>
                {data.list.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center w-1/3 p-4 max-md:p-2 max-sm:w-full'>
                        <Image src={item.image} alt={item.title} width={200} height={200} className='w-full rounded-lg' />
                        <p className='text-[#222] text-md mt-2 font-outfit flex  w-full justify-center items-center bg-[#fcfcdd] h-[41px] rounded-lg'>{item.title}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}