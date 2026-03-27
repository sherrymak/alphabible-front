import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="flex justify-between p-4 bg-gray-200 dark:bg-gray-900">
      <h1 className="font-bold text-lg">Alpha Bible</h1>
      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded"
      >
        🌙
      </button>
    </nav>
  );
}