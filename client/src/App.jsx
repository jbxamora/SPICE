import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dummyPosts } from "./constants/constants";

import Navbar from "./components/NavBar";
import CreatePost from "./pages/CreatePost";
import Auth from "./pages/Auth";
import PostsList from "./components/PostList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList posts={dummyPosts} />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
