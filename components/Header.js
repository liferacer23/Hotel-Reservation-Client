import { useContext, useState } from "react";
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
import { motion } from "framer-motion";
import Link from "next/link";
import { SearchContext } from "../context/SearchContext";
export default function Header({ type }) {
  const sub = "sub";
  const add = "add";
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });

  let data = {
    startDate: format(date[0].startDate, "MM-dd-yyyy"),
    endDate: format(date[0].endDate, "MM-dd-yyyy"),
    destination: destination,
    adults: options.adults,
    children: options.children,
    rooms: options.rooms,
  };
  const {dispatch} = useContext(SearchContext);

  const cusomerHandler = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === add && prev[name] > 8
            ? (prev[name] = 10)
            : operation === add
            ? prev[name] + 1
            : operation === sub && prev[name] < 1
            ? (prev[name] = 1)
            : prev[name] - 1,
      };

      //same as btw
      /*       setOptions({
        ...options,
        [name]: operation === add ? options[name] + 1 : options[name] - 1,
      }); */
    });
  };

  //console.log(datas);

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        city: data.destination,
        startDate: data.startDate,
        endDate: data.endDate,
        adults: data.adults,
        children: data.children,
        rooms: data.rooms,
      },
    });
  };

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
      {type === "home" ? (
        <div className="px-9 flex flex-col sm:h-[12rem] lg:h-[13rem] 2xl:h-[15rem] 3xl:h-[16rem] relative flex bg-[url('/assets/wave4.svg')] bg-cover">
          <>
            {" "}
            <h1 className="text-white text-xl font-medium">
              A lifetime of discounts? Its Genius.
            </h1>
            <p className="text-white text-xs">
              Get rewared for your travels-unlock instant savings of 10% or more
              with a free Tracy account
            </p>
            <div className="flex justify-center items-center space-x-2 p-2">
              <button className="font-medium w-32 h-10 bg-blue-500 rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm text-white">
                Sign in / Register
              </button>
            </div>
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: -500 }}
              transition={{ duration: 1 }}
              className="mx-auto flex bg-white h-12 justify-around border-2 border-yellow-500 w-[77rem] rounded-md"
            >
              <div className="flex p-1 space-x-2 items-center">
                <Search className="text-yellow-500" />
                <input
                  className="text-sm h-full outline-none pl-2"
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                />
              </div>
              <div className=" cursor-pointer relative flex p-1 space-x-2 items-center">
                <CalendarTodayIcon
                  onClick={() => {
                    setOpenDate((prev) => !prev);
                    setOpenOptions(false);
                  }}
                  className="text-yellow-500"
                />
                <span
                  onClick={() => {
                    setOpenDate((prev) => !prev);
                    setOpenOptions(false);
                  }}
                  className="flex text-center text-xs"
                >
                  {`${format(date[0].startDate, "MM-dd-yyyy")}`}{" "}
                  <h1 className="ml-4 mr-4 font-semibold">to</h1>
                  {`${format(date[0].endDate, "MM-dd-yyyy")}`}{" "}
                </span>
                {openDate ? (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(value) => setDate([value.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="z-50 absolute top-11"
                    minDate={new Date()}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="realtive flex p-1 space-x-2 items-center">
                <Person
                  onClick={() => {
                    setOpenOptions((prev) => !prev);
                    setOpenDate(false);
                  }}
                  className="cursor-pointer text-yellow-500"
                />
                <span
                  onClick={() => {
                    setOpenOptions((prev) => !prev);
                    setOpenDate(false);
                  }}
                  className="text-xs w-[13rem] text-center cursor-pointer"
                >
                  {`${options.adults} · Adults ${options.children} · Children ${options.rooms} · Room`}{" "}
                </span>
                {openOptions ? (
                  <div className="z-50 bg-white absolute text-xs flex flex-col justify-between rounded-xl p-2 top-[10rem] border-2 border-gray-200 text-gray-800 w-[12rem] h-[8rem]">
                    <div className="flex items-center justify-between">
                      <span>Adult</span>
                      <div className="w-[5rem] flex items-center justify-between">
                        <button
                          disabled={options.adults === 0}
                          onClick={() => {
                            cusomerHandler("adults", "sub");
                          }}
                          className="bg-gray-200 w-7 rounded-md font-bold disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.adults}</span>
                        <button
                          disabled={options.adults === 10}
                          onClick={() => {
                            cusomerHandler("adults", "add");
                          }}
                          className="bg-gray-200 w-7 rounded-md font-bold disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className=" flex items-center justify-between">
                      <span>Children</span>
                      <div className="w-[5rem] flex items-center justify-between">
                        <button
                          disabled={options.children === 0}
                          onClick={() => {
                            cusomerHandler("children", "sub");
                          }}
                          className="bg-gray-200 w-7 rounded-md font-bold disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          disabled={options.children === 10}
                          onClick={() => {
                            cusomerHandler("children", "add");
                          }}
                          className="bg-gray-200 w-7 rounded-md font-bold disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className=" flex items-center justify-between">
                      <span>Room</span>
                      <div className="w-[5rem] flex items-center justify-between">
                        <button
                          disabled={options.rooms === 0}
                          onClick={() => {
                            cusomerHandler("rooms", "sub");
                          }}
                          className="bg-gray-200 w-7 rounded-md font-bold disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.rooms}</span>
                        <button
                          disabled={options.rooms === 10}
                          onClick={() => {
                            cusomerHandler("rooms", "add");
                          }}
                          className="bg-gray-200 w-7 rounded-md font-bold disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex p-1 space-x-2 items-center">
                <Link
                  as="/lists"
                  href={{
                    pathname: "/lists",
                    query: data,
                  }}
                >
                  <button
                    onClick={handleSearch}
                    className="rounded-xl w-20 h-8 text-sm bg-blue-800 text-white"
                  >
                    Search
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
