import React from "react";
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
  const { deleteFav, fav } = useNotesStore();
  return (
    <div className="flex flex-col container justify-center items-center mx-auto gap-6 p-4">
      {fav.map((note) => (
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
    </div>
  );
};

export default Fav;
