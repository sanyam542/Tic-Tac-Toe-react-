import React, { useState } from "react";
import Square from "./Square";
export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      } else if (state[a]) {
      }
    }
    return false;
  }
  const isWinner = checkWinner();
  function handleClick(index) {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = x ? "X" : "O";
    setState(copyState);
    setX(!x);
  }
  return (
    <>
      {isWinner ? (
        <h1>
          {isWinner} Won the Game{" "}
          <button onClick={() => window.location.reload()}>Play Again</button>
        </h1>
      ) : (
        <div className="board-container">
          <h4>Player {x ? "X" : "O"} please move</h4>
          <div className="board-row">
            <Square value={state[0]} onClick={() => handleClick(0)} />
            <Square value={state[1]} onClick={() => handleClick(1)} />
            <Square value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={state[3]} onClick={() => handleClick(3)} />
            <Square value={state[4]} onClick={() => handleClick(4)} />
            <Square value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={state[6]} onClick={() => handleClick(6)} />
            <Square value={state[7]} onClick={() => handleClick(7)} />
            <Square value={state[8]} onClick={() => handleClick(8)} />
          </div>
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>
      )}
    </>
  );
}
