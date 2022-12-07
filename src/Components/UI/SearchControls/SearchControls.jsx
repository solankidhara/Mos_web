import { Button, Form } from 'react-bootstrap';
import classes from './SearchControls.module.css';

const SearchControls = (props) => {
      return (
            <div className={props['bs-class'] + ' ' + classes['browse-controls']}>
                  <select className="text-center" defaultValue={props.selected}>
                        {props.options.map((option, index) => (
                              <option
                                    key={index}
                                    value={option.name.toLowerCase().replace(/\s/g, '')}
                              >
                                    {option.name}
                              </option>
                        ))}
                  </select>
                  <Form.Control
                        className={classes.search}
                        name={props.name}
                        placeholder={props.placeholder}
                  />
                  <Button type="button" className={classes.btn}></Button>
            </div>
      );
};

export default SearchControls;
