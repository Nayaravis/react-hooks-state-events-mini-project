import React, {useContext} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TaskContextProvider } from "../context";

import { CATEGORIES } from "../data";

function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <TaskContextProvider>
        <CategoryFilter categories={CATEGORIES} />
        <NewTaskForm categories={CATEGORIES}/>
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
