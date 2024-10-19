import React from 'react';
import '../styles/Category.css';

function Category(props) {
  const categoryName = props.categoryName;
  return (
    <div className="category-card">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CCTaPnINXIfrru-Zx9j14c0th4JY-YULdQ&s" 
        alt="Category" 
      />
      <div className="category-card-text">
        <p>{categoryName}</p>
      </div>
    </div>
  );
}

export default Category;
