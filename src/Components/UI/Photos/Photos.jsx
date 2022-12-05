import { useState } from 'react';
import PhotoList from '../../Layout/PhotoList/PhotoList';
import BadgeList from '../Badges/BadgeList';
import classes from './Photos.module.css';

const Photos = (props) => {
      const [cat, setCat] = useState('all');
      const handleBadgeClick = (name) => {
            setCat(name);
      };

      let IMGS = props.images;

      if (cat !== 'all') {
            IMGS = props.images.filter((img) => img.category === cat);
      }

      return (
            <div className={'mt-5 ' + classes.container}>
                  <div className={classes.pad}>
                        <h6 className={classes.heading}>Trending Photos</h6>
                        <BadgeList badges={props.badges} onClick={handleBadgeClick} />
                        <PhotoList images={IMGS} />
                  </div>
            </div>
      );
};

export default Photos;
