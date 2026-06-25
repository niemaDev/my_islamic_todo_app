import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaPrayingHands } from "react-icons/fa";

export default function Home() {
  return (
    <div style={container}>
      <div style={card}>
        {/* Header Icon */}
        <FaMoon size={40} color="#2c7a7b" />

        <h1 style={title}>My Islamic To-Do</h1>

        <p style={subtitle}>
          Stay productive while keeping your heart connected to Allah.
        </p>

        <blockquote style={quote}>
          <FaPrayingHands size={22} color="#2c7a7b" />

          <span style={arabic}>
            ﴿ وَقُلِ ٱعْمَلُوا۟ فَسَيَرَى ٱللَّهُ عَمَلَكُمْ ﴾
          </span>

          <em style={translation}>
            “And say, Work, for Allah will see your deeds…” <br />
            (Quran 9:105)
          </em>
        </blockquote>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  minHeight: "calc(100vh - 64px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #f0fdf4, #e6fffa)",
  padding: "20px",
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "500px",
  textAlign: "center",
};

const title = {
  marginTop: "10px",
  fontSize: "24px",
  fontWeight: "700",
  color: "#1a202c",
};

const subtitle = {
  fontSize: "15px",
  color: "#4a5568",
  marginTop: "8px",
};

const quote = {
  marginTop: "20px",
  padding: "14px",
  background: "#f7fafc",
  borderLeft: "4px solid #2c7a7b",
  borderRadius: "8px",
};

const arabic = {
  fontSize: "20px",
  display: "block",
  marginTop: "10px",
  color: "#1a202c",
  fontWeight: "600",
};

const translation = {
  fontSize: "14px",
  color: "#4a5568",
  display: "block",
  marginTop: "8px",
};