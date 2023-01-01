import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("I'm useEffect Of Feed!");
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log("Data Fetched for Feed Page!", data);
      if (data.items) {
        setVideos(data.items);
      }
    });
  }, [selectedCategory]);

  console.log("Feed Rendered!");
  return (
    <div className="Feed flex flex-col md:flex-row">
      <div className="Feed_Sidebar_Container md:h-[92vh] border-r-2 border-gray-400 md:p-2">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="Feed_RightBar_Container p-8 h-[92vh] overflow-y-auto md:flex-[2] md:p-4 text-center md:text-left">
        <h4 className="mb-4 text-white font-bold text-4xl">
          {selectedCategory} <span className="text-rose-500">Videos</span>
        </h4>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
