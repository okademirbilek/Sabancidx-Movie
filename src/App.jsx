import Home from "./pages/Home";
import "./css/index.css";
import ResultsPage from "./pages/ResultsPage";

import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="bg-backColor  vh-100">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/:movie" element={<ResultsPage />} />
          <Route path="/details/:movie" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
