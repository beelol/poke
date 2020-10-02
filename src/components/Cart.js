import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function Cart(props) {

  const handleClose = () =>{
    props.trigger()
  } 

  return (
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Shopping cart</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>items in cart:</p>
    {console.log(props)}
    {console.log(props.items)}
    {props.items.map((item) => {
      return(
        <div style={{borderStyle: "solid", padding: "2px"}}>
          {/* <Listing key={item.id} {...{name:item.name, itemURL: item.imageUrl, price:item.nationalPokedexNumber, trigger: null}}/> */}
          <div style={{borderStyle: "solid"}}>
            {item.name}
           
            <img src={item.url} style={{maxWidth: '64px'}} alt="image didn't load"></img>
            ${item.price}
          </div>
        </div>
      )
    })}

    <br/>
    total cost: {
    (props.items.length > 0)&&
        props.items.map((item) => {return item.price}).reduce((a,b)=>{return a+b})
        
      }
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={handleClose}>Close</Button>
    <Button variant="primary">checkout</Button>
  </Modal.Footer>
</Modal.Dialog>
    );
  }

