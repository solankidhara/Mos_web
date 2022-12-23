import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

const HoverPlayVideo = () => {
  return (
    <>
      <HoverVideoPlayer
        videoSrc="http://localhost:3000/video/japan.mp4"
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    </>
  );
};

export default HoverPlayVideo;
