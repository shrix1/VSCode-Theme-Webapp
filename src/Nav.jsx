import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Nav() {
  const openDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };
  return (
    <>
      <nav className="w-[100%] p-5 md:h-[8vh] bg-mainbl-200 font-pop md:flex md:justify-around md:items-center">
        {/* logo/dropdown */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl text-white">Theme</h1>
          </div>

          <button
            onClick={openDropdown}
            className="text-3xl text-white hover:text-mainpp-200 md:hidden"
          >
            <HiMenuAlt3 />
          </button>
        </div>

        {/* list */}
        <div
          className="flex-col hidden md:z-0 z-[-1] transition-all duration-1000 ease-out
          md:flex md:justify-between md:flex-row md:items-center"
          id="dropdown"
        >
          <ul className="text-1xl mt-2 flex justify-around md:flex md:justify-around md:items-center">
            <li>
              <a href="/" className="text-mainbl-100 hover:text-white">
                Reviews
              </a>
            </li>
            <span className="text-mainbl-100">.</span>
            <li>
              <a href="/" className="text-mainbl-100 hover:text-white">
                Contact
              </a>
            </li>
            <span className="text-mainbl-100">.</span>
            <li>
              <a href="/" className="text-mainbl-100 hover:text-white">
                Support
              </a>
            </li>
          </ul>

          <button
            className="p-2 bg-mainpp-200 rounded-md mt-3 w-[140px] ml-[170px]
        border-mainpp-200 hover:bg-transparent border-2 hover:border-mainpp-200
        hover:text-white transition-colors duration-300"
          >
            <a href="/">Download</a>
          </button>
        </div>
      </nav>
    </>
  );
}
