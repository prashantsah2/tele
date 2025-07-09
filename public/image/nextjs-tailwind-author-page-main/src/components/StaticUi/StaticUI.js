import Image from "next/image";








export default function StaticUi(){


    return(
        <div className="flex flex-col w-full justify-center items-center min-h-[411px] bg-[#fed9f8] max-w-[1345px] px-8 pt-8 pb-8 mx-8 rounded-2xl mb-4">
            <div className="flex flex-row justify-center align-middle w-full">
              <div className="flex flex-col justify-start items-start w-[45%]">
                <div className="title flex flex-col justify-start text-outfit">
                  <p className="text-sm text-[#96189f] mb-4">Collaborate</p>
                  <p className="text-3xl text-[#222] mb-4 font-outfit">This is some title here for used later,This is some title here for used later,This is some title here for used later</p>
                  <p className="text-sm text-[#696969]">{`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`}</p>
                  <p className="text-sm text-[#696969] mt-4">{`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`}</p>
                  <button className="max-w-[211px] h-[41px] flex justify-center items-center text-sm bg-[#8b1189] mt-4 text-white rounded-full">view</button>
                </div>

              </div>

              <div className="flex-1 pl-8">

                 <Image src={`/image/aboutus2.png`} className="w-full flex-1 rounded-xl" width={441} height={441} alt={'about image 2'} />               
 
              </div>

            </div>

        </div>
    )
}