import React, { Component } from 'react'

export class RenderProps extends Component {

      constructor(props) {
            super(props)
            this.state = {
               count:0
            }
          }

      handleCount=()=>{
            this.setState(prev=>{
                  return {count:prev.count+1}
            })
      }

      render() {
            return (
                  <div>
                        {this.props.children(this.state.count,this.handleCount)}
                  </div>      
            )
      }
}

export default RenderProps