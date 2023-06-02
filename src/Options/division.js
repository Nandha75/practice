import { Radio } from "@mui/material";
import React from "react";

const Division = ({ value, checked, OptionChange}) => {
  return (
    <div>
      <Radio value={value} checked={checked} onChange={OptionChange} />
      <label>Division</label>
    </div>
  );
};

export default Division;
