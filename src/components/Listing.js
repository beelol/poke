import React from 'react'
import Face from '../face.png'
export default function Listing({name="defaultNAME", price="sold out", cardURL={Face}, trigger}) {
    function handleAddItem(){
        trigger({name:name, price:price, url: cardURL})
    }
    return (
        <div style={{borderStyle: "solid"}}>
            {name}
           
            <img src={cardURL} style={{maxWidth: '64px'}} alt="image didn't load"></img>
            ${price}
            <button onClick={handleAddItem} >add to card</button>

        </div>
    )
}
