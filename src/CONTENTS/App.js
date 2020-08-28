
import React, { Component } from 'react'
import Form from '../COMPONENTS/Form'
import Todo from '../COMPONENTS/Todo'
import Header from '../COMPONENTS/Header'
import  uuid  from 'uuid/dist/v4'


class App  extends Component  {
    
   constructor(props){
      super(props);

        this.state = {
            todo: [],
            length: ' No items yet '    
         }
      
   }

   // Handle Submit Button
   handleSubmit = (input, id) => {
      const newTodo = {
        id: uuid(),
        title: input,
        completed: false, 
      } 
      this.setState({todo: [...this.state.todo, newTodo]}) 
   }

   //Length of the item todo on submit 
   handleSubmitLength = () => {
      const length = this.state.todo.length + 1;
      this.setState({
         length: length > 1? 
        `${length} items todo` : 
        `${length} item todo` 
      })
   }

   allLength = () => {
      const length = this.state.todo.length;
      this.setState({
         length: length > 1 ? 
        `${length} items todo` : 
        `${length} item todo` 
      })
   }
  
   //Toggle complete (item check)
   markComplete = (id) => {
      this.setState({todo: this.state.todo.map(data => {
         if(data.id === id) {
           data.completed = !data.completed
         }
         return data;
      })
      })  
   }
    
   //Delete  each Todo
   deleteTodo = (id) => {
      this.setState({todo: [...this.state.todo.filter(
         data => data.id !== id
      )]
      });
   }

   //DELETE  LENGTH
   deleteLength = (id) => {
      const deleteLength = [...this.state.todo.filter(
         data => data.id !== id
      )].length
      this.setState({
         length: deleteLength > 1 ? 
         `${deleteLength} items left` : 
         `${deleteLength} item left`});
   }

   // Delete Completed item(s)
   clearCompleted = () => {
      this.setState({todo: [...this.state.todo.filter(
         data => !data.completed
      )]
      });
   }

   // Number of items left after completion
   completedLength =() => {
      const complete = [...this.state.todo.filter(data => !data.completed )].length;
      this.setState({
         length: complete > 1 ? 
         `${complete} items left` : 
         `${complete} item left`
      });
   }
  
   //Ruturn completed 
   completed = () => {
      this.setState({todo: [...this.state.todo.filter(
         data => data.completed
      )]
      });   
   }

   //Number of items completed
   clickCompletedLength =() => {
      const clickComplete =  [...this.state.todo.filter(data => data.completed)].length;
      this.setState({
         length: clickComplete > 1 ? 
         `${clickComplete} items completed` :
         `${clickComplete} item completed`
      });  
   }

   //Check All
   checkAll = () => {
      this.setState({todo: this.state.todo.map(
         data => {data.completed = !data.completed
         return data}
         )
      })
   }

   All = () => {
      this.setState({todo: this.state.todo.map(
         data => {data.completed = !true
         return data}
         )
      })
   }

   render() {
      const {todo} = this.state;
      return(
         <div className ="app">
            <div className='header'>
              <Header/>
            </div>
            <div className="form">
               <Form handleSubmit = {this.handleSubmit}
                  handleSubmitLength = {this.handleSubmitLength}
               />
            </div>
            <div>
               <Todo 
                  todos = {todo} 
                  markComplete={this.markComplete}
                  deleteTodo ={this.deleteTodo}
                  checkAll={this.checkAll}
                  clearCompleted={this.clearCompleted}
                  completed = {this.completed}
                  todoLength = {this.state.length}
                  completedLength = {this.completedLength}
                  clickCompletedLength = {this.clickCompletedLength}
                  All = {this.All}
                  allLength = {this.allLength}
                  deleteLength = {this.deleteLength}
               /> 
            </div>
         </div>
      )   
   }

    
} 



export default App