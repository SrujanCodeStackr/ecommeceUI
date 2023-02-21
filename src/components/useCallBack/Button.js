import React from 'react'

const Button = ({handleClick,text}) => {
      console.log(`incriment ${text}`)
  return (
    <button onClick={handleClick}>{`incriment ${text}`}</button>
  )
}

export default React.memo(Button)