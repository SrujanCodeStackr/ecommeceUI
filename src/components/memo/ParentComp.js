import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import ReguComp from './ReguComp'

class ParentComp extends Component {

      constructor(props) {
        super(props)
      
        this.state = {
           name:"srujan"
        }
      }
      componentDidMount() {
            setInterval(()=>{
                  this.setState({name:"srujan"})
            },2000)
      }

  render() {
      console.log("Parent Component")
    return (
      <div>
            <ReguComp name={this.state.name}/>
            <PureComp name={this.state.name} />
            <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp