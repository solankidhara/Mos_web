import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import badges from '../../constance/search-badges';
import BadgeList from '../Badges/BadgeList';
import Paging from '../Paging/Paging';
import classes from './SearchResultsDisplay.module.css';

const SearchResultsDisplay = (props) => {
      const handleGetBadge = (badgeName) => {
      };

      return (
            <Fragment>
                  <Container className={classes.tags}>
                        <BadgeList badges={badges} onClick={handleGetBadge} />
                  </Container>
                  <div className="py-4 px-3 d-flex justify-content-center flex-wrap">
                        {props.pages.map((img) => (
                              <div className={classes.results}>
                                    <img className="img-fluid" src={img.path} alt="search result" />
                              </div>
                        ))}
                  </div>
                  <Paging total={25} />
            </Fragment>
      );
};

export default SearchResultsDisplay;
