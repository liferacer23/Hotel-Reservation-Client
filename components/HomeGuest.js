import React from "react";
import Image from "next/image";
export default function HomeGuest() {
  return (
    <div className="flex p-2 mx-12">
      <div className="mx-auto flex justify-center p-2 gap-5 w-full">
        <div className="flex flex-col space-y-1">
          <div className="relative w-[18rem] h-[18rem] ">
            <Image
              src="/assets/property/hotel.png"
              objectFit="cover"
              layout="fill"
              alt="homes guests love"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold text-gray-500">
              Apart Hotel Miasto
            </span>
            <span className="text-xs text-gray-500">Madrid</span>
            <span className="text-xs font-medium">Starting from $120</span>
          </div>
          <div className=" flex justify-between items-center">
            <button className="rounded-md text-white bg-blue-800 font-bold text-xs p-1">8.9</button>
            <span className="text-sm font-medium">Excellent</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1 ">
          <div className="relative w-[18rem] h-[18rem] ">
            <Image
              src="/assets/property/hotel.png"
              objectFit="cover"
              layout="fill"
              alt="homes guests love"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold text-gray-500">
              Apart Hotel Miasto
            </span>
            <span className="text-xs text-gray-500">Madrid</span>
            <span className="text-xs font-medium">Starting from $120</span>
          </div>
          <div className=" flex justify-between items-center">
            <button className="rounded-md text-white bg-blue-800 font-bold text-xs p-1">8.9</button>
            <span className="text-sm font-medium">Excellent</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1 ">
          <div className="relative w-[18rem] h-[18rem] ">
            <Image
              src="/assets/property/hotel.png"
              objectFit="cover"
              layout="fill"
              alt="homes guests love"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold text-gray-500">
              Apart Hotel Miasto
            </span>
            <span className="text-xs text-gray-500">Madrid</span>
            <span className="text-xs font-medium">Starting from $120</span>
          </div>
          <div className=" flex justify-between items-center">
            <button className="rounded-md text-white bg-blue-800 font-bold text-xs p-1">8.9</button>
            <span className="text-sm font-medium">Excellent</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1 ">
          <div className="relative w-[18rem] h-[18rem] ">
            <Image
              src="/assets/property/hotel.png"
              objectFit="cover"
              layout="fill"
              alt="homes guests love"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold text-gray-500">
              Apart Hotel Miasto
            </span>
            <span className="text-xs text-gray-500">Madrid</span>
            <span className="text-xs font-medium">Starting from $120</span>
          </div>
          <div className=" flex justify-between items-center">
            <button className="rounded-md text-white bg-blue-800 font-bold text-xs p-1">8.9</button>
            <span className="text-sm font-medium">Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
