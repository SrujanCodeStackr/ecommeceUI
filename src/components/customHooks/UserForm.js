import React, { useState } from 'react'
import useInput from './useInput'

const UserForm = () => {
      // const [firstName,setFirstName]=useState('')
      // const [lastName,setLastName]=useState('')
      // custom input hook
      const [firstName,bindFirstName,resetFirstName]=useInput('')
      const [lastName,bindLastName,resetLastName]=useInput('')

      console.log(firstName)
      console.log(lastName)

      const handleSubmit=(e)=>{
            e.preventDefault()
            alert(`hello ${firstName} ${lastName}`)
            resetFirstName()
            resetLastName()
      }
  return (
    <div>
      <form style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}} onSubmit={handleSubmit}>
            <div>
                  <label>firstname:</label>
                  <input type='text' value={firstName} {...bindFirstName}/>    
            </div>
            <div>
                  <label>lastname: </label>
                  <input type='text' value={lastName} {...bindLastName}/>
            </div>
            <button>submit</button>
      </form>
    </div>
  )
}

export default UserForm