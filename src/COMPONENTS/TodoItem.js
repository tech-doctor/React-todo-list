import React, {Component} from 'react'



class TodoItem extends Component {
    
   getStyle = () => {
      return {
         padding: '1px',
         textDecoration: this.props.result.completed ?
         'line-through' : 'none',
         opacity:  this.props.result.completed ?
         '0.7' : '1',
         
      }
   }  

   render(){
      const {id, title,} = this.props.result; 
      return( 
         <div style={this.getStyle()}>
            <p>
               <input 
                  type='checkbox' 
                  onChange= {e => {this.props.markComplete.bind(this, id)(e);
                  this.props.completedLength(e)} }
                 // style={this.getStyle()}
                  checked= {this.props.result.completed}
               /> 
               {''}
               {title} 
               <button 
                  style = {btnStyle}
                  onClick = {e => {this.props.deleteTodo.bind(this, id)(e); this.props.deleteLength.bind(this,id)(e)}}>
                  x
               </button>
            </p>  
         </div>
        )
      
    }
}

const btnStyle = {
   background: 'white',
   color: 'black',
   border: 'none',
   padding:'5px 8px',
   cursor:'pointer',
   float:'right',
   fontSize:'15px'
}

export default TodoItem;