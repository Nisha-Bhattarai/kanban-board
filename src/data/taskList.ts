import Task from "../models/Task";
import TaskStatus from "../models/TaskStatus";
import uuid from "react-uuid";

export const TASK_LIST: Task[] = [
  {
    id: uuid(),
    title: "Complete the task",
    description: "Implement drag and drop functionality",
    date: "Feb 26",
    status: TaskStatus.TODO,
  },
  {
    id: uuid(),
    title: "Prepare for the meeting",
    description: "Get the presentation ready",
    date: "Feb 27",
    status: TaskStatus.TODO,
  },
  {
    id: uuid(),
    title: "Go to the grocery store",
    description: "Buy some milk and eggs",
    date: "Feb 26",
    status: TaskStatus.TODO,
  },
  {
    id: uuid(),
    title: "Research on the topic",
    description: "Read the documentation",
    date: "Feb 28",
    status: TaskStatus.TODO,
  },
];

export default TASK_LIST;
