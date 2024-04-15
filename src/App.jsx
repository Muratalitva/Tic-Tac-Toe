import { useState } from 'react';
import './App.css';
import Cell from './components/Cell'

function App() {
  const [player, setPLayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [cells, setCells] = useState(Array(9).fill(null))

  const handleCellCLick = (index) => {
    if (cells[index] || winner) return
    const newCells = [...cells]
    newCells[index] = player
    setCells(newCells)
    if (checkWinner(newCells)) {
      setWinner(player)
    } else if (newCells.every(cell => cell !== null)) {
      setWinner('draw')
    } else {
      setPLayer(prev => prev === "X" ? "O" : "X")
    }
  }

  const checkWinner = (cells) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 5],
      [2, 4, 6],
    ]
    return winPatterns.some(pattern =>
      pattern.every(index => cells[index] === player)
    )
  }

  const status = () => {
    if (winner) {
      return `Победитель: ${winner}`;
    } else {
      return `Очередь: ${player}`;
    }
  };

  return (
    <div className="App">
      <div className='board'>
        {cells.map((cell, i) => (
          <Cell key={i} value={cells[i]} onClick={() => handleCellCLick(i)} />
        ))}
      </div>
      <div id='status'>{status()}</div>
    </div>
  );
}


export default App;