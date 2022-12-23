import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const Dropdown = ({ name, control, options, defaultValue,...props }) => {
  
    return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue &&options[0]}
        render={({ field, fieldState: { error } }) => (
          <Select
            {...field}
            options={options}
          />
        )}
      />
    </>
  );
};

export default Dropdown;
