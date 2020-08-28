import React, { Component } from 'react'

export class CheckAll extends Component {
    render() {
        return (
            <div>
                <div style = {{padding: '10px 0 10px 0'}}>
                    <input
                      type = "checkbox"
                      onChange = {e => {this.props.checkAll(e);
                      this.props.completeCheck(e); 
                      this.props.completedLength(e)}} 
                    />
                    {''}
                    {'Check All'}
                    <span style = {itemStyle}>
                      {this.props.todoLength}
                    </span>
                </div>
                <hr/>
            </div>
            
        )
    }
}
const itemStyle = {
    float: 'right'
} 

export default CheckAll
