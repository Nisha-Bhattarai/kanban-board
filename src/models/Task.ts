import TaskStatus from "./TaskStatus";

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  status: TaskStatus;
}

export default Task;
