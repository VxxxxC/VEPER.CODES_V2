import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

function ThemeToggle() {
  const root = document.documentElement;
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState(() => {
    if (
      typeof localStorage !== undefined &&
      localStorage.getItem("theme") === "dark"
    ) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const color = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", color);
    setTheme(color);
  };

  /* set the initial theme color , when first loading in */
  window.onload = () => {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  /* set theme change color, when "theme" triggered */
  useEffect(() => {
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  /* check the theme color and remain the color , between the page changing */
  useEffect(() => {
    if (
      typeof localStorage !== undefined &&
      localStorage.getItem("theme") === "dark"
    ) {
      root.classList.add("dark");
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  return (
    <div
      className="my-3 w-[100px] flex justify-center rounded-full bg-orange-500 dark:bg-purple-500"
      aria-label="theme toggle switch"
    >
      {themes.map((color) => {
        const toggle = color === theme;
        return (
          <button
            key={color}
            className={`${
              toggle ? "bg-white text-black" : ""
            }  p-2 rounded-full flex justify-center w-[100%]`}
            onClick={() => toggleTheme()}
          >
            {color === "dark" ? <IoMoon /> : <IoSunny />}
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;
