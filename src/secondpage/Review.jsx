import React from "react";

export default function Review() {
  return (
    <>
      <section
        className="w-[100%] h-[70vh] bg-mainbl-200 font-pop
       flex justify-center items-center flex-col"
      >
        <h1 className="text-center text-5xl text-mainpp-200 ">Reviews</h1>
        <div
          className="w-[70%] flex justify-between items-center
        flex-col mt-9"
        >
          <h1 className="text-2xl text-mainpp-100 capitalize">
            write a review here
          </h1>
          <form>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="mt-4 rounded-md p-2 w-[400px] text-[20px]
              outline-none"
            />
            <textarea
              name="message"
              placeholder="Message here..."
              className="mt-4 rounded-md p-2 w-[400px] h-[170px] text-[20px]
              outline-none"
            />
            <button
              className="p-2 bg-mainpp-200 rounded-md ml-[140px] mt-2
             capitalize"
            >
              submit post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
