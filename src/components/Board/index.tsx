import React from "react";
import "./Board.css";

interface BoardProps {
  children: React.ReactNode;
}

const Board = ({ children }: BoardProps) => {
  return (
    <div className="container">
      <div className="board">{children}</div>
    </div>
  );
};

export default Board;
