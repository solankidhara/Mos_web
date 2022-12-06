import fLinks from '../../Components/constance/footerList';
import links from '../../Components/constance/navLinks';
import searchResult from '../../Components/constance/searchResult';
import social from '../../Components/constance/socialMedia';
import FooterBar from '../../Components/UI/FooterBar/FooterBar';
import NavBar from '../../Components/UI/NavBar/NavBar';
import PlanPrompt from '../../Components/UI/Plans/PlansPrompt';
import SearchControls from '../../Components/UI/SearchControls/SearchControls';
import SearchResultsDisplay from '../../Components/UI/SearchResultsDisplay/SearchResultsDisplay';
import classes from './index.module.css';

const Search = () => {
      return (
            <div className="g-0 container-fluid">
                  <NavBar menu={links} />
                  <div className={classes.bar}>
                        <SearchControls
                              bs-class={'mt-5'}
                              name={'search'}
                              placeholder={'search for 3D'}
                              selected={'3d'}
                              options={links}
                        />
                  </div>
                  <SearchResultsDisplay pages={searchResult} />
                  <div className="mt-4">
                        <PlanPrompt text="Check all pricing and plans" btnLabel="Check Now" />
                        <FooterBar lists={fLinks} social={social} />
                  </div>
            </div>
      );
};

export default Search;
