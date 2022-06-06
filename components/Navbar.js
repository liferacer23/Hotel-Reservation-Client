import React, { useContext, useEffect, useState } from "react";
import Login from "./Login";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import NoSSRWrapper from "./no-ssr-wrapper";
export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [userL, setUserL] = useState(user);
  useEffect(() => {
    setUserL(user);
  }, [user]);
  return (
    <NoSSRWrapper>
      <nav className="flex flex-col h-fit w-screen">
        <div className="flex justify-between px-8 bg-blue-800">
          <Link href="/">
            <div className="p-2 cursor-pointer">
              <h1 className="text-white text-2xl text-center font-Marker">
                BOOKER!
              </h1>
              {/* <Image/> */}
            </div>
          </Link>

          <div
            className={`${
              user ? "hidden" : ""
            } flex justify-center items-center space-x-2 p-2`}
          >
            <button className="font-medium w-20 h-7 bg-white rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm">
              Register
            </button>
            <Link href="/login">
              <button className="font-medium w-20 h-7 bg-white rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm">
                Login
              </button>
            </Link>
          </div>
          <div
            className={`${
              userL ? "block" : "hidden"
            } w-[13rem] text-white p-2 cursor-pointer flex justify-between items-center`}
          >
            {userL ? userL.username : ""}
            <button className="text-black font-medium w-20 h-7 bg-white rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm">
                Log out
              </button>
          </div>
        </div>
      </nav>
    </NoSSRWrapper>
  );
}
