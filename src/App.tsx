import React, { useState, useRef } from "react";
import "./App.css";
import ChessBoardField from "./ChessBoardField";
import { Position } from "./ChessBoardField";
import { canAttack } from "./utils";

function App() {
  const [positionWhite, setPositionWhite] = useState<Position>([0, 0]);
  const [positionBlack, setPositionBlack] = useState<Position>([0, 0]);
  const whitesTurn = useRef(true);

  const getFields = () => {
    const fields = [];
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        fields.push(
          <ChessBoardField
            key={`${i}${j}`}
            x={j}
            y={i}
            handleClick={handleClick}
            white={
              positionWhite[0] === j && positionWhite[1] === i ? true : false
            }
            black={
              positionBlack[0] === j && positionBlack[1] === i ? true : false
            }
          />
        );
      }
    }
    return fields;
  };

  const handleClick = (pos: Position) => {
    if (whitesTurn.current) {
      // If white clicks on the black's field, exit early
      if (pos[0] === positionBlack[0] && pos[1] === positionBlack[1]) {
        return;
      }
      setPositionWhite(pos);
      whitesTurn.current = false;
    } else {
      // If black clicks on the white's field, exit early
      if (pos[0] === positionWhite[0] && pos[1] === positionWhite[1]) {
        return;
      }
      setPositionBlack(pos);
      whitesTurn.current = true;
    }
  };

  const UIletters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="ui container" style={{ marginTop: "3rem" }}>
      <h1 className="ui header">Option three: Queen Atack</h1>
      <p>
        Given the position of two queens on a chess board, indicate whether or
        not they are positioned so that they can attack each other.
      </p>
      <p>
        In the game of chess, a queen can attack pieces which are on the same
        row, column, or diagonal. A chessboard can be represented by an 8 by 8
        array.
      </p>
      <p>
        So if you're told the white queen is at c5 (zero-indexed at column 2,
        row 3) and the black queen at f2 (zero-indexed at column 5, row 6), then
        you'd know you've got a set-up like so:
      </p>
      <p>
        In this case, that answer would be yes, they can, because both pieces
        share a diagonal.
      </p>
      <p>
        A queen must be placed on a valid position on the board. Two queens
        cannot share the same position.
      </p>

      <div className="ui divider" style={{ marginBottom: "3rem" }}></div>
      <div className="ui grid container">
        <div className="sixteen wide column">
          {/* Chessboard */}
          {/* https://codepen.io/jeansarlon/pen/WpZNda */}
          <div className="wrapper">
            <div className="top">
              <div className="wrapper-inner">
                {UIletters.map((letter) => (
                  <div key={letter} className="box-inner">
                    {letter}
                  </div>
                ))}
              </div>
            </div>
            {getFields()}
            <div className="bottom">
              <div className="wrapper-inner">
                {UIletters.map((letter) => (
                  <div key={letter} className="box-inner">
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sixteen wide column" style={{ textAlign: "center" }}>
          {canAttack(positionWhite, positionBlack) && positionWhite[0] !== 0 ? (
            <h3>
              <i className="thumbs up outline icon blue"></i>Can attack
            </h3>
          ) : (
            <h3>
              <i className="thumbs down outline icon red"></i>Can't attack
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
