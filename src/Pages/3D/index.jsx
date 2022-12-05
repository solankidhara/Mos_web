import PromoCard from '../../Components/Cards/PromoCard';
import fLinks from '../../Components/constance/footerList';
import links from '../../Components/constance/navLinks';
import royaltyFreeImage from '../../Components/constance/royaltyFreeImage';
import social from '../../Components/constance/socialMedia';
import CategoryBrowser from '../../Components/UI/CategoryBrowser/CategoryBrowser';
import FooterBar from '../../Components/UI/FooterBar/FooterBar';
import NavBar from '../../Components/UI/NavBar/NavBar';
import PlanPrompt from '../../Components/UI/Plans/PlansPrompt';
import PromoContent from '../../Components/UI/PromoContent/PromoContent';
import Search from '../../Components/UI/SearchSec/Search';

const Page3D = () => {
      return (
            <div className="g-0 container-fluid">
                  <NavBar menu={links} />
                  <Search
                        bs-class-controls="mt-5"
                        name="image"
                        placeholder="search for image"
                        selected="3d"
                        path="./images/3dBGCrop.png"
                        options={links}
                  />
                  <PromoCard>
                        <PromoContent text="OBJ file for all your 3D Model Needs" />
                  </PromoCard>
                  <div style={{ margin: '14vh 0' }}>
                        <CategoryBrowser categories={royaltyFreeImage}>
                              Browse trending video category
                        </CategoryBrowser>
                  </div>
                  <PlanPrompt text="Check all pricing and plans" btnLabel="Check Now" />
                  <FooterBar lists={fLinks} social={social} />
            </div>
      );
};

export default Page3D;
