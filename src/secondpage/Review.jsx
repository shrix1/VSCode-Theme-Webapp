import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { dbReview, auth } from "./firebase";

export default function Review() {
  const [data, setData] = useState({
    title: "",
    message: "",
  });

  //normal form grabbling
  const getData = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //adding to db
  const postCollection = collection(dbReview, "reviews");
  //collection a fireStire thing it take dbreview as a
  //getfirestore inoput and the collection name
  const createPost = async () => {
    //addDoc is ading doc to firestore based onthe postColection var
    await addDoc(postCollection, {
      title: data.title,
      message: data.message,
      name: auth.currentUser.displayName,
      is: auth.currentUser.uid,
    });
  };

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
          <form onSubmit={createPost}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="mt-4 rounded-md p-2 w-[400px] text-[20px]
              outline-none"
              value={data.title}
              onChange={getData}
              required
            />
            <textarea
              name="message"
              placeholder="Message here..."
              className="mt-4 rounded-md p-2 w-[400px] h-[170px] text-[20px]
              outline-none"
              value={data.message}
              onChange={getData}
              required
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
