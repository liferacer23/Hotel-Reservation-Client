import React, { useContext, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Login() {
    const route = useRouter();
  const [userInfo, setUserInfo] = useState({
      email:null,
    username: null,
    password: null,
    confirmPass:null
  });
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(
        "https://myhotelreservationsite.herokuapp.com/api/auth/login",
        userInfo
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });  
      route.push('/');
    } catch (err) {
      dispatch({ type: "LOGIN_FAILD", payload: err.response.data });
    }
  };

  
  return (
    <>
    <Navbar/>
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div className="z-20 backdrop-blur-xl flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full">
      </div>
        <div className="absolute z-50 bg-blue-800 rounded-xl h-[15rem] w-[20rem] p-2 flex justify-center items-center">
          <form className="rounded-xl bg-white w-full h-full flex flex-col justify-center space-y-2">
            <div className="mx-auto flex justify-between w-[90%] p-1 items-center">
              <label className="text-sm" htmlFor="username">
                User Name:
              </label>
              <input
                className="text-sm h-8 border-none outline-none"
                type="text"
                id="username"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="User Name"
              />
            </div>
            <div className="mx-auto flex justify-between w-[90%] p-1 items-center">
              <label className="text-sm" htmlFor="email">
                Email:
              </label>
              <input
                className="text-sm h-8 border-none outline-none"
                type="email"
                id="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="User Name"
              />
            </div>
            <div className="mx-auto flex justify-between items-center w-[90%] p-1">
              <label className="text-sm " htmlFor="username">
                Password:
              </label>
              <input
                className="text-sm h-8 border-none outline-none"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="mx-auto flex justify-between items-center w-[90%] p-1">
              <label className="text-sm " htmlFor="username">
                Confirm Password:
              </label>
              <input
                className="text-sm h-8 border-none outline-none"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex justify-evenly">
            <button
            disabled={loading}
              className="mx-auto hover:bg-blue-600 rounded-xl w-24 h-8 text-xs bg-blue-800 text-white"
              type="submit"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              {loading ? "Loading.." : "Login"}
            </button>
           <Link href="/">
            <button
            disabled={loading}
              className="mx-auto hover:bg-blue-600 rounded-xl w-24 h-8 text-xs bg-gray-800 text-white"
            >
              Home
            </button>
            </Link>
            </div>
            <p className="font-bold w-[80%] mx-auto text-xs text-red-500">{error ? <span>{error}</span> : " "}</p>
          </form>
        </div>
      
    </div>
    <Footer/>
    </>
  );
}
