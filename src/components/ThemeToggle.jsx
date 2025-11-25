import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-2xl text-white hover:scale-110 transition-all"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
