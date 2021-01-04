import React from 'react';
import { FormControl,MenuItem,Select,InputLabel,Button,TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    }
};


export default withStyles(styles)(class extends React.Component{

    state=this.getInitialState()

    getInitialState(){
        const { exercise } = this.props

        return exercise?exercise:{
                        title:'',
                        description:'',
                        muscles:''
                    }
    }


    handleChange=name=>({target:{value}})=>{
        this.setState({ [name]:value})
    }

    handleSubmit=()=>{
        this.props.onSubmit({
            id:this.state.title.toLocaleLowerCase().replace(/ /g,'-'),
            ...this.state
            })
        }



    render(){
        const {muscles:categories,classes }=this.props,
                {title,description,muscles}=this.state
        return(
            <>
                <form>
                    <TextField label="Title" 
                                value={title}
                                onChange={this.handleChange('title')}
                                fullWidth
                                margin="normal"
                                /><br/>
                    <FormControl fullWidth  margin="normal">
                        <InputLabel >Muscles</InputLabel>
                        <Select value={muscles}onChange={this.handleChange('muscles')}>
                        {categories.map(category=>
                            <MenuItem key={category} value={category}>{category}</MenuItem>
                        )}    
                        </Select>
                    </FormControl><br/>
                    <TextField fullWidth label="Description" multiline rows="2" value={description}
                        onChange={this.handleChange('description')}   margin="normal"
                    />
                    <br/>
                    <Button variant="contained"
                        onClick={this.handleSubmit}
                        className={classes.root} 
                        margin="normal"
                        disabled={!title || !muscles}>
                        {this.props.exercise?'Edit':'Create'}
                        
                    </Button>
                </form>
            
            </>
        )
    }
})

