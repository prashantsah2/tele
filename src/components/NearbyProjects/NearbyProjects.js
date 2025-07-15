
import Image from "next/image";
import { title } from "process";
import React from "react";











export default function NearbyProjects() {

  


    const data = [
      {
        title: "Sagar Institute, 15 min",
        description: "let your children’s dreams take flight, with quality education just a short drive away.",
        description2: "It is a leading educational institution in the region, offering a wide range of courses and programs.",
        description3: " The institute is known for its experienced faculty, modern infrastructure, and commitment to academic excellence.",

        image: "/image/85.jpg"
      },
      {
        title: "BBD College, 20 min",
        description: "A future of possibilities lies within reach for young minds chasing purpose and growth.",
        description2: "The college offers a diverse range of undergraduate and postgraduate programs.",
        description3: "With a focus on holistic development, BBF College nurtures talent and fosters innovation.",
        description4: "State of the art facilities and experienced faculty make it a top choice for students.",
        image: "/image/84.jpg"
      },
      {
        title: "Proposed Outer Ring Road, 15 min",
        description: "A 67 km ring road connecting Ayodhya, Gonda, and Basti, aimed at reducing traffic congestion and facilitating pilgrim movement. Budget: Estimated at ₹4,000 crore, with land acquisition in its final stages.",
        description2: "  The road will have a 100-meter-wide corridor, with a 60-meter-wide carriageway and a 20-meter-wide green belt.",
        description3: "  It will significantly enhance connectivity for pilgrims and tourists visiting the Ram Temple.",
        description4: " The project is expected to be completed by 2025, with ongoing land acquisition and construction.",
        image: "/image/86.jpg"
      },{
        title: "Barabanki Railway Station, 20 min",
        description: "Life moves fast, and your world stays connected. Just a walk away from seamless journeys.",
        description2: "Barabanki Railway Station is a key transportation hub in the region, providing convenient access to various destinations.",
        description3: "The station is well-equipped with modern facilities, ensuring a comfortable travel experience for passengers.",
        image: "/image/87.jpg"


      },
      {
        title: "Chaudhary Charan Singh International Airport, 40 min",
        description: "Whether it’s family visits or business calls, the world is never too far from home.",
        description2: "The airport is a major gateway for domestic and international flights, connecting the region to the world.",
        description3: "It features state-of-the-art terminals, modern amenities, and efficient services for travelers.",
        image: "/image/88.jpg"

      },
      {
        title: "City Hospital, 15 min",
        description: "Because peace of mind also means knowing care is always nearby.",
        description2: "City Hospital is a leading healthcare facility in the region, providing comprehensive medical services.",
        description3: "With a team of experienced doctors and advanced medical technology, it ensures quality healthcare for all.",
        image: "/image/89.JPG"
      },
     


    ]








return(

<div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-[#dbb612] py-12 max-lg:px-4">
  <div className="flex flex-col justify-center items-center">
    <p className="text-[41px] text-[#222] font-outfit max-lg:text-[31px]">Nearby Projects</p>
  </div>

  <div className="flex flex-col justify-center items-center w-full  px-4 py-8 text-[#fff] max-sm:px-0">
   {data.map((item,index)=>{

    return(
    <div key={index} className="flex flex-row justify-center items-start w-full mb-8 p-4 rounded-lg max-lg:flex-col max-md:px-0">
      <Image src={item.image} alt={item.title} width={500} height={400}  className="w-full max-w-[611px] aspect-[2] object-cover rounded-lg mb-4" />
      <div className="flex flex-col justify-start items-start w-full pl-4 max-md:pl-0">
         <h3 className="text-xl font-medium mb-2 font-outfit text-[#fff] w-full">{item.title}</h3>
      <p className="text-sm font-outfit">{item.description}</p>
      <p className="text-sm font-outfit">{item.description2}</p>
      <p className="text-sm font-outfit">{item.descriptio3}</p>
      <p className="text-sm font-outfit">{item.description4}</p>
      </div>
    </div>


    )
   })}


  </div>


</div>


)











}