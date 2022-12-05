import { Badge } from 'react-bootstrap';
import classes from './BadgeList.module.css';

const BadgeList = (props) => {
      const handleBadgeClick = (e) => {
            props.onClick(e.target.innerHTML);
      };

      return (
            <div>
                  {props.badges.map((badge, ind) => (
                        <Badge
                              pill
                              as="button"
                              className={classes.badges}
                              key={badge.name + ind}
                              bg="none"
                              onClick={handleBadgeClick}
                        >
                              {badge.name}
                        </Badge>
                  ))}
            </div>
      );
};

export default BadgeList;
