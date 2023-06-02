import React from "react";
import Radio from '@mui/material/Radio';

const Addition = ({ value, checked, OptionChange }) => {
  return (
    <div>
      <Radio value={value} checked={checked} onChange={OptionChange} />
      <label>Addition</label>
    </div>
  );
};

export default Addition;
