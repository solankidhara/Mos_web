import { useState } from 'react';
import PhotoList from '../../Layout/PhotoList/PhotoList';
import VideoList from '../../Layout/VideoList';
import BadgeList from '../Badges/BadgeList';
import classes from './Photos.module.css';

const Photos = ({images ,title ,badges , videos}) => {
      const [cat, setCat] = useState('all');
      const handleBadgeClick = (name) => {
            setCat(name);
      };
  
      if (cat !== 'all') {
            images = images?.filter((img) => img.category === cat);
      }

      return (
            <div className={'mt-5 ' + classes.container}>
                  <div className={classes.pad}>
                        <h6 className={classes.heading}>{title}</h6>
                        <BadgeList badges={badges} onClick={handleBadgeClick} />
                        {images && <PhotoList images={images} />}
                        {videos && <VideoList videos={videos} />}

                  </div>
            </div>
      );
};

export default Photos;
