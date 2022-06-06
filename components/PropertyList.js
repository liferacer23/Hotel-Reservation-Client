import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useFetch from "../hook/useFetch";
export default function PropertyList() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const images = [
    "/assets/property/resort.png",
    "/assets/property/apartment.png",
    "/assets/property/hotel.png",
    "/assets/property/villas.png",
    "/assets/property/cabins.png",
    "/assets/property/boat.png",
  ];
  useEffect(() => {
    //console.log(carousel.current.scrollWidth + carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
 
  }, []);

  const { payload, fetching, error, refetch } = useFetch(
    "https://myhotelreservationsite.herokuapp.com/api/hotels/countByType"
  );
 
  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="overflow-hidden flex mx-12"
    >
      <motion.div
        animate={{ x: -width }}
        transition={{ duration: 12, repeat: Infinity }}
        initial={{ x: 0 }}
        exit={{ x: 0 }}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="cursor-grab flex gap-6 mx-auto"
      >
        <>
          {" "}
          {fetching
            ? "Loading.."
            : images.map((image, index) => {
                return (
                  <div key={index} className=" flex flex-col p-2">
                    <div className="w-[14rem] h-[12rem] relative">
                      <Image
                        className="pointer-events-none rounded-xl"
                        objectFit="cover"
                        layout="fill"
                        src={image}
                        alt="property-1"
                      />
                    </div>
                    <Link href="list">
                      <div className="p-2 flex flex-col">
                        <h1 className="text-xl capitalize font-bold text-gray-600 hover:underline hover:cursor-pointer">
                        {payload[index]?.type}
                        </h1>
                        <h1 className="text-xs">
                          {payload[index]?.count}
                          {"   "}
                          {payload[index]?.type.toLowerCase()}
                        </h1>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </>
      </motion.div>
    </motion.div>
  );
}
