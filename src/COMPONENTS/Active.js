import React, { Component } from 'react'

export class Active extends Component {
    render() {
        return (
            <div>
                <button 
                  className= 'btn'
                  onClick = { e => {this.props.All(e);
                  this.props.allLength(e)}}>
                  All
                </button>
                <button 
                  className= 'btn'>
                  Active
                </button>
                <button 
                  className= 'btn'
                  onClick= {e =>{this.props.completed(e); 
                  this.props.clickCompletedLength(e)}}>
                  Completed
                </button>
                <button 
                  className= 'float'
                  onClick={e =>{this.props.clearCompleted(e); 
                  this.props.completedLength(e)}}>
                  Clear Completed
                </button>
            </div>
        )
    }
}


export default Active
