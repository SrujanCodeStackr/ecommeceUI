import React, { Component } from 'react'
import './count.css'

class CountClass extends Component {

    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }

    componentWillUnmount(){
        this.clearinterval()
    }

    handleInput=(e)=>{
        this.clearinterval()
        this.setState({
            count:parseInt(e.target.value)
        })
    }

    countUp=()=>{
        this.clearinterval()
        this.interval =setInterval(()=>{
            this.setState((prev)=>({
                count:parseInt(prev.count)+1
            }))
        },1000)
    }

    countDown=()=>{
        this.clearinterval()
        this.interval=setInterval(() => {
            if (this.state.count>0) {
                this.setState((prev)=>({
                    count:parseInt(prev.count)-1
                })) 
            }else{
                this.clearinterval()
            }
        }, 1000);
    }

    pause=()=>{ 
        this.clearinterval()
    }

    reset=()=>{
        this.clearinterval()
        this.setState((prev)=>({
            count:0
        }))
    }

    clearinterval=()=>{
        clearInterval(this.interval)
    }

  render() {
    return (
      <div className='container'>
       <h3>class component</h3> 
        <div className='count-wrap'>
            {this.state.count}
        </div>
        <br/>
        <label>Type Starting Point:</label><br/>
        <input onChange={this.handleInput} value={this.state.count}/>
        <br/><br/>      
        <div>
            <button onClick={this.countUp}>count-up</button>
            <button onClick={this.countDown}>count-down</button>
            <button onClick={this.pause}>pause</button>
            <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

export default CountClass