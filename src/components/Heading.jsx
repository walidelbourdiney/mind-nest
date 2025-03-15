import React from "react";
import url from "../assets/meditation.png";

const Heading = () => {
  return (
    <header className="text-center text-2xl my-3 flex justify-center gap-3 items-center">
      <img
        src={url}
        alt="Logo"
        className="w-10"
        // style={{ fontFamily: `"Copperplate", "Papyrus", fantasy` }}
      />
      <h3>MoodNest</h3>
    </header>
  );
};

export default Heading;
