import Image from "next/image";





export default function StaticComp4(){


    return(
        <div className="flex flex-col justify-center items-center w-full max-w-[1371px] mb-8 mx-8 bg-[#e9ffb9] rounded-2xl pt-8 px-8 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <p className="flex font-outfit text-[#8f1889] pb-4">Our Methods</p>
                <p className="flex font-outfit text-2xl text-[#222]">this is titkle main tititle of the section and added</p>
                <p className="flex font-outfit max-w-[1211px] text-sm text-center mt-1">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
                </p>
            </div>
            <div className="flex w-full justify-center items-center gap-4 mt-5 w-full">

                 <div className="flex flex-col justify-center items-center bg-[#fff] min-h-[511px] flex-1 rounded-lg">

                    <Image src={`/image/artimage1.png`} width={311} height={311} alt="art image" />
                    <p>Fast Service</p>

                 </div>
                   <div className="flex flex-col justify-center items-center bg-[#fff] min-h-[511px] flex-1 rounded-lg">
 <Image src={`/image/artimage1.png`} width={311} height={311} alt="art image" />
                    <p>Fast Service</p>
                 </div>
                   <div className="flex flex-col justify-center items-center bg-[#fff] min-h-[511px] flex-1 rounded-lg">
 <Image src={`/image/artimage1.png`} width={311} height={311} alt="art image" />
                    <p>Fast Service</p>
                 </div>

            </div>

        </div>
    )
}