import React, { useEffect, useState } from 'react'
import './search.css'

const Search = () => {

     const [data,setData]=useState([]);
     const [input,setInput]=useState("");
     const [newData,setNewData] =useState([])


     useEffect(()=>{
         loadData();
     },[])

     const loadData = async()=>{
         const url = "https://randomuser.me/api/?results=20&amp;inc=name,picture,id,cell&amp;nat=in"
         await fetch(url)
         .then(res=>res.json())
         .then(json=>setData(json.results))
         .catch(err=>console.log(err))
     }

     //  console.log(data)

     const handleInput=(e)=>{
         setInput(e.target.value)
         console.log(input)
     }

     const res = data.filter(ele=>ele.name.first.toUpperCase().includes(input.toUpperCase()))
     //  console.log(res)

     //  console.log("hi",newData)
     
     useEffect(()=>{
        setNewData(res)
     },[input])

  return (
    <div className='search-container'>

        <div className='heading'>
            Messages
        </div>

        <div className='search'>
            <input type="text" placeholder='Search People...' onChange={handleInput} value={input} />
        </div>

        {input.length!==0?<div>{newData.map((e)=>{
            return <div>{e.name.first}</div>
        })}</div>: 
        <div className='items'>
        {data.map((ele)=>{
            return (<ul key={ele.name.first}>
                <li >{ele.name.first}</li></ul>)
        })}
        </div>}

    </div>
  )
}

export default Search