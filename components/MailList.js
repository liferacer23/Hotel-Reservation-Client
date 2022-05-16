import React from "react";

export default function MailList() {
  return (
    <div className="w-full p-2 flex flex-col bg-blue-900">
      <div className="flex flex-col p-2 justify-center items-center">
        <h1 className="text-xl font-medium text-white">
          Save time, save money!
        </h1>
        <span className="text-xs text-white">
          Sign up and we ll send the best deals to you.
        </span>
      </div>
      <div className="flex flex-col p-1 justify-center mx-auto h-[3rem] w-[28rem]">
        <div className="flex h-full w-full">
          <input
            placeholder="Your Email"
            className="outline-none pl-2 h-full w-4/6"
            type="text"
          />
          <button className="text-white text-sm bg-blue-700 text-center w-2/6 h-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 h-20">
            <input className="cursor-pointer" type="checkbox" />
            <span className="text-xs text-white">Send me a link to get the Free Booker.com app!!</span>
        </div>
    </div>
  );
}
