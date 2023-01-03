import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

const HoverPlayVideo = ({src}) => {
  return (
      <HoverVideoPlayer
        videoSrc={src}
        style={{
          // height:"140.63px",
          // width:"100%",
          objectFit:"cover"
        }}
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    
  );
};

export default HoverPlayVideo;
