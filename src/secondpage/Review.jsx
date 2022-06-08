import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { dbReview, auth } from "./firebase";
import { AiOutlineDelete } from "react-icons/ai";

export default function Review() {
  const [data, setData] = useState({
    title: "",
    message: "",
  });
  const [dbList, setdbList] = useState([]);
  const [check, setCheck] = useState(1);

  //normal form grabbling
  const getData = (e) => {
    const { name, value } = e.target;
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
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
    });
    setData({
      title: "",
      message: "",
    });
    setCheck(check + 1);
  };

  const deletePost = async (id) => {
    const postDoc = doc(dbReview, "reviews", id);
    await deleteDoc(postDoc);
    setCheck(check + 1);
  };

  useEffect(() => {
    const getData = async () => {
      const postCollection = collection(dbReview, "reviews");
      const data = await getDocs(postCollection);
      setdbList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("fetched");
    };
    getData();
  }, [check]);

  return (
    <>
      {/* review writing section */}
      <section
        className="w-[100%] min-h-[80vh] bg-mainbl-200 font-pop
       flex justify-center items-center flex-col "
      >
        <h1 className=" text-5xl text-mainpp-200 ">Reviews</h1>
        <div
          className="w-[65%] flex justify-between items-center
        flex-col mt-9"
        >
          <h1 className="text-3xl text-mainpp-100 capitalize">
            write a review
          </h1>
          <form
            onSubmit={createPost}
            className="flex justify-center items-center flex-col"
          >
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={getData}
              required
              className="mt-4 rounded-md p-2 w-[340px] md:w-[600px] text-[20px] border-2
              outline-none focus:text-white focus:bg-mainbl-200 focus:border-mainpp-200
             border-solid border-gray-300  bg-mainbl-100"
            />
            <textarea
              name="message"
              placeholder="Message here..."
              value={data.message}
              onChange={getData}
              required
              maxLength={100}
              className="mt-4 rounded-md p-2 w-[340px] md:w-[600px] h-[170px] text-[20px] border-2               
              outline-none focus:text-white focus:bg-mainbl-200 focus:border-mainpp-200
              border-solid border-gray-300  bg-mainbl-100"
            />
            <button
              className="p-[6px] bg-mainpp-200 rounded-md mt-3 w-[340px] 
             capitalize hover:bg-transparent  hover:border-mainpp-200
             hover:text-white border-2 border-mainpp-200"
            >
              submit post
            </button>
          </form>
        </div>

        {/* review secti0on */}
        <h1 className="mt-10 text-4xl text-white mb-5">
          User <span className="text-mainpp-200">reviews</span>
        </h1>

        <section className="bg-mainbl-200">
          {dbList.map((post) => {
            return (
              <>
                <div
                  className="w-[340px] md:w-[600px] h-auto shadow-lg p-5 mb-5
                rounded-md bg-mainbl-200 leading-10 border-[1px] border-mainbl-100 
                flex justify-between hover:border-mainpp-200"
                >
                  <div>
                    <h1 className="text-3xl capitalize text-white font-semibold">
                      {post.title}
                    </h1>
                    <h1 className="text-mainbl-50">{post.message}</h1>
                    <h1 className="capitalize text-mainbl-50">
                      By :{" "}
                      <span className="text-mainpp-200 font-bold tracking-[2px]">
                        {post.name}
                      </span>
                    </h1>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                      title="delete post"
                      className="p-2 bg-mainpp-200 rounded-md  hover:bg-transparent hover:border-mainpp-200
                      hover:text-white border-2 border-mainpp-200"
                    >
                      <AiOutlineDelete className="text-xl " />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
