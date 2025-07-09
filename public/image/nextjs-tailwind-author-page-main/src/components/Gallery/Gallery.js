"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import {func }from '@/components/Gallery/gallerydata.js'; // Import your gallery data

export default function PinterestGallery() {
  const totalImages = 60; // total art pieces
  const yourImage = "project1.png"; // your own image path

  const [images, setImages] = useState(func);


/*   useEffect(() => {
    const fixedImages = Array.from({ length: totalImages }).map((_, i) => {
      const randomHeight = 200 + Math.floor(Math.random() * 300);
      return {
        id: `img-${i}`,
        src: yourImage,
        height: randomHeight,
      };
    });
    setImages(fixedImages);
  }, []); */

  return (
   <div className="w-full flex flex-col justify-center items-center">  <div className="max-w-[1441px]">
   <InfiniteScroll
 dataLength={images?.length}
 next={() => {}}
 hasMore={false} // disables further loading
 loader={<h4 className="text-center my-4 text-gray-400">Loading...</h4>}
>
 <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
   {images?.map((img) => (
     <div
       key={img.name}
       className="relative w-full mb-4 overflow-hidden rounded-xl break-inside-avoid group cursor-pointer"
      
     >
    
       <img
         src={`${img.imageUrl}`}
         alt=""
         loading="lazy"
         className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
         style={{height:img.height?img.height:'unset'}}
       />
       <button className="absolute top-2 right-2 bg-white/80 text-sm text-gray-800 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
         Save
       </button>
     </div>
   ))}
 </div>
</InfiniteScroll>
</div></div>
  );
}
