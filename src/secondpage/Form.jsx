import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const formData = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitDb = (ev) => {
    ev.preventDefault();
    console.log(data);
  };

  return (
    <>
      <section className="bg-mainbl-200 min-h-[70vh] relative font-pop">
        <div className="flex flex-row">
          <div
            className="absolute top-20 left-[30%] lg:left-[35%] flex text-2xl 
          font-bold text-white"
          >
            <h2 className="  text-center text-mainpp-200 text-[35px] -ml-4 md:text-5xl md:ml-[150px]">
              Contact Us
            </h2>
          </div>
          {/* ----------------------form div---------------------------------------- */}
          <div
            className=" w-[95%] lg:w-[50%] flex justify-center absolute top-[50%] left-[50%] 
            transform translate-x-[-50%] translate-y-[-50%] mb-10"
          >
            <div
              className="p-3 lg:p-6 rounded-md shadow-md shadow-white-500/50 
            lg:bg-transparent w-[90%] "
            >
              <form onSubmit={submitDb} className="">
                {/* ----------------------name---------------------------------------- */}

                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control bg-mainbl-100 w-full px-3 md:h-[60px] md:focus:text-xl
                        py-1.5
                        text-base
                        md:text-xl
                        font-light
                        text-gray-700
                        bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0                        
                        focus:text-white focus:bg-mainbl-200 focus:border-mainpp-200 focus:outline-none"
                    placeholder="Name"
                    name="fullName"
                    onChange={formData}
                    value={data.fullName}
                    required
                  />
                </div>

                {/* ----------------------email---------------------------------------- */}

                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block bg-mainbl-100 md:h-[60px] md:focus:text-xl
                        w-full
                        px-3
                        py-1.5
                        md:text-xl
                        text-base
                        font-light
                        text-gray-700
                        bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-white focus:bg-mainbl-200 focus:border-mainpp-200 focus:outline-none"
                    placeholder="Email"
                    name="email"
                    onChange={formData}
                    value={data.email}
                    required
                  />
                </div>

                {/* ----------------------message---------------------------------------- */}

                <div className="form-group mb-6">
                  <textarea
                    maxLength={300}
                    className="
                        form-control
                        bg-mainbl-100
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        md:h-[150px] md:focus:text-xl md:text-xl
                        font-light
                        text-gray-700
                        bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                      focus:text-white focus:bg-mainbl-200 focus:border-mainpp-200 focus:outline-none
                    "
                    rows="4"
                    placeholder="Message"
                    name="message"
                    onChange={formData}
                    value={data.message}
                    required
                  ></textarea>
                </div>

                {/* ----------------------button---------------------------------------- */}

                <button
                  className="text-[18px] w-[310px] md:ml-[300px] md:w-[200px] 
                    mr-0
                    px-6
                    py-2.5
                    bg-mainpp-200
                    text-white
                    font-light
                    leading-tight
                    captilize
                    rounded
                    shadow-md
                    hover:bg-mainpp-300 hover:shadow-lg
                    focus:bg-mainpp-200 focus:shadow-lg outline-none focus:ring-0
                    active:bg-mainbl-100  active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
