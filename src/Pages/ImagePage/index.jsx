import badges from "../../Components/constance/image-badges";
import trendingVideo from "../../Components/constance/trending-video-image";
import CategoryBrowser from "../../Components/common/CategoryBrowser/CategoryBrowser";
import NavBar from "../../Components/common/NavBar/NavBar";
import SearchMenu from "../../Components/common/SearchSec/Search";
import Photos from "../../Components/common/Photos/Photos";
import trendingPhotos from "../../Components/constance/trending-photos";
import royaltyFreeImage from "../../Components/constance/royaltyFreeImage";
import PlanPrompt from "../../Components/common/Plans/PlansPrompt";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import fLinks from "../../Components/constance/footerList";
import links from "../../Components/constance/navLinks";
import social from "../../Components/constance/socialMedia";

const ImageComponent = () => {
 
  return (
    <div className="g-0 container-fluid">
      <NavBar menu={links} />
      <SearchMenu
        bs-class-controls="mt-5"
        name="image"
        placeholder="search for image"
        selected="image"
        path="./images/IndexBG.png"
        alt="image page background"
        options={links}
      />
      <CategoryBrowser bs-class="mt-5" categories={trendingVideo}>
        Browse trending video category
      </CategoryBrowser>
      <Photos badges={badges} images={trendingPhotos} />
      <CategoryBrowser bs-class="mt-5" categories={royaltyFreeImage}>
        Search Royalty free image category
      </CategoryBrowser>
      <PlanPrompt text="Check all pricing and plans" btnLabel="Check Now" />
      <FooterBar lists={fLinks} social={social} />
    </div>
  );
};
export default ImageComponent;
