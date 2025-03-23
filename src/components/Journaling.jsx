import React, { useState, useEffect, useRef } from "react";
import { analyzeJournalEntry } from "../cohoreAI";
import ReactMarkdown from "react-markdown";
import useNotesStore from "../stores/useNoteStore";
import { FaHeart } from "react-icons/fa";
import toast from 'react-hot-toast';

const Journaling = () => {
  const { addNote, addFav } = useNotesStore();
  const targetRef = useRef(null);
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [resLoading, setResLoading] = useState(false);
  const [mood, setMood] = useState("Neutral");
  const [favorites, setFavorites] = useState(false);

  const addFavorite = () => {
    if (!favorites) {
      setFavorites(true);
      addFav(response, mood);
    }
  };

  useEffect(() => {
    if (response) {
      setResLoading(true);
      const timer = setTimeout(() => setResLoading(false), 4000);
      const scrollTimer = setTimeout(() => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => {
        clearTimeout(timer);
        clearTimeout(scrollTimer);
      };
    }
  }, [response]);

  const feelings = [
    { name: "Happiness", emoji: "😊" },
    { name: "Sadness", emoji: "😢" },
    { name: "Anger", emoji: "😠" },
    { name: "Fear", emoji: "😨" },
    { name: "Surprise", emoji: "😯" },
    { name: "Disgust", emoji: "🤢" },
  ];

  const handleAnalyze = async () => {
    if (!entry.trim()) return alert("Please enter a journal entry!");
    setLoading(true);
    try {
      const aiResponse = await analyzeJournalEntry(entry);
      setResponse(aiResponse);
      addNote(aiResponse, mood);
      setEntry("");

    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Oops! Something went wrong. Please try again. 💙");
      
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto my-24 p-6 text-center bg-[var(--color-bg)] rounded-xl shadow-lg">
      <h1 className="text-2xl font-audiowide text-[var(--color-primary)] mb-4">
        🌿 Mood Nest – Your Gentle Mood Journal 🌿
      </h1>

      <h3 className="text-lg text-[var(--color-text)] mb-4">How do you feel right now?</h3>
      <p className="mt-4 text-lg text-[var(--color-accent)]">
      {
  mood === "Neutral"
    ? "If you're feeling neutral, that's okay. You can start writing your journal right away, or choose an emoji that resonates with how you're feeling."
    : mood
    ? `You're feeling ${mood.toLowerCase()}`
    : "Tap an emoji to share your mood"
    }
      </p>

      <div className="flex flex-wrap justify-center gap-4 p-4 bg-[var(--color-bg-transparent)] rounded-lg shadow-md">
  {feelings.map(({ name , emoji }) => (
    <button
      key={name}
      onClick={() => setMood(name)}
      className={`w-16 h-16 flex items-center justify-center text-2xl rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-bg)] shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-secondary)] hover:text-white focus:ring-4 focus:ring-[var(--color-secondary)] active:bg-[var(--color-primary)] ${
        mood === name ? "ring-4 ring-[var(--color-primary)]" : ""
      }`}
    >
      {emoji}
    </button>
  ))}
</div>

      
      <h4 className="mt-6 text-lg text-[var(--color-text)] leading-relaxed">
        Let your thoughts flow freely—this is a safe and gentle space for you to express whatever is on your heart 💚
      </h4>

      <textarea
        rows="5"
        className="w-full mt-4 p-4 text-lg rounded-md border border-[var(--color-secondary)] shadow-md bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        placeholder="Write about your thoughts and feelings..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <button
        className="mt-4 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-md transition hover:bg-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-accent)] disabled:opacity-50"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Mood"}
      </button>

      {response && (
        <div className="mt-6 p-6 bg-[var(--color-bg)] rounded-lg shadow-md text-left" ref={targetRef}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">🔮 A Gentle Perspective:</h3>
            <FaHeart
              className={`cursor-pointer text-2xl transition ${favorites ? "text-red-500" : "text-gray-400"}`}
              onClick={addFavorite}
            />
          </div>
          <div className={`bg-[var(--color-bg-transparent)] p-4 rounded-lg border border-[var(--color-accent)] text-[var(--color-text)] text-lg leading-relaxed ${resLoading ? "animate-pulse" : ""} duration-1000`}>
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journaling;
