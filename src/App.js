import React, { useState } from 'react'
import Squares from './components/Squares'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState("❌") 
  const [winner, setWinner] = useState(null)

  const playerSelection = (currentClick) => {
      if(squares[currentClick] === null && !winner){
        squares[currentClick] = currentPlayer
        setSquares(squares)
        setCurrentPlayer(currentPlayer === "❌" ? "⭕️" : "❌")
      }
      winning()
} 
  
const winning = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  winningConditions.forEach(value => {
    const [first, second, third] = value
    if(
      squares[first] === "❌" &&
      squares[second] === "❌" &&
      squares[third] === "❌"
    ){
      setWinner("❌")
    }else if(
      squares[first] === "⭕️" &&
      squares[second] === "⭕️" &&
      squares[third] === "⭕️"
    ){
      setWinner("⭕️")
    }
  })

  const restartGame = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer("❌")
    setWinner(null)
  }
  
  const echoGame = squares.every(value => value !== null)
  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner && <h3>{winner} wins!</h3>}
      {(echoGame && !winner) && <h3>Echo Game</h3>}
      {(winner || echoGame) && 
      <div className='button'>
        <button onClick={restartGame}>
          Play Again
          </button></div>
      }
       
        <div className="game-board">
        {squares.map((value, index) => {
          return(
            <Squares
              value={value}
              index={index}
              key={index}
              playerSelection={playerSelection}
            />
          )
        })}
      </div>
      </>
  )
}
}

export default App