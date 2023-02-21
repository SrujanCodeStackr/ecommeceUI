import React, { useState } from 'react'

const useCounter = (intialCount=0,value) => {
  const [count,setCount]=useState(intialCount)
  const incriment =()=>{
      setCount(prev=>prev+value)
  }
  const decrement =()=>{
      setCount(prev=>prev-value)
  }
  const reset = ()=>{
      setCount(intialCount)
  }
  return [count,incriment,decrement,reset]
}

export default useCounter