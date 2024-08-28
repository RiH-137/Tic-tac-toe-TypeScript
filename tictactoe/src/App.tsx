import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/Block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X"); // default turn is X
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningSequences.length; i++) {
      const [a, b, c] = winningSequences[i];
      if (state[a] === state[b] && state[a] === state[c] && state[a] !== null) {
        return state[a];
      }
    }

    return null;
  };

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  useEffect(() => {
    const newWinner = checkWinner();
    if (newWinner) {
      setWinner(newWinner);
    }
  }, [state]);

  const handleReset = () => {
    setState(Array(9).fill(null));
    setCurrentTurn("X");
    setWinner(null);
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>

      {/* Display the winner */}
      {winner && <p>Player {winner} wins!</p>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;