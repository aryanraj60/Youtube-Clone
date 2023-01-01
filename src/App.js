import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  ChanneDetail,
  Feed,
  SearchFeed,
  VideoDetail,
  Footer,
} from "./components";

console.log("I'm App - Outside");

const App = () => {
  console.log("App Rendered!");
  return (
    <Router>
      <div className="App_Wrapper bg-[#000]">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChanneDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
