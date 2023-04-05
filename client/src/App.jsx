import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from './components/NavBar'
import Auth from "./components/Auth";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
