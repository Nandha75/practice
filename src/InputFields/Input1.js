import React from "react";
import TextField from '@mui/material/TextField';

const Input1 = ({ name, InputChange }) => {
  return (
    <div>
      <TextField size="small" label="Input 1" variant="outlined" type="number" name={name}  onChange={InputChange} />
    </div>
  );
};

export default Input1;
