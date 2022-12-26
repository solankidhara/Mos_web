import badges from "../../Components/constance/image-badges";
import links from "../../Components/constance/navLinks";
import previewDetails from "../../Components/constance/preview";
import related from "../../Components/constance/related";
import BadgeList from "../../Components/common/Badges/BadgeList";
import NavBar from "../../Components/common/NavBar/NavBar";
import Preview from "../../Components/common/Preview/Preview";
import SimilarContent from "../../Components/common/SimilarContent/SimilarContent";
import fLinks from "../../Components/constance/footerList";
import social from "../../Components/constance/socialMedia";
import FooterBar from "../../Components/common/FooterBar/FooterBar";

import classes from "./index.module.css";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addImages } from "../../Redux/Slice/image-slice";

const Frame = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.images.imgList).find((ele) => ele._id === id);
  
  useEffect(() => {
    if (!selectedImage) {
      (async () => {
        const { data } = await axios.get("/users/default-files");
        dispatch(addImages(data));
      })();
    }
  }, []);
  return (
    <div className="g-0 container-fluid">
      <NavBar menu={links} />
      <Container>
        <div className={classes.preview}>
          <Preview data={previewDetails} selectedImage={selectedImage}/>
        </div>
        <div className={classes.tags}>
          <label>Tags</label>
          <BadgeList badges={badges} />
        </div>
        <div className={classes.related}>
          <label>Similar Content</label>
          <SimilarContent content={related} />
        </div>
      </Container>
      <FooterBar lists={fLinks} social={social} />
    </div>
  );
};

export default Frame;
