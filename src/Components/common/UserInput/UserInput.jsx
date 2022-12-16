import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import classes from "./UserInput.module.css";

const UserInput = ({ name, control, type, placeholder, ...props }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Control
            className={classes.field + " " + props["bs-class"]}
            type={type}
            placeholder={placeholder}
            // name={props.name}
            {...field}
          />
        )}
      />
    </>
  );
};

export default UserInput;
