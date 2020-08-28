import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <div style = {{fontFamily: 'Arial',  textAlign: 'center'}}>
               {/* <span>.com</span> */}
               <em><h1 className ='heading'>CodingTheSmartWay</h1></em>
            </div>
            <div style={{fontFamily:"Arial"}}>
                <h3 className='heading'>React Todo App</h3>
            </div>
            </div>
        )
    }
}

export default Header
