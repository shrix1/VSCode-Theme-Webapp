import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { dbReview, auth } from "./firebase";

export default function Review() {
  const [data, setData] = useState({
    title: "",
    message: "",
  });
  const [dbList, setdbList] = useState([]);

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
  const createPost = async (e) => {
    e.preventDefault();
    //addDoc is ading doc to firestore based onthe postColection var
    await addDoc(postCollection, {
      title: data.title,
      message: data.message,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(postCollection);
      setdbList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log("fetched");
    getData();
  });

  return (
    <>
      <section
        className="w-[100%] min-h-[80vh] bg-mainbl-200 font-pop
       flex justify-center items-center flex-col "
      >
        <h1 className=" text-5xl text-mainpp-200 ">Reviews</h1>
        <div
          className="w-[70%] flex justify-between items-center
        flex-col mt-9"
        >
          <h1 className="text-2xl text-mainpp-100 capitalize">
            write a review here
          </h1>
          <form
            onSubmit={createPost}
            className="flex justify-center items-center flex-col"
          >
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
              maxLength={100}
            />
            <button
              className="p-2 bg-mainpp-200 rounded-md ml-[140px] mt-3
             capitalize md:ml-0"
            >
              submit post
            </button>
          </form>
        </div>

        <h1 className="mt-10 text-4xl text-white mb-5">
          User <span className="text-mainpp-200">reviews</span>
        </h1>

        <section className="bg-mainbl-200">
          {dbList.map((post) => {
            return (
              <>
                <div
                  className="max-w-[60%] h-auto  border-2 border-white p-5 mb-5
                rounded-md bg-mainbl-100 leading-10"
                >
                  <h1 className="text-3xl capitalize">{post.title}</h1>
                  <h1 className="text-white">{post.message}</h1>
                  <h1 className="">
                    By:
                    <span className="text-mainpp-200 font-bold">
                      {post.name}
                    </span>
                  </h1>
                </div>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
