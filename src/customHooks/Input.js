import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce';

const Input = () => {
      const [input,setInput] = useState("");
      const debounceValue = useDebounce(input)
      useEffect(()=>{
            console.log(debounceValue)
      },[debounceValue])
  return (
    <div>
      <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default Input