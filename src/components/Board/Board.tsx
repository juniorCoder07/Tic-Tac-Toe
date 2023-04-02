import React, { useEffect, useState } from "react";
import Style from "@/components/Board/Board.module.css";
import Square from "@/components/Square/Square";
const Board = () => {
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // THIS FUNCTION IS TO CHECK WINNER
  const findWinner = () => {
    const winnerCriteria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let key of winnerCriteria) {
      const [a, b, c] = key;
      if (
        boxValue[a] !== null &&
        boxValue[a] === boxValue[b] &&
        boxValue[a] === boxValue[c]
      ) {
        return boxValue[a];
      }
    }

    return false;
  };
  // THIS FUNCTION IS  USED TO ASSIGN VALUE TO EACH SQAURE
  const handleClick = (index: number) => {
    if (boxValue[index] !== null || winner) {
      return;
    }
    const copyBoxState = [...boxValue];
    copyBoxState[index] = isXTurn ? "X" : "O";
    setBoxValue(copyBoxState);
    setIsXTurn(!isXTurn);
  };

  const winner = findWinner();

  //THIS FUNCTION IS USED TO RESET THE GAME
  const resetGame = () => {
    setBoxValue(Array(9).fill(null));
  };

  return (
    <>
      <div className={Style.conatiner}>
        <div className={Style.subConatiner}>
          <div className={Style.rows}>
            <Square
              value={boxValue[0]}
              onClick={() => {
                handleClick(0);
              }}
            />
            <Square
              value={boxValue[1]}
              onClick={() => {
                handleClick(1);
              }}
            />
            <Square
              value={boxValue[2]}
              onClick={() => {
                handleClick(2);
              }}
            />
          </div>
          <div className={Style.rows}>
            <Square
              value={boxValue[3]}
              onClick={() => {
                handleClick(3);
              }}
            />
            <Square
              value={boxValue[4]}
              onClick={() => {
                handleClick(4);
              }}
            />
            <Square
              value={boxValue[5]}
              onClick={() => {
                handleClick(5);
              }}
            />
          </div>
          <div className={Style.rows}>
            <Square
              value={boxValue[6]}
              onClick={() => {
                handleClick(6);
              }}
            />
            <Square
              value={boxValue[7]}
              onClick={() => {
                handleClick(7);
              }}
            />
            <Square
              value={boxValue[8]}
              onClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </div>
        <div className={Style.gameInfo}>
          {winner && <h1>{winner} is a Winner</h1>}
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </>
  );
};

export default Board;
