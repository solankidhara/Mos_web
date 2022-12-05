import classes from './PhotoList.module.css';

const PhotoList = (props) => {
      return (
            <div className="mt-3 d-flex flex-wrap justify-content-center">
                  {props.images.map((image, ind) => (
                        <div key={ind} className={classes['img-container']}>
                              <img alt="trending" src={image.path} />
                        </div>
                  ))}
            </div>
      );
};
export default PhotoList;
