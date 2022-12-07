import { Badge } from 'react-bootstrap';
import classes from './BadgeList.module.css';

const BadgeList = (props) => {
      const handleBadgeClick = (e) => {
            props.onClick(e.target.innerHTML);
      };

      return (
            <div>
                  {props.badges.map((badge, index) => (
                        <Badge
                              pill
                              as="button"
                              className={classes.badges}
                              key={badge.name + index}
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
