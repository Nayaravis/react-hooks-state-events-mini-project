import React from "react";
import { useState } from "react";

import { TASKS } from "./data";

const TaskContext = React.createContext();

function TaskContextProvider({ children }) {
  const [tasks, updateTasks] = useState(TASKS); // Use a more descriptive name like setTasks

  // You might want to define an addTask function here if you want to encapsulate the logic
  const addTask = (newTask) => {
    updateTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider};