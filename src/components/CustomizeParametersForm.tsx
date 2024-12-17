"use client";
import { generatePoemAction } from "@/app/actions";
import { useState } from "react";

import React from "react";
import FormField from "./FormField";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import Button from "./Button";

type Props = {};

const CustomizeParametersForm = (props: Props) => {
  const [theme, setTheme] = useState("");
  const [mood, setMood] = useState("");
  const [keywords, setKeywords] = useState("");

  return (
    <form action={generatePoemAction}>
      {/* Theme Input */}
      <FormField>
        <FormLabel htmlFor="theme">Theme:</FormLabel>
        <FormInput
          type="text"
          id="theme"
          name="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="e.g., Love, Nature"
          required
        />
      </FormField>

      {/* Mood Input */}
      <FormField>
        <FormLabel htmlFor="mood">Mood:</FormLabel>
        <FormInput
          type="text"
          id="mood"
          name="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="e.g., Joyful, Melancholic"
          required
        />
      </FormField>

      {/* Keywords Input */}
      <FormField>
        <FormLabel htmlFor="keywords">Keywords:</FormLabel>
        <FormInput
          type="text"
          id="keywords"
          name="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="e.g., sunshine, flowers, laughter"
          required
        />
      </FormField>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button className="bg-gradient-to-br from-purple-500 to-pink-500 m-auto">
          Generate Poem
        </Button>
      </div>
    </form>
  );
};

export default CustomizeParametersForm;
