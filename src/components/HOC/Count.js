import React, { Component } from 'react'
import Hoc from './Hoc'

class Count extends Component {
      
      render() {
            const {count,incriment} = this.props
            return (
                  <div>
                        <button onClick={incriment}>Incriment{count}</button>
                  </div>
            )
      }
}

export default Hoc(Count)