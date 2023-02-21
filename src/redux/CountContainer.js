import React from 'react'
import incAction from './actions/incAction.js'
import  { connect }  from 'react-redux'

const CountContainer = (props) => {
      
  return (
    <div>
      <div>{props.count}</div>
      <button>incriment</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    count:state.count
  }
}

const mapStateToDispatch = dispatch =>{
  return{
    incAction:dispatch({type:"INC_COUNT"})
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(CountContainer)