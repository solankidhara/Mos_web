import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import badges from "../../constance/search-badges";
import BadgeList from "../Badges/BadgeList";
import Paging from "../Paging/Paging";
import classes from "./SearchResultsDisplay.module.css";

const SearchResultsDisplay = ({ thumbImages }) => {
  const handleGetBadge = (badgeName) => {};

  const navigate = useNavigate()
  const handleThumbImage = (id) => {
    navigate("/frame/"+id)
  }

  return (
    <Fragment>
      <Container className={classes.tags}>
        <BadgeList badges={badges} onClick={handleGetBadge} />
      </Container>
      <div className="py-4 px-3 d-flex justify-content-center flex-wrap">
        {thumbImages.map((thumbImg) => (
          <div key={thumbImg._id} className={classes.results} onClick={()=>handleThumbImage(thumbImg._id)}>
            <img className="img-fluid" src={thumbImg.thumbFile} alt="search result" height={250} width={250} />
          </div>
        ))}
      </div>
      <Paging total={25} />
    </Fragment>
  );
};

export default SearchResultsDisplay;
