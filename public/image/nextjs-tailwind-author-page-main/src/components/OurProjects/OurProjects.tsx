import { findSourceMap } from "module";
import React from "react";
import Image from "next/image";
import BentoSection from "./BentoSection";




import Button from '@/components/ButtonComp/ButtonComp'

export default function OurProjects(){



    return(
        <div className=" flex flex-col items-center align-middle w-[100%] px-12">
         
         <div className="flex items-start w-[100%] max-w-[1331px]">  
         <Image src="/image/fishcorp.png" alt="Fishcorp project image" width={151} height={41} />
         </div>
          
    
          <div className="flex flex-row items-end align-sub w-[100%] max-w-[1311px]" >
            <div className="flex flex-col items-start align-middle max-w-[611px]">
            <p className="font-outfit text-5xl mb-4">Our Projects</p>
            <p className="font-outfit text-lg max-w-[711px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit </p>
            <p></p>
            <Button title={'view'}/>

            </div>

            <div className="max-w-[311px] ml-auto">
                <p className="mb-4 ml-[15px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ap 
                </p>
                <Image src="/image/image set 2.png" alt="Fishcorp project image" width={251} height={41} />
            </div>
          
          </div>

          <BentoSection/>

          
        </div>
    )
}