import React from 'react'

const MemoComp = (props) => {
      console.log("Memo Component")
  return (
    <div>
      {props.name}
    </div>
  )
}

export default React.memo(MemoComp)