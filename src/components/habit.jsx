import React, { PureComponent } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';


class Habit extends PureComponent {    
    componentDidMount(){
        console.log(`${this.props.habit.name} mounted`)
    }
    componentWillUnmount(){
        console.log(`${this.props.habit.name} unmounted`)
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {  
        this.props.onDelete(this.props.habit);        
    };
    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <Card sx={{display:'flex', alignItems:'center', p:3, mt:1}}>
                    <Box sx={{ flexGrow: 1 }}>
                        <h3 className="habit-name">{name}</h3>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', ml:1}}>
                        
                        
                    
                        <Avatar sx={{ bgcolor: blue[700] }}>{count}</Avatar>
                
                        <ButtonGroup variant="outlined" sx={{ml:1}}>
                            <Button onClick={this.handleIncrement}><AddIcon /></Button>                
                            <Button onClick={this.handleDecrement}><RemoveIcon /></Button>                
                            <Button onClick={this.handleDelete}><DeleteIcon /></Button>
                        </ButtonGroup>
                    
                    </Box>
                </Card>
                
                
                
                
                
            </li>
        );
    }
}

export default Habit;