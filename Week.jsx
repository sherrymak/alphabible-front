import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function Week() {
  const { weekNumber } = useParams();
  const [week, setWeek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`${API_URL}/api/weeks/${weekNumber}`)
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Week not found");
        }
        return res.json();
      })
      .then(data => {
        if (data.success) {
          setWeek(data.week);
        } else {
          setError("Week not found");
        }
      })
      .catch(err => setError("Week not found"))
      .finally(() => setLoading(false));
  }, [weekNumber]);

  if (loading) return <p>Loading week {weekNumber}...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Week {week.weekNumber}</h1>
      <p>
        Chapters: {week.startChapter} - {week.endChapter}
      </p>
      <ul>
        {week.chapters.map(ch => (
          <li key={ch._id}>
            <Link to={`/biblechapters/${ch.bookOrder}/${ch.chapterNumber}`}>
              {ch.book} {ch.chapterNumber}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}