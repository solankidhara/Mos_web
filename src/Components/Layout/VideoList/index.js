import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HoverPlayVideo from "../../common/Video-player/HoverPlayVideo";
import classes from "./style.module.css";

const VideoList = (props) => {
  const navigate = useNavigate();

  const handleThumbImage = (id) => {
    navigate("/frame/" + id);
  };

  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center">
      {props.videos.slice(0, 20).map((video, index) => (
        <div key={index} className={classes["img-container"]} onClick={() => handleThumbImage(video._id)}>
          <HoverPlayVideo src={video.thumbFile} style={{width:"318" ,height:"200px"}}/>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
