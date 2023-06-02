import React from "react";
import Radio from '@mui/material/Radio';

const Subtraction = ({ value, checked, OptionChange }) => {
  return (
    <div>
      <Radio value={value} checked={checked} onChange={OptionChange} />
      <label>Subtraction</label>
    </div>
  );
};

export default Subtraction;
