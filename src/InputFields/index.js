import React from 'react';
import Input1 from './Input1';
import Input2 from './Input2';
import Grid from '@mui/material/Grid';


const InputFields = ({ InputChange }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Input1 name="input1" placeholder="Input 1" InputChange={InputChange} />
        </Grid>
        <Grid item xs={2}>
          <Input2 name="input2" placeholder="Input 2" InputChange={InputChange} />
        </Grid>
      </Grid>
    </div>
  );
}

export default InputFields;
