import classes from './CategoryImage.module.css';

const CategoryImage = (props) => {
      return (
            <div className={classes.thumbnail}>
                  <div className="d-flex flex-column justify-content-center">
                        <div className={classes['tn-img']}>
                              <img alt={props.title + ' thumbnail'} src={props.thumbnail} />
                        </div>
                        <p className={classes['thumbnail-title']}>{props.title}</p>
                  </div>
            </div>
      );
};

export default CategoryImage;
