import React from "react";
import { name, city } from "../data/data.js";

const hColor = {
  color: "firebrick",
};

function Home() {
  return (
    <div id="home">
      <h1 style={hColor}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
