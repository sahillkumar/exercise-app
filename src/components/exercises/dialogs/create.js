import {Dialog,DialogContent,DialogTitle, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';
import Form from '../Forms'
import {withContext} from '../../../context'

class CreateExercise extends React.Component
{
    state={ open:false }

    handleToggle=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    
    handleSubmit=exercise=>{
        this.handleToggle();
        this.props.onCreate(exercise)
    }

    render(){
        
        const{open}=this.state,
            {muscles}=this.props
        return(
                <React.Fragment >
                   <IconButton variant="fab" onClick={this.handleToggle} color="inherit" size="medium">
                       <Add/>
                   </IconButton>
                    <Dialog open={open} onClose={this.handleToggle} fullWidth maxWidth="sm">
                        <DialogTitle>Add an Exercise</DialogTitle>
                        <DialogContent>
                            <Form muscles={muscles} onSubmit={this.handleSubmit}/>
                        </DialogContent>
                    </Dialog>
                </React.Fragment>
        )
    }
}

export default withContext(CreateExercise);