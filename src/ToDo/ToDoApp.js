import React, { useState } from 'react'

const ToDoApp = () => {
      const [input , setInput]=useState("")
      const [data,setData]=useState([])

      const handleInput=(e)=>{
            setInput(e.target.value)
      }
      console.log(input)
      const handldeClick = ()=>{
            const list = {
                  task:input,
                  id:Date.now()
            }
            setData(prev=>prev.concat(list))
            setInput("")
      }
      console.log(data)
  return (
    <div>
      <ol>               
      {data.length!==0?data.map((item)=>{
            return (
                  <div key={item.id}>
                        <li>{item.task}</li>
                  </div>
            )
      }):null}
      </ol>
      <input value={input} placeholder="add todo" onChange={handleInput}/>
      <button onClick={handldeClick}>add</button>
    </div>
  )
}

export default ToDoApp