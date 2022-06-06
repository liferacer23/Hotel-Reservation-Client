import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
import useFetch from "../hook/useFetch";
export default function Featured() {
  const { payload, fetching, error, refetch } = useFetch(
    "https://myhotelreservationsite.herokuapp.com/api/hotels/countByCity?cities=Berlin,london,mekanisa"
  );
  return (
    <>
    {fetching? "Loading..":<div className="relative z-index-10 flex gap-5">
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
          <p className="text-xs">{payload[0]} properties</p>
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
          <p className="text-xs">{payload[1]} properties</p>
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
          <p className="text-xs">{payload[2]} properties</p>
        </div>
      </div>
    </div>}
    </>
  );
}
