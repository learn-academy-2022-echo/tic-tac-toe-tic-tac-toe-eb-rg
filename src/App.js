import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState("❌") 
  const handleClick = (index) => {
    alert(index)    
} 
  // const [winner, setWinner] =useState(null)
  // const playerSelection = (currentClick) =>{
  //   if(squares[currentClick] === null && !winner){
  //     squares[currentClick] = currentPlayer
  //     setSquares(squares)
  //     setCurrentPlayer(currentPlayer === "❌" ? "⭕️" : "❌")
  //   }
    // winning()
  // }
  // const winningConditions = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ]
//   winningConditions.forEach(value => {
//     const [first, second, third] = value
//     if(
//       squares[first] === "❌" &&
//       squares[second] === "❌" &&
//       squares[third] === "❌"
//     ){
//       setWinner("❌")
//     } else if(
//       squares[first] === "⭕️" &&
//       squares[second] === "⭕️" &&
//       squares[third] === "⭕️"
//     ){
//       setWinner("⭕️")
//     }
//   })
// }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className= "boardgame">
      {squares.map((value, index) => {
              return(
                <Square value ={value} index={index} handleClick={handleClick}/>
              )
          })}
       
        
      </div>
    </>
  )
}

export default App