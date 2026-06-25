import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMosque, FaTasks, FaCompass, FaInfoCircle } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <FaMosque /> },
    { path: "/tasks", label: "Tasks", icon: <FaTasks /> },
    { path: "/explore", label: "Explore", icon: <FaCompass /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> },
  ];

  return (
    <header style={header}>
      <div style={navContainer}>
        {/* Logo / Brand */}
        <div style={logo}>
          <FaMosque style={{ marginRight: "8px" }} />
          <span>DeenTasks</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul style={navList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    ...link,
                    ...(location.pathname === item.path ? activeLink : {}),
                  }}
                >
                  <span style={icon}>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ================= STYLES ================= */

const header = {
  background: "#1a202c",
  padding: "14px 24px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const navContainer = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo = {
  display: "flex",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "700",
  color: "#e6fffa",
};

const navList = {
  listStyle: "none",
  display: "flex",
  gap: "20px",
  margin: 0,
  padding: 0,
};

const link = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: "#cbd5e0",
  textDecoration: "none",
  fontWeight: "500",
  padding: "6px 10px",
  borderRadius: "6px",
  transition: "all 0.2s ease",
};

const activeLink = {
  background: "#2c7a7b",
  color: "#ffffff",
};

const icon = {
  display: "flex",
  alignItems: "center",
};