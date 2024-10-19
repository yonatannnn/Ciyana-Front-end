import React from "react";
import Category from "./Category";
import "../styles/MainCategories.css"; // Assuming you'll add your CSS here

function MainCategories() {
  return (
    <div className="main-categories-container">
      <h3 className="main-heading">Main Categories</h3>
      <div className="category-flex-container">
        <Category categoryName="Electronics" />
        <Category categoryName="Fashion" />
        <Category categoryName="Home" />
        <Category categoryName="Dress" />
      </div>
    </div>
  );
}

export default MainCategories;
