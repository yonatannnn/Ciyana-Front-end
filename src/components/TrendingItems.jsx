import React from 'react';
import ItemCard from './item'; 
import '../styles/items.css';

function TrendingItems({ items }) {
  return (
    <div className="main-items-container">
        <h3 className="main-heading-items">Most Wanted Items By Customers</h3>
        <div style={{ display: 'flex'  , gap:'20px', overflowX: "scroll", scrollBehavior: "smooth" , flexShrink : "0"  }} className='items-scroll-container'>
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    </div>
  );
}

export default TrendingItems;
