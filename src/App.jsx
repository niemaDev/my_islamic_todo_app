import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Explore from "./pages/Explore";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
