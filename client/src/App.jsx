import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Auth />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
