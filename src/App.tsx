import { useState } from "react";
import { Routes, Route, NavLink, Link, useNavigate } from "react-router";
import "./App.css";
import Head from "./Head.tsx";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";
import ThemeToggle from "@components/ThemeToggle";

function App() {
  return (
    <>
      <html>
        <Head title="VEPER.CODES" />
        <body className="min-h-screen bg-stone-300 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-50 flex-col text-center pt-20 pb-5 duration-500">
          <div className="sticky top-0 mt-2 mb-10 p-2 bg-stone-600">
            <div className="flex flex-row justify-center items-center">
              <nav>
                <Link to="/"> HOME </Link>
                <Link to="/works"> WORKS </Link>
                <Link to="/projects"> PROJECTS </Link>
              </nav>
              <div className="place-content-end">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="card">
            <Routes>
              <Route index element={<Home />} />
              <Route path="works" element={<Works />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </div>
        </body>
      </html>
    </>
  );
}

export default App;
