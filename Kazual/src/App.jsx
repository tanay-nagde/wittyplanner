import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Blogs from "./pages/Blog";
import Analyze from "./pages/Analyze";

function App() {
  return (
   <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analyse" element={<Analyze />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
