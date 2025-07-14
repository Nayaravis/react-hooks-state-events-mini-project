import React, { useState, useContext } from "react";
import { TaskContext } from "../context";
import { TASKS } from "../data";

function CategoryFilter({ categories }) {
  const [selectedCategory, updateSelectedCategory] = useState("All");
  const { updateTasks } = useContext(TaskContext);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button
          className={selectedCategory === category
            ? "selected"
            : ""
          }
          onClick={() => {
            updateSelectedCategory(category);

            if (category === "All") {
              updateTasks(TASKS);
            } else {
              const filteredList = TASKS.filter(task => task.category === category);
              updateTasks(filteredList);
            }
          }}
          key={category}
           >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
