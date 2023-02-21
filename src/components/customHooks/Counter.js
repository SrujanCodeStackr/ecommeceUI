import React from 'react'
import useCounter from './useCounter'

const Counter = () => {
      const [count,incriment,decrement,reset]=useCounter(10,1)
  return (
    <div>
      <div>{count}</div>
      <button onClick={incriment}>incriment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter