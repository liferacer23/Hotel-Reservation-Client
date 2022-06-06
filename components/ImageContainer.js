import React from "react";
import Image from "next/image";
import Slider from "./Slider";
export default function ImageContainer({setOpenSlider, setSlideNumber,images}) {

  const handleOpen=(index)=>{
    setSlideNumber(index);
    setOpenSlider(prev=>!prev);
  }
  return (
    <div className="mx-5 w-full h-fit">

      <div className="flex justify-center items-center p-2 flex mx-auto w-[95%] h-full flex-wrap gap-2">
        {images.map((image, index) => {
          return (
            <div onClick={()=>{handleOpen(index)}} key={index} className="transition duration-700 ease-in-out z-10 hover:z-30 hover:scale-150 relative w-[16rem] h-[16rem]">
              <Image
                src={image}
                alt="propertyImage"
                objectFit="cover"
                layout="fill"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
