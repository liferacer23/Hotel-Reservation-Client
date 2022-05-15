import React from "react";
import Image from "next/image";
export default function Featured() {
  return (
    <div className=" flex gap-5">
     <div className=" relative flex flex-col">
        <Image
          className="x rounded-xl"
          src="/assets/featured/s.png"
          alt="place images"
          width={400}
          height={300}
        />
        <div className="p-2 absolute top-[12rem] text-white">
          <h1 className="text-3xl font-semibold">Dubin</h1>
          <p className="text-xs">amskdlmals property</p>
        </div>
      </div>
      <div className=" relative flex flex-col">
        <Image
          className=" rounded-xl"
          src="/assets/featured/s2.png"
          alt="place images"
          width={400}
          height={300}
        />
        <div className="p-2 absolute top-[12rem] text-white">
          <h1 className="text-3xl font-semibold">Dubin</h1>
          <p className="text-xs">amskdlmals property</p>
        </div>
      </div>
      <div className="relative flex flex-col">
        <Image
          className="rounded-xl"
          src="/assets/featured/s3.png"
          alt="place images"
          width={400}
          height={300}
        />
        <div className="p-2 absolute top-[12rem] text-white">
          <h1 className="text-3xl font-semibold">Dubin</h1>
          <p className="text-xs">amskdlmals property</p>
        </div>
      </div> 
    </div>
  );
}
