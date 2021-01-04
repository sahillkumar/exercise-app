import React from 'react';
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import CreateExercise from '../exercises/dialogs/create';
import FlareIcon from '@material-ui/icons/Flare';

export default ({exercise,handleTheme})=>{

return(
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" gutterBottom style={{flex:1}}>
                Excercise Database
            </Typography>
            <CreateExercise />
            <IconButton variant="fab" onClick={handleTheme} color="inherit" size="medium">
                <FlareIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
    )
}