import React from "react";
import Navbar from "./Navabr";

function Menu() {
  return (
    <div>
      <Navbar></Navbar>

      <h1 className="text-lg ml-6">Menu</h1>

      <hr />
      <div className="flex gap-[5%] flex-wrap content-start ml-20 mt-10 ">
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-300 mb-5">
          1
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-400 mb-5">
          2
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-300 mb-5">
          3
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-400 mb-5">
          4
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-300 mb-5">
          5
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-400 mb-5">
          6
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-300 mb-5">
          7
        </div>
        <div className="w-[19%] h-[350px] rounded-md shadow bg-blue-400 mb-5">
          8
        </div>
      </div>
    </div>
  );
}

export default Menu;
