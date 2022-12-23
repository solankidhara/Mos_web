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

import VideoJS from "../../Components/common/Video-player";
import { useRef } from "react";
import HoverPlayVideo from "../../Components/common/Video-player/HoverPlayVideo";

const HomePage = () => {
  const playerReference = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    controlBar: {
      pictureInPictureToggle: false,
    },
    sources: [
      {
        src: "http://localhost:3000/video/japan.mp4",
        type: "video/mp4",
      },
    ],
  };

  const playerReady = (player) => {
    playerReference.current = player;

    // handling video player
    // player.on("waiting", () => {
    //   videojs.log("Video Player is waiting");
    // });

    // player.on("dispose", () => {
    //   videojs.log("Video player will dispose");
    // });
    
    // player.on("mouseover", () => {
    //   videojs.log("Video player will dispose");
    // });
  };

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
      <div className="d-flex justify-content-center">
        <div style={{ height: "400px", width: "600px" }}>
          <VideoJS options={videoJsOptions} onReady={playerReady} />
        </div>
      </div>

      <div>
        <HoverPlayVideo />
      </div>
    </div>
  );
};

export default HomePage;
