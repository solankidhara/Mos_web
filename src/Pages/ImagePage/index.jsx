import badges from '../../Components/constance/image-badges';
import trendingVideo from '../../Components/constance/trending-video-image';
import CategoryBrowser from '../../Components/UI/CategoryBrowser/CategoryBrowser';
import NavBar from '../../Components/UI/NavBar/NavBar';
import Search from '../../Components/UI/SearchSec/Search';
import Photos from '../../Components/UI/Photos/Photos';
import trendingPhotos from '../../Components/constance/trending-photos';
import royaltyFreeImage from '../../Components/constance/royaltyFreeImage';
import PlanPrompt from '../../Components/UI/Plans/PlansPrompt';
import FooterBar from '../../Components/UI/FooterBar/FooterBar';
import fLinks from '../../Components/constance/footerList';
import links from '../../Components/constance/navLinks';
import social from '../../Components/constance/socialMedia';

const About = () => {
      return (
            <div className="g-0 container-fluid">
                  <NavBar menu={links} />
                  <Search
                        bs-class-controls="mt-5"
                        name="image"
                        placeholder="search for image"
                        selected="image"
                        path="./images/IndexBG.png"
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
export default About;
