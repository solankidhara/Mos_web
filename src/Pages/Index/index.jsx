import PromoCard from "../../Components/Cards/PromoCard";
import NavBar from "../../Components/common/NavBar/NavBar";
import PromoContent from "../../Components/common/PromoContent/PromoContent";
import SearchMenu from "../../Components/common/SearchSec/Search";
import links from "../../Components/constance/navLinks";
import fLinks from "../../Components/constance/footerList";
import social from "../../Components/constance/socialMedia";
import { useRef } from "react";
// import VideoJS from "../../Components/common/Video-player";
// import HoverPlayVideo from "../../Components/common/Video-player/HoverPlayVideo";
import VideoCategory from "../../Components/common/CategoryBrowser/VideoCategory";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import Photos from "../../Components/common/Photos/Photos";
import badges from "../../Components/constance/search-badges";
import trendingPhotos from "../../Components/constance/trending-photos";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addImages } from "../../Redux/Slice/image-slice";
import { useEffect } from "react";

const HomePage = () => {
  const playerReference = useRef(null);

  const dispatch = useDispatch()

  const trendingVideos = useSelector((state) => state.images.imgList);

  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/users/default-files" ,{
        tag:"",
        contentType:"video"
      });
      dispatch(addImages(data));
    })();
  }, []);

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
        src: "https://mos-project-374210.el.r.appspot.com/video/japan.mp4",
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
      {/* <HighlightImages hilights={hilights} bs-class="my-4" /> */}
      <VideoCategory >
        <h2 className="text-center">Browse trending video category</h2>
        </VideoCategory>  
        <Photos badges={badges} videos={trendingVideos} title="Trending Videos"/>
      
      {/* <IndexFooter imgPath="./images/IndexFooter.png" title="Discover royalty free video footage, images, vector and illustration">
        Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text
        Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text
        Sample text Sample text Sample text Sample text Sample text Sample text Sample text
      </IndexFooter> */}

      <FooterBar lists={fLinks} social={social} />

      {/* <div className="d-flex justify-content-center">
        <div style={{ height: "400px", width: "600px" }}>
          <VideoJS options={videoJsOptions} onReady={playerReady} />
        </div>
      </div>

      <div>
        <HoverPlayVideo />
      </div> */}
    </div>
  );
};

export default HomePage;
