import React from "react";

import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";

import { AiFillCheckCircle } from "react-icons/ai";

const ChannelCard = ({ channelDetails, marginTop }) => {
  return (
    <div
      className="flex justify-center items-center w-full md:w-[320px] h-[330px] m-auto"
      style={{ marginTop: marginTop }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <div className="p-4 flex flex-col justify-center text-center text-white">
          <img
            src={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
            className="rounded-[50%] w-[180px] h-[180px] mb-2 border"
          />
          <h3 className="font-medium text-xl">
            {channelDetails?.snippet?.title}
            <AiFillCheckCircle className="inline ml-1" />
          </h3>
          {channelDetails?.statistics && (
            <p>{channelDetails.statistics.subscriberCount} Subscribers</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
