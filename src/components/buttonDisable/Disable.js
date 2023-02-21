import React ,{useState} from 'react'
import './disable.css'

const Disable = () => {
    const [input,setInput]=useState("");
    const [display,setDisplay] = useState(false)
    const handleChange=(e)=>{
        setInput(e.target.value)
        if(e.target.value.match("[A-Za-z0-9]{3}") !==null){
          setDisplay(true)
        }else{
          setDisplay(false)
        }
    }
    
  return (
    <div>
        <div>
        userText:
        <input type="text" name='input' onChange={handleChange}/>
        <div>Input : {input}</div>
        {display?<button>submit</button>:null}
        </div>
    </div>
  )
}

export default Disable