import { useState } from "react";
import { Routes, Route, NavLink, Link, useNavigate } from "react-router";
import "./App.css";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";

function App() {
  return (
    <>
      <div className="sticky top-0 mt-2 mb-10 p-2 bg-stone-600">
        <div className="flex flex-row justify-center">
          <nav>
            <Link to="/"> HOME </Link>
            <Link to="/works"> WORKS </Link>
            <Link to="/projects"> PROJECTS </Link>
          </nav>
        </div>
      </div>
      <div className="card">
        <Routes>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
