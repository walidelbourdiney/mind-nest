import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import useNotesStore from "../stores/useNoteStore";
import { format } from "date-fns";

const Fav = () => {
  const feelings = [
    { name: "Happiness", emoji: "😊" },
    { name: "Sadness", emoji: "😢" },
    { name: "Anger", emoji: "😠" },
    { name: "Fear", emoji: "😨" },
    { name: "Surprise", emoji: "😯" },
    { name: "Disgust", emoji: "🤢" },
    { name: "Neutral", emoji: "😐" },
  ];

  const { deleteFav, fav } = useNotesStore();
  const [selectedMood, setSelectedMood] = useState("");
    

  const filteredNotes = selectedMood
    ? fav.filter((note) => note.mood === selectedMood)
    : fav;

  return (
    <div className="flex flex-col items-center mx-auto p-4 w-full max-w-3xl">
      {fav.length > 0 ? (
        <>
          <h3 className="text-lg text-[var(--color-text)] text-center mb-4">
            Filter your journal favorites by mood?
          </h3>

          {/* Mood Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 p-4 bg-[var(--color-bg-transparent)] rounded-lg shadow-md">
            {feelings.map(({ name, emoji }) => (
              <button
                key={name}
                onClick={() => setSelectedMood(name)}
                className={`w-14 h-14 flex items-center justify-center text-2xl rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-bg)] shadow-md transition-all duration-300 transform hover:scale-110 hover:bg-[var(--color-secondary)] hover:text-white focus:ring-4 focus:ring-[var(--color-secondary)] active:bg-[var(--color-primary)] ${
                  selectedMood === name ? "bg-[var(--color-secondary)] text-white" : ""
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>

          <p className="mt-4 text-lg text-[var(--color-accent)] text-center">
            {selectedMood
              ? `Showing journal entries where you felt ${selectedMood.toLowerCase()}. Reflect on your journey.`
              : "Tap an emoji to view journal entries matching that mood."}
          </p>

          {/* Journal Entries */}
          <div className="w-full space-y-6 mt-6">
            {filteredNotes
              .slice()
              .reverse()
              .map((note) => (
                <div
                  key={note.id}
                  className="bg-[var(--color-bg)] shadow-2xl p-4 rounded-lg flex flex-col items-center text-center md:text-left"
                >

                  
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                    {note.mood}
                  </h3>
                             
                  
                  <div className="prose max-w-none text-[var(--color-text)] mt-2">
                    <ReactMarkdown>{note.text}</ReactMarkdown>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 space-y-3 md:space-y-0">
                    <button
                      onClick={() => deleteFav(note.id)}
                      className="bg-[var(--color-primary)] text-[var(--color-accent)] px-4 py-2 rounded-md cursor-pointer shadow-md hover:bg-[var(--color-secondary)] transition hover:text-black"
                    >
                      Delete
                    </button>
                    <p className="text-sm text-[var(--color-text)] italic bg-[var(--color-accent)] px-3 py-1 rounded-2xl">
                      {format(new Date(note.timestamp), "MMM dd, yyyy HH:mm")}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <h2 className="text-primary text-xl mt-32 text-center">
          Your favorites will appear here. Save the moments that resonate with you. 😊
        </h2>
      )}
    </div>
  );
};

export default Fav;
