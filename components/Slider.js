import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
export default function Slider({ images, slideNumber, setSlideNumber, setOpenSlider }) {
  const SlideHandler = (e) => {
    e.stopPropagation();
    setOpenSlider((prev) => !prev);
  };

  const slideLeft=()=>{
   let newSlideNumber = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
    setSlideNumber(newSlideNumber);
}
  const slideRight=()=>{
    let newSlideNumber = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
    setSlideNumber(newSlideNumber);  
}
  return (
    <div className="z-50 fixed inset-0">
      <div
        onClick={(e) => {
          SlideHandler(e);
        }}
        className="fixed inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full"
      >
      </div>
      <div className="p-4 items-center flex justify-between inset-y-10 inset-x-40 absolute">
          <ArrowBackIosNewIcon onClick={()=>{slideLeft()}} className="cursor-pointer text-white text-5xl"/>
          <div className="relative w-full h-full">
              <Image className="rounded-xl" objectFit="cover" layout="fill" src={images[slideNumber]} alt="selected-image"/>
          </div>
          <ArrowForwardIosIcon onClick={()=>{slideRight()}} className="cursor-pointer text-white text-5xl"/>
      </div>
    </div>
  );
}
