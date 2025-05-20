import { Routes, Route } from "react-router";
import "./App.css";
import Head from "./Head.tsx";
import Navbar from "@components/NavBar.tsx";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";

function App() {
  return (
    <>
      <html>
        <Head title="VEPER.CODES" />
        <body className="min-h-screen bg-stone-300 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-50 flex-col text-center pt-20 pb-5 duration-500">
          <Navbar />
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
