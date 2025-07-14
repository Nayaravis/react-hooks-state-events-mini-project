import React from "react";
import { useState } from "react";

import { TASKS } from "./data";

const TaskContext = React.createContext();

function TaskContextProvider({ children }) {
    const [tasks, updateTasks] = useState(TASKS);
    return (
        <TaskContext.Provider value={{ tasks, updateTasks}}>
            { children }
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskContextProvider};