import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function Chapter() {
  const { bookOrder, chapterNumber } = useParams();
  const navigate = useNavigate();

  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`${API_URL}/biblechapters/${bookOrder}/${chapterNumber}`)
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Chapter not found");
        }
        return res.json();
      })
      .then(data => {
        if (data.success) {
          setChapter(data.data);
        } else {
          setError("Chapter not found");
        }
      })
      .catch(err => setError("Chapter not found"))
      .finally(() => setLoading(false));
  }, [bookOrder, chapterNumber]);

  if (loading) return <p>Loading chapter...</p>;
  if (error) return <p>{error}</p>;

  // Convert params to numbers
  const bookNum = Number(bookOrder);
  const chapNum = Number(chapterNumber);

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => navigate(-1)}>Back</button>

      <h1>
        {chapter.book} {chapter.chapterNumber}
      </h1>

      <div>
        {chapter.verses.map(v => (
          <p key={v.verseNumber}>
            <strong>{v.verseNumber}:</strong> {v.text}
          </p>
        ))}
      </div>

      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={() => navigate(`/biblechapters/${bookNum}/${chapNum - 1}`)}
          disabled={chapNum === 1}
        >
          Previous
        </button>
        <button
          onClick={() => navigate(`/biblechapters/${bookNum}/${chapNum + 1}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
}