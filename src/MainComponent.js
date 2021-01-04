import React from 'react';
import { Header,Footer } from './components/layout';
import Excercises from './components/exercises';
import {muscles,exercises} from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from './context';


class MainComponent extends React.Component {

  state = { exercises,
            exercise:{}
          }

  getExercises(){
    const initExercise=muscles.reduce((exercises,category)=>({
      ...exercises,
      [category]:[]
    }),{})

    return Object.entries(this.state.exercises.reduce((exercises,exercise)=>{
      const {muscles} = exercise
      exercises[muscles]=[...exercises[muscles],exercise]
      return exercises
    },initExercise))
  }

  onCategorySelect=category=>{
    this.setState({
      category
    })
  }

  handleSelectedExercise=id=>{
    this.setState(({exercises})=>({
      exercise:exercises.find((exercise)=>exercise.id===id),
      editMode:false
    }))
 
  }

  handleDelete=id=>{
    this.setState(({exercises,exercise,editMode})=>({
      exercises:exercises.filter(ex=>ex.id!==id),
      editMode:exercise.id===id?false:editMode,
      exercise:exercise.id===id?{}:exercise
    }))

  }

  onCreate=exercise=>{
    this.setState(({exercises})=>({
      exercises:[...exercises,exercise]
    })
    )}
  
  handleSelectEdit =id=>{
    this.setState(({exercises})=>({
      exercise:exercises.find((exercise)=>exercise.id===id),
      editMode:true
    }))
  }

  handleEdit= exercise=>{
    this.setState(({exercises})=>({
      exercises:[...exercises.filter(ex=>ex.id!==exercise.id),exercise],
      exercise
    }))
  }

  getContext = ()=>({
    muscles,
    exercisesByMuscles:this.getExercises(),
    ...this.state,
    onCreate:this.onCreate,
    onSelect:this.handleSelectedExercise,
    onDelete:this.handleDelete,
    onSelectEdit:this.handleSelectEdit,
    onEdit:this.handleEdit,
    onCategorySelect:this.onCategorySelect
  })

  render() { 
    return ( 
      <Provider value={this.getContext()}>
        <>
          <CssBaseline>
          <Header handleTheme={this.props.handleTheme}/>
          <Excercises/>
          <Footer/>
          </CssBaseline>
        </>
      </Provider>
     );
  }
}
export default MainComponent;
