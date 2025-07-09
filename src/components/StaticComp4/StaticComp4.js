import Image from "next/image";






export default function StaticComp4({ data }) {

   


    return(
        <div className="flex flex-col justify-center items-center w-full bg-[#f3f3d2] min-h-[100vh]  pt-8 px-8 pb-8 max-sm:px-4">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <p className="flex font-outfit text-[#8f1889] leading-4">{data.titletop}</p>
                <p className="flex font-outfit text-[41px] text-center text-[#222] ">{data.title}</p>
                <p className="flex font-outfit max-w-[1211px] text-sm text-center">
                    {data.titledesc}
                </p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-5 max-lg:flex-col w-[75%]">

                {data.innerdata.map((item, index) => {

                    return (
                         <div key={index} className="flex flex-col justify-center items-center min-h-[171px] flex-1 rounded-lg max-lg:w-full max-lg:px-4 ">

                    <div className="flex justify-center items-center aspect-[1] w-full" >
                        <Image className="w-full aspect-square object-cover" src={item.image} width={141} height={151} alt="art image"  />
                    </div>
                    <p className="font-medium font-outfit text-[#fff] w-full bg-[#206f35] flex justify-center items-center h-[41px]">{item.title}</p>
                 {/*    <p className="text-center leading-4 text-sm mt-3 font-outfit px-6">{item.description}</p> */}

                 </div>
                    )
                })}

            </div>

        </div>
    )
}