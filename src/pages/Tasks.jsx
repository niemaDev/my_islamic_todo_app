import React, { useState } from "react";
import { FaTasks, FaTrash } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={container}>
      <div style={card}>
        {/* Header */}
        <FaTasks size={40} color="#2c7a7b" />
        <h2 style={title}>My Islamic Tasks</h2>

        {/* Input */}
        <div style={inputContainer}>
          <input
            type="text"
            value={input}
            placeholder="Enter your task (e.g. Pray Fajr)"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            style={inputStyle}
          />
          <button onClick={addTask} style={addBtn}>
            <MdAddTask />
            Add
          </button>
        </div>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p style={emptyText}>No tasks yet. Start with something meaningful.</p>
        ) : (
          <ul style={listStyle}>
            {tasks.map((task, i) => (
              <li key={i} style={itemStyle}>
                <span>{task}</span>
                <button onClick={() => deleteTask(i)} style={deleteBtn}>
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
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

const inputContainer = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "14px",
};

const addBtn = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "10px 14px",
  background: "#2c7a7b",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  marginTop: "20px",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f7fafc",
  padding: "10px 14px",
  borderRadius: "8px",
  marginBottom: "10px",
};

const deleteBtn = {
  background: "#e53e3e",
  color: "white",
  border: "none",
  padding: "6px 8px",
  borderRadius: "6px",
  cursor: "pointer",
};

const emptyText = {
  marginTop: "20px",
  color: "#718096",
};