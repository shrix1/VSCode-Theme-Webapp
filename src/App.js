import "./App.css";
import React from "react";

import Nav from "./homepage/Nav";
import Home from "./homepage/Home";
import Form from "./secondpage/Form";
import Team from "./thirdpage/Team";
import About from "./fourthpage/About";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Form />
      <Team />
      <About />
    </>
  );
}

export default App;
