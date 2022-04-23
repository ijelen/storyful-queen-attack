import React from "react";

export type Position = [number, number];

function ChessBoardField(props: any) {
  return (
    <div
      id={`field${props.x}${props.y}`}
      className="box"
      onClick={() => {
        props.handleClick([props.x, props.y] as Position);
      }}
    >
      {props.white ? (
        <i
          className="chess queen icon"
          style={{ color: "white", fontSize: "2rem" }}
        ></i>
      ) : null}
      {props.black ? (
        <i
          className="chess queen icon"
          style={{ color: "black", fontSize: "2rem" }}
        ></i>
      ) : null}
    </div>
  );
}

export default ChessBoardField;
