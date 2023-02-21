import React, { useState } from 'react'

const Filter = () => {
    const prod=['All Items','Rice Items','Pizza','Roti Section','Soft Drinks']
    const [filter,setFilter]=useState('All Items')
  return (
    <div>
        <center className='mt-2'>
            <span className='h4 m-2'>Filter :</span>
            <select name='filter' onChange={(e)=>setFilter(e.target.value)}>
                {prod.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
            <button className='btn btn-sm btn-primary m-2' onClick={()=>console.log(filter)}>search</button>
        </center>

    </div>
  )
}

export default Filter