import React from "react";
import { FaInfoCircle, FaBullseye, FaLeaf } from "react-icons/fa";

export default function About() {
  return (
    <div style={container}>
      <div style={card}>
        {/* Header */}
        <FaInfoCircle size={40} color="#2c7a7b" />
        <h2 style={title}>About This App</h2>

        {/* Divider */}
        <div style={divider}></div>

        {/* Description */}
        <p style={description}>
          This Islamic To-Do App helps you organize your daily life while staying
          connected to your faith. It combines productivity with spiritual
          reminders from the Quran and Sunnah to keep you consistent and focused.
        </p>

        {/* Features / Values */}
        <div style={features}>
          <div style={featureItem}>
            <FaBullseye style={featureIcon} />
            <span>Stay focused on meaningful goals</span>
          </div>

          <div style={featureItem}>
            <FaLeaf style={featureIcon} />
            <span>Build consistent daily habits</span>
          </div>
        </div>
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
  maxWidth: "600px",
  textAlign: "center",
};

const title = {
  marginTop: "10px",
  fontSize: "26px",
  fontWeight: "700",
  color: "#1a202c",
};

const divider = {
  width: "60px",
  height: "4px",
  background: "#2c7a7b",
  margin: "20px auto",
  borderRadius: "2px",
};

const description = {
  fontSize: "16px",
  color: "#4a5568",
  lineHeight: "1.6",
};

const features = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const featureItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  background: "#f7fafc",
  padding: "10px",
  borderRadius: "8px",
};

const featureIcon = {
  color: "#2c7a7b",
};