import React, {useState } from 'react'
import FormInput from '../../components/formInput/FormInput'
import './form.css'

const Form = () => {

  const [values,setValues]=useState({
    username:"",
    email:"",
    firstname:"",
    lastname:"",
    password:"",
    confirmPassword:"",
  })
  
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  
const inputs =[
  {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      errorMsg:"username should be 3-16 characters and shouldn't include special character",
      label:"Username",
      pattern:`^[A-Za-z0-9]{3,16}$`,
      required:true

  },
  {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMsg:"provide an valid email address",
      label:"Email",
      required:true
  },
  {
      id:3,
      name:"firstname",
      type:"text",
      placeholder:"first name",
      errorMsg:"",
      label:"Firstname"
  },
  {
      id:4,
      name:"lastname",
      type:"text",
      placeholder:"last name",
      errorMsg:"",
      label:"Lastname"
  },
  {
      id:5,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMsg:"password should be 8-20 characters and must contain 1 number 1 special character and upper case letter",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{8,20}$`, 
      required:true
  },
  {
      id:6,
      name:"confirmPassword",
      type:"password",
      placeholder:"confirm password",
      errorMsg:"password does not matched",
      label:"Confirm Password",
      pattern:values.password,
      required:true
  }
 ]
  return (
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <h1>Register Form</h1>
          {inputs.map(input=>(<FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>))}   
          <button>Register</button>
        </form>
    </div>
  )
}

export default Form