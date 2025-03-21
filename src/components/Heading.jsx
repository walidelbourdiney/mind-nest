import React from "react";
import ButtonJournaling from "./ButtonJournaling";

const Heading = () => {
  return (
    <>
      <div className="Home   flex flex-col justify-between bg-bg">
        <header className="text-center text-7xl sm:text-8xl m container mx-auto font-audiowide text-[var(--color-primary)] drop-shadow-lg">
          <h1 className="mt-10">Mood Nest</h1>
        </header>

        <main className="container mx-auto relative flex flex-col justify-between items-center ">
          <div className=" bg-[var(--color-bg-transparent)] text-[var(--color-text)] drop-shadow-lg max-w-[90%] md:max-w-[60%] p-6 md:p-8 rounded-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-Mono text-[var(--color-secondary)] leading-relaxed">
              Welcome to <br /> Mood Nest 🌿 Your <br /> Safe Space to <br />
              Reflect
            </h2>
            <p className="text-lg sm:text-xl font-Mono text-[var(--color-accent)] mt-3">
              Track your mood, breathe, and grow.
            </p>
          </div>

          <div className="mt-20">
            <ButtonJournaling />
          </div>
        </main>
        <footer className="text-lg sm:text-xl font-Mono text-primary mt-40 text-center  container mx-auto rounded py-2">
          <p>
            Your mind deserves kindness. Let Mood Nest be your retreat for
            self-care and growth.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Heading;
