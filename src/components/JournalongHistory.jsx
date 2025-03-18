import React from "react";
import ReactMarkdown from "react-markdown"; // for styling text property
import useNotesStore from "../stores/useNoteStore";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { format } from "date-fns"; // For formatting timestamps

const JournalingHistory = () => {
  const { deleteNote, notes, clearNotes } = useNotesStore();

  const moodCounts = notes.reduce((acc, note) => {
    acc[note.mood] = (acc[note.mood] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(moodCounts).map(([mood, count]) => ({
    name: mood,
    value: count,
  }));

  const COLORS = [
    "#004225", // Primary
    "#007a5e", // Secondary
    "#c5a880", // Accent
    "#f8f9f3", // Background
    "#1c1c1c", // Text
    "#8f8f8f", // Neutral (fallback)
  ];

  return (
    <div className="flex flex-col container justify-center items-center mx-auto gap-6 p-4">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 ">
        Mood Distribution
      </h2>

      {/* Pie Chart */}
      <div className="w-full max-w-2xl ">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Journaling Notes */}
      {notes.map((note) => (
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
              onClick={() => deleteNote(note.id)}
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
      {notes.length > 0 && (
        <button
          onClick={clearNotes}
          className="bg-[var(--color-primary)] text-[var(--color-accent)] px-6 py-3 rounded-md  cursor-pointer  shadow-md hover:bg-[var(--color-secondary)] transition hover:text-black"
        >
          Clear All Notes!
        </button>
      )}
    </div>
  );
};

export default JournalingHistory;
