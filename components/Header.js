import { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import AttractionsIcon from "@mui/icons-material/Attractions";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";
import { Person, Search } from "@mui/icons-material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
export default function Header() {
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
console.log(date);
  return (
    <>
      <div className="relative flex flex-col w-screen bg-blue-800 text-white">
        <div className="flex items-center space-x-1 p-1 mx-5 mt-3 mb-5">
          <button className=" rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-70 justify-center w-[5.5rem] h-10 flex space-x-2 items-center p-1 cursor-pointer rounded-sm">
            <KingBedIcon />
            <span className="text-sm">Stays</span>
          </button>
          <button className="rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-70 justify-center w-[5.5rem] h-10 flex space-x-2 items-center p-1 cursor-pointer rounded-sm">
            <AirplanemodeActiveIcon />
            <span className="text-sm">Flights</span>
          </button>
          <button className="justify-center rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-70 w-[8rem] h-10 flex space-x-2 items-center p-1 cursor-pointer rounded-sm">
            <TimeToLeaveIcon />
            <span className="text-sm">Car rentals</span>
          </button>
          <button className="rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-70 justify-center w-[8rem] h-10 flex space-x-2 items-center p-1 cursor-pointer rounded-sm">
            <AttractionsIcon />
            <span className="text-sm">Attractions</span>
          </button>
          <button className="rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-70 justify-center w-[8rem] h-10 flex space-x-2 items-center p-1 cursor-pointer rounded-sm">
            <TaxiAlertIcon />
            <span className="text-sm">Airport Taxis</span>
          </button>
        </div>
      </div>
      <div className="px-9 flex flex-col h-[12rem] relative flex bg-[url('/assets/wave4.svg')] bg-cover">
        <h1 className="text-white text-xl font-bold">
          A lifetime of discounts? Its Genius.
        </h1>
        <p className="text-white text-xx">
          Get rewared for your travels-unlock instant savings of 10% or more
          with a free Tracy account
        </p>
        <div className="flex justify-center items-center space-x-2 p-2">
          <button className="font-semibold w-32 h-8 bg-blue-500 rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm">
            Sign in / Register
          </button>
        </div>

        <div className="flex bg-white h-12 justify-around border-2 border-yellow-500 rounded-md">
          <div className="flex p-1 space-x-2 items-center">
            <Search className="text-yellow-500" />
            <input type="text" placeholder="Where are you going" />
          </div>
          <div className="relative flex p-1 space-x-2 items-center">
            <CalendarTodayIcon className="text-yellow-500" />
            <span>{`${format(date[0].startDate,"MM-dd-yyyy")}  upto  ${format(date[0].endDate,"MM-dd-yyyy")}`}  </span>
            <DateRange
              editableDateInputs={true}
              onChange={(value) => setDate(value.selection)}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-11 "
            />
          </div>
          <div className="flex p-1 space-x-2 items-center">
            <Person className="text-yellow-500" />
            <span>2 adults 2 children 1 room </span>
          </div>
          <div className="flex p-1 space-x-2 items-center">
            <button className="rounded-xl w-20 h-8 text-sm bg-blue-800 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
