import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import MenuGame from './components/MenuGame';
import WinnerDesk from './components/WinnerDesk';
import { calculateWinner } from './models/winner';


const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [winnerEditMode, setWinnerEditMode] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(true)

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]
  const winner = calculateWinner(currentSquares)

  useEffect(() => {
    if (winner) {
      setWinnerEditMode(true)
    }
  }, [winner])

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

return (
  <>
    {winnerEditMode && <WinnerDesk setIsOpenMenu={setIsOpenMenu} setCurrentMove={setCurrentMove}
      setWinnerEditMode={setWinnerEditMode} winner={winner} />}
    {currentMove === 9 && !winner && <WinnerDesk setIsOpenMenu={setIsOpenMenu} setCurrentMove={setCurrentMove}
      setWinnerEditMode={setWinnerEditMode} winner={winner} />}
    {isOpenMenu && <MenuGame setIsOpenMenu={setIsOpenMenu} currentSquares={currentSquares} />}
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