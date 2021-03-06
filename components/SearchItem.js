import Image from "next/image";
import Link from "next/link";
export default function SearchItem({data}) {
  return (
    <div className="w-full overflow-hidden h-[14rem] flex gap-6 p-2">
      <div className="relative w-[25%]">
        <Image
          src="/assets/property/apartment.png"
          alt="property image"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="w-[75%] flex ">
        <div className="flex flex-col space-y-2 w-[75%]">
          <h1 className="text-xl text-blue-300">{data.address}</h1>
          <h1 className="text-xs">{data.distances} from center</h1>
          <div className="w-fit text-xs p-1 rounded-full text-white bg-green-700">
            <h1> Free airport Car</h1>
          </div>
          <h1 className="text-xs font-bold">
            Studio Apartment with Air Conditioning
          </h1>
          <h1 className="text-xs">{data.description}&#13217;</h1>
          <h1 className="text-sm text-green-600 font-bold">
            Free cancellation
          </h1>
          <h1 className="text-green-400 text-xs">
            You can cancel later, so lock in this price today!
          </h1>
        </div>
        <div className="flex flex-col justify-between w-[25%]">
          {data.rating? <div className="flex justify-between">
            <h1 className="text-xx">Excellent</h1>
            <span className="text-xs p-1 text-white w-[1.5rem] h-[1.5rem] text-center bg-blue-700">{data.rating}</span>
          </div>:""}
          <div className="w-full flex flex-col">
            <h1 className="text-xl text-right">${data.cheapestPrice}</h1>
            <p className="text-xs text-gray-500">includes taxes and fees</p>
           <Link href={`/hotels/${data._id}`}>
            <button className="text-xs p-2 rounded-full transition duration-40 hover:bg-blue-600 bg-blue-800 text-white flex items-center justify-center cursor-pointer">See availability</button>
           </Link>
          </div> 
        </div>
      </div>
    </div>
  );
}
