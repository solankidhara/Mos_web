import links from "../../Components/constance/navLinks";
import pricing from "../../Components/constance/pricings";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import NavBar from "../../Components/common/NavBar/NavBar";
import Subscription from "../../Components/common/Subscription/Subscription";
import fLinks from "../../Components/constance/footerList";
import social from "../../Components/constance/socialMedia";

const Pricing = () => {
  return (
    <div className="g-0 container-fluid">
      <NavBar menu={links} />
      <Subscription packages={pricing} />
      <div style={{ marginTop: "14vh" }}>
        <FooterBar lists={fLinks} social={social} />
      </div>
    </div>
  );
};

export default Pricing;
