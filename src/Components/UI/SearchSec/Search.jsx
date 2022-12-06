import SearchControls from '../SearchControls/SearchControls';
import classes from './Search.module.css';

const SearchMenu = (props) => {
      return (
            <div
                  style={props.index ? { height: '550px' } : { height: '403px' }}
                  className={classes['browse-sec']}
            >
                  {props.alt !== 'none' && (
                        <img className="img-fluid w-100 h-100" alt={props.alt} src={props.path} />
                  )}
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

export default SearchMenu;
