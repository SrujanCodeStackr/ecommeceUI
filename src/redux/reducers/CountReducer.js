
const intial = 0
const countState = {
      count:intial
}

const incReducer =(state=countState,action)=>{
      switch (action.type) {
            case "INC_COUNTER":
                  return{
                        ...state,
                        count:state.count+1
                  }
                  
            default: return {...state}  
      }
}

export default incReducer