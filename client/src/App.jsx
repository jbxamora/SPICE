import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dummyPosts } from "./constants/constants";

import Navbar from "./components/NavBar";
import CreatePost from "./pages/CreatePost";
import PostsList from "./components/PostList";
import Footer from "./components/Footer";
import LandingPage from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<PostsList posts={dummyPosts} />} />
        <Route path='/' element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
