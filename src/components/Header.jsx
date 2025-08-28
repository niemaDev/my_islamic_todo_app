import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/tasks" style={linkStyle}>Tasks</Link></li>
          <li><Link to="/explore" style={linkStyle}>Explore</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: "#2c3e50",
  padding: "12px 16px",
  color: "#fff",
};

const navListStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  gap: "24px",
  justifyContent: "center",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
};
