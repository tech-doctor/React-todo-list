import React, {Component} from 'react'
import TodoItem from './TodoItem'
import CheckAll from './CheckAll'
import Active from './Active'


class Todo extends Component {
   constructor(props){
      super(props) 
         this.state = {
            checked: false
         }
      } 
  
   completeCheck = () => {
      this.setState({checked : !this.state.checked})
   }

    
   render(){
      const {todos} = this.props
         return( 
            <div>
               {todos.map((data, i) => 
               <TodoItem 
                  result = {data} 
                  key={i} 
                  markComplete ={this.props.markComplete}
                  completedLength = {this.props.completedLength}
                  deleteTodo = {this.props.deleteTodo}
                  deleteLength = {this.props.deleteLength}
               />   
               )}
               <hr/>
               <CheckAll 
                  checkAll = {this.props.checkAll}
                  todo= {todos}
                  completeCheck = {this.completeCheck}
                  todoLength = {this.props.todoLength}
                  completedLength = {this.props.completedLength}
               />
               <Active  
                  clearCompleted ={this.props.clearCompleted}
                  completed ={this.props.completed}
                  clickCompletedLength = {this.props.clickCompletedLength}
                  completedLength = {this.props.completedLength}
                  All = {this.props.All}
                  allLength = {this.props.allLength}
               />
            </div>
         )
      
   }
}

export default Todo;