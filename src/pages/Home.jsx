import { Link } from "react-router-dom";

export default function Home() {
  const lastRead = localStorage.getItem("lastRead");

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Alpha Bible</h1>

      {lastRead && (
        <Link
          to={`/biblechapters/${lastRead}`}
          className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4 inline-block"
        >
          Resume Reading
        </Link>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {Array.from({ length: 52 }, (_, i) => i + 1).map((week) => (
          <Link
            key={week}
            to={`/weeks/${week}`}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition text-center"
          >
            Week {week}
          </Link>
        ))}
      </div>
    </div>
  );
}