import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./App.css";
import About from "./Components/About/About.jsx"

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;