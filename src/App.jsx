import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Markets from "./pages/Markets.jsx";
import World from "./pages/World.jsx";
import Opinion from "./pages/Opinion.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/markets" element={<Markets />} />
        <Route path="/world" element={<World />} />
        <Route path="/opinion" element={<Opinion />} />
      </Routes>
    </Router>
  );
}

export default App;
