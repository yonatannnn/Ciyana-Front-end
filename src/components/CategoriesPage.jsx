import React from "react";
import CategoryItem from "./categoryItem";
import Category from "./Category";
import '../styles/CategoriesPage.css'

const CategoriesPage = () => {
    const categories = [
        {
            id: 1,
            name: "Category 1",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Category 2",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Category 3",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Category 4",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Category 5",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Category 6",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 7,
            name: "Category 7",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 8,
            name: "Category 8",
            image: "https://via.placeholder.com/150",
        },
    ];

  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <div className="categories-page-container">
        {categories.map(category => (
            <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;