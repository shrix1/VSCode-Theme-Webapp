import "./App.css";
import Nav from "./homepage/Nav";
import Home from "./homepage/Home";
import Howto from "./homepage/Howto";
import Form from "./secondpage/Form";
import Team from "./secondpage/Team";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Howto />
      <Form />
      <Team />
    </>
  );
};

export default App;
