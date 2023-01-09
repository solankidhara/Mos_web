import { useNavigate } from 'react-router-dom';
import classes from './PhotoList.module.css';

const PhotoList = (props) => {

      const navigate = useNavigate()

      const handleThumbImage = (id) => {
            navigate("/frame/" + id);
      };
        
      return (
            <div className="mt-3 d-flex flex-wrap justify-content-center">
                  {props.images.slice(0, 20).map((image, index) => (
                        <div key={index} className={classes['img-container']} onClick={() => handleThumbImage(image._id)}>
                              <img alt="trending" src={image.thumbFile} width={318} height={200}/>
                        </div>
                  ))}
            </div>
      );
};
export default PhotoList;
