import React, {useState } from 'react'
import './count.css'

const Count = () => {
    const [input,setInput] = useState(0)

    const handleInput=(e)=>{
        setInput(e.target.value)
    }

    const countUp=()=>{
        setInterval(()=>{
            setInput(prev=>parseInt(prev)+1)
        },1000)
    }

    const countDown =()=>{
        setInterval(()=>{
            setInput(prev=>parseInt(prev)-1)
        },1000)
    }

    const reset=()=>{
        cleartimer()
        setInput(0)
    }

    const cleartimer=()=>{
        clearInterval()
    }

  return (
    <div className='container'>
        <h3>functional component</h3>
        <div className='count-wrap'>
            {input}
        </div>
        <br/>
        <label>Type Starting Point:</label><br/>
        <input onChange={handleInput}/>
        <br/><br/>
        <div>
            <button onClick={countUp}>count-up</button>
            <button onClick={countDown}>count-down</button>
            <button >pause</button>
            <button onClick={reset}>reset</button>
        </div>
    </div>
  )
}

export default Count