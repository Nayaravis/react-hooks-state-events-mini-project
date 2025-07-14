import React, { useState, useContext} from "react";
import { TaskContext } from "../context";

// Accept onTaskFormSubmit as a prop again
function NewTaskForm({ categories, onTaskFormSubmit }) { 
  const [taskDetail, updateTaskDetail] = useState("");
  const [selectedCategory, updateSelectedCategory] = useState("All");

  // Consume addTask from context (will be used if onTaskFormSubmit is not provided)
  const { addTask } = useContext(TaskContext); 

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      text: taskDetail,
      category: selectedCategory,
    };

    // Prioritize the prop if it's provided
    if (onTaskFormSubmit) {
      onTaskFormSubmit(newTask);
    } else {
      // Fallback to context if the prop is not available
      addTask(newTask); 
    }

    // Clear form fields
    updateTaskDetail("");
    updateSelectedCategory("All");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          value={taskDetail} 
          onChange={(event) => {
            updateTaskDetail(event.target.value);
          }}
          type="text" 
          name="text" />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={selectedCategory}
          onChange={(event) => {
            updateSelectedCategory(event.target.value);
          }}
        >
          {categories.map(category => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;
