import React, {useContext} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TaskContextProvider } from "../context";

console.log("Here's the data you're working with");

function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <TaskContextProvider>
        <CategoryFilter />
        <NewTaskForm />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
