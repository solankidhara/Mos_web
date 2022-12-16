import PromoCard from "../../Components/Cards/PromoCard";
import HighlightImages from "../../Components/common/HighlightImages/HighlightImages";
import NavBar from "../../Components/common/NavBar/NavBar";
import PromoContent from "../../Components/common/PromoContent/PromoContent";
import SearchMenu from "../../Components/common/SearchSec/Search";
import hilights from "../../Components/constance/hilights";
import CategoryBrowser from "../../Components/common/CategoryBrowser/CategoryBrowser";
import trendingVideo from "../../Components/constance/trending-video-index";
import IndexFooter from "../../Components/common/IndexFooter/IndexFooter";
import links from "../../Components/constance/navLinks";

const HomePage = () => {
  return (
    <div className="g-0 container-fluid">
      <NavBar menu={links} />
      <SearchMenu
        name="video"
        placeholder="search for video footage"
        selected="video"
        path="./images/IndexBG.png"
        alt="home page background"
        options={links}
        index
      />
      <PromoCard index>
        <PromoContent text="Get Your Free Videos Footage and Images" btn-text="Join Now" index />
      </PromoCard>
      <HighlightImages hilights={hilights} bs-class="my-4" />
      <CategoryBrowser categories={trendingVideo}>Browse trending video category</CategoryBrowser>
      <IndexFooter imgPath="./images/IndexFooter.png" title="Discover royalty free video footage, images, vector and illustration">
        Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text
        Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text
        Sample text Sample text Sample text Sample text Sample text Sample text Sample text
      </IndexFooter>
    </div>
  );
};

export default HomePage;
