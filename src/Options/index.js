import React from "react";
import Add from "./addition";
import Subtraction from "./subtract";
import Multiplication from "./multiple";
import Divide from "./division";
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';


const Options = ({ OptionChange, selectedOption }) => {
  return (
    <div>
      <Grid container spacing={1}>
        <RadioGroup row>
          <Add name="operation" value="add" checked={selectedOption === "add"} OptionChange={OptionChange} />
          <Subtraction name="operation" value="subtract" checked={selectedOption === "subtract"} OptionChange={OptionChange} />
          <Multiplication name="operation" value="multiply" checked={selectedOption === "multiply"} OptionChange={OptionChange} />
          <Divide name="operation" value="divide" checked={selectedOption === "divide"} OptionChange={OptionChange} />
        </RadioGroup>
      </Grid>
    </div>
  );
};

export default Options;
