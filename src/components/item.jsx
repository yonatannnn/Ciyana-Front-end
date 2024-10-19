import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({ item }) {
return (
    <Card style={{ width: '15rem', marginBottom: '20px', background: 'linear-gradient(to top , transparent , black 50%)' , minWidth : "300px" }}>
        <Card.Img variant="top" src={item.imageUrl} alt={item.title} style={{width : "100%" , height : "260px" , objectFit: 'cover' }}/>
        <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', fontSize: '19px', color: "white" }}>{item.title}</Card.Title>
            <Card.Text style={{color: "white" , height : "70px"}}>{item.description}</Card.Text>
            <Card.Text>
                <strong>Price: ${item.price}</strong>
            </Card.Text>
            <Button variant="dark">Add to Cart</Button>
        </Card.Body>
    </Card>
);
}

export default ItemCard;
