import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState("null");
  const { id } = useParams();

  useEffect(() => {
    try {
      fetchFromAPI(`video?part=snippet,statistics&id=${id}`).then((data) =>
        setVideoDetail(data.items[0])
      );
    } catch (err) {
      console.error(err);
    }

    console.log(videoDetail);
  }, [id]);

  //  const {
  //    snippet: { title, channelId, channelTitle },
  //    statistics: { viewCount, likeCount },
  //  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={2}
            ></Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
