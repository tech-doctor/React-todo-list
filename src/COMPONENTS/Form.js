import React, {Component} from 'react'

class Form extends Component {
    
   constructor(props){
      super(props);
         this.state = {
            input:''
         }
   }

   handleChange = (event) => {
      const {name, value} = event.target
      this.setState(
         {[name]: value}
      )
   }

   onFormSubmit = (event) => {
      event.preventDefault();
      this.setState({input: ''});
      this.props.handleSubmit(this.state.input)
   }

   render(){
      const {input} = this.state;
      return( 
         <form onSubmit = { e => { this.onFormSubmit(e); this.props.handleSubmitLength(e)}}>
            <input 
               type ="text" 
               id='input' 
               name = 'input'
               placeholder='Add Todo...'
               value= {input}
               onChange = {this.handleChange}
            />
               
         </form>
      )
    }
}



export default Form;