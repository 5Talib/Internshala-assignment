import React from "react";

export default function Navbar() {
  return (
    <div className="flex my-6 font-inter justify-between">
      <div className="">
        <img className="h-[112px] w-[112px]" src="./assets/Rectangle.png" alt="Logo" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="px-5 py-3 text-gray-800 text-opacity-100 text-lg">Home</div>
        <div className="px-5 py-3 text-gray-800 text-opacity-100 text-lg">Flashcard</div>
        <div className="px-5 py-3 text-gray-800 text-opacity-100 text-lg">Contact</div>
        <div className="px-5 pr-10 py-3 text-gray-800 text-opacity-100 text-lg">FAQ</div>
        <div className="login px-10 py-3 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 rounded-3xl text-white">Login</div>
      </div>
    </div>
  );
}
