import React from 'react'

const ComponentA = () => {
      const {count,incriment}=this.props
  return (
    <div>
      <button onClick={incriment}>Incriment{count}</button>
    </div>
  )
}

export default ComponentA