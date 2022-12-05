import FooterList from '../../Layout/FooterList/FooterList';
import IconButton from '../IconButton/IconButton';
import classes from './FooterBar.module.css';

const FooterBar = (props) => {
      return (
            <div className={classes.container}>
                  {props.lists.map((list, ind) => (
                        <div className={classes.lists} key={list.title + ind}>
                              <FooterList list={list} />
                        </div>
                  ))}
                  <div className={classes.buttons}>
                        <div className={classes.icons}>
                              {props.social.map((sm, ind) => (
                                    <IconButton key={sm + ind} type="button"></IconButton>
                              ))}
                        </div>
                        <select defaultValue='language'>
                              <option value='language'>Language</option>
                        </select>
                  </div>
            </div>
      );
};

export default FooterBar;
