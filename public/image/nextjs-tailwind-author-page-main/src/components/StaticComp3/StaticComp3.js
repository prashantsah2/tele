import Image from "next/image"






export default function StaticComp3(){



    const brands = [{icon:'flower.png'},{icon:'flower.png'},{icon:'flower.png'},{icon:'flower.png'},{icon:'flower.png'},{icon:'flower.png'},{icon:'flower.png'},]

    return(
        <div className="flex flex-col justify-center items-center max-w-[1421px] w-full">
            
            <div className="font-outfit text-xl text-[#b419a9]">Our Child Branads</div>

            <div className="flex flex-row justify-center items-center flex-wrap mt-8 mb-8">
                
              {brands.map((item)=>{
                return(
                      <Image key={item.icon} src={`/image/${item.icon}`} className="mx-4" width={91} height={51} alt="brand"/>
                )
              })}

            </div>
              


        </div>
    )
}