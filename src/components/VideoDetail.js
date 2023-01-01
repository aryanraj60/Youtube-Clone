import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { AiFillCheckCircle } from "react-icons/ai";
import { Videos } from "./";

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      console.log("Data Fetched For Video Detail Page", data);
      if (data.items) {
        setVideoDetails(data.items[0]);
      }
    });

    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(
      (data) => {
        console.log(
          "Suggested Videos Data Fetched for Video Detail Page",
          data
        );
        if (data.items) {
          setSuggestedVideos(data.items);
        }
      }
    );
  }, []);

  if (!videoDetails) return;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  console.log("Video Detail Page Rendered!");
  return (
    <div className="min-h-[95vh]">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="left-container flex-1">
          <div className="w-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="!h-[45vh] md:!h-[77vh] !w-full"
              controls
            />
            <h2 className="text-2xl my-2 text-white font-bold p-2">{title}</h2>
            <div className="flex justify-between text-white py-1 px-2">
              <Link>
                <h2 className="relative font-medium text-lg">
                  {channelTitle}
                  <AiFillCheckCircle className="inline ml-1" />
                </h2>
              </Link>
              <p className="text-gray-400">
                {parseInt(viewCount).toLocaleString()} Views
              </p>
            </div>
          </div>
        </div>
        <div className="right-container px-2 h-[95vh] overflow-y-auto">
          {suggestedVideos && (
            <Videos videos={suggestedVideos} direction="flex-col" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
