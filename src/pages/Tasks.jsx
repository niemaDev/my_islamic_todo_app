import React, { useState } from "react";

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
      <h2>📝 My Islamic Tasks</h2>
      <div style={inputContainer}>
        <input
          type="text"
          value={input}
          placeholder="Enter your task (e.g. Pray Fajr)"
          onChange={(e) => setInput(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTask} style={btnStyle}>Add</button>
      </div>

      <ul style={listStyle}>
        {tasks.map((task, i) => (
          <li key={i} style={itemStyle}>
            {task}
            <button onClick={() => deleteTask(i)} style={deleteBtn}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const container = { padding: "20px", textAlign: "center" };
const inputContainer = { marginBottom: "16px" };
const inputStyle = { padding: "8px", width: "250px", marginRight: "8px" };
const btnStyle = { padding: "8px 16px", background: "#2c3e50", color: "white", border: "none", cursor: "pointer" };
const listStyle = { listStyle: "none", padding: 0 };
const itemStyle = { margin: "8px 0", display: "flex", justifyContent: "center", gap: "12px" };
const deleteBtn = { background: "red", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" };
