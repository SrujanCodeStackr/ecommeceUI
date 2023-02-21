import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const CallBack = () => {

      const [age,setAge]= useState(25)
      const [salary,setSalary]=useState(15000)

      const incrimentAge = useCallback(()=>{
            setAge(age+1)
      },[age])

      const incrimentSalary = useCallback(()=>{
            setSalary(salary+1000)
      },[salary])

  return (
    <div>
      <Title/>
      <Count text='age' count={age}/>
      <Button text='age' handleClick={incrimentAge}/>
      <Count text='salary' count={salary}/>
      <Button text ='salary' handleClick={incrimentSalary}/>
    </div>
  )
}

export default CallBack