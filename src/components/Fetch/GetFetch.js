import React, { Component } from 'react'

class GetFetch extends Component {
  state={
      data:[],
      isLoaded:null,
      error:{},
      view:false
   }
  componentDidMount(){
      const url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url)
      .then(res=>res.json())
      .then(json=>{console.log(json);this.setState({data:json,isLoaded:true})})
      .catch(err=>{console.log(err);this.setState({isLoaded:false,error:err})})
  }
  handleview=()=>{this.setState({view:!this.state.view})}
  render() {  
    const {data,isLoaded,error,view} = this.state
    return(
      <div>
        {!isLoaded?<div>Error:{error.message}</div>:<div><button onClick={this.handleview}>view</button>
        {view?<ol>{data.map(item=>(<li key={item.id}>{item.name}</li>))}</ol>:null}</div>}
      </div>
    )}      
  }
export default GetFetch