import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
export default function PropertyList() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    //console.log(carousel.current.scrollWidth + carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="overflow-hidden flex mx-12"
    >
      <motion.div
        animate={{ x: -width }}
        transition={{ duration: 12, yoyo: Infinity }}
        initial={{ x: 0 }}
        exit={{ x: 0 }}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="cursor-grab flex gap-6 mx-auto"
      >
        <div className=" flex flex-col p-2">
          <div className="w-[14rem] h-[12rem] relative">
            <Image
              className="pointer-events-none rounded-xl"
              objectFit="cover"
              layout="fill"
              src="/assets/property/resort.png"
              alt="property-1"
            />
          </div>
          <Link href="list">
            <div className="p-2 flex flex-col">
              <h1 className="text-xl font-bold text-gray-600 hover:underline hover:cursor-pointer">
                Resorts
              </h1>
              <h1 className="text-xs">233 hotel</h1>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col p-2">
          <div className="w-[14rem] h-[12rem] relative">
            <Image
              className="pointer-events-none rounded-xl"
              objectFit="cover"
              layout="fill"
              src="/assets/property/hotel.png"
              alt="property-1"
            />
          </div>
          <Link href="list">
            <div className="p-2 flex flex-col">
              <h1 className="text-xl font-bold text-gray-600 hover:underline hover:cursor-pointer">
                Hotels
              </h1>
              <h1 className="text-xs">233 hotel</h1>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col p-2">
          <div className="w-[14rem] h-[12rem] relative">
            <Image
              className="pointer-events-none rounded-xl"
              objectFit="cover"
              layout="fill"
              src="/assets/property/apartment.png"
              alt="property-1"
            />
          </div>
          <Link href="list">
            <div className="p-2 flex flex-col">
              <h1 className="text-xl font-bold text-gray-600 hover:underline hover:cursor-pointer">
                Apartments
              </h1>
              <h1 className="text-xs">233 hotel</h1>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col p-2">
          <div className="w-[14rem] h-[12rem] relative">
            <Image
              className="pointer-events-none rounded-xl"
              objectFit="cover"
              layout="fill"
              src="/assets/property/villas.png"
              alt="property-1"
            />
          </div>
          <Link href="list">
            <div className="p-2 flex flex-col">
              <h1 className="text-xl font-bold text-gray-600 hover:underline hover:cursor-pointer">
                Villas
              </h1>
              <h1 className="text-xs">233 hotel</h1>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col p-2">
          <div className="w-[14rem] h-[12rem] relative">
            <Image
              className="pointer-events-none rounded-xl"
              objectFit="cover"
              layout="fill"
              src="/assets/property/cabins.png"
              alt="property-1"
            />
          </div>
          <Link href="list">
            <div className="p-2 flex flex-col">
              <h1 className="text-xl font-bold text-gray-600 hover:underline hover:cursor-pointer">
                Cabins
              </h1>
              <h1 className="text-xs">233 hotel</h1>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col p-2">
          <div className="w-[14rem] h-[12rem] relative">
            <Image
              className="pointer-events-none rounded-xl"
              objectFit="cover"
              layout="fill"
              src="/assets/property/boat.png"
              alt="property-1"
            />
          </div>
          <Link href="list">
            <div className="p-2 flex flex-col">
              <h1 className="text-xl font-bold text-gray-600 hover:underline hover:cursor-pointer">
                Boats
              </h1>
              <h1 className="text-xs">233 hotel</h1>
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
