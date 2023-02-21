import React, { Component } from 'react'
import FrInput from './FrInput'

export class FrParent extends Component {
      constructor(props) {
        super(props)
        
        this.inputRef=React.createRef()
      }

      handleFocus=()=>{
            this.inputRef.current.focus()
      }

      render() {
            return (
                  <div>
                        <FrInput ref={this.inputRef}/>
                        <button onClick={this.handleFocus}>Focus input</button>
                  </div>
            )
      }
}

export default FrParent