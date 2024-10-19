import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategoryItem({ item }) {
  return (
    <Card 
      style={{ 
        flexGrow: 1,  // Allows the card to grow to fill available space
        flexBasis: '150px',  // Minimum size of each card
        marginBottom: '20px', 
        background: 'linear-gradient(to top , transparent , black 50%)',
        minWidth: '100px',  // Ensures a minimum width for the card
        maxWidth: '300px',  // Optional: You can set a maximum width if needed
      }}
    >
      <Card.Img 
        variant="top" 
        src={item.imageUrl} 
        alt={item.title} 
        style={{ 
          width: '100%', 
          height: '150px', 
          objectFit: 'cover' 
        }} 
      />
      <Card.Body>
        <Card.Text 
          style={{ 
            fontWeight: 'bold', 
            fontSize: '1rem', 
            color: "white", 
            margin: "2px 0px" 
          }}
        >
          {item.title}
        </Card.Text>
        <Card.Text 
          style={{ 
            color: "white", 
            height: "40px", 
            fontSize: "0.7rem" 
          }}
        >
          {item.description}
        </Card.Text>
        <p 
          style={{ 
            fontWeight: "bold", 
            fontSize: "0.9rem" 
          }}
        >
          Price: {item.price} ETB
        </p>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
