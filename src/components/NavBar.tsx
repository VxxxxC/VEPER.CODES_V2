import { Link } from "react-router";
import ThemeToggle from "@components/ThemeToggle";

export default function Navbar() {
  return (
    <>
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
    </>
  );
}
