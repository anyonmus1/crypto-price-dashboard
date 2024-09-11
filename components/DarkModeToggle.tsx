"use client"; // This ensures this component is rendered on the client-side

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    // Get the current theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded"
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
