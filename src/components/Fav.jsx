import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // for styling text property
import useNotesStore from "../stores/useNoteStore";
import { format } from "date-fns"; // For formatting timestamps

// {
//     id: Date.now(),
//     text,
//     mood,
//     timestamp: Date.now(),
//   }
const Fav = () => {
  const feelings = [
    { name: "Happiness", emoji: "😊" },
    { name: "Sadness", emoji: "😢" },
    { name: "Anger", emoji: "😠" },
    { name: "Fear", emoji: "😨" },
    { name: "Surprise", emoji: "😯" },
    { name: "Disgust", emoji: "🤢" },
  ];
  const { deleteFav, fav } = useNotesStore();

  const [selectedMood, setSelectedMood] = useState("");

  const filteredElements = selectedMood
    ? fav.filter((note) => note.mood === selectedMood)
    : fav;

  return (
    <div className="flex flex-col container justify-center items-center mx-auto gap-6 p-4">
      {fav.length > 0 ? (
        <>
          <h3 className="text-lg text-[var(--color-text)] mb-4">
            Filter your journal favorites by mood?
          </h3>

          <div className="flex flex-wrap justify-center gap-4 p-4 bg-[var(--color-bg-transparent)] rounded-lg shadow-md">
            {feelings.map(({ name, emoji }) => (
              <button
                key={name}
                onClick={() => setSelectedMood(name)}
                className="w-16 h-16 flex items-center justify-center text-2xl rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-bg)] shadow-md transition-all duration-300 transform hover:scale-110 hover:bg-[var(--color-secondary)] hover:text-white focus:ring-4 focus:ring-[var(--color-secondary)] active:bg-[var(--color-primary)]"
              >
                {emoji}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xl text-[var(--color-accent)]">
            {selectedMood
              ? `Showing journal entries where you felt ${selectedMood.toLowerCase()}. Take a moment to reflect on your journey.`
              : "Tap an emoji to view journal entries matching that mood."}
          </p>

          {filteredElements
            .slice()
            .reverse()
            .map((note) => (
              <div
                key={note.id}
                className="flex flex-col container justify-center items-center shadow-2xl bg-bg gap-6 text-left p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {note.mood}
                </h3>
                <div className="prose max-w-none text-[var(--color-text)]">
                  <ReactMarkdown>{note.text}</ReactMarkdown>
                </div>
                <div className="flex justify-between items-center  w-[90%] mt-4">
                  <button
                    onClick={() => deleteFav(note.id)}
                    className="bg-[var(--color-primary)] text-[var(--color-accent)] px-6 py-3 rounded-md cursor-pointer shadow-md hover:bg-[var(--color-secondary)] transition hover:text-black"
                  >
                    Delete
                  </button>
                  {/* Timestamp */}
                  <p className="text-sm text-[var(--color-text)] italic bg-accent p-2 rounded-2xl">
                    {format(new Date(note.timestamp), "MMM dd, yyyy HH:mm")}
                  </p>
                </div>
              </div>
            ))}
        </>
      ) : (
        <h2 className=" text-primary text-xl mt-72">
          Your favorites will appear here—save the moments that resonate with
          you. 😊
        </h2>
      )}
    </div>
  );
};

export default Fav;
