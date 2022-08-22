import React from 'react';


const Squares = (props) => {
  const handleClick = () => {
    props.playerSelection(props.index)
  }
  return (
    <>
      <div className="squares" onClick={handleClick}>
        {props.value}
        
      </div>
    </>
  )
}
export default Squares
