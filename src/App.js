import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Navbar,
  ChanneDetail,
  Feed,
  SearchFeed,
  VideoDetail,
  Footer,
} from "./components";

const App = () => {
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
