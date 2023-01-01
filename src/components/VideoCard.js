import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="Card w-full md:w-[320px]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="md:h-[240px] md:w-full mx-auto"
        />
      </Link>
      <div className="bg-gray-900 h-[106px]">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h3 className="text-base text-start font-bold text-white p-2 overflow-hidden">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </h3>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
        >
          <h3 className="text-sm text-start font-bold text-gray-500 p-2">
            {snippet?.channelTitle || demoChannelTitle}
            <AiFillCheckCircle className="inline ml-1" />
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
