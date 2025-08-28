import React from "react";

export default function About() {
  return (
    <div style={container}>
      <h2>ℹ️ About This App</h2>
      <p>
        This Islamic To-Do App is built to help Muslims organize daily tasks while staying motivated with Quran and Sunnah reminders. 
        It’s simple, lightweight, and designed for consistency.
      </p>
    </div>
  );
}

const container = { padding: "20px", textAlign: "center" };
