import React from 'react'
import Face from '../face.png'
import { Card, Button } from 'react-bootstrap';
export default function Listing({name="defaultNAME", price="sold out", cardURL={Face}, trigger}) {
    function handleAddItem(){
        trigger({name:name, price:price, url: cardURL})
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardURL} />
            <Card.Body>
              {/* <Card.Title>{name}</Card.Title> */}
              <Card.Text style={{fontWeight: 'bold'}}>
                ${price}
              </Card.Text>
              <Button variant="dark" onClick={handleAddItem} >add to card</Button>
            </Card.Body>           
        </Card>
    )
}
