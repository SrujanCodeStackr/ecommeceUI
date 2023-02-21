import React, { Component } from 'react'

class LifeCycle extends Component {

  constructor(props){
        super(props);
        this.state={
            name:"srujan"
        }
        console.log("constructor");
    }
    
  render() {
    return (
      <div>
        LifeCycle
      </div>
    )
  }
}

export default LifeCycle