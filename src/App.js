import React from "react";
import Navbar from "./Components/Navbar";
import Address from "./Components/Address";
import Topic from "./Components/Topic";
import Subnav from "./Components/Subnav";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";

function App() {
  return (
    <div className="px-[6rem] pb-[3rem]">
      <Navbar />
      <Address />
      <Topic />
      <Subnav />
      <Card />
      <Footer />
      <Faq />
    </div>
  );
}

export default App;
