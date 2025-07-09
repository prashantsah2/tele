import Image from "next/image";





export default function View({ params }) {












return(
    <div className="flex flex-col justify-center items-center w-full bg-[#fff] pt-14 mt-12">
    
        <div className="w-full flex flex-col justify-center items-center max-w-[1441px] px-12">

            <div className="w-full flex flex-row justify-center items-center bg-[#fff]">
                <div className="flex-1 flex justify-center items-center">
                  <Image src={`/image/`} />
                </div>
              
            </div>

        </div>
    </div>
)






}