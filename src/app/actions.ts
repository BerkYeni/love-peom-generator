"use server";

export async function generatePoemAction(formData: FormData) {
  // Extracting values from FormData
  const theme = formData.get("theme");
  const mood = formData.get("mood");
  const keywords = formData.get("keywords");

  // Log extracted values
  console.log({ theme, mood, keywords });

  // Optional: Validate form data
  if (!theme || !mood || !keywords) {
    console.error("All fields are required!");
    // return;
  }

  // Use the data for further processing
  // return { theme, mood, keywords };
}
