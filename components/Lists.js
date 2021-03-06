import { useState } from "react";
import { useRouter } from "next/router";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "./SearchItem";
import useFetch from "../hook/useFetch";
export default function Lists() {
  const router = useRouter();
  const query = router.query;
  const [changed, setChanged] = useState(false);
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState(query.destination);
  const [options, setOptions] = useState({
    adults: query.adults,
    children: query.children,
    room: query.room,
  });
  const [date, setDate] = useState([
    {
      startDate: query.startDate,
      endDate: query.endDate,
      key: "selection",
    },
  ]);
  const [newDate, setNewDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  const { payload, error, fetching,refetchData } = useFetch(
    `https://myhotelreservationsite.herokuapp.com/api/hotels?city=${searchCity?searchCity:destination}&min=${min || 1}&max=${max || 1000}`
  );
 
  return (
    <div>
      <div className="p-2 mt-2 mb-10">
        <div className=" flex justify-evenly gap-4 mx-8">
          <form onSubmit={(e)=>{refetchData();e.preventDefault();}} className="sticky top-[1rem] flex flex-col overflow-x-hidden border-2 border-gray-300 w-[22rem] h-fit p-2 rounded-xl shadow-2xl overflow-auto">
            <div className="flex justify-start w-full">
              <h1 className="text-sm text-gray-700">Search</h1>
            </div>
            <hr className="mt-1 mb-1" />
            <div className="flex flex-col w-4/6">
              <h1 className="text-xs">Destinations</h1>
              <input
                className="h-7 pl-2 text-xs border-2 border-gray-300 outline-none"
                placeholder={destination}
                onChange={(e)=>{setSearchCity(e.target.value)}}
                type="text"
              />
            </div>
            <hr className="mt-1 mb-1" />
            <div className="mt-2 h-12 flex flex-col w-4/6 relative">
              <h1 className="text-xs">check in date</h1>
              <span
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
                className="cursor-pointer flex items-center justify-start h-10 pl-2 text-xs border-2 border-gray-300 outline-none w-full h-full"
              >
                {changed
                  ? `${format(date[0].startDate, "MM-dd-yyyy")} To ${format(
                      date[0].endDate,
                      "MM-dd-yyyy"
                    )}`
                  : `${date[0].startDate} To ${date[0].endDate}`}
              </span>
              {open ? (
                <DateRange
                  editableDateInputs={true}
                  onChange={(value) => {
                    setDate([value.selection]);
                    setChanged(true);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={changed ? date : newDate}
                  className="z-50 absolute top-12 -left-2"
                  minDate={new Date()}
                />
              ) : (
                ""
              )}
            </div>
            <hr className="mt-1 mb-1" />
            <div className="mt-2 flex flex-col">
              <div className=" mb-2 flex justify-start w-full">
                <h1 className="text-xs text-gray-700">Others</h1>
              </div>
              <hr className="mt-1 mb-1" />
              <div className="flex flex-col w-full space-y-2">
                <div className="flex justify-between">
                  <h1 className="text-xs">Min Price(per night)</h1>
                  <input
                    onChange={(e) => {
                      setMin(e.target.value);
                    }}
                    min={0}
                    className="text-xs text-gray-400 w-11 h-5 border-2 border-gray-300 outline-none"
                    type="Number"
                  />
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xs">Max Price(per night)</h1>
                  <input
                    onChange={(e) => {
                      setMax(e.target.value);
                    }}
                    min={0}
                    className="text-xs text-gray-400 w-11 h-5 border-2 border-gray-300 outline-none"
                    type="Number"
                  />
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xs">Adult</h1>
                  <input
                    min={0}
                    placeholder={options.adults}
                    className="text-xs text-gray-400 w-11 h-5 border-2 border-gray-300 outline-none"
                    type="Number"
                  />
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xs">Children</h1>
                  <input
                    min={0}
                    placeholder={options.children}
                    className="text-xs  w-11 h-5 border-2 border-gray-300 outline-none"
                    type="Number"
                  />
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xs">Room</h1>
                  <input
                    min={0}
                    placeholder={options.room}
                    className="text-xs w-11 h-5 border-2 border-gray-300 outline-none"
                    type="Number"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className=" rounded-xl cursor-pointer w-3/6 h-8 bg-blue-800 text-white p-2 text-xs flex items-center justify-center"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="w-4/6 border-2 h-fit border-gray-200">
            {fetching
              ? "Loading":fetching==false && payload.length==0 ? "   Nothing Found We Only Have Properties in madrid, berlin, dubai and london currently :("
              : payload.map((data, index) => {
                  return <SearchItem data={data} key={index} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
