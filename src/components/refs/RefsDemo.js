import React, { Component } from 'react'

class RefsDemo extends Component {
      constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setcbRef=(element)=>{
            this.cbRef=element
        }
      }

      
      componentDidMount(){
            this.inputRef.current.focus()
            console.log(this.inputRef)
            if(this.cbRef){
                  this.cbRef.focus()
            }
            console.log(this.cbRef)
      }

      render() {
      return (
            <div>
                  <input type='text'  ref={this.inputRef}/>
                  <input type='text'  ref={this.setcbRef}/>
            </div>
      )
      }
}

export default RefsDemo