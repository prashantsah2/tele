
import Image from "next/image";
import React from "react";











export default function NearbyProjects() {


    const data = [
      {
        title: "Ram Path and Road Infrastructure Enhancements",
        description: "A 13 km road from Naya Ghat to Sahadatganj is being widened to four lanes, with a budget of ₹800 crore allocated for land acquisition and construction. Additional Roads: The Uttar Pradesh government approved a plan to widen and repair 158 roads in Ayodhya, with a total budget of ₹250 crore, enhancing connectivity across five assembly constituencies.",
        description2: " These projects aim to improve traffic flow and accessibility, especially for pilgrims visiting the Ram Temple.",
        description3: " ₹800 crore for the Naya Ghat to Sahadatganj road, and ₹250 crore for the 158 roads.",
        description4: "Completion Timeline: The Naya Ghat to Sahadatganj road is expected to be completed by December 2024.",
        image: "/image/road.jpg"
      },
      {
        title: "Maharshi Valmiki International Airport, Ayodhya",
        description: "Inaugurated on December 30, 2023, this airport aims to improve air connectivity to Ayodhya. Features: Located adjacent to NH-27 and NH-330, it serves both Ayodhya and Faizabad. Impact: Handled over 1.1 million passengers in its first operational year, marking it as one of India's fastest-growing airports.",
        description2: " ₹1,000 crore for the airport's construction and development.",
        description3: " Equipped with a 3,200-meter runway, a terminal building, and modern amenities.",
        description4: " The airport is expected to handle 1.5 million passengers annually by 2025.",
        image: "/image/ring.jpg"
      },
      {
        title: "84-Kosi Parikrama Marg",
        description: "A 67 km ring road connecting Ayodhya, Gonda, and Basti, aimed at reducing traffic congestion and facilitating pilgrim movement. Budget: Estimated at ₹4,000 crore, with land acquisition in its final stages.",
        description2: "  The road will have a 100-meter-wide corridor, with a 60-meter-wide carriageway and a 20-meter-wide green belt.",
        description3: "  It will significantly enhance connectivity for pilgrims and tourists visiting the Ram Temple.",
        description4: " The project is expected to be completed by 2025, with ongoing land acquisition and construction.",
        image: "/image/ring.jpg"
      }


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
      <Image src={item.image} alt={item.title} width={500} height={400} className="w-full aspect-[2] object-cover rounded-lg mb-4" />
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