import React from 'react';
import CategoryItem from './categoryItem';
import '../styles/items.css';

function CategoryItems({ items, categoryName }) {
  return (
    <div className="main-items-container">
      <h3 className="main-heading-items" style={{ textDecoration: 'underline' }}>{categoryName}</h3>
      <div 
        className="items-scroll-container"
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
      <button style={{width : "80px" , backgroundColor : "black" , color : "white" , borderRadius : "20px"}}>More</button>
    </div>
  );
}

export default CategoryItems;
