import React from "react";
import Radio from '@mui/material/Radio';


const Multiplication = ({ value, checked, OptionChange }) => {
  return (
    <div>
      <Radio value={value} checked={checked} onChange={OptionChange} />
      <label>Multiplication</label>
    </div>
  );
};

export default Multiplication;
