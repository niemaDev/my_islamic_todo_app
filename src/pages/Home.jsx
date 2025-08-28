import React from "react";

export default function Home() {
  return (
    <div style={container}>
      <h1>Welcome to My Islamic To-Do App</h1>
      <p style={{ fontSize: "20px", marginTop: "12px" }}>
        🕌 Manage your daily tasks while staying spiritually motivated.
      </p>
      <blockquote style={quote}>
        ﴿ وَقُلِ ٱعْمَلُوا۟ فَسَيَرَى ٱللَّهُ عَمَلَكُمْ ﴾  
        <br />
        <em>“And say, Work, for Allah will see your deeds…” (Quran 9:105)</em>
      </blockquote>
    </div>
  );
}

const container = {
  minHeight: "calc(100vh - 64px)", // leaves space for the header
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const quote = {
  marginTop: "24px",
  fontSize: "18px",
  textAlign: "center",
  color: "#2c3e50",
  maxWidth: "600px",
};
