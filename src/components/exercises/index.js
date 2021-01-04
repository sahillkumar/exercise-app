import {IconButton, Grid, Paper, Typography,List,ListItem,ListItemText,ListItemSecondaryAction} from '@material-ui/core';
import React from 'react';
import { Delete, Edit } from '@material-ui/icons';
import Form from './Forms'
import { withStyles } from '@material-ui/core/styles';
import {withContext} from '../../context'

const styles=theme=>({
    paper:{
        padding:30,
        overflowY:'auto',
        [theme.breakpoints.up('sm')]:{
            marginTop:5,
            height:'calc(100% - 10px)',
        },
        [theme.breakpoints.down('xs')]:{
            height:"100%"
        }
    },
   
    '@global':{
        'html,body,#root':{
            height:'100%'
        }
    },
    container:{
        [theme.breakpoints.up('sm')]:{
            height:"calc(100% - 50px - 64px)"
        },
        [theme.breakpoints.down('xs')]:{
            height:"calc(100% - 48px - 56px)"
        }
    },
    item:{
        [theme.breakpoints.down('xs')]:{
            height:"50%"
        },
        [theme.breakpoints.up('sm')]:{
            height:"100%"
        }
    }
  
})

export default withContext(withStyles(styles)(
        ({  exercisesByMuscles,
            onDelete,
            category,
            onSelect,
            muscles,
            onEdit,
            exercise,
            classes,
            onSelectEdit,
            editMode,
            exercise:{
                title='WELCOME FOLKS !!',
                id,
                description='SELECT AN EXERCISE FROM LEFT PANEL FOR PREVIEW'
            }})=>
    <Grid container className={classes.container}>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                {exercisesByMuscles.map(([group,exercises])=>
                    !category || category===group 
                    ?          
                        <React.Fragment key={group}>
                            <Typography variant="h6" style={{textTransform:'capitalize'}}>
                                {group}
                            </Typography>
                            <List component="ul">
                            {exercises.map(({title,id})=>
                                <ListItem key={id} button onClick={()=>onSelect(id)}>
                                    <ListItemText primary={title} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={()=>onSelectEdit(id)}>
                                            <Edit/>
                                        </IconButton>
                                        <IconButton onClick={()=>onDelete(id) }>
                                            <Delete/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )} 
                            </List>
                        </React.Fragment>
                    :null
                )}
            </Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>{title}</Typography>
                {!editMode
                ?<Typography variant="subtitle2" >{description}</Typography>  
                :  <Form key={id} muscles={muscles} onSubmit={onEdit} exercise={exercise}/>
                }
            </Paper>
        </Grid>
    </Grid>
))