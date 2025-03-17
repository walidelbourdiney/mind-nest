import React from "react";
import mainphoto from "../assets/bg.jpg";
import ButtonJournaling from "./ButtonJournaling";

const Heading = () => {
  return (
    <>
      <header className="text-center text-8xl my-3  container mx-auto font-audiowide text-green-950">
        <h1> Mood Nest</h1>
      </header>
      <main className="container mx-auto relative">
        <img
          src={mainphoto}
          alt="relaxing photo"
          className="w-full h-[70vh] rounded-2xl "
        />
        <div className="text-center text-black  drop-shadow-lg max-w-[80%] mx-auto absolute top-56  left-8/12 leading-loose ">
          <h2 className="text-4xl font-bold font-Mono">
            Welcome to <br /> MoodNest 🌿 Your <br /> Safe Space to <br />
            Reflect
          </h2>
          <p className="text-[16px] font-Mono">
            Track your mood, breath, and grow.
          </p>
        </div>
        <ButtonJournaling />
      </main>
    </>
  );
};

export default Heading;
