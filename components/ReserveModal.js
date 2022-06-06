import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import useFetch from "../hook/useFetch";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import {useRouter} from "next/router";
export default function ReserveModal({ setReserve, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const router = useRouter();
  const { payload, error, fetching } = useFetch(`
  https://myhotelreservationsite.herokuapp.com/api/hotels/rooms/${hotelId}`);

  const { endDate, startDate } = useContext(SearchContext);

  const handleClose = (e) => {
    e.stopPropagation();
    setReserve((prev) => !prev);
  };

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    /*     if(selected){
      setSelectedRooms([...selectedRooms,value])
    } else{
      setSelectedRooms(selectedRooms.filter((item)=>item!==value));
    } */
    setSelectedRooms(
      selected
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const getDateRange = (start, end) => {
    const StartDate = new Date(start);
    const EndDate = new Date(end);

    const date = new Date(StartDate.getTime());
    let dates = [];
    while (date <= EndDate) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };


  const UnavailableDates = getDateRange(startDate, endDate);

  const checkAvailablity = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      UnavailableDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };


  const handleReserve = async () => {
    try {
      const response = await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:4000/api/rooms/availability/${roomId}`,
            { dates: UnavailableDates }
          );
          return res.data;
        }) 
      );
     setReserve(false);
     router.push('/');
    } catch (err) {
      console.log(err)
    }
  };


  console.log(selectedRooms);
  console.log(UnavailableDates);

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={(e) => {
          handleClose(e);
        }}
        className="z-10 backdrop-blur-md flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full"
      ></div>
      <div className=" overflow-y-auto absolute flex flex-col rounded-xl p-2 z-50 bg-white h-[30rem] w-[30rem]">
        <div className=" w-full flex justify-between items-center p-2">
          <span>Select your Rooms</span>
          <span
            onClick={() => {
              setReserve((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            <CloseIcon />
          </span>
        </div>
        <hr />
        <div className=" flex flex-col justify-center items-center h-fit p-2">
          {payload.map((room) => {
            return (
              <div key={room._id} className="flex flex-col w-full">
                <div className="p-2 text-xs mx-auto w-[80%] flex justify-between">
                  <div className="flex flex-col items-start w-5/6">
                    <span>
                      {" "}
                      <span className="font-semibold">Title: </span>{" "}
                      {room.title}
                    </span>
                    <span>
                      {" "}
                      <span className="font-semibold">Description: </span>{" "}
                      {room.description}
                    </span>
                    <span>
                      <span className="font-semibold"> Maximum People: </span>
                      {room.maxPeople}
                    </span>
                    <span>
                      <span className="font-semibold">Room Price:</span>{" "}
                      {room.price}
                    </span>
                  </div>
                  <div className=" flex flex-wrap gap-2 p-2 w-2/6">
                    {room.roomNumbers.map((item) => {
                      return (
                        <div
                          key={item._id}
                          className=" flex flex-col justify-center items-center text-xs"
                        >
                          <span>{item.number}</span>
                          <input
                          readOnly
                            disabled={!checkAvailablity(item)}
                            className="cursor-pointer"
                            type="checkBox"
                            value={item._id}
                            onClick={(e) => {
                              handleSelect(e);
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <hr className="mt-[1rem]" />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            handleReserve();
          }}
          className="mx-auto text-xs p-2 rounded-full transition duration-40 hover:bg-blue-600 bg-blue-800 text-white flex items-center justify-center cursor-pointer w-[25%]"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}
