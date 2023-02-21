import React, { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
  const [focus,setFocus] = useState(false);
  const {label,errorMsg,onChange,id,...inputprops} = props;
  const handleFocus=(e)=>{
    setFocus(true);
  }
  return (
    <div className='formInput'>
        <label>{label}:</label>
        <input {...inputprops} onChange={onChange} onBlur={handleFocus} 
        focused={focus.toString()} 
        onFocus={()=>inputprops.name==="confirmPassword" && setFocus(true)}/>
        <span>{errorMsg}</span>
    </div>
  )
}

export default FormInput