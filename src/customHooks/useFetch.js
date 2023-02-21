import axios from "axios"
import { useEffect, useReducer } from "react"


const ACTIONS = {
      API_REQUEST : "API_REQUEST" ,
      FETCH_SUCCESS:"FETCH_SUCCESS",
      FETCH_ERROR : "FETCH_ERROR"
}

const intial_state = {
            data:[],
            loading:false,
            error:null
}

const reducer = (state,{type,payload})=>{
      switch (type) {
            case ACTIONS.API_REQUEST:
                  return {...state,data:[],loading:true}
            case ACTIONS.FETCH_SUCCESS:
                  console.log(payload)
                  return {...state,data:payload.data,loading:false}
            case ACTIONS.FETCH_ERROR:
                  return {...state,data:[],loading:false,error:payload}
            default:
                  return state
      }

}

const useFetch = (url) => {

      const [state,dispatch] = useReducer(reducer,intial_state)

      useEffect(()=>{

            dispatch({type:ACTIONS.API_REQUEST})
            axios.get(url).then((res)=>{
                  dispatch({type:ACTIONS.FETCH_SUCCESS,payload:res.data})
            })
            .catch((e)=>{
                  dispatch({type:ACTIONS.FETCH_ERROR,payload:e.error})
            })

      },[url])

      return state
  }

export default useFetch