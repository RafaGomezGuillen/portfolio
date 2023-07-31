import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Navbar, Footer, Home, About, Projects, Resume } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/portfolio" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
