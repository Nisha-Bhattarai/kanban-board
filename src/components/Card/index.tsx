import React from "react";
import "./Card.css";
import TaskStatus from "../../models/TaskStatus";
import Task from "../../models/Task";

interface CardProps {
  task: Task;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, status: TaskStatus) => void;
  position: string;
}

const Card = ({ task, onDragStart, onDrop, position }: CardProps) => {
  return (
    <div
      draggable={true}
      className="card"
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
        onDragStart && onDragStart(e, position);
      }}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => {
        onDrop && onDrop(e, task.status);
      }}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
      }}
    >
      <div className={`card-status card-status-${task.status}`} />
      <div className="card-header">
        <div className="card-title">{task.title}</div>
        <div className="card-date">{task.date}</div>
      </div>
      <div className="card-description">
        {task.description.substring(0, 35)}...
      </div>
    </div>
  );
};

export default Card;
