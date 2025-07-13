import React, { useContext } from "react";
import {TaskContext} from "../context";

function CategoryFilter() {
  const { CATEGORIES, selectedCategory, setSelectedCategory} = useContext(TaskContext);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;