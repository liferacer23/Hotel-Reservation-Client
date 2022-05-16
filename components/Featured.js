import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
export default function Featured() {
  return (
    <div className="relative z-index-10 flex gap-5">
      <div className="relative flex flex-col">
        <Image
          className="z-0 rounded-xl"
          src="/assets/featured/s.png"
          alt="place images"
          width={400}
          height={300}
        />
        <div className="p-2 absolute top-[12rem] text-white">
          <h1 className="text-3xl font-semibold">Persia</h1>
          <p className="text-xs">125 property</p>
        </div>
      </div>
      <div className="relative flex flex-col">
        <Image
          className=" z-0 rounded-xl"
          src="/assets/featured/s2.png"
          alt="place images"
          width={400}
          height={300}
        />
        <div className="p-2 absolute top-[12rem] text-white">
          <h1 className="text-3xl font-semibold">Dubai</h1>
          <p className="text-xs">533 property</p>
        </div>
      </div>
      <div className="relative flex flex-col">
        <Image
          className="z-0 rounded-xl"
          src="/assets/featured/s3.png"
          alt="place images"
          width={400}
          height={300}
        />
        <div className="p-2 absolute top-[12rem] text-white">
          <h1 className="text-3xl font-semibold">London</h1>
          <p className="text-xs">254 property</p>
        </div>
      </div>
    </div>
  );
}
