import React from "react";
import Image from "next/image";

export default function BentoSection() {
  const projects = [
    { id: 1, title: "Project One", img: "/image/project1.png" },
    { id: 2, title: "Project Two", img: "/image/project2.png" },
    { id: 3, title: "Project Three", img: "/image/project3.png" },
    { id: 4, title: "Project Four", img: "/image/project4.png" },
    { id: 5, title: "Project Five", img: "/image/project5.png" },
    { id: 6, title: "Project Six", img: "/image/project6.png" },
  ];

  const DualPoster = () => {
    return (
      <div className="w-full max-w-[1311px] flex row items-center align-middle">
        <div className="w-[35%] mr[%]2 bg-blue-gray-100 h-[311px] rounded-xl overflow-hidden">
          <Image src="/image/project1.png" className=" object-cover" width={611} height={411} alt="Project One" />
        </div>
        <div className="w-[63%] bg-pink-300 h-[311px] ml-6 rounded-xl"></div>
      </div>
    );
  };



  return (
    <section className="w-full py-6">
      <div className="mx-auto flex flex-wrap justify-center">
        <DualPoster  />
      </div>
    </section>
  );
}
