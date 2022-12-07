import FooterList from '../../Layout/FooterList/FooterList';
import IconButton from '../IconButton/IconButton';
import classes from './FooterBar.module.css';

const FooterBar = (props) => {
      return (
            <div className={classes.container}>
                  {props.lists.map((list, index) => (
                        <div className={classes.lists} key={list.title + index}>
                              <FooterList list={list} />
                        </div>
                  ))}
                  <div
                        className={
                              'flex-md-column align-items-center ' +
                              classes.buttons
                        }
                  >
                        <div className={classes.icons}>
                              {props.social.map((sm, index) => (
                                    <IconButton key={sm + index} type="button"></IconButton>
                              ))}
                        </div>
                        <select defaultValue="language">
                              <option value="language">Language</option>
                        </select>
                  </div>
            </div>
      );
};

export default FooterBar;
