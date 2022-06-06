import React from "react";
import Image from "next/image";
import useFetch from "../hook/useFetch";
export default function HomeGuest() {
  const images = [
    "/assets/featured/s.png",
    "/assets/featured/s2.png",
    "/assets/featured/s3.png",
    "/assets/featured/s4.png",
  ];
  const { payload, fetching, error, refetch } = useFetch(
    "https://myhotelreservationsite.herokuapp.com/api/hotels?featured=true&limit=4&max=500"
  );
 
  return (
    <div className="flex p-2 mx-12">
      <div className="mx-auto flex justify-center p-2 gap-5 w-full">
        {fetching
          ? "Loading.."
          : images.map((image, index) => {
              return (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="relative w-[18rem] h-[18rem] ">
                    <Image
                      src={image}
                      objectFit="cover"
                      layout="fill"
                      alt="homes guests love"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-md font-bold text-gray-500 capitalize">
                      {payload[index]?.name}
                    </span>
                    <span className="text-xs text-gray-500">{payload[index]?.city}</span>
                    <span className="text-xs font-medium">
                      Starting from ${payload[index]?.cheapestPrice}
                    </span>
                  </div>
                  <div className=" flex justify-between items-center">
                   { payload[index]?.rating? <div className="rounded-md text-white text-center bg-blue-800 font-bold text-xs p-1 w-[1.6rem] h-[1.6rem]">
                   {payload[index]?.rating}
                    </div>:""}
                    <span className="text-sm font-medium">Excellent</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
