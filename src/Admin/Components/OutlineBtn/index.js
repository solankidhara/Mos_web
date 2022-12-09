import { Button } from "react-bootstrap";
import classes from './OultlineBtn.module.css';

const OutlineBtn = (props) => {
      return (
            <Button className={classes.outlineBtn + " " + props.className}> {props.icon} {props.text}</Button>
      )
}

export default OutlineBtn;