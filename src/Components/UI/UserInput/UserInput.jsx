import { Form } from 'react-bootstrap';
import classes from './UserInput.module.css';

const UserInput = (props) => {
      return (
            <Form.Control
                  className={classes.field + ' ' + props['bs-class']}
                  type={props.type}
                  placeholder={props.placeholder}
                  name={props.name}
            />
      );
};

export default UserInput;
