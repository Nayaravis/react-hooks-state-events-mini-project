import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context";

function TaskList() {
  const {tasks, updateTasks} = useContext(TaskContext);

  function handleDelete(taskId) {
    const filteredList = [...tasks].filter(task => task.text !== taskId);
    updateTasks(filteredList);
  }

  return (
    <div className="tasks">
      {tasks.map(task => {
        return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export default TaskList;
