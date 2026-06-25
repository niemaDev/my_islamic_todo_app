import React from "react";
import { FaMoon, FaQuoteLeft } from "react-icons/fa";

export default function Explore() {
  return (
    <div style={container}>
      <div style={card}>
        {/* Header */}
        <FaMoon size={40} color="#2c7a7b" />
        <h2 style={title}>Islamic Inspiration</h2>

        {/* Divider */}
        <div style={divider}></div>

        {/* Quran Section */}
        <div style={section}>
          <FaQuoteLeft style={quoteIcon} />

          <p style={arabic}>
            ﴿ إِنَّ الصَّلَاةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبٗا مَّوْقُوتٗا ﴾
          </p>

          <p style={translation}>
            “Indeed, prayer has been decreed upon the believers at specified
            times.” (Quran 4:103)
          </p>
        </div>

        {/* Hadith Section */}
        <div style={section}>
          <FaQuoteLeft style={quoteIcon} />

          <p style={hadithIntro}>The Prophet ﷺ said:</p>

          <p style={translation}>
            “The most beloved of deeds to Allah are those that are most
            consistent, even if small.” (Bukhari & Muslim)
          </p>
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
  maxWidth: "650px",
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

const section = {
  marginTop: "20px",
  padding: "15px",
  background: "#f7fafc",
  borderRadius: "10px",
  position: "relative",
};

const quoteIcon = {
  position: "absolute",
  top: "10px",
  left: "10px",
  color: "#cbd5e0",
};

const arabic = {
  fontSize: "20px",
  fontWeight: "600",
  marginTop: "10px",
  lineHeight: "1.8",
};

const translation = {
  fontSize: "15px",
  color: "#4a5568",
  marginTop: "10px",
  lineHeight: "1.6",
};

const hadithIntro = {
  fontWeight: "600",
  marginTop: "10px",
};