import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Components
import { Navbar, Footer } from "./components";

// Pages
import { Home, About, Projects, Resume } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/portfolio" />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
