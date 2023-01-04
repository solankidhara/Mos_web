import { Fragment } from "react";
import { Alert, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import badges from "../../constance/search-badges";
import BadgeList from "../Badges/BadgeList";
import Paging from "../Paging/Paging";
import HoverPlayVideo from "../Video-player/HoverPlayVideo";
import classes from "./SearchResultsDisplay.module.css";

const SearchResultsDisplay = ({ thumbImages }) => {
  const {dd , tag} =useParams()

  const handleGetBadge = (badgeName) => {};

  const navigate = useNavigate();
  const handleThumbImage = (id) => {
    navigate("/frame/" + id);
  };

  return (
    <Fragment>
      <Container className={classes.tags}>
        <BadgeList badges={badges} onClick={handleGetBadge} />
      </Container>
      <div className="py-4 px-3 d-flex justify-content-center flex-wrap">
        {thumbImages.map((thumbImg) => {
          if(thumbImg.content_type_id.type === "image"){
            return (
              <div key={thumbImg._id} className={classes.results} onClick={() => handleThumbImage(thumbImg._id)}>
                <img className="img-fluid" src={thumbImg.thumbFile} alt="search result" height={250} width={250} />
              </div>
            );
          }else if(thumbImg.content_type_id.type === "video"){
            return (
              <div key={thumbImg._id} className={classes.results +" "+ classes.w_video} onClick={() => handleThumbImage(thumbImg._id)}>
                <HoverPlayVideo src={thumbImg.thumbFile} />
              </div>
            );
          }
        })}
        {!thumbImages.length && <Alert variant="primary">
          The content type {dd} and search keyword {tag} could not be found. 
        </Alert>}
      </div>
      <Paging total={25} />
    </Fragment>
  );
};

export default SearchResultsDisplay;
