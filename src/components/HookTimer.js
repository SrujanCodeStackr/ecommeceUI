import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
      
      const [timer,setTimer] = useState(0)
      const inputRef = useRef()

      useEffect(()=>{
            inputRef.current = setInterval(()=>{
                  setTimer(prev=>prev+1)
            },1000) 
            return ()=>{
                  clearInterval(inputRef.current)
            }
      },[])

      return (
            <div>
                  Hook Timer {timer}
                  <button onClick={()=>{clearInterval(inputRef.current)}}>reset</button>
            </div>
      )
}

export default HookTimer