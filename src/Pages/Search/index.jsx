import axios from "axios";
import { useEffect} from "react";

import fLinks from "../../Components/constance/footerList";
import links from "../../Components/constance/navLinks";
// import searchResult from "../../Components/constance/searchResult";
import social from "../../Components/constance/socialMedia";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import NavBar from "../../Components/common/NavBar/NavBar";
import PlanPrompt from "../../Components/common/Plans/PlansPrompt";
import SearchControls from "../../Components/common/SearchControls/SearchControls";
import SearchResultsDisplay from "../../Components/common/SearchResultsDisplay/SearchResultsDisplay";
import classes from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../Redux/Slice/image-slice";

const Search = () => {
  const dispatch = useDispatch(); 
  
  const searchResult = useSelector((state) => state.images.imgList);
  
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/users/default-files");
      dispatch(addImages(data));
    })();
  }, []);

  return (
    <div className="g-0 container-fluid">
      <NavBar menu={links} />
      <div className={classes.bar}>
        <SearchControls bs-class={"mt-5"} name={"search"} placeholder={"search for 3D"} selected={"3d"} options={links} />
      </div>
      <SearchResultsDisplay thumbImages={searchResult} />
      <div className="mt-4">
        <PlanPrompt text="Check all pricing and plans" btnLabel="Check Now" />
        <FooterBar lists={fLinks} social={social} />
      </div>
    </div>
  );
};

export default Search;
