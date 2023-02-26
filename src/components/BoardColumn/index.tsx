import React from "react";
import "./BoardColumn.css";
import TaskStatus from "../../models/TaskStatus";

interface BoardColumnProps {
  title: string;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, status: TaskStatus) => void;
  status: TaskStatus;
  children?: React.ReactNode;
}

const BoardColumn = ({
  title,
  onDragOver,
  onDrop,
  status,
  children,
}: BoardColumnProps) => {
  return (
    <div
      className="board-column"
      onDragOver={onDragOver}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => {
        onDrop && onDrop(e, status);
      }}
    >
      <div className={`board-column-header board-column-${status}`} />
      <div className="board-column-body">
        <div className="board-column-title">
          <h3>{title}</h3>
        </div>
        <div className="board-column-content">{children}</div>
      </div>
    </div>
  );
};

export default BoardColumn;
