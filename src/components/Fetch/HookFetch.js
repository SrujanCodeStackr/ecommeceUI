import { useEffect, useState } from "react"
import React from 'react'

const HookFetch = () => {
    const [isLoaded, setIsLoaded] = useState(null)
    const [data, setData] = useState([])
    const [error,setError] =  useState({})
    const [view,setView]=useState(false)
    
    useEffect(() => {getData()}, [] )

    const loadData = async () => {
            const url = "https://jsonplaceholder.typicode.com/users"
            await fetch(url)
            .then(res => res.json())
            .then(json => {console.log(json);setIsLoaded(true);setData(json)})
            .catch(err=>{console.log(err);setIsLoaded(false);setError(err)})
    } 
    const getData = async () => {
        try {
            const url = `https://mocki.io/v1/824381e3-1a2d-444b-9177-53eeb9ac0d8e`
            const getResult = await fetch(url)
            console.log(getResult.ok)
            const response = await getResult.json()
            console.log(response)
            setData(response)
            setIsLoaded(true)
        } catch (err) {
            console.log(err)
            setError(err)
            setIsLoaded(false)
        }   
    }

    const handleView=()=>{setView(!view)}

    return(
        <div>
            {!isLoaded?<div>Error:{error.message}</div>:<div><button onClick={handleView}>view data</button>
            {view?<ol>{data.map(record =>(<li key={record.id}>{record.name}</li>))}</ol>:null}</div>}
        </div>)   
    }
export default HookFetch
