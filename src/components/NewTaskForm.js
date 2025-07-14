import React, { useState, useContext} from "react";
import { TaskContext } from "../context";

function NewTaskForm({ categories, onTaskFormSubmit }) { // Add onTaskFormSubmit to props
  const [taskDetail, updateTaskDetail] = useState("");
  const [selectedCategory, updateSelectedCategory] = useState("All");

  function handleSubmit(event) {
    event.preventDefault(); 

    const newTask = {
      text: taskDetail,
      category: selectedCategory,
    };

    onTaskFormSubmit(newTask); 
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
