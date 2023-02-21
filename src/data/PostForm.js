import React, { Component } from 'react'

 class PostForm extends Component {
    state={
        userId : '',
        title : '',
        body : ''
    }

    handleChange = e => {this.setState({[e.target.name] : e.target.value })}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleReset = e => {this.setState({userId : '', title : '', body : ''})}

  render() {
    const {userId,title,body} =  this.state
    return (
    <div className='container'>
        <form onSubmit={this.handleSubmit}>
           <h2> Post Data to REST API</h2>
            <div className='form-container'> 
                <label> userID :</label> <br/>
                <input type='text' name='userId' onChange={this.handleChange} value={userId} />
                <br/><label>title:</label> <br/>
                <input type='text' name='title' onChange={this.handleChange} value={title} />
                <br/><label>body:</label> <br/>
                <input type='text' name='body' onChange={this.handleChange} value={body} />
                <div className='button'>
                    <input type='submit' name ='Submit' />
                    <input type='reset' onClick={this.handleReset} name = 'Reset' />
                </div> 
            </div>
        </form>   
    </div>
    )
  }
}
export default PostForm