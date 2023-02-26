import React from "react";
import Board from "./components/Board";
import BoardColumn from "./components/BoardColumn";
import Card from "./components/Card";
import TASK_LIST from "./data/taskList";
import TaskStatus from "./models/TaskStatus";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Task from "./models/Task";
import Header from "./components/Header";
import Container from "./components/Container";

const LOCAL_STORAGE_KEY = "tasks";
const DATA_TRANSFER_KEY = "task";

function App() {
  const [tasks, setTasks] = useLocalStorage(LOCAL_STORAGE_KEY, TASK_LIST);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData(DATA_TRANSFER_KEY, id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    status: TaskStatus
  ) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData(DATA_TRANSFER_KEY);
    const updatedTasks: Task[] = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task: Task) => task.id === taskId
    );
    const task = updatedTasks.splice(taskIndex, 1)[0];
    const dropIndex = updatedTasks.findIndex(
      (task: Task) => task.status === status
    );
    const newIndex = dropIndex >= 0 ? dropIndex : updatedTasks.length;
    updatedTasks.splice(newIndex, 0, { ...task, status });
    setTasks(updatedTasks);
  };

  const renderItem = (status: TaskStatus) => {
    const tasksInStatus = tasks.filter((task: Task) => task.status === status);

    return (
      <BoardColumn
        title={status}
        onDragOver={handleDragOver}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          handleDrop(e, status);
        }}
        status={status}
      >
        {tasksInStatus.map((task: Task) => (
          <Card
            key={task.id}
            task={task}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            position={task.id}
          />
        ))}
      </BoardColumn>
    );
  };

  return (
    <>
      <Header title="Kanban Board" />
      <Container>
        <Board>
          {renderItem(TaskStatus.TODO)}
          {renderItem(TaskStatus.IN_PROGRESS)}
          {renderItem(TaskStatus.DONE)}
        </Board>
      </Container>
    </>
  );
}

export default App;
