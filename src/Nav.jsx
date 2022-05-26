import React from "react";
import { FaSquareFull } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <nav className="w-[100%] p-5 bg-mainbl-200 font-pop">
        <div>
          <h1 className="text-3xl text-white">Theme</h1>
        </div>
        {/* <button>
          <FaSquareFull />
        </button> */}
        <ul className="text-1xl">
          <li>
            <a href="/">Reviews</a>
          </li>
          .
          <li>
            <a href="/">Contact</a>
          </li>
          .
          <li>
            <a href="/">Support</a>
          </li>
        </ul>

        <button className="p-2 bg-[]">Download</button>
      </nav>
    </>
  );
}
