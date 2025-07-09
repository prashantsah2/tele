import Image from "next/image";

export default function StaticComp2() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-[411px] my-8 max-w-[1321px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <Image
            src={`/image/staticui2.png`}
            className="w-[211px] h-[611px] rounded-full object-cover"
            width={311}
            height={611}
            alt="static ui2"
          />

          <Image
            src={`/image/staticui2.png`}
            className="w-[211px] h-[611px] rounded-full object-cover mt-11 mx-4"
            width={311}
            height={611}
            alt="static ui2"
          />
          <Image
            src={`/image/staticui2.png`}
            className="w-[211px] h-[611px] rounded-full object-cover"
            width={311}
            height={611}
            alt="static ui2"
          />
        </div>
            <div className="flex flex-col justify-start items-start w-[45%]">
                <div className="title flex flex-col justify-start text-outfit">
                  <p className="text-sm text-[#96189f] mb-4">Collaborate</p>
                  <p className="text-3xl text-[#222] mb-4 font-outfit">This is some title here for used later,This is some title here for used later,This is some title here for used later</p>
                  <p className="text-sm text-[#696969]">{`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`}</p>

            
                </div>

              </div>
      </div>
    </div>
  );
}
