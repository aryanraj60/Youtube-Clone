import React from "react";
import { categories } from "../utils/constant";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  console.log("Sidebar Rendered!");
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="rounded">
        <ul className="flex flex-row gap-2 md:flex-col h-[70px] md:h-[90vh] md:overflow-y-auto overflow-x-auto">
          {categories.map((category) => (
            <button
              className={
                category.name === selectedCategory
                  ? "category-button bg-[#FC1503]"
                  : "category-button group"
              }
              onClick={() => {
                setSelectedCategory(category.name);
              }}
              key={category.name}
            >
              <span
                className={
                  category.name === selectedCategory
                    ? "text-white mr-4"
                    : "text-red-600 mr-4 group-hover:text-white"
                }
              >
                {category.icon}
              </span>
              <span>{category.name}</span>
            </button>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
