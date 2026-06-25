import React from "react";
import { FaMosque } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";

export default function Home() {
  return (
    <div style={container}>
      <div style={card}>
        {/* Top Icon */}
        <FaMosque size={45} color="#2c7a7b" />

        {/* Title */}
        <h1 style={title}>Islamic To-Do App</h1>

        {/* Subtitle */}
        <p style={subtitle}>
          <MdOutlineSelfImprovement style={iconStyle} />
          Manage your daily tasks while staying spiritually focused
        </p>

        {/* Divider */}
        <div style={divider}></div>

        {/* Quote */}
        <blockquote style={quote}>
          <span style={arabic}>
            ﴿ وَقُلِ ٱعْمَلُوا۟ فَسَيَرَى ٱللَّهُ عَمَلَكُمْ ﴾
          </span>
          <br />
          <em style={translation}>
            “And say, Work, for Allah will see your deeds…” (Quran 9:105)
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
  padding: "40px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  textAlign: "center",
  maxWidth: "600px",
  width: "100%",
};

const title = {
  marginTop: "15px",
  fontSize: "30px",
  fontWeight: "700",
  color: "#1a202c",
};

const subtitle = {
  marginTop: "12px",
  fontSize: "18px",
  color: "#4a5568",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyle = {
  marginRight: "8px",
};

const divider = {
  width: "60px",
  height: "4px",
  background: "#2c7a7b",
  margin: "20px auto",
  borderRadius: "2px",
};

const quote = {
  marginTop: "10px",
  fontSize: "16px",
  color: "#2c3e50",
  lineHeight: "1.6",
};

const arabic = {
  display: "block",
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "10px",
};

const translation = {
  color: "#4a5568",
};