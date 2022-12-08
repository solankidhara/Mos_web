import badges from '../../Components/constance/image-badges';
import links from '../../Components/constance/navLinks';
import previewDetails from '../../Components/constance/preview';
import related from '../../Components/constance/related';
import BadgeList from '../../Components/UI/Badges/BadgeList';
import NavBar from '../../Components/UI/NavBar/NavBar';
import Preview from '../../Components/UI/Preview/Preview';
import SimilarContent from '../../Components/UI/SimilarContent/SimilarContent';
import fLinks from '../../Components/constance/footerList';
import social from '../../Components/constance/socialMedia';
import FooterBar from '../../Components/UI/FooterBar/FooterBar';

import classes from './index.module.css';
import { Container } from 'react-bootstrap';

const Frame = () => {
      return (
            <div className="g-0 container-fluid">
                  <NavBar menu={links} />
                  <Container>
                  <div className={classes.preview}>
                        <Preview data={previewDetails} />
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
