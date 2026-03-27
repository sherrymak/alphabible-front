import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Week from "./pages/Week";
import Chapter from "./pages/Chapter";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weeks/:weekNumber" element={<Week />} />
        <Route
          path="/biblechapters/:bookOrder/:chapterNumber"
          element={<Chapter />}
        />
      </Routes>
    </Router>
  );
}

export default App;