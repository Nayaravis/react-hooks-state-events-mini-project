import React, {useContext} from "react";
import Task from "./Task";
import { TaskContext } from "../context";

function TaskList() {
  const { tasks, setTasks, selectedCategory } = useContext(TaskContext);
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);
  function deleteTask(taskId) {
    const newList = [...tasks].filter(task => task.text !== taskId);
    setTasks(newList);
  }
  return (
    <div className="tasks">
      {filteredTasks.map(task => {
        return <Task key={task.text} category={task.category} text={task.text} handleDelete={() => {deleteTask(task.text)}}/>
      })}
    </div>
  );
}

export default TaskList;
