import React from "react";
import url from "../assets/heading.png";
import mainphoto from "../assets/bg.jpg";
import ButtonJournaling from "./ButtonJournaling";

const Heading = () => {
  return (
    <>
      <header className="text-center text-2xl my-3 flex justify-center gap-3 items-center container mx-auto">
        <img src={url} alt="Logo" className="-mt-16" />
      </header>
      <main className="container mx-auto relative">
        <img
          src={mainphoto}
          alt="relaxing photo"
          className="w-full h-[70vh] rounded-2xl -mt-4"
        />
        <div className="text-center text-black  drop-shadow-lg max-w-[80%] mx-auto absolute top-56  left-8/12 leading-loose ">
          <h2 className="text-4xl font-bold ">
            Welcome to <br /> MoodNest 🌿 Your <br /> Safe Space to <br />
            Reflect
          </h2>
          <p className="text-[16px]">Track your mood, breath, and grow.</p>
        </div>
        <ButtonJournaling />
      </main>
    </>
  );
};

export default Heading;
