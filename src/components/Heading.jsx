import React from "react";
import ButtonJournaling from "./ButtonJournaling";

const Heading = () => {
  return (
    <div className="Home flex flex-col justify-between bg-bg min-h-screen px-4 sm:px-6 md:px-8 mx-auto">
      <header className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-8 container mx-auto font-audiowide text-[var(--color-primary)] drop-shadow-lg">
        <h1>Mood Nest</h1>
      </header>

      <main className="container mx-auto flex flex-col items-center text-center mt-10">
        <div className="bg-[var(--color-bg-transparent)] text-[var(--color-text)] drop-shadow-lg max-w-[95%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] p-5 sm:p-6 md:p-8 rounded-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-Mono text-[var(--color-secondary)] leading-relaxed">
            Welcome to <br /> Mood Nest 🌿 Your <br /> Safe Space to <br /> Reflect
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-Mono text-[var(--color-accent)] mt-3">
            Track your mood, breathe, and grow.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <ButtonJournaling/>
        </div>
      </main>

      <footer className="text-base sm:text-lg md:text-xl font-Mono text-primary mt-32  text-center container mx-auto rounded py-4 px-4">
        <p>
          Your mind deserves kindness. Let Mood Nest be your retreat for self-care and growth.
        </p>
      </footer>
    </div>
  );
};

export default Heading;
