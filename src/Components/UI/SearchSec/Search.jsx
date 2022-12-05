import SearchControls from '../SearchControls/SearchControls';
import classes from './Search.module.css';

const Search = (props) => {
      return (
            <div
                  style={props.index ? { height: '550px' } : { height: '403px' }}
                  className={classes['browse-sec']}
            >
                  <img className="img-fluid w-100 h-100" alt="background" src={props.path} />
                  <SearchControls
                        bs-class={props['bs-class-controls']}
                        name={props.name}
                        placeholder={props.placeholder}
                        selected={props.selected}
                        options={props.options}
                  />
            </div>
      );
};

export default Search;
