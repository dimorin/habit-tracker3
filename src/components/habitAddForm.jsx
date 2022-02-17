import React, { memo, useRef } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const HabitAddForm = memo((props) => {
    const inputRef = useRef();//React.createRef(); state나 prop 변경시 useRef은 새로 만들어지지 않는다. 처음 한 번만 만들어진다.
    const formRef = useRef();//React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        console.log(name);
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
          {/* <input ref={inputRef} type="text" className="add-input" placeholder="habit" /> */}
          <Grid container>
            <Grid item xs>
                <TextField fullWidth size="small" variant="outlined" inputRef={inputRef} placeholder="Input habit..." />
            </Grid>
            <Grid item>
                <Button  type="submit" variant="contained" sx={{ml:1}}>ADD</Button>
            </Grid>
          </Grid>
          
          
        </form>
    );
});

export default HabitAddForm;

