import React, { PureComponent } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import FactCheckIcon from '@mui/icons-material/FactCheck';

class Navbar extends PureComponent {
    render() {
        return (
            <Box sx={{bgcolor:blue[100], p:3}}>
                <Container fixed>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Box>
                            <Avatar sx={{ bgcolor: blue[700], mr:1 }} variant="rounded">
                                <FactCheckIcon />
                            </Avatar>
                        </Box>
                        <Box>
                            <h1>HABIT TRACKER</h1>
                        </Box>
                        <Box>
                            <Avatar sx={{ bgcolor: blue[700], ml:1 }} >{this.props.totalCount}</Avatar>
                        </Box>
                    </Box>                    
                </Container>                
            </Box>
        );
    }
}

export default Navbar;