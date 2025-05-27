import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Games from "./pages/games";



import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;