import React, { useCallback, useEffect, useRef, useState } from 'react'

const Timer = () => {
      const [count,setCount]=useState(0)
      const [timer,setTimer]=useState(count)
      const stopRef = useRef(null) 

      const handleCount=(e)=>{
            setCount(e.target.value)
      }

      const reset =()=>{
            setCount(0)
            clearInterval(stopRef.current)
      }

      const handleStart = useCallback(() =>{
            setTimer(count)
            stopRef.current = setInterval(()=>{
                  setTimer(prev=>prev-1)
            },2000)
      },[count])
      
      if(timer===0){
            clearInterval(stopRef.current)
      }
      
      return (
            <div>
                  <div>{timer}</div>
                  <input type='number' value={count} onChange={handleCount} />
                  <button onClick={handleStart}>start</button>
                  <button onClick={reset} ref={stopRef}>reset</button>
            </div>
      )
}

export default React.memo(Timer)