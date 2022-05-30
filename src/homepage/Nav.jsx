import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";

export default function Nav() {
  const openDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };
  return (
    <>
      {/*---------------------nav -----------------------------------*/}
      <nav
        className="w-[100%] p-5 md:h-[8vh] bg-mainbl-200 font-pop 
      md:flex md:justify-around md:items-center"
      >
        {/* logo/dropdown */}
        <div className="flex justify-between">
          {/* --------------name of ours-------------------------------*/}
          <h1
            className="text-3xl text-white hover:text-mainpp-200 
            transition-colors duration-150"
          >
            Theme
          </h1>

          {/* ------------button for dropdown --------------------*/}
          <button
            title="menu"
            onClick={openDropdown}
            className="text-3xl text-mainpp-200 hover:text-white md:hidden"
          >
            <HiMenuAlt3 />
          </button>
        </div>

        {/* list  and btn*/}
        <div
          className="flex-col hidden md:z-0 z-[-1] transition-all duration-1000 ease-out
          md:flex md:justify-between md:flex-row md:items-center border-white md:mt-[-10px]"
          id="dropdown"
        >
          {/* ---------------------list ---------------------------*/}
          <ul
            className="text-1xl mt-2 flex justify-around md:flex md:justify-around 
          md:items-center md:gap-[50px]"
          >
            <li>
              <a href="/" className=" text-mainbl-50 hover:text-white">
                Reviews
              </a>
            </li>
            <span className="text-mainbl-50">.</span>
            <li>
              <a href="/" className="text-mainbl-50 hover:text-white">
                Contact
              </a>
            </li>
            <span className="text-mainbl-50">.</span>
            <li>
              <a href="/" className="text-mainbl-50 hover:text-white">
                Support
              </a>
            </li>
          </ul>

          {/* --------------------download btn---------------------------- */}
          <button
            className="p-2 bg-mainpp-200 rounded-md mt-3 w-[140px] ml-[160px] 
        border-mainpp-200 hover:bg-transparent border-2 hover:border-mainpp-200
        hover:text-white transition-colors duration-300"
          >
            <a href="/">
              Download <BsDownload className="inline ml-3 -mt-[2px]" />
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}
