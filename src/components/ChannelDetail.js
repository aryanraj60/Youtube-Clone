import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("I'm UseEffect Of Channel Details Page");
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      console.log("Channel Data Fetched for Channel Details", data);
      if (data.items) {
        setChannelDetails(data.items[0]);
      }
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        console.log("Channel Videos Fetched for Channel Details", data);

        if (data.items) {
          setVideos(data.items);
        }
      }
    );
  }, []);

  console.log("ChannelDetail Page Rendered!");
  return (
    <div className="h-[95vh]">
      <div className="h-[50%]">
        <div className="h-[150px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <ChannelCard channelDetails={channelDetails} marginTop={"-130px"} />
      </div>
      <div className="flex p-5 h-[50%] overflow-y-auto">
        <Videos videos={videos} marginAuto={"auto"} />
      </div>
    </div>
  );
};

export default ChannelDetail;
