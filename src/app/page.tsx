"use client";

import { useState } from "react";
import { generatePoemAction } from "./actions";

function CustomizationForm() {
  const [theme, setTheme] = useState("");
  const [mood, setMood] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Use form values to generate poetry or send to the backend
    // const response = await fetch("/api/generate-poem", {
    const response = await fetch("/api/generate-poem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme, mood, keywords }),
    });
    const data = await response.json();
    console.log(data.poem);
  };

  return (
    <div className="container">
      <h1>Poetry Generator</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form action={generatePoemAction}>
        {/* Theme Input */}
        <div>
          <label htmlFor="theme">Theme:</label>
          <input
            type="text"
            id="theme"
            name="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="e.g., Love, Nature"
            required
          />
        </div>

        {/* Mood Input */}
        <div>
          <label htmlFor="mood">Mood:</label>
          <input
            type="text"
            id="mood"
            name="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g., Joyful, Melancholic"
            required
          />
        </div>

        {/* Keywords Input */}
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., sunshine, flowers, laughter"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Generate Poem</button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <CustomizationForm />
    </div>
  );
}
