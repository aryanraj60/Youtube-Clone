import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      if (data.items) {
        setVideos(data.items);
      }
    });
  }, [searchTerm]);

  return (
    <div className="SearchFeed h-[92vh] overflow-y-auto p-5">
      <h4 className="mb-4 text-white font-bold text-4xl max-w-5xl m-auto">
        <span className="uppercase">{searchTerm}</span>{" "}
        <span className="text-rose-500 uppercase">Videos</span>
      </h4>

      <Videos videos={videos} marginAuto={"auto"} />
    </div>
  );
};

export default SearchFeed;
