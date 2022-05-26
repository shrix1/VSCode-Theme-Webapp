import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Nav() {
  const openDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };
  return (
    <>
      <nav className="w-[100%] p-5 bg-mainbl-200 font-pop">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl text-white">Theme</h1>
          </div>

          <button
            onClick={openDropdown}
            className="text-3xl text-white hover:text-mainpp-200"
          >
            <HiMenuAlt3 />
          </button>
        </div>

        <div
          className="flex-col hidden z-[-1] transition-all duration-1000 ease-out"
          id="dropdown"
        >
          <ul className="text-1xl mt-2 flex justify-around ">
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
