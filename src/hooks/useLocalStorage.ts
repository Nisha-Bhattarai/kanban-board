import React from "react";
import Task from "../models/Task";

export const useLocalStorage = (key: string, defaultValue: Task[]) => {
  const [state, setState] = React.useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
