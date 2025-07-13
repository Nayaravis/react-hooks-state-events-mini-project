import React, { useState } from "react";
import { TASKS, CATEGORIES } from "./data";

const TaskContext = React.createContext();

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        CATEGORIES,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider, TaskContext };