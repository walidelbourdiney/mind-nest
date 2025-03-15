import React from "react";
import { useState } from "react";
import { analyzeJournalEntry } from "../cohoreAI"; // Import AI function
import ReactMarkdown from "react-markdown"; // Handle styling the AI response
const Journaling = () => {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState("");
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
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Oops! Something went wrong. Please try again. 💙");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[1200px] mx-[auto] my-[50px] text-center">
      <h1 className="text-[#4A90E2] text-2xl mb-6 shadow-lg p-5">
        🌿 MindNest – Your Gentle Mood Journal
      </h1>
      <h3>How you feel right now?</h3>
      <div className="flex flex-wrap justify-center gap-4 p-6  rounded-xl shadow-lg mb-6">
        {feelings.map(({ name, emoji }) => (
          <button
            key={name}
            onClick={() => setMood(name)}
            className="w-16 h-16 flex items-center justify-center text-2xl rounded-full border-2 border-blue-300 bg-white shadow-md transition-all duration-300 transform hover:scale-110 hover:bg-blue-200 focus:ring-4 focus:ring-blue-400 active:bg-blue-300"
          >
            {emoji}
          </button>
        ))}

        <p className="mt-6 text-xl text-gray-700">
          {mood
            ? `You're feeling ${mood.toLowerCase()}`
            : "How are you feeling today?"}
        </p>
      </div>
      <h4 className="mb-6">
        Let your thoughts flow freely—this is a safe and gentle space for you to
        express whatever is on your heart💚
      </h4>
      <textarea
        rows="4"
        className="w-full p-[10px] rounded-[5px] border-[1px] border-solid border-[#ccc] text-[16px] shadow-lg"
        placeholder="Write about your thoughts and feelings..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <br />
      <button
        className="bg-[#4A90E2] text-[#fff] px-[15px] py-[10px] border-none rounded-[5px] cursor-pointer mt-[10px] shadow-lg"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Mood"}
      </button>
      {response && (
        <div className="mt-[20px] p-[15px] bg-[#f9f9f9] rounded-[5px] text-left">
          <h3 className="text-2xl mb-4">🔮 A Gentle Perspective:</h3>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-gray-800 leading-relaxed text-xl ">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journaling;
