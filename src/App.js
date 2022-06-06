import "./App.css";
import Nav from "./homepage/Nav";
import Home from "./homepage/Home";
import Howto from "./homepage/Howto";
import Form from "./secondpage/Form";
import Team from "./secondpage/Team";
import Review from "./secondpage/Review";
import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
// SyncLoader

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="flex bg-mainbl-200 justify-center items-center
         w-[100%] h-[100vh]"
        >
          <RingLoader color="#B64FC8" loading={loading} size={180} />
        </div>
      ) : (
        <>
          <Nav />
          <Home />
          <Howto />
          <Form />
          <Team />
          <Review />
        </>
      )}
    </>
  );
};

export default App;
