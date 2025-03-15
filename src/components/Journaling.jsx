import React from "react";
import { useState } from "react";
import { analyzeJournalEntry } from "../cohoreAI"; // Import AI function
import ReactMarkdown from "react-markdown"; // Handle styling the AI response
const Journaling = () => {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

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
      <h1 className="text-[#4A90E2] text-2xl">
        🌿 MindNest – Your Gentle Mood Journal
      </h1>
      <textarea
        rows="4"
        className="w-full p-[10px] rounded-[5px] border-[1px] border-solid border-[#ccc] text-[16px]"
        placeholder="Write about your thoughts and feelings..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <br />
      <button
        className="bg-[#4A90E2] text-[#fff] px-[15px] py-[10px] border-none rounded-[5px] cursor-pointer mt-[10px]"
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
