import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
