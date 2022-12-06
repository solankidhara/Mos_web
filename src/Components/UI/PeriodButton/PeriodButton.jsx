import { Button } from 'react-bootstrap';
import classes from './PeriodButton.module.css';

const PeriodButton = (props) => {
      return (
            <div className={classes.my}>
                  <Button
                        className={props.active ? classes.active : classes.passive}
                        onClick={() => {
                              props.onClick(true);
                        }}
                  >
                        Monthly
                  </Button>
                  <Button
                        className={!props.active ? classes.active : classes.passive}
                        onClick={() => {
                              props.onClick(false);
                        }}
                  >
                        Yearly
                  </Button>
            </div>
      );
};

export default PeriodButton;
