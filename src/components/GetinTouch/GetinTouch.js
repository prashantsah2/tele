import React from "react";

export default function GetinTouch() {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <div className="w-full flex flex-row max-w-[1441px] justify-center items-center mt-4">
        <div className="w-[33%] border-[1px] flex-1 rounded-lg min-h-[151px] px-4 py-4">
          
          <p className="font-outfit text-md" >Email us at</p>
          <p className="font-outfit text-md bg-[#d9e2fd] text-[#434242] py-1 px-3 rounded-full mt-2">{`contact@goldestate.in`}</p>
          <p className="font-outfit text-md bg-[#d9e2fd] text-[#434242] py-1 px-3 rounded-full mt-2">{`support@goldestate.in`}</p>

        </div>
        <div className="w-[33%] border-[1px] flex-1 rounded-lg min-h-[151px] mx-4 px-4 py-4">
          <p className="font-outfit text-md">Call us at</p>
          <p className="font-outfit text-md bg-[#d9e2fd] text-[#434242] py-1 px-3 rounded-full mt-2">{`+91 123456789`}</p>
          <p className="font-outfit text-md bg-[#d9e2fd] text-[#434242] py-1 px-3 rounded-full mt-2">{`+91 9818793773`}</p>
        </div>
        <div className="w-[33%] border-[1px] flex-1 rounded-lg min-h-[151px] px-4 py-4">
          <p className="font-outfit text-md">Reach us Out</p>
          <p className="font-outfit text-md bg-[#d9e2fd] text-[#434242] py-1 px-3 rounded-full mt-2">{`Rainnee, 1st Floor, 4th Block, Koramangala`}</p>
          <p className="font-outfit text-md bg-[#d9e2fd] text-[#434242] py-1 px-3 rounded-full mt-2">{` Bengaluru, Karnataka 560034`}</p>
        </div>
      </div>
    </div>
  );
}
