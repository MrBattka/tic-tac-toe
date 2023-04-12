import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import WinnerDesk from './components/WinnerDesk';
import { calculateWinner } from './models/winner';


const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [editMode, setEditMode] = useState(false)

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]
  const winner = calculateWinner(currentSquares)

  useEffect(() => {
    if (winner) {
      setEditMode(true)
    }
  }, [winner])

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
  
  return (
    <>
      {editMode && <WinnerDesk setCurrentMove={setCurrentMove} setEditMode={setEditMode} winner={winner} />}
      {currentMove === 9 && !winner && <WinnerDesk setCurrentMove={setCurrentMove} setEditMode={setEditMode} winner={winner} />}
      <div className="game">
        <h2>Tic Tac Toe</h2>
        <div className="game-board">
          <Board winner={winner} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
      </div>
    </>
  );
}

export default Game