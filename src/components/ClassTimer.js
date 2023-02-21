import React, { Component, createRef } from 'react'

class ClassTimer extends Component {
      intial = 0
      intervalRef = createRef(null)
      constructor(props) {
        super(props)
        this.state = {
            count:this.intial,
            timer:this.intial
        }
      }

      handleInput = (e)=>{
            this.setState({
                  count:e.target.value
            })
      }
      
      handleStart = ()=>{
            this.setState({
                  timer:this.state.count
            }) 
            this.intervalRef = setInterval(() => {
                  this.setState(prevState=>({
                        timer:prevState.timer-1
                  }))
            },2000)
      }
      
      handleReset=()=>{
            clearInterval(this.intervalRef)  
            this.setState({
                  count:this.intial,
                  timer:this.intial
            })
      }
      
      componentWillUnmount(){
            clearInterval(this.intervalRef)
      }
            
      render() {
            // console.log(this.state.timer)
            return (
                  <div>
                        <div>{this.state.timer}</div>
                        <input type='number' value={this.state.count} onChange={this.handleInput} />
                        <button onClick={this.handleStart}>start</button>
                        <button onClick={()=>clearInterval(this.intervalRef)}>stop</button>
                        <button onClick={this.handleReset}>reset</button>
                  </div>
            )
      }
}

export default ClassTimer