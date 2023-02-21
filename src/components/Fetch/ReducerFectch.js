import React ,{useEffect,useReducer}from 'react'
import axios from 'axios'

const intialstate ={
      loading:true,
      error:"",
      post:{}
}

const reducer = (state,action)=>{
      switch(action.type){
            case "FETCH_SUCCESS":
                  return{
                        loading:false,
                        post:action.payload,
                        error:""
                  }
            case "FETCH_ERROR":
                  return{
                        loading:false,
                        post:{},
                        error:"Something went wrong"
                  }
            default:
                  return state
      }
}

const ReducerFectch = () => {

      const [state,dispatch] = useReducer(reducer,intialstate)

      useEffect(()=>{
            const url = "https://jsonplaceholder.typicode.com/posts/1"
            axios.get(url)
            .then(response=>{
                  dispatch({type:"FETCH_SUCCESS",payload:response.data})
            })
            .catch({type:"FETCH_ERROR"})
      },[])

      
  return (
    <div>
      {state.loading?<div>Loading...</div>:state.post.title}
      {state.error?state.error:null}
    </div>
  )
}

export default ReducerFectch