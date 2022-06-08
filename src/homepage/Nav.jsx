import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../secondpage/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Nav() {
  const [isauth, setIsauth] = useState(localStorage.getItem("auth"));
  const [to, setTo] = useState(true);

  //for menu DropDown
  const openDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };

  //user logged in
  const googleLoginIn = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("auth", true);
      setIsauth(true);
      setTo(
        toast.success("loggedIn successFully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
      console.log("log in");
    });
  };

  //user logged out
  const googleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsauth(false);
      toast.error("logged out");
    });
  };

  return (
    <>
      {/*---------------------nav -----------------------------------*/}

      <nav
        className="w-[100%] p-5 md:h-[7vh] bg-mainbl-200 font-pop 
      md:flex md:justify-around md:items-center border-b-[1px] border-mainbl-100"
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
          className="flex-col hidden   md:z-0 z-[-1] duration-1000 ease-out
          md:flex md:justify-between md:flex-row md:items-center border-white 
          md:mt-[-10px] transition-transform"
          id="dropdown"
        >
          {/* ---------------------list ---------------------------*/}
          <ul
            className="text-1xl mt-2 flex justify-around md:flex md:justify-around 
          md:items-center md:gap-[50px]"
          >
            <li>
              <a href="#Howto" className=" text-mainbl-50 hover:text-white">
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

          {/* cs for login and out */}
          {!isauth && to ? (
            <div>
              <button
                onClick={googleLoginIn}
                className="p-2 bg-mainpp-200 rounded-md mt-3 w-[140px] ml-[120px] 
              border-mainpp-200 border-2 hover:bg-transparent  hover:border-mainpp-200
              hover:text-white transition-colors duration-300 font-bold tracking-wide"
              >
                {" "}
                Login <BiLogIn className="inline ml-3 -mt-[2px] text-2xl" />
              </button>
              <ToastContainer
                toastStyle={{ backgroundColor: "#121212" }}
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          ) : (
            <div>
              <button
                onClick={googleLogout}
                className="p-2 bg-mainpp-200 rounded-md mt-3 w-[140px] ml-[120px] 
              border-mainpp-200 hover:bg-transparent border-2 hover:border-mainpp-200
              hover:text-white transition-colors duration-300 font-bold tracking-wide "
              >
                Logout <BiLogOut className="inline ml-3 -mt-[2px] text-2xl" />
              </button>
              <ToastContainer
                toastStyle={{ backgroundColor: "#121212" }}
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
