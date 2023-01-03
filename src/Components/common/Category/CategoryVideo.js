import { useNavigate } from 'react-router-dom';
import classes from './CategoryImage.module.css';

const CategoryVideo = (props) => {
      const navigate = useNavigate()

      const clickHandler = () => {
        navigate("/video"+"/search/"+props?.title)
      }

      return (
            <div className={classes.thumbnail} onClick={clickHandler}>
                  <div className="d-flex flex-column justify-content-center">
                        <div className={classes['tn-img']}>
                              <img alt={props.title + ' thumbnail'} src={props.thumbnail} width="180" height="180"/>
                        </div>
                        <p className={classes['thumbnail-title']}>{props.title}</p>
                  </div>
            </div>
      );
};

export default CategoryVideo;
